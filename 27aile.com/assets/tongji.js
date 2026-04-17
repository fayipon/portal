// 加载 Google Analytics 脚本
(function() {
  var gtagScript = document.createElement('script');
  gtagScript.async = true;
  gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-RRQ6Q6J2CJ';
  document.head.appendChild(gtagScript);
})();

// 初始化和配置 Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-RRQ6Q6J2CJ');