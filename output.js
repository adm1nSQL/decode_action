//Mon Dec 09 2024 11:08:00 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var _0x2542a9 = $response.body;
var _0x39e8ce = $request.url;
const _0x3ae105 = "userclient/ClientGetUserInfo";
const _0x48591e = "/login/accountLogin";
if (typeof _0x2542a9 === "string") {
  if (_0x39e8ce.indexOf(_0x48591e) !== -1) {
    _0x2542a9 = _0x2542a9.replace(/.+/g, "{\"status\":0,\"data\":{\"accountStatus\":3,\"loginStatus\":0,\"userId\":0,\"token\":\"HLcyxCaAz8TP1SZKF6GjFg**_id6l00-Z5huMIQBYVoqDRg**\",\"authToken\":\"P6Y1v8MYJca3WSCyg9sHt8hi56olc1GZE4I6MFKhHudsMb5Lb0UvGGKz9eUKZeC9KGF8OaTG2e8wJVSugrChyw==\"},\"msg\":\"\",\"apiStatus\":0}");
    $notify("by: https://t.me/GieGie777");
  }
  var _0x8f9432;
  try {
    _0x8f9432 = JSON.parse(_0x2542a9);
    if (_0x39e8ce.indexOf(_0x3ae105) !== -1) {
      _0x8f9432.description = "此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖!!!作者TG频道 : https://t.me/GieGie777";
      _0x8f9432.nickname = "https://t.me/GieGie777";
      _0x8f9432.cover = "https://zdimg.lifeweek.com.cn/app/20230410/16810960185662892.jpg";
      _0x8f9432.timeRemaining = 999880;
      _0x2542a9 = JSON.stringify(_0x8f9432);
    }
  } catch (_0x105306) {
    console.log("JSON 解析错误: " + _0x105306.message);
  }
}
$done({
  "body": _0x2542a9
});
encode_version = "jsjiami.com.v5";