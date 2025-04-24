//Thu Apr 24 2025 17:12:56 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var encode_version = "jsjiami.com.v5";
const _0x47c9e3 = new Env("解密任务", {
  logLevel: "silent"
});
var _0x93f46e = $response.body;
(async () => {
  try {
    {
      const _0x1b1b9b = await _0x3d2894();
      if (!_0x1b1b9b || typeof _0x1b1b9b.createCryptoJS !== "function") {
        throw new ReferenceError("Utils 或 createCryptoJS 方法未正确加载");
      }
      const _0x5c7b7e = _0x1b1b9b.createCryptoJS();
      const _0x5030c6 = _0x5c7b7e.enc.Utf8.parse("vEg@fe52!fY(de/d");
      let _0x2381b2 = _0x2032d1(_0x93f46e, _0x5030c6, _0x5c7b7e);
      let _0x5b3fd8;
      try {
        _0x5b3fd8 = JSON.parse(_0x2381b2);
      } catch (_0x432224) {
        _0x47c9e3.done({
          body: _0x93f46e
        });
        return;
      }
      if (!_0x5b3fd8 || !Array.isArray(_0x5b3fd8.data) || !_0x5b3fd8.data.some(_0x25d5ee => _0x25d5ee.rtmp)) {
        _0x47c9e3.done({
          body: _0x93f46e
        });
        return;
      }
      let _0x13506d = _0x5b3fd8.data.filter(_0x3b3d39 => _0x3b3d39.rtmp && _0x3b3d39.rtmp.startsWith("http")).map(_0x3918e0 => {
        return {
          name: _0x3918e0.name,
          rtmp: _0x3918e0.rtmp,
          image: _0x3918e0.image
        };
      });
      _0x47c9e3.log("Streams: " + JSON.stringify(_0x13506d));
      const _0x5c5545 = _0x13506d.length;
      _0x47c9e3.msg("主播统计", "总共有 " + _0x5c5545 + " 个主播可以观看", "请忽略此条通知、屏幕下拉查看已爬取de直播间");
      _0x13506d.forEach(_0x11b3ef => {
        const _0x5cdca0 = "SenPlayer://x-callback-url/play?url=" + _0x11b3ef.rtmp;
        let _0x2cf501 = _0x11b3ef.image;
        if (!_0x2cf501.endsWith(".jpg")) {
          _0x2cf501 = "http://d.musicapp.migu.cn/prod/user-service/audit-pic/20241008/86f0a39ea3ba4c458e30dfa4ca11fd11_6e4256c6-0929-4ed1-b084-35f830ffa5cf.jpg";
        }
        _0x47c9e3.msg("主播名: " + _0x11b3ef.name, "请安装SenPlayer播放器", "已安装请忽略", {
          "open-url": _0x5cdca0,
          "media-url": _0x2cf501
        });
      });
      _0x47c9e3.done({
        body: _0x93f46e
      });
    }
  } catch (_0x1350a4) {
    _0x47c9e3.logErr(_0x1350a4);
    _0x47c9e3.done({
      body: _0x93f46e
    });
  }
})();
function _0x2032d1(_0x2a1ddc, _0xa69726, _0x14e4fe) {
  var _0x2c0657 = _0x14e4fe.AES.decrypt(_0x2a1ddc, _0xa69726, {
    mode: _0x14e4fe.mode.ECB,
    padding: _0x14e4fe.pad.Pkcs7
  });
  return _0x2c0657.toString(_0x14e4fe.enc.Utf8);
}
async function _0x3d2894() {
  let _0x594598 = _0x47c9e3.getdata("Utils_Code") || "";
  if (_0x594598 && _0x594598.length) {
    console.log("✅ " + _0x47c9e3.name + ": 缓存中存在Utils代码, 跳过下载");
    eval(_0x594598);
    return creatUtils();
  }
  console.log("🚀 " + _0x47c9e3.name + ": 开始下载Utils代码");
  return new Promise(_0x32e4a8 => {
    _0x47c9e3.getScript("https://cdn.jsdelivr.net/gh/xzxxn777/Surge@main/Utils/Utils.js").then(_0x8cb8bf => {
      _0x47c9e3.setdata(_0x8cb8bf, "Utils_Code");
      eval(_0x8cb8bf);
      console.log("✅ Utils加载成功, 请继续");
      _0x32e4a8(creatUtils());
    });
  });
}
(function (_0x44368a, _0x35b6cc, _0x3915d5) {
  var _0x502aa3 = function () {
    {
      var _0x33b8a1 = true;
      return function (_0x35da51, _0x2f12c9) {
        {
          var _0x2de316 = _0x33b8a1 ? function () {
            {
              if (_0x2f12c9) {
                {
                  var _0x44eb9d = _0x2f12c9.apply(_0x35da51, arguments);
                  _0x2f12c9 = null;
                  return _0x44eb9d;
                }
              }
            }
          } : function () {};
          _0x33b8a1 = false;
          return _0x2de316;
        }
      };
    }
  }();
  var _0x32c0a6 = _0x502aa3(this, function () {
    var _0x3a1c0e = function () {};
    var _0x472cdb = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
    if (!_0x472cdb.console) {
      _0x472cdb.console = function (_0x1ff4a6) {
        var _0x3915d5 = {};
        _0x3915d5.log = _0x1ff4a6;
        _0x3915d5.warn = _0x1ff4a6;
        _0x3915d5.debug = _0x1ff4a6;
        _0x3915d5.info = _0x1ff4a6;
        _0x3915d5.error = _0x1ff4a6;
        _0x3915d5.exception = _0x1ff4a6;
        _0x3915d5.trace = _0x1ff4a6;
        return _0x3915d5;
      }(_0x3a1c0e);
    } else {
      _0x472cdb.console.log = _0x3a1c0e;
      _0x472cdb.console.warn = _0x3a1c0e;
      _0x472cdb.console.debug = _0x3a1c0e;
      _0x472cdb.console.info = _0x3a1c0e;
      _0x472cdb.console.error = _0x3a1c0e;
      _0x472cdb.console.exception = _0x3a1c0e;
      _0x472cdb.console.trace = _0x3a1c0e;
    }
  });
  _0x32c0a6();
  _0x3915d5 = "al";
  try {
    _0x3915d5 += "ert";
    _0x35b6cc = encode_version;
    if (!(typeof _0x35b6cc !== "undefined" && _0x35b6cc === "jsjiami.com.v5")) {
      _0x44368a[_0x3915d5]("删除版本号，js会定期弹窗，还请支持我们的工作");
    }
  } catch (_0x340617) {
    {
      _0x44368a[_0x3915d5]("删除版本号，js会定期弹窗");
    }
  }
})(window);
encode_version = "jsjiami.com.v5";
function Env(t, s) {
  class e {
    constructor(t) {
      this.env = t;
    }
    send(t, s = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let e = this.get;
      "POST" === s && (e = this.post);
      return new Promise((s, i) => {
        e.call(this, t, (t, e, r) => {
          t ? i(t) : s(e);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, s) {
      this.name = t;
      this.http = new e(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, s);
      this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $environment && $environment["surge-version"];
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    isShadowrocket() {
      return "undefined" != typeof $rocket;
    }
    isStash() {
      return "undefined" != typeof $environment && $environment["stash-version"];
    }
    toObj(t, s = null) {
      try {
        return JSON.parse(t);
      } catch {
        return s;
      }
    }
    toStr(t, s = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return s;
      }
    }
    getjson(t, s) {
      let e = s;
      const i = this.getdata(t);
      if (i) {
        try {
          e = JSON.parse(this.getdata(t));
        } catch {}
      }
      return e;
    }
    setjson(t, s) {
      try {
        return this.setdata(JSON.stringify(t), s);
      } catch {
        return false;
      }
    }
    getScript(t) {
      return new Promise(s => {
        this.get({
          url: t
        }, (t, e, i) => s(i));
      });
    }
    runScript(t, s) {
      return new Promise(e => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20;
        r = s && s.timeout ? s.timeout : r;
        const [o, h] = i.split("@");
        const a = {
          url: `http://${h}/v1/scripting/evaluate`,
          body: {
            script_text: t,
            mock_type: "cron",
            timeout: r
          },
          headers: {
            "X-Key": o,
            Accept: "*/*"
          }
        };
        this.post(a, (t, s, i) => e(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile);
        const s = this.path.resolve(process.cwd(), this.dataFile);
        const e = this.fs.existsSync(t);
        const i = !e && this.fs.existsSync(s);
        if (!e && !i) {
          return {};
        }
        {
          const i = e ? t : s;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile);
        const s = this.path.resolve(process.cwd(), this.dataFile);
        const e = this.fs.existsSync(t);
        const i = !e && this.fs.existsSync(s);
        const r = JSON.stringify(this.data);
        e ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(s, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, s, e) {
      const i = s.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (r = Object(r)[t], undefined === r) {
        return e;
      }
      return r;
    }
    lodash_set(t, s, e) {
      return Object(t) !== t ? t : (Array.isArray(s) || (s = s.toString().match(/[^.[\]]+/g) || []), s.slice(0, -1).reduce((t, e, i) => Object(t[e]) === t[e] ? t[e] : t[e] = Math.abs(s[i + 1]) >> 0 == +s[i + 1] ? [] : {}, t)[s[s.length - 1]] = e, t);
    }
    getdata(t) {
      let s = this.getval(t);
      if (/^@/.test(t)) {
        const [, e, i] = /^@(.*?)\.(.*?)$/.exec(t);
        const r = e ? this.getval(e) : "";
        if (r) {
          try {
            const t = JSON.parse(r);
            s = t ? this.lodash_get(t, i, "") : s;
          } catch (t) {
            s = "";
          }
        }
      }
      return s;
    }
    setdata(t, s) {
      let e = false;
      if (/^@/.test(s)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(s);
        const o = this.getval(i);
        const h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const s = JSON.parse(h);
          this.lodash_set(s, r, t);
          e = this.setval(JSON.stringify(s), i);
        } catch (s) {
          const o = {};
          this.lodash_set(o, r, t);
          e = this.setval(JSON.stringify(o), i);
        }
      } else {
        e = this.setval(t, s);
      }
      return e;
    }
    getval(t) {
      return this.isSurge() || this.isShadowrocket() || this.isLoon() || this.isStash() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, s) {
      return this.isSurge() || this.isShadowrocket() || this.isLoon() || this.isStash() ? $persistentStore.write(t, s) : this.isQuanX() ? $prefs.setValueForKey(t, s) : this.isNode() ? (this.data = this.loaddata(), this.data[s] = t, this.writedata(), true) : this.data && this.data[s] || null;
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, undefined === t.headers.Cookie && undefined === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, s = () => {}) {
      if (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isShadowrocket() || this.isLoon() || this.isStash()) {
        this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
          "X-Surge-Skip-Scripting": false
        }));
        $httpClient.get(t, (t, e, i) => {
          !t && e && (e.body = i, e.statusCode = e.status ? e.status : e.statusCode, e.status = e.statusCode);
          s(t, e, i);
        });
      } else {
        if (this.isQuanX()) {
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: false
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: e,
              statusCode: i,
              headers: r,
              body: o
            } = t;
            s(null, {
              status: e,
              statusCode: i,
              headers: r,
              body: o
            }, o);
          }, t => s(t && t.error || "UndefinedError"));
        } else {
          if (this.isNode()) {
            let e = require("iconv-lite");
            this.initGotEnv(t);
            this.got(t).on("redirect", (t, s) => {
              try {
                if (t.headers["set-cookie"]) {
                  const e = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                  e && this.ckjar.setCookieSync(e, null);
                  s.cookieJar = this.ckjar;
                }
              } catch (t) {
                this.logErr(t);
              }
            }).then(t => {
              const {
                statusCode: i,
                statusCode: r,
                headers: o,
                rawBody: h
              } = t;
              const a = e.decode(h, this.encoding);
              s(null, {
                status: i,
                statusCode: r,
                headers: o,
                rawBody: h,
                body: a
              }, a);
            }, t => {
              const {
                message: i,
                response: r
              } = t;
              s(i, r, r && e.decode(r.rawBody, this.encoding));
            });
          }
        }
      }
    }
    post(t, s = () => {}) {
      const e = t.method ? t.method.toLocaleLowerCase() : "post";
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isShadowrocket() || this.isLoon() || this.isStash()) {
        this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
          "X-Surge-Skip-Scripting": false
        }));
        $httpClient[e](t, (t, e, i) => {
          !t && e && (e.body = i, e.statusCode = e.status ? e.status : e.statusCode, e.status = e.statusCode);
          s(t, e, i);
        });
      } else {
        if (this.isQuanX()) {
          t.method = e;
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: false
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: e,
              statusCode: i,
              headers: r,
              body: o
            } = t;
            s(null, {
              status: e,
              statusCode: i,
              headers: r,
              body: o
            }, o);
          }, t => s(t && t.error || "UndefinedError"));
        } else {
          if (this.isNode()) {
            let i = require("iconv-lite");
            this.initGotEnv(t);
            const {
              url: r,
              ...o
            } = t;
            this.got[e](r, o).then(t => {
              const {
                statusCode: e,
                statusCode: r,
                headers: o,
                rawBody: h
              } = t;
              const a = i.decode(h, this.encoding);
              s(null, {
                status: e,
                statusCode: r,
                headers: o,
                rawBody: h,
                body: a
              }, a);
            }, t => {
              const {
                message: e,
                response: r
              } = t;
              s(e, r, r && i.decode(r.rawBody, this.encoding));
            });
          }
        }
      }
    }
    time(t, s = null) {
      const e = s ? new Date(s) : new Date();
      let i = {
        "M+": e.getMonth() + 1,
        "d+": e.getDate(),
        "H+": e.getHours(),
        "m+": e.getMinutes(),
        "s+": e.getSeconds(),
        "q+": Math.floor((e.getMonth() + 3) / 3),
        S: e.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (e.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let s in i) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[s] : ("00" + i[s]).substr(("" + i[s]).length)));
      return t;
    }
    queryStr(t) {
      let s = "";
      for (const e in t) {
        let i = t[e];
        null != i && "" !== i && ("object" == typeof i && (i = JSON.stringify(i)), s += `${e}=${i}&`);
      }
      s = s.substring(0, s.length - 1);
      return s;
    }
    msg(s = t, e = "", i = "", r) {
      const o = t => {
        if (!t) {
          return t;
        }
        if ("string" == typeof t) {
          return this.isLoon() ? t : this.isQuanX() ? {
            "open-url": t
          } : this.isSurge() || this.isShadowrocket() || this.isStash() ? {
            url: t
          } : undefined;
        }
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let s = t.openUrl || t.url || t["open-url"];
            let e = t.mediaUrl || t["media-url"];
            return {
              openUrl: s,
              mediaUrl: e
            };
          }
          if (this.isQuanX()) {
            let s = t["open-url"] || t.url || t.openUrl;
            let e = t["media-url"] || t.mediaUrl;
            let i = t["update-pasteboard"] || t.updatePasteboard;
            return {
              "open-url": s,
              "media-url": e,
              "update-pasteboard": i
            };
          }
          if (this.isSurge() || this.isShadowrocket() || this.isStash()) {
            let s = t.url || t.openUrl || t["open-url"];
            return {
              url: s
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isShadowrocket() || this.isLoon() || this.isStash() ? $notification.post(s, e, i, o(r)) : this.isQuanX() && $notify(s, e, i, o(r))), !this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(s);
        e && t.push(e);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.join(this.logSeparator));
    }
    logErr(t, s) {
      const e = !this.isSurge() || this.isShadowrocket() && !this.isQuanX() && !this.isLoon() && !this.isStash();
      e ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t);
    }
    wait(t) {
      return new Promise(s => setTimeout(s, t));
    }
    done(t = {}) {
      const s = new Date().getTime();
      const e = (s - this.startTime) / 1000;
      this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${e} \u79d2`);
      this.log();
      this.isSurge() || this.isShadowrocket() || this.isQuanX() || this.isLoon() || this.isStash() ? $done(t) : this.isNode() && process.exit(1);
    }
  }(t, s);
}