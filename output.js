//Thu Dec 12 2024 15:45:31 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var encode_version = "jsjiami.com.v5";
var _0x103da5 = $response.body;
var _0x5c470b = $request.url;
const _0x25935a = "/api/v1/user/info/";
const _0x5db93d = "/api/v1/short/play";
const _0x472441 = "/api/v1/payment/apple/pay/verify/info/";
if (typeof _0x103da5 === "string") {
  if (_0x5c470b.indexOf(_0x5db93d) !== -1) {
    _0x103da5 = _0x103da5.replace(/locked":\d/g, "locked\" :0");
  }
  var _0x249f8d;
  try {
    _0x249f8d = JSON.parse(_0x103da5);
    if (_0x5c470b.indexOf(_0x25935a) !== -1) {
      _0x249f8d.result.goldCoin = 999880;
      _0x103da5 = JSON.stringify(_0x249f8d);
    }
    if (_0x5c470b.indexOf(_0x472441) !== -1) {
      _0x249f8d = {
        message: {
          messageInfo: "H20000",
          serverTime: 1733924690381,
          code: 200
        },
        result: {
          unsign: 1,
          agreementNo: "000001899416154",
          isTrialPeriod: false,
          eventToken: null,
          expiresDate: 32493834549000,
          isVip: 1,
          skuType: null
        }
      };
      _0x103da5 = JSON.stringify(_0x249f8d);
    }
  } catch (_0x18345c) {
    console.log("JSON 解析错误: " + _0x18345c.message);
  }
}
$done({
  body: _0x103da5
});
(function (_0x4c4881, _0x23b861, _0x23c38a) {
  var _0x543520 = function () {
    var _0x4910df = true;
    return function (_0x4ed2e4, _0x49c7c8) {
      var _0x22bc98 = _0x4910df ? function () {
        if (_0x49c7c8) {
          var _0x30845e = _0x49c7c8.apply(_0x4ed2e4, arguments);
          _0x49c7c8 = null;
          return _0x30845e;
        }
      } : function () {};
      _0x4910df = false;
      return _0x22bc98;
    };
  }();
  var _0x1bbeeb = _0x543520(this, function () {
    var _0x1c39b1 = function () {
      {}
    };
    var _0x4ad2a1 = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
    if (!_0x4ad2a1.console) {
      {
        _0x4ad2a1.console = function (_0x452bb1) {
          var _0x23c38a = {};
          _0x23c38a.log = _0x452bb1;
          _0x23c38a.warn = _0x452bb1;
          _0x23c38a.debug = _0x452bb1;
          _0x23c38a.info = _0x452bb1;
          _0x23c38a.error = _0x452bb1;
          _0x23c38a.exception = _0x452bb1;
          _0x23c38a.trace = _0x452bb1;
          return _0x23c38a;
        }(_0x1c39b1);
      }
    } else {
      {
        _0x4ad2a1.console.log = _0x1c39b1;
        _0x4ad2a1.console.warn = _0x1c39b1;
        _0x4ad2a1.console.debug = _0x1c39b1;
        _0x4ad2a1.console.info = _0x1c39b1;
        _0x4ad2a1.console.error = _0x1c39b1;
        _0x4ad2a1.console.exception = _0x1c39b1;
        _0x4ad2a1.console.trace = _0x1c39b1;
      }
    }
  });
  _0x1bbeeb();
  _0x23c38a = "al";
  try {
    {
      _0x23c38a += "ert";
      _0x23b861 = encode_version;
      if (!(typeof _0x23b861 !== "undefined" && _0x23b861 === "jsjiami.com.v5")) {
        _0x4c4881[_0x23c38a]("删除版本号，js会定期弹窗，还请支持我们的工作");
      }
    }
  } catch (_0x426bae) {
    {
      _0x4c4881[_0x23c38a]("删除版本号，js会定期弹窗");
    }
  }
})(window);
encode_version = "jsjiami.com.v5";