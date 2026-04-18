#!/usr/bin/env python3
"""Scrape delongdianqi.com (iframe target) as a fully static site."""

import os
import re
import time
import hashlib
import mimetypes
from pathlib import Path
from urllib.parse import urljoin, urlparse, unquote
from playwright.sync_api import sync_playwright
import requests

TARGET_URL = "http://www.delongdianqi.com/"
OUT_DIR = Path(__file__).parent
ASSETS_DIR = OUT_DIR / "assets"
ASSETS_DIR.mkdir(exist_ok=True)

session = requests.Session()
session.headers["User-Agent"] = (
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
    "AppleWebKit/537.36 (KHTML, like Gecko) "
    "Chrome/124.0.0.0 Safari/537.36"
)

downloaded: dict[str, str] = {}


def ext_for(url: str, content_type: str = "") -> str:
    path_ext = Path(urlparse(url).path).suffix.lower()
    if path_ext in {".js", ".css", ".png", ".jpg", ".jpeg", ".gif", ".webp",
                    ".svg", ".ico", ".woff", ".woff2", ".ttf", ".eot", ".mp4", ".mp3"}:
        return path_ext
    if content_type:
        ext = mimetypes.guess_extension(content_type.split(";")[0].strip()) or ""
        return ext
    return ".bin"


def safe_filename(url: str, content_type: str = "") -> str:
    parsed = urlparse(url)
    name = Path(unquote(parsed.path)).name
    stem = Path(name).stem if name and name != "/" else ""
    if not stem:
        stem = hashlib.md5(url.encode()).hexdigest()[:8]
    ext = ext_for(url, content_type)
    candidate = f"{stem}{ext}"
    if (ASSETS_DIR / candidate).exists():
        h = hashlib.md5(url.encode()).hexdigest()[:6]
        candidate = f"{stem}_{h}{ext}"
    return candidate


def download_asset(url: str) -> str:
    if url in downloaded:
        return downloaded[url]
    if not url.startswith("http"):
        return url
    try:
        r = session.get(url, timeout=20)
        r.raise_for_status()
        ct = r.headers.get("content-type", "")
        fname = safe_filename(url, ct)
        fpath = ASSETS_DIR / fname
        fpath.write_bytes(r.content)
        rel = f"assets/{fname}"
        downloaded[url] = rel
        print(f"  [OK] {url[:80]} -> {fname}")
        return rel
    except Exception as e:
        print(f"  [SKIP] {url[:70]}: {e}")
        downloaded[url] = url
        return url


def rewrite_html(html: str, base_url: str) -> str:
    patterns = [
        r'(src=["\'])([^"\']+)(["\'])',
        r'(href=["\'])([^"\']+)(["\'])',
        r'(url\(["\']?)([^"\')\s]+)(["\']?\))',
        r'(srcset=["\'])([^"\']+)(["\'])',
    ]
    replacements: list[tuple[str, str]] = []

    for pattern in patterns:
        for m in re.finditer(pattern, html, re.IGNORECASE):
            raw = m.group(2)
            if raw.startswith(("data:", "#", "mailto:", "javascript:")):
                continue
            if raw.startswith("//"):
                abs_url = "https:" + raw
            else:
                abs_url = urljoin(base_url, raw)
            if abs_url not in downloaded:
                download_asset(abs_url)
            local = downloaded.get(abs_url, abs_url)
            if local != abs_url:
                replacements.append((raw, local))

    replacements.sort(key=lambda x: len(x[0]), reverse=True)
    for orig, local in replacements:
        html = html.replace(f'"{orig}"', f'"{local}"')
        html = html.replace(f"'{orig}'", f"'{local}'")
        html = html.replace(f"({orig})", f"({local})")
        html = html.replace(f"('{orig}')", f"('{local}')")
        html = html.replace(f'("{orig}")', f'("{local}")')
    return html


def scrape():
    print("Launching browser...")
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            user_agent=(
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                "AppleWebKit/537.36 (KHTML, like Gecko) "
                "Chrome/124.0.0.0 Safari/537.36"
            ),
            viewport={"width": 1440, "height": 900},
        )
        page = context.new_page()

        print(f"Navigating to {TARGET_URL} ...")
        page.goto(TARGET_URL, wait_until="networkidle", timeout=60000)
        time.sleep(3)

        # detect iframe and switch to it
        frames = page.frames
        print(f"Frames found: {len(frames)}")
        for f in frames:
            print(f"  frame url: {f.url}")

        # pick the content frame (not the top frame which is the shell)
        content_frame = None
        content_url = TARGET_URL
        for f in frames:
            if f.url and f.url != TARGET_URL and f.url != "about:blank" and f.url.startswith("http"):
                content_frame = f
                content_url = f.url
                print(f"Using frame: {content_url}")
                break

        if content_frame:
            # scroll inside the frame to trigger lazy loads
            content_frame.evaluate("window.scrollTo(0, document.body.scrollHeight)")
            time.sleep(2)
            html = content_frame.content()
        else:
            page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
            time.sleep(2)
            html = page.content()
            content_url = page.url

        print(f"HTML size: {len(html)} bytes, base: {content_url}")
        browser.close()

    print("\nDownloading assets...")
    static_html = rewrite_html(html, content_url)

    out_file = OUT_DIR / "index.html"
    out_file.write_text(static_html, encoding="utf-8")
    asset_count = len(list(ASSETS_DIR.iterdir()))
    print(f"\nDone! index.html ({len(static_html)} bytes), {asset_count} assets")


if __name__ == "__main__":
    scrape()
