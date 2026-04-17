//
var randomNumber = Math.floor(Math.random() * 90000) + 10000;
var code_ma = {

  //开云体育
  kyApp: "https://www.kkxi8f.vip:6004/" + randomNumber + "?i_code=", // 开云全站app
  kyPc: "https://www.0eh9w3.vip:8001/register" + randomNumber + "/?i_code=", //开云电脑端
  kyH5: "https://www.j1umid.vip:8000/entry/register" + randomNumber + "/?i_code=", //开云移动端
  
  //九游娱乐
  jiuyouApp: "https://www.k52mp3.vip:2701/" + randomNumber + "?i_code=", // 九游全站app
  jiuyouPc: "https://www.8kh4nk.vip:4341/register" + randomNumber + "/?i_code=", //九游电脑端
  jiuyouH5: "https://www.rlt9zr.vip:9963/entry/register" + randomNumber +"/?i_code=", //九游移动端

  //乐鱼体育
  leyuApp: "https://www.r8w8dt.vip:6848/" + randomNumber + "?i_code=", // 乐鱼全站app
  leyuPc: "https://www.5eapfg.vip:9962/register" + randomNumber + "/?i_code=", //乐鱼电脑端
  leyuH5: "https://www.j20txb.vip:2701/entry/register" + randomNumber + "/?i_code=", //乐鱼移动端

  //米兰体育
  mlApp: "https://www.owu0ew.vip:6003/" + randomNumber + "?i_code=", // 米兰体育全站app
  mlPc: "https://www.5g9vk9.vip:6001/register" + randomNumber + "/?i_code=", //米兰体育电脑端
  mlH5: "https://www.ph6mhk.vip:9962/entry/register" + randomNumber + "/?i_code=", //米兰体育移动端

  //华体会体育
  hthApp: "https://www.oxe1ht.vip:9053/" + randomNumber + "?i_code=", // 华体会全站app
  hthPc: "https://www.3liwcf.vip:9163/register" + randomNumber + "/?i_code=", //华体会电脑端
  hthH5: "https://www.lqydlk.vip:9168/entry/register" + randomNumber + "/?i_code=", //华体会移动端
  
  //爱游戏体育
  ayxApp: "https://www.knpo31.vip:9972/" + randomNumber + "?i_code=", // 爱游戏全站app
  ayxPc: "https://www.ezzcod.vip:9149/register" + randomNumber + "/?i_code=", //爱游戏电脑端
  ayxH5: "https://www.kuzuks.vip:7382/entry/register" + randomNumber + "/?i_code=", //爱游戏移动端

};

function ky_code(key, code) {
  window.open(code_ma[key] + code);
}

function kaiyun_code(code) {
  if (window.innerWidth < 768) {
    window.open(code_ma["kyH5"] + code);
  } else {
    window.open(code_ma["kyPc"] + code);
  }
}

function jiuyou_code(code) {
  if (window.innerWidth < 768) {
    window.open(code_ma["jiuyouH5"] + code);
  } else {
    window.open(code_ma["jiuyouPc"] + code);
  }
}

function leyu_code(code) {
  if (window.innerWidth < 768) {
    window.open(code_ma["leyuH5"] + code);
  } else {
    window.open(code_ma["leyuPc"] + code);
  }
}

function ml_code(code) {
  if (window.innerWidth < 768) {
    window.open(code_ma["mlH5"] + code);
  } else {
    window.open(code_ma["mlPc"] + code);
  }
}

function hth_code(code) {
  if (window.innerWidth < 768) {
    window.open(code_ma["hthH5"] + code);
  } else {
    window.open(code_ma["hthPc"] + code);
  }
}

function ayx_code(code) {
  if (window.innerWidth < 768) {
    window.open(code_ma["ayxH5"] + code);
  } else {
    window.open(code_ma["ayxPc"] + code);
  }
}