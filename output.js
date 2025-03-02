//Sun Mar 02 2025 12:09:30 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var encode_version = "jsjiami.com.v5";
const _0x14e78e = Date.now();
var _0x131fe4 = "https://u.fast6.xyz";
var _0x601ed0 = "hahahaha" + _0x14e78e;
var _0x32dd56 = CryptoJS.HmacSHA256(_0x601ed0, _0x131fe4).toString();
fetch("/get.php?t=" + _0x14e78e + "&sign=" + _0x32dd56).then(_0x2127c1 => _0x2127c1.json()).then(_0x1979e2 => {
  _0x1979e2.forEach(_0x4743e5 => {
    var _0x2680bc = "\n        <div class=\"col-xs-3 col-md-3\">\n            <div class=\"card shadow-lg\" style=\"margin-top: 1rem;\">\n                <div class=\"card-status-start bg-green\"></div>\n                <div class=\"card-body\">\n                    <h3 class=\"card-title\">账号信息</h3>\n                    <h3 class=\"card-text\">" + _0x4743e5.email + "</h3>\n                    <p class=\"card-subtitle mb-2 text-muted\" style=\"line-height: 25px\">\n                        账号信息: " + _0x4743e5.info + "</p>\n                    <p class=\"card-subtitle mb-2 text-muted\" style=\"line-height: 25px\">\n                        上次检查: " + _0x4743e5.lastcheck + "</p>\n                    <p class=\"card-subtitle mb-2 text-muted\" style=\"line-height: 25px\">状态:\n                        <span class=\"badge bg-green\">" + _0x4743e5.status + "</span>\n                    </p>\n                    <button class=\"btn btn-primary copy\" data-clipboard-text=\"" + _0x4743e5.email + "\">复制账号</button>\n                    <button class=\"btn btn-success copy\" data-clipboard-text=\"" + _0x4743e5.password + "\">复制密码</button>\n                </div>\n            </div>\n        </div>";
    document.querySelector(".accounts").insertAdjacentHTML("beforeend", _0x2680bc);
  });
}).catch(_0x5a3a4e => console.error("获取数据时出现错误:", _0x5a3a4e));
(function (_0x4a8ba0, _0x287bc4, _0x58b348) {
  var _0x24eac2 = function () {
    {
      var _0x2f19e4 = true;
      return function (_0x1c9fba, _0x1cb77d) {
        var _0x7c3e16 = _0x2f19e4 ? function () {
          if (_0x1cb77d) {
            var _0x463b69 = _0x1cb77d.apply(_0x1c9fba, arguments);
            _0x1cb77d = null;
            return _0x463b69;
          }
        } : function () {};
        _0x2f19e4 = false;
        return _0x7c3e16;
      };
    }
  }();
  var _0x519b6f = _0x24eac2(this, function () {
    var _0x36995f = function () {};
    var _0x1625ce = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
    if (!_0x1625ce.console) {
      _0x1625ce.console = function (_0x27236a) {
        {
          var _0x58b348 = {};
          _0x58b348.log = _0x27236a;
          _0x58b348.warn = _0x27236a;
          _0x58b348.debug = _0x27236a;
          _0x58b348.info = _0x27236a;
          _0x58b348.error = _0x27236a;
          _0x58b348.exception = _0x27236a;
          _0x58b348.trace = _0x27236a;
          return _0x58b348;
        }
      }(_0x36995f);
    } else {
      _0x1625ce.console.log = _0x36995f;
      _0x1625ce.console.warn = _0x36995f;
      _0x1625ce.console.debug = _0x36995f;
      _0x1625ce.console.info = _0x36995f;
      _0x1625ce.console.error = _0x36995f;
      _0x1625ce.console.exception = _0x36995f;
      _0x1625ce.console.trace = _0x36995f;
    }
  });
  _0x519b6f();
  _0x58b348 = "al";
  try {
    _0x58b348 += "ert";
    _0x287bc4 = encode_version;
    if (!(typeof _0x287bc4 !== "undefined" && _0x287bc4 === "jsjiami.com.v5")) {
      _0x4a8ba0[_0x58b348]("鍒犻櫎版本号，js会定期弹窗，还请支持我们的工作");
    }
  } catch (_0x41edd0) {
    _0x4a8ba0[_0x58b348]("删除版本号，js会定期弹窗");
  }
})(window);
encode_version = "jsjiami.com.v5";