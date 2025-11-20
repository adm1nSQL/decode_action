//Thu Nov 20 2025 18:42:56 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
document.addEventListener("DOMContentLoaded", function () {
  const _0x23dd8d = document.getElementById("user-list"),
    _0x4d60d5 = document.getElementById("loadMore");
  let _0x11f058 = [],
    _0x2919b6 = 10;
  fetch("/proxy.php?api=get-users").then(_0x3b1b30 => _0x3b1b30.json()).then(_0x15f67c => {
    {
      console.log("获取的数据:", _0x15f67c);
      if (!_0x15f67c || !Array.isArray(_0x15f67c.users)) {
        {
          console.error("错误: data.users 不是数组!", _0x15f67c);
          return;
        }
      }
      _0x11f058 = _0x15f67c.users;
      _0x3db116(_0x11f058.slice(0, _0x2919b6));
      _0x11f058.length > _0x2919b6 && (_0x4d60d5.style.display = "block");
    }
  }).catch(_0xc9c5de => console.error("数据获取失败:", _0xc9c5de));
  function _0x3db116(_0x2563eb) {
    if (!_0x23dd8d) {
      console.error("userList 为空，请检查 HTML 代码！");
      return;
    }
    _0x23dd8d.innerHTML = "";
    _0x2563eb.forEach(_0x11acdf => {
      const _0x3a934b = document.createElement("div");
      _0x3a934b.className = "user-card";
      _0x3a934b.innerHTML = "\n                <div class=\"mb-2\"> \n                    <span class=\"card-country\">" + _0x11acdf.country + "  å…±äº«è´¦å·</span> \n                    <span class=\"badge-success\">" + _0x11acdf.status + "</span>  \n                </div> \n                <p class=\"username\">" + _0x11acdf.username + "</p>  \n                <p class=\"card-info\">更新时间: " + _0x11acdf.time + "</p>  \n                <p class=\"card-info\"><a href=\"https://mayun.us\"  target=\"_blank\" rel=\"noopener\">购买永久独享账号</a></p> \n                <button class=\"btn btn-username\" data-clipboard-text=\"" + _0x11acdf.username + "\"> å¤åˆ¶è´¦å·</button> \n                <button class=\"btn btn-password copy-password\" data-id=\"" + _0x11acdf.id + "\"> 复制密码</button> \n            ";
      _0x23dd8d.appendChild(_0x3a934b);
    });
    bindCopyPasswordEvent(document.querySelectorAll(".user-card"));
  }
  _0x4d60d5.addEventListener("click", function () {
    _0x3db116(_0x11f058);
    _0x4d60d5.style.display = "none";
  });
});
function bindCopyPasswordEvent(_0x27d08f) {
  _0x27d08f.forEach(_0x238109 => {
    {
      const _0x470aed = _0x238109.querySelector(".copy-password");
      if (_0x470aed) {
        _0x470aed.addEventListener("click", function () {
          const _0x1756dd = this.getAttribute("data-id");
          showFirstPopup(_0x1756dd);
        });
      }
    }
  });
}
function showFirstPopup(_0x41586d) {
  Swal.fire({
    "title": "新手登录教程第一步",
    "html": "<p>共享账号在哪里登录是安全的？</p><br><br>\n            <div class=\"button-container\">\n                <img src=\"/js/01a.png\"  id=\"correctButton1\" alt=\"正确链接图片\">\n                <img src=\"/js/01b.png\"  id=\"wrongButton1\" alt=\"错误链接图片\">\n            </div>\n        ",
    "showCancelButton": false,
    "showConfirmButton": false
  });
  document.getElementById("correctButton1").addEventListener("click", () => {
    Swal.close();
    showSecondPopup(_0x41586d);
  });
  document.getElementById("wrongButton1").addEventListener("click", () => {
    Swal.fire({
      "title": "å±é™©è­¦å‘Šï¼",
      "html": "共享账号不要在设置中登录！<br>会被其他用户登录账号远程锁机！",
      "icon": "error",
      "confirmButtonText": "å¥½çš„"
    });
  });
}
function showSecondPopup(_0x4a80c2) {
  Swal.fire({
    "title": "新手登录教程第二步",
    "html": "<p>登录账号时弹出 Apple ID 安全提示<br>点什么？</p>\n            <img src=\"/js/02.png\"  width=\"99%\"> <br>  \n            <p id=\"wrongButton2\">继 续</p>\n            <p id=\"correctButton2\">其他选项</p>",
    "showCancelButton": false,
    "showConfirmButton": false
  });
  document.getElementById("correctButton2").addEventListener("click", () => {
    fetch("/proxy.php?api=get-password&id=" + _0x4a80c2).then(_0x16e356 => _0x16e356.json()).then(_0x4c1bc0 => {
      _0x4c1bc0.password ? (Swal.close(), showThirdPopup(_0x4c1bc0.password)) : Swal.fire(" é”™è¯¯", _0x4c1bc0.error || "密码未正确加载", "error");
    }).catch(_0x174f47 => {
      Swal.fire(" é”™è¯¯", "è¯·æ±‚å¤±è´¥ï¼Œè¯·ç¨åŽé‡è¯•", "error");
    });
  });
  document.getElementById("wrongButton2").addEventListener("click", () => {
    Swal.fire({
      "title": "回答错误",
      "html": "点<span style=\"color: #0067ec;\"> 继续 </span>会泄露个人手机号！",
      "icon": "error",
      "confirmButtonText": "å¥½çš„"
    });
  });
}
function showThirdPopup(_0x206e79) {
  Swal.fire({
    "title": "新手登录教程第三步",
    "html": "\n            <p>点击其他选项后，然后点什么？</p><br>\n            <div style=\"position: relative;\">\n                <img src=\"/js/03.jpg\"  width=\"99%\">\n            </div>\n        ",
    "showCancelButton": true,
    "confirmButtonText": "升级账户安全",
    "cancelButtonText": "不升级",
    "focusConfirm": false
  }).then(_0x5433e8 => {
    {
      if (_0x5433e8.isConfirmed) Swal.fire({
        "title": "回答错误",
        "html": "<span style=\"color: #0067ec;\">升级账户安全 </span>会泄露个人手机号！",
        "icon": "error",
        "confirmButtonText": "å¥½çš„"
      });else _0x5433e8.dismiss === Swal.DismissReason.cancel && copyToClipboard(_0x206e79);
    }
  });
}
function copyToClipboard(_0x48aafa) {
  navigator.clipboard && window.isSecureContext ? navigator.clipboard.writeText(_0x48aafa).then(() => {
    Swal.fire("æ­£ç¡®", "密码已复制成功", "success");
  }).catch(() => {
    Swal.fire({
      "icon": "error",
      "title": "é”™è¯¯",
      "html": "å½“å‰æµè§ˆå™¨ä¸æ”¯æŒå¤åˆ¶å¯†ç <br>è¯·åˆ‡æ¢ç”µè„‘æˆ–è‹¹æžœSafariæµè§ˆå™¨"
    });
  }) : Swal.fire({
    "icon": "error",
    "title": "é”™è¯¯",
    "html": "当前浏览器不支持复制密码<br>请切换电脑或苹果Safari浏览器"
  });
}