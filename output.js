//Mon Mar 10 2025 09:59:03 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(() => {
  var _0x1cfe7d = {
    671: (_0x1cc936, _0x46fe00, _0x81f5e1) => {
      var _0x522139 = {
        "./locales/auth/zh-CN.js": [7087, 299],
        "./locales/zh-CN.js": [8036, 580]
      };
      function _0xbe3674(_0x234f99) {
        if (!_0x81f5e1.o(_0x522139, _0x234f99)) {
          return Promise.resolve().then(() => {
            var _0x2b985c = new Error("Cannot find module '" + _0x234f99 + "'");
            throw _0x2b985c.code = "MODULE_NOT_FOUND", _0x2b985c;
          });
        }
        var _0x2ff7fe = _0x522139[_0x234f99];
        var _0x39e13d = _0x2ff7fe[0];
        return _0x81f5e1.e(_0x2ff7fe[1]).then(() => _0x81f5e1(_0x39e13d));
      }
      _0xbe3674.keys = () => Object.keys(_0x522139);
      _0xbe3674.id = 671;
      _0x1cc936.exports = _0xbe3674;
    },
    679: (_0x5d5f81, _0x5e2634, _0x3a9c84) => {
      var _0x1ee6a7 = {
        "./locales/auth/ja-JP.js": [4233, 329],
        "./locales/ja-JP.js": [174, 234]
      };
      function _0xae3b5c(_0x3841b6) {
        if (!_0x3a9c84.o(_0x1ee6a7, _0x3841b6)) {
          return Promise.resolve().then(() => {
            var _0x5818c8 = new Error("Cannot find module '" + _0x3841b6 + "'");
            throw _0x5818c8.code = "MODULE_NOT_FOUND", _0x5818c8;
          });
        }
        var _0x45ca1e = _0x1ee6a7[_0x3841b6];
        var _0x5aa4f4 = _0x45ca1e[0];
        return _0x3a9c84.e(_0x45ca1e[1]).then(() => _0x3a9c84(_0x5aa4f4));
      }
      _0xae3b5c.keys = () => Object.keys(_0x1ee6a7);
      _0xae3b5c.id = 679;
      _0x5d5f81.exports = _0xae3b5c;
    },
    865: (_0x1c18a6, _0x53dfa5, _0x43b7a3) => {
      "use strict";

      _0x43b7a3(7681);
      _0x43b7a3(8497);
      _0x43b7a3(9658);
      _0x43b7a3(7996);
      _0x43b7a3(4147);
      _0x43b7a3(9693);
      var _0x296148 = _0x43b7a3(5883);
      _0x43b7a3(6042);
      _0x43b7a3(2180);
      var _0x33d00f = _0x43b7a3(1464);
      var _0x3fc0e4 = _0x43b7a3(1681);
      var _0x6d9d22 = {
        key: 0,
        class: "static-layout"
      };
      var _0x43b4ed = {
        class: "site-logo"
      };
      var _0x1c2ffd = {
        class: "top-toolbar"
      };
      var _0x466918 = {
        key: 1,
        class: "auth-toolbar"
      };
      var _0x385345 = {
        class: "top-toolbar"
      };
      function _0x2e8e08(_0x4886a6, _0x4b3753, _0x2be5da, _0x5a81e7, _0x55aa56, _0x622ae1) {
        var _0x2ad605 = (0, _0x33d00f.g2)("SlideTabsNav");
        var _0x5c95e5 = (0, _0x33d00f.g2)("ThemeToggle");
        var _0x4f623c = (0, _0x33d00f.g2)("LanguageSelector");
        var _0x339554 = (0, _0x33d00f.g2)("UserAvatar");
        var _0x49f049 = (0, _0x33d00f.g2)("router-view");
        var _0x1b3505 = (0, _0x33d00f.g2)("Toast");
        var _0x31d71d = (0, _0x33d00f.g2)("BackToTop");
        var _0x1a1510 = (0, _0x33d00f.g2)("CustomContextMenu");
        var _0x3ab725 = (0, _0x33d00f.g2)("IconDefinitions");
        (0, _0x33d00f.uX)();
        return (0, _0x33d00f.CE)("div", null, [_0x4886a6.$route.meta.requiresAuth ? ((0, _0x33d00f.uX)(), (0, _0x33d00f.CE)("div", _0x6d9d22, [(0, _0x33d00f.Lk)("div", _0x43b4ed, (0, _0x3fc0e4.v_)(_0x5a81e7.siteConfig.siteName), 1), (0, _0x33d00f.bF)(_0x2ad605), (0, _0x33d00f.Lk)("div", _0x1c2ffd, [(0, _0x33d00f.bF)(_0x5c95e5), (0, _0x33d00f.bF)(_0x4f623c), (0, _0x33d00f.bF)(_0x339554, {
          username: _0x5a81e7.username,
          avatarUrl: _0x5a81e7.avatarUrl
        }, null, 8, ["username", "avatarUrl"])])])) : (0, _0x33d00f.Q3)("", true), !_0x4886a6.$route.meta.requiresAuth && _0x4886a6.$route.path.includes("/auth") ? ((0, _0x33d00f.uX)(), (0, _0x33d00f.CE)("div", _0x466918, [(0, _0x33d00f.Lk)("div", _0x385345, [(0, _0x33d00f.bF)(_0x5c95e5), (0, _0x33d00f.bF)(_0x4f623c)])])) : (0, _0x33d00f.Q3)("", true), (0, _0x33d00f.bF)(_0x49f049, null, {
          default: (0, _0x33d00f.k6)(function (_0x354cd9) {
            var _0xe7336e = _0x354cd9.Component;
            var _0x46db0f = _0x354cd9.route;
            return [(0, _0x33d00f.bF)(_0x296148.eB, {
              name: "page-transition",
              mode: "out-in",
              appear: ""
            }, {
              default: (0, _0x33d00f.k6)(function () {
                return [_0xe7336e ? ((0, _0x33d00f.uX)(), (0, _0x33d00f.Wv)((0, _0x33d00f.$y)(_0xe7336e), {
                  key: _0x46db0f.path
                })) : (0, _0x33d00f.Q3)("", true)];
              }),
              _: 2
            }, 1024)];
          }),
          _: 1
        }), (0, _0x33d00f.bF)(_0x1b3505), (0, _0x33d00f.bF)(_0x31d71d), (0, _0x33d00f.bF)(_0x1a1510), (0, _0x33d00f.bF)(_0x3ab725)]);
      }
      _0x43b7a3(3980);
      var _0x25ab0c = _0x43b7a3(5456);
      var _0x11772b = _0x43b7a3(225);
      var _0x4fd9ee = _0x43b7a3(9508);
      var _0x5d9676 = _0x43b7a3(607);
      var _0x231545 = _0x43b7a3(3702);
      var _0x22f3a2 = _0x43b7a3(5949);
      var _0x196b2a = _0x43b7a3(4089);
      _0x43b7a3(6022);
      _0x43b7a3(5416);
      _0x43b7a3(3969);
      _0x43b7a3(1795);
      _0x43b7a3(5026);
      var _0x41bade = _0x43b7a3(4136);
      var _0x303ab9 = null;
      var _0xfb1369 = function () {
        var _0x3ce89c = (0, _0x41bade.checkLoginStatus)();
        if (null === _0x303ab9 || _0x303ab9 !== _0x3ce89c) {
          _0x303ab9 = _0x3ce89c;
          try {
            setTimeout((0, _0x196b2a.A)((0, _0x22f3a2.A)().mark(function _0x14001e() {
              var _0x2efa6f;
              var _0x16cb88;
              return (0, _0x22f3a2.A)().wrap(function (_0x5339e5) {
                while (1) {
                  switch (_0x5339e5.prev = _0x5339e5.next) {
                    case 0:
                      _0x5339e5.prev = 0;
                      _0x5339e5.next = 3;
                      return Promise.resolve().then(_0x43b7a3.bind(_0x43b7a3, 8648));
                    case 3:
                      _0x2efa6f = _0x5339e5.sent;
                      _0x16cb88 = _0x2efa6f.reloadMessages;
                      _0x5339e5.next = 7;
                      return _0x16cb88();
                    case 7:
                      _0x5339e5.next = 11;
                      break;
                    case 9:
                      _0x5339e5.prev = 9;
                      _0x5339e5.t0 = _0x5339e5.catch(0);
                    case 11:
                    case "end":
                      return _0x5339e5.stop();
                  }
                }
              }, _0x14001e, null, [[0, 9]]);
            })), 10);
          } catch (_0x257787) {}
        }
        return _0x3ce89c;
      };
      var _0x5cc1b9 = ["data-id", "onClick", "onMouseenter", "onMouseleave"];
      var _0x300d7f = {
        class: "toast-icon"
      };
      var _0x1f0b4e = ["xlink:href"];
      var _0x3e5ca6 = {
        class: "toast-content"
      };
      var _0x481d23 = {
        class: "toast-close"
      };
      var _0x4bbce8 = ["onClick"];
      var _0x26d4ff = ["data-id"];
      function _0xb9ca57(_0x4c6fea, _0x4203e9, _0x2bf36f, _0xab2ba3, _0x196b1e, _0x521bfe) {
        (0, _0x33d00f.uX)();
        return (0, _0x33d00f.Wv)(_0x296148.F, {
          tag: "div",
          name: "toast-list",
          class: "toast-container"
        }, {
          default: (0, _0x33d00f.k6)(function () {
            return [((0, _0x33d00f.uX)(true), (0, _0x33d00f.CE)(_0x33d00f.FK, null, (0, _0x33d00f.pI)(_0xab2ba3.toasts, function (_0x4d344f) {
              (0, _0x33d00f.uX)();
              return (0, _0x33d00f.CE)("div", {
                key: _0x4d344f.id,
                class: (0, _0x3fc0e4.C4)(["toast", ["toast-".concat(_0x4d344f.type), {
                  "toast-show": _0x4d344f.show
                }]]),
                "data-id": _0x4d344f.id,
                onClick: function (_0x272ef1) {
                  return _0xab2ba3.removeToast(_0x4d344f.id);
                },
                onMouseenter: function (_0x531076) {
                  return _0xab2ba3.pauseToastTimer(_0x4d344f.id);
                },
                onMouseleave: function (_0x18309d) {
                  return _0xab2ba3.resumeToastTimer(_0x4d344f.id);
                }
              }, [(0, _0x33d00f.Lk)("div", _0x300d7f, [((0, _0x33d00f.uX)(), (0, _0x33d00f.CE)("svg", {
                class: (0, _0x3fc0e4.C4)(["icon", _0xab2ba3.getIconClass(_0x4d344f.type)])
              }, [(0, _0x33d00f.Lk)("use", {
                "xlink:href": _0xab2ba3.getIconPath(_0x4d344f.type)
              }, null, 8, _0x1f0b4e)], 2))]), (0, _0x33d00f.Lk)("div", _0x3e5ca6, (0, _0x3fc0e4.v_)(_0x4d344f.message), 1), (0, _0x33d00f.Lk)("div", _0x481d23, [(0, _0x33d00f.Lk)("button", {
                type: "button",
                class: "close-btn",
                onClick: (0, _0x296148.D$)(function (_0x1aff5c) {
                  return _0xab2ba3.removeToast(_0x4d344f.id);
                }, ["stop"])
              }, " × ", 8, _0x4bbce8)]), (0, _0x33d00f.Lk)("div", {
                class: "toast-progress-bar",
                "data-id": _0x4d344f.id,
                style: (0, _0x3fc0e4.Tr)({
                  animationDuration: "".concat(_0x4d344f.duration, "ms")
                })
              }, null, 12, _0x26d4ff)], 42, _0x5cc1b9);
            }), 128))];
          }),
          _: 1
        });
      }
      var _0x2bd573 = _0x43b7a3(7906);
      const _0x27414b = {
        name: "ToastNotification",
        setup: function () {
          var _0x302a86 = (0, _0x2bd573.d)();
          var _0x374efb = _0x302a86.toasts;
          var _0x21241a = _0x302a86.removeToast;
          var _0x2435e3 = _0x302a86.pauseToastTimer;
          var _0xc7ca7b = _0x302a86.resumeToastTimer;
          var _0x3cbba1 = function (_0x4e18d7) {
            return "icon-".concat(_0x4e18d7);
          };
          var _0x50fc04 = function (_0x540538) {
            switch (_0x540538) {
              case "success":
                return "#icon-check-circle";
              case "error":
                return "#icon-error-circle";
              case "warning":
                return "#icon-warning";
              default:
                return "#icon-info-circle";
            }
          };
          return {
            toasts: _0x374efb,
            removeToast: _0x21241a,
            pauseToastTimer: _0x2435e3,
            resumeToastTimer: _0xc7ca7b,
            getIconClass: _0x3cbba1,
            getIconPath: _0x50fc04
          };
        }
      };
      var _0x2b5bf5 = _0x43b7a3(1456);
      const _0x2b9a13 = (0, _0x2b5bf5.A)(_0x27414b, [["render", _0xb9ca57], ["__scopeId", "data-v-395eb2cd"]]);
      const _0x5a5137 = _0x2b9a13;
      var _0xbbe5d1 = {
        xmlns: "http://www.w3.org/2000/svg",
        style: {
          position: "absolute",
          width: "0",
          height: "0",
          overflow: "hidden"
        },
        version: "1.1"
      };
      function _0x2cbb62(_0x3d0d06, _0x47de29, _0x5d7299, _0x41997f, _0x2ccaed, _0x56d4de) {
        (0, _0x33d00f.uX)();
        return (0, _0x33d00f.CE)("svg", _0xbbe5d1, _0x47de29[0] || (_0x47de29[0] = [(0, _0x33d00f.Fv)("<defs><symbol id=\"icon-check-circle\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"10\"></circle><path d=\"M9 12l2 2 4-4\"></path></symbol><symbol id=\"icon-error-circle\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"15\" y1=\"9\" x2=\"9\" y2=\"15\"></line><line x1=\"9\" y1=\"9\" x2=\"15\" y2=\"15\"></line></symbol><symbol id=\"icon-warning\" viewBox=\"0 0 24 24\"><path d=\"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z\"></path><line x1=\"12\" y1=\"9\" x2=\"12\" y2=\"13\"></line><line x1=\"12\" y1=\"17\" x2=\"12.01\" y2=\"17\"></line></symbol><symbol id=\"icon-info-circle\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"12\" y1=\"16\" x2=\"12\" y2=\"12\"></line><line x1=\"12\" y1=\"8\" x2=\"12.01\" y2=\"8\"></line></symbol></defs>", 1)]));
      }
      const _0x134804 = {
        name: "IconDefinitions"
      };
      const _0x52dfaa = (0, _0x2b5bf5.A)(_0x134804, [["render", _0x2cbb62]]);
      const _0x53d254 = _0x52dfaa;
      _0x43b7a3(6027);
      _0x43b7a3(9533);
      var _0x59274a = {
        class: "slide-tabs-container"
      };
      var _0x3a0ea1 = {
        class: "slide-tabs-wrapper"
      };
      var _0x3d286e = {
        class: "slide-tabs-nav",
        ref: "tabsNav"
      };
      var _0x3e5c04 = {
        class: "nav-icon"
      };
      var _0x549ac1 = {
        class: "nav-text"
      };
      var _0xd88458 = {
        class: "indicator-container"
      };
      function _0x3533b8(_0x3ab9fd, _0x55e30d, _0x275599, _0x192f61, _0x5294de, _0x4bcc94) {
        var _0x585b36 = (0, _0x33d00f.g2)("router-link");
        (0, _0x33d00f.uX)();
        return (0, _0x33d00f.CE)("div", _0x59274a, [(0, _0x33d00f.Lk)("div", _0x3a0ea1, [(0, _0x33d00f.Lk)("div", _0x3d286e, [((0, _0x33d00f.uX)(true), (0, _0x33d00f.CE)(_0x33d00f.FK, null, (0, _0x33d00f.pI)(_0x192f61.navItems, function (_0x34b921, _0xb89d8e) {
          (0, _0x33d00f.uX)();
          return (0, _0x33d00f.Wv)(_0x585b36, {
            key: "".concat(_0x34b921.name, "-").concat(_0x192f61.languageKey),
            to: _0x34b921.path,
            class: (0, _0x3fc0e4.C4)(["nav-item", {
              active: _0x192f61.currentRoute === _0x34b921.name || _0x192f61.route && _0x192f61.route.meta && _0x192f61.route.meta.activeNav === _0x34b921.name
            }]),
            onClick: (0, _0x296148.D$)(function (_0x32a8f8) {
              return _0x192f61.navigateTo(_0x34b921, _0xb89d8e);
            }, ["prevent"])
          }, {
            default: (0, _0x33d00f.k6)(function () {
              return [(0, _0x33d00f.Lk)("div", _0x3e5c04, [((0, _0x33d00f.uX)(), (0, _0x33d00f.Wv)((0, _0x33d00f.$y)(_0x192f61.getIcon(_0x34b921.icon))))]), (0, _0x33d00f.Lk)("span", _0x549ac1, (0, _0x3fc0e4.v_)(_0x3ab9fd.$t("menu.".concat(_0x34b921.i18nKey))), 1)];
            }),
            _: 2
          }, 1032, ["to", "class", "onClick"]);
        }), 128)), (0, _0x33d00f.Lk)("div", _0xd88458, [(0, _0x33d00f.Lk)("div", {
          class: "slider-indicator",
          style: (0, _0x3fc0e4.Tr)(_0x192f61.sliderStyle)
        }, null, 4)])], 512)])]);
      }
      _0x43b7a3(1893);
      _0x43b7a3(3428);
      _0x43b7a3(9295);
      _0x43b7a3(1203);
      _0x43b7a3(4886);
      _0x43b7a3(8543);
      _0x43b7a3(6883);
      var _0x55250b = _0x43b7a3(8603);
      function _0x4c207d(_0x3e2e0d, _0x4ef7cc, _0x2c6f80, _0x11500e, _0x58038b, _0x2d0304) {
        var _0x35d07c = (0, _0x33d00f.g2)("TablerIconDashboard");
        (0, _0x33d00f.uX)();
        return (0, _0x33d00f.Wv)(_0x35d07c, {
          size: _0x2c6f80.size,
          "stroke-width": _0x2c6f80.strokeWidth,
          class: (0, _0x3fc0e4.C4)(_0x2c6f80.customClass)
        }, null, 8, ["size", "stroke-width", "class"]);
      }
      _0x43b7a3(785);
      var _0x395779 = _0x43b7a3(6152);
      const _0x5c9544 = {
        name: "IconDashboard",
        components: {
          TablerIconDashboard: _0x395779.c3
        },
        props: {
          size: {
            type: [Number, String],
            default: 24
          },
          strokeWidth: {
            type: [Number, String],
            default: 2
          },
          customClass: {
            type: String,
            default: ""
          }
        }
      };
      const _0x342da1 = (0, _0x2b5bf5.A)(_0x5c9544, [["render", _0x4c207d]]);
      const _0x2a3f00 = _0x342da1;
      function _0x563b21(_0x2dcd54, _0x4158cd, _0x51d442, _0x16bb0f, _0x2086a1, _0x22f828) {
        var _0x4a64e4 = (0, _0x33d00f.g2)("TablerIconShop");
        (0, _0x33d00f.uX)();
        return (0, _0x33d00f.Wv)(_0x4a64e4, {
          size: _0x51d442.size,
          "stroke-width": _0x51d442.strokeWidth,
          class: (0, _0x3fc0e4.C4)(_0x51d442.customClass)
        }, null, 8, ["size", "stroke-width", "class"]);
      }
      const _0x497ca3 = {
        name: "IconShop",
        components: {
          TablerIconShop: _0x395779.uO
        },
        props: {
          size: {
            type: [Number, String],
            default: 24
          },
          strokeWidth: {
            type: [Number, String],
            default: 2
          },
          customClass: {
            type: String,
            default: ""
          }
        }
      };
      const _0x2bc03f = (0, _0x2b5bf5.A)(_0x497ca3, [["render", _0x563b21]]);
      const _0x377134 = _0x2bc03f;
      function _0x5135b6(_0x486178, _0x37a2ad, _0x34bcbf, _0x4bd713, _0x4ca7b8, _0x5535e3) {
        var _0x155468 = (0, _0x33d00f.g2)("TablerIconInvite");
        (0, _0x33d00f.uX)();
        return (0, _0x33d00f.Wv)(_0x155468, {
          size: _0x34bcbf.size,
          "stroke-width": _0x34bcbf.strokeWidth,
          class: (0, _0x3fc0e4.C4)(_0x34bcbf.customClass)
        }, null, 8, ["size", "stroke-width", "class"]);
      }
      const _0xad9a6b = {
        name: "IconInvite",
        components: {
          TablerIconInvite: _0x395779.Tn
        },
        props: {
          size: {
            type: [Number, String],
            default: 24
          },
          strokeWidth: {
            type: [Number, String],
            default: 2
          },
          customClass: {
            type: String,
            default: ""
          }
        }
      };
      const _0x4670be = (0, _0x2b5bf5.A)(_0xad9a6b, [["render", _0x5135b6]]);
      const _0x43e3f2 = _0x4670be;
      function _0x170e29(_0x3d2a5c, _0x3e3839, _0xf8ce73, _0x1bdf7e, _0x506e8f, _0x4860cf) {
        var _0x4164df = (0, _0x33d00f.g2)("TablerIconMore");
        (0, _0x33d00f.uX)();
        return (0, _0x33d00f.Wv)(_0x4164df, {
          size: _0xf8ce73.size,
          "stroke-width": _0xf8ce73.strokeWidth,
          class: (0, _0x3fc0e4.C4)(_0xf8ce73.customClass)
        }, null, 8, ["size", "stroke-width", "class"]);
      }
      const _0x2c608a = {
        name: "IconMore",
        components: {
          TablerIconMore: _0x395779.xc
        },
        props: {
          size: {
            type: [Number, String],
            default: 24
          },
          strokeWidth: {
            type: [Number, String],
            default: 2
          },
          customClass: {
            type: String,
            default: ""
          }
        }
      };
      const _0x7e9aa5 = (0, _0x2b5bf5.A)(_0x2c608a, [["render", _0x170e29]]);
      const _0x1c4244 = _0x7e9aa5;
      const _0x555ff3 = {
        name: "SlideTabsNav",
        setup: function () {
          var _0x5942b9 = (0, _0x5d9676.lq)();
          var _0x42c266 = (0, _0x5d9676.rd)();
          var _0x433b89 = (0, _0x55250b.s9)();
          _0x433b89.t;
          var _0x580ee8 = (0, _0x25ab0c.KR)(null);
          var _0x555580 = (0, _0x25ab0c.KR)("");
          var _0x1b631f = (0, _0x25ab0c.KR)(0);
          var _0x26c5c7 = (0, _0x25ab0c.KR)(0);
          var _0x103045 = (0, _0x25ab0c.KR)(false);
          var _0x181b2c = (0, _0x25ab0c.KR)(false);
          var _0x5269fb = (0, _0x25ab0c.KR)(false);
          var _0xaca85 = (0, _0x25ab0c.KR)(Date.now());
          var _0x1ce7cc = (0, _0x25ab0c.Kh)({
            width: 0,
            transform: "translateX(0px)",
            opacity: 0,
            transition: "none"
          });
          var _0x24b340 = (0, _0x33d00f.EW)(function () {
            return {
              width: "".concat(_0x1ce7cc.width, "px"),
              transform: _0x1ce7cc.transform,
              opacity: _0x1ce7cc.opacity,
              transition: _0x1ce7cc.transition
            };
          });
          var _0x351ca3 = [{
            title: "Dashboard",
            path: "/dashboard",
            name: "Dashboard",
            icon: "IconDashboard",
            i18nKey: "dashboard"
          }, {
            title: "Shop",
            path: "/shop",
            name: "Shop",
            icon: "IconShop",
            i18nKey: "shop"
          }, {
            title: "Invite",
            path: "/invite",
            name: "Invite",
            icon: "IconInvite",
            i18nKey: "invite"
          }, {
            title: "More",
            path: "/more",
            name: "More",
            icon: "IconMore",
            i18nKey: "more"
          }];
          var _0x548c30 = function (_0x5133c3) {
            switch (_0x5133c3) {
              case "IconDashboard":
                return _0x2a3f00;
              case "IconShop":
                return _0x377134;
              case "IconInvite":
                return _0x43e3f2;
              case "IconMore":
                return _0x1c4244;
              default:
                return null;
            }
          };
          var _0x1ea15b = [];
          var _0xf9f7db = function (_0x42822f, _0x417e5d) {
            _0x5269fb.value && (_0x26c5c7.value = _0x1b631f.value, _0x1b631f.value = _0x417e5d, _0x46489a(_0x417e5d, true), (0, _0x33d00f.dY)(function () {
              _0x5269fb.value && _0x42c266.push(_0x42822f.path);
            }));
          };
          var _0x46489a = function (_0x11d4bb) {
            var _0x4c4a03 = !(arguments.length > 1 && undefined !== arguments[1]) || arguments[1];
            if (_0x5269fb.value && !(_0x11d4bb < 0) && _0x580ee8.value) {
              _0x1ea15b.forEach(function (_0x3efb92) {
                return clearTimeout(_0x3efb92);
              });
              _0x1ea15b = [];
              try {
                (0, _0x33d00f.dY)(function () {
                  if (_0x5269fb.value && _0x580ee8.value) {
                    var _0x3d5431 = _0x580ee8.value.querySelectorAll(".nav-item");
                    if (_0x3d5431.length > 0 && _0x11d4bb >= 0 && _0x11d4bb < _0x3d5431.length) {
                      var _0x3004ef = _0x3d5431[_0x11d4bb];
                      var _0x5bc703 = _0x3004ef.offsetWidth;
                      var _0x2425bf = _0x3004ef.offsetLeft;
                      _0x1ce7cc.transition = _0x4c4a03 ? "all 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)" : "none";
                      _0x1ce7cc.width = _0x5bc703;
                      _0x1ce7cc.transform = "translateX(".concat(_0x2425bf, "px)");
                      _0x1ce7cc.opacity = 1;
                      _0x103045.value = true;
                    }
                  }
                });
              } catch (_0x20d0d9) {
                console.warn("SlideTabsNav: Error updating slider position", _0x20d0d9);
              }
            }
          };
          var _0x1363c1 = function (_0x3ebfaa) {
            if (_0x5942b9 && _0x5942b9.meta && _0x5942b9.meta.activeNav) {
              var _0x2b8137 = _0x5942b9.meta.activeNav;
              var _0x198b49 = _0x351ca3.findIndex(function (_0x29fdb1) {
                return _0x29fdb1.name === _0x2b8137;
              });
              if (-1 !== _0x198b49) {
                return _0x198b49;
              }
            }
            var _0x4f4e4b = _0x351ca3.findIndex(function (_0xd9e331) {
              return _0xd9e331.name === _0x3ebfaa;
            });
            return -1 !== _0x4f4e4b ? _0x4f4e4b : 0;
          };
          var _0x2cc3e4 = function () {
            _0x5269fb.value && (_0x46489a(_0x1b631f.value, false), _0x1ac1f7(function () {
              _0x46489a(_0x1b631f.value, true);
            }, 200));
          };
          var _0x4b33cf = null;
          var _0x238149 = function () {
            if (_0x5269fb.value && !document.hidden && _0x1b631f.value >= 0 && (_0x46489a(_0x1b631f.value, false), _0x5269fb.value)) {
              var _0x4a59f1 = setTimeout(function () {
                _0x5269fb.value && _0x46489a(_0x1b631f.value, true);
              }, 200);
              _0x1ea15b.push(_0x4a59f1);
            }
          };
          var _0x1ac1f7 = function (_0x482691, _0x259749) {
            var _0x126ee8 = setTimeout(function () {
              _0x5269fb.value && _0x482691();
            }, _0x259749);
            _0x1ea15b.push(_0x126ee8);
            return _0x126ee8;
          };
          var _0x4263ae = null;
          var _0x5b6b71 = function () {
            if (_0x5269fb.value && _0x580ee8.value) {
              try {
                var _0x5eecfe;
                var _0x2b9e57 = _0x580ee8.value.querySelectorAll(".nav-item");
                if (_0x5942b9 && _0x5942b9.meta && _0x5942b9.meta.activeNav) {
                  var _0x19d063 = _0x5942b9.meta.activeNav;
                  var _0x4c2366 = _0x351ca3.findIndex(function (_0x51ea8f) {
                    return _0x51ea8f.name === _0x19d063;
                  });
                  _0x5eecfe = -1 !== _0x4c2366 ? _0x4c2366 : _0x1363c1(_0x5942b9.name);
                } else {
                  _0x5eecfe = _0x1363c1(_0x5942b9.name);
                }
                if (_0x2b9e57.length > 0 && _0x5eecfe >= 0 && _0x5eecfe < _0x2b9e57.length) {
                  var _0x3028d0 = _0x2b9e57[_0x5eecfe];
                  var _0x5012d7 = _0x3028d0.offsetWidth;
                  var _0x51c458 = _0x3028d0.offsetLeft;
                  var _0x507436 = _0x1ce7cc.transform;
                  var _0x30cd4a = "translateX(".concat(_0x51c458, "px)");
                  _0x507436 === _0x30cd4a && _0x1ce7cc.width === _0x5012d7 || _0x46489a(_0x5eecfe, true);
                }
              } catch (_0x19dc0d) {
                console.warn("SlideTabsNav: Error checking slider position", _0x19dc0d);
              }
            }
          };
          var _0x228914 = _0x376252(function () {
            _0x5269fb.value && _0x5b6b71();
          }, 200);
          var _0x18e912 = function () {
            _0xaca85.value = Date.now();
            _0x1ce7cc.transition = "width 0.6s cubic-bezier(0.25, 0.1, 0.25, 1), transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 0.3s ease";
            _0x1ce7cc.opacity = 0.3;
            [50, 200, 400, 600].forEach(function (_0x823fb4) {
              _0x1ac1f7(function () {
                _0x5269fb.value && _0x580ee8.value && (_0x823fb4 >= 400 && (_0x1ce7cc.opacity = 1), _0x46489a(_0x1b631f.value, true));
              }, _0x823fb4);
            });
          };
          (0, _0x33d00f.sV)(function () {
            _0x5269fb.value = true;
            document.addEventListener("visibilitychange", _0x238149);
            window.addEventListener("languageChanged", _0x18e912);
            _0x181b2c.value = false;
            _0x4b33cf = (0, _0x33d00f.wB)(function () {
              return _0x5942b9.name;
            }, function (_0x541f7b) {
              if (_0x5269fb.value && _0x541f7b) {
                var _0x1db015;
                if (_0x555580.value = _0x541f7b, _0x5942b9.meta && _0x5942b9.meta.activeNav) {
                  var _0x54a2ea = _0x5942b9.meta.activeNav;
                  var _0xec6374 = _0x351ca3.findIndex(function (_0x3b0231) {
                    return _0x3b0231.name === _0x54a2ea;
                  });
                  _0x1db015 = -1 !== _0xec6374 ? _0xec6374 : _0x1363c1(_0x541f7b);
                } else {
                  _0x1db015 = _0x1363c1(_0x541f7b);
                }
                _0x26c5c7.value = _0x1b631f.value;
                _0x1b631f.value = _0x1db015;
                _0x46489a(_0x1db015, true);
              }
            }, {
              immediate: true
            });
            (0, _0x33d00f.dY)(function () {
              if (_0x5269fb.value) {
                var _0x242b66 = _0x1363c1(_0x5942b9.name);
                _0x46489a(_0x242b66, false);
                _0x1ac1f7(function () {
                  _0x181b2c.value = true;
                }, 300);
              }
            });
            [100, 300, 500, 1000].forEach(function (_0x2399c6) {
              _0x1ac1f7(function () {
                if (_0x580ee8.value) {
                  var _0x21caac = _0x1363c1(_0x5942b9.name);
                  _0x46489a(_0x21caac, _0x2399c6 > 300);
                }
              }, _0x2399c6);
            });
            _0x1ac1f7(function () {
              if (_0x5269fb.value && _0x580ee8.value) {
                var _0x1f892c = _0x1363c1(_0x5942b9.name);
                _0x46489a(_0x1f892c, false);
                _0x1ac1f7(function () {
                  _0x46489a(_0x1f892c, true);
                }, 50);
              }
            }, 1500);
            window.addEventListener("load", function () {
              if (_0x5269fb.value && _0x580ee8.value) {
                var _0x2932cc = _0x1363c1(_0x5942b9.name);
                _0x46489a(_0x2932cc, false);
                _0x1ac1f7(function () {
                  _0x46489a(_0x2932cc, true);
                }, 100);
              }
            });
            var _0x9098a5 = _0x376252(_0x2cc3e4, 100);
            window.addEventListener("resize", _0x9098a5);
            window.addEventListener("scroll", _0x228914, {
              passive: true
            });
            _0x4263ae = setInterval(function () {
              _0x5269fb.value && _0x5b6b71();
            }, 3000);
            _0x1ac1f7(function () {
              _0x2cc3e4();
            }, 1500);
            window.addEventListener("popstate", function () {
              _0x5269fb.value && _0x580ee8.value && _0x1ac1f7(function () {
                var _0x51ee6d = _0x1363c1(_0x5942b9.name);
                _0x46489a(_0x51ee6d, false);
                _0x1ac1f7(function () {
                  _0x46489a(_0x51ee6d, true);
                }, 50);
              }, 0);
            });
          });
          (0, _0x33d00f.hi)(function () {
            _0x4b33cf && (_0x4b33cf(), _0x4b33cf = null);
            _0x4263ae && (clearInterval(_0x4263ae), _0x4263ae = null);
            window.removeEventListener("popstate", function () {});
          });
          (0, _0x33d00f.xo)(function () {
            _0x5269fb.value = false;
            _0x1ea15b.forEach(function (_0x11d9db) {
              return clearTimeout(_0x11d9db);
            });
            _0x1ea15b = [];
            document.removeEventListener("visibilitychange", _0x238149);
            window.removeEventListener("languageChanged", _0x18e912);
            window.removeEventListener("resize", _0x2cc3e4);
            window.removeEventListener("scroll", _0x228914);
            _0x580ee8.value = null;
          });
          return {
            navItems: _0x351ca3,
            tabsNav: _0x580ee8,
            currentRoute: _0x555580,
            navigateTo: _0xf9f7db,
            sliderStyle: _0x24b340,
            getIcon: _0x548c30,
            languageKey: _0xaca85,
            route: _0x5942b9
          };
        }
      };
      function _0x376252(_0x4e3630, _0x41d696) {
        var _0x7f3c4 = null;
        return function () {
          for (var _0x53212c = this, _0x5c9248 = arguments.length, _0x2f5635 = new Array(_0x5c9248), _0x34eb64 = 0; _0x34eb64 < _0x5c9248; _0x34eb64++) {
            _0x2f5635[_0x34eb64] = arguments[_0x34eb64];
          }
          _0x7f3c4 && clearTimeout(_0x7f3c4);
          _0x7f3c4 = setTimeout(function () {
            _0x4e3630.apply(_0x53212c, _0x2f5635);
          }, _0x41d696);
        };
      }
      const _0x5c1a98 = (0, _0x2b5bf5.A)(_0x555ff3, [["render", _0x3533b8], ["__scopeId", "data-v-ed9b032a"]]);
      const _0x56e7ad = _0x5c1a98;
      var _0x2f6a9f = _0x43b7a3(2246);
      var _0x409da7 = _0x43b7a3(8626);
      var _0x3963e9 = {
        class: "user-avatar-container",
        ref: "avatarContainer"
      };
      var _0xa9dc62 = ["src"];
      var _0x2f3757 = {
        key: 1,
        class: "avatar-placeholder"
      };
      var _0x2e0c8e = {
        key: 0,
        class: "dropdown-menu"
      };
      function _0x3e0705(_0x21d3c7, _0xd4db05, _0x3425fa, _0x25a16b, _0x5c567a, _0x3ce445) {
        var _0x38e9bf = (0, _0x33d00f.g2)("IconUser");
        var _0x3cc922 = (0, _0x33d00f.g2)("IconLogout");
        (0, _0x33d00f.uX)();
        return (0, _0x33d00f.CE)("div", _0x3963e9, [(0, _0x33d00f.Lk)("div", {
          class: "avatar-wrapper",
          onClick: _0xd4db05[0] || (_0xd4db05[0] = function () {
            return _0x25a16b.toggleDropdown && _0x25a16b.toggleDropdown.apply(_0x25a16b, arguments);
          })
        }, [_0x3425fa.avatarUrl ? ((0, _0x33d00f.uX)(), (0, _0x33d00f.CE)("img", {
          key: 0,
          src: _0x3425fa.avatarUrl,
          alt: "User Avatar",
          class: "avatar-image"
        }, null, 8, _0xa9dc62)) : ((0, _0x33d00f.uX)(), (0, _0x33d00f.CE)("div", _0x2f3757, [(0, _0x33d00f.bF)(_0x38e9bf, {
          class: "user-icon"
        })]))]), (0, _0x33d00f.bF)(_0x296148.eB, {
          name: "fade"
        }, {
          default: (0, _0x33d00f.k6)(function () {
            return [_0x25a16b.isDropdownOpen ? ((0, _0x33d00f.uX)(), (0, _0x33d00f.CE)("div", _0x2e0c8e, [(0, _0x33d00f.Lk)("div", {
              class: "menu-item",
              onClick: _0xd4db05[1] || (_0xd4db05[1] = function (_0x37a9df) {
                return _0x25a16b.navigateTo("/profile");
              })
            }, [(0, _0x33d00f.bF)(_0x38e9bf, {
              class: "menu-icon"
            }), (0, _0x33d00f.Lk)("span", null, (0, _0x3fc0e4.v_)(_0x21d3c7.$t("common.userCenter")), 1)]), _0xd4db05[3] || (_0xd4db05[3] = (0, _0x33d00f.Lk)("div", {
              class: "divider"
            }, null, -1)), (0, _0x33d00f.Lk)("div", {
              class: "menu-item",
              onClick: _0xd4db05[2] || (_0xd4db05[2] = function () {
                return _0x25a16b.logout && _0x25a16b.logout.apply(_0x25a16b, arguments);
              })
            }, [(0, _0x33d00f.bF)(_0x3cc922, {
              class: "menu-icon"
            }), (0, _0x33d00f.Lk)("span", null, (0, _0x3fc0e4.v_)(_0x21d3c7.$t("common.logoutText")), 1)])])) : (0, _0x33d00f.Q3)("", true)];
          }),
          _: 1
        })], 512);
      }
      function _0x47e760(_0x1eebfc, _0xfc7ac, _0x2d5e82, _0x183bf7, _0x246bea, _0x1ad187) {
        var _0x569bfa = (0, _0x33d00f.g2)("TablerIconUser");
        (0, _0x33d00f.uX)();
        return (0, _0x33d00f.Wv)(_0x569bfa, {
          size: _0x2d5e82.size,
          "stroke-width": _0x2d5e82.strokeWidth,
          class: (0, _0x3fc0e4.C4)(_0x2d5e82.customClass)
        }, null, 8, ["size", "stroke-width", "class"]);
      }
      const _0xe1269c = {
        name: "IconUser",
        components: {
          TablerIconUser: _0x395779.vg
        },
        props: {
          size: {
            type: [Number, String],
            default: 24
          },
          strokeWidth: {
            type: [Number, String],
            default: 2
          },
          customClass: {
            type: String,
            default: ""
          }
        }
      };
      const _0x21b184 = (0, _0x2b5bf5.A)(_0xe1269c, [["render", _0x47e760]]);
      const _0x2c6d14 = _0x21b184;
      function _0x2531dd(_0x1732de, _0x1c799a, _0x393393, _0x5e756d, _0x4dfae6, _0x57c7b2) {
        var _0x56cf15 = (0, _0x33d00f.g2)("TablerIconLogout");
        (0, _0x33d00f.uX)();
        return (0, _0x33d00f.Wv)(_0x56cf15, {
          size: _0x393393.size,
          "stroke-width": _0x393393.strokeWidth,
          class: (0, _0x3fc0e4.C4)(_0x393393.customClass)
        }, null, 8, ["size", "stroke-width", "class"]);
      }
      const _0x8ccfd6 = {
        name: "IconLogout",
        components: {
          TablerIconLogout: _0x395779.Ew
        },
        props: {
          size: {
            type: [Number, String],
            default: 24
          },
          strokeWidth: {
            type: [Number, String],
            default: 2
          },
          customClass: {
            type: String,
            default: ""
          }
        }
      };
      const _0x2b5ad4 = (0, _0x2b5bf5.A)(_0x8ccfd6, [["render", _0x2531dd]]);
      const _0x86821d = _0x2b5ad4;
      const _0x673ddd = {
        name: "UserAvatar",
        components: {
          IconUser: _0x2c6d14,
          IconLogout: _0x86821d
        },
        props: {
          username: {
            type: String,
            default: ""
          },
          avatarUrl: {
            type: String,
            default: ""
          }
        },
        setup: function (_0x670d31) {
          var _0x5c5c04 = (0, _0x5d9676.rd)();
          (0, _0x11772b.Pj)();
          var _0x2fc382 = (0, _0x55250b.s9)();
          var _0x49eb4d = _0x2fc382.t;
          var _0x2ae984 = (0, _0x2bd573.d)();
          var _0x452291 = _0x2ae984.showToast;
          var _0x18565f = (0, _0x25ab0c.KR)(false);
          var _0x522fe8 = (0, _0x25ab0c.KR)(null);
          var _0x5e14a8 = function () {
            _0x18565f.value = !_0x18565f.value;
          };
          var _0x4ff028 = function (_0x200cff) {
            _0x18565f.value = false;
            _0x5c5c04.push(_0x200cff);
          };
          var _0x13d417 = function () {
            var _0x3f3938 = (0, _0x196b2a.A)((0, _0x22f3a2.A)().mark(function _0x4383a5() {
              return (0, _0x22f3a2.A)().wrap(function (_0x7295b8) {
                while (1) {
                  switch (_0x7295b8.prev = _0x7295b8.next) {
                    case 0:
                      try {
                        localStorage.removeItem("token");
                        _0x18565f.value = false;
                        _0x452291(_0x49eb4d("auth.logoutSuccess"), "success", 3000);
                        setTimeout(function () {
                          _0x5c5c04.push("/login");
                        }, 500);
                      } catch (_0x192551) {
                        console.error("退出登录失败:", _0x192551);
                        _0x452291(_0x49eb4d("auth.logoutFailed"), "error");
                      }
                    case 1:
                    case "end":
                      return _0x7295b8.stop();
                  }
                }
              }, _0x4383a5);
            }));
            return function () {
              return _0x3f3938.apply(this, arguments);
            };
          }();
          var _0x22a03d = function (_0x472c1a) {
            _0x522fe8.value && !_0x522fe8.value.contains(_0x472c1a.target) && (_0x18565f.value = false);
          };
          (0, _0x33d00f.sV)(function () {
            document.addEventListener("click", _0x22a03d);
          });
          (0, _0x33d00f.hi)(function () {
            document.removeEventListener("click", _0x22a03d);
          });
          return {
            isDropdownOpen: _0x18565f,
            toggleDropdown: _0x5e14a8,
            navigateTo: _0x4ff028,
            logout: _0x13d417,
            avatarContainer: _0x522fe8
          };
        }
      };
      const _0x5f2b16 = (0, _0x2b5bf5.A)(_0x673ddd, [["render", _0x3e0705], ["__scopeId", "data-v-bf0f5034"]]);
      const _0x3a0fc3 = _0x5f2b16;
      function _0x55b36d(_0x3e9897, _0x44503f, _0x9ca551, _0x2e9f02, _0x4cd4c9, _0x2865a4) {
        var _0x5928a5 = (0, _0x33d00f.g2)("IconChevronsUp");
        (0, _0x33d00f.uX)();
        return (0, _0x33d00f.Wv)(_0x296148.eB, {
          name: "fade"
        }, {
          default: (0, _0x33d00f.k6)(function () {
            return [(0, _0x33d00f.bo)((0, _0x33d00f.Lk)("div", {
              class: (0, _0x3fc0e4.C4)(["back-to-top", {
                dark: _0x2e9f02.isDarkTheme
              }]),
              onClick: _0x44503f[0] || (_0x44503f[0] = function () {
                return _0x2e9f02.scrollToTop && _0x2e9f02.scrollToTop.apply(_0x2e9f02, arguments);
              })
            }, [(0, _0x33d00f.bF)(_0x5928a5, {
              size: 20,
              "stroke-width": 1.5,
              class: "icon"
            })], 2), [[_0x296148.aG, _0x2e9f02.visible]])];
          }),
          _: 1
        });
      }
      var _0x70224b = _0x43b7a3(8955);
      const _0xbfd6f3 = {
        name: "BackToTop",
        components: {
          IconChevronsUp: _0x70224b.P1P
        },
        setup: function () {
          var _0x566867 = (0, _0x25ab0c.KR)(false);
          var _0x1ff208 = (0, _0x11772b.Pj)();
          var _0x9cf1cc = (0, _0x25ab0c.KR)("dark" === _0x1ff208.getters.currentTheme);
          var _0x5047ea = function () {
            _0x566867.value = window.scrollY > 100;
          };
          var _0x306c41 = function () {
            var _0x10bfa8 = window.pageYOffset;
            window.scrollTo(0, 0.8 * _0x10bfa8);
            var _0x42c413 = window.pageYOffset;
            var _0x5ae8b3 = setInterval(function () {
              if (_0x42c413 <= 0) {
                clearInterval(_0x5ae8b3);
                return void window.scrollTo(0, 0);
              }
              var _0x192bc = Math.max(0.3 * _0x42c413, 10);
              _0x42c413 -= _0x192bc;
              window.scrollTo(0, _0x42c413);
            }, 15);
          };
          (0, _0x33d00f.sV)(function () {
            window.addEventListener("scroll", _0x5047ea, {
              passive: true
            });
            _0x5047ea();
            _0x1ff208.watch(function (_0x14d64a) {
              return _0x14d64a.theme;
            }, function (_0x4b3b7b) {
              _0x9cf1cc.value = "dark" === _0x4b3b7b;
            });
          });
          (0, _0x33d00f.hi)(function () {
            window.removeEventListener("scroll", _0x5047ea);
          });
          return {
            visible: _0x566867,
            scrollToTop: _0x306c41,
            isDarkTheme: _0x9cf1cc
          };
        }
      };
      const _0x43b41a = (0, _0x2b5bf5.A)(_0xbfd6f3, [["render", _0x55b36d], ["__scopeId", "data-v-c1b0e3f0"]]);
      const _0x3b0d1a = _0x43b41a;
      var _0x29b92e = {
        class: "menu-items"
      };
      var _0x11f611 = {
        class: "menu-text"
      };
      var _0x3bfa19 = {
        class: "menu-text"
      };
      var _0x34b7f6 = {
        class: "menu-text"
      };
      function _0x28144d(_0x2a7465, _0x534695, _0x44fe0c, _0x5a198b, _0xc8ba2b, _0x29fa6b) {
        (0, _0x33d00f.uX)();
        return (0, _0x33d00f.Wv)(_0x296148.eB, {
          name: "context-menu"
        }, {
          default: (0, _0x33d00f.k6)(function () {
            return [_0x5a198b.show ? ((0, _0x33d00f.uX)(), (0, _0x33d00f.CE)("div", {
              key: 0,
              class: "custom-context-menu",
              style: (0, _0x3fc0e4.Tr)({
                top: _0x5a198b.position.y + "px",
                left: _0x5a198b.position.x + "px"
              }),
              onClick: _0x534695[3] || (_0x534695[3] = (0, _0x296148.D$)(function () {}, ["stop"]))
            }, [(0, _0x33d00f.Lk)("div", _0x29b92e, [(0, _0x33d00f.Lk)("div", {
              class: "menu-item",
              onClick: _0x534695[0] || (_0x534695[0] = function () {
                return _0x5a198b.handleRefresh && _0x5a198b.handleRefresh.apply(_0x5a198b, arguments);
              })
            }, [_0x534695[4] || (_0x534695[4] = (0, _0x33d00f.Lk)("div", {
              class: "menu-icon"
            }, [(0, _0x33d00f.Lk)("svg", {
              viewBox: "0 0 24 24",
              width: "18",
              height: "18",
              stroke: "currentColor",
              "stroke-width": "2",
              fill: "none",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            }, [(0, _0x33d00f.Lk)("path", {
              d: "M23 4v6h-6"
            }), (0, _0x33d00f.Lk)("path", {
              d: "M1 20v-6h6"
            }), (0, _0x33d00f.Lk)("path", {
              d: "M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"
            })])], -1)), (0, _0x33d00f.Lk)("div", _0x11f611, (0, _0x3fc0e4.v_)(_0x2a7465.$t("contextMenu.refresh")), 1)]), (0, _0x33d00f.Lk)("div", {
              class: "menu-item",
              onClick: _0x534695[1] || (_0x534695[1] = function () {
                return _0x5a198b.handleBack && _0x5a198b.handleBack.apply(_0x5a198b, arguments);
              })
            }, [_0x534695[5] || (_0x534695[5] = (0, _0x33d00f.Lk)("div", {
              class: "menu-icon"
            }, [(0, _0x33d00f.Lk)("svg", {
              viewBox: "0 0 24 24",
              width: "18",
              height: "18",
              stroke: "currentColor",
              "stroke-width": "2",
              fill: "none",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            }, [(0, _0x33d00f.Lk)("path", {
              d: "M19 12H5"
            }), (0, _0x33d00f.Lk)("path", {
              d: "M12 19l-7-7 7-7"
            })])], -1)), (0, _0x33d00f.Lk)("div", _0x3bfa19, (0, _0x3fc0e4.v_)(_0x2a7465.$t("contextMenu.back")), 1)]), (0, _0x33d00f.Lk)("div", {
              class: "menu-item",
              onClick: _0x534695[2] || (_0x534695[2] = function () {
                return _0x5a198b.handleForward && _0x5a198b.handleForward.apply(_0x5a198b, arguments);
              })
            }, [_0x534695[6] || (_0x534695[6] = (0, _0x33d00f.Lk)("div", {
              class: "menu-icon"
            }, [(0, _0x33d00f.Lk)("svg", {
              viewBox: "0 0 24 24",
              width: "18",
              height: "18",
              stroke: "currentColor",
              "stroke-width": "2",
              fill: "none",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            }, [(0, _0x33d00f.Lk)("path", {
              d: "M5 12h14"
            }), (0, _0x33d00f.Lk)("path", {
              d: "M12 5l7 7-7 7"
            })])], -1)), (0, _0x33d00f.Lk)("div", _0x34b7f6, (0, _0x3fc0e4.v_)(_0x2a7465.$t("contextMenu.forward")), 1)])])], 4)) : (0, _0x33d00f.Q3)("", true)];
          }),
          _: 1
        });
      }
      const _0x49f4ac = {
        name: "CustomContextMenu",
        setup: function () {
          var _0x1e2200 = (0, _0x25ab0c.KR)(false);
          var _0x30f176 = (0, _0x25ab0c.KR)({
            x: 0,
            y: 0
          });
          var _0x1a59e8 = (0, _0x5d9676.rd)();
          var _0x2461ef = (0, _0x55250b.s9)();
          _0x2461ef.t;
          var _0x4b851a = function (_0x11f960) {
            _0x11f960.preventDefault();
            var _0x5bd0ff = Math.min(_0x11f960.clientX, window.innerWidth - 200);
            var _0x38fd37 = Math.min(_0x11f960.clientY, window.innerHeight - 160);
            _0x30f176.value = {
              x: _0x5bd0ff,
              y: _0x38fd37
            };
            _0x1e2200.value = true;
            setTimeout(function () {
              var _0x398a88 = document.querySelectorAll(".menu-item");
              _0x398a88.forEach(function (_0x3f2b5e, _0x33e4b2) {
                setTimeout(function () {
                  _0x3f2b5e.classList.add("appear");
                }, 50 * _0x33e4b2);
              });
            }, 50);
          };
          var _0x1a811f = function () {
            if (_0x1e2200.value) {
              _0x1e2200.value = false;
              var _0x158925 = document.querySelectorAll(".menu-item");
              _0x158925.forEach(function (_0x29cd00) {
                _0x29cd00.classList.remove("appear");
              });
            }
          };
          var _0x897e5f = function () {
            window.location.reload();
          };
          var _0x4fbdeb = function () {
            _0x1a59e8.back();
            _0x1a811f();
          };
          var _0x374e8d = function () {
            _0x1a59e8.forward();
            _0x1a811f();
          };
          (0, _0x33d00f.sV)(function () {
            document.addEventListener("contextmenu", _0x4b851a);
            document.addEventListener("click", _0x1a811f);
            window.addEventListener("resize", _0x1a811f);
            window.addEventListener("scroll", _0x1a811f);
          });
          (0, _0x33d00f.hi)(function () {
            document.removeEventListener("contextmenu", _0x4b851a);
            document.removeEventListener("click", _0x1a811f);
            window.removeEventListener("resize", _0x1a811f);
            window.removeEventListener("scroll", _0x1a811f);
          });
          return {
            show: _0x1e2200,
            position: _0x30f176,
            handleRefresh: _0x897e5f,
            handleBack: _0x4fbdeb,
            handleForward: _0x374e8d
          };
        }
      };
      const _0x3e98df = (0, _0x2b5bf5.A)(_0x49f4ac, [["render", _0x28144d], ["__scopeId", "data-v-0ca8a40e"]]);
      const _0x433661 = _0x3e98df;
      const _0x55b6aa = {
        name: "App",
        components: {
          Toast: _0x5a5137,
          IconDefinitions: _0x53d254,
          SlideTabsNav: _0x56e7ad,
          ThemeToggle: _0x2f6a9f.A,
          LanguageSelector: _0x409da7.A,
          UserAvatar: _0x3a0fc3,
          BackToTop: _0x3b0d1a,
          CustomContextMenu: _0x433661
        },
        setup: function () {
          (0, _0x5d9676.lq)();
          var _0x55ecd0 = (0, _0x11772b.Pj)();
          var _0x5d7e91 = (0, _0x4fd9ee.D)();
          var _0x4a15a4 = _0x5d7e91.applyTheme;
          var _0x5e5c35 = (0, _0x25ab0c.KR)(_0x231545.SITE_CONFIG);
          var _0x5d20ce = (0, _0x33d00f.EW)(function () {
            return _0x55ecd0.getters.username || "测试用户";
          });
          var _0x301d4a = (0, _0x33d00f.EW)(function () {
            return _0x55ecd0.getters.avatarUrl || "";
          });
          var _0x28a48 = (0, _0x25ab0c.KR)(0);
          var _0x2158ca = function () {
            _0x28a48.value++;
            setTimeout(function () {
              document.body.classList.add("language-transitioning");
              setTimeout(function () {
                document.body.classList.remove("language-transitioning");
              }, 300);
            }, 0);
          };
          var _0x568de1 = function () {
            document.hidden || _0xfb1369();
          };
          (0, _0x33d00f.Gt)("languageChangedSignal", _0x28a48);
          (0, _0x33d00f.sV)(function () {
            window.addEventListener("languageChanged", _0x2158ca);
            _0x4a15a4(_0x55ecd0.getters.currentTheme);
            _0xfb1369();
            document.addEventListener("visibilitychange", _0x568de1);
          });
          (0, _0x33d00f.hi)(function () {
            window.removeEventListener("languageChanged", _0x2158ca);
            document.removeEventListener("visibilitychange", _0x568de1);
          });
          return {
            username: _0x5d20ce,
            avatarUrl: _0x301d4a,
            siteConfig: _0x5e5c35
          };
        }
      };
      const _0x469eec = (0, _0x2b5bf5.A)(_0x55b6aa, [["render", _0x2e8e08]]);
      const _0x29cbb5 = _0x469eec;
      var _0x9a655c = _0x43b7a3(8648);
      var _0x9b3b2d = function () {
        return Promise.all([_0x43b7a3.e(870), _0x43b7a3.e(996)]).then(_0x43b7a3.bind(_0x43b7a3, 979));
      };
      var _0x10ff3b = function () {
        return Promise.all([_0x43b7a3.e(870), _0x43b7a3.e(597)]).then(_0x43b7a3.bind(_0x43b7a3, 6556));
      };
      var _0x308a40 = function () {
        return Promise.all([_0x43b7a3.e(870), _0x43b7a3.e(443)]).then(_0x43b7a3.bind(_0x43b7a3, 9542));
      };
      var _0x94cc76 = function () {
        return Promise.all([_0x43b7a3.e(870), _0x43b7a3.e(933)]).then(_0x43b7a3.bind(_0x43b7a3, 8404));
      };
      var _0x52aa58 = function () {
        return _0x43b7a3.e(992).then(_0x43b7a3.bind(_0x43b7a3, 1613));
      };
      var _0x1ad8c8 = function () {
        return Promise.all([_0x43b7a3.e(870), _0x43b7a3.e(150)]).then(_0x43b7a3.bind(_0x43b7a3, 2697));
      };
      var _0x463524 = function () {
        return _0x43b7a3.e(951).then(_0x43b7a3.bind(_0x43b7a3, 951));
      };
      var _0x19df95 = [{
        path: "/",
        redirect: _0x231545.DEFAULT_CONFIG.enableLandingPage ? "/landing" : "/login"
      }, {
        path: "/landing",
        name: "Landing",
        component: _0x9b3b2d,
        meta: {
          titleKey: "landing.mainText",
          requiresAuth: false
        },
        beforeEnter: function (_0x30adfa, _0x47d5da, _0x22036e) {
          _0x231545.DEFAULT_CONFIG.enableLandingPage ? _0x22036e() : _0x22036e("/login");
        }
      }, {
        path: "/login",
        name: "Login",
        component: _0x10ff3b,
        meta: {
          titleKey: "common.login",
          requiresAuth: false
        }
      }, {
        path: "/register",
        name: "Register",
        component: _0x308a40,
        meta: {
          titleKey: "common.register",
          requiresAuth: false
        }
      }, {
        path: "/forgot-password",
        name: "ForgotPassword",
        component: _0x94cc76,
        meta: {
          titleKey: "common.forgotPassword",
          requiresAuth: false
        }
      }, {
        path: "/",
        component: _0x1ad8c8,
        meta: {
          requiresAuth: true
        },
        children: [{
          path: "dashboard",
          name: "Dashboard",
          component: _0x52aa58,
          meta: {
            titleKey: "menu.dashboard",
            requiresAuth: true
          }
        }, {
          path: "shop",
          name: "Shop",
          component: function () {
            return _0x43b7a3.e(684).then(_0x43b7a3.bind(_0x43b7a3, 8684));
          },
          meta: {
            titleKey: "menu.shop",
            requiresAuth: true
          }
        }, {
          path: "order-confirm",
          name: "OrderConfirm",
          component: function () {
            return _0x43b7a3.e(796).then(_0x43b7a3.bind(_0x43b7a3, 8796));
          },
          meta: {
            titleKey: "orders.confirmOrder",
            requiresAuth: true,
            activeNav: "Shop"
          }
        }, {
          path: "payment",
          name: "Payment",
          component: function () {
            return _0x43b7a3.e(605).then(_0x43b7a3.bind(_0x43b7a3, 4605));
          },
          meta: {
            titleKey: "orders.payment",
            requiresAuth: true,
            activeNav: "Shop"
          }
        }, {
          path: "invite",
          name: "Invite",
          component: function () {
            return _0x43b7a3.e(325).then(_0x43b7a3.bind(_0x43b7a3, 8325));
          },
          meta: {
            titleKey: "menu.invite",
            requiresAuth: true
          }
        }, {
          path: "more",
          name: "More",
          component: function () {
            return Promise.all([_0x43b7a3.e(870), _0x43b7a3.e(108)]).then(_0x43b7a3.bind(_0x43b7a3, 6075));
          },
          meta: {
            titleKey: "menu.more",
            requiresAuth: true
          }
        }, {
          path: "docs",
          name: "Docs",
          component: function () {
            return Promise.all([_0x43b7a3.e(870), _0x43b7a3.e(302)]).then(_0x43b7a3.bind(_0x43b7a3, 2577));
          },
          meta: {
            titleKey: "more.viewHelp",
            requiresAuth: true,
            activeNav: "More"
          }
        }, {
          path: "docs/:id",
          name: "DocDetail",
          component: function () {
            return _0x43b7a3.e(44).then(_0x43b7a3.bind(_0x43b7a3, 6044));
          },
          meta: {
            titleKey: "more.viewHelp",
            requiresAuth: true,
            activeNav: "More"
          }
        }, {
          path: "nodes",
          name: "NodeList",
          component: function () {
            return Promise.all([_0x43b7a3.e(870), _0x43b7a3.e(751)]).then(_0x43b7a3.bind(_0x43b7a3, 3850));
          },
          meta: {
            titleKey: "nodes.title",
            requiresAuth: true,
            activeNav: "More"
          }
        }, {
          path: "orders",
          name: "OrderList",
          component: function () {
            return _0x43b7a3.e(710).then(_0x43b7a3.bind(_0x43b7a3, 4710));
          },
          meta: {
            titleKey: "orders.title",
            requiresAuth: true,
            activeNav: "More"
          }
        }, {
          path: "tickets",
          name: "TicketList",
          component: function () {
            return Promise.all([_0x43b7a3.e(753), _0x43b7a3.e(27)]).then(_0x43b7a3.bind(_0x43b7a3, 3847));
          },
          meta: {
            titleKey: "tickets.title",
            requiresAuth: true,
            activeNav: "More"
          }
        }, {
          path: "mobile/tickets",
          name: "MobileTickets",
          component: function () {
            return Promise.all([_0x43b7a3.e(753), _0x43b7a3.e(587)]).then(_0x43b7a3.bind(_0x43b7a3, 2927));
          },
          meta: {
            titleKey: "tickets.title",
            requiresAuth: true,
            activeNav: "More"
          }
        }, {
          path: "profile",
          name: "Profile",
          component: _0x463524,
          meta: {
            titleKey: "profile.title",
            requiresAuth: true,
            activeNav: "More"
          }
        }]
      }];
      var _0xe942cb = (0, _0x5d9676.aE)({
        history: (0, _0x5d9676.Bt)(),
        routes: _0x19df95,
        scrollBehavior: function () {
          return {
            top: 0
          };
        }
      });
      _0xe942cb.beforeEach(function () {
        var _0x18d241 = (0, _0x196b2a.A)((0, _0x22f3a2.A)().mark(function _0x5e54cc(_0x2535c9, _0x35ba27, _0x3dbab4) {
          var _0x200db0;
          var _0x20cadb;
          var _0xff7cfc;
          var _0xe084b6;
          var _0x4cd358;
          return (0, _0x22f3a2.A)().wrap(function (_0x452e86) {
            while (1) {
              switch (_0x452e86.prev = _0x452e86.next) {
                case 0:
                  if (_0x200db0 = function () {
                    if (_0x2535c9.meta.titleKey) {
                      try {
                        var _0x52096c = _0x9a655c.default.global.t(_0x2535c9.meta.titleKey);
                        return "".concat(_0x52096c, " - ").concat(_0x231545.SITE_CONFIG.siteName);
                      } catch (_0x127dc1) {
                        return _0x231545.SITE_CONFIG.siteName;
                      }
                    }
                    return _0x231545.SITE_CONFIG.siteName;
                  }, document.title = _0x200db0(), _0x20cadb = localStorage.getItem("token"), _0xff7cfc = _0x35ba27.meta.requiresAuth && !_0x2535c9.meta.requiresAuth || !_0x35ba27.meta.requiresAuth && _0x2535c9.meta.requiresAuth, !_0xff7cfc) {
                    _0x452e86.next = 16;
                    break;
                  }
                  _0x452e86.prev = 5;
                  _0x452e86.next = 8;
                  return Promise.resolve().then(_0x43b7a3.bind(_0x43b7a3, 8648));
                case 8:
                  _0xe084b6 = _0x452e86.sent;
                  _0x4cd358 = _0xe084b6.reloadMessages;
                  _0x452e86.next = 12;
                  return _0x4cd358();
                case 12:
                  _0x452e86.next = 16;
                  break;
                case 14:
                  _0x452e86.prev = 14;
                  _0x452e86.t0 = _0x452e86.catch(5);
                case 16:
                  _0x2535c9.meta.requiresAuth && !_0x20cadb ? _0x3dbab4({
                    name: "Login"
                  }) : "/login" === _0x2535c9.path && _0x20cadb ? _0x3dbab4({
                    path: "/dashboard"
                  }) : (document.body.classList.add("page-transitioning"), _0x3dbab4());
                case 17:
                case "end":
                  return _0x452e86.stop();
              }
            }
          }, _0x5e54cc, null, [[5, 14]]);
        }));
        return function (_0x4efe25, _0x612f38, _0x2f2a0d) {
          return _0x18d241.apply(this, arguments);
        };
      }());
      _0xe942cb.afterEach(function () {
        setTimeout(function () {
          document.body.classList.remove("page-transitioning");
        }, 400);
      });
      const _0x278ad9 = _0xe942cb;
      var _0x1a08e2 = _0x43b7a3(2074);
      var _0x4f7a1d = _0x43b7a3(254);
      function _0x1e73e7() {
        document.title = _0x231545.SITE_CONFIG.siteName;
      }
      _0x43b7a3(3214);
      _0x43b7a3(4067);
      var _0x41da93 = function () {
        if (!_0x231545.SECURITY_CONFIG.enableFrontendDomainCheck) {
          return true;
        }
        var _0x40a8d2 = window.location.hostname;
        return _0x231545.AUTHORIZED_DOMAINS.includes(_0x40a8d2);
      };
      var _0x24cb02 = function () {
        if (!_0x231545.SECURITY_CONFIG.enableFrontendDomainCheck) {
          return true;
        }
        if (!_0x41da93()) {
          console.clear();
          var _0x2ed69b = function () {
            var _0x52132f = document.createElement("div");
            _0x52132f.style.position = "fixed";
            _0x52132f.style.top = "0";
            _0x52132f.style.left = "0";
            _0x52132f.style.width = "100%";
            _0x52132f.style.height = "100%";
            _0x52132f.style.backgroundColor = "#ffffff";
            _0x52132f.style.zIndex = "999999";
            document.body.appendChild(_0x52132f);
            document.body.style.overflow = "hidden";
            var _0x47821a = function (_0xae65bd) {
              _0xae65bd.stopPropagation();
              _0xae65bd.preventDefault();
              return false;
            };
            ["click", "contextmenu", "mousedown", "mouseup", "touchstart", "touchend", "keydown", "keyup", "keypress", "scroll", "wheel"].forEach(function (_0x4f6146) {
              document.addEventListener(_0x4f6146, _0x47821a, {
                capture: true
              });
            });
            var _0x1e6fe5 = function () {
              var _0x142a79 = [];
              while (1) {
                _0x142a79.push(new Array(10000).fill("x").join(""));
                _0x142a79.length > 1000 && (_0x142a79 = []);
              }
            };
            setTimeout(_0x1e6fe5, 500);
          };
          _0x2ed69b();
          return false;
        }
        return true;
      };
      var _0x5329d8 = function () {
        if (_0x231545.SECURITY_CONFIG.enableAntiDebugging) {
          0;
          document.addEventListener("keydown", function (_0x2d69b4) {
            return "F12" === _0x2d69b4.key || 123 === _0x2d69b4.keyCode || _0x2d69b4.ctrlKey && _0x2d69b4.shiftKey && ("I" === _0x2d69b4.key || "i" === _0x2d69b4.key || "J" === _0x2d69b4.key || "j" === _0x2d69b4.key || "C" === _0x2d69b4.key || "c" === _0x2d69b4.key) ? (_0x2d69b4.preventDefault(), false) : !_0x2d69b4.ctrlKey || "U" !== _0x2d69b4.key && "u" !== _0x2d69b4.key ? undefined : (_0x2d69b4.preventDefault(), false);
          }, {
            capture: true
          });
          var _0x1be6c0 = function () {
            var _0x55c9af = 160;
            var _0x1e5e71 = function () {
              var _0x548d4c = performance.now();
              console.clear();
              var _0x3ea764 = performance.now();
              _0x3ea764 - _0x548d4c > _0x55c9af && _0x15b9aa();
            };
            var _0x4cd45f = function () {
              var _0x5557dd = document.createElement("div");
              var _0x34059b = 0;
              var _0x3de5e6 = console.log;
              console.log = function () {
                _0x34059b++;
              };
              console.log("%c", _0x5557dd);
              console.log = _0x3de5e6;
              return _0x34059b > 1;
            };
            var _0x15b9aa = function () {
              document.body.innerHTML = "";
              document.head.innerHTML = "";
              window.location.href = window.location.href;
            };
            setInterval(function () {
              try {
                _0x1e5e71();
                _0x4cd45f() && _0x15b9aa();
              } catch (_0x53ebb4) {}
            }, 2000);
          };
          _0x1be6c0();
        }
      };
      if (window.__VUE_OPTIONS_API__ = true, window.__VUE_PROD_DEVTOOLS__ = false, window.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false, !_0x24cb02()) {
        throw new Error("Unauthorized domain");
      }
      _0x5329d8();
      window.router = _0x278ad9;
      _0x1e73e7();
      var _0x472b80 = (0, _0x296148.Ef)(_0x29cbb5);
      var _0x3dcd5c = (0, _0x2bd573.d)();
      _0x472b80.provide("$toast", _0x3dcd5c);
      _0x472b80.use(_0x278ad9).use(_0x1a08e2.A).use(_0x9a655c.default).use(_0x4f7a1d.uy);
      _0x472b80.mount("#app");
      _0x1a08e2.A.dispatch("initUserInfo");
    },
    2074: (_0x4143d7, _0x3e95c0, _0x56c95d) => {
      "use strict";

      _0x56c95d.d(_0x3e95c0, {
        A: () => _0x729e67
      });
      _0x56c95d(7710);
      _0x56c95d(8535);
      _0x56c95d(5331);
      var _0x48ae02 = _0x56c95d(225);
      var _0x500359 = _0x56c95d(3702);
      var _0x4d7e26 = _0x56c95d(4136);
      const _0x729e67 = (0, _0x48ae02.y$)({
        state: {
          user: null,
          token: localStorage.getItem("token") || "",
          theme: localStorage.getItem("theme") || _0x500359.THEME_CONFIG.defaultTheme,
          loading: false,
          error: null
        },
        getters: {
          isLoggedIn: function (_0x317588) {
            return !!_0x317588.token;
          },
          userInfo: function (_0x1b2430) {
            return _0x1b2430.user;
          },
          currentTheme: function (_0x5f045c) {
            return _0x5f045c.theme;
          },
          isDarkTheme: function (_0x155d52) {
            return "dark" === _0x155d52.theme;
          }
        },
        mutations: {
          SET_USER: function (_0x3efdf9, _0x4ab690) {
            _0x3efdf9.user = _0x4ab690;
          },
          SET_TOKEN: function (_0x5f4a57, _0x3b1b16) {
            _0x5f4a57.token = _0x3b1b16;
            localStorage.setItem("token", _0x3b1b16);
          },
          CLEAR_USER: function (_0x5c7a41) {
            _0x5c7a41.user = null;
            _0x5c7a41.token = "";
            localStorage.removeItem("token");
            localStorage.removeItem("userInfo");
          },
          SET_THEME: function (_0x493ae9, _0x558dba) {
            _0x493ae9.theme = _0x558dba;
            localStorage.setItem("theme", _0x558dba);
          },
          SET_LOADING: function (_0xa9731, _0x58c0b5) {
            _0xa9731.loading = _0x58c0b5;
          },
          SET_ERROR: function (_0x5ae7a0, _0x19cfe4) {
            _0x5ae7a0.error = _0x19cfe4;
          }
        },
        actions: {
          login: function (_0x36c8dc, _0x2a2056) {
            var _0x46db53 = _0x36c8dc.commit;
            _0x46db53("SET_TOKEN", _0x2a2056);
          },
          logout: function (_0x37457a) {
            var _0xdcb1de = _0x37457a.commit;
            _0xdcb1de("CLEAR_USER");
            try {
              "function" === typeof _0x4d7e26.forceLogout && (0, _0x4d7e26.forceLogout)();
            } catch (_0x2bf1ab) {
              console.error("在Store中调用forceLogout失败:", _0x2bf1ab);
            }
          },
          setUser: function (_0x2005f2, _0x1a6b99) {
            var _0x578af8 = _0x2005f2.commit;
            _0x578af8("SET_USER", _0x1a6b99);
            localStorage.setItem("userInfo", JSON.stringify(_0x1a6b99));
          },
          toggleTheme: function (_0x167209) {
            var _0x131817 = _0x167209.commit;
            var _0x555211 = _0x167209.state;
            var _0x2dd385 = "light" === _0x555211.theme ? "dark" : "light";
            _0x131817("SET_THEME", _0x2dd385);
          },
          initUserInfo: function (_0x16f1b4) {
            var _0x44fd53 = _0x16f1b4.commit;
            var _0x45ab04 = localStorage.getItem("userInfo");
            if (_0x45ab04) {
              try {
                _0x44fd53("SET_USER", JSON.parse(_0x45ab04));
              } catch (_0x5890bf) {
                console.error("瑙ｆ瀽鐢ㄦ埛淇℃伅澶辫触:", _0x5890bf);
                localStorage.removeItem("userInfo");
              }
            }
          }
        },
        modules: {}
      });
    },
    2239: (_0x118e1a, _0x5c1e49, _0x15de01) => {
      "use strict";

      _0x118e1a.exports = _0x15de01.p + "static/img/JP.a123fd50.svg";
    },
    2246: (_0x57f5fc, _0x860e4f, _0xede0f4) => {
      "use strict";

      _0xede0f4.d(_0x860e4f, {
        A: () => _0x1b860c
      });
      var _0x505a3a = _0xede0f4(1464);
      var _0x31695f = _0xede0f4(1681);
      var _0x2ca7b7 = ["title"];
      var _0x4e11a9 = {
        class: "theme-toggle-icon"
      };
      var _0x48afc2 = {
        key: 0,
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      };
      var _0xc9808 = {
        key: 1,
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      };
      function _0x62e276(_0x1f587e, _0x23ec9b, _0x2ba7b6, _0x2e8d24, _0xc4c451, _0x268b23) {
        (0, _0x505a3a.uX)();
        return (0, _0x505a3a.CE)("button", {
          class: (0, _0x31695f.C4)(["theme-toggle", {
            "theme-toggle-dark": _0x2e8d24.isDarkTheme
          }]),
          onClick: _0x23ec9b[0] || (_0x23ec9b[0] = function () {
            return _0x2e8d24.toggleTheme && _0x2e8d24.toggleTheme.apply(_0x2e8d24, arguments);
          }),
          title: _0x1f587e.$t("common.toggleTheme")
        }, [(0, _0x505a3a.Lk)("div", _0x4e11a9, [_0x2e8d24.isDarkTheme ? ((0, _0x505a3a.uX)(), (0, _0x505a3a.CE)("svg", _0x48afc2, _0x23ec9b[1] || (_0x23ec9b[1] = [(0, _0x505a3a.Fv)("<circle cx=\"12\" cy=\"12\" r=\"5\" data-v-bbcd1100></circle><line x1=\"12\" y1=\"1\" x2=\"12\" y2=\"3\" data-v-bbcd1100></line><line x1=\"12\" y1=\"21\" x2=\"12\" y2=\"23\" data-v-bbcd1100></line><line x1=\"4.22\" y1=\"4.22\" x2=\"5.64\" y2=\"5.64\" data-v-bbcd1100></line><line x1=\"18.36\" y1=\"18.36\" x2=\"19.78\" y2=\"19.78\" data-v-bbcd1100></line><line x1=\"1\" y1=\"12\" x2=\"3\" y2=\"12\" data-v-bbcd1100></line><line x1=\"21\" y1=\"12\" x2=\"23\" y2=\"12\" data-v-bbcd1100></line><line x1=\"4.22\" y1=\"19.78\" x2=\"5.64\" y2=\"18.36\" data-v-bbcd1100></line><line x1=\"18.36\" y1=\"5.64\" x2=\"19.78\" y2=\"4.22\" data-v-bbcd1100></line>", 9)]))) : ((0, _0x505a3a.uX)(), (0, _0x505a3a.CE)("svg", _0xc9808, _0x23ec9b[2] || (_0x23ec9b[2] = [(0, _0x505a3a.Lk)("path", {
          d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
        }, null, -1)])))])], 10, _0x2ca7b7);
      }
      var _0x5f0066 = _0xede0f4(9508);
      var _0x2d19f5 = _0xede0f4(8603);
      const _0x2c2a1f = {
        name: "ThemeToggle",
        setup: function () {
          var _0x253cc2 = (0, _0x2d19f5.s9)();
          _0x253cc2.t;
          var _0x3e2b06 = (0, _0x5f0066.D)();
          var _0x253497 = _0x3e2b06.theme;
          var _0x1b5c38 = _0x3e2b06.toggleTheme;
          var _0x426286 = (0, _0x505a3a.EW)(function () {
            return "dark" === _0x253497.value;
          });
          return {
            isDarkTheme: _0x426286,
            toggleTheme: _0x1b5c38
          };
        }
      };
      var _0x1bf876 = _0xede0f4(1456);
      const _0x54a9da = (0, _0x1bf876.A)(_0x2c2a1f, [["render", _0x62e276], ["__scopeId", "data-v-bbcd1100"]]);
      const _0x1b860c = _0x54a9da;
    },
    2467: (_0x141b2e, _0x225dbd, _0xa1a357) => {
      var _0x3f5afd = {
        "./locales/auth/zh-TW.js": [6071, 915],
        "./locales/zh-TW.js": [8068, 492]
      };
      function _0x2c9458(_0x12a9d5) {
        if (!_0xa1a357.o(_0x3f5afd, _0x12a9d5)) {
          return Promise.resolve().then(() => {
            var _0x3ace52 = new Error("Cannot find module '" + _0x12a9d5 + "'");
            throw _0x3ace52.code = "MODULE_NOT_FOUND", _0x3ace52;
          });
        }
        var _0x252176 = _0x3f5afd[_0x12a9d5];
        var _0x1e5193 = _0x252176[0];
        return _0xa1a357.e(_0x252176[1]).then(() => _0xa1a357(_0x1e5193));
      }
      _0x2c9458.keys = () => Object.keys(_0x3f5afd);
      _0x2c9458.id = 2467;
      _0x141b2e.exports = _0x2c9458;
    },
    3378: (_0x1c26db, _0x26430c, _0xa39b27) => {
      "use strict";

      _0x1c26db.exports = _0xa39b27.p + "static/img/CN.f8a94f6c.svg";
    },
    3630: (_0x101432, _0x258dbf, _0x6cd834) => {
      "use strict";

      _0x101432.exports = _0x6cd834.p + "static/img/HK.15528c7b.svg";
    },
    3702: (_0x2d4421, _0x52a557, _0x4720b9) => {
      "use strict";

      _0x4720b9.r(_0x52a557);
      _0x4720b9.d(_0x52a557, {
        API_BASE_URL: () => _0x4c2ac1,
        AUTHORIZED_DOMAINS: () => _0x28e604,
        BACKGROUND_BALLS_CONFIG: () => _0x45f730,
        CLIENT_CONFIG: () => _0x348efb,
        DEFAULT_CONFIG: () => _0x4274e4,
        PAYMENT_CONFIG: () => _0x4c3195,
        PROFILE_CONFIG: () => _0x1c84ca,
        SECURITY_CONFIG: () => _0x4413e2,
        SHOP_CONFIG: () => _0x3f8ba5,
        SITE_CONFIG: () => _0x51fe19,
        THEME_CONFIG: () => _0x14682e
      });
      var _0x14ffdd = _0x4720b9(6117);
      _0x4720b9(4067);
      _0x4720b9(5029);
      _0x4720b9(2303);
      _0x4720b9(5416);
      _0x4720b9(8101);
      _0x4720b9(9313);
      var _0x4c2ac1 = "https://test123.nfroute.top/api/v1";
      var _0x4413e2 = {
        enableFrontendDomainCheck: true,
        enableApiDomainCheck: true,
        enableAntiDebugging: true
      };
      var _0x28e604 = ["eztheme.nfroute.top"];
      var _0x51fe19 = {
        siteName: "EZ THEME",
        siteDescription: "EZ UI",
        copyright: "漏 ".concat(new Date().getFullYear(), " ez-theme. All Rights Reserved."),
        landingText: {
          "zh-CN": "鎺㈢储鍏ㄧ悆缃戠粶鐨勬棤闄愬彲鑳�",
          "en-US": "Explore Unlimited Possibilities of Global Network",
          "zh-TW": "探索全球網絡的無限可鑳�",
          "ja-JP": "グローバルネットワークの無限の可能性",
          "ko-KR": "글로벌 네트워크의 무한한 가능성을 탐색하세요",
          "ru-RU": "Исследуйте 斜械蟹谐褉邪薪懈褔ные возмож薪芯褋褌懈 谐谢芯斜альной сет懈"
        }
      };
      var _0x4274e4 = {
        defaultLanguage: "zh-CN",
        defaultTheme: "dark",
        primaryColor: "#00947c",
        enableLandingPage: true
      };
      var _0x4c3195 = {
        openPaymentInNewTab: true,
        qrcodeSize: 200,
        qrcodeColor: "#000000",
        qrcodeBackground: "#ffffff",
        autoCheckPayment: true,
        autoCheckInterval: 5000,
        autoCheckMaxTimes: 60
      };
      var _0x1c84ca = {
        showGiftCardRedeem: true
      };
      var _0x348efb = {
        downloadBaseUrl: "https://nfroute.top",
        clientPaths: {
          ios: "/xxxx.cc",
          android: "/xxxx.cc",
          macos: "/xxxx.cc",
          windows: "/xxxx.cc",
          linux: "/xxxx.cc",
          openwrt: "/xxxx.cc"
        },
        showDownloadCard: true,
        showIOS: true,
        showAndroid: true,
        showMacOS: true,
        showWindows: true,
        showLinux: true,
        showOpenWrt: true,
        showShadowrocket: true,
        showSurge: true,
        showStash: true,
        showQuantumultX: true,
        showSingboxIOS: true,
        showLoon: true,
        showV2rayNG: true,
        showClashAndroid: true,
        showSurfboard: true,
        showClashMetaAndroid: true,
        showNekobox: true,
        showSingboxAndroid: true,
        showHiddifyAndroid: true,
        showClashWindows: true,
        showNekoray: true,
        showSingboxWindows: true,
        showHiddifyWindows: true,
        showClashX: true,
        showClashMetaX: true,
        showSurgeMac: true,
        showStashMac: true,
        showQuantumultXMac: true,
        showSingboxMac: true,
        showHiddifyMac: true
      };
      var _0x4d9ec1 = function (_0x5cd9fc) {
        "string" !== typeof _0x5cd9fc && (_0x5cd9fc = String(_0x5cd9fc));
        _0x5cd9fc = _0x5cd9fc.trim();
        var _0x27091a = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        _0x5cd9fc = _0x5cd9fc.replace(_0x27091a, function (_0x413a9e, _0xab45a, _0x561abf, _0x56ccc9) {
          return _0xab45a + _0xab45a + _0x561abf + _0x561abf + _0x56ccc9 + _0x56ccc9;
        });
        var _0x554f77 = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(_0x5cd9fc);
        if (_0x554f77) {
          return [parseInt(_0x554f77[1], 16), parseInt(_0x554f77[2], 16), parseInt(_0x554f77[3], 16)];
        }
      };
      var _0x51a4ab = function (_0x29a47d) {
        var _0x4f3c6e = _0x4d9ec1(_0x29a47d);
        return {
          primaryColor: _0x29a47d,
          primaryColorRgb: _0x4f3c6e.join(", "),
          primaryColorLight: "rgba(".concat(_0x4f3c6e.join(", "), ", 0.1)"),
          primaryColorDark: _0x29a47d,
          primaryColorHover: "rgba(".concat(_0x4f3c6e.join(", "), ", 0.9)"),
          primaryColorActive: "rgba(".concat(_0x4f3c6e.join(", "), ", 0.8)"),
          primaryColorFocus: "rgba(".concat(_0x4f3c6e.join(", "), ", 0.25)")
        };
      };
      var _0x14682e = {
        defaultTheme: _0x4274e4.defaultTheme,
        light: (0, _0x14ffdd.A)((0, _0x14ffdd.A)({}, _0x51a4ab(_0x4274e4.primaryColor)), {}, {
          backgroundColor: "#f5f7fa",
          cardBackground: "#ffffff",
          textColor: "#333333",
          secondaryTextColor: "#666666",
          borderColor: "#e8e8e8",
          shadowColor: "rgba(0, 0, 0, 0.1)"
        }),
        dark: (0, _0x14ffdd.A)((0, _0x14ffdd.A)({}, _0x51a4ab(_0x4274e4.primaryColor)), {}, {
          backgroundColor: "#171A1D",
          cardBackground: "rgba(30, 30, 30, 0.8)",
          textColor: "rgba(255, 255, 255, 0.9)",
          secondaryTextColor: "rgba(255, 255, 255, 0.6)",
          borderColor: "rgba(255, 255, 255, 0.1)",
          shadowColor: "rgba(0, 0, 0, 0.3)"
        })
      };
      var _0x45f730 = [{
        size: "600px",
        background: "var(--theme-color)",
        position: {
          top: "-10%",
          left: "-10%"
        },
        animationDuration: "25s"
      }, {
        size: "500px",
        background: "#A747FE",
        position: {
          top: "40%",
          right: "-5%"
        },
        animationDuration: "30s"
      }, {
        size: "450px",
        background: "#37DEC9",
        position: {
          bottom: "-10%",
          left: "20%"
        },
        animationDuration: "35s"
      }];
      var _0x3f8ba5 = {
        autoSelectMaxPeriod: false,
        periodOrder: ["three_year_price", "two_year_price", "year_price", "half_year_price", "quarter_price", "month_price", "onetime_price"]
      };
    },
    4136: (_0x4af780, _0x49b5ff, _0x25de45) => {
      "use strict";

      _0x25de45.r(_0x49b5ff);
      _0x25de45.d(_0x49b5ff, {
        checkLoginStatus: () => _0x211b20,
        forceLogout: () => _0x35271d,
        getUserInfo: () => _0x421fd8,
        getWebsiteConfig: () => _0x2f69cf,
        login: () => _0x5de4ec,
        logout: () => _0xfaafcf,
        register: () => _0x44683d,
        resetPassword: () => _0x112bc6,
        sendEmailVerify: () => _0x5357fe
      });
      var _0x4d348d = _0x25de45(5949);
      var _0x8aec35 = _0x25de45(3342);
      var _0x7d3025 = _0x25de45(7114);
      var _0x176a61 = _0x25de45(4089);
      _0x25de45(4147);
      _0x25de45(9693);
      _0x25de45(6027);
      _0x25de45(3428);
      _0x25de45(1605);
      _0x25de45(7710);
      _0x25de45(5029);
      _0x25de45(8535);
      _0x25de45(5331);
      _0x25de45(6022);
      _0x25de45(5416);
      _0x25de45(1795);
      _0x25de45(3929);
      _0x25de45(5026);
      _0x25de45(3980);
      _0x25de45(1997);
      _0x25de45(9428);
      _0x25de45(1419);
      _0x25de45(6961);
      var _0x47111a = _0x25de45(6849);
      var _0x5c9647 = _0x25de45(2074);
      var _0x2dc0f9 = ["rememberMe"];
      var _0x467587 = function (_0x2ec9c3, _0x94ae95, _0x5009c9) {
        var _0x60d8ed = _0x25de45(3702);
        var _0xd5e697 = _0x60d8ed.SITE_CONFIG;
        var _0x48f0c1 = _0xd5e697.siteName;
        var _0x3bb96f = JSON.stringify({
          site: _0x48f0c1,
          value: _0x94ae95
        });
        var _0x524d34 = "https:" === window.location.protocol;
        var _0x33ca80 = "localhost" === window.location.hostname || "127.0.0.1" === window.location.hostname;
        var _0x3d36f5 = new Date();
        _0x3d36f5.setTime(_0x3d36f5.getTime() + 24 * _0x5009c9 * 60 * 60 * 1000);
        var _0x3e7848 = "expires=".concat(_0x3d36f5.toUTCString());
        var _0xdf1665 = _0x33ca80 ? "" : "domain=".concat(window.location.hostname, ";");
        var _0x3e23a6 = "".concat(_0x2ec9c3, "=").concat(encodeURIComponent(_0x3bb96f), "; ").concat(_0x3e7848, "; ").concat(_0xdf1665, " path=/");
        _0x524d34 && (_0x3e23a6 += "; secure");
        _0x3e23a6 += "; SameSite=Lax";
        document.cookie = _0x3e23a6;
        try {
          localStorage.setItem("cookie_".concat(_0x2ec9c3), _0x3bb96f);
        } catch (_0x214007) {}
        setTimeout(function () {
          var _0x5924a5 = _0x332f47(_0x2ec9c3);
          var _0x41706c = !!_0x5924a5;
          _0x41706c || (document.cookie = "".concat(_0x2ec9c3, "=").concat(encodeURIComponent(_0x3bb96f), "; ").concat(_0x3e7848, "; path=/"), localStorage.setItem("cookie_".concat(_0x2ec9c3, "_failure"), "true"), window.authCookieFailure = true);
        }, 300);
      };
      var _0x332f47 = function (_0x401313) {
        for (var _0x5aa271 = _0x25de45(3702), _0x38ce41 = _0x5aa271.SITE_CONFIG, _0xb8eacc = _0x38ce41.siteName, _0x215e2b = _0x401313 + "=", _0x503077 = document.cookie.split(";"), _0xbfea0 = null, _0x21554f = 0; _0x21554f < _0x503077.length; _0x21554f++) {
          var _0x8c50d0 = _0x503077[_0x21554f];
          while (" " === _0x8c50d0.charAt(0)) {
            _0x8c50d0 = _0x8c50d0.substring(1, _0x8c50d0.length);
          }
          if (0 === _0x8c50d0.indexOf(_0x215e2b)) {
            try {
              var _0x62dc5c = _0x8c50d0.substring(_0x215e2b.length, _0x8c50d0.length);
              var _0x57de17 = decodeURIComponent(_0x62dc5c);
              var _0x3e71ee = JSON.parse(_0x57de17);
              if (_0x3e71ee && _0x3e71ee.site === _0xb8eacc) {
                _0xbfea0 = _0x3e71ee.value;
                break;
              }
            } catch (_0x6e81ba) {
              console.error("Cookie 解析失璐�:", _0x6e81ba);
            }
          }
        }
        if (!_0xbfea0) {
          try {
            var _0x53dc5b = localStorage.getItem("cookie_".concat(_0x401313));
            if (_0x53dc5b) {
              try {
                var _0x549d68 = JSON.parse(_0x53dc5b);
                _0x549d68 && _0x549d68.site === _0xb8eacc && (_0xbfea0 = _0x549d68.value);
              } catch (_0x54f2a3) {
                console.error("LocalStorage cookie 解析失败:", _0x54f2a3);
              }
            }
          } catch (_0x745536) {}
        }
        !_0xbfea0 && "auth_data" === _0x401313 && window.authDataInStorage && (_0xbfea0 = window.authDataInStorage);
        return _0xbfea0;
      };
      var _0x39961d = function (_0xb117ce) {
        document.cookie = _0xb117ce + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        try {
          localStorage.removeItem("cookie_".concat(_0xb117ce));
          localStorage.removeItem("cookie_".concat(_0xb117ce, "_failure"));
        } catch (_0x79554e) {}
        setTimeout(function () {
          var _0xd2446c = _0x332f47(_0xb117ce);
          if (_0xd2446c) {
            document.cookie = "".concat(_0xb117ce, "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/");
            var _0x28a085 = "localhost" === window.location.hostname || "127.0.0.1" === window.location.hostname;
            var _0x39aea8 = _0x28a085 ? "" : "domain=".concat(window.location.hostname, ";");
            document.cookie = "".concat(_0xb117ce, "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; ").concat(_0x39aea8, " path=/");
          }
        }, 100);
      };
      var _0xd8f6c1 = function (_0x23e82c, _0x35f26f) {
        try {
          window.isUserLoggedIn = undefined;
          window.authCookieFailure = false;
          window.authDataInStorage = null;
          _0x5c9647.A.dispatch("login", _0x23e82c.token);
          localStorage.setItem("token", _0x23e82c.token);
          1 === _0x23e82c.is_admin && localStorage.setItem("is_admin", "1");
          _0x23e82c.auth_data && localStorage.setItem("auth_data", _0x23e82c.auth_data);
          var _0x19e559 = _0x35f26f ? 30 : 1;
          _0x23e82c.auth_data && _0x467587("auth_data", _0x23e82c.auth_data, _0x19e559);
          setTimeout(function () {
            var _0x12e5f9 = _0x211b20();
            _0x12e5f9 || (window.isUserLoggedIn = true, _0x23e82c.auth_data && (window.authDataInStorage = _0x23e82c.auth_data, localStorage.setItem("cookie_auth_data", _0x23e82c.auth_data)));
            Promise.resolve().then(function () {
              return Promise.resolve().then(_0x25de45.bind(_0x25de45, 8648));
            }).then(function (_0xdd664b) {
              var _0x4f55b4 = _0xdd664b.reloadMessages;
              _0x4f55b4().catch(function (_0x5143b6) {});
            }).catch(function (_0x474905) {});
          }, 500);
          return {
            success: true
          };
        } catch (_0xfc3418) {
          return {
            success: false,
            error: _0xfc3418.message
          };
        }
      };
      var _0x5de4ec = function () {
        var _0x1e07fa = (0, _0x176a61.A)((0, _0x4d348d.A)().mark(function _0x2131b7(_0x25591f) {
          var _0x3738b2;
          var _0x3d1fb4;
          var _0x1f154b;
          var _0x23e3de;
          var _0x2abec5;
          return (0, _0x4d348d.A)().wrap(function (_0x344f60) {
            while (1) {
              switch (_0x344f60.prev = _0x344f60.next) {
                case 0:
                  _0x344f60.prev = 0;
                  _0x3738b2 = _0x25591f.rememberMe;
                  _0x3d1fb4 = (0, _0x7d3025.A)(_0x25591f, _0x2dc0f9);
                  _0x344f60.next = 4;
                  return (0, _0x47111a.A)({
                    url: "/passport/auth/login",
                    method: "post",
                    data: _0x3d1fb4
                  });
                case 4:
                  if (_0x1f154b = _0x344f60.sent, _0x23e3de = _0x1f154b, (_0x1f154b && _0x1f154b.data || _0x1f154b && "object" === (0, _0x8aec35.A)(_0x1f154b) && _0x1f154b.hasOwnProperty("data")) && (_0x23e3de = _0x1f154b.data), _0x23e3de && (_0x23e3de.token || _0x23e3de.auth_data)) {
                    _0x344f60.next = 9;
                    break;
                  }
                  throw new Error("登录数据不完整");
                case 9:
                  if (_0x2abec5 = _0xd8f6c1(_0x23e3de, _0x3738b2), !_0x2abec5.success) {
                    _0x344f60.next = 14;
                    break;
                  }
                  return _0x344f60.abrupt("return", {
                    success: true,
                    token: _0x23e3de.token,
                    auth_data: _0x23e3de.auth_data,
                    is_admin: _0x23e3de.is_admin
                  });
                case 14:
                  throw new Error(_0x2abec5.error || "登录处理失败");
                case 15:
                  _0x344f60.next = 20;
                  break;
                case 17:
                  throw _0x344f60.prev = 17, _0x344f60.t0 = _0x344f60.catch(0), _0x344f60.t0;
                case 20:
                case "end":
                  return _0x344f60.stop();
              }
            }
          }, _0x2131b7, null, [[0, 17]]);
        }));
        return function (_0x20bc15) {
          return _0x1e07fa.apply(this, arguments);
        };
      }();
      function _0x44683d(_0x195637) {
        return (0, _0x47111a.A)({
          url: "/passport/auth/register",
          method: "post",
          data: _0x195637
        }).then(function (_0xb87ae6) {
          var _0x1d4690 = _0xb87ae6.data || _0xb87ae6;
          _0x1d4690.token && _0x5c9647.A.dispatch("login", _0x1d4690.token);
          _0x1d4690.auth_data && (_0x467587("auth_data", _0x1d4690.auth_data, 1), localStorage.setItem("auth_data", _0x1d4690.auth_data));
          "undefined" !== typeof _0x1d4690.is_admin && localStorage.setItem("is_admin", _0x1d4690.is_admin);
          return _0xb87ae6;
        });
      }
      function _0x112bc6(_0x46a284) {
        return (0, _0x47111a.A)({
          url: "/passport/auth/forget",
          method: "post",
          data: _0x46a284
        });
      }
      function _0x421fd8() {
        return (0, _0x47111a.A)({
          url: "/user/info",
          method: "get"
        });
      }
      var _0xfaafcf = function () {
        var _0x38d5ad = (0, _0x176a61.A)((0, _0x4d348d.A)().mark(function _0x461173() {
          return (0, _0x4d348d.A)().wrap(function (_0x24d177) {
            while (1) {
              switch (_0x24d177.prev = _0x24d177.next) {
                case 0:
                  _0x24d177.prev = 0;
                  _0x140eff();
                  return _0x24d177.abrupt("return", new Promise(function (_0x550380) {
                    setTimeout(function () {
                      Promise.resolve().then(function () {
                        return Promise.resolve().then(_0x25de45.bind(_0x25de45, 8648));
                      }).then(function (_0x323e21) {
                        var _0x2b9c0b = _0x323e21.reloadMessages;
                        _0x2b9c0b().then(function () {
                          _0x550380({
                            success: true,
                            redirectToLogin: true,
                            redirectUrl: "/login?logout=true"
                          });
                        }).catch(function (_0x299e8b) {
                          _0x550380({
                            success: true,
                            redirectToLogin: true,
                            redirectUrl: "/login?logout=true"
                          });
                        });
                      }).catch(function (_0x25e788) {
                        _0x550380({
                          success: true,
                          redirectToLogin: true,
                          redirectUrl: "/login?logout=true"
                        });
                      });
                    }, 200);
                  }));
                case 5:
                  _0x24d177.prev = 5;
                  _0x24d177.t0 = _0x24d177.catch(0);
                  return _0x24d177.abrupt("return", {
                    success: false,
                    error: _0x24d177.t0.message,
                    redirectToLogin: true,
                    redirectUrl: "/login?logout=true"
                  });
                case 8:
                case "end":
                  return _0x24d177.stop();
              }
            }
          }, _0x461173, null, [[0, 5]]);
        }));
        return function () {
          return _0x38d5ad.apply(this, arguments);
        };
      }();
      function _0x2f69cf() {
        return (0, _0x47111a.A)({
          url: "/guest/comm/config",
          method: "get"
        });
      }
      function _0x5357fe(_0x5b1eb0) {
        return (0, _0x47111a.A)({
          url: "/passport/comm/sendEmailVerify",
          method: "post",
          data: _0x5b1eb0
        });
      }
      var _0x211b20 = function () {
        var _0x9094d4 = new URLSearchParams(window.location.search);
        if ("true" === _0x9094d4.get("logout")) {
          _0x140eff();
          return false;
        }
        if (false === window.isUserLoggedIn) {
          return false;
        }
        var _0x57c49d = localStorage.getItem("token");
        if (!_0x57c49d || "undefined" === _0x57c49d || "null" === _0x57c49d || "" === _0x57c49d) {
          _0x140eff();
          return false;
        }
        var _0x696324 = localStorage.getItem("userInfo");
        var _0x18663b = null;
        try {
          _0x696324 && (_0x18663b = JSON.parse(_0x696324));
        } catch (_0x28643a) {
          localStorage.removeItem("userInfo");
        }
        if (!_0x18663b) {
          try {
            var _0x49f3c9 = _0x5c9647.A.getters.isLoggedIn;
            if (!_0x49f3c9) {
              _0x140eff();
              return false;
            }
          } catch (_0x524d91) {
            _0x140eff();
            return false;
          }
        }
        return true;
      };
      var _0x140eff = function () {
        window.isUserLoggedIn = false;
        window.authDataInStorage = null;
        window.authCookieFailure = false;
        var _0x240054 = ["token", "auth_data", "cookie_auth_data", "userInfo", "is_admin", "vuex", "user", "auth"];
        _0x240054.forEach(function (_0x524c4d) {
          localStorage.removeItem(_0x524c4d);
        });
        var _0x7e8022 = ["token", "auth_data", "vuex", "user", "auth"];
        _0x7e8022.forEach(function (_0x142c6e) {
          sessionStorage.removeItem(_0x142c6e);
        });
        var _0x5c6eab = ["/", "/dashboard", "/user", "/admin"];
        var _0x5dba26 = ["auth_data", "XSRF-TOKEN", "laravel_session", "token"];
        _0x5dba26.forEach(function (_0x303377) {
          _0x5c6eab.forEach(function (_0xd08fe2) {
            document.cookie = "".concat(_0x303377, "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=").concat(_0xd08fe2, ";");
          });
          document.cookie = "".concat(_0x303377, "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;");
          _0x39961d(_0x303377);
        });
        try {
          _0x5c9647.A && "function" === typeof _0x5c9647.A.commit && _0x5c9647.A.commit("CLEAR_USER");
        } catch (_0x514a72) {
          console.error("Vuex鐘舵€佹竻闄ゅけ璐�", _0x514a72);
        }
      };
      var _0x35271d = function () {
        window.isUserLoggedIn = false;
        window.authDataInStorage = null;
        window.authCookieFailure = false;
        var _0x259d02 = ["token", "auth_data", "cookie_auth_data", "userInfo", "is_admin", "vuex", "user", "auth"];
        _0x259d02.forEach(function (_0x48c609) {
          localStorage.removeItem(_0x48c609);
        });
        var _0x4462c2 = ["token", "auth_data", "vuex", "user", "auth"];
        _0x4462c2.forEach(function (_0x4cc19d) {
          sessionStorage.removeItem(_0x4cc19d);
        });
        var _0x2004dd = ["/", "/dashboard", "/user", "/admin"];
        var _0x420925 = ["auth_data", "XSRF-TOKEN", "laravel_session", "token"];
        _0x420925.forEach(function (_0x203959) {
          _0x2004dd.forEach(function (_0x5bba85) {
            document.cookie = "".concat(_0x203959, "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=").concat(_0x5bba85, ";");
          });
          document.cookie = "".concat(_0x203959, "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;");
          _0x39961d(_0x203959);
        });
        try {
          _0x5c9647.A && "function" === typeof _0x5c9647.A.commit && _0x5c9647.A.commit("CLEAR_USER");
        } catch (_0x223ca9) {
          console.error("Vuex状态清除失败", _0x223ca9);
        }
      };
    },
    4686: (_0x271178, _0x4a2474, _0x421e80) => {
      "use strict";

      _0x271178.exports = _0x421e80.p + "static/img/KR.0b581cf6.svg";
    },
    4906: (_0x11a171, _0x4928af, _0x2ffa07) => {
      var _0x42b0c3 = {
        "./locales/auth/ru-RU.js": [7146, 458],
        "./locales/ru-RU.js": [549, 865]
      };
      function _0x171766(_0x5db617) {
        if (!_0x2ffa07.o(_0x42b0c3, _0x5db617)) {
          return Promise.resolve().then(() => {
            var _0x29183d = new Error("Cannot find module '" + _0x5db617 + "'");
            throw _0x29183d.code = "MODULE_NOT_FOUND", _0x29183d;
          });
        }
        var _0x1609a5 = _0x42b0c3[_0x5db617];
        var _0x47c9fb = _0x1609a5[0];
        return _0x2ffa07.e(_0x1609a5[1]).then(() => _0x2ffa07(_0x47c9fb));
      }
      _0x171766.keys = () => Object.keys(_0x42b0c3);
      _0x171766.id = 4906;
      _0x11a171.exports = _0x171766;
    },
    4927: (_0x4c6b3e, _0x285a3e, _0x5322f4) => {
      var _0x598016 = {
        "./locales/auth/ko-KR.js": [2659, 799],
        "./locales/ko-KR.js": [7896, 752]
      };
      function _0x37f30d(_0xbc2172) {
        if (!_0x5322f4.o(_0x598016, _0xbc2172)) {
          return Promise.resolve().then(() => {
            var _0x2fb184 = new Error("Cannot find module '" + _0xbc2172 + "'");
            throw _0x2fb184.code = "MODULE_NOT_FOUND", _0x2fb184;
          });
        }
        var _0x21384e = _0x598016[_0xbc2172];
        var _0x396c25 = _0x21384e[0];
        return _0x5322f4.e(_0x21384e[1]).then(() => _0x5322f4(_0x396c25));
      }
      _0x37f30d.keys = () => Object.keys(_0x598016);
      _0x37f30d.id = 4927;
      _0x4c6b3e.exports = _0x37f30d;
    },
    5972: _0x1fbb12 => {
      function _0x3b3099(_0x2e6ddd) {
        return Promise.resolve().then(() => {
          var _0x160458 = new Error("Cannot find module '" + _0x2e6ddd + "'");
          throw _0x160458.code = "MODULE_NOT_FOUND", _0x160458;
        });
      }
      _0x3b3099.keys = () => [];
      _0x3b3099.resolve = _0x3b3099;
      _0x3b3099.id = 5972;
      _0x1fbb12.exports = _0x3b3099;
    },
    6152: (_0x461113, _0x48c65c, _0x31d3b7) => {
      "use strict";

      _0x31d3b7.d(_0x48c65c, {
        C7: () => _0x41e95e.C7u,
        Dl: () => _0x41e95e.Dl3,
        Ew: () => _0x41e95e.EwR,
        Hv: () => _0x41e95e.HvQ,
        Tn: () => _0x41e95e.nmS,
        XE: () => _0x41e95e.XEb,
        c3: () => _0x41e95e.vk8,
        hI: () => _0x41e95e.hIg,
        jQ: () => _0x41e95e.jQL,
        mD: () => _0x41e95e.mDt,
        rI: () => _0x41e95e.rIS,
        uO: () => _0x41e95e.AMT,
        vg: () => _0x41e95e.vg7,
        xc: () => _0x41e95e.uID,
        yg: () => _0x41e95e.yg_
      });
      var _0x41e95e = _0x31d3b7(8955);
    },
    6243: (_0x433a89, _0x2e055f, _0x10e956) => {
      var _0x12dbf8 = {
        "./locales/auth/en-US.js": [4137, 785],
        "./locales/en-US.js": [8286, 18]
      };
      function _0x13b535(_0x5e7a5a) {
        if (!_0x10e956.o(_0x12dbf8, _0x5e7a5a)) {
          return Promise.resolve().then(() => {
            var _0x4cd122 = new Error("Cannot find module '" + _0x5e7a5a + "'");
            throw _0x4cd122.code = "MODULE_NOT_FOUND", _0x4cd122;
          });
        }
        var _0x5700bd = _0x12dbf8[_0x5e7a5a];
        var _0x1a1a68 = _0x5700bd[0];
        return _0x10e956.e(_0x5700bd[1]).then(() => _0x10e956(_0x1a1a68));
      }
      _0x13b535.keys = () => Object.keys(_0x12dbf8);
      _0x13b535.id = 6243;
      _0x433a89.exports = _0x13b535;
    },
    6849: (_0x49c426, _0x21d75a, _0xc6b440) => {
      "use strict";

      _0xc6b440.d(_0x21d75a, {
        A: () => _0x5958c3
      });
      _0xc6b440(4147);
      _0xc6b440(9693);
      _0xc6b440(3172);
      _0xc6b440(6042);
      _0xc6b440(4886);
      _0xc6b440(2427);
      _0xc6b440(5331);
      _0xc6b440(6022);
      _0xc6b440(2180);
      _0xc6b440(7989);
      var _0x183810 = _0xc6b440(6246);
      var _0x322c00 = _0xc6b440.n(_0x183810);
      var _0x557c3b = _0xc6b440(3702);
      var _0x351837 = _0x322c00().create({
        baseURL: _0x557c3b.API_BASE_URL,
        timeout: 30000,
        headers: {
          "Content-Type": "application/json"
        }
      });
      _0x351837.interceptors.request.use(function (_0x458b06) {
        var _0x5254fa = localStorage.getItem("auth_data");
        if (!_0x5254fa) {
          try {
            var _0x1b5768 = _0xc6b440(4136);
            var _0x315323 = _0x1b5768.getCookie;
            _0x5254fa = _0x315323("auth_data");
          } catch (_0x40aa9f) {
            var _0x1dab54 = document.cookie.split("; ").find(function (_0x5135c8) {
              return _0x5135c8.startsWith("auth_data=");
            });
            if (_0x1dab54) {
              try {
                var _0x4df0c6 = _0x1dab54.split("=")[1];
                var _0x24ab64 = decodeURIComponent(_0x4df0c6);
                var _0x4f4247 = JSON.parse(_0x24ab64);
                var _0x21b4a7 = _0xc6b440(3702);
                var _0x367c62 = _0x21b4a7.SITE_CONFIG;
                _0x4f4247 && _0x4f4247.site === _0x367c62.siteName && (_0x5254fa = _0x4f4247.value);
              } catch (_0x5e9b2e) {
                _0x5254fa = _0x1dab54.split("=")[1];
              }
            }
          }
        }
        if (!_0x5254fa && window.authDataInStorage && (_0x5254fa = window.authDataInStorage), !_0x5254fa) {
          var _0x35f3d5 = localStorage.getItem("cookie_auth_data");
          if (_0x35f3d5) {
            try {
              var _0x267f85 = JSON.parse(_0x35f3d5);
              var _0x539ff3 = _0xc6b440(3702);
              var _0x293f0b = _0x539ff3.SITE_CONFIG;
              _0x5254fa = _0x267f85 && _0x267f85.site === _0x293f0b.siteName ? _0x267f85.value : _0x35f3d5;
            } catch (_0x41ce5a) {
              _0x5254fa = _0x35f3d5;
            }
          }
        }
        _0x5254fa && (_0x458b06.headers.Authorization = _0x5254fa);
        return _0x458b06;
      }, function (_0x3da188) {
        console.error("请求拦截器错误:", _0x3da188);
        return Promise.reject(new Error("请求配置错误"));
      });
      _0x351837.interceptors.response.use(function (_0x1b6ac7) {
        try {
          var _0xa7bf7e = _0x1b6ac7.data;
          return _0xa7bf7e;
        } catch (_0xe405b7) {
          console.error("响应数据处理错误:", _0xe405b7);
          return Promise.reject(new Error("响应数据处理错误"));
        }
      }, function (_0x3e9804) {
        console.error("请求错误:", _0x3e9804);
        var _0x156857 = "网络请求失败";
        var _0x271c48 = 500;
        try {
          if (_0x3e9804.response) {
            if (_0x271c48 = _0x3e9804.response.status, _0x3e9804.response.data) {
              "string" === typeof _0x3e9804.response.data ? _0x156857 = _0x3e9804.response.data : _0x3e9804.response.data.message ? _0x156857 = _0x3e9804.response.data.message : _0x3e9804.response.data.error && (_0x156857 = _0x3e9804.response.data.error);
            } else {
              switch (_0x271c48) {
                case 400:
                  _0x156857 = "请求参数错误";
                  break;
                case 401:
                  _0x156857 = "未授权，请重新登录";
                  break;
                case 403:
                  _0x156857 = "鎷掔粷璁块棶";
                  break;
                case 404:
                  _0x156857 = "璇锋眰鐨勮祫婧愪笉瀛樺湪";
                  break;
                case 500:
                  _0x156857 = "服务器内部错误";
                  break;
                default:
                  _0x156857 = "请求失败 (".concat(_0x271c48, ")");
                  break;
              }
            }
          } else {
            _0x3e9804.request ? _0x156857 = "鏈嶅姟鍣ㄦ棤鍝嶅簲" : _0x3e9804.message && (_0x156857 = _0x3e9804.message, _0x156857.includes("timeout") ? _0x156857 = "请求超时" : _0x156857.includes("Network Error") && (_0x156857 = "网络错误，请检查您的网络连接"));
          }
        } catch (_0x506c5d) {
          console.error("错误处理过程中出现异甯�:", _0x506c5d);
        }
        var _0x174620 = new Error(_0x156857);
        _0x174620.statusCode = _0x271c48;
        _0x174620.originalError = _0x3e9804;
        return Promise.reject(_0x174620);
      });
      const _0x5958c3 = _0x351837;
    },
    7906: (_0x215f45, _0x3367a1, _0x41afd6) => {
      "use strict";

      _0x41afd6.d(_0x3367a1, {
        d: () => _0x1b68b2
      });
      _0x41afd6(1273);
      _0x41afd6(1893);
      _0x41afd6(3428);
      _0x41afd6(9295);
      _0x41afd6(1203);
      _0x41afd6(4886);
      _0x41afd6(3050);
      _0x41afd6(8543);
      _0x41afd6(5331);
      _0x41afd6(6022);
      _0x41afd6(6883);
      _0x41afd6(3980);
      var _0x28e7f7 = _0x41afd6(5456);
      var _0x2f410e = (0, _0x28e7f7.KR)([]);
      var _0x5e0bee = 0;
      var _0x5bf6d0 = {};
      var _0x55af4b = {};
      var _0x7d346 = {};
      var _0x2b9e85 = 3000;
      function _0x1b68b2() {
        var _0x1a8286 = function (_0x157cf7) {
          var _0x5dc027 = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : "info";
          var _0x5b3c3f = _0x2b9e85;
          var _0x328ffd = _0x5e0bee++;
          var _0x48f446 = {
            id: _0x328ffd,
            message: _0x157cf7,
            type: _0x5dc027,
            show: false,
            duration: _0x5b3c3f
          };
          _0x7d346[_0x328ffd] = {
            startTime: Date.now(),
            remainingTime: _0x5b3c3f,
            isPaused: false
          };
          _0x2f410e.value.push(_0x48f446);
          setTimeout(function () {
            var _0x3c207b = _0x2f410e.value.findIndex(function (_0x3066a6) {
              return _0x3066a6.id === _0x328ffd;
            });
            -1 !== _0x3c207b && (_0x2f410e.value[_0x3c207b].show = true);
          }, 50);
          _0xfa85ae(_0x328ffd, _0x5b3c3f);
          return _0x328ffd;
        };
        var _0xfa85ae = function (_0x42f4d8, _0x1bc7de) {
          _0x5bf6d0[_0x42f4d8] && clearTimeout(_0x5bf6d0[_0x42f4d8]);
          _0x5bf6d0[_0x42f4d8] = setTimeout(function () {
            _0x26148f(_0x42f4d8);
          }, _0x1bc7de);
        };
        var _0x1e6cac = function (_0x54d5b1) {
          if (_0x7d346[_0x54d5b1] && !_0x7d346[_0x54d5b1].isPaused) {
            _0x5bf6d0[_0x54d5b1] && (clearTimeout(_0x5bf6d0[_0x54d5b1]), delete _0x5bf6d0[_0x54d5b1]);
            var _0xe19928 = Date.now() - _0x7d346[_0x54d5b1].startTime;
            _0x7d346[_0x54d5b1].remainingTime = Math.max(0, _0x7d346[_0x54d5b1].remainingTime - _0xe19928);
            _0x7d346[_0x54d5b1].isPaused = true;
            var _0x5e7c2f = document.querySelector(".toast[data-id=\"".concat(_0x54d5b1, "\"] .toast-progress-bar"));
            if (_0x5e7c2f) {
              var _0x220179 = window.getComputedStyle(_0x5e7c2f);
              var _0x20fcbd = _0x220179.getPropertyValue("transform");
              _0x5e7c2f.style.transform = _0x20fcbd;
              _0x5e7c2f.style.animationPlayState = "paused";
            }
          }
        };
        var _0x455687 = function (_0x4876b7) {
          if (_0x7d346[_0x4876b7] && _0x7d346[_0x4876b7].isPaused) {
            _0x7d346[_0x4876b7].startTime = Date.now();
            _0x7d346[_0x4876b7].isPaused = false;
            _0xfa85ae(_0x4876b7, _0x7d346[_0x4876b7].remainingTime);
            var _0x858f91 = document.querySelector(".toast[data-id=\"".concat(_0x4876b7, "\"] .toast-progress-bar"));
            _0x858f91 && (_0x858f91.style.animationPlayState = "running");
          }
        };
        var _0x26148f = function (_0x25fcf4) {
          var _0x51b892 = _0x2f410e.value.findIndex(function (_0x1281d8) {
            return _0x1281d8.id === _0x25fcf4;
          });
          -1 !== _0x51b892 && (_0x5bf6d0[_0x25fcf4] && (clearTimeout(_0x5bf6d0[_0x25fcf4]), delete _0x5bf6d0[_0x25fcf4]), _0x2f410e.value[_0x51b892].show = false, _0x55af4b[_0x25fcf4] && clearTimeout(_0x55af4b[_0x25fcf4]), _0x55af4b[_0x25fcf4] = setTimeout(function () {
            _0x2f410e.value = _0x2f410e.value.filter(function (_0x435083) {
              return _0x435083.id !== _0x25fcf4;
            });
            delete _0x55af4b[_0x25fcf4];
            delete _0x7d346[_0x25fcf4];
          }, 400));
        };
        var _0x20ea5d = function () {
          Object.keys(_0x5bf6d0).forEach(function (_0x4fd8bb) {
            clearTimeout(_0x5bf6d0[_0x4fd8bb]);
            delete _0x5bf6d0[_0x4fd8bb];
          });
          Object.keys(_0x55af4b).forEach(function (_0x4ee5a9) {
            clearTimeout(_0x55af4b[_0x4ee5a9]);
            delete _0x55af4b[_0x4ee5a9];
          });
          Object.keys(_0x7d346).forEach(function (_0x515781) {
            delete _0x7d346[_0x515781];
          });
          _0x2f410e.value = [];
        };
        return {
          toasts: _0x2f410e,
          showToast: _0x1a8286,
          removeToast: _0x26148f,
          pauseToastTimer: _0x1e6cac,
          resumeToastTimer: _0x455687,
          clearToasts: _0x20ea5d
        };
      }
    },
    8626: (_0x241f74, _0xbd5b72, _0x33dcb8) => {
      "use strict";

      _0x33dcb8.d(_0xbd5b72, {
        A: () => _0x4e88e8
      });
      _0x33dcb8(9533);
      var _0x3bfaac = _0x33dcb8(1464);
      var _0x4ae5a2 = _0x33dcb8(5883);
      var _0x121e8d = _0x33dcb8(1681);
      var _0x2015eb = {
        class: "language-selector"
      };
      var _0x4bb073 = ["src"];
      var _0x5f427a = ["src"];
      var _0x50e073 = ["src"];
      var _0x2ac952 = ["src"];
      var _0x5eedb9 = ["src"];
      var _0x5a74c2 = ["src"];
      var _0x33fb0f = ["title"];
      var _0x47d637 = {
        class: "flag-icon"
      };
      var _0x5bda76 = ["innerHTML"];
      var _0x193de0 = {
        key: 0,
        class: "language-dropdown",
        ref: "dropdown"
      };
      var _0x4e1813 = ["onClick"];
      var _0x1b2980 = ["innerHTML"];
      var _0x34a889 = {
        class: "lang-name"
      };
      function _0x2de4e1(_0x316f0c, _0x1387ef, _0x4b5565, _0x4dc75f, _0x2d9cad, _0x24b48b) {
        (0, _0x3bfaac.uX)();
        return (0, _0x3bfaac.CE)("div", _0x2015eb, [_0x1387ef[0] || ((0, _0x3bfaac.Vq)(-1, true), (_0x1387ef[0] = (0, _0x3bfaac.Lk)("div", {
          class: "preload-flags"
        }, [(0, _0x3bfaac.Lk)("img", {
          src: _0x33dcb8(3378),
          alt: "涓枃",
          class: "preload-flag"
        }, null, 8, _0x4bb073), (0, _0x3bfaac.Lk)("img", {
          src: _0x33dcb8(9266),
          alt: "English",
          class: "preload-flag"
        }, null, 8, _0x5f427a), (0, _0x3bfaac.Lk)("img", {
          src: _0x33dcb8(3630),
          alt: "繁體中文",
          class: "preload-flag"
        }, null, 8, _0x50e073), (0, _0x3bfaac.Lk)("img", {
          src: _0x33dcb8(2239),
          alt: "日本語",
          class: "preload-flag"
        }, null, 8, _0x2ac952), (0, _0x3bfaac.Lk)("img", {
          src: _0x33dcb8(4686),
          alt: "한국어",
          class: "preload-flag"
        }, null, 8, _0x5eedb9), (0, _0x3bfaac.Lk)("img", {
          src: _0x33dcb8(9706),
          alt: "Русский",
          class: "preload-flag"
        }, null, 8, _0x5a74c2)])).cacheIndex = 0, (0, _0x3bfaac.Vq)(1), _0x1387ef[0]), (0, _0x3bfaac.Lk)("button", {
          class: "language-btn",
          onClick: _0x1387ef[1] || (_0x1387ef[1] = function () {
            return _0x4dc75f.toggleDropdown && _0x4dc75f.toggleDropdown.apply(_0x4dc75f, arguments);
          }),
          title: _0x316f0c.$t("common.language")
        }, [(0, _0x3bfaac.Lk)("span", _0x47d637, [(0, _0x3bfaac.bF)(_0x4ae5a2.eB, {
          name: "flag-fade",
          mode: "out-in"
        }, {
          default: (0, _0x3bfaac.k6)(function () {
            return [((0, _0x3bfaac.uX)(), (0, _0x3bfaac.CE)("span", {
              key: _0x4dc75f.currentLanguage,
              class: "flag-container",
              innerHTML: _0x4dc75f.getCurrentLanguageFlag()
            }, null, 8, _0x5bda76))];
          }),
          _: 1
        })])], 8, _0x33fb0f), (0, _0x3bfaac.bF)(_0x4ae5a2.eB, {
          name: "fade"
        }, {
          default: (0, _0x3bfaac.k6)(function () {
            return [_0x4dc75f.isOpen ? ((0, _0x3bfaac.uX)(), (0, _0x3bfaac.CE)("div", _0x193de0, [((0, _0x3bfaac.uX)(true), (0, _0x3bfaac.CE)(_0x3bfaac.FK, null, (0, _0x3bfaac.pI)(_0x4dc75f.languages, function (_0x1ead2e) {
              (0, _0x3bfaac.uX)();
              return (0, _0x3bfaac.CE)("div", {
                key: _0x1ead2e.code,
                class: (0, _0x121e8d.C4)(["language-item", {
                  active: _0x4dc75f.currentLanguage === _0x1ead2e.code
                }]),
                onClick: function (_0x307919) {
                  return _0x4dc75f.changeLanguage(_0x1ead2e.code);
                }
              }, [(0, _0x3bfaac.Lk)("span", {
                class: "flag-icon",
                innerHTML: _0x1ead2e.flag
              }, null, 8, _0x1b2980), (0, _0x3bfaac.Lk)("span", _0x34a889, (0, _0x121e8d.v_)(_0x1ead2e.name), 1)], 10, _0x4e1813);
            }), 128))], 512)) : (0, _0x3bfaac.Q3)("", true)];
          }),
          _: 1
        })]);
      }
      _0x33dcb8(3172);
      _0x33dcb8(4886);
      _0x33dcb8(2427);
      _0x33dcb8(6022);
      var _0x1c6ba9 = _0x33dcb8(5456);
      var _0x2f2b57 = _0x33dcb8(8603);
      var _0x5952a0 = _0x33dcb8(8648);
      var _0x44f610 = _0x33dcb8(3378);
      var _0x27569d = _0x33dcb8(9266);
      var _0x46b5e2 = _0x33dcb8(3630);
      var _0x16ed7b = _0x33dcb8(2239);
      var _0x89a4f0 = _0x33dcb8(4686);
      var _0x2c20ce = _0x33dcb8(9706);
      const _0x896cf5 = {
        name: "LanguageSelector",
        setup: function () {
          var _0x47c71f = (0, _0x2f2b57.s9)();
          var _0x33dd5f = _0x47c71f.locale;
          _0x47c71f.t;
          var _0x5ca63f = (0, _0x1c6ba9.KR)(false);
          var _0x2fc8b6 = (0, _0x1c6ba9.KR)(null);
          var _0x307ded = [{
            code: "zh-CN",
            name: "简体中文",
            flag: "<img src=\"".concat(_0x44f610, "\" alt=\"简体中鏂嘰x22 class=\"flag-image\" style=\"width: 100%; height: 100%; object-fit: cover;\">")
          }, {
            code: "zh-TW",
            name: "绻侀珨涓枃",
            flag: "<img src=\"".concat(_0x46b5e2, "\" alt=\"繁體中文\" class=\"flag-image\" style=\"width: 100%; height: 100%; object-fit: cover;\">")
          }, {
            code: "en-US",
            name: "English",
            flag: "<img src=\"".concat(_0x27569d, "\" alt=\"English\" class=\"flag-image\" style=\"width: 100%; height: 100%; object-fit: cover;\">")
          }, {
            code: "ja-JP",
            name: "鏃ユ湰瑾�",
            flag: "<img src=\"".concat(_0x16ed7b, "\" alt=\"日本語\" class=\"flag-image\" style=\"width: 100%; height: 100%; object-fit: cover;\">")
          }, {
            code: "ko-KR",
            name: "頃滉淡鞏�",
            flag: "<img src=\"".concat(_0x89a4f0, "\" alt=\"한국어\" class=\"flag-image\" style=\"width: 100%; height: 100%; object-fit: cover;\">")
          }, {
            code: "ru-RU",
            name: "Русский",
            flag: "<img src=\"".concat(_0x2c20ce, "\" alt=\"Рус褋泻懈泄\" class=\"flag-image\" style=\"width: 100%; height: 100%; object-fit: cover;\">")
          }];
          var _0x43395f = (0, _0x3bfaac.EW)(function () {
            return _0x33dd5f.value;
          });
          var _0x20133b = function () {
            var _0x4ad9e6 = _0x307ded.find(function (_0x5975ea) {
              return _0x5975ea.code === _0x43395f.value;
            });
            return _0x4ad9e6 ? _0x4ad9e6.flag : "";
          };
          var _0xdf553e = function () {
            _0x5ca63f.value = !_0x5ca63f.value;
            _0x5ca63f.value && (0, _0x3bfaac.dY)(function () {
              if (_0x2fc8b6.value) {
                var _0x9d519a = _0x2fc8b6.value.getBoundingClientRect();
                _0x9d519a.right > window.innerWidth && (_0x2fc8b6.value.style.right = "0", _0x2fc8b6.value.style.left = "auto");
                _0x9d519a.bottom > window.innerHeight && (_0x2fc8b6.value.style.bottom = "calc(100% + 8px)", _0x2fc8b6.value.style.top = "auto");
              }
            });
          };
          var _0x2e4c18 = function (_0x3e8007) {
            (0, _0x5952a0.setLanguage)(_0x3e8007);
            _0x5ca63f.value = false;
            var _0x353071 = new CustomEvent("languageChanged", {
              detail: _0x3e8007
            });
            window.dispatchEvent(_0x353071);
          };
          var _0x4b67ab = function (_0x73136b) {
            var _0x188ec3 = document.querySelector(".language-selector");
            _0x188ec3 && !_0x188ec3.contains(_0x73136b.target) && (_0x5ca63f.value = false);
          };
          (0, _0x3bfaac.sV)(function () {
            document.addEventListener("click", _0x4b67ab);
          });
          (0, _0x3bfaac.hi)(function () {
            document.removeEventListener("click", _0x4b67ab);
          });
          return {
            isOpen: _0x5ca63f,
            languages: _0x307ded,
            currentLanguage: _0x43395f,
            toggleDropdown: _0xdf553e,
            changeLanguage: _0x2e4c18,
            dropdown: _0x2fc8b6,
            getCurrentLanguageFlag: _0x20133b
          };
        }
      };
      var _0x424193 = _0x33dcb8(1456);
      const _0x573a7e = (0, _0x424193.A)(_0x896cf5, [["render", _0x2de4e1], ["__scopeId", "data-v-3cf1dd38"]]);
      const _0x4e88e8 = _0x573a7e;
    },
    8648: (_0x2e6e2b, _0x2b8046, _0x5d3b09) => {
      "use strict";

      _0x5d3b09.r(_0x2b8046);
      _0x5d3b09.d(_0x2b8046, {
        default: () => _0x495200,
        reloadMessages: () => _0x59737d,
        setLanguage: () => _0x1b5761,
        updatePageTitle: () => _0x1592b6
      });
      var _0x2bd292 = _0x5d3b09(5949);
      var _0x4d6af8 = _0x5d3b09(4089);
      _0x5d3b09(6027);
      _0x5d3b09(3428);
      _0x5d3b09(6042);
      _0x5d3b09(4886);
      _0x5d3b09(8543);
      _0x5d3b09(5331);
      _0x5d3b09(6022);
      _0x5d3b09(5416);
      _0x5d3b09(2180);
      _0x5d3b09(1795);
      _0x5d3b09(8101);
      _0x5d3b09(7989);
      _0x5d3b09(6883);
      _0x5d3b09(5026);
      _0x5d3b09(3980);
      var _0x171456 = _0x5d3b09(8603);
      var _0xa970c9 = _0x5d3b09(3702);
      var _0x3ebb0b = _0x5d3b09(4136);
      var _0x4acebb = function (_0x3afd33) {
        Object.keys(_0x3afd33).forEach(function (_0xc65c3) {
          var _0x6d61e1;
          null !== (_0x6d61e1 = _0x3afd33[_0xc65c3]) && undefined !== _0x6d61e1 && _0x6d61e1.common && (_0x3afd33[_0xc65c3].common.appName = _0xa970c9.SITE_CONFIG.siteName, _0x3afd33[_0xc65c3].common.welcome && _0x3afd33[_0xc65c3].common.welcome.includes("V2Board Admin") && (_0x3afd33[_0xc65c3].common.welcome = _0x3afd33[_0xc65c3].common.welcome.replace("V2Board Admin", _0xa970c9.SITE_CONFIG.siteName)));
        });
        return _0x3afd33;
      };
      var _0x17c337 = function () {
        var _0x3dbb0f = navigator.language || navigator.userLanguage;
        return "zh-CN" === _0x3dbb0f ? "zh-CN" : "zh-TW" === _0x3dbb0f || "zh-HK" === _0x3dbb0f ? "zh-TW" : "ja" === _0x3dbb0f || "ja-JP" === _0x3dbb0f ? "ja-JP" : "ko" === _0x3dbb0f || "ko-KR" === _0x3dbb0f ? "ko-KR" : "ru" === _0x3dbb0f || "ru-RU" === _0x3dbb0f ? "ru-RU" : _0x3dbb0f.startsWith("zh") ? "zh-CN" : _0x3dbb0f.startsWith("ja") ? "ja-JP" : _0x3dbb0f.startsWith("ko") ? "ko-KR" : _0x3dbb0f.startsWith("ru") ? "ru-RU" : "en-US";
      };
      var _0x2052b9 = function () {
        return localStorage.getItem("language") || _0xa970c9.DEFAULT_CONFIG.defaultLanguage || _0x17c337();
      };
      var _0x3453e3 = ["zh-CN", "en-US", "zh-TW", "ja-JP", "ko-KR", "ru-RU"];
      var _0x366436 = function () {
        var _0x4e8cb1 = (0, _0x4d6af8.A)((0, _0x2bd292.A)().mark(function _0x61ad3b(_0x1142d5) {
          var _0x3e6e56;
          var _0x260eff;
          var _0x505c0e;
          var _0x509f5b;
          var _0x1e3a21;
          var _0x13da57;
          var _0x587414;
          var _0x418050;
          var _0x4719e9;
          var _0x124223;
          var _0x456a5c;
          var _0x55d1a3;
          return (0, _0x2bd292.A)().wrap(function (_0x31a79d) {
            while (1) {
              switch (_0x31a79d.prev = _0x31a79d.next) {
                case 0:
                  if (_0x3e6e56 = {}, _0x2052b9(), _0x31a79d.prev = 2, _0x260eff = null, !_0x1142d5) {
                    _0x31a79d.next = 16;
                    break;
                  }
                  _0x31a79d.prev = 6;
                  _0x31a79d.next = 9;
                  return Promise.all([_0x5d3b09.e(865), _0x5d3b09.e(752), _0x5d3b09.e(234), _0x5d3b09.e(492), _0x5d3b09.e(18), _0x5d3b09.e(110)]).then(_0x5d3b09.bind(_0x5d3b09, 8524));
                case 9:
                  _0x260eff = _0x31a79d.sent;
                  _0x31a79d.next = 14;
                  break;
                case 12:
                  _0x31a79d.prev = 12;
                  _0x31a79d.t0 = _0x31a79d.catch(6);
                case 14:
                  _0x31a79d.next = 24;
                  break;
                case 16:
                  _0x31a79d.prev = 16;
                  _0x31a79d.next = 19;
                  return _0x5d3b09.e(899).then(_0x5d3b09.bind(_0x5d3b09, 8143));
                case 19:
                  _0x260eff = _0x31a79d.sent;
                  _0x31a79d.next = 24;
                  break;
                case 22:
                  _0x31a79d.prev = 22;
                  _0x31a79d.t1 = _0x31a79d.catch(16);
                case 24:
                  if (_0x260eff && _0x260eff.default) {
                    for (_0x505c0e = 0, _0x509f5b = _0x3453e3; _0x505c0e < _0x509f5b.length; _0x505c0e++) {
                      _0x1e3a21 = _0x509f5b[_0x505c0e];
                      _0x260eff.default[_0x1e3a21] && (_0x3e6e56[_0x1e3a21] = _0x260eff.default[_0x1e3a21]);
                    }
                  }
                  _0x13da57 = 0;
                  _0x587414 = _0x3453e3;
                case 26:
                  if (!(_0x13da57 < _0x587414.length)) {
                    _0x31a79d.next = 85;
                    break;
                  }
                  if (_0x418050 = _0x587414[_0x13da57], _0x3e6e56[_0x418050]) {
                    _0x31a79d.next = 82;
                    break;
                  }
                  if (_0x31a79d.prev = 29, _0x4719e9 = null, _0x124223 = _0x1142d5 ? "./locales/" : "./locales/auth/", "zh-CN" !== _0x418050) {
                    _0x31a79d.next = 38;
                    break;
                  }
                  _0x31a79d.next = 35;
                  return _0x5d3b09(671)("".concat(_0x124223, "zh-CN.js"));
                case 35:
                  _0x4719e9 = _0x31a79d.sent;
                  _0x31a79d.next = 66;
                  break;
                case 38:
                  if ("en-US" !== _0x418050) {
                    _0x31a79d.next = 44;
                    break;
                  }
                  _0x31a79d.next = 41;
                  return _0x5d3b09(6243)("".concat(_0x124223, "en-US.js"));
                case 41:
                  _0x4719e9 = _0x31a79d.sent;
                  _0x31a79d.next = 66;
                  break;
                case 44:
                  if ("zh-TW" !== _0x418050) {
                    _0x31a79d.next = 50;
                    break;
                  }
                  _0x31a79d.next = 47;
                  return _0x5d3b09(2467)("".concat(_0x124223, "zh-TW.js"));
                case 47:
                  _0x4719e9 = _0x31a79d.sent;
                  _0x31a79d.next = 66;
                  break;
                case 50:
                  if ("ja-JP" !== _0x418050) {
                    _0x31a79d.next = 56;
                    break;
                  }
                  _0x31a79d.next = 53;
                  return _0x5d3b09(679)("".concat(_0x124223, "ja-JP.js"));
                case 53:
                  _0x4719e9 = _0x31a79d.sent;
                  _0x31a79d.next = 66;
                  break;
                case 56:
                  if ("ko-KR" !== _0x418050) {
                    _0x31a79d.next = 62;
                    break;
                  }
                  _0x31a79d.next = 59;
                  return _0x5d3b09(4927)("".concat(_0x124223, "ko-KR.js"));
                case 59:
                  _0x4719e9 = _0x31a79d.sent;
                  _0x31a79d.next = 66;
                  break;
                case 62:
                  if ("ru-RU" !== _0x418050) {
                    _0x31a79d.next = 66;
                    break;
                  }
                  _0x31a79d.next = 65;
                  return _0x5d3b09(4906)("".concat(_0x124223, "ru-RU.js"));
                case 65:
                  _0x4719e9 = _0x31a79d.sent;
                case 66:
                  _0x4719e9 && _0x4719e9.default && (_0x3e6e56[_0x418050] = _0x4719e9.default);
                  _0x31a79d.next = 82;
                  break;
                case 69:
                  if (_0x31a79d.prev = 69, _0x31a79d.t2 = _0x31a79d.catch(29), "en-US" === _0x418050) {
                    _0x31a79d.next = 82;
                    break;
                  }
                  _0x31a79d.prev = 72;
                  _0x456a5c = _0x1142d5 ? "./locales/en-US.js" : "./locales/auth/en-US.js";
                  _0x31a79d.next = 76;
                  return _0x5d3b09(5972)(_0x456a5c);
                case 76:
                  _0x55d1a3 = _0x31a79d.sent;
                  _0x55d1a3 && _0x55d1a3.default && (_0x3e6e56[_0x418050] = _0x55d1a3.default);
                  _0x31a79d.next = 82;
                  break;
                case 80:
                  _0x31a79d.prev = 80;
                  _0x31a79d.t3 = _0x31a79d.catch(72);
                case 82:
                  _0x13da57++;
                  _0x31a79d.next = 26;
                  break;
                case 85:
                  _0x31a79d.next = 89;
                  break;
                case 87:
                  _0x31a79d.prev = 87;
                  _0x31a79d.t4 = _0x31a79d.catch(2);
                case 89:
                  return _0x31a79d.abrupt("return", _0x4acebb(_0x3e6e56));
                case 90:
                case "end":
                  return _0x31a79d.stop();
              }
            }
          }, _0x61ad3b, null, [[2, 87], [6, 12], [16, 22], [29, 69], [72, 80]]);
        }));
        return function (_0xcd5e7) {
          return _0x4e8cb1.apply(this, arguments);
        };
      }();
      var _0x431c7a = (0, _0x171456.hU)({
        legacy: false,
        locale: _0x2052b9(),
        fallbackLocale: "en-US",
        messages: {},
        silentTranslationWarn: true,
        missingWarn: false,
        fallbackWarn: false
      });
      var _0x1b5761 = function () {
        var _0x16a77e = (0, _0x4d6af8.A)((0, _0x2bd292.A)().mark(function _0x3a0134(_0x25ec68) {
          var _0x38b853;
          var _0xb6b5cf;
          var _0x3e7130;
          var _0x3ef216;
          var _0x36d12f;
          var _0x2dad32;
          return (0, _0x2bd292.A)().wrap(function (_0x5a78a8) {
            while (1) {
              switch (_0x5a78a8.prev = _0x5a78a8.next) {
                case 0:
                  for (_0x3453e3.includes(_0x25ec68) || (_0x25ec68 = "en-US"), _0x38b853 = (0, _0x3ebb0b.checkLoginStatus)(), _0xb6b5cf = 0, _0x3e7130 = _0x3453e3; _0xb6b5cf < _0x3e7130.length; _0xb6b5cf++) {
                    _0x3ef216 = _0x3e7130[_0xb6b5cf];
                    _0x431c7a.global.setLocaleMessage(_0x3ef216, {});
                  }
                  _0x5a78a8.next = 5;
                  return _0x366436(_0x38b853);
                case 5:
                  for (_0x2dad32 in _0x36d12f = _0x5a78a8.sent, _0x36d12f) _0x36d12f[_0x2dad32] && _0x431c7a.global.setLocaleMessage(_0x2dad32, _0x36d12f[_0x2dad32]);
                  _0x431c7a.global.locale.value = _0x25ec68;
                  localStorage.setItem("language", _0x25ec68);
                  document.querySelector("html").setAttribute("lang", _0x25ec68);
                  _0x1592b6();
                  setTimeout(function () {
                    _0x1592b6();
                  }, 300);
                  return _0x5a78a8.abrupt("return", {
                    success: true,
                    currentLang: _0x25ec68,
                    availableLocales: Object.keys(_0x36d12f)
                  });
                case 13:
                case "end":
                  return _0x5a78a8.stop();
              }
            }
          }, _0x3a0134);
        }));
        return function (_0x2ad7ff) {
          return _0x16a77e.apply(this, arguments);
        };
      }();
      var _0x1592b6 = function () {
        var _0x339fea;
        var _0x4be1f8;
        if (null !== (_0x339fea = window.router) && undefined !== _0x339fea && null !== (_0x339fea = _0x339fea.currentRoute) && undefined !== _0x339fea && null !== (_0x339fea = _0x339fea.value) && undefined !== _0x339fea && null !== (_0x339fea = _0x339fea.meta) && undefined !== _0x339fea && _0x339fea.titleKey) {
          var _0x570e11 = window.router.currentRoute.value.meta.titleKey;
          try {
            var _0x25edbd = _0x431c7a.global.t(_0x570e11);
            document.title = "".concat(_0x25edbd, " - ").concat(_0xa970c9.SITE_CONFIG.siteName);
          } catch (_0x4a4b3e) {
            document.title = _0xa970c9.SITE_CONFIG.siteName;
          }
        } else {
          null !== (_0x4be1f8 = window.router) && undefined !== _0x4be1f8 && null !== (_0x4be1f8 = _0x4be1f8.currentRoute) && undefined !== _0x4be1f8 && _0x4be1f8.value && (document.title = _0xa970c9.SITE_CONFIG.siteName);
        }
      };
      var _0x59737d = function () {
        var _0x3e68ae = (0, _0x4d6af8.A)((0, _0x2bd292.A)().mark(function _0x4bf599() {
          var _0x625c87;
          var _0x5b73c1;
          var _0x474419;
          var _0x122a10;
          var _0xe33e84;
          var _0x5b0e45;
          var _0x2c6fb5;
          return (0, _0x2bd292.A)().wrap(function (_0x264e2a) {
            while (1) {
              switch (_0x264e2a.prev = _0x264e2a.next) {
                case 0:
                  for (_0x625c87 = (0, _0x3ebb0b.checkLoginStatus)(), _0x5b73c1 = 0, _0x474419 = _0x3453e3; _0x5b73c1 < _0x474419.length; _0x5b73c1++) {
                    _0x122a10 = _0x474419[_0x5b73c1];
                    _0x431c7a.global.setLocaleMessage(_0x122a10, {});
                  }
                  _0x264e2a.next = 4;
                  return _0x366436(_0x625c87);
                case 4:
                  for (_0x2c6fb5 in _0xe33e84 = _0x264e2a.sent, _0x5b0e45 = _0x431c7a.global.locale.value, _0xe33e84) _0xe33e84[_0x2c6fb5] && _0x431c7a.global.setLocaleMessage(_0x2c6fb5, _0xe33e84[_0x2c6fb5]);
                  _0x431c7a.global.locale.value = _0x5b0e45;
                  _0x1592b6();
                  setTimeout(function () {
                    _0x1592b6();
                  }, 300);
                  return _0x264e2a.abrupt("return", {
                    success: true,
                    currentLang: _0x5b0e45,
                    availableLocales: Object.keys(_0xe33e84)
                  });
                case 11:
                case "end":
                  return _0x264e2a.stop();
              }
            }
          }, _0x4bf599);
        }));
        return function () {
          return _0x3e68ae.apply(this, arguments);
        };
      }();
      (0, _0x4d6af8.A)((0, _0x2bd292.A)().mark(function _0x365076() {
        var _0x95fe8b;
        var _0x19cedf;
        var _0x18b9f7;
        var _0x29bf3f;
        return (0, _0x2bd292.A)().wrap(function (_0x3f09f5) {
          while (1) {
            switch (_0x3f09f5.prev = _0x3f09f5.next) {
              case 0:
                _0x3f09f5.prev = 0;
                _0x95fe8b = (0, _0x3ebb0b.checkLoginStatus)();
                _0x19cedf = _0x2052b9();
                _0x3f09f5.next = 5;
                return _0x366436(_0x95fe8b);
              case 5:
                for (_0x29bf3f in _0x18b9f7 = _0x3f09f5.sent, _0x18b9f7) _0x18b9f7[_0x29bf3f] && _0x431c7a.global.setLocaleMessage(_0x29bf3f, _0x18b9f7[_0x29bf3f]);
                _0x431c7a.global.locale.value = _0x19cedf;
                _0x1592b6();
                _0x3f09f5.next = 13;
                break;
              case 11:
                _0x3f09f5.prev = 11;
                _0x3f09f5.t0 = _0x3f09f5.catch(0);
              case 13:
              case "end":
                return _0x3f09f5.stop();
            }
          }
        }, _0x365076, null, [[0, 11]]);
      }))();
      const _0x495200 = _0x431c7a;
    },
    9266: (_0x17157d, _0x54d254, _0x24e18e) => {
      "use strict";

      _0x17157d.exports = _0x24e18e.p + "static/img/GB.38a1cd9c.svg";
    },
    9508: (_0x1864c2, _0x250506, _0x5c3e88) => {
      "use strict";

      _0x5c3e88.d(_0x250506, {
        D: () => _0x2fc6a3
      });
      _0x5c3e88(3428);
      _0x5c3e88(4886);
      _0x5c3e88(8543);
      _0x5c3e88(6022);
      _0x5c3e88(6883);
      var _0x1459ad = _0x5c3e88(5456);
      var _0x41bc8f = _0x5c3e88(1464);
      var _0x3c3265 = _0x5c3e88(3702);
      function _0x2fc6a3() {
        var _0x337e76 = (0, _0x1459ad.KR)(_0x3c3265.THEME_CONFIG.defaultTheme);
        var _0x545e8d = function () {
          _0x337e76.value = "light" === _0x337e76.value ? "dark" : "light";
          localStorage.setItem("theme", _0x337e76.value);
          _0x57e97b(_0x337e76.value);
        };
        var _0x57e97b = function (_0x1a671e) {
          var _0x52da34 = document.documentElement;
          var _0x411beb = _0x3c3265.THEME_CONFIG[_0x1a671e];
          "dark" === _0x1a671e ? document.body.classList.add("dark-theme") : document.body.classList.remove("dark-theme");
          document.body.offsetHeight;
          _0x52da34.style.setProperty("--theme-color", _0x411beb.primaryColor);
          _0x52da34.style.setProperty("--theme-color-rgb", _0x411beb.primaryColorRgb);
          _0x52da34.style.setProperty("--theme-hover-color", _0x411beb.primaryColorHover);
          _0x52da34.style.setProperty("--primary-color-hover", _0x411beb.primaryColorHover);
          _0x52da34.style.setProperty("--background-color", _0x411beb.backgroundColor);
          _0x52da34.style.setProperty("--card-background", _0x411beb.cardBackground);
          _0x52da34.style.setProperty("--text-color", _0x411beb.textColor);
          _0x52da34.style.setProperty("--secondary-text-color", _0x411beb.secondaryTextColor);
          _0x52da34.style.setProperty("--border-color", _0x411beb.borderColor);
          _0x52da34.style.setProperty("--shadow-color", _0x411beb.shadowColor);
          "dark" === _0x1a671e ? document.querySelectorAll(".auth-card").forEach(function (_0x4c9d29) {
            _0x4c9d29.style.backgroundColor = "#1e1e1e";
            _0x4c9d29.style.boxShadow = "0 0 20px rgba(0, 0, 0, 0.3)";
          }) : document.querySelectorAll(".auth-card").forEach(function (_0x3f2add) {
            _0x3f2add.style.backgroundColor = "";
            _0x3f2add.style.boxShadow = "";
          });
        };
        var _0x1ccdc8 = function () {
          var _0x4430d2 = localStorage.getItem("theme");
          _0x4430d2 ? _0x337e76.value = _0x4430d2 : window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches && (_0x337e76.value = "dark");
          "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", function () {
            _0x57e97b(_0x337e76.value);
          }) : _0x57e97b(_0x337e76.value);
        };
        (0, _0x41bc8f.wB)(_0x337e76, function (_0x1caf1e) {
          _0x57e97b(_0x1caf1e);
        });
        var _0xbb4a70 = function (_0x559937) {
          localStorage.getItem("theme") || (_0x337e76.value = _0x559937.matches ? "dark" : "light");
        };
        (0, _0x41bc8f.sV)(function () {
          if (_0x1ccdc8(), window.matchMedia) {
            var _0x6b78b8 = window.matchMedia("(prefers-color-scheme: dark)");
            _0x6b78b8.addEventListener("change", _0xbb4a70);
          }
        });
        (0, _0x41bc8f.hi)(function () {
          if (window.matchMedia) {
            var _0x5b2815 = window.matchMedia("(prefers-color-scheme: dark)");
            _0x5b2815.removeEventListener("change", _0xbb4a70);
          }
        });
        return {
          theme: _0x337e76,
          toggleTheme: _0x545e8d,
          applyTheme: _0x57e97b
        };
      }
    },
    9706: (_0x465b54, _0x179a6c, _0x243908) => {
      "use strict";

      _0x465b54.exports = _0x243908.p + "static/img/RU.0a9f4dad.svg";
    }
  };
  var _0x814113 = {};
  function _0x3695b5(_0x4c2ec1) {
    var _0x289ae4 = _0x814113[_0x4c2ec1];
    if (undefined !== _0x289ae4) {
      return _0x289ae4.exports;
    }
    _0x814113[_0x4c2ec1] = {
      exports: {}
    };
    var _0xda1511 = _0x814113[_0x4c2ec1];
    _0x1cfe7d[_0x4c2ec1].call(_0xda1511.exports, _0xda1511, _0xda1511.exports, _0x3695b5);
    return _0xda1511.exports;
  }
  _0x3695b5.m = _0x1cfe7d;
  (() => {
    var _0x3c266c = [];
    _0x3695b5.O = (_0x17f159, _0x21b687, _0x3e5bdd, _0x272e81) => {
      if (!_0x21b687) {
        var _0x25e602 = Infinity;
        for (_0x258739 = 0; _0x258739 < _0x3c266c.length; _0x258739++) {
          for (var [_0x21b687, _0x3e5bdd, _0x272e81] = _0x3c266c[_0x258739], _0xa091b8 = true, _0xe48a54 = 0; _0xe48a54 < _0x21b687.length; _0xe48a54++) {
            (false & _0x272e81 || _0x25e602 >= _0x272e81) && Object.keys(_0x3695b5.O).every(_0x5a6f59 => _0x3695b5.O[_0x5a6f59](_0x21b687[_0xe48a54])) ? _0x21b687.splice(_0xe48a54--, 1) : (_0xa091b8 = false, _0x272e81 < _0x25e602 && (_0x25e602 = _0x272e81));
          }
          if (_0xa091b8) {
            _0x3c266c.splice(_0x258739--, 1);
            var _0x51b98c = _0x3e5bdd();
            undefined !== _0x51b98c && (_0x17f159 = _0x51b98c);
          }
        }
        return _0x17f159;
      }
      _0x272e81 = _0x272e81 || 0;
      for (var _0x258739 = _0x3c266c.length; _0x258739 > 0 && _0x3c266c[_0x258739 - 1][2] > _0x272e81; _0x258739--) {
        _0x3c266c[_0x258739] = _0x3c266c[_0x258739 - 1];
      }
      _0x3c266c[_0x258739] = [_0x21b687, _0x3e5bdd, _0x272e81];
    };
  })();
  (() => {
    _0x3695b5.n = _0x187f32 => {
      var _0xb2c0b4 = _0x187f32 && _0x187f32.__esModule ? () => _0x187f32.default : () => _0x187f32;
      _0x3695b5.d(_0xb2c0b4, {
        a: _0xb2c0b4
      });
      return _0xb2c0b4;
    };
  })();
  (() => {
    _0x3695b5.d = (_0x5dda90, _0x296327) => {
      for (var _0x5e4b78 in _0x296327) _0x3695b5.o(_0x296327, _0x5e4b78) && !_0x3695b5.o(_0x5dda90, _0x5e4b78) && Object.defineProperty(_0x5dda90, _0x5e4b78, {
        enumerable: true,
        get: _0x296327[_0x5e4b78]
      });
    };
  })();
  (() => {
    _0x3695b5.f = {};
    _0x3695b5.e = _0x56be44 => Promise.all(Object.keys(_0x3695b5.f).reduce((_0x1370d0, _0x26f29e) => (_0x3695b5.f[_0x26f29e](_0x56be44, _0x1370d0), _0x1370d0), []));
  })();
  (() => {
    _0x3695b5.u = _0x9781c3 => "static/js/" + ({
      18: "locale-locales-en-US-js",
      110: "locale-index",
      234: "locale-locales-ja-JP-js",
      299: "locale-locales-auth-zh-CN-js",
      329: "locale-locales-auth-ja-JP-js",
      458: "locale-locales-auth-ru-RU-js",
      492: "locale-locales-zh-TW-js",
      580: "locale-locales-zh-CN-js",
      752: "locale-locales-ko-KR-js",
      785: "locale-locales-auth-en-US-js",
      799: "locale-locales-auth-ko-KR-js",
      865: "locale-locales-ru-RU-js",
      899: "locale-auth-index",
      915: "locale-locales-auth-zh-TW-js"
    }[_0x9781c3] || _0x9781c3) + "." + {
      18: "076de740",
      27: "69433718",
      44: "3e3811fd",
      108: "74bbbf93",
      110: "f3b97181",
      150: "6a2b9f11",
      234: "38ddf76c",
      299: "228b28da",
      302: "58faf6dd",
      325: "20e25f0b",
      329: "56366d24",
      443: "9551df4d",
      458: "0054b7a4",
      492: "bd2de39a",
      580: "c2281390",
      587: "81aba1b4",
      597: "391404d2",
      605: "d4e0b17e",
      684: "189ac98f",
      710: "76232ba1",
      751: "ed69f59e",
      752: "1debe392",
      753: "fd10459d",
      785: "6a82c609",
      796: "3734b2d0",
      799: "9143502b",
      865: "c0178189",
      870: "75219526",
      899: "ea1c06d0",
      915: "d2f6c3ae",
      933: "d3ed7e10",
      951: "bc41b04b",
      992: "b74f0e8f",
      996: "6e16a08c"
    }[_0x9781c3] + ".js";
  })();
  (() => {
    _0x3695b5.miniCssF = _0x6c3978 => "static/css/" + _0x6c3978 + "." + {
      27: "b5eb8505",
      44: "a1e5be56",
      108: "39350b9f",
      150: "6efc8c25",
      302: "4ce46fe1",
      325: "e86b3e58",
      443: "b40ed602",
      587: "cfbd7185",
      597: "c0a00cfd",
      605: "1998277f",
      684: "ba15c087",
      710: "12a3395c",
      751: "ff1cf575",
      796: "e5dfcc15",
      933: "ea827e09",
      951: "4d0b5d85",
      992: "8d28d25b",
      996: "af88474d"
    }[_0x6c3978] + ".css";
  })();
  (() => {
    _0x3695b5.g = function () {
      if ("object" === typeof globalThis) {
        return globalThis;
      }
      try {
        return this || new Function("return this")();
      } catch (_0x23d115) {
        if ("object" === typeof window) {
          return window;
        }
      }
    }();
  })();
  (() => {
    _0x3695b5.o = (_0x479b5f, _0x5145f7) => Object.prototype.hasOwnProperty.call(_0x479b5f, _0x5145f7);
  })();
  (() => {
    var _0x2daf4c = {};
    var _0x571f8d = "ez-theme:";
    _0x3695b5.l = (_0x7320b2, _0x2e7a09, _0x350588, _0xc2414d) => {
      if (_0x2daf4c[_0x7320b2]) {
        _0x2daf4c[_0x7320b2].push(_0x2e7a09);
      } else {
        var _0x461ccc;
        var _0x1744ed;
        if (undefined !== _0x350588) {
          for (var _0x37a3c9 = document.getElementsByTagName("script"), _0x33ddea = 0; _0x33ddea < _0x37a3c9.length; _0x33ddea++) {
            var _0x1acfea = _0x37a3c9[_0x33ddea];
            if (_0x1acfea.getAttribute("src") == _0x7320b2 || _0x1acfea.getAttribute("data-webpack") == _0x571f8d + _0x350588) {
              _0x461ccc = _0x1acfea;
              break;
            }
          }
        }
        _0x461ccc || (_0x1744ed = true, _0x461ccc = document.createElement("script"), _0x461ccc.charset = "utf-8", _0x461ccc.timeout = 120, _0x3695b5.nc && _0x461ccc.setAttribute("nonce", _0x3695b5.nc), _0x461ccc.setAttribute("data-webpack", _0x571f8d + _0x350588), _0x461ccc.src = _0x7320b2);
        _0x2daf4c[_0x7320b2] = [_0x2e7a09];
        var _0x474ffe = (_0x4d2c64, _0x8bc0b9) => {
          _0x461ccc.onerror = _0x461ccc.onload = null;
          clearTimeout(_0x10a999);
          var _0x39fd77 = _0x2daf4c[_0x7320b2];
          if (delete _0x2daf4c[_0x7320b2], _0x461ccc.parentNode && _0x461ccc.parentNode.removeChild(_0x461ccc), _0x39fd77 && _0x39fd77.forEach(_0x268368 => _0x268368(_0x8bc0b9)), _0x4d2c64) {
            return _0x4d2c64(_0x8bc0b9);
          }
        };
        var _0x10a999 = setTimeout(_0x474ffe.bind(null, undefined, {
          type: "timeout",
          target: _0x461ccc
        }), 120000);
        _0x461ccc.onerror = _0x474ffe.bind(null, _0x461ccc.onerror);
        _0x461ccc.onload = _0x474ffe.bind(null, _0x461ccc.onload);
        _0x1744ed && document.head.appendChild(_0x461ccc);
      }
    };
  })();
  (() => {
    _0x3695b5.r = _0x5cfb5f => {
      "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(_0x5cfb5f, Symbol.toStringTag, {
        value: "Module"
      });
      Object.defineProperty(_0x5cfb5f, "__esModule", {
        value: true
      });
    };
  })();
  (() => {
    _0x3695b5.p = "";
  })();
  (() => {
    if ("undefined" !== typeof document) {
      var _0x4e3e24 = (_0x2713c2, _0x22ce1c, _0x3f60f1, _0x4ea38a, _0xb592f0) => {
        var _0x303cb1 = document.createElement("link");
        _0x303cb1.rel = "stylesheet";
        _0x303cb1.type = "text/css";
        _0x3695b5.nc && (_0x303cb1.nonce = _0x3695b5.nc);
        var _0x3cbdfa = _0x38a7d0 => {
          if (_0x303cb1.onerror = _0x303cb1.onload = null, "load" === _0x38a7d0.type) {
            _0x4ea38a();
          } else {
            var _0x1124bf = _0x38a7d0 && _0x38a7d0.type;
            var _0x5c6101 = _0x38a7d0 && _0x38a7d0.target && _0x38a7d0.target.href || _0x22ce1c;
            var _0x229257 = new Error("Loading CSS chunk " + _0x2713c2 + " failed.\n(" + _0x1124bf + ": " + _0x5c6101 + ")");
            _0x229257.name = "ChunkLoadError";
            _0x229257.code = "CSS_CHUNK_LOAD_FAILED";
            _0x229257.type = _0x1124bf;
            _0x229257.request = _0x5c6101;
            _0x303cb1.parentNode && _0x303cb1.parentNode.removeChild(_0x303cb1);
            _0xb592f0(_0x229257);
          }
        };
        _0x303cb1.onerror = _0x303cb1.onload = _0x3cbdfa;
        _0x303cb1.href = _0x22ce1c;
        _0x3f60f1 ? _0x3f60f1.parentNode.insertBefore(_0x303cb1, _0x3f60f1.nextSibling) : document.head.appendChild(_0x303cb1);
        return _0x303cb1;
      };
      var _0xf28213 = (_0x4ff923, _0x38ed92) => {
        for (var _0x1c349d = document.getElementsByTagName("link"), _0x4b61e7 = 0; _0x4b61e7 < _0x1c349d.length; _0x4b61e7++) {
          var _0x412f32 = _0x1c349d[_0x4b61e7];
          var _0x1bb8f0 = _0x412f32.getAttribute("data-href") || _0x412f32.getAttribute("href");
          if ("stylesheet" === _0x412f32.rel && (_0x1bb8f0 === _0x4ff923 || _0x1bb8f0 === _0x38ed92)) {
            return _0x412f32;
          }
        }
        var _0x550a2a = document.getElementsByTagName("style");
        for (_0x4b61e7 = 0; _0x4b61e7 < _0x550a2a.length; _0x4b61e7++) {
          _0x412f32 = _0x550a2a[_0x4b61e7];
          _0x1bb8f0 = _0x412f32.getAttribute("data-href");
          if (_0x1bb8f0 === _0x4ff923 || _0x1bb8f0 === _0x38ed92) {
            return _0x412f32;
          }
        }
      };
      var _0x2e8315 = _0x1e4af8 => new Promise((_0x201b81, _0x409e16) => {
        var _0x36dfe3 = _0x3695b5.miniCssF(_0x1e4af8);
        var _0x29d834 = _0x3695b5.p + _0x36dfe3;
        if (_0xf28213(_0x36dfe3, _0x29d834)) {
          return _0x201b81();
        }
        _0x4e3e24(_0x1e4af8, _0x29d834, null, _0x201b81, _0x409e16);
      });
      var _0x2365ba = {
        57: 0
      };
      _0x3695b5.f.miniCss = (_0x3f90a0, _0x485897) => {
        var _0x3bff94 = {
          27: 1,
          44: 1,
          108: 1,
          150: 1,
          302: 1,
          325: 1,
          443: 1,
          587: 1,
          597: 1,
          605: 1,
          684: 1,
          710: 1,
          751: 1,
          796: 1,
          933: 1,
          951: 1,
          992: 1,
          996: 1
        };
        _0x2365ba[_0x3f90a0] ? _0x485897.push(_0x2365ba[_0x3f90a0]) : 0 !== _0x2365ba[_0x3f90a0] && _0x3bff94[_0x3f90a0] && _0x485897.push(_0x2365ba[_0x3f90a0] = _0x2e8315(_0x3f90a0).then(() => {
          _0x2365ba[_0x3f90a0] = 0;
        }, _0x3eeb11 => {
          throw delete _0x2365ba[_0x3f90a0], _0x3eeb11;
        }));
      };
    }
  })();
  (() => {
    var _0x2e86ab = {
      57: 0
    };
    _0x3695b5.f.j = (_0x18300d, _0x4e8c69) => {
      var _0x7a785e = _0x3695b5.o(_0x2e86ab, _0x18300d) ? _0x2e86ab[_0x18300d] : undefined;
      if (0 !== _0x7a785e) {
        if (_0x7a785e) {
          _0x4e8c69.push(_0x7a785e[2]);
        } else {
          var _0x1bcfcb = new Promise((_0x1f51c2, _0x5242ea) => _0x7a785e = _0x2e86ab[_0x18300d] = [_0x1f51c2, _0x5242ea]);
          _0x4e8c69.push(_0x7a785e[2] = _0x1bcfcb);
          var _0x713099 = _0x3695b5.p + _0x3695b5.u(_0x18300d);
          var _0x283b0b = new Error();
          var _0x1e1ee5 = _0x878627 => {
            if (_0x3695b5.o(_0x2e86ab, _0x18300d) && (_0x7a785e = _0x2e86ab[_0x18300d], 0 !== _0x7a785e && (_0x2e86ab[_0x18300d] = undefined), _0x7a785e)) {
              var _0x11c304 = _0x878627 && ("load" === _0x878627.type ? "missing" : _0x878627.type);
              var _0x4b68be = _0x878627 && _0x878627.target && _0x878627.target.src;
              _0x283b0b.message = "Loading chunk " + _0x18300d + " failed.\n(" + _0x11c304 + ": " + _0x4b68be + ")";
              _0x283b0b.name = "ChunkLoadError";
              _0x283b0b.type = _0x11c304;
              _0x283b0b.request = _0x4b68be;
              _0x7a785e[1](_0x283b0b);
            }
          };
          _0x3695b5.l(_0x713099, _0x1e1ee5, "chunk-" + _0x18300d, _0x18300d);
        }
      }
    };
    _0x3695b5.O.j = _0x597492 => 0 === _0x2e86ab[_0x597492];
    var _0x1c4043 = (_0x1a3a51, _0x4bd615) => {
      var _0x42845c;
      var _0x28c3f0;
      var [_0x2a8c63, _0x2ae44f, _0x5af319] = _0x4bd615;
      var _0x412144 = 0;
      if (_0x2a8c63.some(_0x30c73a => 0 !== _0x2e86ab[_0x30c73a])) {
        for (_0x42845c in _0x2ae44f) _0x3695b5.o(_0x2ae44f, _0x42845c) && (_0x3695b5.m[_0x42845c] = _0x2ae44f[_0x42845c]);
        if (_0x5af319) {
          var _0x53ddbf = _0x5af319(_0x3695b5);
        }
      }
      for (_0x1a3a51 && _0x1a3a51(_0x4bd615); _0x412144 < _0x2a8c63.length; _0x412144++) {
        _0x28c3f0 = _0x2a8c63[_0x412144];
        _0x3695b5.o(_0x2e86ab, _0x28c3f0) && _0x2e86ab[_0x28c3f0] && _0x2e86ab[_0x28c3f0][0]();
        _0x2e86ab[_0x28c3f0] = 0;
      }
      return _0x3695b5.O(_0x53ddbf);
    };
    self.webpackChunkez_theme = self.webpackChunkez_theme || [];
    var _0x2c1eda = self.webpackChunkez_theme;
    _0x2c1eda.forEach(_0x1c4043.bind(null, 0));
    _0x2c1eda.push = _0x1c4043.bind(null, _0x2c1eda.push.bind(_0x2c1eda));
  })();
  var _0x42ef49 = _0x3695b5.O(undefined, [504], () => _0x3695b5(865));
  _0x42ef49 = _0x3695b5.O(_0x42ef49);
})();