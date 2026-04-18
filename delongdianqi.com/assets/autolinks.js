let i_code = '27692676'
let ayx_i_code = '2960006'
let jy_i_code = '48335040'

let i_codes = {
    kyPc1: '/register/?i_code=' + i_code,
    kyPc2: '/register/?i_code=' + i_code,
    kyPc3: '/register/?i_code=' + i_code,
    kyH51: '/entry/register/?i_code=' + i_code,
    kyH52: '/entry/register/?i_code=' + i_code,
    kyH53: '/entry/register/?i_code=' + i_code,
    kyApp1: '/?i_code=' + i_code,
    kyApp2: '/?i_code=' + i_code,
    kyApp3: '/?i_code=' + i_code,

    ayxPc1: '/register/?i_code=' + ayx_i_code,
    ayxPc2: '/register/?i_code=' + ayx_i_code,
    ayxPc3: '/register/?i_code=' + ayx_i_code,
    ayxPc4: '/register/?i_code=' + ayx_i_code,
    ayxH51: '/entry/register/?i_code=' + ayx_i_code,
    ayxH52: '/entry/register/?i_code=' + ayx_i_code,
    ayxH53: '/entry/register/?i_code=' + ayx_i_code,
    ayxApp1: '/?i_code=' + ayx_i_code,
    ayxApp2: '/?i_code=' + ayx_i_code,
    ayxApp3: '/?i_code=' + ayx_i_code,

    jyPc1: '/register/?i_code=' + jy_i_code,
    jyH51: '/entry/register/?i_code=' + jy_i_code,
    jyAppYl1: '/?i_code=' + jy_i_code,
    jyAppQp1: '/?i_code=' + jy_i_code,
    jyAppDz1: '/?i_code=' + jy_i_code,

};
let base_url = {
     kyPc1: 'http://www.baidu.com',
    kyPc2: 'http://www.baidu.com',
    kyPc3: 'http://www.baidu.com',
    kyH51: 'http://www.baidu.com',
    kyH52: 'http://www.baidu.com',
    kyH53: 'http://www.baidu.com',
    kyApp1: 'http://www.baidu.com',
    kyApp2: 'http://www.baidu.com',
    kyApp3: 'http://www.baidu.com',
    ayxPc1: 'http://www.baidu.com',
    ayxPc2: 'http://www.baidu.com',
    ayxPc3: 'http://www.baidu.com',
    ayxPc4: 'http://www.baidu.com',
    ayxH51: 'http://www.baidu.com',
    ayxH52: 'http://www.baidu.com',
    ayxH53: 'http://www.baidu.com',
    ayxApp1: 'http://www.baidu.com',
    ayxApp2: 'http://www.baidu.com',
    ayxApp3: 'http://www.baidu.com',
    jyPc1: 'http://www.baidu.com',
    jyH51: 'http://www.baidu.com',
    jyAppYl1: 'http://www.baidu.com',
    jyAppQp1: 'http://www.baidu.com',
    jyAppDz1: 'http://www.baidu.com',
}

// Đây là liên kết dự phòng, Tốt nhất nên đổi sang link dự phòng
let backup_link = {
    kyPc1: 'http://www.baidu.com',
    kyPc2: 'http://www.baidu.com',
    kyPc3: 'http://www.baidu.com',
    kyH51: 'http://www.baidu.com',
    kyH52: 'http://www.baidu.com',
    kyH53: 'http://www.baidu.com',
    kyApp1: 'http://www.baidu.com',
    kyApp2: 'http://www.baidu.com',
    kyApp3: 'http://www.baidu.com',
    ayxPc1: 'http://www.baidu.com',
    ayxPc2: 'http://www.baidu.com',
    ayxPc3: 'http://www.baidu.com',
    ayxPc4: 'http://www.baidu.com',
    ayxH51: 'http://www.baidu.com',
    ayxH52: 'http://www.baidu.com',
    ayxH53: 'http://www.baidu.com',
    ayxApp1: 'http://www.baidu.com',
    ayxApp2: 'http://www.baidu.com',
    ayxApp3: 'http://www.baidu.com',
    jyPc1: 'https://www.fcnb8y.com',
    jyH51: 'https://www.fcrghw.com',
    jyAppYl1: 'https://www.396jiuyou.com',
    jyAppQp1: 'https://www.jiuyou108.com',
    jyAppDz1: 'https://www.jiuyou195.com',
}
let xmlhttp;
function loadData(url, cfunc) {
  if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
  } else {
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange = cfunc;
  xmlhttp.open("GET", url, false);
  xmlhttp.send();
}
function readFile(url) {
  loadData(url, function () {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        let data = JSON.parse(xmlhttp.responseText)
        let arr  = Object.keys(data)
        if (arr.length === 24){
        for (let key in data) {
            base_url[key] = data[key];
            }
        }else{
        for (let key in backup_link) {
            base_url[key] = backup_link[key];
            }
        }
    }else{
         for (let key in backup_link) {
            base_url[key] = backup_link[key];
            }
    }
  })
}
readFile("alternat_links.json")


let link = {
    contact:'', //  客服链接
}
for (let key in base_url) {
    link[key] = base_url[key] + i_codes[key];
}

function getDevice() {
    if (/(Android|IOS|iPhone|iPad|iPod|Windows Phone|webOS|BlackBerry)/i.test(navigator.userAgent)) {
        return 'mobile'
    } else {
        return 'pc'
    }
}

const device = getDevice();

function register(key) {
    if (key === 'yabo') {
        window.open(device == 'pc' ? link.yaboPc : link.yaboH5);
    } else if (key === 'ayx1') {
        window.open(device == 'pc' ? link.ayxPc1: link.ayxH51);
    } else if (key === 'ayx2') {
        window.open(device == 'pc' ? link.ayxPc2: link.ayxH52);
    } else if (key === 'ayx3') {
        window.open(device == 'pc' ? link.ayxPc3: link.ayxH53);
    } else if (key === 'ayx4') {
        window.open(device == 'pc' ? link.ayxPc4: link.ayxH54);
    } else if( key === 'ly') {
        window.open(device == 'pc' ? link.lyPc : link.lyH5);
    } else if( key === 'hth') {
        window.open(device == 'pc' ? link.hthPc : link.hthxH5);
    } else if( key === 'ky1') {
        window.open(device == 'pc' ? link.kyPc1 : link.kyH51);
    } else if( key === 'ky2') {
        window.open(device == 'pc' ? link.kyPc2 : link.kyH52);
    } else if( key === 'ky3') {
        window.open(device == 'pc' ? link.kyPc3 : link.kyH53);
    } else if( key === 'ky4') {
        window.open(device == 'pc' ? link.kyPc4 : link.kyH54);
    } else if( key === 'jy1') {
        window.open(device == 'pc' ? link.jyPc1 : link.jyH51);
    } else if( key === 'contact') {
        window.open(device == 'pc' ? link.contact : link.contact);
    } else {
        window.open(link[key])
    }
}
console.log(link);
function contact () {
    window.open(link.contact);
}

