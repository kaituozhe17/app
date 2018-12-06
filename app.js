webpackJsonp([66], [, , ,
    function (t, e, n) {
        "use strict";
        n.d(e, "g", function () {
            return v
        }), n.d(e, "l", function () {
            return h
        }), n.d(e, "d", function () {
            return k
        }), n.d(e, "k", function () {
            return w
        }), n.d(e, "b", function () {
            return C
        }), n.d(e, "e", function () {
            return y
        }), n.d(e, "q", function () {
            return T
        }), n.d(e, "j", function () {
            return x
        }), n.d(e, "n", function () {
            return S
        }), n.d(e, "m", function () {
            return $
        }), n.d(e, "i", function () {
            return A
        }), n.d(e, "c", function () {
            return P
        }), n.d(e, "h", function () {
            return E
        }), n.d(e, "p", function () {
            return I
        }), n.d(e, "a", function () {
            return L
        }), n.d(e, "o", function () {
            return R
        }), n.d(e, "f", function () {
            return N
        });
        var s = n(79),
            a = n.n(s),
            i = n(28),
            o = n.n(i),
            r = n(8),
            c = n.n(r),
            u = n(34),
            l = n.n(u),
            p = n(12),
            d = n(4),
            _ = n(461),
            f = n.n(_),
            v = function (t) {
                return new c.a(function (e) {
                    setTimeout(e, t || 0)
                })
            },
            h = function () {
                var t = 'https://static.meiqia.com/dist/standalone.html?eid=27582&metadata={"ID":' + ($storage.get(d.d) || "游客") + ',"昵称":' + ($storage.get(d.e) || "无") + "}";
                return encodeURI(t)
            },
            m = function (t) {
                var e = "";
                return l.a.each(t, function (t, n) {
                    "" === e ? e = "?" + n + "=" + t : e += "&" + n + "=" + t
                }), "https://stats.youlianyc.com/stats/website/report" + e + "&rnd=" + Date.now()
            },
            g = function (t) {
                var e = new XMLHttpRequest;
                e.open("GET", m(t), !0), e.send()
            },
            b = function (t, e, n) {
                if (__ENV__ && 1 === __ENV__.stat_switch) {
                    var s = {
                        url: encodeURIComponent(location.href),
                        u: $storage.get("qk:biz:uid"),
                        uu: $storage.get("qk:biz:uuid"),
                        a: "qianka",
                        t: t,
                        c: e
                    };
                    n && (s.ap = o()(n));
                    var a = $router.currentRoute.name;
                    s.ref = a ? "page_" + a : encodeURIComponent(document.referrer), g(s)
                }
            },
            k = {
                send: g,
                sendAction: b
            },
            w = function (t) {
                var e = {},
                    n = t.split("?");
                if (n.length > 1)
                    for (var s = n[1].split("&"), a = 0; a < s.length; a++) {
                        var i = s[a].split("=");
                        e[i[0]] = i[1]
                    }
                return e
            },
            C = function () {
                return f()()
            },
            y = function (t, e) {
                if (L()) {
                    var s = t;
                    s = decodeURIComponent(s).match(/:\/\/(\S*)\?t=/), s && (s = s[1], n.i(p.b)([s]))
                }
                var a = [],
                    i = t.split("?").length > 1 ? "&" : "?";
                return l.a.each(e, function (t, e) {
                    a.push(e + "=" + encodeURIComponent(t))
                }), [t, a.join("&")].join(i)
            },
            T = function () {
                var t = document.documentElement;
                return parseInt(t.getAttribute("dnt"))
            },
            x = function () {
                var t = /OS ((\d{1,2})_\d{1,2}||(\d{1,2})_\d{1,2}_\d{1,2}) like Mac OS X/i,
                    e = t.exec(window.navigator.userAgent),
                    n = e && e[1] && e[1].substr(0, 2);
                return 11 === parseInt(n)
            },
            S = function () {
                var t = /OS ((\d{1,2})_\d{1,2}||(\d{1,2})_\d{1,2}_\d{1,2}) like Mac OS X/i,
                    e = t.exec(window.navigator.userAgent),
                    n = e && e[1] && e[1].substr(0, 2);
                return parseInt(n) < 8
            },
            $ = function () {
                var t = /OS ((\d{1,2})_\d{1,2}||(\d{1,2})_\d{1,2}_\d{1,2}) like Mac OS X/i,
                    e = t.exec(window.navigator.userAgent),
                    n = e && e[1] && e[1].substr(0, 2);
                return parseInt(n)
            },
            A = function t(e) {
                var n = e instanceof Array ? [] : {};
                for (var s in e) n[s] = "object" === a()(e[s]) ? t(e[s]) : e[s];
                return n
            },
            P = function () {
                if (/iPad/.test(navigator.userAgent))
                    if (document.body.offsetWidth > document.body.offsetHeight) {
                        var t = document.createElement("div");
                        t.id = "ipad_hor", t.innerHTML = '\n        <div class="bg"></div>\n        <img src="//assets.qkcdn.com/images/fb06939b182027ae770b1326dc284674.png" />\n      ', document.body.appendChild(t)
                    } else {
                        var e = document.getElementById("ipad_hor");
                        e && document.body.removeChild(e)
                    }
            },
            E = function (t, e, n) {
                var s = t.split(":");
                if (2 !== s.length) return !1;
                var a = e.split(":");
                if (2 !== a.length) return !1;
                var i = new Date,
                    o = new Date,
                    r = new Date;
                return i.setHours(s[0]), i.setMinutes(s[1]), o.setHours(a[0]), o.setMinutes(a[1]), r.getTime() - i.getTime() > 0 && r.getTime() - o.getTime() < 0
            },
            I = function (t, e) {
                var n = new Date(t),
                    s = n.getFullYear(),
                    a = (n.getMonth() + 101 + "").slice(1),
                    i = (n.getDate() + 100 + "").slice(1),
                    o = (n.getHours() + 100 + "").slice(1),
                    r = (n.getMinutes() + 100 + "").slice(1),
                    c = (n.getSeconds() + 100 + "").slice(1);
                return "hh" === e ? o : "mm" === e ? r : "yyyy-MM-dd" === e ? s + "-" + a + "-" + i : "yyyy-MM-dd_zh" === e ? s + "年" + a + "月" + i + "日" : "yyyy.MM.dd hh:mm" === e ? s + "." + a + "." + i + " " + o + ":" + r : s + "-" + a + "-" + i + " " + o + ":" + r + ":" + c
            },
            L = function () {
                var t = navigator.userAgent,
                    e = new RegExp("bid=([a-zA-Z0-9.-_]+)"),
                    n = e.test(t);
                return !!/testReading/.test(location.href) || n
            },
            O = function (t) {
                if (t.indexOf("://") > -1) return t;
                var e = location.protocol + "//" + location.host + t;
                return e
            },
            R = function (t, e) {
                t = O(t);
                var s = O("/profile4/profile_service.mobileconfig?return_url=" + encodeURIComponent(t) + "&sid=" + e + "&action_type=certificate");
                L() ? n.i(p.e)(s) : location.href = s
            },
            N = function () {
                var t = $cookie.get("DIS4");
                return new c.a(function (e) {
                    n.i(p.f)(t), e()
                }).then(function () {
                    return $storage.set(d.f, (new Date).getTime())
                })
            }
    },
    function (t, e, n) {
        "use strict";
        n.d(e, "d", function () {
            return s
        }), n.d(e, "e", function () {
            return a
        }), n.d(e, "_2", function () {
            return i
        }), n.d(e, "a", function () {
            return o
        }), n.d(e, "I", function () {
            return r
        }), n.d(e, "p", function () {
            return c
        }), n.d(e, "w", function () {
            return u
        }), n.d(e, "b", function () {
            return l
        }), n.d(e, "_3", function () {
            return p
        }), n.d(e, "S", function () {
            return d
        }), n.d(e, "U", function () {
            return _
        }), n.d(e, "T", function () {
            return f
        }), n.d(e, "F", function () {
            return v
        }), n.d(e, "v", function () {
            return h
        }), n.d(e, "q", function () {
            return m
        }), n.d(e, "_4", function () {
            return g
        }), n.d(e, "P", function () {
            return b
        }), n.d(e, "O", function () {
            return k
        }), n.d(e, "L", function () {
            return w
        }), n.d(e, "J", function () {
            return C
        }), n.d(e, "_6", function () {
            return y
        }), n.d(e, "k", function () {
            return T
        }), n.d(e, "l", function () {
            return x
        }), n.d(e, "m", function () {
            return S
        }), n.d(e, "n", function () {
            return $
        }), n.d(e, "o", function () {
            return A
        }), n.d(e, "j", function () {
            return P
        }), n.d(e, "_1", function () {
            return E
        }), n.d(e, "_0", function () {
            return I
        }), n.d(e, "G", function () {
            return L
        }), n.d(e, "c", function () {
            return O
        }), n.d(e, "Q", function () {
            return R
        }), n.d(e, "H", function () {
            return N
        }), n.d(e, "K", function () {
            return D
        }), n.d(e, "h", function () {
            return F
        }), n.d(e, "r", function () {
            return M
        }), n.d(e, "x", function () {
            return U
        }), n.d(e, "y", function () {
            return q
        }), n.d(e, "z", function () {
            return B
        }), n.d(e, "A", function () {
            return H
        }), n.d(e, "C", function () {
            return z
        }), n.d(e, "D", function () {
            return j
        }), n.d(e, "B", function () {
            return G
        }), n.d(e, "R", function () {
            return K
        }), n.d(e, "g", function () {
            return Y
        }), n.d(e, "_5", function () {
            return V
        }), n.d(e, "_12", function () {
            return W
        }), n.d(e, "_11", function () {
            return Z
        }), n.d(e, "f", function () {
            return J
        }), n.d(e, "_9", function () {
            return X
        }), n.d(e, "_7", function () {
            return Q
        }), n.d(e, "i", function () {
            return tt
        }), n.d(e, "Y", function () {
            return et
        }), n.d(e, "N", function () {
            return nt
        }), n.d(e, "M", function () {
            return st
        }), n.d(e, "_8", function () {
            return at
        }), n.d(e, "_13", function () {
            return it
        }), n.d(e, "X", function () {
            return ot
        }), n.d(e, "s", function () {
            return rt
        }), n.d(e, "t", function () {
            return ct
        }), n.d(e, "E", function () {
            return ut
        }), n.d(e, "V", function () {
            return lt
        }), n.d(e, "W", function () {
            return pt
        }), n.d(e, "_10", function () {
            return dt
        }), n.d(e, "Z", function () {
            return _t
        }), n.d(e, "u", function () {
            return ft
        });
        var s = "qk:biz:uid",
            a = "qk:biz:nickname",
            i = "qk:biz:close_tip",
            o = "qk:biz:uuid",
            r = "v4:biz:last_uid_connect_key",
            c = "v4:biz:task_step",
            u = "v4:biz:task_list_cache",
            l = "v4:biz:assistant_guide",
            p = "v4:biz:flash_login_with_cert",
            d = "v4:biz:gaoe_task_read",
            _ = "v4:biz:gaoe_task_compare_fail",
            f = "v4:biz:gaoe_task_process",
            v = "v4:biz:task_matched",
            h = "v4:biz:lite_task_matched",
            m = "v4:biz:double:is_need_hide",
            g = "v4:biz:easydetail_btn_reward",
            b = "v4:biz:loans_filter",
            k = "v4:biz:loans_apply_click",
            w = "v4:biz:task_is_auto",
            C = "lu",
            y = "ln",
            T = "TASK_STATE_APP_UNINSTALLED",
            x = "TASK_STATE_APPSTORE_HAS_GO",
            S = "TASK_STATE_APP_INSTALLED",
            $ = "TASK_STATE_APP_OPENED",
            A = "TASK_STATE_LOCAL",
            P = "v4:biz:start_remind_popup_hide",
            E = 1,
            I = 2,
            L = (__ENV__.domain, __ENV__.qk_endpoint.split(":")[2], "com.kagou.app"),
            O = "/profile4/trust",
            R = "v4:biz:credit_task_process",
            N = 1,
            D = 0,
            F = 10005,
            M = "v4:push_click_action_time",
            U = 10001,
            q = 10002,
            B = 10003,
            H = 10004,
            z = 10006,
            j = 10007,
            G = 9e4,
            K = "v4:hotsapp:path",
            Y = "v4.5:webclip:maybe_later:click:num",
            V = "crius:subtask:view",
            W = "diablo:rev",
            Z = "diablo:refresh:rev:heartbeat",
            J = "rongyu:last:bind:time",
            X = "rongyuka:prev:scroll:top",
            Q = 921,
            tt = "rongyuka:v5:dashboard:store",
            et = "rongyuka:v5:active:time",
            nt = "explore:open:time",
            st = "explore:new:tip",
            at = "new:flow:step",
            it = "assistant:release:version",
            ot = "need:scroll:appoint",
            rt = "filter:task:array",
            ct = "filter:gaoe:array",
            ut = "task:start:time",
            lt = "complain:start:time",
            pt = "withdraw:start:time",
            dt = "login:start:time",
            _t = "enter:user:time",
            ft = "bonus:task:showed"
    },
    function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return i
        }), n.d(e, "b", function () {
            return o
        });
        var s = n(16),
            a = n.n(s),
            i = new a.a,
            o = {
                LITE_POPUP_OPEN_KEY: "LITE_POPUP_OPEN_KEY",
                POPUP_JAIL_BREAKER: "POPUP_JAIL_BREAKER",
                POPUP_BIND_PHONE: "POPUP_BIND_PHONE",
                POPUP_BIND_ZHIMA: "POPUP_BIND_ZHIMA",
                POPUP_USER_FREEZE: "POPUP_USER_FREEZE",
                POPUP_ASSISTANT_UNOPEN: "POPUP_ASSISTANT_UNOPEN",
                POPUP_ASSISTANT_INVALID: "POPUP_ASSISTANT_INVALID",
                STOP_LITE_POLL_OPEN_STATUS: "STOP_LITE_POLL_OPEN_STATUS",
                ASSISTANT_POPUP: "ASSISTANT_POPUP",
                POPUP_HUMAN_CHECK: "POPUP_HUMAN_CHECK",
                HIDE_APPOINT_POPUP: "HIDE_APPOINT_POPUP",
                CHECK_OPEN_AGAIN: "CHECK_OPEN_AGAIN",
                TASK_REWARD_POPUP: "TASK_REWARD_POPUP",
                LEVEL_UPGRADE: "LEVEL_UPGRADE",
                SHOW_EXPLORE_GIVE_UP_TASK: "SHOW_EXPLORE_GIVE_UP_TASK",
                ACQUIRE_EXPLORE_TASK_SUCCESS: "ACQUIRE_EXPLORE_TASK_SUCCESS",
                READ_MENU_FIXED: "READ_MENU_FIXED",
                SHARE_BUTTON_TYPE: "SHARE_BUTTON_TYPE",
                SHOW_SHARE_ACTION: "SHOW_SHARE_ACTION",
                CLOSE_SHARE_MODAL: "CLOSE_SHARE_MODAL",
                BONUS_TASK_FINISHED: "BONUS_TASK_FINISHED",
                SHOW_WX_SHARE_ARTICLE: "SHOW_WX_SHARE_ARTICLE"
            }
    },
    function (t, e, n) {
        "use strict";
        n.d(e, "g", function () {
            return u
        }), n.d(e, "f", function () {
            return l
        }), n.d(e, "m", function () {
            return p
        }), n.d(e, "l", function () {
            return d
        }), n.d(e, "a", function () {
            return _
        }), n.d(e, "n", function () {
            return f
        }), n.d(e, "o", function () {
            return v
        }), n.d(e, "e", function () {
            return h
        }), n.d(e, "b", function () {
            return m
        }), n.d(e, "k", function () {
            return g
        }), n.d(e, "c", function () {
            return b
        }), n.d(e, "h", function () {
            return k
        }), n.d(e, "i", function () {
            return w
        }), n.d(e, "r", function () {
            return C
        }), n.d(e, "q", function () {
            return y
        }), n.d(e, "j", function () {
            return T
        }), n.d(e, "d", function () {
            return x
        }), n.d(e, "p", function () {
            return S
        });
        var s = n(344),
            a = (n.n(s), n(29)),
            i = n.n(a),
            o = n(3),
            r = n(5),
            c = this,
            u = {
                options: function (t) {
                    return {
                        effect: "scale",
                        cssClass: "popup-download-assistant",
                        keep: !0,
                        buttons: [{
                            text: "立即下载",
                            onClick: function () {
                                var e = document.querySelector(".popup-download-assistant .popup-buttons .button");
                                e.setAttribute("data-clipboard-action", "copy"), e.setAttribute("data-clipboard-text", t.clipboard), c.clipboard = new i.a(".button"), 3 === t.app_type && r.a.$emit(r.b.ASSISTANT_POPUP), location.href = n.i(o.e)(t.download_url, {
                                    return_url: location.href
                                })
                            }
                        }],
                        showClose: !0
                    }
                }, template: function (t) {
                    return '\n      <div class="remind">\n        <span style="font-size: 16px;color: #3A3A3A;font-family: PingFangSC-Semibold;height: auto;">\n        下载赚钱助手 日赚<img style="padding: 0 8px; height: 29px;margin-bottom: -7px;" src="//assets.qkcdn.com/images/114dc43c2b09e7c4a6fdccc1c39f08a3.png">元\n        </span>\n        <span style="color: #3A3A3A;font-size: 14px;font-family: PingFangSC-Regular;">任务期间需开启助手</span>\n      </div>\n      <img class="app-icon" src="' + t.app_icon + '" alt="">\n      <p class="app-name">' + t.app_name + '</p>\n      <div class="app-developer">' + t.app_developer + '<img class="arrow" src="//qianka.b0.upaiyun.com/images/fd2f442bd993479e34e64c25fbd7184b.png" alt=""></div>\n      <img class="bg" style="height: 132px;width: 275px;margin-left: -18px;" src="//assets.qkcdn.com/images/3fb24401809bed504703cec2b738a238.png" alt="">\n      <span class="app-size" style="position: absolute; top: 119px;left: 204px;color:#cfcece;transform:rotate(47deg);font-size: 12px;transform-origin: 0 0;font-weight: 900;">仅' + t.app_size + '</span>\n      <div class="bottom-remind"><span>每个人的助手可能不同</span></div>\n    '
                }
            },
            l = {
                options: {
                    effect: "scale",
                    cssClass: "popup-ios-less-than-8-new",
                    showClose: !0
                },
                template: '\n    <div class="text">企业助手仅支持 iOS 8.0 及以上版本</div>\n  '
            },
            p = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    obvious: 1,
                    buttons: [{
                        text: "暂不绑定"
                    }, {
                        text: "立即绑定"
                    }]
                },
                template: '\n    <div class="title">当前账号有风险</div>\n    <div class="desc">\n      切换账号或清除缓存后您的账号及资产将会丢失，为了您的账户资金安全，请绑定手机后领取任务\n    </div>\n  '
            },
            d = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    buttons: [{
                        text: "知道了"
                    }]
                },
                template: function (t) {
                    return '\n      <div class="title">很抱歉</div>\n      <div class="desc">\n        您的设备已越狱或安装了第三方应用商店软件、越狱软件，请恢复正版或删除该类应用。如需帮助请\n        <a class="assertive" href="' + t + '" >联系客服</a>\n      </div>\n    '
                }
            },
            _ = {
                options: {
                    effect: "scale",
                    cssClass: "popup-bind-zhima",
                    buttons: [{
                        text: "立即认证"
                    }],
                    showClose: !0
                },
                template: '\n    <div class="icon text-center"><img src="//qianka.b0.upaiyun.com/images/e132b16d4dda3a0acfbdde188f2be9e2.png" alt=""></div>\n    <div class="title text-center">\n      <img class="line" src="//qianka.b0.upaiyun.com/images/b90c5bb15267413f7ec95ca658bb3a8d.png" >\n      <span>芝麻信用认证</span>\n      <img class="line" src="//qianka.b0.upaiyun.com/images/b90c5bb15267413f7ec95ca658bb3a8d.png" >\n    </div>\n    <div class="desc text-center">应广告商要求，领取更多试玩任务需要先认证身份唯一性，其他类型任务无需认证</div>\n  '
            },
            f = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    buttons: [{
                        text: "知道了"
                    }]
                },
                template: function () {
                    return '\n      <div class="title">很抱歉</div>\n      <div class="desc">\n        您的账号已被冻结，解冻请\n        <a class="assertive" href="/v4/help/complainUnfreeze" >前往申诉</a>\n      </div>\n    '
                }
            },
            v = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    buttons: [{
                        text: "知道了"
                    }]
                },
                template: function (t) {
                    return '\n    <div class="desc">不能同时抢多个' + (t || "试玩") + "任务哦!</div>\n  "
                }
            },
            h = {
                options: {
                    effect: "scale",
                    cssClass: "popup-task-ongoing",
                    buttons: [{
                        text: "继续试玩"
                    }],
                    showClose: !0
                },
                template: function (t, e) {
                    return '\n    <div class="img-wrap"><img class="top" src="//assets.qkcdn.com/images/39da55991b31bb1762b58cf1397a7548.png"></div>\n    <div class="title">' + t + '</div>\n    <div class="desc">' + e + "</div>\n  "
                }
            },
            m = {
                options: function (t) {
                    return {
                        effect: "scale",
                        cssClass: "popup-task-ongoing",
                        keep: !0,
                        buttons: [{
                            text: "继续试玩",
                            onClick: function (e) {
                                location.href = t
                            }
                        }],
                        showClose: !0
                    }
                }, template: function (t, e) {
                    return '\n    <div class="img-wrap"><img class="top" src="//assets.qkcdn.com/images/39da55991b31bb1762b58cf1397a7548.png"></div>\n    <div class="title">' + t + '</div>\n    <div class="desc">' + e + "</div>\n  "
                }
            },
            g = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    obvious: 1,
                    buttons: [{
                        text: "放弃"
                    }, {
                        text: "不放弃"
                    }]
                },
                template: '\n    <div class="desc">是否放弃任务</div>\n  '
            },
            b = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    obvious: 1,
                    buttons: [{
                        text: "忽略"
                    }, {
                        text: "下载"
                    }]
                },
                template: '\n    <div class="desc no-title">\n      请先安装任务应用\n    </div>\n  '
            },
            k = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    buttons: [{
                        text: "放弃任务"
                    }, {
                        text: "取消"
                    }]
                },
                template: '<div class="desc no-title">确定要放弃当前任务？</div>'
            },
            w = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    buttons: [{
                        text: "知道了"
                    }]
                },
                template: '<div class="desc no-title">您还有任务尚未完成，<br>无法开始该任务</div>'
            },
            C = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    buttons: [{
                        text: "知道了"
                    }]
                },
                template: '\n    <div class="title text-center">别贪心</div>\n    <div class="desc">完成或放弃当前任务，才能领新的哟</div>\n  '
            },
            y = {
                options: {
                    effect: "scale",
                    cssClass: "popup-enable-push",
                    buttons: [{
                        text: "马上开启",
                        theme: "assertive"
                    }],
                    showClose: !0
                },
                template: '\n    <p class="title font-regular">开启通知</p>\n    <p class="sub-title font-regular">增加<span class="assertive font-bold">40%</span>任务抢夺成功率</p>\n    <div class="img"></div>\n  '
            },
            T = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    buttons: [{
                        text: "知道了"
                    }]
                },
                template: '\n    <div class="title">风险提示</div>\n    <div class="desc">任务不要求投资，钱咖也不建议您未充分了解平台、项目前进行投资</div>\n  '
            },
            x = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    buttons: [{
                        text: "取消"
                    }, {
                        text: "开启"
                    }]
                },
                template: '\n    <div class="title">预约成功</div>\n    <div class="desc">\n      是否开启推送提醒\n    </div>\n  '
            },
            S = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    buttons: [{
                        text: "知道了"
                    }]
                },
                template: '\n    <div class="title">预约失效</div>\n    <div class="desc">\n      很抱歉，因任务原因导致本次预约无效。500金币已退还到账户中，您可尝试预约其他任务。\n    </div>\n  '
            }
    }, , ,
    function (t, e, n) {
        n(441);
        var s = n(0)(n(252), n(643), null, null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(391);
        var s = n(0)(n(255), n(587), "data-v-463b913e", null);
        t.exports = s.exports
    },
    function (t, e, n) {
        "use strict";
        var s = n(343),
            a = (n.n(s), n(468)),
            i = n.n(a),
            o = n(467),
            r = n.n(o);
        n.d(e, "b", function () {
            return i.a
        }), n.d(e, "a", function () {
            return r.a
        })
    },
    function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return o
        }), n.d(e, "e", function () {
            return r
        }), n.d(e, "i", function () {
            return c
        }), n.d(e, "b", function () {
            return u
        }), n.d(e, "j", function () {
            return l
        }), n.d(e, "f", function () {
            return p
        }), n.d(e, "k", function () {
            return d
        }), n.d(e, "h", function () {
            return _
        }), n.d(e, "c", function () {
            return f
        }), n.d(e, "d", function () {
            return v
        }), n.d(e, "g", function () {
            return h
        }), n.d(e, "l", function () {
            return m
        }), n.d(e, "m", function () {
            return g
        });
        var s = n(8),
            a = n.n(s),
            i = {
                install: function (t) {
                    Object.defineProperty(t.prototype, "JSBridge", {
                        value: i
                    })
                }, init: function (t) {
                    if (window.WebViewJavascriptBridge) return t(WebViewJavascriptBridge);
                    if (window.WVJBCallbacks) return window.WVJBCallbacks.push(t);
                    window.WVJBCallbacks = [t];
                    var e = document.createElement("iframe");
                    e.style.display = "none", e.src = "https://__bridge_loaded__", document.documentElement.appendChild(e), setTimeout(function () {
                        document.documentElement.removeChild(e)
                    }, 0)
                }, registerHandler: function (t, e) {
                    this.init(function (n) {
                        n.registerHandler(t, e)
                    })
                }, callHandler: function (t, e, n) {
                    this.init(function (s) {
                        s.callHandler(t, e, n)
                    })
                }
            },
            o = function (t) {
                i.registerHandler("userClickLeftItem", function (t) {
                    $router.forward("/user")
                })
            },
            r = function (t) {
                i.callHandler("openUrlWithSafari", {
                    url: t
                }, function (t) {})
            },
            c = function (t) {
                return new a.a(function (e) {
                    i.callHandler("share", {
                        url: t.url,
                        text: t.text,
                        image: t.image
                    }, function (t) {
                        e(t)
                    })
                })
            },
            u = function (t) {
                i.callHandler("hostArray", {
                    host: t
                }, function (t) {})
            },
            l = function (t, e) {
                i.callHandler("modifyStatusBarColor", {
                    forward_color: t,
                    background_color: e
                }, function (t) {})
            },
            p = function (t) {
                i.callHandler("reBind", {
                    x_dis: t
                })
            },
            d = function (t) {
                i.callHandler("openYueDuWebView", t)
            },
            _ = function (t, e) {
                i.callHandler("openOtherWebView", {
                    url: t,
                    title: e
                })
            },
            f = function (t) {
                i.callHandler("getDis", {
                    x_dis: t
                })
            },
            v = function (t) {
                i.callHandler("updateTitle", {
                    title: t
                })
            },
            h = function (t, e) {
                i.callHandler("open", {
                    x_dis: t.x_dis,
                    back_url: t.back_url,
                    task_id: t.task_id,
                    task_type: t.task_type,
                    bid: t.bid,
                    scheme: t.scheme
                }, e)
            },
            m = function (t, e) {
                i.callHandler("openMiniProgram", {
                    userName: t.userName,
                    path: t.path,
                    miniProgramType: t.miniProgramType
                }, e)
            },
            g = function (t, e) {
                i.callHandler("defineCustomerService", {
                    icon: t.icon,
                    url: t.url,
                    show: t.show,
                    type: t.type
                }, e)
            }
    }, , , ,
    function (t, e) {
        t.exports = Vue
    }, , , , , ,
    function (t, e, n) {
        n(399);
        var s = n(0)(n(208), n(595), null, null);
        t.exports = s.exports
    },
    function (t, e, n) {
        var s = n(0)(n(251), n(632), null, null);
        t.exports = s.exports
    }, , , ,
    function (t, e, n) {
        n(424);
        var s = n(0)(null, n(622), "data-v-7f9cae8d", null);
        t.exports = s.exports
    }, , , ,
    function (t, e, n) {
        n(352);
        var s = n(0)(n(265), n(542), null, null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(405);
        var s = n(0)(n(201), n(601), "data-v-59bf6720", null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(421);
        var s = n(0)(n(207), n(619), null, null);
        t.exports = s.exports
    }, , , , , , , , ,
    function (t, e, n) {
        "use strict";
        var s = n(2),
            a = n.n(s),
            i = n(1),
            o = n(6),
            r = n(29),
            c = n.n(r),
            u = n(5),
            l = n(3);
        e.a = {
            computed: a()({}, n.i(i.a)("assistant", ["info"])),
            data: function () {
                return {
                    assistantGuideModal: void 0
                }
            }, destroyed: function () {
                this.assistantGuideModal && $modal.destroy(this.assistantGuideModal)
            }, methods: {
                showDownloadAssistantPopup: function () {
                    var t = document.querySelector(".assistant-banner .btn-download");
                    if (t.setAttribute("data-clipboard-action", "copy"), t.setAttribute("data-clipboard-text", this.info.clipboard), this.clipboard = new c.a(".btn-download"), n.i(l.n)()) {
                        return void $popup.fromTemplate(o.f.template, o.f.options).show()
                    }
                    if (3 === this.info.app_type) return u.a.$emit(u.b.ASSISTANT_POPUP), void(location.href = this.info.download_url);
                    $popup.fromTemplate(o.g.template(this.info), o.g.options(this.info)).show()
                }
            }
        }
    },
    function (t, e, n) {
        n(347);
        var s = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    showClose: !1,
                    closeCallback: function () {}, keep: !1,
                    obvious: 0,
                    buttons: [{
                        text: "不放弃",
                        theme: ""
                    }, {
                        text: "放弃",
                        theme: ""
                    }]
                },
                template: '\n      <div class="title">是否放弃探索</div>\n      <div class="desc">放弃后剩余任务都将失效</div>\n    '
            },
            a = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    showClose: !1,
                    closeCallback: function () {}, keep: !1,
                    obvious: 1,
                    buttons: [{
                        text: "取消",
                        theme: ""
                    }, {
                        text: "管理",
                        theme: ""
                    }]
                },
                template: '\n    <div class="title">您已经领取了5个任务</div>\n    <div class="desc">需要放弃现有任务才能领取新任务</div>\n  '
            },
            i = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    showClose: !1,
                    closeCallback: function () {}, obvious: 1,
                    keep: !1,
                    buttons: [{
                        text: "取消",
                        theme: ""
                    }, {
                        text: "下载",
                        theme: ""
                    }]
                },
                template: '\n      <div class="title">无法开始探索</div>\n      <div class="desc">应用可能被删除，是否重新下载</div>\n  '
            },
            o = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    showClose: !1,
                    closeCallback: function () {}, keep: !1,
                    buttons: [{
                        text: "知道了",
                        theme: ""
                    }]
                },
                template: '\n    <div class="desc">探索太快了, 耐心一点哦</div>\n  '
            };
        t.exports = {
            popup_give_up_explore: s,
            popup_give_up_remind: a,
            popup_undownload_explore: i,
            popup_patient_explore: o
        }
    }, , , , , ,
    function (t, e, n) {
        n(379);
        var s = n(0)(n(206), n(574), "data-v-2b2883e8", null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(434);
        var s = n(0)(n(216), n(636), null, null);
        t.exports = s.exports
    },
    function (t, e, n) {
        "use strict";
        var s, a = n(7),
            i = n.n(a),
            o = n(1),
            r = n(161),
            c = n(159),
            u = n(165),
            l = n(166),
            p = n(169),
            d = n(168),
            _ = n(171),
            f = n(170),
            v = n(167),
            h = n(186),
            m = n(162),
            g = n(173),
            b = n(163),
            k = n(185),
            w = n(164),
            C = n(4),
            y = n(172),
            T = n(160),
            x = n(175),
            S = n(178),
            $ = n(180),
            A = n(182),
            P = n(176),
            E = n(177),
            I = n(183),
            L = n(184),
            O = n(179),
            R = n(174),
            N = n(181),
            D = n(5),
            F = {
                SHOW_INSTALL_CERTIFICATION_POPUP: "show_install_certification_popup",
                HIDE_INSTALL_CERTIFICATION_POPUP: "hide_install_certification_popup"
            },
            M = {
                showInstallCertificationPopup: !1
            },
            U = {
                uid: function (t) {
                    return $storage.get(C.d)
                }
            },
            q = (s = {}, i()(s, F.SHOW_INSTALL_CERTIFICATION_POPUP, function (t) {
                t.showInstallCertificationPopup = !0
            }), i()(s, F.HIDE_INSTALL_CERTIFICATION_POPUP, function (t) {
                t.showInstallCertificationPopup = !1
            }), s),
            B = {
                showInstallCertificationPopup: function (t) {
                    (0, t.commit)(F.SHOW_INSTALL_CERTIFICATION_POPUP)
                }, hideInstallCertificationPopup: function (t) {
                    (0, t.commit)(F.HIDE_INSTALL_CERTIFICATION_POPUP)
                }
            },
            H = new o.b.Store({
                modules: {
                    dashboard: r.a,
                    assistant: c.a,
                    task: u.a,
                    taskDetail: l.a,
                    zstask: h.a,
                    easy: m.a,
                    taskLite: p.a,
                    taskDetailLite: d.a,
                    bonusTaskDetailLite: v.a,
                    zstaskLite: _.a,
                    ufilterTaskDetailLite: f.a,
                    user: g.a,
                    help: b.a,
                    withdraw: k.a,
                    loan: w.a,
                    temp: y.a,
                    sendCodeMod: T.a,
                    apprentice: R.a,
                    dashboardV5: x.a,
                    level: S.a,
                    pick: $.a,
                    read: N.a,
                    reward: A.a,
                    explore: P.a,
                    group: E.a,
                    sale: I.a,
                    sales: L.a,
                    message: O.a
                },
                state: M,
                getters: U,
                mutations: q,
                actions: B
            });
        H.on = H.$on = D.a.$on, H.emit = H.$emit = D.a.$emit, e.a = H
    }, ,
    function (t, e, n) {
        n(348);
        var s = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    showClose: !1,
                    closeCallback: function () {}, keep: !1,
                    buttons: [{
                        text: "取消",
                        theme: ""
                    }, {
                        text: "确认",
                        theme: ""
                    }]
                },
                template: '\n      <div class="common-style-title">确认退出团队？</div>\n      <div class="common-style-subtitle">退出团队将失去所有返现收益</div>\n    '
            },
            a = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    showClose: !1,
                    closeCallback: function () {}, keep: !1,
                    buttons: [{
                        text: "我知道了",
                        theme: ""
                    }]
                },
                template: function (t) {
                    return '<div class="common-style-title">提示</div>\n     <div class="common-style-subtitle dissolve">' + t + "</div>\n    "
                }
            },
            i = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    showClose: !1,
                    closeCallback: function () {}, keep: !1,
                    buttons: [{
                        text: "我知道了",
                        theme: ""
                    }]
                },
                template: '\n      <div class="common-style-title">提示</div>\n      <div class="common-style-subtitle">因团长退出，本团已自动解散/我知道了</div>\n    '
            },
            o = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    showClose: !1,
                    closeCallback: function () {}, keep: !1,
                    buttons: [{
                        text: "我知道了",
                        theme: ""
                    }]
                },
                template: '\n      <div class="common-style-title">提示</div>\n      <div class="common-style-subtitle">因团长退出，您已自动成为团长。带领团队完成打卡可获双倍红包奖励</div>\n    '
            },
            r = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    showClose: !1,
                    closeCallback: function () {}, keep: !1,
                    buttons: [{
                        text: "我知道了",
                        theme: ""
                    }]
                },
                template: function (t) {
                    return '<div class="common-style-title">提示</div>\n     <div class="common-style-subtitle dissolve">' + t + "</div>\n    "
                }
            },
            c = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    showClose: !1,
                    closeCallback: function () {}, keep: !1,
                    buttons: [{
                        text: "我知道了",
                        theme: ""
                    }]
                },
                template: '\n      <div class="common-style-title">提示</div>\n      <div class="common-style-subtitle">长期未满员，本团已自动解散”,解锁金币不退</div>\n    '
            },
            u = {
                options: {
                    effect: "scale",
                    cssClass: "popup-award",
                    showClose: !0,
                    closeCallback: function () {}, keep: !1,
                    buttons: [{
                        text: "我知道了",
                        theme: ""
                    }]
                },
                template: function (t) {
                    return '\n      <div class="award">' + t + '<span>元</span></div>\n      <div class="award-subtitle">众人齐力，团签圆满收官！</div>\n    '
                }
            },
            l = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    showClose: !1,
                    closeCallback: function () {}, keep: !1,
                    buttons: [{
                        text: "忽略",
                        theme: ""
                    }, {
                        text: "确认",
                        theme: ""
                    }]
                },
                template: function (t) {
                    return '<div class="common-style-title">' + t + '发来组团打卡邀请</div>\n     <div class="common-style-subtitle">加入团队打卡，每周可获1.5元红包</div>\n    '
                }
            },
            p = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    showClose: !1,
                    closeCallback: function () {}, keep: !1,
                    buttons: [{
                        text: "取消",
                        theme: ""
                    }, {
                        text: "确认",
                        theme: ""
                    }]
                },
                template: '\n      <div class="common-style-subtitle">确认支付200金币解锁?</div>\n    '
            },
            d = {
                options: {
                    effect: "scale",
                    cssClass: "popup-invited",
                    showClose: !0,
                    closeCallback: function () {}, keep: !1,
                    buttons: [{
                        text: "发送邀请",
                        theme: ""
                    }]
                },
                template: '\n      <div class="invite-title">邀请好友组团</div>\n    \n      <div class="input-id"><input type="text" placeholder="输入好友ID"></div>\n      <div class="prompt">ID在首页点击头像进入「个人中心」查看</div>\n    '
            };
        t.exports = {
            popup_signout_punch: s,
            popup_dissolve_punch: r,
            popup_send_money_punch: u,
            popup_invite_punch: l,
            popup_pay_punch: p,
            popup_invitedId_punch: d,
            popup_member_signout_punch: a,
            popup_upgrade_punch: o,
            popup_Colonel_signout_punch: i,
            popup_system_dissolve: c
        }
    }, , , , , , , , , , , , , ,
    function (t, e, n) {
        n(398);
        var s = n(0)(n(259), n(594), "data-v-4fe8f7f0", null);
        t.exports = s.exports
    }, ,
    function (t, e, n) {
        n(345);
        var s = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general show_setting_file",
                    buttons: [{
                        text: "忽略"
                    }, {
                        text: "允许"
                    }]
                },
                template: function () {
                    return '\n    <div class="desc">\n      此网站正尝试打开"设置"以向您显示一个配置描述文件。您要允许吗？\n    </div>\n  '
                }
            },
            a = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    obvious: 1,
                    buttons: [{
                        text: "短信验证码"
                    }, {
                        text: "语音验证码"
                    }],
                    showClose: !0,
                    btnLengthways: !0
                },
                template: '\n    <div class="title">没收到验证码？</div>\n    <div class="desc">\n      您可以选择获取语音验证码\n    </div>\n  '
            },
            i = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    buttons: [{
                        text: "取消"
                    }, {
                        text: "知道了"
                    }],
                    showClose: !0
                },
                template: '\n    <div class="title">提示</div>\n    <div class="desc">\n      您将收到钱咖电话播报的语音验证码，请注意接听\n    </div>\n  '
            },
            o = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    buttons: [{
                        text: "取消"
                    }, {
                        text: "切换账号"
                    }]
                },
                template: '\n    <div class="title">此手机已被其它账号绑定</div>\n    <div class="desc">若当前账号未绑定手机号，切换账号后将永久丢失，确认切换？</div>\n    '
            },
            r = {
                options: {
                    effect: "scale",
                    cssClass: "popup_show_qrcode",
                    showClose: !0
                },
                template: function () {
                    return '\n      <div class="qrcode">\n        <div class="across-space top"></div>\n        <div class="vertical-space right"></div>\n        <div class="across-space bottom"></div>\n        <div class="vertical-space left"></div>\n        <img src="//qianka.b0.upaiyun.com/images/3f649daeb3e028af33de0e26d23a96cf.png" alt="">\n      </div>\n      <div class="remind">长按并存储二维码图片</div>\n      <div class="remind last">打开微信扫一扫识别该二维码</div>\n      <div class="remind-or">（或者微信搜索<span style="color: #EF502B;">钱咖客服</span>）</div>'
                }
            },
            c = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    buttons: [{
                        text: "取消"
                    }, {
                        text: "绑定"
                    }]
                },
                template: '\n    <div class="title">提示</div>\n    <div class="desc">\n      为了您的帐号安全，完成微信绑定后，即可安心兑换\n    </div>'
            },
            u = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    buttons: [{
                        text: "知道了"
                    }]
                },
                template: function () {
                    return '\n      <div class="title">很抱歉</div>\n      <div class="desc">\n        您的账号已被冻结，解冻请\n        <a class="assertive" href="/v4/help/complainUnfreeze" >前往申诉</a>\n      </div>\n    '
                }
            },
            l = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    showClose: !0,
                    btnLengthways: !0,
                    obvious: 0,
                    buttons: [{
                        text: "绑定手机"
                    }, {
                        text: "切换帐号"
                    }]
                },
                template: '\n    <div class="title">警告</div>\n    <div class="desc">\n      您的账号尚未绑定手机，切换帐号或清除缓存后您将无法再次登录此账号\n    </div>\n  '
            },
            p = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    buttons: [{
                        text: "取消"
                    }, {
                        text: "确认"
                    }]
                },
                template: function (t) {
                    return '\n    <div class="title">' + t + '</div>\n    <div class="desc">\n      确认为该手机号充值？\n    </div>\n  '
                }
            },
            d = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    buttons: [{
                        text: "知道了"
                    }]
                },
                template: function (t) {
                    return '\n  <div class="title">失败原因</div>\n  <div class="desc">' + t + "</div>"
                }
            },
            _ = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    buttons: [{
                        text: "知道了"
                    }]
                },
                template: function (t) {
                    return '\n      <div class="title">' + t + '</div>\n      <div class="desc">\n        请使用该账号绑定的手机号进行验证\n      </div>\n    '
                }
            },
            f = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    buttons: [{
                        text: "知道了"
                    }]
                },
                template: function (t) {
                    return '\n      <div class="title">该账号尚未绑定手机</div>\n      <div class="desc">\n        请绑定手机后再提交申诉\n      </div>\n    '
                }
            },
            v = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    buttons: [{
                        text: "取消"
                    }, {
                        text: "立即绑定"
                    }]
                },
                template: '\n    <div class="title">绑定手机</div>\n    <div class="desc">\n      为保证您的账户资金安全，提现前必须绑定手机\n    </div>\n  '
            },
            h = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    buttons: [{
                        text: "确认"
                    }, {
                        text: "取消"
                    }]
                },
                template: '\n    <div class="title"></div>\n    <div class="desc">\n      确认撤回该笔提现？\n    </div>\n  '
            },
            m = {
                options: {
                    effect: "scale",
                    cssClass: "popup-exchange-rate",
                    buttons: [{
                        text: "知道了"
                    }]
                },
                template: '\n    <img src="//assets.qkcdn.com/images/a7b12a44aaa3da28701ffefb2653bb4c.png">\n    <div class="title">汇率说明</div>\n    <div class="desc">\n      <p style="font-weight: inherit !important;">1. 转入余额的金币数最少不低于25</p>\n      <p style="font-weight: inherit !important;">2. 转入余额的金币数必须是25的整数倍剩余金币将退还至我的金币</p>\n      <p style="font-weight: inherit !important;">3. 汇率可能按平台运营情况上下浮动</p>\n    </div>\n  '
            },
            g = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    obvious: 1,
                    buttons: [{
                        text: "取消"
                    }, {
                        text: "确认"
                    }]
                },
                template: function (t, e, n) {
                    return '\n    <div class="title">确认将' + t + "金币兑换为" + e + '元?</div>\n    <div class="desc">\n      兑换金币必须为' + n + "的倍数，多余部分将被保留\n    </div>\n  "
                }
            };
        t.exports = {
            open_setting_popup: s,
            popup_choose_verify_code_type: a,
            popup_has_bind_mobile: o,
            popup_show_qrcode: r,
            popupLogoutUnbind: l,
            popup_wechat_bind: c,
            popup_user_freeze: u,
            popup_confirm_phone: p,
            popup_withdraw_fail: d,
            popup_remind_use_correct_mobile: _,
            popup_unfreeze_unbind_mobile: f,
            popup_bind_phone: v,
            popup_cancel_withdraw: h,
            popup_exchange_rate: m,
            popup_exchange_coin: g,
            popup_voice_remind: i
        }
    }, , , ,
    function (t, e, n) {
        "use strict";

        function s(t) {
            var e = $storage.get(o.U) || [];
            e.push(t.appid), $storage.set(o.U, e)
        }

        function a(t) {
            $api.gaoeStart(t.id).then(function (t) {
                return t.data
            }).then(function (e) {
                if (40001 === e.err_code) {
                    $popup.fromTemplate(i.popup_bind_phone.template, i.popup_bind_phone.options).show().then(function (t) {
                        if (1 === t) {
                            var e = "/gaoe";
                            "gaoe_lite" === $router.currentRoute.name && (e = "/gaoe/lite"), $router.forward({
                                path: "/user/bindMobile/0",
                                query: {
                                    backroute: e
                                }
                            })
                        }
                    })
                } else if (40002 === e.err_code) {
                    var a = $popup.fromTemplate(i.popup_task_limit.template, i.popup_task_limit.options);
                    a.show()
                } else if (40003 === e.err_code) {
                    var u = $popup.fromTemplate(i.popup_task_check.template, i.popup_task_check.options);
                    u.show().then(function (t) {
                        0 === t && $router.forward("/gaoe/progress")
                    })
                } else if (e.err_code === o.h) n.i(c.a)() ? n.i(c.f)() : r.a.$emit(r.b.LITE_POPUP_OPEN_KEY, e.payload);
                else {
                    if (40004 === e.err_code) return $loading.show("任务匹配中，请稍后"), void setTimeout(function () {
                        $loading.hide()
                    }, 2e3);
                    if (1e4 === e.err_code) return $assistant.updateState(), $loading.show("任务匹配中，请稍后"), void setTimeout(function () {
                        $loading.hide()
                    }, 2e3);
                    if (40005 === e.err_code) {
                        $loading.hide(), s(t);
                        var l = i.popup_compare_fail,
                            p = $popup.fromTemplate(l.template, l.options);
                        p.show().then(function (e) {
                            if (0 === e) return void(t.show = 0)
                        })
                    } else if (40006 === e.err_code) $toast.show(e.err_msg, 1e3), setTimeout(function () {
                        window.location.reload()
                    }, 1e3);
                    else if (50010 === e.err_code || 50011 === e.err_code) {
                        var d = $storage.get(o.t) || [];
                        d.push(t.appid), $storage.set(o.t, d), $toast.show(e.err_msg, 1e3), setTimeout(function () {
                            window.location.reload()
                        }, 1e3)
                    } else {
                        var _ = e.payload,
                            f = !1;
                        f || ($loading.show("拼命争抢任务中..."), f = !0), 2 === _.status ? setTimeout(function () {
                            $toast.show("抢到任务，正在跳转...", 1e3);
                            var e = {
                                name: "gaoe_detail",
                                params: {
                                    id: t.id
                                }
                            };
                            "gaoe_lite" === $router.currentRoute.name && (e.query = {
                                lite: 1
                            }), setTimeout(function () {
                                $router.forward(e)
                            }, 1e3)
                        }, 500) : setTimeout(function () {
                            $toast.show("抢任务失败", 1e3)
                        }, 2e3)
                    }
                }
            })
        }
        e.a = a;
        var i = n(137),
            o = (n.n(i), n(4)),
            r = n(5),
            c = n(3)
    },
    function (t, e, n) {
        n(435);
        var s = n(0)(n(204), n(637), "data-v-bf5ea2d6", null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(395);
        var s = n(0)(n(218), n(591), "data-v-4eaf5875", null);
        t.exports = s.exports
    },
    function (t, e, n) {
        "use strict";
        var s = function (t) {
                var e = new RegExp("(^| )" + t + "=([^;]*)(;|$)"),
                    n = document.cookie.match(e);
                return n ? unescape(n[2]) : null
            },
            a = function (t, e, n) {
                var s = new Date;
                s.setTime(s.getTime() + 24 * (n || 2) * 60 * 60 * 1e3), document.cookie = t + "=" + escape(e) + ";path=/;expires=" + s.toGMTString()
            };
        e.a = {
            get: s,
            set: a
        }
    },
    function (t, e, n) {
        "use strict";

        function s() {
            function t(t, e, n) {
                return s && s.getState() > 0 ? (s.update({
                    title: t,
                    tips: e
                }), void setTimeout(function () {
                    s.hide()
                }, n || 1500)) : (l("von-loading"), s = new r.a(u.a).$mount("[von-loading]"), s.show({
                    title: t,
                    tips: e
                }), p(n || 1500).then(function () {
                    return s.hide()
                }))
            }

            function e() {
                s && s.hide()
            }

            function n(t) {
                s.update(t)
            }
            var s = void 0;
            return {
                showToast: t,
                hide: e,
                update: n
            }
        }
        var a = n(8),
            i = n.n(a),
            o = n(16),
            r = n.n(o),
            c = n(514),
            u = n.n(c),
            l = function (t, e) {
                var n = document.createElement(e || "div");
                n.setAttribute(t, ""), document.body.appendChild(n)
            },
            p = function (t, e) {
                return new i.a(function (n) {
                    return setTimeout(function () {
                        return n(e)
                    }, t)
                })
            },
            d = new s,
            _ = {
                show: d.showToast,
                hide: d.hide
            };
        e.a = _
    }, , , , , , , , , , , , , , , , , , , , ,
    function (t, e, n) {
        n(438);
        var s = n(0)(n(213), n(640), "data-v-d28e115a", null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(370);
        var s = n(0)(n(215), n(565), "data-v-2026768a", null);
        t.exports = s.exports
    },
    function (t, e, n) {
        var s = n(0)(n(221), n(560), null, null);
        t.exports = s.exports
    },
    function (t, e, n) {
        var s = n(0)(n(253), n(617), null, null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(437);
        var s = n(0)(n(290), n(639), "data-v-cb815232", null);
        t.exports = s.exports
    },
    function (t, e) {
        t.exports = axios
    },
    function (t, e, n) {
        "use strict";
        var s = function (t) {
                return n.e(3).then(function () {
                    return t(n(659))
                }.bind(null, n)).catch(n.oe)
            },
            a = function (t) {
                return n.e(0).then(function () {
                    return t(n(658))
                }.bind(null, n)).catch(n.oe)
            },
            i = function (t) {
                return n.e(42).then(function () {
                    return t(n(653))
                }.bind(null, n)).catch(n.oe)
            },
            o = function (t) {
                return n.e(43).then(function () {
                    return t(n(654))
                }.bind(null, n)).catch(n.oe)
            };
        e.a = [{
            path: "/apprentice",
            name: "apprentice",
            component: s
        }, {
            path: "/apprentice/achievements",
            name: "apprentice_achievements",
            component: a,
            children: [{
                path: "income",
                name: "apprentice_achievements_income",
                component: i
            }, {
                path: "list/:type",
                name: "apprentice_achievements_list",
                component: o,
                props: !0
            }]
        }]
    },
    function (t, e, n) {
        "use strict";
        var s = function (t) {
            return n.e(64).then(function () {
                return t(n(660))
            }.bind(null, n)).catch(n.oe)
        };
        e.a = [{
            path: "/borrow",
            name: "borrow",
            component: s
        }]
    },
    function (t, e, n) {
        "use strict";
        var s = function (t) {
                return n.e(10).then(function () {
                    return t(n(662))
                }.bind(null, n)).catch(n.oe)
            },
            a = function (t) {
                return n.e(31).then(function () {
                    return t(n(661))
                }.bind(null, n)).catch(n.oe)
            };
        e.a = [{
            path: "/credit/:type",
            name: "credit",
            component: s
        }, {
            path: "/credit/detail/:id",
            name: "credit_detail",
            props: !0,
            component: a
        }]
    },
    function (t, e, n) {
        "use strict";
        var s = function (t) {
                return n.e(45).then(function () {
                    return t(n(663))
                }.bind(null, n)).catch(n.oe)
            },
            a = function (t) {
                return n.e(44).then(function () {
                    return t(n(664))
                }.bind(null, n)).catch(n.oe)
            };
        e.a = [{
            path: "/eggs/detail",
            name: "eggs_detail",
            component: s
        }, {
            path: "/eggs/luckyDraw",
            name: "eggs_luckyDraw",
            component: a
        }]
    },
    function (t, e, n) {
        "use strict";
        var s = function (t) {
                return n.e(30).then(function () {
                    return t(n(667))
                }.bind(null, n)).catch(n.oe)
            },
            a = function (t) {
                return n.e(15).then(function () {
                    return t(n(666))
                }.bind(null, n)).catch(n.oe)
            },
            i = function (t) {
                return n.e(1).then(function () {
                    return t(n(665))
                }.bind(null, n)).catch(n.oe)
            },
            o = function (t) {
                return n.e(1).then(function () {
                    return t(n(669))
                }.bind(null, n)).catch(n.oe)
            },
            r = function (t) {
                return n.e(39).then(function () {
                    return t(n(668))
                }.bind(null, n)).catch(n.oe)
            };
        e.a = [{
            path: "/gaoe/",
            name: "gaoe",
            component: s
        }, {
            path: "/gaoe/detail/:id",
            name: "gaoe_detail",
            component: a
        }, {
            path: "/gaoe/background/:id",
            name: "gaoe_background",
            component: i
        }, {
            path: "/gaoe/progress",
            name: "gaoe_progress",
            component: o
        }, {
            path: "/gaoe/lite",
            name: "gaoe_lite",
            component: r
        }]
    },
    function (t, e, n) {
        "use strict";
        var s = function (t) {
                return n.e(20).then(function () {
                    return t(n(671))
                }.bind(null, n)).catch(n.oe)
            },
            a = function (t) {
                return n.e(38).then(function () {
                    return t(n(672))
                }.bind(null, n)).catch(n.oe)
            },
            i = function (t) {
                return n.e(22).then(function () {
                    return t(n(670))
                }.bind(null, n)).catch(n.oe)
            };
        e.a = [{
            path: "/hotapps/:type",
            name: "hotapps",
            component: s
        }, {
            path: "/hotapps/typeDetails/:parent_id",
            name: "type_details",
            component: a
        }, {
            path: "/hotapps/appDetail/:app_id",
            name: "app_detail",
            component: i
        }]
    },
    function (t, e, n) {
        "use strict";
        var s = function (t) {
                return n.e(7).then(function () {
                    return t(n(674))
                }.bind(null, n)).catch(n.oe)
            },
            a = function (t) {
                return n.e(27).then(function () {
                    return t(n(673))
                }.bind(null, n)).catch(n.oe)
            };
        e.a = [{
            path: "/loan",
            name: "loan",
            component: s
        }, {
            path: "/loan/detail/:id",
            name: "loan_detail",
            component: a
        }]
    },
    function (t, e, n) {
        "use strict";
        var s = n(2),
            a = n.n(s),
            i = n(8),
            o = n.n(i),
            r = n(1),
            c = n(464),
            u = n.n(c),
            l = n(5),
            p = n(458),
            d = n.n(p),
            f = n(4),
            v = function (t) {
                return new o.a(function (e) {
                    setTimeout(e, t || 0)
                })
            };
        e.a = {
            data: function () {
                return {
                    assistantGuideModal: void 0
                }
            }, computed: a()({}, n.i(r.a)("assistant", ["info"])),
            mounted: function () {
                var t = this;
                l.a.$on(l.b.ASSISTANT_POPUP, function () {
                    t.showDownloadAssistantPopup()
                }), $modal.fromComponent(u.a, {
                    title: "详细教程",
                    theme: "dark"
                }).then(function (e) {
                    t.assistantGuideModal = e
                })
            }, destroyed: function () {
                this.assistantGuideModal && $modal.destroy(this.assistantGuideModal), l.a.$off(l.b.POPUP_ASSISTANT_UNOPEN)
            }, methods: {
                showDownloadAssistantPopup: function () {
                    var t = this,
                        e = $popup.fromTemplate('\n              <div id="swipe-assistant-guide-wrap">\n                <div id="swipe-assistant-guide">\n                  <div class=\'swipe-wrap\'>\n                    <div class="swipe-item">\n                      <div class="step step-1"></div>\n                    </div>\n                    <div class="swipe-item">\n                      <div class="step step-2"></div>\n                    </div>\n                    <div class="swipe-item">\n                      <div class="step step-3"></div>\n                    </div>\n                    <div class="swipe-item">\n                      <div class="step step-4"></div>\n                    </div>\n                  </div>\n                </div>\n\n                <div class="circles">\n                  <span class="circle active"></span>\n                  <span class="circle"></span>\n                  <span class="circle"></span>\n                  <span class="circle"></span>\n                </div>\n              </div>\n            ', {
                            effect: "scale",
                            cssClass: "popup-assistant-guide",
                            showClose: !0,
                            keep: !0,
                            obvious: 1,
                            buttons: [{
                                text: "看教程",
                                onClick: function () {
                                    e.hide(), v(300).then(function () {
                                        t.assistantGuideModal.show()
                                    })
                                }
                            }, {
                                text: "去信任",
                                onClick: function () {
                                    var t = $storage.get(f.b);
                                    t && (t.showed = 1, $storage.set(f.b, t)), location.href = f.c
                                }
                            }]
                        });
                    v(300).then(function () {
                        var t = document.getElementById("swipe-assistant-guide"),
                            n = document.getElementById("swipe-assistant-guide-wrap");
                        new d.a(t, {
                            startSlide: 0,
                            speed: 250,
                            auto: 3e3,
                            continuous: !0,
                            disableScroll: !1,
                            stopPropagation: !1,
                            callback: function (t, e) {}, transitionEnd: function (t, e) {
                                var s = n.querySelectorAll(".circle");
                                _.each(s, function (t) {
                                    t.className = "circle"
                                }), s[t].className = "circle active"
                            }
                        });
                        e.show()
                    })
                }
            }
        }
    },
    function (t, e, n) {
        "use strict";
        var s = n(487),
            a = n.n(s),
            i = n(486),
            o = n.n(i),
            r = n(489),
            c = n.n(r),
            u = n(488),
            l = n.n(u),
            p = n(482),
            d = n.n(p),
            _ = n(483),
            f = n.n(_),
            v = n(99),
            h = n.n(v),
            m = n(22),
            g = n.n(m),
            b = n(501),
            k = n.n(b),
            w = n(500),
            C = n.n(w),
            y = n(504),
            T = n.n(y),
            x = n(503),
            S = n.n(x),
            $ = n(502),
            A = n.n($),
            P = n(495),
            E = n.n(P),
            I = n(490),
            L = n.n(I);
        e.a = [{
            path: "/tasks",
            name: "tasks",
            component: a.a
        }, {
            path: "/task/detail/:id",
            name: "task_detail",
            component: o.a
        }, {
            path: "/zstasks",
            name: "zstasks",
            component: c.a
        }, {
            path: "/zstask/detail/:id",
            name: "zstask_detail",
            component: l.a
        }, {
            path: "/easy/detail/:id",
            name: "easy_detail",
            component: d.a
        }, {
            path: "/helpTaskLogin",
            name: "Help_task_login",
            component: f.a
        }, {
            path: "/pop",
            name: "pop",
            component: h.a
        }, {
            path: "/pop2",
            name: "pop2",
            component: g.a
        }, {
            path: "/tasks/lite",
            name: "tasks_lite",
            component: k.a
        }, {
            path: "/task/detail/lite/:id",
            name: "task_detail_lite",
            component: C.a
        }, {
            path: "/ufilter_task/detail/lite/:id",
            name: "ufilter_task_detail_lite",
            component: A.a
        }, {
            path: "/bonus/detail/lite/:id",
            name: "bonus_task_detail_lite",
            component: E.a
        }, {
            path: "/zstasks/lite",
            name: "zstasks_lite",
            component: T.a
        }, {
            path: "/zstask/detail/lite/:id",
            name: "zstask_detail_lite",
            component: S.a
        }, {
            path: "/appoint/rule",
            name: "appoint_rule",
            component: L.a
        }]
    },
    function (t, e, n) {
        "use strict";
        var s = n(506),
            a = n.n(s),
            i = function (t) {
                return n.e(54).then(function () {
                    return t(n(691))
                }.bind(null, n)).catch(n.oe)
            },
            o = function (t) {
                return n.e(55).then(function () {
                    return t(n(690))
                }.bind(null, n)).catch(n.oe)
            },
            r = function (t) {
                return n.e(53).then(function () {
                    return t(n(692))
                }.bind(null, n)).catch(n.oe)
            },
            c = function (t) {
                return n.e(40).then(function () {
                    return t(n(686))
                }.bind(null, n)).catch(n.oe)
            },
            u = function (t) {
                return n.e(36).then(function () {
                    return t(n(694))
                }.bind(null, n)).catch(n.oe)
            },
            l = function (t) {
                return n.e(37).then(function () {
                    return t(n(687))
                }.bind(null, n)).catch(n.oe)
            },
            p = function (t) {
                return n.e(52).then(function () {
                    return t(n(693))
                }.bind(null, n)).catch(n.oe)
            },
            d = function (t) {
                return n.e(59).then(function () {
                    return t(n(684))
                }.bind(null, n)).catch(n.oe)
            },
            _ = function (t) {
                return n.e(56).then(function () {
                    return t(n(689))
                }.bind(null, n)).catch(n.oe)
            },
            f = function (t) {
                return n.e(58).then(function () {
                    return t(n(685))
                }.bind(null, n)).catch(n.oe)
            },
            v = function (t) {
                return n.e(57).then(function () {
                    return t(n(688))
                }.bind(null, n)).catch(n.oe)
            },
            h = function (t) {
                return n.e(50).then(function () {
                    return t(n(697))
                }.bind(null, n)).catch(n.oe)
            },
            m = function (t) {
                return n.e(34).then(function () {
                    return t(n(698))
                }.bind(null, n)).catch(n.oe)
            },
            g = function (t) {
                return n.e(32).then(function () {
                    return t(n(702))
                }.bind(null, n)).catch(n.oe)
            },
            b = function (t) {
                return n.e(35).then(function () {
                    return t(n(696))
                }.bind(null, n)).catch(n.oe)
            },
            k = function (t) {
                return n.e(33).then(function () {
                    return t(n(700))
                }.bind(null, n)).catch(n.oe)
            },
            w = function (t) {
                return n.e(49).then(function () {
                    return t(n(701))
                }.bind(null, n)).catch(n.oe)
            },
            C = function (t) {
                return n.e(19).then(function () {
                    return t(n(699))
                }.bind(null, n)).catch(n.oe)
            },
            y = function (t) {
                return n.e(41).then(function () {
                    return t(n(675))
                }.bind(null, n)).catch(n.oe)
            },
            T = function (t) {
                return n.e(29).then(function () {
                    return t(n(681))
                }.bind(null, n)).catch(n.oe)
            },
            x = function (t) {
                return n.e(61).then(function () {
                    return t(n(682))
                }.bind(null, n)).catch(n.oe)
            },
            S = function (t) {
                return n.e(12).then(function () {
                    return t(n(679))
                }.bind(null, n)).catch(n.oe)
            },
            $ = function (t) {
                return n.e(21).then(function () {
                    return t(n(677))
                }.bind(null, n)).catch(n.oe)
            },
            A = function (t) {
                return n.e(13).then(function () {
                    return t(n(678))
                }.bind(null, n)).catch(n.oe)
            },
            P = function (t) {
                return n.e(51).then(function () {
                    return t(n(695))
                }.bind(null, n)).catch(n.oe)
            },
            E = function (t) {
                return n.e(63).then(function () {
                    return t(n(676))
                }.bind(null, n)).catch(n.oe)
            },
            I = function (t) {
                return n.e(62).then(function () {
                    return t(n(680))
                }.bind(null, n)).catch(n.oe)
            },
            L = function (t) {
                return n.e(60).then(function () {
                    return t(n(683))
                }.bind(null, n)).catch(n.oe)
            },
            O = function (t) {
                return n.e(65).then(function () {
                    return t(n(657))
                }.bind(null, n)).catch(n.oe)
            };
        e.a = [{
            path: "/user/",
            name: "user",
            component: a.a
        }, {
            path: "/user/profile",
            name: "user_profile",
            component: i
        }, {
            path: "/user/nickname",
            name: "user_nickname",
            component: o
        }, {
            path: "/user/qrcode",
            name: "user_qrcode",
            component: r
        }, {
            path: "/user/bindMobile/:status",
            name: "user_bindMobile",
            component: c
        }, {
            path: "/user/verifyMobile",
            name: "user_verifyMobile",
            component: u
        }, {
            path: "/user/bindWeixin",
            name: "user_bindWeixin",
            component: l
        }, {
            path: "/user/unbindWeixin",
            name: "user_unbindWeixin",
            component: p
        }, {
            path: "/user/accountDetail",
            name: "user_accountDetail",
            component: d
        }, {
            path: "/user/userInvitation",
            name: "user_invitation",
            component: _
        }, {
            path: "/user/userBalance",
            name: "user_balance",
            component: f
        }, {
            path: "/user/userCoin",
            name: "user_coin",
            component: v
        }, {
            path: "/withdraw/",
            name: "withdraw",
            component: h
        }, {
            path: "/withdraw/rebatescore",
            name: "withdraw_rebate_score",
            component: k
        }, {
            path: "/withdraw/phone",
            name: "withdraw_phone",
            component: m
        }, {
            path: "/withdraw/weixin",
            name: "withdraw_weixin",
            component: g
        }, {
            path: "/withdraw/alipay",
            name: "withdraw_alipay",
            component: b
        }, {
            path: "/withdraw/result",
            name: "withdraw_result",
            component: w
        }, {
            path: "/withdraw/result/:backroute",
            name: "withdraw_result_backroute",
            component: w
        }, {
            path: "/withdraw/process/:type",
            name: "withdraw_process",
            component: C
        }, {
            path: "/withdraw/arrived-example",
            name: "withdraw_arrived_example",
            component: P
        }, {
            path: "/entrance",
            name: "qianka_entrance",
            component: E
        }, {
            path: "/about/",
            name: "about",
            component: y
        }, {
            path: "/help/",
            name: "help",
            component: T
        }, {
            path: "/help/self",
            name: "help_self",
            component: x
        }, {
            path: "/help/complainSubtask",
            name: "help_complainSubtask",
            component: S
        }, {
            path: "/help/complainHitask",
            name: "help_complainHitask",
            component: $
        }, {
            path: "/help/complainRenQiGongHui",
            name: "help_renqigonghui",
            component: A
        }, {
            path: "/help/ComplainUnfreeze",
            name: "help_complainUnfreeze",
            component: I
        }, {
            path: "/help/UnfreezeForm",
            name: "unfreeze_form",
            component: L
        }, {
            path: "/jstest",
            name: "js_test",
            component: O
        }]
    },
    function (t, e, n) {
        "use strict";
        var s = n(510),
            a = n.n(s),
            i = n(509),
            o = n.n(i),
            r = n(508),
            c = n.n(r);
        e.a = [{
            path: "/zhima/bindZhima",
            name: "bind_zhima",
            component: a.a
        }, {
            path: "/zhima/bindSuccess",
            name: "bind_zhima",
            component: o.a
        }, {
            path: "/zhima/bindFail",
            name: "bind_zhima",
            component: c.a
        }]
    },
    function (t, e, n) {
        "use strict";
        var s = n(34),
            a = n.n(s),
            i = n(650),
            o = n.n(i),
            r = n(76),
            c = n(155),
            u = n(153),
            l = n(152),
            p = n(156),
            d = n(158),
            _ = n(157),
            f = n(16),
            v = n.n(f),
            h = n(462),
            m = n.n(h);
        v.a.use(m.a), window._ = a.a, window.moment = v.a.prototype.$moment = o.a, window.$cookie = v.a.prototype.$cookie = r.a, window.$bus = v.a.prototype.$bus = c.a, window.$assistant = v.a.prototype.$assistant = u.a, window.$api = v.a.prototype.$api = l.a, window.$popup = p.a, window.$upload = d.a, window.$sess = n.i(_.a)(sessionStorage);
        var g = $modal.destroy;
        $modal.destroy = function (t) {
            g(t), 0 === document.querySelectorAll("[von-modal]").length && document.body.classList.remove("modal-open")
        }
    },
    function (t, e, n) {
        "use strict";
        var s = function (t) {
                return n.e(24).then(function () {
                    return t(n(705))
                }.bind(null, n)).catch(n.oe)
            },
            a = function (t) {
                return n.e(0).then(function () {
                    return t(n(704))
                }.bind(null, n)).catch(n.oe)
            },
            i = function (t) {
                return n.e(26).then(function () {
                    return t(n(655))
                }.bind(null, n)).catch(n.oe)
            },
            o = function (t) {
                return n.e(25).then(function () {
                    return t(n(656))
                }.bind(null, n)).catch(n.oe)
            },
            r = function (t) {
                return n.e(48).then(function () {
                    return t(n(703))
                }.bind(null, n)).catch(n.oe)
            };
        e.a = [{
            path: "/apprentices",
            name: "apprentices",
            component: s
        }, {
            path: "/apprentices/achievements",
            name: "apprenticed_achievements",
            component: a,
            children: [{
                path: "contributes",
                name: "apprenticed_achievements_contribute",
                component: i
            }, {
                path: "onroading",
                name: "apprenticed_achievements_roading",
                component: o
            }]
        }, {
            path: "/apprentices/accumulate",
            name: "accumulate",
            component: r
        }]
    },
    function (t, e, n) {
        "use strict";
        var s = n(527),
            a = n.n(s);
        e.a = [{
            name: "group",
            path: "/group",
            component: a.a
        }]
    },
    function (t, e, n) {
        "use strict";
        var s = n(533),
            a = n.n(s);
        e.a = {
            name: "level",
            path: "/level",
            component: a.a
        }
    },
    function (t, e, n) {
        "use strict";
        var s = n(534),
            a = n.n(s);
        e.a = {
            name: "message",
            path: "/message",
            component: a.a
        }
    },
    function (t, e, n) {
        "use strict";
        var s = n(538),
            a = n.n(s),
            i = n(524),
            o = n.n(i),
            r = n(535),
            c = n.n(r);
        e.a = [{
            name: "read_rules",
            path: "/readRules",
            component: a.a
        }, {
            name: "explore",
            path: "/Explore/:index",
            component: o.a
        }, {
            name: "upgrade",
            path: "/upgrade",
            component: c.a
        }]
    },
    function (t, e, n) {
        "use strict";
        var s = function (t) {
                return n.e(4).then(function () {
                    return t(n(709))
                }.bind(null, n)).catch(n.oe)
            },
            a = function (t) {
                return n.e(23).then(function () {
                    return t(n(708))
                }.bind(null, n)).catch(n.oe)
            },
            i = function (t) {
                return n.e(18).then(function () {
                    return t(n(711))
                }.bind(null, n)).catch(n.oe)
            },
            o = function (t) {
                return n.e(17).then(function () {
                    return t(n(712))
                }.bind(null, n)).catch(n.oe)
            },
            r = function (t) {
                return n.e(28).then(function () {
                    return t(n(710))
                }.bind(null, n)).catch(n.oe)
            };
        e.a = [{
            name: "sale",
            path: "/sale/:type",
            component: s
        }, {
            name: "sale_detail",
            path: "/sale/detail/:type/:goodsTbId/:isOutsideGoods/:from",
            component: a
        }, {
            name: "sale_search",
            path: "/sale/search/:queryStr",
            component: i
        }, {
            name: "sale_share",
            path: "/sale/share/:id",
            component: o
        }, {
            name: "sale_order_find",
            path: "/sale/orders/find",
            component: r
        }]
    },
    function (t, e, n) {
        "use strict";
        var s = function (t) {
                return n.e(2).then(function () {
                    return t(n(713))
                }.bind(null, n)).catch(n.oe)
            },
            a = function (t) {
                return n.e(5).then(function () {
                    return t(n(715))
                }.bind(null, n)).catch(n.oe)
            },
            i = function (t) {
                return n.e(8).then(function () {
                    return t(n(718))
                }.bind(null, n)).catch(n.oe)
            },
            o = function (t) {
                return n.e(14).then(function () {
                    return t(n(717))
                }.bind(null, n)).catch(n.oe)
            },
            r = function (t) {
                return n.e(6).then(function () {
                    return t(n(720))
                }.bind(null, n)).catch(n.oe)
            },
            c = function (t) {
                return n.e(11).then(function () {
                    return t(n(719))
                }.bind(null, n)).catch(n.oe)
            },
            u = function (t) {
                return n.e(9).then(function () {
                    return t(n(714))
                }.bind(null, n)).catch(n.oe)
            },
            l = function (t) {
                return n.e(16).then(function () {
                    return t(n(716))
                }.bind(null, n)).catch(n.oe)
            };
        e.a = [{
            name: "sales",
            path: "/sales",
            component: s
        }, {
            name: "sales_content_share",
            path: "/sales/content_share",
            component: a
        }, {
            name: "sales_order",
            path: "/sales/orders/:types",
            component: i
        }, {
            name: "sales_find_order",
            path: "/sales/findorders",
            component: o
        }, {
            name: "sales_tb_rebate",
            path: "/sales/tb_rebate",
            component: r
        }, {
            name: "tb_rebate_detail",
            path: "/sales/tb_rebate/detail/:type/:goodsTbId/:isOutsideGoods/:from",
            component: c
        }, {
            name: "sales_search",
            path: "/sales/search",
            component: u
        }, {
            name: "sales_content_share_detail",
            path: "/sales/content_share/detail/:articleid",
            component: l
        }]
    },
    function (t, e) {}, ,
    function (t, e, n) {
        n(406);
        var s = n(0)(n(191), n(602), "data-v-5a09ce31", null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(443);
        var s = n(0)(n(192), n(645), "data-v-fab70e34", null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(439);
        var s = n(0)(n(194), n(641), "data-v-d8c9a544", null);
        t.exports = s.exports
    },
    function (t, e, n) {
        var s = n(0)(n(195), null, null, null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(362);
        var s = n(0)(n(196), n(555), "data-v-1203a3d0", null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(349);
        var s = n(0)(n(199), n(539), "data-v-001c597d", null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(392);
        var s = n(0)(n(263), n(588), null, null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(413);
        var s = n(0)(n(269), n(609), "data-v-64f12eba", null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(389);
        var s = n(0)(n(279), n(585), "data-v-4351316b", null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(407);
        var s = n(0)(n(280), n(603), null, null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(386);
        var s = n(0)(n(294), n(582), "data-v-3d7b44c8", null);
        t.exports = s.exports
    },
    function (t, e) {
        t.exports = Vonic
    },
    function (t, e, n) {
        n(342);
        var s = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    buttons: [{
                        text: "放弃"
                    }, {
                        text: "继续（s）"
                    }]
                },
                template: function (t) {
                    return '\n      <div class="title">任务须知</div>\n      <div class="desc">' + t + "</div>\n    "
                }
            },
            a = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    buttons: [{
                        text: "知道了"
                    }]
                },
                template: '\n    <p class="title">很抱歉</p>\n    <p class="desc">您的情况不满足该广告商要求，无法领取该任务</p>\n  '
            },
            i = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    buttons: [{
                        text: "放弃"
                    }, {
                        text: "继续"
                    }]
                },
                template: '\n    <p class="title">温馨提示</p>\n    <p class="desc">您已完成过本任务，再次完成需要提供不同的身份资料（父母、伴侣、朋友）</p>\n  '
            },
            o = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    obvious: 1,
                    buttons: [{
                        text: "放弃"
                    }, {
                        text: "不放弃"
                    }]
                },
                template: '\n    <div class="desc">是否放弃任务</div>\n  '
            },
            r = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    buttons: [{
                        text: "是"
                    }, {
                        text: "否"
                    }]
                },
                template: '\n    <div class="desc">是否删除图片</div>\n  '
            },
            c = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    buttons: [{
                        text: "知道了"
                    }]
                },
                template: function (t) {
                    return '\n      <div class="title">任务已提交审核</div>\n      <div class="desc">' + (t || "预计1～3个工作日内奖励到账") + "</div>\n    "
                }
            },
            u = {
                options: {
                    effect: "scale",
                    cssClass: "popup-task-appeal",
                    buttons: [{
                        text: "知道了"
                    }]
                },
                template: function (t) {
                    return '\n      <div class="icon"><img src="//qianka.b0.upaiyun.com/images/30613d5771c0ec9a7651b8fdac41318b.png"></div>\n      <div class="title">申诉失败</div>\n      <div class="desc">试玩任务《' + t + "》奖励未到账申诉失败，理由：提交资料不足以证明完成本任务</div>\n    "
                }
            },
            l = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    buttons: [{
                        text: "知道了"
                    }]
                },
                template: '\n    <div class="title text-center">别贪心</div>\n    <div class="desc">完成或放弃当前任务，才能领新的哟</div>\n  '
            },
            p = {
                options: {
                    effect: "scale",
                    cssClass: "popup-task-success",
                    buttons: [{
                        text: "知道了",
                        theme: "assertive"
                    }]
                },
                template: function (t) {
                    var e = t.amount || "0.0",
                        n = t.taskType || "试玩任务",
                        s = t.taskName || " ";
                    return '\n      <div class="logo"><img src="//qianka.b0.upaiyun.com/images/416b9d3b792ea8a3484db8dc5a137299.png"></div>\n      <scalable class="reward" height="62">\n        <span class="rmb">+</span>\n        <span class="amount">' + parseFloat(e) + '</span>\n        <span class="yuan">元</span>\n      </scalable>\n      <div class="task-info">\n        <div class="line"></div>\n        <div class="task-type">' + n + '</div>\n        <div class="task-name">' + s + "</div>\n      </div>\n    "
                }
            },
            d = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    buttons: [{
                        text: "知道了"
                    }]
                },
                template: function () {
                    return '\n      <div class="title">很抱歉</div>\n      <div class="desc">\n        您的账号已被冻结，解冻请\n        <a class="assertive" href="/v4/help/complainUnfreeze" >前往申诉</a>\n      </div>\n    '
                }
            },
            _ = {
                options: {
                    effect: "scale",
                    cssClass: "popup-gaoe-weixin-task popup-general",
                    buttons: [{
                        text: "知道了"
                    }]
                },
                template: function (t, e) {
                    return '\n      <div class="task-title mb-4">保存二维码后在微信里扫码打开</div>\n      <div class="task-title mb-20">关注公众号后完成任务</div>\n      <img class="weixin-guid-img" src="' + t + '" alert=""/>\n    '
                }
            },
            f = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    obvious: 1,
                    buttons: [{
                        text: "短信验证码"
                    }, {
                        text: "语音验证码"
                    }],
                    showClose: !0,
                    btnLengthways: !0
                },
                template: '\n    <div class="title">没收到验证码？</div>\n    <div class="desc">\n      您可以选择获取语音验证码\n    </div>\n  '
            },
            v = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    buttons: [{
                        text: "稍后绑定"
                    }, {
                        text: "立即绑定"
                    }]
                },
                template: '\n    <div class="title"></div>\n    <div class="desc">\n      需要绑定手机才能领取本任务哟\n    </div>\n  '
            },
            h = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    buttons: [{
                        text: "知道了"
                    }]
                },
                template: '\n    <div class="title"></div>\n    <div class="desc">\n      您每月最多可参与3次活动，每次间隔需超过2天\n    </div>\n  '
            },
            m = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    buttons: [{
                        text: "查看进度"
                    }, {
                        text: "知道了"
                    }]
                },
                template: '\n    <div class="title"></div>\n    <div class="desc">\n      任务正在审核中，最长24小时内审核完成 \n    </div>\n  '
            };
        t.exports = {
            popup_must_know: s,
            popup_compare_fail: a,
            popup_pleaseant_remind: i,
            popup_abandon_gaoe: o,
            popup_img_gaoe: r,
            popup_submit_check: c,
            popup_task_fail: u,
            popup_snatch_new_task: l,
            popup_task_success: p,
            popup_user_freeze: d,
            popup_gaoe_weixin_task: _,
            popup_choose_verify_code_type: f,
            popup_bind_phone: v,
            popup_task_limit: h,
            popup_task_check: m
        }
    },
    function (t, e) {
        var n = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    buttons: [{
                        text: "稍后绑定"
                    }, {
                        text: "立即绑定"
                    }]
                },
                template: '\n    <div class="title"></div>\n    <div class="desc">\n      需要绑定手机才能领取本任务哟\n    </div>\n  '
            },
            s = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    buttons: [{
                        text: "好的"
                    }]
                },
                template: '\n    <div class="title">订单同步成功</div>\n    <div class="desc">\n      请在订单列表查看\n    </div>\n  '
            },
            a = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    buttons: [{
                        text: "好的"
                    }]
                },
                template: '\n    <div class="title">订单同步失败</div>\n    <div class="desc">\n    请检查订单号是否正确\n    </div>\n  '
            },
            i = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    buttons: [{
                        text: "好的"
                    }]
                },
                template: '\n    <div class="title">订单同步中</div>\n    <div class="desc">\n    订单同步过程大约需要三分钟\n    </div>\n  '
            };
        t.exports = {
            popup_order_success: s,
            popup_order_failed: a,
            popup_ordering: i,
            popup_bind_phone: n
        }
    },
    function (t, e, n) {
        n(354);
        var s = n(0)(n(217), n(544), "data-v-05b154f6", null);
        t.exports = s.exports
    },
    function (t, e) {
        var n = {
            options: {
                effect: "scale",
                cssClass: "popup-general",
                buttons: [{
                    text: "稍后绑定"
                }, {
                    text: "立即绑定"
                }]
            },
            template: '\n    <div class="title"></div>\n    <div class="desc">\n      需要绑定手机才能领取本任务哟\n    </div>\n  '
        };
        t.exports = {
            popup_bind_phone: n
        }
    },
    function (t, e, n) {
        n(404);
        var s = n(0)(n(193), n(600), "data-v-58011867", null);
        t.exports = s.exports
    }, ,
    function (t, e, n) {
        n(430);
        var s = n(0)(n(198), n(629), "data-v-92e75b24", null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(396);
        var s = n(0)(n(242), n(592), null, null);
        t.exports = s.exports
    },
    function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return c
        });
        var s = n(340),
            a = (n.n(s), n(3)),
            i = n(29),
            o = n.n(i),
            r = this,
            c = {
                options: function (t) {
                    return {
                        effect: "scale",
                        cssClass: "popup_assistant_upgrade",
                        keep: !0,
                        buttons: [{
                            text: "立即升级",
                            onClick: function () {
                                var e = document.querySelector(".popup_assistant_upgrade .popup-buttons .button");
                                e.setAttribute("data-clipboard-action", "copy"), e.setAttribute("data-clipboard-text", t.clipboard), r.clipboard = new o.a(".button"), location.href = n.i(a.e)(t.download_url, {
                                    return_url: location.href
                                })
                            }
                        }],
                        showClose: !0
                    }
                }, template: function (t) {
                    return '\n      <div class="remind">\n        这是您的任务助手\n      </div>\n      <div class="content">\n        <img class="app-icon" src="' + t.app_icon + '" alt="">\n        <p class="app-name">' + t.app_name + '</p>\n        <div class="app-developer">' + t.app_developer + '<img class="arrow" src="//qianka.b0.upaiyun.com/images/fd2f442bd993479e34e64c25fbd7184b.png" alt=""></div>\n        <span class="app-size">仅' + t.app_size + '</span>\n      </div>\n      <div class="bottom-remind"><span>每个人的任务助手可能不同</span></div>\n    '
                }
            }
    },
    function (t, e, n) {
        n(341);
        var s = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    buttons: [{
                        text: "确认"
                    }, {
                        text: "更换绑定"
                    }]
                },
                template: function (t) {
                    return '\n    <div class="title">重要通知</div>\n    <div class="desc">\n      新版钱咖使用手机号进行登录, 为保证您的正常使用, 请确认您的绑定号码:\n    </div>\n    <h4 style="position: relative; top: 3px; color: #484746; text-align: center; font-size: 20px; font-weight: normal; margin-bottom:0; line-height: 38px;">' + _.reduce(t, function (t, e, n) {
                        return t + e + ((n + 2) % 4 == 0 ? " " : "")
                    }) + "</h4>\n  "
                }
            },
            a = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    buttons: [{
                        text: "忽略"
                    }, {
                        text: "绑定"
                    }]
                },
                template: '\n    <div class="title">重要通知</div>\n    <div class="desc">\n      新版钱咖使用手机号进行登录, 为保障您可以正常使用, 请尽快绑定手机\n    </div>\n  '
            },
            i = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    buttons: [{
                        text: "知道了"
                    }]
                },
                template: '\n    <div class="title">重要通知</div>\n    <div class="desc">\n      苹果证书登录为内部体验功能, 后续可能取消, 建议使用手机号登录\n    </div>\n  '
            },
            o = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    buttons: [{
                        text: "立即绑定"
                    }]
                },
                template: '\n    <div class="title">重要通知</div>\n    <div class="desc">\n      苹果证书登录为内部体验功能, 为保障您能正常登录钱咖, 请绑定手机\n    </div>\n  '
            },
            r = {
                template: function (t) {
                    var e = t.lottery_id;
                    return '\n      <img src="//qianka.b0.upaiyun.com/images/6dc6a001c2292da7bc8ea72bb65e3eeb.png" alt="">\n      <div class="win-info">\n        <div class="win-money">\n          +  <span class="font-big">' + t.reward + '</span> 元\n        </div>\n        <div class="win-desc">\n          ' + e + "期，中奖 " + t.bets + " 注\n        </div>\n      </div>\n    "
                }
            },
            c = {
                options: {
                    effect: "scale",
                    cssClass: "popup-national-event",
                    buttons: [{
                        text: "马上收徒"
                    }],
                    showClose: !0
                },
                template: '\n    <div class="title">活动介绍</div>\n    <div class="time">时间：<span>2017.9.30-10.8</span>（仅限9天)</div>\n    <div class="desc">\n      规则：1. 在现有收徒奖励的基础上，每日新增的第一个完成了标准任务的iOS徒弟，每完成一个标准任务，额外奖励1元，最高奖励10元；\n    </div>\n    <div class="desc2">2. 其他徒弟参考既有收徒规则。</div>\n  '
            };
        t.exports = {
            popup_important_001: s,
            popup_important_002: a,
            popup_important_003: i,
            popup_important_004: o,
            popup_lottery_win: r,
            popup_national_event: c
        }
    },
    function (t, e) {
        var n = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    buttons: [{
                        text: "取消"
                    }, {
                        text: "证书登录"
                    }]
                },
                template: '\n    <div class="desc no-title">如安装过苹果证书，可通过证书登录</div>\n  '
            },
            s = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    buttons: [{
                        text: "知道了"
                    }]
                },
                template: '\n    <div class="title">登录失败</div>\n    <div class="desc">\n      <div>证书未关联到您的账号<br>请使用手机号进行登录</div>\n    </div>\n  '
            },
            a = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    title: "",
                    obvious: 1,
                    buttons: [{
                        text: "知道了"
                    }]
                },
                template: '\n    <div class="title">获取验证码失败</div>\n    <div class="desc">该手机号尚未绑定过钱咖账号</div>\n  '
            },
            i = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    obvious: 1,
                    buttons: [{
                        text: "短信验证码"
                    }, {
                        text: "语音验证码"
                    }],
                    showClose: !0,
                    btnLengthways: !0
                },
                template: '\n    <div class="title">没收到验证码？</div>\n    <div class="desc">\n      您可以选择获取语音验证码\n    </div>\n  '
            };
        t.exports = {
            login_with_certification: n,
            invalid_certification: s,
            get_code_fail: a,
            popup_choose_verify_code_type: i
        }
    },
    function (t, e, n) {
        "use strict";
        var s = n(6),
            a = n(67),
            i = n.n(a);
        e.a = {
            components: {
                BindZhimaForm: i.a
            },
            data: function () {
                return {
                    bindZhimaModal: void 0
                }
            }, destroyed: function () {
                this.bindZhimaModal && $modal.destroy(this.bindZhimaModal)
            }, methods: {
                showBindZhimaPopup: function () {
                    var t = this;
                    $popup.fromTemplate(s.a.template, s.a.options).show().then(function (e) {
                        if (0 === e) {
                            if (t.bindZhimaModal) return void t.bindZhimaModal.show();
                            $modal.fromComponent(i.a, {
                                title: "芝麻信用认证",
                                theme: "dark"
                            }).then(function (e) {
                                t.bindZhimaModal = e, t.bindZhimaModal.show()
                            })
                        }
                    })
                }
            }
        }
    },
    function (t, e) {
        var n = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    buttons: [{
                        text: "取消"
                    }, {
                        text: "证书登录"
                    }]
                },
                template: '\n    <div class="desc no-title">如安装过苹果证书，可通过证书登录</div>\n  '
            },
            s = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    buttons: [{
                        text: "知道了"
                    }]
                },
                template: '\n    <div class="title">登录失败</div>\n    <div class="desc">\n      <div>证书未关联到您的账号<br>请使用手机号进行登录</div>\n    </div>\n  '
            },
            a = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    title: "",
                    obvious: 1,
                    buttons: [{
                        text: "知道了"
                    }]
                },
                template: '\n    <div class="title">获取验证码失败</div>\n    <div class="desc">该手机号尚未绑定过钱咖账号</div>\n  '
            },
            i = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    obvious: 1,
                    buttons: [{
                        text: "短信验证码"
                    }, {
                        text: "语音验证码"
                    }],
                    showClose: !0,
                    btnLengthways: !0
                },
                template: '\n    <div class="title">没收到验证码？</div>\n    <div class="desc">\n      您可以选择获取语音验证码\n    </div>\n  '
            };
        t.exports = {
            login_with_certification: n,
            invalid_certification: s,
            get_code_fail: a,
            popup_choose_verify_code_type: i
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(16),
            a = n.n(s),
            i = n(136),
            o = n.n(i),
            r = (n(115), n(123)),
            c = (n.n(r), n(126)),
            u = n.n(c),
            l = n(135),
            p = n.n(l),
            d = n(130),
            f = n.n(d),
            v = n(129),
            h = n.n(v),
            m = n(132),
            g = n.n(m),
            b = n(112),
            k = n(107),
            w = n(113),
            C = n(108),
            y = n(104),
            T = n(109),
            x = n(106),
            S = n(114),
            $ = n(105),
            A = n(110),
            P = n(131),
            E = n.n(P),
            I = n(51),
            L = n(118),
            O = n(117),
            R = n(121),
            N = n(122),
            D = n(119),
            F = n(120),
            M = n(116),
            U = n(125),
            q = n.n(U),
            B = n(3),
            H = n(4),
            z = n(12),
            j = n(127),
            G = n.n(j),
            K = n(128),
            Y = n.n(K),
            V = n(111),
            W = n(134),
            Z = n.n(W),
            J = n(133),
            X = n.n(J),
            Q = n(124),
            tt = n.n(Q);
        if (1 === (new(a.a.extend(u.a))).$mount("[qk-incognito]").getState()) throw "incognito mode";
        var et = [{
            path: "/",
            name: "welcome",
            component: p.a
        }, {
            path: "/login",
            name: "login",
            component: f.a
        }, {
            path: "/dashboard",
            name: "dashboard",
            component: g.a
        }, {
            path: "/reading",
            name: "reading",
            component: E.a
        }, {
            path: "/announcement",
            name: "announcement",
            component: h.a
        }];
        if (et = et.concat(b.a).concat(k.a).concat(w.a).concat(C.a).concat(y.a).concat(T.a).concat(S.a).concat(x.a).concat($.a).concat(A.a).concat(L.a).concat(O.a).concat(R.a).concat(D.a).concat(N.a).concat(F.a).concat(M.a), et = et.concat([{
            path: "*",
            component: g.a
        }]), new(a.a.extend(q.a))({
            store: I.a
        }).$mount("[qk-customer-service]"), o.a.app.setConfig("routerOptions", {
            mode: "history",
            base: __ENV__.base
        }), o.a.app.setConfig("beforeEach", function (t, e, n) {
            if (e && e.name && _.indexOf(["tasks", "task_detail", "zstasks", "zstask_detail", "gaoe", "apprentice"], e.name) > -1 && $assistant.cancelPoll(), "sale" === e.name || "sales" === e.name || "sales_content_share" === e.name || "sales_search" === e.name || "sales_tb_rebate" === e.name) {
                var s = document.getElementsByClassName("page-content"),
                    a = s.length > 0 && s[0] || document.createElement("div"),
                    i = a.scrollTop;
                $sess.set(e.name, i)
            }
            t.path && window._hmt && window._hmt.push(["_trackPageview", t.path]);
            var o = ["dashboard", "task_detail"];
            $bus.$emit(t && t.name && _.indexOf(o, t.name) > -1 ? "showCustomerService" : "hideCustomerService", {
                pos_bottom: 25
            }), n()
        }), n.i(z.a)(), n.i(B.a)()) {
            n.i(z.b)([window.location.hostname, "pos.baidu.com", "eclick.baidu.com", "s.cpro.baidu.com", "cpro.baidustatic.com"]);
            var nt = $cookie.get("DIS4");
            nt && n.i(z.c)(nt), n.i(z.d)("钱咖 · 每天领钱")
        }
        o.a.app.setConfig("afterEach", function (t, e) {
            if ($storage.get(H.a) || $storage.set(H.a, n.i(B.b)()), "sale" === t.name || "sales" === t.name || "sales_content_share" === t.name || "sales_search" === t.name || "sales_tb_rebate" === t.name) {
                var s = $sess.get(t.name);
                a.a.nextTick(function () {
                    var e = document.getElementsByClassName("sales-content");
                    "sale" === t.name && (e = document.getElementsByClassName("sale-content")), (e.length > 0 && e[0] || document.createElement("div")).scrollTop = s
                })
            }
            n.i(B.c)(), window.onresize = function () {
                n.i(B.c)()
            }, /iPad/.test(navigator.userAgent) && setTimeout(function () {
                document.querySelector(".page-content").classList.add("no-scrolling")
            }, 1e3), __ENV__ && 1 === __ENV__.stat_switch && setTimeout(function () {
                var n = {
                    url: encodeURIComponent(location.href),
                    u: $storage.get("qk:biz:uid"),
                    uu: $storage.get("qk:biz:uuid"),
                    a: "qianka",
                    t: "PAGE",
                    c: "page_" + (t.name || "anonymous_route")
                };
                e && e.name ? n.ref = "page_" + e.name : n.ref = encodeURIComponent(document.referrer), B.d.send(n)
            })
        }), a.a.use(o.a.app, {
            routes: et,
            store: I.a
        }), (new(a.a.extend(G.a))).$mount("[qk-webclip]"), new(a.a.extend(Y.a))({
            store: I.a
        }).$mount("[qk-zhima]"), new(a.a.extend(V.a))({
            store: I.a
        }).$mount("[qk-assistant]"), new(a.a.extend(Z.a))({
            store: I.a
        }).$mount("[qk-task-reward]"), new(a.a.extend(X.a))({
            store: I.a
        }).$mount("[qk-level-upgrade]"), a.a.prototype.forward = $router.forward, a.a.prototype.back = $router.back, a.a.prototype.resizeVConentHeight = function () {
            var t = this,
                e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 164;
            this.$nextTick(function () {
                var s = document.getElementsByClassName("_v-content")[0],
                    a = document.getElementsByClassName("_v-content")[0].children[0],
                    i = a.offsetHeight,
                    o = i + n;
                s.style.height = o + "px";
                var r = setTimeout(function () {
                    var s = document.getElementsByClassName("_v-content")[0].children[0].offsetHeight;
                    i !== s ? t.resizeVConentHeight(++e, n) : e < 3 && t.resizeVConentHeight(++e, n), clearTimeout(r)
                }, 200)
            })
        }, tt.a.attach(document.body)
    },
    function (t, e, n) {
        "use strict";
        e.a = function (t, e) {
            t.fetchLevelDashboard = function () {
                return e.get("/s5/level.dashboard", {
                    keep_cache: 0
                })
            }, t.createUserV5 = function () {
                return e.post("/s5/create_user")
            }, t.dashboardV5 = function () {
                return e.get("/s5/dashboard")
            }, t.trialCard = function () {
                return e.post("/s5/claim.trial.card")
            }, t.trailCardInfo = function () {
                return e.get("/s5/trial.card.info")
            }, t.rewardClaimToday = function () {
                return e.post("/s5/reward.claim.today")
            }, t.userAction = function (t) {
                return e.post("/s5/user.action", t)
            }, t.fetchMissList = function (t) {
                return e.get("/s5/miss.list", {
                    keep_cache: 0,
                    params: t
                })
            }, t.reclaimtMiss = function (t) {
                return e.post("/s5/miss.reclaim", {
                    id: t
                })
            }, t.shoutuDashboardV5 = function (t) {
                var n = "shoutu_type=" + t;
                return e.get("/s5/shoutu.dashboard?" + n)
            }, t.shoutuDashboardV5D3 = function () {
                return e.get("/s5/shoutu.dashboard.3?")
            }, t.apprenticeListAllV5 = function (t, n) {
                var s = "limit=" + t + "&shoutu_type=" + n;
                return e.get("/s5/shoutu.apprenticeList.all?" + s)
            }, t.apprenticeListV5 = function (t, n, s) {
                var a = "apprentice_type=" + t;
                return s && (a += "&offset=" + s), a += "&limit=" + n, e.get("/s5/shoutu.apprentice.list?" + a)
            }, t.userClaimGrandson = function () {
                return e.get("/s5/user.claim.grandson")
            }, t.shoutuUserInfoV5 = function (t) {
                return e.get("/s5/shoutu.userInfo", {
                    params: {
                        user_id: t
                    },
                    keep_cache: 0
                })
            }, t.getAccountList = function (t) {
                return e.get("/s5/users.accounts.getAccountList", {
                    keep_cache: 0,
                    params: t
                })
            }, t.getKabi = function (t) {
                return e.get("/s5/users.accounts.getKabi", {
                    keep_cache: 0,
                    params: t
                })
            }, t.getCoin = function (t) {
                return e.get("/s5/users.accounts.getCoin", {
                    keep_cache: 0,
                    params: t
                })
            }, t.coinExchange = function (t) {
                return e.post("/s5/users.accounts.coinExchange", {
                    keep_cache: 0,
                    params: t
                })
            }, t.bindMaster = function (t) {
                return e.post("/s5/user.bind.master", {
                    master_id: t
                })
            }, t.queryReadList = function (t) {
                var n = {};
                return t && (n.channel_id = t), e.get("/s5/reading.list", {
                    keep_cache: 0,
                    params: n
                })
            }, t.postReadAction = function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 94;
                return e.post("/s5/user.action", {
                    action_id: t
                })
            }, t.prefetchReading = function (t) {
                return e.get("/s5/reading.prefetch", {
                    channel_id: t
                })
            }, t.loginByPhoneV5 = function (t) {
                return e.post("/s5/login.mobile", t)
            }, t.reservationAcquire = function (t) {
                return e.get("/s5/reservation.acquire?task_id=" + t)
            }, t.reservationStart = function (t) {
                return e.get("/s5/reservation.start?task_id=" + t)
            }, t.onlineRewardDashboard = function () {
                return e.get("/s5/online.dashboard")
            }, t.onlineAcquire = function () {
                return e.post("/s5/online.acquire")
            }, t.exploreTaskList = function () {
                return e.get("/s5/explore.task.list")
            }, t.exploreMyList = function () {
                return e.get("/s5/explore.task.mylist")
            }, t.exploreAcquire = function (t) {
                return e.get("/s5/explore.task.acquire?explore_task_id=" + t)
            }, t.exploreStart = function (t) {
                return e.get("/s5/explore.task.start?explore_task_id=" + t.explore_task_id + "&the_day=" + t.the_day)
            }, t.exploreDetail = function (t) {
                return e.get("/s5/explore.task.detail?explore_task_id=" + t.explore_task_id + "&the_day=" + t.the_day)
            }, t.resetExploreTime = function () {
                return e.get("/s5/explore.task.restart")
            }, t.giveUpExplore = function (t) {
                return e.get("/s5/explore.task.giveup?explore_task_id=" + t.taskId + "&acquire_id=" + t.currentTaskId)
            }, t.checkExploreStatus = function (t) {
                return e.get("/s5/explore.task.status?explore_task_id=" + t.id + "&the_day=" + t.the_day)
            }, t.rewardCoinClaimToday = function (t) {
                return e.post("/s5/reward.coin.claim.today")
            }, t.groupResigter = function () {
                return e.get("/s5/team.clock.dashboard")
            }, t.groupSignIn = function () {
                return e.get("/s5/team.clock.in")
            }, t.groupPayTeam = function () {
                return e.get("/s5/team.clock.open")
            }, t.groupInvited = function (t) {
                return e.get("/s5/team.clock.invite?user_id=" + t.user_id)
            }, t.groupExit = function () {
                return e.get("/s5/team.clock.exit")
            }, t.groupConfirmTeam = function (t) {
                return e.get("/s5/team.clock.confirm?accept=" + t.accept + "&inviter_uid=" + t.inviter_uid + "&invite_id=" + t.invite_id)
            }, t.groupHadread = function (t) {
                return e.get("s4/users.messages.read?&msg_id=" + t.msg_id)
            }, t.saleDashboard = function (t) {
                return e.get("/s5/qt/sign_url?dispatch=goodsList&goodsType=" + t.goodsType + "&pageSize=20&pageNum=" + t.pageNum + "&agent_necessity=0")
            }, t.salesDashboard = function (t) {
                return e.get("/s5/qt/sign_url?dispatch=goodsList&goodsType=" + t.goodsType + "&pageSize=20&pageNum=" + t.pageNum + "&floorPriceMax=" + t.floorPriceMax + "&monthOrderMin=" + t.monthOrderMin + "&quanValueMin=" + t.quanValueMin + "&tkRateMin=" + t.tkRateMin + "&sortType=" + t.sortType + "&agent_necessity=0")
            }, t.salesSwiper = function (t) {
                return e.get("/s5/yl_article/home_lunbo")
            }, t.saleDetail = function (t) {
                return e.get("/s5/qt/sign_url?dispatch=" + t.type + "&goodsTbId=" + t.goodsTbId + "&isOutsideGoods=" + t.isOutsideGoods + "&agent_necessity=1")
            }, t.saleTaoKouLing = function (t) {
                return e.get("/s5/qt/sign_url?dispatch=" + t.type + "&goodsTbId=" + t.goodsTbId + "&isOutsideGoods=" + t.isOutsideGoods + "&agent_necessity=2")
            }, t.fetchMine = function (t) {
                return e.get("/s5/qt/sign_url?dispatch=fetchMine&agent_necessity=2")
            }, t.saleOrder = function (t) {
                return e.get("/s5/qt/sign_url?dispatch=" + t.type + "&agent_necessity=2&pageSize=20&pageNum=" + t.pageNum)
            }, t.saleFindOrder = function (t) {
                return e.get("/s5/qt/sign_url?dispatch=matchOrder&orderNum=" + t + "&agent_necessity=2")
            }, t.saleSearch = function (t) {
                return e.get("/s5/qt/sign_url?dispatch=searchGoods&queryStr=" + t.queryStr + "&pageSize=100")
            }, t.saleShare = function (t) {
                return e.get("/s5/qt/goods_share_info?goodsTbId=" + t.goodsTbId + "&isOutsideGoods=" + t.isOutsideGoods)
            }, t.saleWithdrawStatus = function (t) {
                return e.get("/s5/qt/withdrawStatus")
            }, t.saleSaveWithdraw = function (t) {
                return e.get("/s5/qt/withdraw?amount=" + t)
            }, t.userMessage = function (t) {
                return e.get("/s5/message.list?limit=" + t.limit + "&offset=" + t.id + "&message_time=" + t.message_time)
            }, t.ApprenticeAll = function (t) {
                return e.get("/s5/shoutu.apprentice.list.3?valid=" + t.valid + "&offset=" + t.offset)
            }, t.newIncomeList = function (t) {
                return e.get("/s5/shoutu.income.list?offset=" + t.offset)
            }, t.SalesUserAccount = function (t) {
                return e.get("/s5/yl_article/my_account")
            }, t.SalesContentShare = function (t) {
                return e.get("/s5/yl_article/article_list?offset_id=" + t.offset_id + "&limit=" + t.limit)
            }, t.SalesShareDetail = function (t) {
                return e.get("/s5/yl_article/article_detail?article_id=" + t)
            }, t.SalesCallwx = function (t) {
                return e.get("/s5/yl_article/share_article?article_id=" + t)
            }, t.SalesGradeShare = function (t) {
                return e.get("/s5/yl_article/my_share_list?offset_id=" + t.offset_id + "&limit=" + t.limit)
            }
        }
    },
    function (t, e, n) {
        "use strict";
        var s = n(8),
            a = n.n(s),
            i = n(34),
            o = n.n(i),
            r = n(70),
            c = n.n(r),
            u = n(103),
            l = n.n(u),
            p = n(76),
            d = n(5),
            _ = n(146),
            f = (n.n(_), n(53)),
            v = (n.n(f), n(77)),
            h = n(4),
            m = n(151),
            g = n(3);
        l.a.defaults.baseURL = "/", l.a.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
        var b = l.a.create({
                baseURL: "/",
                timeout: 1e4
            }),
            k = function () {
                return new a.a(function (t) {
                    if (document.querySelector("[von-loading]")) return void setTimeout(function () {
                        $loading.hide(), setTimeout(function () {
                            t()
                        }, 600)
                    }, 300);
                    t()
                })
            },
            w = function (t) {
                if (n.i(g.a)()) {
                    var e = $storage.get(h.f);
                    (new Date).getTime() - e > 60 * t * 1e3 && n.i(g.f)()
                }
            },
            C = function (t) {
                var e = t["x-diablo-revision"],
                    n = document.documentElement.getAttribute("rev"),
                    s = $storage.get(h._11),
                    a = (new Date).getMinutes(),
                    i = -1 === location.search.indexOf("diablo_rev"),
                    o = !$cookie.get(h._12),
                    r = "http:" !== window.location.protocol;
                n !== e && s !== a && i && o && r && ($storage.set(h._11, a), location.reload())
            };
        b.interceptors.request.use(function (t) {
            return /^\/s4k\/(.+)$/.exec(t.url) ? (t.url = __ENV__.qk_endpoint + t.url, o.a.extend(t.headers, {
                "X-QK-DIS": p.a.get("DIS4")
            })) : (t.url = __ENV__.ws_endpoint + t.url, t.withCredentials = !0), t.headers["Content-Type"] || (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), "post" === t.method.toLowerCase() && t.data && "application/x-www-form-urlencoded" === t.headers["Content-Type"] && (t.data = c.a.stringify(t.data)), t
        }, function (t) {
            return a.a.reject("")
        }), b.interceptors.response.use(function (t) {
            C(t.headers), w(30);
            var e = t.data && t.data.messages,
                n = o.a.find(e, function (t) {
                    return 104 == t.type
                }),
                s = o.a.find(e, function (t) {
                    return 101 == t.type || 102 == t.type || 103 == t.type || 100 == t.type
                }),
                a = o.a.find(e, function (t) {
                    return 2 == t.type
                }),
                i = o.a.find(e, function (t) {
                    return o.a.indexOf([3, 4, 6, 7, 9, 10, 12, 13, 14, 15, 16, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 203, 204, 509, 510, 511, 512, 513, 700, 800, 900], t.type) > -1
                });
            return n ? void $assistant.kill() : (a && W(a.content), s && (100 == s.type || 103 == s.type ? $assistant.makePopup("invalid", s).then(function (t) {
                t.show()
            }) : 101 != s.type && 102 != s.type || $assistant.makePopup("upgrade", s).then(function (t) {
                t && t.show()
            })), i && (800 == i.type && E(i.id, i.title, i.content), [3, 4, 6, 7].indexOf(i.type) > -1 ? I(i) : 10 == i.type && q(i.content, i.id), 12 == i.type && I(i), 14 == i.type && B(i.reward, i.title, i.id), 9 == i.type && I(i), 509 == i.type && Y(i.content, i.id), 19 != i.type && 15 != i.type && 203 != i.type && 511 != i.type || j(i.content, i.id, i.type), [16, 204, 510, 512, 513].indexOf(i.type) > -1 && G(i.content, i.id, i.type), 13 == i.type && J(i.chip_num, i.obtain_type, i.jackpot), 20 == i.type && X(), 23 == i.type && v.a.show("探索奖励", i.content), 900 == i.type && L(i), 21 != i.type && 22 != i.type || U(i), 24 == i.type && O(i), 25 == i.type && R(i), 26 == i.type && N(i), 27 == i.type && D(i), 28 == i.type && F(i), 29 == i.type && tt(i)), t)
        }, function (t) {
            var e = t.response,
                n = t.config;
            if (e && C(e.headers), n.no_error_handler) return a.a.reject(t);
            if (e)
                if (400 == e.status) k().then(function () {
                    return $toast.show(e.data && e.data.err_msg || "错误的请求")
                });
                else if (401 == e.status) {
                    $loading.show("尚未登录，正在跳转..", 2e3);
                    setTimeout(function () {
                        location.href = "/v4"
                    }, 2500)
                } else if (402 == e.status) switch (e.data && e.data.err_code) {
                    case 40201:
                        location.href = "/v4/human";
                        break;
                    case 40202:
                        k().then(function () {
                            d.a.$emit(d.b.POPUP_BIND_ZHIMA)
                        })
                } else if (500 == e.status) k().then(function () {
                    return $toast.show("服务器内部错误")
                });
                else {
                    if (502 != e.status) throw k().then(function () {
                        return $toast.show("未知错误")
                    }), t;
                    k().then(function () {
                        return $toast.show("连接超时，请检查网络")
                    })
                } else k().then(function () {
                return $toast.show("连接超时，请检查网络")
            });
            return a.a.reject(t)
        });
        var y = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    buttons: [{
                        text: "知道了"
                    }]
                },
                template: function (t) {
                    return '\n      <div class="title">' + t.title + '</div>\n      <div class="desc">' + t.content + "</div>\n    "
                }
            },
            T = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    buttons: [{
                        text: "知道了"
                    }]
                },
                template: function (t, e) {
                    return '\n    <div class="title">' + t + '</div>\n    <div class="desc">\n      ' + e + "\n    </div>\n  "
                }
            },
            x = {
                options: {
                    effect: "scale",
                    cssClass: "popup-task-reward-new",
                    buttons: [{
                        text: "继续赚钱",
                        theme: "assertive"
                    }]
                },
                template: function (t) {
                    var e = t.amount || "0.0",
                        n = t.taskType || "试玩任务",
                        s = t.taskName || " ";
                    return '\n      <div class="tips">完成任务</div>\n      <div class="reward">\n        <div class="rmb">+</div>\n        <div class="amount">' + parseFloat(e) + '</div>\n        <div class="yuan">元</div>\n      </div>\n      <div class="task-info">\n        <div class="task-type">' + n + '</div>\n        <div class="line"></div>\n        <div class="task-name">' + s + "</div>\n      </div>\n    "
                }
            },
            S = {
                options: {
                    effect: "scale",
                    cssClass: "popup-credit-task-reward",
                    buttons: [{
                        text: "继续赚钱"
                    }]
                },
                template: function (t) {
                    return '\n      <img class="reward-img" src="//qianka.b0.upaiyun.com/images/dedeec7b5a5dddd10578194746faaf66.png">\n      <div class="reward">+<span class="font-44">' + t.credit_reward + '</span>元</div>\n      <div class="credit-info">\n        <div class="line"></div>\n        <div class="credit-type">信用卡任务</div>\n        <div class="credit-name">' + t.credit_name + "</div>\n      </div>\n    "
                }
            },
            $ = {
                options: {
                    effect: "scale",
                    cssClass: "popup-credit-task-reward",
                    buttons: [{
                        text: "继续赚钱"
                    }]
                },
                template: function (t) {
                    return '\n      <img class="reward-img" src="//qianka.b0.upaiyun.com/images/dedeec7b5a5dddd10578194746faaf66.png">\n      <div class="reward">+<span class="font-44">' + t.game_reward + '</span>元</div>\n      <div class="credit-info">\n        <div class="line"></div>\n        <div class="credit-type">游戏特权</div>\n        <div class="credit-name">' + t.game_name + "</div>\n      </div>\n    "
                }
            },
            A = {
                options: {
                    effect: "scale",
                    cssClass: "popup-task-reward",
                    buttons: [{
                        text: "知道了",
                        theme: "assertive"
                    }]
                },
                template: function (t) {
                    var e = t.amount || "0",
                        n = t.taskType || "高额任务",
                        s = t.taskName || " ";
                    return '\n      <img class="img-task-finished" src="//qianka.b0.upaiyun.com/images/416b9d3b792ea8a3484db8dc5a137299.png" alt="">\n      <scalable class="reward" height="62">\n        <span class="rmb">+</span>\n        <span class="amount">' + parseFloat(e) + '</span>\n        <span class="yuan">元</span>\n      </scalable>\n      <div class="task-info">\n        <div class="line"></div>\n        <div class="task-type">' + n + '</div>\n        <div class="task-name">' + s + "</div>\n      </div>\n    "
                }
            },
            P = {
                options: {
                    effect: "scale",
                    cssClass: "popup-task-reward",
                    buttons: [{
                        text: "继续赚钱",
                        theme: "assertive"
                    }]
                },
                template: function (t) {
                    var e = t.amount || "0",
                        n = t.taskType || "双倍任务",
                        s = t.taskName || " ";
                    return '\n      <img class="img-task-finished" src="//qianka.b0.upaiyun.com/images/416b9d3b792ea8a3484db8dc5a137299.png" alt="">\n      <scalable class="reward" height="62">\n        <span class="rmb">+</span>\n        <span class="amount">' + parseFloat(e) + '</span>\n        <span class="yuan">元</span>\n      </scalable>\n      <div class="task-info">\n        <div class="line"></div>\n        <div class="task-type">' + n + '</div>\n        <div class="task-name">' + s + "</div>\n      </div>\n    "
                }
            },
            E = function (t, e, n) {
                $popup.fromTemplate(y.template({
                    title: e,
                    content: n
                }), y.options).show().then(function () {
                    et.messageMarkRead(t)
                })
            },
            I = function (t) {
                var e = {
                    reward: t.reward,
                    content: t.content,
                    unit: t.unit,
                    exp_info: t.exp_info,
                    type: t.type
                };
                if (3 === t.type) {
                    var n = $storage.get(h.E);
                    if (n) {
                        var s = parseInt(((new Date).getTime() - n.split(":")[1]) / 1e3);
                        window._hmt && window._hmt.push(["_trackEvent", "任务", "试玩", "任务完成时长", s])
                    }
                }
                d.a.$emit(d.b.TASK_REWARD_POPUP, e)
            },
            L = function (t) {
                var e = {
                    exp_info: t.exp_info,
                    unit: t.unit
                };
                d.a.$emit(d.b.LEVEL_UPGRADE, e)
            },
            O = function (t) {
                $popup.fromTemplate(f.popup_invite_punch.template(t.content), f.popup_invite_punch.options).show().then(function (e) {
                    if (1 === e) {
                        var n = e ? 1 : 0,
                            s = t.inviter_uid,
                            a = t.invite_id,
                            i = t.id;
                        et.groupHadread({
                            msg_id: i
                        }), et.groupConfirmTeam({
                            accept: n,
                            inviter_uid: s,
                            invite_id: a
                        }).then(function (t) {
                            return t.data
                        }).then(function (t) {
                            0 === t.err_code ? "group" === $router.currentRoute.name ? window.location.reload() : $router.forward({
                                path: "/group",
                                query: {
                                    backroute: "/user/profile"
                                }
                            }) : $toast.show(t.messages)
                        })
                    } else {
                        var o = e ? 1 : 0,
                            r = t.inviter_uid,
                            c = t.invite_id,
                            u = t.id;
                        et.groupHadread({
                            msg_id: u
                        }), et.groupConfirmTeam({
                            accept: o,
                            inviter_uid: r,
                            invite_id: c
                        })
                    }
                })
            },
            R = function (t) {
                $popup.fromTemplate(f.popup_dissolve_punch.template(t.content), f.popup_dissolve_punch.options).show()
            },
            N = function () {
                $popup.fromTemplate(f.popup_upgrade_punch.template, f.popup_upgrade_punch.options).show()
            },
            D = function (t) {
                $popup.fromTemplate(f.popup_member_signout_punch.template(t.content), f.popup_member_signout_punch.options).show()
            },
            F = function (t) {
                var e = $popup.fromTemplate(f.popup_send_money_punch.template(t.content), f.popup_send_money_punch.options);
                e.show().then(function (t) {
                    0 === t && e.hide()
                })
            },
            M = {
                options: {
                    effect: "scale",
                    cssClass: "popup-task-reward",
                    buttons: [{
                        text: "立即抽奖",
                        theme: "assertive"
                    }]
                },
                template: function (t) {
                    return '\n      <img class="img-task-finished" src="//qianka.b0.upaiyun.com/images/847ecf716feef27167f4fd137ec49953.png" alt="">\n      <div class="task-info">\n        <div class="line"></div>\n        <div class="task-type">' + (t.taskType || "彩蛋任务") + '</div>\n        <div class="task-name">' + (t.taskName || " ") + "</div>\n      </div>\n    "
                }
            },
            U = function (t) {
                $popup.fromTemplate(T.template(t.title, t.content), T.options).show()
            },
            q = function (t, e) {
                $popup.fromTemplate(M.template({
                    taskType: "彩蛋任务",
                    taskName: t
                }), M.options).show().then(function () {
                    $router.back({
                        path: "/eggs/luckyDraw"
                    })
                })
            },
            B = function (t, e, n) {
                t = parseFloat(t), $popup.fromTemplate($.template({
                    game_reward: t,
                    game_name: e
                }), $.options).show().then(function () {
                    et.messageMarkRead(n)
                })
            },
            H = {
                options: {
                    effect: "scale",
                    cssClass: "popup-task-appeal",
                    buttons: [{
                        text: "知道了"
                    }]
                },
                template: function (t, e) {
                    return '\n      <div class="icon"><img src="//qianka.b0.upaiyun.com/images/30613d5771c0ec9a7651b8fdac41318b.png"></div>\n      <div class="title">' + (15 === e ? "比对成功" : "申诉成功") + '</div>\n      <div class="desc">' + t + "</div>\n    "
                }
            },
            z = {
                options: {
                    effect: "scale",
                    cssClass: "popup-task-appeal",
                    buttons: [{
                        text: "知道了"
                    }]
                },
                template: function (t, e) {
                    return '\n      <div class="icon"><img src="//qianka.b0.upaiyun.com/images/664f4b1c03150cbd2c664ad39bea62f1.png"></div>\n      <div class="title">' + (16 === e ? "比对失败" : "申诉失败") + '</div>\n      <div class="desc">' + t + "</div>\n    "
                }
            },
            j = function (t, e, n) {
                $popup.fromTemplate(H.template(t, n), H.options).show().then(function () {
                    et.messageMarkRead(e)
                })
            },
            G = function (t, e, n) {
                $popup.fromTemplate(z.template(t, n), z.options).show().then(function () {
                    et.messageMarkRead(e)
                })
            },
            K = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    buttons: [{
                        text: "忽略"
                    }, {
                        text: "申诉"
                    }]
                },
                template: function (t) {
                    return '\n      <div class="title">任务失败</div>\n      <div class="desc">' + t + "</div>\n    "
                }
            },
            Y = function (t, e) {
                $popup.fromTemplate(K.template(t), K.options).show().then(function (t) {
                    et.messageMarkRead(e), 1 === t && $router.forward({
                        path: "/help/complainHitask"
                    })
                })
            },
            V = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    buttons: [{
                        text: "知道了"
                    }]
                },
                template: function (t) {
                    return '\n      <div class="title">任务失败</div>\n      <div class="desc">' + t + "</div>\n    "
                }
            },
            W = function (t) {
                $popup.fromTemplate(V.template(t), V.options).show().then(function (t) {
                    var e = $router.currentRoute.name;
                    "task_detail" !== e && "easy_detail" !== e || $router.back("/tasks"), "task_detail_lite" === e && $router.back("/tasks/lite")
                })
            },
            Z = {
                options: {
                    effect: "scale",
                    cssClass: "popup-lotterty-get-bets",
                    showClose: !0,
                    buttons: [{
                        text: "立即下注"
                    }]
                },
                template: function (t, e, n) {
                    return '\n    <img src="//qianka.b0.upaiyun.com/images/75a23586831381dbbe81069826ba1181.png" alt="">\n    <div class="win-info">\n       <div class="win-money">\n        +  <span class="font-big">' + t + '</span> 筹码\n       </div>\n       <div class="win-desc">\n        <div class="line"></div>\n        <div class="win-tag">下期奖池</div>\n        <div class="win-price"><span class="add-symbol">+</span> <span class="price-color">' + n + '元</span></div>\n       </div>\n       <div class="win-desc">\n        <div class="line"></div>\n        <div class="win-tag">奖励来源</div>\n        <div class="win-price"><span class="price-color">' + ["高额任务", "收徒1人", "收徒3人", "提现30元", "提现50元", "提现100元", "提现100元", "完成4个试玩任务", "信用卡任务"][e - 1] + "</span></div>\n       </div>\n    </div>\n  "
                }
            },
            J = function (t, e, n) {
                $popup.fromTemplate(Z.template(t, e, n), Z.options).show().then(function (t) {
                    0 == t && $router.back("/lottery/betting")
                })
            },
            X = function () {
                $popup.fromTemplate(_.popup_national_event.template, _.popup_national_event.options).show().then(function (t) {
                    0 == t && $router.forward("/apprentice")
                })
            },
            Q = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    buttons: [{
                        text: "知道了"
                    }]
                },
                template: function (t) {
                    return '\n      <div class="desc">' + t.content + "</div>\n    "
                }
            },
            tt = function (t) {
                $popup.fromTemplate(Q.template(t), Q.options).show()
            },
            et = {};
        et.popup_task_reward = x, et.popupEggTaskAlert = M, et.popup_credit_reward = S, b.popup_game_reward = $, et.popup_gaoe_reward = A, et.popup_gaoe_fail = K, et.popup_double_reward = P, et.popup_lotterty_get_bets = Z, et.dashboard = function () {
            return b.get("/s4/dashboard", {
                keep_cache: 0
            })
        }, et.giftSend = function (t) {
            return b.get("/s4/gift.send?master_id=" + t)
        }, et.newGiftSend = function (t) {
            return b.get("/s4/gift.newYear2018?master_id=" + t)
        }, et.investigationSubmit = function (t) {
            return b.post("/s4/investigation.submit", t)
        }, et.createUser = function () {
            return b.get("/s4/create_user")
        }, et.loginSendCode = function (t) {
            return b.post("/s4/login.sendCode", t)
        }, et.loginByPhone = function (t) {
            return b.post("/s4/login.mobile", t)
        }, et.matchUser = function () {
            return b.get("/s4/match_user")
        }, et.subtaskInit = function () {
            return b.get("/s4k/subtask.init", {
                headers: {
                    "X-QK-DIS": p.a.get("DIS4")
                },
                keep_cache: 0
            })
        }, et.subtaskList = function (t) {
            var e = $storage.get(h.w) || void 0;
            return b.get("/s4k/subtask.list", {
                headers: {
                    "X-QK-DIS": p.a.get("DIS4")
                },
                keep_cache: 0,
                no_error_handler: t,
                timeout: e && (new Date).getTime() - e.timestamp < 6e5 ? 5e3 : 1e4
            })
        }, et.subtaskStart = function (t, e) {
            return e || (e = 0), b.get("/s4k/subtask.start", {
                params: {
                    task_id: t,
                    quality: e
                },
                keep_cache: 0,
                no_error_handler: !0
            })
        }, et.subtaskDetail = function (t) {
            return b.get("/s4/subtask.detail", {
                params: {
                    task_id: t
                },
                keep_cache: 0
            })
        }, et.subtaskCheckIDFA = function (t) {
            return b.get("/s4/auto_subtask.check_idfa", {
                params: {
                    task_id: t
                },
                keep_cache: 0
            })
        }, et.subtaskGiveup = function (t) {
            return b.get("/s4/subtask.giveup", {
                params: {
                    task_id: t
                },
                keep_cache: 0
            })
        }, et.subtaskOpenApp = function (t) {
            return b.post("/s4k/subtask.qkopenapp", t)
        }, et.subtaskState = function (t) {
            return b.get("/s4k/subtask.state?task_id=" + t)
        }, et.subtaskListNewbie = function () {
            return b.get("/s4/subtask.list.newbie")
        }, et.assistantInfo = function () {
            return b.get("/s4/assistant.info")
        }, et.withdrawList = function () {
            return b.get("/s4/users.withdraw.list")
        }, et.withdrawSendCode = function () {
            return b.post("/s4/withdraw.sendCode")
        }, et.withdrawApplyListAll = function () {
            return b.get("/s4/withdraw.apply.list.all")
        }, et.cancelWithdraw = function (t) {
            return b.get("/s4/withdraw.apply.cancel?id=" + t)
        }, et.withdrawApplyList = function (t, e, n) {
            return b.get("/s4/withdraw.apply.list", {
                keep_cache: 0,
                params: {
                    type: t,
                    offset: e,
                    limit: n
                }
            })
        }, et.withdrawToMobile = function (t) {
            return b.post("/s4/users.withdraw.mobile", t)
        }, et.withdrawToWechat = function (t) {
            return b.post("/s4/users.withdraw.wxpay", t)
        }, et.withdrawToAlipay = function (t) {
            return b.post("/s4/users.withdraw.alipay", t)
        }, et.zstasks = function () {
            return b.get("/s4/zstask.list", {
                keep_cache: 500
            })
        }, et.zstaskDetail = function (t) {
            return b.get("/s4/zstask.detail", {
                keep_cache: 500,
                params: {
                    zs_task_id: t
                }
            })
        }, et.zstaskCheckState = function (t) {
            return b.get("/s4/zstask.checkState", {
                keep_cache: 0,
                params: {
                    zs_task_id: t
                }
            })
        }, et.zstaskStart = function (t) {
            return b.post("/s4/zstask.start", {
                zs_task_id: t
            })
        }, et.zstaskGiveup = function (t) {
            return b.post("/s4/zstask.giveup", {
                zs_task_id: t
            })
        }, et.user = et.userProfile = function () {
            return b.get("/s4/users.profiles.getInfo", {
                keep_cache: 500
            })
        }, et.bindMobileCheckHidden = function (t) {
            return b.post("/s4/bindMobile.checkHidden", t)
        }, et.setUserProfile = function (t) {
            return b.post("/s4/users.profiles.setInfo", t)
        }, et.setUserImage = function (t) {
            return b.post("/s4/users.profiles.setImage", t)
        }, et.setUserNickname = function (t) {
            return b.post("/s4/users.profiles.setNickname", t)
        }, et.bindWechat = function (t) {
            return b.post("/s4/users.profiles.wxBind", {
                code: t
            })
        }, et.unbindWechat = function () {
            return b.post("/s4/users.profiles.wxUnbind")
        }, et.logout = function () {
            return b.get("/s4/users.logout")
        }, et.bindMobileSendCode = function (t) {
            return b.post("/s4/bindMobile.sendCode", t)
        }, et.bindMobile = function (t) {
            return b.post("/s4/bindMobile", t)
        }, et.occupyMobile = function (t) {
            return b.post("/s4/bindMobile.occupied", t)
        }, et.accountDetail = function (t) {
            return b.get("/s4/users.accounts.getDetail", {
                keep_cache: 0,
                params: t
            })
        }, et.withdrawWechatActive = function () {
            return b.get("/s4/users.withdraw.wxactive")
        }, et.complainSubtask = function (t) {
            return b.post("/s4/help.complain.subtask", t)
        }, et.complainRechargeTask = function (t) {
            return b.post("/s4/recharge.complain", t)
        }, et.complainSubtaskDateFilter = function (t) {
            return b.get("/s4/help.complain.subtask.dateFilter", {
                keep_cache: 0,
                params: t
            })
        }, et.highearnComplain = function (t) {
            return b.post("/s4/highearn.complain", t)
        }, et.accountStatus = function () {
            return b.get("/s4/help.account.status")
        }, et.unfreezeComplain = function (t) {
            return b.post("/s4/help.unfreeze.apply", t)
        }, et.unfreezeSendCode = function (t) {
            return b.post("/s4/help.unfreeze.sendCode", t)
        }, et.highearnDateFilterTask = function (t) {
            return b.get("/s4/others.complain.dateFilterHitask", {
                keep_cache: 0,
                params: t
            })
        }, et.welcome = function (t) {
            return b.get("/s4/welcome.data?aversion=" + t)
        }, et.couponDouble = function () {
            return b.get("/s4/user.coupon.double")
        }, et.useCoupon = function (t) {
            return b.post("/s4/subtask.withCoupon", {
                task_id: t
            })
        }, et.messageMarkRead = function (t) {
            return b.get("/s4/users.messages.read?msg_id=" + t)
        }, et.eggsDetail = function () {
            return b.get("/s4k/task.eggs.detail")
        }, et.eggsStart = function () {
            return b.get("/s4k/task.eggs.start")
        }, et.eggsGiveup = function (t) {
            return b.get("/s4/task.eggs.giveup", {
                params: {
                    task_id: t
                },
                keep_cache: 0
            })
        }, et.luckyDrawAwardees = function (t) {
            return b.get("/s4/task.eggs.history")
        }, et.luckyDrawReward = function (t) {
            return b.get("/s4/task.eggs.reward")
        }, et.tasksProgress = function () {
            return b.get("/s4/highearn.tasksProgress")
        }, et.aliveGaoeList = function () {
            return b.get("/s4k/highearn.list")
        }, et.GaoeList = function () {
            return b.get("/s4/highearn.list")
        }, et.compareGaoeStart = function (t) {
            return b.get("/s4k/highearn.taskStart?task_id=" + t)
        }, et.gaoeStart = function (t) {
            return b.get("/s4/highearn.taskStart?task_id=" + t)
        }, et.gaoeGiveup = function (t) {
            return b.get("/s4/highearn.taskGiveup?task_id=" + t)
        }, et.gaoeCompanyIntro = function (t) {
            return b.get("/s4/highearn.company.intro", {
                params: {
                    task_id: t
                }
            })
        }, et.gaoeDetail = function (t) {
            return b.get("/s4/highearn.detail", {
                params: {
                    task_id: t
                }
            })
        }, et.highearnSendIDFA = function (t) {
            return b.post("/s4k/highearn.sendIDFA", {
                task_id: t
            })
        }, et.hiearnCallbackReward = function (t) {
            return b.post("/s4/highearn.callbackReward", t)
        }, et.hiearnRechargeApply = function (t) {
            return b.post("/s4/highearn.rechargeApplyForReward", t)
        }, et.highearnDetailSendCode = function (t) {
            return b.post("/s4/highearn.sendCode", t)
        }, et.hiearnApplyForReward = function (t) {
            return b.post("/s4/highearn.applyForReward", t)
        }, et.shoutuDashboard = function () {
            return b.get("/s4/shoutu.dashboard")
        }, et.apprenticeListAll = function (t) {
            var e = "limit=" + t;
            return b.get("/s4/shoutu.apprenticeList.all?" + e, {
                keep_cache: 0
            })
        }, et.apprenticeIncome = function () {
            return b.get("/s4/shoutu.incomeDaily")
        }, et.apprenticeList = function (t, e, n) {
            var s = "apprentice_type=" + t;
            return n && (s += "&offset=" + n), s += "&limit=" + e, b.get("/s4/shoutu.apprenticeList?" + s, {
                keep_cache: 0
            })
        }, et.getApprenticeRanking = function (t) {
            return b.get("/s4/shoutu.topList?top_type=" + t, {
                keep_cache: 0
            })
        }, et.getAllRankings = function () {
            return b.get("/s4/shoutu.topList.all", {
                keep_cache: 0
            })
        }, et.shoutuUserInfo = function (t) {
            return b.get("/s4/shoutu.userInfo", {
                params: {
                    user_id: t
                },
                keep_cache: 0
            })
        }, et.shoutuMy = function (t) {
            return b.get("/s4/shoutu.my", {
                keep_cache: 0
            })
        }, et.installAppList = function (t) {
            var e = t.parent_id,
                n = t.category_id,
                s = t.last_id,
                a = t.limit;
            return b.get("/s4/install.appList", {
                params: {
                    parent_id: e,
                    category_id: n,
                    last_id: s,
                    limit: a
                },
                keep_cache: 0
            })
        }, et.installDownloadRecord = function (t) {
            var e = t.app_id,
                n = t.ct;
            return b.get("/s4/install.download", {
                params: {
                    app_id: e,
                    ct: n
                },
                keep_cache: 0
            })
        }, et.creditList = function () {
            return b.get("/s4/credit.taskList")
        }, et.creditTaskDetail = function (t) {
            return b.get("/s4/credit.taskDetail", {
                params: {
                    task_id: t
                },
                keep_cache: 0
            })
        }, et.lotteryChipAvailable = function (t) {
            return b.get("/s4/lottery.chipAvailable?offset=" + t, {
                keep_cache: 0
            })
        }, et.lotteryChipUsed = function (t) {
            return b.get("/s4/lottery.chipUsed?offset=" + t, {
                keep_cache: 0
            })
        }, et.creditCardHasApply = function (t) {
            return b.post("/s4/credit.isApply", t)
        }, et.creditCardApplyReward = function (t) {
            return b.post("/s4/credit.applyReward", t)
        }, et.lotteryChipExpired = function (t) {
            return b.get("/s4/lottery.chipExpired?offset=" + t, {
                keep_cache: 0
            })
        }, et.lotteryChipAll = function () {
            return b.get("/s4/lottery.chipAll", {
                keep_cache: 0
            })
        }, et.lotteryDashboard = function () {
            return b.get("/s4/lottery.dashboard")
        }, et.lotteryDashboardHistory = function (t) {
            return b.get("/s4/lottery.history", {
                params: {
                    offset: t
                },
                keep_cache: 0
            })
        }, et.lotteryGetChips = function (t) {
            return b.get("/s4/lottery.today")
        }, et.lotteryGamingTable = function () {
            return b.get("/s4/lottery.game", {
                keep_cache: 0
            })
        }, et.lotteryBet = function (t) {
            return b.post("/s4/lottery.bet", t, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
        }, et.lotteryGetReward = function (t) {
            return b.post("/s4/lottery.getReward", {
                lottery_id: t
            })
        }, et.rebateDashboard = function () {
            return b.get("/s4/rebate.dashboard")
        }, et.jifenbaoUserOrderAll = function () {
            return b.get("/s4/rebate.userOrderAll", {
                keep_cache: 0
            })
        }, et.jifenbaoUserOrder = function (t, e) {
            return b.get("/s4/rebate.userOrder", {
                params: {
                    id: e,
                    type: t
                },
                keep_cache: 0
            })
        }, et.jifenbaoComplainSubmit = function (t) {
            return b.post("/s4/rebate.complain", {
                order_sn: t
            })
        }, et.jifenbaoWithdraw = function () {
            return b.get("/s4/rebate.convert.index", {
                keep_cache: 0
            })
        }, et.withdrawJfb = function (t) {
            return b.post("/s4/rebate.convert.jfb", t)
        }, et.subtaskListLite = function (t) {
            var e = $storage.get(h.w) || void 0;
            return b.get("/s4/lite.subtask.list", {
                keep_cache: 0,
                no_error_handler: t,
                timeout: e && (new Date).getTime() - e.timestamp < 6e5 ? 5e3 : 1e4
            })
        }, et.subtaskStartLite = function (t, e, n) {
            e || (e = 0);
            var s = {
                task_id: t,
                quality: e
            };
            return n && ("string" == typeof n ? s.silent_check_data = n : 1 === n.trouble ? s.trouble = 1 : (s.session = n.sessionId, s.token = window.NVC_Opt.token, s.sig = n.sig)), b.get("/s4/lite.subtask.start", {
                params: s,
                keep_cache: 0,
                no_error_handler: !0
            })
        }, et.subtaskDetailLite = function (t) {
            return b.get("/s4/lite.subtask.detail", {
                params: {
                    task_id: t
                },
                keep_cache: 0
            })
        }, et.liteOpenStatus = function (t, e) {
            return b.get("/s4/lite.open.status", {
                params: {
                    task_id: t,
                    task_type: e
                },
                keep_cache: 0
            })
        }, et.liteCheckStatus = function (t) {
            return b.get("/s4/lite.subtask.checkState", {
                params: {
                    task_id: t
                },
                keep_cache: 0
            })
        }, et.subtaskGiveup = function (t) {
            return b.get("/s4/lite.subtask.giveup", {
                params: {
                    task_id: t
                },
                keep_cache: 0
            })
        }, et.liteZstasks = function () {
            return b.get("/s4/lite.zstask.list", {
                keep_cache: 500
            })
        }, et.liteZstaskDetail = function (t) {
            return b.get("/s4/lite.zstask.detail", {
                keep_cache: 500,
                params: {
                    zs_task_id: t
                }
            })
        }, et.liteZstaskCheckState = function (t) {
            return b.get("/s4/lite.zstask.checkState", {
                keep_cache: 0,
                params: {
                    zs_task_id: t
                }
            })
        }, et.liteZstaskStart = function (t) {
            return b.post("/s4/lite.zstask.start", {
                zs_task_id: t
            })
        }, et.ufilterSubtaskStartLite = function (t, e) {
            return e || (e = 0), b.get("/s4/ufilter.subtask.start", {
                params: {
                    task_id: t,
                    quality: e
                },
                keep_cache: 0,
                no_error_handler: !0
            })
        }, et.ufilterSubtaskDetailLite = function (t) {
            return b.get("/s4/ufilter.subtask.detail", {
                params: {
                    task_id: t
                },
                keep_cache: 0
            })
        }, et.ufilterSubtaskGiveup = function (t) {
            return b.get("/s4/ufilter.subtask.giveup", {
                params: {
                    task_id: t
                },
                keep_cache: 0
            })
        }, et.ufilterOpenStatus = function (t, e) {
            return b.get("/s4/ufilter.open.status", {
                params: {
                    task_id: t,
                    task_type: e
                },
                keep_cache: 0
            })
        }, et.ufilterCheckStatus = function (t) {
            return b.get("/s4/ufilter.subtask.checkState", {
                params: {
                    task_id: t
                },
                keep_cache: 0
            })
        }, et.bonusTaskStart = function () {
            return b.get("/s5/bonus.task.start", {
                keep_cache: 0
            })
        }, et.bonusTaskDetail = function (t) {
            return b.get("/s5/bonus.task.detail", {
                params: {
                    task_id: t
                },
                keep_cache: 0
            })
        }, et.bonusTaskGiveup = function (t) {
            return b.get("/s5/bonus.task.giveup", {
                params: {
                    task_id: t
                },
                keep_cache: 0
            })
        }, et.bonusOpenStatus = function (t, e) {
            return b.get("/s5/bonus.task.status", {
                params: {
                    task_id: t,
                    task_type: e
                },
                keep_cache: 0
            })
        }, et.bonusCheckStatus = function (t) {
            return b.get("/s5/bonus.task.complete", {
                params: {
                    task_id: t
                },
                keep_cache: 0
            })
        }, et.bonusFlip = function (t) {
            return b.get("/s5/bonus.task.reward", {
                params: {
                    task_id: t
                },
                keep_cache: 0
            })
        }, et.survery = function (t) {
            return b.post("/s4/question.addQuestion", t)
        }, et.getAppDetail = function (t) {
            return b.get("/s4/install.appDetail", {
                params: {
                    app_id: t
                },
                keep_cache: 0
            })
        }, et.getAppIndex = function () {
            return b.get("/s4/install.index")
        }, et.getAppCategoryList = function () {
            return b.get("/s4/install.categoryList")
        }, et.borrow = function (t) {
            return b.post("/s4/apply", t)
        }, et.hasBorrow = function () {
            return b.get("/s4/everBorrowed", {
                keep_cache: 0,
                params: {
                    t: (new Date).getTime()
                }
            })
        }, et.borrowSendCode = function (t) {
            return b.post("/s4/borrow.sendCode", t)
        }, et.simpletaskStart = function (t) {
            return b.get("/s4k/simpletask.start", {
                keep_cache: 0,
                params: {
                    task_id: t
                }
            })
        }, et.simpletaskDetail = function (t) {
            return b.get("/s4/simpletask.detail", {
                keep_cache: 0,
                params: {
                    task_id: t
                }
            })
        }, et.simpletaskState = function (t) {
            return b.get("/s4k/simpletask.state", {
                keep_cache: 0,
                params: {
                    task_id: t
                }
            })
        }, et.simpletaskGiveup = function (t) {
            return b.get("/s4/simpletask.giveup", {
                keep_cache: 0,
                params: {
                    task_id: t
                }
            })
        }, et.loanList = function (t, e, n) {
            return b.get("/s4/loan.list?filter_amount=" + t + "&filter_time=" + e + "&filter_tag=" + n)
        }, et.getLoanDetail = function (t) {
            return b.get("/s4/loan.detail?id=" + t, {
                keep_cache: 500
            })
        }, et.addAction = function (t) {
            return b.post("/s5/user.action", {
                action_id: t
            })
        }, et.humanCheckAction = function (t) {
            return b.post("/s5/user.action", {
                action_id: 111,
                ext1: t
            })
        }, et.fingerprintAction = function (t, e) {
            return b.post("/s5/user.action", {
                action_id: 120,
                ext4: t
            })
        }, et.queryReadList = function (t) {
            var e = {};
            return t && (e.channel_id = t), b.get("/s5/reading.list", {
                keep_cache: 0,
                params: e
            })
        }, et.postReadAction = function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 94;
            return b.post("/s5/user.action", {
                action_id: t
            })
        }, et.prefetchReading = function (t) {
            return b.get("/s5/reading.prefetch", {
                channel_id: t
            })
        }, et.uxTesting = function (t) {
            return b.get("/s4/ux_testing.is_in", {
                test_name: t
            })
        }, n.i(m.a)(et, b), o.a.extend(b, et), e.a = b
    },
    function (t, e, n) {
        "use strict";
        var s = n(8),
            a = n.n(s),
            i = n(346),
            o = (n.n(i), n(70)),
            r = n.n(o),
            c = n(34),
            u = n.n(c),
            l = n(103),
            p = n.n(l),
            d = n(4),
            _ = n(5),
            f = n(3),
            v = n(12),
            h = n(154),
            m = (n.n(h), p.a.create({
                baseURL: "/",
                timeout: 1e4
            })),
            g = function (t) {
                (t = decodeURIComponent(t).match(/:\/\/(\S*)\?t=/)[1].match(/:\/\/(\S*)/)) && (t = t[1], n.i(v.b)([t]))
            };
        m.interceptors.request.use(function (t) {
            return t.url = __ENV__.qk_endpoint + t.url, "post" == t.method.toLowerCase() && t.data && (t.data = r.a.stringify(t.data)), t
        }, function (t) {
            return a.a.reject(t)
        }), m.interceptors.response.use(function (t) {
            return t
        }, function (t) {
            var e = t.response;
            return e && 404 === e.status && $toast.show("服务不可用"), a.a.reject(t)
        });
        var b = function () {
                return m.get("keyServices/assistant.getInfo", {
                    timeout: 1e3
                }).then(function (t) {
                    return t.data && t.data.payload
                }).then(function (t) {
                    return t.scheme_qk && $storage.set(d.I, $cookie.get(d.J)), {
                        data: {
                            payload: t
                        }
                    }
                })
            },
            k = function () {
                return $api.get("/s4k/key.start", {
                    timeout: 1e3
                })
            },
            w = function (t, e) {
                var n = e || __ENV__.qk_scheme,
                    s = "";
                u.a.each(t, function (t, e) {
                    s ? s += "&" + e + "=" + encodeURIComponent(t) : s = e + "=" + encodeURIComponent(t)
                }), location.href = n + "share?" + s
            },
            C = [],
            y = function t() {
                C.splice(0, 1), b().then(function () {
                    location.reload()
                }).catch(function (e) {
                    C.push(setTimeout(t, 1e3))
                })
            },
            T = function () {
                C.length > 0 || (C.push(0), y())
            },
            x = function () {
                for (; C.length > 0;) clearTimeout(C.pop())
            },
            S = function () {
                return m.get("keyServices/updateState.once").catch(function (t) {})
            },
            $ = function () {
                return m.get("/keyServices/notification.enabled").catch(function (t) {})
            },
            A = function (t) {
                return m.get("keyServices/app.getInfo?bundle_id=" + t).catch(function (t) {})
            },
            P = function (t) {
                return m.get("keyServices/open.app", {
                    params: t
                }).catch(function (t) {})
            },
            E = function (t) {
                return m.get("/keyServices/amazingWXShare", {
                    params: t
                }).catch(function (t) {})
            },
            I = function (t) {
                return m.get("keyServices/open.app.11", {
                    params: t
                }).catch(function (t) {})
            },
            L = function () {
                return m.get("keyServices/kill.me")
            },
            O = function (t, e) {
                return new a.a(function (e) {
                    var s = void 0,
                        a = void 0,
                        i = void 0;
                    switch (t) {
                        case "upgrade":
                            $api.assistantInfo().then(function (t) {
                                return t.data && t.data.payload
                            }).then(function (t) {
                                $storage.get(d._13) !== t.release_version && (a = t.app_type, i = t.download_url, n.i(f.a)() && g(i), s = $popup.fromTemplate(n.i(f.a)() ? '\n                <div class="icon-new icon-download"></div>\n                <p class="title" style="font-size: 16px">您的助手有更新</p>\n              ' : h.popup_upgrade_assistant.template, {
                                    effect: "scale",
                                    cssClass: "popup-upgrade-assistant",
                                    showClose: !0,
                                    keep: !0,
                                    closeCallback: function () {
                                        $storage.set(d._13, t.release_version)
                                    }, buttons: n.i(f.a)() ? [{
                                        text: "立即更新",
                                        theme: "assertive",
                                        onClick: function (t) {
                                            3 === a ? (_.a.$emit(_.b.ASSISTANT_POPUP), location.href = i) : location.href = n.i(f.e)(i, {
                                                return_url: location.href
                                            })
                                        }
                                    }] : [{
                                        text: "立即更新",
                                        theme: "assertive",
                                        onClick: function (t) {
                                            3 === a ? (_.a.$emit(_.b.ASSISTANT_POPUP), location.href = i) : location.href = n.i(f.e)(i, {
                                                return_url: location.href
                                            })
                                        }
                                    }, {
                                        text: "打开助手",
                                        onClick: function (e) {
                                            var n = t.app_scheme;
                                            n && (location.href = n + "openURL?type=outside&url=" + encodeURIComponent(location.href))
                                        }
                                    }]
                                }), e(s))
                            });
                            break;
                        case "invalid":
                            $api.assistantInfo().then(function (t) {
                                return t.data && t.data.payload
                            }).then(function (t) {
                                i = t.download_url, a = t.app_type, n.i(f.a)() && g(i), s = $popup.fromTemplate(h.popup_invalid_assistant.template, {
                                    effect: "scale",
                                    cssClass: "popup-invalid-assistant",
                                    keep: !0,
                                    buttons: [{
                                        text: "下载新助手",
                                        theme: "assertive",
                                        onClick: function (t) {
                                            3 === a ? (_.a.$emit(_.b.ASSISTANT_POPUP), location.href = i) : location.href = n.i(f.e)(i, {
                                                return_url: location.href
                                            })
                                        }
                                    }]
                                }), e(s)
                            });
                            break;
                        default:
                            return p.a.get("/s4/assistant.info").then(function (t) {
                                return t.data && t.data.payload
                            }).then(function (t) {
                                var n = t.download_url,
                                    s = t.app_scheme,
                                    a = t.app_status,
                                    i = 1 == a ? h.popup_open_assistant.template(n) : h.popup_invalid_assistant.template,
                                    o = 1 == a ? h.popup_open_assistant.options(s) : h.popup_invalid_assistant.makeOptions(n),
                                    r = $popup.fromTemplate(i, o);
                                e(r), T()
                            })
                    }
                })
            },
            R = function () {
                p.a.get("/s4/assistant.info").then(function (t) {
                    return t.data && t.data.payload
                }).then(function (t) {
                    var e = t.download_url,
                        n = t.app_scheme;
                    $popup.fromTemplate(h.popup_open_assistant.template(e), h.popup_open_assistant.options(n)).show()
                })
            };
        u.a.extend(m, {
            alive: b,
            poll: T,
            cancelPoll: x,
            updateState: S,
            getAppInfo: A,
            openApp: P,
            amazingWXShare: E,
            openAppIOS11: I,
            kill: L,
            isPushEnabled: $,
            makePopup: O,
            share: w,
            showOpenAssistantPopup: R,
            uploadAssistantKey: k
        }), e.a = m
    },
    function (t, e) {
        var n = {
                options: function (t) {
                    return {
                        effect: "scale",
                        cssClass: "popup-open-assistant",
                        showClose: !0,
                        closeCallback: function () {
                            var t = window.$router;
                            "tasks" === t.currentRoute.name && t.back("/dashboard")
                        }, keep: !0,
                        buttons: [{
                            text: "开启助手",
                            theme: "assertive",
                            onClick: function (e) {
                                location.href = t + "openURL?type=outside&url=" + encodeURIComponent(location.href)
                            }
                        }]
                    }
                }, template: function (t) {
                    return '\n      <div class="icon icon-off"></div>\n      <p class="title">您的助手未开启</p>\n      <p class="tips">\n        如遇到问题请 <a class="link" href="' + t + '">重新下载</a>\n      </p>\n    '
                }
            },
            s = {
                options: {
                    effect: "scale",
                    cssClass: "popup-upgrade-assistant",
                    showClose: !0,
                    buttons: [{
                        text: "立即更新",
                        theme: "assertive"
                    }, {
                        text: "打开助手"
                    }]
                },
                template: '\n    <div class="icon-new icon-download"></div>\n    <p class="title" style="font-size: 16px">您的助手有更新</p>\n    <div class="sub-title">暂不更新</div>\n  '
            },
            a = {
                options: {
                    effect: "scale",
                    cssClass: "popup-invalid-assistant",
                    showClose: !0,
                    buttons: [{
                        text: "下载新助手",
                        theme: "assertive"
                    }]
                },
                makeOptions: function (t) {
                    return {
                        effect: "scale",
                        cssClass: "popup-invalid-assistant",
                        keep: !0,
                        buttons: [{
                            text: "下载新助手",
                            theme: "assertive",
                            onClick: function (e) {
                                location.href = t
                            }
                        }]
                    }
                }, template: '\n    <div class="icon-new icon-invalid"></div>\n    <p class="title">您的助手已失效</p>\n  '
            },
            i = {
                template: function (t, e) {
                    var n = "";
                    return "tasks" == e && (n = "开始试玩前需要激活助手"), "apprentice" == e && (n = "需要激活助手才能进行分享"), '\n      <div class="icon icon-off"></div>\n      <p class="title">' + n + '</p>\n      <p class="tips">\n        如遇到问题请 <a class="link" href="' + t + '">重新下载并回本页面激活</a>\n      </p>\n    '
                }
            },
            o = {
                template: function () {
                    return '\n      <div class="icon icon-invalid"></div>\n      <p class="title">您的助手已失效</p>\n      <p class="title">下载新助手后请<span class="assertive">回本页面激活</span></p>\n    '
                }
            },
            r = {
                template: function (t, e) {
                    return '\n      <img class="app-icon" src="' + t + '" alt="">\n      <p class="app-name">' + e + '</p>\n      <p class="tips">\n        这是您的任务助手，做任务期间必须<br>开启哦，<span class="assertive">下载后需通过本页面激活</span>\n      </p>\n    '
                }
            };
        t.exports = {
            popup_open_assistant: n,
            popup_upgrade_assistant: s,
            popup_invalid_assistant: a,
            popup_open_assistant_lite: i,
            popup_invalid_assistant_lite: o,
            popup_install_or_launch_assistant: r
        }
    },
    function (t, e, n) {
        "use strict";
        var s = n(16),
            a = n.n(s),
            i = new a.a;
        e.a = i
    },
    function (t, e, n) {
        "use strict";
        var s = n(8),
            a = n.n(s),
            i = n(298),
            o = n.n(i),
            r = n(299),
            c = n.n(r),
            u = n(16),
            l = n.n(u),
            p = n(511),
            d = n.n(p),
            _ = function (t, e) {
                for (var n in e) t[n] = e[n];
                return t
            },
            f = function () {
                function t() {
                    o()(this, t), this._vm = void 0
                }
                return c()(t, [{
                    key: "fromTemplateUrl",
                    value: function (t, e) {
                        var n = this;
                        return new a.a(function (s, a) {
                            axios.get(t).then(function (t) {
                                return t.data
                            }).then(function (t) {
                                s(n.fromTemplate(t, e))
                            })
                        })
                    }
                }, {
                    key: "fromTemplate",
                    value: function (t, e) {
                        return this._init(t, e)
                    }
                }, {
                    key: "_init",
                    value: function (t, e) {
                        var n = e && e.refId ? e.refId : Math.random().toString(36).substr(3, 6),
                            s = e && e.effect ? e.effect : "scale",
                            a = e && e.title ? e.title : "",
                            i = e && e.buttons ? e.buttons : [],
                            o = e && e.cssClass ? e.cssClass : "",
                            r = e && e.showClose ? "true" : "false",
                            c = e && e.btnLengthways ? "true" : "false",
                            u = e && e.obvious > -1 ? e.obvious : -1,
                            p = e && e.keep ? "true" : "false";
                        window.__popup_close_callback__ = e && e.closeCallback;
                        var f = e && e.components ? e.components : {};
                        this._vm && (this._vm.$destroy(), this._vm = void 0);
                        var v = document.querySelector("[von-popups]");
                        v || (v = document.createElement("div"), v.setAttribute("von-popups", ""), document.querySelector("[von-app]").appendChild(v)), v.innerHTML = '<popup obvious="' + u + '" btn-lengthways="' + c + '" keep="' + p + '" show-close="' + r + '" close-callback="__popup_close_callback__" css-class="' + o + '" effect="' + s + '" title="' + a + '" ref="' + n + '">' + t + "</popup>", this._vm = new l.a({
                            components: _({
                                Popup: d.a
                            }, f),
                            el: "[von-popups]"
                        });
                        var h = this._vm.$refs[n];
                        return h.setButtons(i), h
                    }
                }, {
                    key: "delegate",
                    value: function (t) {
                        return this._vm.$refs[t]
                    }
                }, {
                    key: "destroy",
                    value: function () {
                        this._vm && (this._vm.$destroy(), this._vm = void 0), document.querySelector("[von-popups]").innerHTML = ""
                    }
                }]), t
            }();
        e.a = new f
    },
    function (t, e, n) {
        "use strict";

        function s(t) {
            try {
                t.test = 1
            } catch (t) {}
            return {
                get: function (e) {
                    var n = t.getItem(e);
                    return /^(\{.*\})|(\[.*\])$/.test(n) && (n = JSON.parse(n)), n
                }, set: function (e, n) {
                    return "object" === (void 0 === n ? "undefined" : r()(n)) && (n = i()(n)), t.setItem(e, n)
                }, remove: function (e) {
                    return t.removeItem(e)
                }
            }
        }
        e.a = s;
        var a = n(28),
            i = n.n(a),
            o = n(79),
            r = n.n(o)
    },
    function (t, e, n) {
        "use strict";
        var s = n(8),
            a = n.n(s),
            i = window.location.origin,
            o = i + "/s4/assets.uploadImage",
            r = function (t) {
                return new a.a(function (e, n) {
                    var s = new FormData;
                    _.forEach(t.files, function (t, e) {
                        s.append(e, t)
                    });
                    var a = new XMLHttpRequest;
                    a.onreadystatechange = function () {
                        200 == a.status && 4 == a.readyState ? e(JSON.parse(a.responseText), a.status) : a.status >= 300 && n("上传失败, Status: " + a.status, a.status)
                    }, a.open("POST", o, !0), a.send(s), t.value = null
                })
            };
        e.a = r
    },
    function (t, e, n) {
        "use strict";
        var s, a = n(8),
            i = n.n(a),
            o = n(7),
            r = n.n(o),
            c = n(4),
            u = n(5),
            l = n(3),
            p = {
                UPDATE_INFO: "update_info",
                UPDATE_STATUS: "update_status"
            },
            d = {
                status: 1,
                info: {
                    app_size: "6.5MB",
                    app_type: 1,
                    app_name: "",
                    app_icon: "",
                    app_developer: "",
                    app_scheme: "",
                    app_status: 1,
                    download_url: "",
                    clipboard: ""
                }
            },
            f = (s = {}, r()(s, p.UPDATE_INFO, function (t, e) {
                _.extend(t.info, _.pick(e, _.keys(t.info)))
            }), r()(s, p.UPDATE_STATUS, function (t, e) {
                e === c.H && $storage.set(c.I, $cookie.get(c.J)), t.status = e
            }), s),
            v = function () {
                var t = $storage.get(c.I);
                return (!t || t !== $cookie.get(c.J)) && (!$cookie.get("uid") || ($storage.set(c.I, $cookie.get(c.J)), !1))
            },
            h = {
                showAssistantUnopenPopup: function (t) {
                    return t.status === c.K && !v() && 1 === t.info.app_status
                }, showAssistantInvalidPopup: function (t) {
                    return t.status === c.K && !v() && 2 === t.info.app_status
                }, isNewbie: function () {
                    return v()
                }
            },
            m = {
                alive: function (t) {
                    var e = (t.state, t.commit);
                    return $assistant.alive().then(function () {
                        return $storage.get(c.L) && $storage.remove(c.L), e(p.UPDATE_STATUS, c.H), i.a.resolve()
                    }, function (t) {
                        return $assistant.poll(), $api.assistantInfo().then(function (t) {
                            return t.data && t.data.payload
                        }).then(function (t) {
                            return e(p.UPDATE_INFO, t), e(p.UPDATE_STATUS, c.K), i.a.reject()
                        })
                    })
                }, open: function (t) {
                    var e = t.state,
                        n = e.info.app_scheme;
                    n && (location.href = n + "openURL?type=outside&url=" + encodeURIComponent(location.href))
                }, download: function (t) {
                    var e = t.state,
                        s = e.info.download_url;
                    s && (location.href = n.i(l.e)(s, {
                        return_url: location.href
                    }))
                }, getInfo: function (t) {
                    var e = t.commit;
                    return $api.assistantInfo().then(function (t) {
                        return t.data && t.data.payload
                    }).then(function (t) {
                        e(p.UPDATE_INFO, t)
                    })
                }, syncAssistantUnopen: function (t) {
                    var e = t.state;
                    u.a.$emit(u.b.POPUP_ASSISTANT_UNOPEN, {
                        showAssistantUnopenPopup: e.status === c.K && !v() && 1 === e.info.app_status
                    })
                }, syncAssistantInvalid: function (t) {
                    var e = t.state;
                    u.a.$emit(u.b.POPUP_ASSISTANT_INVALID, {
                        showAssistantInvalidPopup: e.status === c.K && !v() && 2 === e.info.app_status
                    })
                }
            };
        e.a = {
            namespaced: !0,
            state: d,
            mutations: f,
            getters: h,
            actions: m
        }
    },
    function (t, e, n) {
        "use strict";
        var s = function () {
                return {}
            }(),
            a = {},
            i = {},
            o = {
                bindMobileSendCode: function (t, e) {
                    t.commit;
                    return $api.bindMobileSendCode(e)
                }, unfreezeSendCode: function (t, e) {
                    t.commit;
                    return $api.unfreezeSendCode(e)
                }, loginSendCode: function (t, e) {
                    t.commit;
                    return $api.loginSendCode(e)
                }
            };
        e.a = {
            namespaced: !0,
            state: s,
            getters: a,
            mutations: i,
            actions: o
        }
    },
    function (t, e, n) {
        "use strict";
        var s, a = n(7),
            i = n.n(a),
            o = n(18),
            r = n.n(o),
            c = n(4),
            u = {
                SYNC_DASHBOARD: "sync_dashboard",
                SYNC_GIFT: "sync_gift",
                CHANGE_LITE: "change_lite"
            },
            l = {
                uid: 0,
                nickname: null,
                avatar: "//assets.qkcdn.com/images/3a451d5f90dfda4494a00c94e97513d2.png!200x200",
                balance: "0.00",
                total_reward: "0.00",
                today_reward: "0.00",
                lottery: {
                    status: 1,
                    win: 0
                },
                create_day: "",
                bind_mobile: 0,
                gift: 0,
                show_customer: 0,
                has_finished_task_once: 1,
                new_year: {},
                is_investigation: 0,
                shoutu_handle_result: "",
                is_lite: 0,
                withdraw_num: 0,
                invite_code: "0",
                is_unionpay: 0
            },
            p = {},
            d = (s = {}, i()(s, u.SYNC_DASHBOARD, function (t, e) {
                var n = e.jfb_account;
                n && n.is_open && (e.total_reward = (parseFloat(e.total_reward) + parseFloat(n.total_to_price)).toFixed(2), e.today_reward = (parseFloat(e.today_reward) + parseFloat(n.today_to_price)).toFixed(2), e.balance = (parseFloat(e.balance) + parseFloat(n.surplus_to_price)).toFixed(2)), r()(t, e)
            }), i()(s, u.SYNC_GIFT, function (t, e) {
                t.gift = e
            }), i()(s, u.CHANGE_LITE, function (t, e) {
                t.is_lite = e
            }), s),
            _ = {
                dashboard: function (t) {
                    var e = t.commit;
                    return $api.dashboard().then(function (t) {
                        return t.data && t.data.payload
                    }).then(function (t) {
                        t.has_finished_task_once && $storage.set(c.j, 1), e(u.SYNC_DASHBOARD, t)
                    })
                }, lotteryGetReward: function (t, e) {
                    t.commit;
                    return $api.lotteryGetReward(e).then(function (t) {
                        return t.data && t.data
                    })
                }, fetchGift: function (t) {
                    var e = t.commit;
                    return $api.createUser().then(function (t) {
                        return t.data && t.data.payload
                    }).then(function (t) {
                        e(u.SYNC_GIFT, t.gift)
                    })
                }, changeLite: function (t, e) {
                    (0, t.commit)(u.CHANGE_LITE, e)
                }
            };
        e.a = {
            namespaced: !0,
            state: l,
            getters: p,
            mutations: d,
            actions: _
        }
    },
    function (t, e, n) {
        "use strict";
        var s, a = n(8),
            i = n.n(a),
            o = n(7),
            r = n.n(o),
            c = n(5),
            u = n(4),
            l = function () {
                return {
                    detail: {
                        app_name: "",
                        icon: "",
                        reward: "",
                        bundle_id: "",
                        deadline: 0,
                        download_url: "",
                        task_id: 0,
                        callback_url: ""
                    }
                }
            },
            p = l(),
            d = {
                INIT: "init",
                SYNC: "sync"
            },
            f = (s = {}, r()(s, d.INIT, function (t) {
                _.extend(t.detail, l())
            }), r()(s, d.SYNC, function (t, e) {
                _.extend(t.detail, _.pick(e, _.keys(t.detail)))
            }), s),
            v = {},
            h = {
                fetch: function (t, e) {
                    var n = t.commit;
                    return n(d.INIT), $api.simpletaskDetail(e).then(function (t) {
                        return t.data && t.data.payload
                    }).then(function (t) {
                        return 2 !== t.status ? $router.back("/tasks") : (n(d.SYNC, t), i.a.resolve(t))
                    }).catch(function (t) {
                        return i.a.reject(t)
                    })
                }, start: function (t, e) {
                    var n = t.commit;
                    return $api.simpletaskStart(e).then(function (t) {
                        return t.data
                    }).then(function (t) {
                        if (0 === t.err_code) return i.a.resolve(t.payload);
                        switch (t.err_code) {
                            case u.x:
                                n("show_install_certification_popup", null, {
                                    root: !0
                                });
                                break;
                            case u.y:
                                $loading.hide(), c.a.$emit(c.b.POPUP_JAIL_BREAKER);
                                break;
                            case u.z:
                                $loading.hide(), c.a.$emit(c.b.POPUP_BIND_PHONE);
                                break;
                            case u.B:
                                $loading.hide(), c.a.$emit(c.b.POPUP_USER_FREEZE)
                        }
                        return i.a.reject()
                    })
                }, check: function (t, e) {
                    return $api.simpletaskState(e).then(function (t) {
                        return t.data && t.data.payload
                    })
                }, giveup: function (t, e) {
                    return $api.simpletaskGiveup(e).then(function (t) {
                        return t.data && t.data.payload
                    })
                }
            };
        e.a = {
            namespaced: !0,
            state: p,
            mutations: f,
            getters: v,
            actions: h
        }
    },
    function (t, e, n) {
        "use strict";
        var s, a = n(7),
            i = n.n(a),
            o = n(18),
            r = n.n(o),
            c = {
                SYNC: "sync",
                SYNC_TASKS: "syncTasks",
                SYNC_ACCOUNT_STATUS: "sync_account_status"
            },
            u = function () {
                return {
                    info: {},
                    tasks: [],
                    account_status: 1
                }
            }(),
            l = {},
            p = (s = {}, i()(s, c.SYNC, function (t, e) {
                r()(t, e)
            }), i()(s, c.SYNC_TASKS, function (t, e) {
                r()(t, e)
            }), i()(s, c.SYNC_ACCOUNT_STATUS, function (t, e) {
                t.account_status = e.account_status
            }), s),
            d = {
                getTaskByDate: function (t, e) {
                    var n = t.commit,
                        s = e.taskDate,
                        a = e.is_recharge;
                    return $api.highearnDateFilterTask({
                        task_date: s,
                        is_recharge: a
                    }).then(function (t) {
                        return t.data && t.data.payload
                    }).then(function (t) {
                        return n(c.SYNC_TASKS, t), t
                    })
                }, getSubTaskByDate: function (t, e) {
                    var n = (t.commit, e.taskDate);
                    return $api.complainSubtaskDateFilter({
                        task_date: n
                    }).then(function (t) {
                        return t.data && t.data.payload
                    }).then(function (t) {
                        return t
                    })
                }, submitRegisterTaskInfo: function (t, e) {
                    t.commit;
                    return $api.highearnComplain(e).then(function (t) {
                        $toast.show("提交成功！"), $router.back({
                            path: "/help/self"
                        })
                    })
                }, submitSubtaskInfo: function (t, e) {
                    t.commit;
                    return $api.complainSubtask(e)
                }, submitRechargeTaskComplain: function (t, e) {
                    t.commit;
                    return $api.complainRechargeTask(e)
                }, upload: function (t, e) {
                    t.commit;
                    return $upload(e).then(function (t) {
                        return t && t.payload
                    })
                }, getAccountStatus: function (t) {
                    var e = t.commit;
                    $api.accountStatus().then(function (t) {
                        return t.data && t.data.payload
                    }).then(function (t) {
                        e(c.SYNC_ACCOUNT_STATUS, t)
                    })
                }, unfreezeSendCode: function (t, e) {
                    t.commit;
                    return $api.unfreezeSendCode(e)
                }, unfreezeComplain: function (t, e) {
                    t.commit;
                    return $api.unfreezeComplain(e)
                }
            };
        e.a = {
            namespaced: !0,
            state: u,
            getters: l,
            mutations: p,
            actions: d
        }
    },
    function (t, e, n) {
        "use strict";
        var s, a = n(7),
            i = n.n(a),
            o = {
                SYNC_LOANS: "sync_loans",
                SYNC_LOAN_DETAIL: "sync_loan_detail"
            },
            r = function (t) {
                return _.map(t, function (t) {
                    return _.assign(_.pick(t, ["id", "icon", "rate", "tags"]), {
                        name: t.title,
                        rateType: t.rate_type,
                        releaseIn: t.loan_time,
                        releaseInUnit: t.loan_time_unit,
                        amount: t.loan_money_min === t.loan_money_max ? t.loan_money_min : t.loan_money_min + "～" + t.loan_money_max
                    })
                })
            },
            c = {
                loans: [],
                loanDetail: {}
            },
            u = {},
            l = (s = {}, i()(s, o.SYNC_LOANS, function (t, e) {
                _.each(e, function (t) {
                    0 === t.tags.length ? t.tags.push("仅需身份证即可放款") : t.tags.splice(0, 0, "身份证")
                }), t.loans = e
            }), i()(s, o.SYNC_LOAN_DETAIL, function (t, e) {
                var n = e.loan_money_min,
                    s = e.loan_money_max,
                    a = e.loan_time_min,
                    i = e.loan_time_max;
                e.loan_range = n + (n === s ? "" : "～" + s), e.loan_time_range = a + (a === i ? "" : "～" + i), e.tags.unshift("身份证"), t.loanDetail = e
            }), s),
            p = {
                fetchLoans: function (t, e) {
                    var n = t.commit,
                        s = e.amount,
                        a = e.releaseIn,
                        i = e.qulifications;
                    return $loading.show(), $api.loanList(s, a, i).then(function (t) {
                        return t.data && t.data.payload
                    }).then(function (t) {
                        return n(o.SYNC_LOANS, r(t)), $loading.hide(), t
                    })
                }, fetchDetail: function (t, e) {
                    var n = t.commit;
                    return $api.getLoanDetail(e).then(function (t) {
                        return t.data && t.data.payload
                    }).then(function (t) {
                        return n(o.SYNC_LOAN_DETAIL, t), t
                    })
                }
            };
        e.a = {
            namespaced: !0,
            state: c,
            getters: u,
            mutations: l,
            actions: p
        }
    },
    function (t, e, n) {
        "use strict";
        var s, a = n(7),
            i = n.n(a),
            o = n(8),
            r = n.n(o),
            c = n(5),
            u = n(4),
            l = n(3),
            p = {
                icon: "//assets.qkcdn.com/images/c36c216a5beda49764205b080b6c399d.png",
                title: "收徒赚钱",
                reward: "150",
                tags: ["上不封顶月入万"],
                status: 1,
                isPortal: !0,
                portalName: "shoutu",
                onPortalClick: function () {
                    $router.forward({
                        path: "/apprentices",
                        query: {
                            from_shoutu_portal: 1
                        }
                    })
                }
            },
            d = {
                icon: "//assets.qkcdn.com/images/a39d602e393cb12ccc153ca540154121.png",
                title: "开店赚钱",
                reward: "4000",
                tags: ["收入逐月持续增加"],
                status: 1,
                isPortal: !0,
                portalName: "youlian",
                onPortalClick: function () {
                    location.href = "http://youlianyc.com/qk/zhaomu?channel=qk"
                }
            },
            f = function (t) {
                return {
                    icon: "//assets.qkcdn.com/images/9eb2a8f02939c25de6a16973c3bdd3ff.png",
                    title: "办卡赚钱",
                    reward: "100",
                    tags: ["15分钟完成，够吃两天，先到先得"],
                    status: 1,
                    isPortal: !0,
                    portalName: "credit",
                    onPortalClick: function () {
                        var e = {
                            name: "credit_detail",
                            params: {
                                id: t
                            }
                        };
                        $router.forward(e)
                    }
                }
            },
            v = 216e5,
            h = function (t) {
                return new r.a(function (e) {
                    setTimeout(e, t || 0)
                })
            },
            m = function (t) {
                if (t && 401 === t.status) {
                    $loading.show("尚未登录，正在跳转..", 2e3), setTimeout(function () {
                        location.href = "/v4"
                    }, 2500)
                } else t && 402 === t.status && t.data && t.data.err_code && 40201 === t.data.err_code && (location.href = "/v4/human")
            },
            g = function () {
                return {
                    gangAoTaiPopupVar: !1,
                    show_push: 0,
                    is_jail_broken: 0,
                    ongoing: [],
                    newbie: [],
                    tasks: [],
                    tasks_coming: [],
                    task_limited: 0,
                    has_tasks_coming: !0,
                    has_tasks: !0,
                    new_year: {},
                    recommends: [],
                    easy: [],
                    easy_coming: [],
                    easy_limited: 0,
                    in_compare: {
                        tasks: 0,
                        newbie: 0,
                        coming: 0
                    },
                    game_banner: [],
                    game_cards: [],
                    zstask_info: {
                        total: 0,
                        total_reward: "0.00",
                        icons: []
                    },
                    promotions: [],
                    is_first_click: !0,
                    kagou_link: "",
                    weishang_url: "",
                    showInstallKagouPopup: !1
                }
            },
            b = g(),
            k = "normal",
            w = 1,
            C = 2,
            y = {
                INIT: "init",
                SYNC: "sync",
                CHANGE_KAGOU_FIRST_CLICK_STATUS: "change_kagou_first_click_status",
                SHOW_INSTALL_KAGOU_POPUP: "show_install_kagou_popup",
                HIDE_INSTALL_KAGOU_POPUP: "hide_install_kagou_popup",
                GANG_AO_TAI_POPUP: "gang_ao_tai_popup",
                RENDER_MOCK: "render_mock"
            },
            T = function (t, e) {
                var n = _.find(t, function (t) {
                    return 2 === t.status
                });
                return n ? [_.extend(n, {
                    type: e
                })] : []
            },
            x = (s = {}, i()(s, y.INIT, function (t) {
                _.extend(t, g())
            }), i()(s, y.SYNC, function (t, e) {
                switch (e.type) {
                    case k:
                        if (t.show_push = e.show_push, t.is_jail_broken = e.is_jail_broken, t.is_jail_broken) return;
                        t.newbie = _.filter(e.newbie, function (t) {
                            return 2 !== t.status
                        });
                        var n = _.filter(e.tasks, function (t) {
                            return 2 !== t.status
                        });
                        t.weishang_url = e.weishang_url, t.tasks = n, e.highearn_list && e.highearn_list.forEach(function (e) {
                            e.type = "gaoe", t.tasks.push(e)
                        }), 0 === t.tasks.length && (t.has_tasks = !1);
                        var s = _.filter(e.easy, function (t) {
                            return 2 !== t.status
                        });
                        _.each(s, function (t) {
                            t.tags.push("剩" + t.qty + "份")
                        }), t.easy = s, t.ongoing = [].concat(T(e.newbie, 1)).concat(T(e.easy, 2)).concat(T(e.tasks, 1)), t.tasks_coming = e.incoming, 0 === t.tasks_coming.length ? t.has_tasks_coming = !1 : t.has_tasks_coming = !0, e.timestamp && (t.has_tasks_coming = !0), e.priority && (t.priority = e.priority);
                        var a = e.easy_incoming;
                        _.each(a, function (t) {
                            t.tags.push("剩" + t.qty + "份")
                        }), t.easy_coming = a, t.in_compare = e.in_compare, _.extend(t.zstask_info, _.pick(e.zs_task_info, _.keys(t.zstask_info))), t.game_banner = _.filter(e.games, function (t) {
                            return "" !== t.banner_url
                        }), t.game_cards = _.filter(e.games, function (t) {
                            return "" === t.banner_url
                        }), t.game_banner.length > 5 && (t.game_banner = t.game_banner.slice(0, 4));
                        var i = e.promotions;
                        _.each(i, function (t) {
                            t.title = t.title.replace(/【/g, "").replace(/】/g, " · ")
                        }), t.promotions = i, t.kagou_link = e.kagou_link, t.new_year = e.new_year, e.show_recommends && (t.recommends = [], t.recommends.push(p, d), e.credit_task_id > 0 && t.recommends.push(f(e.credit_task_id)));
                        break;
                    case "newbie":
                        t.tasks = e.tasks.splice(0, 8), e.incoming.length > 8 ? t.tasks_coming = e.incoming.splice(0, 8) : t.tasks_coming = e.incoming
                }
            }), i()(s, y.CHANGE_KAGOU_FIRST_CLICK_STATUS, function (t, e) {
                t.is_first_click = e
            }), i()(s, y.SHOW_INSTALL_KAGOU_POPUP, function (t) {
                t.showInstallKagouPopup = !0
            }), i()(s, y.HIDE_INSTALL_KAGOU_POPUP, function (t) {
                t.showInstallKagouPopup = !1
            }), i()(s, y.RENDER_MOCK, function (t, e) {
                t.tasks = e
            }), i()(s, y.GANG_AO_TAI_POPUP, function (t) {
                t.gangAoTaiPopupVar = !0
            }), s),
            S = function (t) {
                return t > 0 ? "还有" + t + "个任务正在匹配，请稍后刷新..." : ""
            },
            $ = {
                newbieTips: function (t) {
                    return S(t.in_compare.newbie)
                }, tasksTips: function (t) {
                    return S(t.in_compare.tasks)
                }, showGameBanner: function (t) {
                    return t.game_banner.length > 0
                }, showNoHelpTaskPopup: function () {
                    return !0
                }
            },
            A = {
                fetch: function (t) {
                    function e() {
                        return $loading.show("正在匹配任务"), !o || o && o < i ? $api.subtaskInit().then(function () {
                            return $assistant.updateState().then(function () {
                                return h(2e3)
                            })
                        }).then(function () {
                            return $api.subtaskList(!0).then(function (t) {
                                if (204 === t.status) {
                                    var e = {
                                        payload: {
                                            noContent: !0
                                        }
                                    };
                                    t.data = e
                                }
                                return t.data.payload
                            }).then(function (t) {
                                var e = (new Date).getTime();
                                return $storage.set(u.F, e + v), $loading.hide(), t
                            })
                        }) : $api.subtaskList(!0).then(function (t) {
                            if (204 === t.status) {
                                var e = {
                                    payload: {
                                        noContent: !0
                                    }
                                };
                                t.data = e
                            }
                            return t.data.payload
                        })
                    }

                    function s() {
                        g(e).then(function (t) {
                            function e(t) {
                                clearTimeout(c), a(y.SYNC, _.extend(t, {
                                    type: k
                                }))
                            }
                            if (t) {
                                if (t.noContent) return p() ? void 0 : d(s);
                                if (1 === t.is_ip_warning) {
                                    var i = "HMT_SUBTASKLIST",
                                        o = (new Date).getDate().toString();
                                    $cookie.get(i) !== o && (a(y.GANG_AO_TAI_POPUP), $cookie.set(i, o))
                                }
                                $loading.hide();
                                var r = t.tasks.length > 0 || t.newbie.length > 0 || t.incoming.length > 0 ? 1 : 0;
                                if (!t.timestamp && r) {
                                    var f = n.i(l.i)(t);
                                    f.timestamp = (new Date).getTime(), f.tasks.map(function (t, e) {
                                        return t.title = t.title + "*", t
                                    }), f.incoming = [], f.priority = !0, $storage.set(u.w, f)
                                }
                                t.priority = !0, t.show_push ? $assistant.isPushEnabled().then(function (n) {
                                    var s = n && n.data && "1" === n.data.payload;
                                    t.show_push = !s, e(t)
                                }) : e(t)
                            }
                        }).catch(f)
                    }
                    var a = t.commit;
                    a(y.INIT);
                    var i = (new Date).getTime(),
                        o = $storage.get(u.F),
                        c = void 0,
                        p = function () {
                            var t = $storage.get(u.w) || void 0;
                            return !!(t && (new Date).getTime() - t.timestamp < 6e5) && ($loading.hide(), a(y.INIT), a(y.SYNC, t), !0)
                        },
                        d = function (t, e) {
                            if (0 === b.tasks.length || !b.priority) {
                                var n = e || "正在努力匹配中";
                                return $loading.show(n), h(5e3).then(t)
                            }
                        },
                        f = function (t) {
                            var e = t.response;
                            m(e), p() ? e && 400 === e.status ? h(1e3).then(function () {
                                $toast.show(e.data && e.data.err_msg)
                            }) : h(1e3).then(function () {
                                $toast.show("连接超时，请检查网络")
                            }) : d(s, "正在拼命匹配中")
                        },
                        g = function (t) {
                            if (n.i(l.h)("16:55", "17:05")) {
                                return 1 === parseInt(3 * Math.random() + 1) ? p() ? r.a.resolve() : d(t) : t()
                            }
                            return t()
                        };
                    ! function () {
                        c = setTimeout(function () {
                            p()
                        }, 2e3)
                    }(), s()
                }, fetchNewbie: function (t) {
                    var e = t.commit;
                    return $api.subtaskListNewbie().then(function (t) {
                        return t.data && t.data.payload
                    }).then(function (t) {
                        e(y.SYNC, _.extend(t, {
                            type: "newbie"
                        }))
                    })
                }, start: function (t, e) {
                    function n(t) {
                        var e = t.response;
                        m(e), e && 400 === e.status ? (d = e.data && e.data.err_msg || "错误的请求", h(1e3).then(function () {
                            $toast.show(d)
                        })) : 8e3 === p ? h(1e3).then(function () {
                            $toast.show(d)
                        }) : (p *= 2, s(i, r, p))
                    }

                    function s(t, e, i) {
                        o || ($loading.show("拼命争抢任务中..."), o = !0), h(i).then(function () {
                            return $api.subtaskStart(t, e)
                        }).then(function (t) {
                            return t.data
                        }).then(function (n) {
                            if (n.err_code === u.x) $loading.hide(), a("show_install_certification_popup", null, {
                                root: !0
                            });
                            else if (n.err_code === u.y) $loading.hide(), c.a.$emit(c.b.POPUP_JAIL_BREAKER);
                            else if (n.err_code === u.z) $loading.hide(), c.a.$emit(c.b.POPUP_BIND_PHONE);
                            else if (n.err_code === u.A) $loading.hide(), c.a.$emit(c.b.POPUP_BIND_ZHIMA);
                            else if (n.err_code === u.B) $loading.hide(), c.a.$emit(c.b.POPUP_USER_FREEZE);
                            else {
                                var o = n.payload,
                                    r = o.type,
                                    p = o.message;
                                8e3 !== i && (i *= 2), r === w ? s(t, e, i) : r === C ? (l.d.sendAction("EVENT", "subtask_started", {
                                    task_id: t
                                }), setTimeout(function () {
                                    $toast.show("抢到任务，正在跳转...", 1e3), setTimeout(function () {
                                        $router.forward({
                                            name: "task_detail",
                                            params: {
                                                id: t
                                            }
                                        })
                                    }, 1e3)
                                }, 500)) : ($toast.show(p), "没有剩余" === p && setTimeout(function () {
                                    window.location.reload()
                                }, 1500))
                            }
                        }).catch(n)
                    }
                    var a = t.commit,
                        i = (t.dispatch, e.id),
                        o = !1,
                        r = e.is_quality ? 1 : 0,
                        p = 1e3,
                        d = "连接超时，请检查网络";
                    s(i, r, p)
                }, forwardPromotions: function (t, e) {
                    var s = t.commit;
                    if (e.isPortal) return void e.onPortalClick();
                    var a = e.url;
                    $assistant.getAppInfo(u.G).then(function (t) {
                        return t && t.data && t.data.payload
                    }).then(function (t) {
                        if (t && t.bundle_id && t.bundle_version)
                            if (!0 === b.is_first_click) s(y.CHANGE_KAGOU_FIRST_CLICK_STATUS, !1), location.href = a;
                            else {
                                var e = n.i(l.k)(a),
                                    i = JSON.parse(decodeURIComponent(e.exparams));
                                location.href = "http://sns.kagou.me/kagou-guid/views/jump.html?plan_id=" + i.plan_id
                            } else s(y.SHOW_INSTALL_KAGOU_POPUP)
                    }, function () {
                        s(y.SHOW_INSTALL_KAGOU_POPUP)
                    })
                }, hideKagou: function (t) {
                    (0, t.commit)(y.HIDE_INSTALL_KAGOU_POPUP)
                }
            };
        e.a = {
            namespaced: !0,
            state: b,
            mutations: x,
            getters: $,
            actions: A
        }
    },
    function (t, e, n) {
        "use strict";
        var s, a = n(8),
            i = n.n(a),
            o = n(7),
            r = n.n(o),
            c = n(4),
            u = n(3),
            l = n(6),
            p = function () {
                return {
                    task_id: 0,
                    task_status: 0,
                    reward: "0",
                    app_keyword: "",
                    is_manually_appstore: 0,
                    app_rank: 0,
                    app_name: "",
                    app_icon: "",
                    app_url: "",
                    app_bid: "",
                    app_exe: "",
                    tips: "",
                    expire_at: 0,
                    exclusive_count: 0,
                    exclusive_reward: "",
                    show_coupon_btn: 0,
                    double_reward: "0",
                    coupon_num: 0,
                    steps: [1, 0, 0],
                    listening: !1,
                    show_coupon: 0,
                    cancel_poll: !1,
                    callback_url: "",
                    is_invest: 0,
                    check_idfa: 0,
                    go_app_store_type: 0
                }
            },
            d = p(),
            f = function () {
                var t = $storage.get(c.q) || [],
                    e = $storage.get(c.d) + "-" + d.task_id; - 1 === t.indexOf(e) && (t.push(e), $storage.set(c.q, t))
            },
            v = {
                INIT: "init",
                SYNC: "sync",
                COUPON_SHOW_STATUS: "coupon_show_status",
                UPDATE_STEPS: "update_steps",
                CANCEL_POLL: "cancel_poll",
                CHECK_IDFA: "check_idfa"
            },
            h = {
                couponNum: function (t) {
                    return (t.double_reward - t.reward).toFixed(1)
                }
            },
            m = (s = {}, r()(s, v.INIT, function (t) {
                _.extend(t, p())
            }), r()(s, v.SYNC, function (t, e) {
                _.extend(t, e)
            }), r()(s, v.COUPON_SHOW_STATUS, function (t, e) {
                t.show_coupon = e
            }), r()(s, v.CHECK_IDFA, function (t, e) {
                t.check_idfa = e
            }), r()(s, v.UPDATE_STEPS, function (t, e) {
                switch (e) {
                    case c.k:
                        t.steps = [1, 0, 0];
                        break;
                    case c.l:
                        t.steps = [2, 0, 0];
                        break;
                    case c.m:
                        t.steps = [2, 1, 0];
                        break;
                    case c.n:
                        t.steps = [2, 2, 1];
                        break;
                    case c.o:
                        var n = $storage.get(c.p);
                        n && n.task_id === t.task_id && _.each(n.steps.split("|"), function (e, n) {
                            t.steps[n] = parseInt(e)
                        })
                }
                $storage.set(c.p, {
                    task_id: t.task_id,
                    steps: t.steps.join("|")
                })
            }), r()(s, v.CANCEL_POLL, function (t) {
                t.cancel_poll = !0
            }), s),
            g = {
                fetch: function (t, e) {
                    var s = t.commit;
                    return s(v.INIT), $api.subtaskDetail(e).then(function (t) {
                        return t.data && t.data.payload
                    }).then(function (t) {
                        if (2 !== t.task_status) return $router.back("/tasks");
                        if (t.expire_at = 1e3 * t.expire_at, -1 === t.app_rank && (t.app_rank = "X"), s(v.SYNC, t), t.show_coupon_btn) {
                            var e = $storage.get(c.q) || [],
                                a = $storage.get(c.d) + "-" + d.task_id;
                            if (-1 === e.indexOf(a)) {
                                s(v.COUPON_SHOW_STATUS, 1)
                            }
                        }
                        t.check_idfa && s(v.CHECK_IDFA, t.check_idfa), $assistant.updateState(), s(v.UPDATE_STEPS, c.o), n.i(u.j)() || function (t) {
                            var e = function t(e) {
                                setTimeout(function () {
                                    $assistant.getAppInfo(d.app_bid).then(function (n) {
                                        var a = n && n.data && n.data.payload;
                                        if (a && a.bundle_id) return void e();
                                        2 === d.steps[0] ? s(v.UPDATE_STEPS, c.l) : s(v.UPDATE_STEPS, c.k), d.cancel_poll || t(e)
                                    })
                                }, 1e3)
                            };
                            return new i.a(function (t) {
                                e(t)
                            })
                        }().then(function () {
                            1 !== d.steps[2] && s(v.UPDATE_STEPS, c.m)
                        })
                    })
                }, _openApp: function (t) {
                    var e = t.commit;
                    $assistant.getAppInfo(d.app_bid).then(function (t) {
                        return t && t.data && t.data.payload
                    }).then(function (t) {
                        if (t && t.bundle_id)
                            if (t.bundle_version) $assistant.openApp({
                                bid: d.app_bid,
                                exe: d.app_exe
                            }).then(function () {
                                $api.subtaskOpenApp({
                                    task_id: d.task_id,
                                    task_type: 1
                                }).then(function () {
                                    e(v.UPDATE_STEPS, c.n), e(v.COUPON_SHOW_STATUS, 0), f()
                                })
                            });
                            else {
                                $popup.fromTemplate('\n                <div class="text-center">\n                  应用下载中，请稍后打开\n                </div>\n              ', {
                                    buttons: [{
                                        text: "知道了"
                                    }]
                                }).show()
                            } else $toast.show("您下载了错误应用或尚未完成安装")
                    }).catch(function (t) {})
                }, _openAppWith11: function (t) {
                    var e = t.commit;
                    $assistant.openAppIOS11({
                        bid: d.app_bid,
                        url: d.callback_url
                    }).then(function (t) {
                        return t.data && t.data.status
                    }).then(function (t) {
                        "ok" === t ? (e(v.UPDATE_STEPS, c.n), $assistant.updateState(), f()) : $toast.show("您下载了错误应用或尚未完成安装")
                    })
                }, _checkTaskStatus: function (t) {
                    var e = t.dispatch;
                    $api.subtaskState(d.task_id).then(function (t) {
                        return t.data && t.data.payload
                    }).then(function (t) {
                        if (3 === t.status) return $router.back("/tasks");
                        if (2 === t.status) {
                            var s = t.remain_seconds,
                                a = Math.ceil(s / 60) + "分钟";
                            $popup.fromTemplate(l.e.template("时间还不够哟", "再试玩" + a + "就能领奖啦"), l.e.options).show().then(function (t) {
                                -1 !== t && 0 === t && e(n.i(u.j)() ? "_openAppWith11" : "_openApp")
                            })
                        }
                        $assistant.updateState()
                    })
                }, _useCoupon: function (t) {
                    var e = t.commit;
                    return new i.a(function (t) {
                        $api.useCoupon(d.task_id).then(function (t) {
                            return t.data
                        }).then(function (n) {
                            return e(v.COUPON_SHOW_STATUS, 0), 40001 === n.err_code ? void $toast.show("没有可用的双倍券") : 40002 === n.err_code ? void $toast.show("当前任务已经使用过双倍券") : void t()
                        })
                    })
                }, updateSteps: function (t, e) {
                    (0, t.commit)(v.UPDATE_STEPS, e)
                }, cancelPoll: function (t) {
                    (0, t.commit)(v.CANCEL_POLL)
                }
            };
        e.a = {
            namespaced: !0,
            state: d,
            mutations: m,
            getters: h,
            actions: g
        }
    },
    function (t, e, n) {
        "use strict";
        var s, a = n(7),
            i = n.n(a),
            o = n(5),
            r = n(4),
            c = (n(6), function () {
                return {
                    task_id: 0,
                    task_status: 0,
                    reward: "0",
                    app_keyword: "",
                    is_manually_appstore: 0,
                    app_rank: 0,
                    app_name: "",
                    app_icon: "",
                    app_url: "",
                    app_bid: "",
                    app_exe: "",
                    tips: "",
                    expire_at: 0,
                    exclusive_count: 0,
                    exclusive_reward: "",
                    show_coupon_btn: 0,
                    double_reward: "0",
                    coupon_num: 0,
                    scheme_url: "",
                    steps: [1, 0, 0],
                    show_coupon: 0,
                    is_invest: 0,
                    go_app_store_type: 0,
                    explore_reward: 0
                }
            }),
            u = c(),
            l = {
                INIT: "init",
                SYNC: "sync",
                UPDATE_STEPS: "update_steps",
                COUPON_SHOW_STATUS: "coupon_show_status"
            },
            p = {
                couponNum: function (t) {
                    return (t.double_reward - t.reward).toFixed(1)
                }
            },
            d = (s = {}, i()(s, l.INIT, function (t) {
                _.extend(t, c())
            }), i()(s, l.SYNC, function (t, e) {
                _.extend(t, e)
            }), i()(s, l.COUPON_SHOW_STATUS, function (t, e) {
                t.show_coupon = e
            }), i()(s, l.UPDATE_STEPS, function (t, e) {
                switch (e) {
                    case r.k:
                        t.steps = [1, 0, 0];
                        break;
                    case r.l:
                        t.steps = [2, 0, 0];
                        break;
                    case r.m:
                        t.steps = [2, 1, 0];
                        break;
                    case r.n:
                        t.steps = [2, 2, 1];
                        break;
                    case r.o:
                        var n = $storage.get(r.p);
                        n && n.task_id === t.task_id && _.each(n.steps.split("|"), function (e, n) {
                            t.steps[n] = parseInt(e)
                        })
                }
                $storage.set(r.p, {
                    task_id: t.task_id,
                    steps: t.steps.join("|")
                })
            }), s),
            f = {
                fetch: function (t, e) {
                    var n = t.commit;
                    return n(l.INIT), $api.bonusTaskDetail(e).then(function (t) {
                        return t.data
                    }).then(function (t) {
                        var e = t.payload;
                        if (2 !== e.task_status) return $router.back("/tasks/lite");
                        e.expire_at = 1e3 * e.expire_at, -1 === e.app_rank && (e.app_rank = "X"), n(l.SYNC, e), 2 === e.state && (e.app_name = u.app_name, o.a.$emit(o.b.BONUS_TASK_FINISHED, e)), n(l.UPDATE_STEPS, r.o), 1 === e.open_fail && $toast.show("您下载了错误应用或尚未完成安装")
                    })
                }, checkOpenStatus: function (t) {
                    var e = t.commit;
                    $api.bonusOpenStatus(u.task_id, 1).then(function (t) {
                        return t.data && t.data.payload
                    }).then(function (t) {
                        0 !== t.status && (1 === t.status ? (e(l.UPDATE_STEPS, r.n), o.a.$emit(o.b.STOP_LITE_POLL_OPEN_STATUS)) : ($toast.show("您下载了错误应用或尚未完成安装"), o.a.$emit(o.b.STOP_LITE_POLL_OPEN_STATUS)))
                    })
                }, _checkTaskStatus: function () {
                    $loading.show("正在领取"),
                        function () {
                            $api.bonusCheckStatus(u.task_id).then(function (t) {
                                return t.data
                            }).then(function (t) {
                                $loading.hide();
                                var e = t.payload;
                                e.app_name = u.app_name, o.a.$emit(o.b.BONUS_TASK_FINISHED, e)
                            })
                        }()
                }, bonusFlip: function () {
                    return $api.bonusFlip().then(function (t) {
                        return t.data && t.data.payload
                    }).then(function (t) {
                        return t.reward
                    })
                }, updateSteps: function (t, e) {
                    (0, t.commit)(l.UPDATE_STEPS, e)
                }
            };
        e.a = {
            namespaced: !0,
            state: u,
            mutations: d,
            getters: p,
            actions: f
        }
    },
    function (t, e, n) {
        "use strict";
        var s, a = n(8),
            i = n.n(a),
            o = n(7),
            r = n.n(o),
            c = n(5),
            u = n(4),
            l = n(6),
            p = function () {
                return {
                    task_id: 0,
                    task_status: 0,
                    reward: "0",
                    app_keyword: "",
                    is_manually_appstore: 0,
                    app_rank: 0,
                    app_name: "",
                    app_icon: "",
                    app_url: "",
                    app_bid: "",
                    app_exe: "",
                    tips: "",
                    expire_at: 0,
                    exclusive_count: 0,
                    exclusive_reward: "",
                    show_coupon_btn: 0,
                    double_reward: "0",
                    coupon_num: 0,
                    scheme_url: "",
                    steps: [1, 0, 0],
                    show_coupon: 0,
                    is_invest: 0,
                    go_app_store_type: 0,
                    explore_reward: 0
                }
            },
            d = p(),
            f = {
                INIT: "init",
                SYNC: "sync",
                UPDATE_STEPS: "update_steps",
                COUPON_SHOW_STATUS: "coupon_show_status"
            },
            v = {
                couponNum: function (t) {
                    return (t.double_reward - t.reward).toFixed(1)
                }
            },
            h = (s = {}, r()(s, f.INIT, function (t) {
                _.extend(t, p())
            }), r()(s, f.SYNC, function (t, e) {
                _.extend(t, e)
            }), r()(s, f.COUPON_SHOW_STATUS, function (t, e) {
                t.show_coupon = e
            }), r()(s, f.UPDATE_STEPS, function (t, e) {
                switch (e) {
                    case u.k:
                        t.steps = [1, 0, 0];
                        break;
                    case u.l:
                        t.steps = [2, 0, 0];
                        break;
                    case u.m:
                        t.steps = [2, 1, 0];
                        break;
                    case u.n:
                        t.steps = [2, 2, 1];
                        break;
                    case u.o:
                        var n = $storage.get(u.p);
                        n && n.task_id === t.task_id && _.each(n.steps.split("|"), function (e, n) {
                            t.steps[n] = parseInt(e)
                        })
                }
                $storage.set(u.p, {
                    task_id: t.task_id,
                    steps: t.steps.join("|")
                })
            }), s),
            m = {
                fetch: function (t, e) {
                    var n = t.commit;
                    return n(f.INIT), $api.subtaskDetailLite(e).then(function (t) {
                        return t.data
                    }).then(function (t) {
                        var e = t.messages;
                        if (e.length > 0 && [3, 4, 6, 7].indexOf(e[0].type) > -1) return void $loading.hide();
                        var s = t.payload;
                        if (2 !== s.task_status) return $router.back("/tasks/lite");
                        if (s.expire_at = 1e3 * s.expire_at, -1 === s.app_rank && (s.app_rank = "X"), n(f.SYNC, s), s.show_coupon_btn) {
                            var a = $storage.get(u.q) || [],
                                i = $storage.get(u.d) + "-" + d.task_id;
                            if (-1 === a.indexOf(i)) {
                                n(f.COUPON_SHOW_STATUS, 1)
                            }
                        }
                        n(f.UPDATE_STEPS, u.o), 1 === s.open_fail && $toast.show("您下载了错误应用或尚未完成安装")
                    })
                }, checkOpenStatus: function (t) {
                    var e = t.commit;
                    $api.liteOpenStatus(d.task_id, 1).then(function (t) {
                        return t.data && t.data.payload
                    }).then(function (t) {
                        0 !== t.status && (1 === t.status ? (e(f.UPDATE_STEPS, u.n), c.a.$emit(c.b.STOP_LITE_POLL_OPEN_STATUS)) : ($toast.show("您下载了错误应用或尚未完成安装"), c.a.$emit(c.b.STOP_LITE_POLL_OPEN_STATUS)))
                    })
                }, _checkTaskStatus: function () {
                    function t() {
                        $api.liteCheckStatus(d.task_id).then(function (t) {
                            return t.data
                        }).then(function (e) {
                            var n = e.messages;
                            if (n.length > 0 && [3, 4, 6, 7].indexOf(n[0].type) > -1) return void $loading.hide();
                            var s = e.payload;
                            if (4 === s.status && setTimeout(function () {
                                t()
                            }, s.wait_time), 3 === s.status) return $loading.hide(), $router.back("/tasks/lite");
                            if (2 === s.status) {
                                $loading.hide();
                                var a = s.remain_seconds,
                                    i = Math.ceil(a / 60) + "分钟",
                                    o = $popup.fromTemplate(l.b.template("时间还不够哟", "再试玩" + i + "就能领奖啦"), {
                                        effect: "scale",
                                        cssClass: "popup-task-ongoing",
                                        keep: !0,
                                        showClose: !0,
                                        buttons: [{
                                            text: "继续试玩",
                                            onClick: function (t) {
                                                o.hide(), c.a.$emit(c.b.CHECK_OPEN_AGAIN)
                                            }
                                        }]
                                    });
                                o.show()
                            }
                        })
                    }
                    $loading.show("正在领取"), t()
                }, _useCoupon: function (t) {
                    var e = t.commit;
                    return new i.a(function (t) {
                        $api.useCoupon(d.task_id).then(function (t) {
                            return t.data
                        }).then(function (n) {
                            return e(f.COUPON_SHOW_STATUS, 0), 40001 === n.err_code ? void $toast.show("没有可用的双倍券") : 40002 === n.err_code ? void $toast.show("当前任务已经使用过双倍券") : void t()
                        })
                    })
                }, updateSteps: function (t, e) {
                    (0, t.commit)(f.UPDATE_STEPS, e)
                }
            };
        e.a = {
            namespaced: !0,
            state: d,
            mutations: h,
            getters: v,
            actions: m
        }
    },
    function (t, e, n) {
        "use strict";
        var s, a = n(7),
            i = n.n(a),
            o = n(28),
            r = n.n(o),
            c = n(8),
            u = n.n(c),
            l = n(5),
            p = n(4),
            d = (n(12), n(3)),
            f = n(6),
            v = {
                icon: "//assets.qkcdn.com/images/c36c216a5beda49764205b080b6c399d.png",
                title: "收徒赚钱",
                reward: "150",
                tags: ["上不封顶月入万"],
                status: 1,
                isPortal: !0,
                portalName: "shoutu",
                onPortalClick: function () {
                    $router.forward({
                        path: "/apprentices",
                        query: {
                            from_shoutu_portal: 2
                        }
                    })
                }
            },
            h = {
                icon: "//assets.qkcdn.com/images/bb5510a756d18b17bdcff1fe1611d77c.png",
                title: "办卡赚钱",
                reward: "200",
                tags: ["高额易通过·多办多得"],
                status: 1,
                isPortal: !0,
                portalName: "credit",
                onPortalClick: function () {
                    $router.forward({
                        path: "/credit/list",
                        query: {
                            backroute: "/tasks/lite"
                        }
                    })
                }
            },
            m = {
                icon: "//assets.qkcdn.com/images/c4e7c8bd660290dc896bce8bed45e211.png",
                title: "天天领钱",
                reward: "100",
                tags: ["买东西不花钱·还能赚钱"],
                status: 1,
                isPortal: !0,
                portalName: "youlian",
                onPortalClick: function () {
                    location.href = "http://youlianyc.com/qk/zhaomu?channel=qk"
                }, isMiniPortal: !0
            },
            g = function (t) {
                return {
                    icon: "//assets.qkcdn.com/images/9eb2a8f02939c25de6a16973c3bdd3ff.png",
                    title: "办卡赚钱",
                    reward: "100",
                    tags: ["15分钟完成，够吃两天，先到先得"],
                    status: 1,
                    isPortal: !0,
                    portalName: "credit",
                    onPortalClick: function () {
                        var e = {
                            name: "credit_detail",
                            params: {
                                id: t
                            }
                        };
                        $router.forward(e)
                    }
                }
            },
            b = function (t) {
                return new u.a(function (e) {
                    setTimeout(e, t || 0)
                })
            },
            k = function (t) {
                if (t && 401 === t.status) {
                    $loading.show("尚未登录，正在跳转..", 2e3), setTimeout(function () {
                        location.href = "/v4"
                    }, 2500)
                } else t && 402 === t.status && t.data && t.data.err_code && 40201 === t.data.err_code && (location.href = "/v4/human")
            },
            w = function () {
                return {
                    show_push: 0,
                    is_jail_broken: 0,
                    ongoing: [],
                    newbie: [],
                    tasks: [],
                    tasks_coming: [],
                    task_limited: 0,
                    has_tasks_coming: !0,
                    has_tasks: !0,
                    recommends: [],
                    easy: [],
                    easy_coming: [],
                    easy_limited: 0,
                    in_compare: {
                        tasks: 0,
                        newbie: 0,
                        coming: 0
                    },
                    game_banner: [],
                    game_cards: [],
                    zstask_info: {
                        total: 0,
                        total_reward: "0.00",
                        icons: [],
                        date_str: ""
                    },
                    explore_task_info: {
                        total: 0,
                        total_reward: 0,
                        icons: [],
                        date_str: ""
                    },
                    promotions: [],
                    is_first_click: !0,
                    kagou_link: "",
                    weishang_url: "",
                    showInstallKagouPopup: !1,
                    showAssistantBanner: "",
                    is_reservation: 0,
                    reservation_tasks: [],
                    show_bonus_popup: 0,
                    bonus_tasks_reward: [],
                    yl_huan_info: {}
                }
            },
            C = w(),
            y = "normal",
            T = 1,
            x = 2,
            S = {
                INIT: "init",
                SYNC: "sync",
                HIDE_PUSH: "hide_push",
                RENDER_MOCK: "render_mock"
            },
            $ = function (t, e) {
                if (t instanceof Array) {
                    return t.filter(function (t) {
                        return 2 === t.status || 4 === t.status || 5 === t.status
                    })
                }
                return []
            },
            A = (s = {}, i()(s, S.INIT, function (t) {
                _.extend(t, w())
            }), i()(s, S.SYNC, function (t, e) {
                switch (e.type) {
                    case y:
                        var n = $storage.get(p.r) || "",
                            s = (new Date).getTime();
                        if (n || 1 !== e.show_push ? n + 36e5 < s && 1 === e.show_push ? t.show_push = 1 : t.show_push = 0 : t.show_push = 1, t.is_jail_broken = e.is_jail_broken, t.is_jail_broken) return;
                        t.newbie = _.filter(e.newbie, function (t) {
                            return 2 !== t.status
                        });
                        var a = $sess.get(p.s) || [],
                            i = [];
                        e.tasks.forEach(function (t) {
                            -1 !== a.indexOf(t.id) && t.tags.forEach(function (e, n) {
                                "string" == typeof e && e.indexOf("剩") > -1 && (t.tags[n] = "剩0份")
                            }), 2 !== t.status && i.push(t)
                        }), t.weishang_url = e.weishang_url, t.tasks = i;
                        var o = i.findIndex(function (t) {
                                return 0 === t.qty
                            }),
                            c = $storage.get(p.t) || [],
                            u = [];
                        e.highearn_list && e.highearn_list.forEach(function (e, n) {
                            u.push(e.appid), c.indexOf(e.appid) > -1 || (e.type = "gaoe", o > -1 ? t.tasks.splice(o + n, 0, e) : t.tasks.push(e))
                        }), c = c.filter(function (t) {
                            return u.indexOf(t) > -1
                        }), $storage.set(p.t, c), 0 === t.tasks.length && (t.has_tasks = !1);
                        var l = _.filter(e.easy, function (t) {
                            return 2 !== t.status
                        });
                        _.each(l, function (t) {
                            t.tags.push("剩" + t.qty + "份")
                        }), t.easy = l, t.ongoing = [].concat($(e.newbie)).concat($(e.tasks)).concat($(e.reservation_tasks)), t.reservation_tasks = e.reservation_tasks, t.tasks_coming = e.incoming, 0 === t.tasks_coming.length ? t.has_tasks_coming = !1 : t.has_tasks_coming = !0, e.timestamp && (t.has_tasks_coming = !0), e.priority && (t.priority = e.priority);
                        var d = e.easy_incoming;
                        if (_.each(d, function (t) {
                            t.tags.push("剩" + t.qty + "份")
                        }), t.easy_coming = d, t.in_compare = e.in_compare, _.extend(t.zstask_info, _.pick(e.zs_task_info, _.keys(t.zstask_info))), _.extend(t.explore_task_info, _.pick(e.explore_task_info, _.keys(t.explore_task_info))), e.bonus_task_right) {
                            $storage.get(p.u) !== (new Date).getDate() && (t.show_bonus_popup = 1);
                            var f = e.bonus_tasks,
                                b = f.default_info,
                                k = f.user_task;
                            t.bonus_tasks_reward = b && b.reward, "{}" !== r()(k) ? (k.label = "bonus", t.ongoing = t.ongoing.concat(k)) : "{}" !== r()(b) && (b.title = "彩蛋任务", b.label = "bonus", t.tasks.splice(0, 0, b))
                        }
                        t.game_banner = _.filter(e.games, function (t) {
                            return "" !== t.banner_url
                        }), t.game_cards = _.filter(e.games, function (t) {
                            return "" === t.banner_url
                        }), t.game_banner.length > 5 && (t.game_banner = t.game_banner.slice(0, 4));
                        var w = e.promotions;
                        _.each(w, function (t) {
                            t.title = t.title.replace(/【/g, "").replace(/】/g, " · ")
                        }), t.promotions = w, t.kagou_link = e.kagou_link, e.show_recommends && (t.recommends = [], t.recommends.push(v, h), e.credit_task_id > 0 && t.recommends.push(g(e.credit_task_id)), e.yl_huan_info && (t.yl_huan_info = e.yl_huan_info, t.recommends.push(m))), t.showAssistantBanner = !1, t.is_reservation = e.is_reservation;
                        break;
                    case "newbie":
                        t.tasks = e.tasks.splice(0, 8), e.incoming.length > 8 ? t.tasks_coming = e.incoming.splice(0, 8) : t.tasks_coming = e.incoming, t.showAssistantBanner = !0
                }
            }), i()(s, S.RENDER_MOCK, function (t, e) {
                t.tasks = e
            }), i()(s, S.HIDE_PUSH, function (t, e) {
                t.show_push = 0
            }), s),
            P = function (t) {
                n.i(d.a)() ? n.i(d.f)().then(function () {
                    window.location.reload()
                }) : l.a.$emit(l.b.LITE_POPUP_OPEN_KEY, t.payload)
            },
            E = function (t) {
                return t > 0 ? "还有" + t + "个任务正在匹配，请稍后刷新..." : ""
            },
            I = {
                newbieTips: function (t) {
                    return E(t.in_compare.newbie)
                }, tasksTips: function (t) {
                    return E(t.in_compare.tasks)
                }, showGameBanner: function (t) {
                    return t.game_banner.length > 0
                }
            },
            L = {
                fetch: function (t) {
                    function e() {
                        return $loading.show("正在匹配任务"), b(r ? 0 : 2e3).then(function () {
                            return $api.subtaskListLite(!0).then(function (t) {
                                if (204 === t.status) {
                                    var e = {
                                        payload: {
                                            noContent: !0
                                        }
                                    };
                                    t.data = e
                                }
                                return t.data
                            }).then(function (t) {
                                return clearTimeout(c), t.err_code === p.h ? ($loading.hide(), P(t), $storage.remove(p.v), void $loading.hide()) : ($storage.set(p.v, 1), [43151, 244215, 243549, 244214].forEach(function (e) {
                                    var n = t.payload.tasks.findIndex(function (t) {
                                        return t.id === e
                                    });
                                    n > -1 && t.payload.tasks.splice(n, 1)
                                }), t.payload)
                            })
                        })
                    }

                    function s() {
                        v(e).then(function (t) {
                            if (t && "newbie" === t.type && i("assistant/getInfo", {}, {
                                root: !0
                            }), t) {
                                if (t.noContent) return l() ? void 0 : _(s);
                                $loading.hide();
                                var e = t.tasks.length > 0 || t.newbie.length > 0 || t.incoming.length > 0 ? 1 : 0;
                                if (!t.timestamp && t.type && t.type === y && e) {
                                    var a = n.i(d.i)(t);
                                    a.timestamp = (new Date).getTime(), a.tasks.map(function (t, e) {
                                        return t.title = t.title + "*", t
                                    }), a.incoming = [], a.priority = !0, $storage.set(p.w, a)
                                }
                                t.priority = !0, o(S.SYNC, t)
                            }
                        }).catch(f)
                    }
                    var a = t.state,
                        i = t.dispatch,
                        o = t.commit;
                    o(S.INIT);
                    var r = $storage.get(p.v),
                        c = void 0,
                        l = function () {
                            var t = $storage.get(p.w) || void 0;
                            return !!(t && (new Date).getTime() - t.timestamp < 6e5) && ($loading.hide(), o(S.INIT), o(S.SYNC, t), !0)
                        },
                        _ = function (t, e) {
                            if (0 === a.tasks.length || !a.priority) {
                                var n = e || "正在努力匹配中";
                                return $loading.show(n), b(5e3).then(t)
                            }
                        },
                        f = function (t) {
                            var e = t.response;
                            k(e), l() ? e && 400 === e.status ? b(1e3).then(function () {
                                $toast.show(e.data && e.data.err_msg)
                            }) : b(1e3).then(function () {
                                $toast.show("连接超时，请检查网络")
                            }) : _(s, "正在拼命匹配中")
                        },
                        v = function (t) {
                            if (n.i(d.h)("16:55", "17:05")) {
                                return 1 === parseInt(3 * Math.random() + 1) ? l() ? u.a.resolve() : _(t) : t()
                            }
                            return t()
                        };
                    ! function () {
                        c = setTimeout(function () {
                            l()
                        }, 2e3)
                    }(), s()
                }, start: function (t, e) {
                    function n(t) {
                        var e = t.response;
                        k(e), e && 400 === e.status ? (_ = e.data && e.data.err_msg || "错误的请求", b(1e3).then(function () {
                            $toast.show(_)
                        })) : 8e3 === u ? b(1e3).then(function () {
                            $toast.show(_)
                        }) : (u *= 2, a(o, c, u))
                    }

                    function s(t) {
                        a(o, c, u, t)
                    }

                    function a(t, o, c) {
                        var u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                        r || ($loading.show("拼命争抢任务中..."), r = !0), b(c).then(function () {
                            return t && 0 === t.toString().indexOf("u") ? $api.ufilterSubtaskStartLite(t, o) : e.label && "bonus" === e.label.toString() ? $api.bonusTaskStart() : $api.subtaskStartLite(t, o, u)
                        }).then(function (t) {
                            return t.data
                        }).then(function (n) {
                            if (n.err_code === p.h) return $loading.hide(), P(n), void $storage.remove(p.v);
                            if (n.err_code === p.x) $loading.hide(), i("show_install_certification_popup", null, {
                                root: !0
                            });
                            else if (n.err_code === p.y) $loading.hide(), l.a.$emit(l.b.POPUP_JAIL_BREAKER);
                            else if (n.err_code === p.z) $loading.hide(), l.a.$emit(l.b.POPUP_BIND_PHONE);
                            else if (n.err_code === p.A) $loading.hide(), l.a.$emit(l.b.POPUP_BIND_ZHIMA);
                            else if (n.err_code === p.B) $loading.hide(), l.a.$emit(l.b.POPUP_USER_FREEZE);
                            else if (n.err_code === p.C) $loading.hide(), r = !1, $bus.$emit("showHumanCheckPopup", s);
                            else if (n.err_code === p.D) f > 0 && a(t, o, c, {
                                trouble: 1
                            }), f += 1, a(t, o, c, window.getNVCVal());
                            else {
                                var u = n.payload,
                                    _ = u.type,
                                    v = u.message;
                                if (8e3 !== c && (c *= 2), _ === T) a(t, o, c);
                                else if (_ === x) d.d.sendAction("EVENT", "subtask_started", {
                                    task_id: t
                                }), setTimeout(function () {
                                    $toast.show("抢到任务，正在跳转...", 1e3), $storage.set(p.E, t + ":" + (new Date).getTime()), 0 === t.toString().indexOf("u") ? setTimeout(function () {
                                        $router.forward({
                                            name: "ufilter_task_detail_lite",
                                            params: {
                                                id: t
                                            }
                                        })
                                    }, 1e3) : e.label && "bonus" === e.label.toString() ? setTimeout(function () {
                                        $router.forward({
                                            name: "bonus_task_detail_lite",
                                            params: {
                                                id: t
                                            }
                                        })
                                    }, 1e3) : setTimeout(function () {
                                        $router.forward({
                                            name: "task_detail_lite",
                                            params: {
                                                id: t
                                            }
                                        })
                                    }, 1e3)
                                }, 500);
                                else if ($toast.show(v), "没有剩余" === v) {
                                    var h = $sess.get(p.s) || []; - 1 === h.indexOf(t) && h.push(t), $sess.set(p.s, h), setTimeout(function () {
                                        window.location.reload()
                                    }, 1500)
                                }
                            }
                        }).catch(n)
                    }
                    var i = t.commit,
                        o = (t.dispatch, e.id),
                        r = !1,
                        c = e.is_quality ? 1 : 0,
                        u = 1e3,
                        _ = "连接超时，请检查网络",
                        f = 0;
                    a(o, c, u)
                }, startAppoint: function (t, e) {
                    function n(t, e, a) {
                        i || (c(), i = !0), $api.reservationAcquire(t, e).then(function (t) {
                            return t.data
                        }).then(function (t) {
                            return new u.a(function (e) {
                                setTimeout(function () {
                                    e(t)
                                }, a)
                            })
                        }).then(function (a) {
                            if (a.err_code === p.h) return _(), P(a), void $storage.remove(p.v);
                            if (a.err_code === p.x) _(), l.a.$emit(l.b.HIDE_APPOINT_POPUP), setTimeout(function () {
                                s("show_install_certification_popup", null, {
                                    root: !0
                                })
                            }, 300);
                            else if (a.err_code === p.y) _(), v(l.b.POPUP_JAIL_BREAKER);
                            else if (a.err_code === p.z) _(), v(l.b.POPUP_BIND_PHONE);
                            else if (a.err_code === p.A) _(), v(l.b.POPUP_BIND_ZHIMA);
                            else if (a.err_code === p.B) _(), v(l.b.POPUP_USER_FREEZE);
                            else {
                                var i = a.payload,
                                    o = i.type,
                                    c = i.delay,
                                    u = i.message,
                                    h = i.show_push;
                                if (o === T) n(t, e, c);
                                else if (o === x) {
                                    if (d.d.sendAction("EVENT", "subtask_started", {
                                        task_id: t
                                    }), 1 === h) return $loading.hide(), l.a.$emit(l.b.HIDE_APPOINT_POPUP), void setTimeout(function () {
                                        $popup.fromTemplate(f.d.template, f.d.options).show().then(function (t) {
                                            1 === t ? $api.assistantInfo().then(function (t) {
                                                return t.data && t.data.payload
                                            }).then(function (t) {
                                                var e = t.app_scheme;
                                                location.href = e + "notification.appsetting", r()
                                            }) : r(1)
                                        })
                                    }, 300);
                                    $loading.hide(), setTimeout(function () {
                                        r(), $toast.show("预约成功"), l.a.$emit(l.b.HIDE_APPOINT_POPUP)
                                    }, 600)
                                } else {
                                    if (8 === o) return $toast.show("金币不足，「首页-金币专区」可赚取更多金币"), void r();
                                    $toast.show(u), r()
                                }
                            }
                        })
                    }
                    var s = t.commit,
                        a = (t.dispatch, e.id),
                        i = !1,
                        o = e.is_quality ? 1 : 0,
                        r = function (t) {
                            setTimeout(function () {
                                window.location.reload()
                            }, t || 1500)
                        },
                        c = function () {
                            document.querySelector(".popup-appoint-immediately").style.cssText = "pointer-events: none;", $loading.show("正在预约...")
                        },
                        _ = function () {
                            document.querySelector(".popup-appoint-immediately").style.cssText = "pointer-events: auto;", $loading.hide()
                        },
                        v = function (t) {
                            l.a.$emit(l.b.HIDE_APPOINT_POPUP), setTimeout(function () {
                                l.a.$emit(t)
                            }, 300)
                        };
                    n(a, o, 1e3)
                }, reservationStart: function (t, e) {
                    t.commit;
                    return $api.reservationStart(e)
                }, hidePush: function (t) {
                    (0, t.commit)(S.HIDE_PUSH)
                }
            };
        e.a = {
            namespaced: !0,
            state: C,
            mutations: A,
            getters: I,
            actions: L
        }
    },
    function (t, e, n) {
        "use strict";
        var s, a = n(7),
            i = n.n(a),
            o = n(5),
            r = n(4),
            c = n(6),
            u = function () {
                return {
                    task_id: 0,
                    task_status: 0,
                    reward: "0",
                    app_keyword: "",
                    is_manually_appstore: 0,
                    app_rank: 0,
                    app_name: "",
                    app_icon: "",
                    app_url: "",
                    app_bid: "",
                    app_exe: "",
                    tips: "",
                    expire_at: 0,
                    exclusive_count: 0,
                    exclusive_reward: "",
                    show_coupon_btn: 0,
                    double_reward: "0",
                    coupon_num: 0,
                    scheme_url: "",
                    steps: [1, 0, 0],
                    show_coupon: 0,
                    is_invest: 0,
                    go_app_store_type: 0
                }
            },
            l = u(),
            p = {
                INIT: "init",
                SYNC: "sync",
                UPDATE_STEPS: "update_steps",
                COUPON_SHOW_STATUS: "coupon_show_status"
            },
            d = {
                couponNum: function (t) {
                    return (t.double_reward - t.reward).toFixed(1)
                }
            },
            f = (s = {}, i()(s, p.INIT, function (t) {
                _.extend(t, u())
            }), i()(s, p.SYNC, function (t, e) {
                _.extend(t, e)
            }), i()(s, p.COUPON_SHOW_STATUS, function (t, e) {
                t.show_coupon = e
            }), i()(s, p.UPDATE_STEPS, function (t, e) {
                switch (e) {
                    case r.k:
                        t.steps = [1, 0, 0];
                        break;
                    case r.l:
                        t.steps = [2, 0, 0];
                        break;
                    case r.m:
                        t.steps = [2, 1, 0];
                        break;
                    case r.n:
                        t.steps = [2, 2, 1];
                        break;
                    case r.o:
                        var n = $storage.get(r.p);
                        n && n.task_id === t.task_id && _.each(n.steps.split("|"), function (e, n) {
                            t.steps[n] = parseInt(e)
                        })
                }
                $storage.set(r.p, {
                    task_id: t.task_id,
                    steps: t.steps.join("|")
                })
            }), s),
            v = {
                fetch: function (t, e) {
                    var n = t.commit;
                    return n(p.INIT), $api.ufilterSubtaskDetailLite(e).then(function (t) {
                        return t.data && t.data.payload
                    }).then(function (t) {
                        if (2 !== t.task_status) return $router.back("/tasks/lite");
                        if (t.expire_at = 1e3 * t.expire_at, -1 === t.app_rank && (t.app_rank = "X"), n(p.SYNC, t), t.show_coupon_btn) {
                            var e = $storage.get(r.q) || [],
                                s = $storage.get(r.d) + "-" + l.task_id;
                            if (-1 === e.indexOf(s)) {
                                n(p.COUPON_SHOW_STATUS, 1)
                            }
                        }
                        n(p.UPDATE_STEPS, r.o), 1 === t.open_fail && $toast.show("您下载了错误应用或尚未完成安装")
                    })
                }, checkOpenStatus: function (t) {
                    var e = t.commit;
                    $api.ufilterOpenStatus(l.task_id, 1).then(function (t) {
                        return t.data && t.data.payload
                    }).then(function (t) {
                        0 !== t.status && (1 === t.status ? (e(p.UPDATE_STEPS, r.n), o.a.$emit(o.b.STOP_LITE_POLL_OPEN_STATUS)) : (o.a.$emit(o.b.STOP_LITE_POLL_OPEN_STATUS), $toast.show("您下载了错误应用或尚未完成安装")))
                    })
                }, _checkTaskStatus: function () {
                    function t() {
                        $api.ufilterCheckStatus(l.task_id).then(function (t) {
                            return t.data && t.data.payload
                        }).then(function (e) {
                            if (4 === e.status && setTimeout(function () {
                                t()
                            }, e.wait_time), 3 === e.status) return $loading.hide(), $router.back("/tasks/lite");
                            if (2 === e.status) {
                                $loading.hide();
                                var n = e.remain_seconds,
                                    s = Math.ceil(n / 60) + "分钟",
                                    a = $popup.fromTemplate(c.b.template("时间还不够哟", "再试玩" + s + "就能领奖啦"), {
                                        effect: "scale",
                                        cssClass: "popup-task-ongoing",
                                        keep: !0,
                                        showClose: !0,
                                        buttons: [{
                                            text: "继续试玩",
                                            onClick: function (t) {
                                                a.hide(), location.href = l.scheme_url
                                            }
                                        }]
                                    });
                                a.show()
                            }
                        })
                    }
                    $loading.show("正在领取"), t()
                }, updateSteps: function (t, e) {
                    (0, t.commit)(p.UPDATE_STEPS, e)
                }
            };
        e.a = {
            namespaced: !0,
            state: l,
            mutations: f,
            getters: d,
            actions: v
        }
    },
    function (t, e, n) {
        "use strict";
        var s, a = n(8),
            i = n.n(a),
            o = n(7),
            r = n.n(o),
            c = n(6),
            u = n(3),
            l = n(5),
            p = function () {
                return {
                    tasks: [],
                    scheme_url: "",
                    zstask_info: {
                        id: 0,
                        status: 0,
                        reward: "0.0",
                        icon: "",
                        title: "",
                        hint: "",
                        bundle_id: "",
                        appstore_url: "",
                        zs_tasks: [],
                        subtask_id: "",
                        callback_url: ""
                    },
                    steps: [1, 0]
                }
            },
            d = p(),
            f = {
                INIT: "init",
                SYNC: "sync",
                FETCH_ZSTASK_INFO: "fetch_zstask_info",
                UPDATE_STEPS: "update_steps"
            },
            v = {},
            h = (s = {}, r()(s, f.INIT, function (t) {
                _.extend(t, p())
            }), r()(s, f.SYNC, function (t, e) {
                t.tasks = e.tasks
            }), r()(s, f.FETCH_ZSTASK_INFO, function (t, e) {
                t.zstask_info = e, t.scheme_url = e.scheme_url
            }), r()(s, f.UPDATE_STEPS, function (t, e) {
                t.steps = e
            }), s),
            m = {
                fetch: function (t) {
                    var e = t.commit;
                    e(f.INIT), $api.liteZstasks().then(function (t) {
                        return t.data && t.data.payload
                    }).then(function (t) {
                        e(f.SYNC, t)
                    })
                }, startZsTask: function (t, e) {
                    t.commit;
                    return $api.liteZstaskStart(e)
                }, fetchDetail: function (t, e) {
                    var s = t.commit;
                    return new i.a(function (t) {
                        $api.liteZstaskDetail(e).then(function (t) {
                            return t.data && t.data.payload
                        }).then(function (e) {
                            if (s(f.FETCH_ZSTASK_INFO, e), 1 === e.open_fail) {
                                $loading.hide();
                                var a = c.c;
                                $popup.fromTemplate(a.template, a.options).show().then(function (t) {
                                    1 === t && (location.href = n.i(u.e)(d.zstask_info.appstore_url, {
                                        return_url: location.href
                                    }))
                                })
                            }
                            t()
                        })
                    })
                }, checkOpenStatus: function (t) {
                    var e = t.commit;
                    $api.liteOpenStatus(d.zstask_info.id, 2).then(function (t) {
                        return t.data
                    }).then(function (t) {
                        var s = t.messages;
                        if (s.length > 0 && [3, 4, 6, 7].indexOf(s[0].type) > -1) return $loading.hide(), void l.a.$emit(l.b.STOP_LITE_POLL_OPEN_STATUS);
                        var a = t.payload;
                        if (0 !== a.status)
                            if (1 === a.status) e(f.UPDATE_STEPS, [1, 1]), l.a.$emit(l.b.STOP_LITE_POLL_OPEN_STATUS);
                            else {
                                $loading.hide();
                                var i = c.c,
                                    o = $popup.fromTemplate(i.template, i.options);
                                o.show().then(function (t) {
                                    1 === t && (location.href = n.i(u.e)(d.zstask_info.appstore_url, {
                                        return_url: location.href
                                    }))
                                }), l.a.$emit(l.b.STOP_LITE_POLL_OPEN_STATUS)
                            }
                    })
                }, _checkReward: function (t) {
                    t.commit;
                    $api.liteZstaskCheckState(d.zstask_info.id).then(function (t) {
                        return t.data
                    }).then(function (t) {
                        var e = t.messages;
                        if (e.length > 0 && [3, 4, 6, 7].indexOf(e[0].type) > -1) return $loading.hide(), void l.a.$emit(l.b.STOP_LITE_POLL_OPEN_STATUS);
                        var n = t.payload,
                            s = n.status;
                        if (1 === s) return void $router.back("/zstasks/lite");
                        if (2 === s) {
                            $popup.fromTemplate('\n            <div class="title text-center">试玩进行中</div>\n            <div class="desc text-center">满30秒后即可领取奖励</div>\n          ', {
                                effect: "scale",
                                cssClass: "popup-general",
                                buttons: [{
                                    text: "知道了"
                                }]
                            }).show()
                        }
                        if (0 === s || 3 === s) {
                            var a = 0 === s ? "任务未开始" : "任务已作废";
                            return void $popup.fromTemplate(function (t) {
                                return '\n              <div class="desc text-center">' + t + "</div>\n            "
                            }(a), {
                                effect: "scale",
                                cssClass: "popup-general",
                                buttons: [{
                                    text: "返回任务列表"
                                }]
                            }).show().then(function (t) {
                                $router.forward("/zstasks/lite")
                            })
                        }
                        $assistant.updateState()
                    })
                }, updateSteps: function (t, e) {
                    (0, t.commit)(f.UPDATE_STEPS, e)
                }
            };
        e.a = {
            namespaced: !0,
            state: d,
            mutations: h,
            getters: v,
            actions: m
        }
    },
    function (t, e, n) {
        "use strict";
        var s, a = n(7),
            i = n.n(a),
            o = {
                SYNC: "sync",
                MENU_SELECTED: "menuSelected",
                RESET_STATE: "resetReadState"
            },
            r = function () {
                return {
                    menus: [],
                    articles: [],
                    advs_index: [],
                    selectedChannelId: 0,
                    isMenuClick: !1,
                    no_more: !1,
                    slotbydupArr: []
                }
            }(),
            c = (s = {}, i()(s, o.SYNC, function (t, e) {
                var n = e.channels,
                    s = e.articles;
                0 === t.menus.length && (_.each(n, function (t, e) {
                    t.selected = !1, 0 === e && (t.selected = !0)
                }), t.menus = n, t.selectedChannelId = n.length > 0 && n[0].channel_id), t.isMenuClick ? (t.articles = s.data, t.isMenuClick = !1) : t.articles = t.articles.concat(s.data), t.no_more = !1, 0 === s.data.length && (t.no_more = !0);
                var a = t.advs_index,
                    i = [];
                _.each(t.articles, function (t, e) {
                    "advertisement" === t.type && -1 === a.indexOf(e) && (a.push(e), i.push({
                        id: "u3474734",
                        container: "ad_container_" + e
                    }))
                }), t.slotbydupArr = i
            }), i()(s, o.MENU_SELECTED, function (t, e) {
                _.find(t.menus, function (t) {
                    return !0 === t.selected
                }).selected = !1, e.selected = !0, t.isMenuClick = !0, t.advs_index = [], t.no_more = !1, t.selectedChannelId = e.channel_id, t.slotbydupArr = []
            }), i()(s, o.RESET_STATE, function (t, e) {
                t.articles = [], t.menus = [], t.advs_index = [], t.no_more = !1, t.slotbydupArr = []
            }), s),
            u = {
                fetchReadingList: function (t) {
                    var e = t.commit,
                        n = t.state,
                        s = n.selectedChannelId;
                    return $api.queryReadList(s).then(function (t) {
                        return t.data && t.data.payload
                    }).then(function (t) {
                        e(o.SYNC, t)
                    })
                }, saveReadAction: function () {
                    return $api.postReadAction()
                }, prefetchReading: function (t) {
                    var e = (t.commit, t.state),
                        n = e.selectedChannelId;
                    return $api.prefetchReading(n)
                }
            };
        e.a = {
            namespaced: !0,
            state: r,
            mutations: c,
            actions: u
        }
    },
    function (t, e, n) {
        "use strict";
        var s, a = n(7),
            i = n.n(a),
            o = n(69),
            r = (n.n(o), function () {
                return {
                    user_info: {
                        avatar_url: "//assets.qkcdn.com/images/66e1d570722a0f0679a591d565a5077b.png",
                        nickname: "",
                        id: 0,
                        balance: 0,
                        jfb_account: {},
                        my_total_income: 0,
                        webclip: "",
                        wx_bind: 0,
                        mobile_bind: 0,
                        withdraw_count: 0,
                        invitation_info: {
                            is_show: 0,
                            master_id: "",
                            shoutu_type: ""
                        },
                        is_inside: !0,
                        msg_num: 0,
                        open_msg: 0
                    },
                    user_profiles: {
                        avatar_url: "//qianka.b0.upaiyun.com/images/531d323ca307aaa72f174921c195d6ff.png",
                        id: 0,
                        nickname: "",
                        mobile_bind: 0,
                        mobile_number: "",
                        weixin_bind: 0,
                        wx_nickname: "",
                        wx_bind: 0,
                        qrcode_url: ""
                    },
                    user_coin: {
                        coin: "",
                        rate: "",
                        money: "",
                        last_limit: 0,
                        detail: [],
                        decreased_coin: "",
                        increased_kabi: ""
                    },
                    user_kabi: {
                        converting: 2,
                        detail: [],
                        last_limit: 0,
                        kabi: ""
                    }
                }
            }),
            c = r(),
            u = {
                mobileNumber: function (t) {
                    var e = t.user_profiles.mobile_number.split("");
                    return e.splice(3, 4, " **** "), e = e.join("")
                }
            },
            l = {
                INIT: "init",
                SYNC_USER: "sync_user",
                SYNC_PROFILES: "sync_profiles",
                CHANGE_AVATAR: "change_avatar",
                GET_COIN_DATA: "get_coin_data",
                COIN_EXCHANGE: "coin_exchange",
                GET_KABI_DATA: "get_kabi_data"
            },
            p = (s = {}, i()(s, l.INIT, function (t, e) {
                _.extend(t, r())
            }), i()(s, l.SYNC_USER, function (t, e) {
                e.balance = Number(e.balance).toFixed(2), _.extend(t.user_info, _.pick(e, _.keys(t.user_info))), e.jfb_account.is_open ? t.user_info.my_total_income = (Number(t.user_info.balance) + Number(t.user_info.jfb_account.surplus_to_price)).toFixed(2) : t.user_info.my_total_income = Number(t.user_info.balance).toFixed(2)
            }), i()(s, l.SYNC_PROFILES, function (t, e) {
                _.extend(t.user_profiles, _.pick(e, _.keys(t.user_profiles)))
            }), i()(s, l.CHANGE_AVATAR, function (t, e) {
                t.user_profiles.avatar_url = e
            }), i()(s, l.GET_COIN_DATA, function (t, e) {
                t.user_coin.coin = e.coin, t.user_coin.rate = e.rate, t.user_coin.money = (parseInt(e.coin) / parseInt(e.rate)).toFixed(2), t.user_coin.last_limit = e.coin_list.length, _.forEach(e.coin_list, function (t) {
                    var e = moment(t.datetime);
                    t.date = e.format("MM.DD"), t.time = e.format("HH:mm"), t.integral ? /^[+-]/.test(t.integral) ? (t.sign = t.integral.substring(0, 1), t.amount = t.integral.substring(1)) : (t.sign = "+", t.amount = t.integral) : (t.sign = "+", t.amount = "0")
                }), t.user_coin.detail = t.user_coin.detail.concat(e.coin_list)
            }), i()(s, l.GET_KABI_DATA, function (t, e) {
                t.user_kabi.converting = e.converting, t.user_kabi.kabi = e.kabi, t.user_kabi.last_limit = e.kabi_list.length, _.forEach(e.kabi_list, function (t) {
                    var e = moment(t.datetime);
                    t.date = e.format("MM.DD"), t.time = e.format("HH:mm"), t.integral ? /^[+-]/.test(t.integral) ? (t.sign = t.integral.substring(0, 1), t.amount = t.integral.substring(1)) : (t.sign = "+", t.amount = t.integral) : (t.sign = "+", t.amount = "0")
                }), t.user_kabi.detail = t.user_kabi.detail.concat(e.kabi_list)
            }), i()(s, l.COIN_EXCHANGE, function (t, e) {
                t.user_coin.coin = e.coin_balance, t.user_coin.decreased_coin = e.decreased_coin, t.user_coin.increased_kabi = e.increased_kabi
            }), s),
            d = {
                fetch: function (t) {
                    var e = t.commit;
                    e(l.INIT), $api.user().then(function (t) {
                        return t.data && t.data.payload
                    }).then(function (t) {
                        e(l.SYNC_USER, t)
                    })
                }, getProfile: function (t) {
                    var e = t.commit;
                    $api.userProfile().then(function (t) {
                        return t.data && t.data.payload
                    }).then(function (t) {
                        e(l.SYNC_PROFILES, t)
                    })
                }, updateAvatar: function (t, e) {
                    var n = t.commit;
                    $upload(e).then(function (t, e) {
                        var s = t.payload.files[0],
                            a = s.hash + "." + s.ext,
                            i = t.payload.uri_prefix + "/" + a;
                        $api.setUserImage({
                            avatar: a
                        }).then(function (t) {
                            n(l.CHANGE_AVATAR, i), $toast.show(t.data.payload.message)
                        })
                    }, function (t, e) {
                        $toast.show(t)
                    })
                }, updateNickname: function (t, e) {
                    t.commit;
                    $api.setUserNickname({
                        nickname: e
                    }).then(function (t) {
                        $toast.show(t.data.payload.message), $router.back("/user/profile")
                    })
                }, bindMobileSendCode: function (t, e) {
                    t.commit;
                    return $api.bindMobileSendCode(e)
                }, bindMobile: function (t, e) {
                    t.commit;
                    return $api.bindMobile(e).then(function (t) {
                        return t.data
                    }).then(function (t) {
                        if (40003 === t.err_code) {
                            $popup.fromTemplate(o.popup_has_bind_mobile.template, o.popup_has_bind_mobile.options).show().then(function (t) {
                                if (1 === t) {
                                    var e = {
                                        path: "/login",
                                        query: {
                                            backroute: "/user/bindMobile/0"
                                        }
                                    };
                                    $router.forward(e)
                                }
                            })
                        } else {
                            $toast.show(t.payload.message);
                            var e = _.get($router.currentRoute.query, "backroute", "/user/profile");
                            $router.back({
                                path: e
                            })
                        }
                    })
                }, bindWechat: function (t, e) {
                    t.commit;
                    $api.bindWechat(e).then(function (t) {
                        $toast.show(t.data.payload.message, 1e3), setTimeout(function () {
                            var t = _.get($router.currentRoute.query, "backroute", "/user/profile");
                            $router.back({
                                path: t
                            })
                        }, 1e3)
                    })
                }, unbindWechat: function () {
                    var t = function () {
                        setTimeout(function () {
                            $router.back({
                                path: "/user/profile"
                            })
                        }, 1e3)
                    };
                    $api.unbindWechat().then(function (e) {
                        $toast.show(e.data.payload.message, 1e3), t()
                    }).catch(function () {
                        t()
                    })
                }, bindMaster: function (t, e) {
                    t.commit;
                    $api.bindMaster(e).then(function (t) {
                        return t.data && t.data.payload
                    }).then(function (t) {
                        "ok" === t && ($toast.show("提交成功"), setTimeout(function () {
                            $router.forward({
                                path: "/user"
                            })
                        }, 1e3))
                    })
                }, getCoin: function (t, e) {
                    var n = t.commit;
                    return $api.getCoin(e).then(function (t) {
                        return t.data && t.data.payload
                    }).then(function (t) {
                        n(l.GET_COIN_DATA, t)
                    })
                }, coinExchange: function (t, e) {
                    var n = t.commit;
                    return $api.coinExchange(e).then(function (t) {
                        return t.data && t.data.payload
                    }).then(function (t) {
                        n(l.COIN_EXCHANGE, t)
                    })
                }, getKabi: function (t, e) {
                    var n = t.commit;
                    return $api.getKabi(e).then(function (t) {
                        return t.data && t.data.payload
                    }).then(function (t) {
                        n(l.GET_KABI_DATA, t)
                    })
                }
            };
        e.a = {
            namespaced: !0,
            state: c,
            mutations: p,
            getters: u,
            actions: d
        }
    },
    function (t, e, n) {
        "use strict";
        var s, a = n(7),
            i = n.n(a),
            o = {
                HOME_DATA: "home_data",
                GET_APPRENTICE_LIST: "getapprenticelsit",
                GET_OFFSET_NUMBER: "getoffsetnumber",
                GET_INCOME_TOTAL: "getincometotal",
                GET_INCOME_DAILY: "getincomedaily",
                GET_CONTRIBUTES: "getcontributes",
                GET_LOADING: "getloading",
                RESET_STATE: "resetState"
            },
            r = {},
            c = function () {
                return {
                    homeData: {},
                    qrcodeData: {},
                    apprentices: [],
                    total_income: 0,
                    daily: [],
                    contributes: [],
                    roadings: []
                }
            }(),
            u = (s = {}, i()(s, o.HOME_DATA, function (t, e) {
                t.qrcodeData = {
                    qrcode_image: e.qrcode_url,
                    uid: e.user_id
                }, t.homeData = e
            }), i()(s, o.GET_CONTRIBUTES, function (t, e) {
                t.contributes = t.contributes.concat(e.apprentices)
            }), i()(s, o.GET_LOADING, function (t, e) {
                t.roadings = t.roadings.concat(e.apprentices)
            }), i()(s, o.RESET_STATE, function (t) {
                t.contributes = [], t.roadings = []
            }), i()(s, o.GET_OFFSET_NUMBER, function (t, e) {
                t.offset = e.offset
            }), i()(s, o.GET_INCOME_TOTAL, function (t, e) {
                t.total_income = e.total_income
            }), i()(s, o.GET_INCOME_DAILY, function (t, e) {
                t.daily = e.daily
            }), s),
            l = {
                ApprenticeAll: function (t, e) {
                    var n = t.commit;
                    return $api.ApprenticeAll(e).then(function (t) {
                        return t.data
                    }).then(function (t) {
                        return 1 === e.valid ? (n(o.GET_CONTRIBUTES, t.payload), n(o.GET_OFFSET_NUMBER, t.payload)) : (n(o.GET_LOADING, t.payload), n(o.GET_OFFSET_NUMBER, t.payload)), t
                    })
                }, getApprenticeHome: function (t, e) {
                    var n = t.commit;
                    return $api.shoutuDashboardV5D3(e).then(function (t) {
                        return t.data && t.data.payload
                    }).then(function (t) {
                        n(o.HOME_DATA, t)
                    })
                }, newIncomeList: function (t, e) {
                    var n = t.commit;
                    return $api.newIncomeList(e).then(function (t) {
                        return t.data
                    }).then(function (t) {
                        return n(o.GET_INCOME_TOTAL, t.payload), n(o.GET_INCOME_DAILY, t.payload), t
                    })
                }
            };
        e.a = {
            namespaced: !0,
            state: c,
            getters: r,
            mutations: u,
            actions: l
        }
    },
    function (t, e, n) {
        "use strict";
        var s, a = n(7),
            i = n.n(a),
            o = n(18),
            r = n.n(o),
            c = n(28),
            u = n.n(c),
            l = n(4),
            p = n(3),
            d = {
                SYNC_DASHBOARD: "sync_dashboard",
                HAS_REWARDED: "has_rewarded",
                SYNC_AFTER_CREATE: "sync_after_create",
                UPDATE_TRIAL_CARD_INFO: "update_trial_card_info",
                REWARD_COIN_CLAIM_TODAY: "reward_coin_claim_today",
                UPDATE_REWARD: "updateReward",
                UPDATE_COIN: "updateCoin"
            },
            _ = function () {
                var t = $storage.get(l.i);
                return "{}" !== u()(t) && t
            },
            f = _() ? _() : function () {
                return {
                    avatar: "//assets.qkcdn.com/images/68535950716e6d35970f9cad2f2a33e0.png!200x200",
                    open_msg: 0,
                    msg_num: 0,
                    balance: "0.00",
                    total_reward: "0.00",
                    today_reward: "0.00",
                    uid: 0,
                    is_lite: 0,
                    level_info: {
                        level: 1,
                        next_level_need: "0.00",
                        next_level: 0,
                        next_level_more_income: "0.00"
                    },
                    has_finished_task_once: 0,
                    trial_card: {},
                    reward: "0.01",
                    has_rewarded: 0,
                    tudi_online_num: 0,
                    tusun_online_num: 0,
                    old_user_trial_card_info: {},
                    rewardPerDayTo: 0,
                    balanceTo: 0,
                    first_claim: 0,
                    exp_info: {},
                    level_rewards: [],
                    coin_balance: "0",
                    is_inside: 0,
                    has_explore_task: 0,
                    coin: 0,
                    has_new_tudi: 0,
                    bind_mobile: 0,
                    sdj_loan: 0,
                    explore_switch: 0,
                    qt_sale_switch: 0,
                    yl_article_switch: 0,
                    explore_tags: {},
                    reward_coin: 0,
                    need_up_v5: 0,
                    yl_huan_info: {},
                    invite_code: 0,
                    online_reward_open: 0,
                    next_level_coin: 0,
                    claim_level_coin_open: 0,
                    clock_switch: 0,
                    clock_extends: {
                        clock_days: 0,
                        clock_flag: 0,
                        has_team: 0,
                        today_clock_members: 0
                    },
                    clock_countdown_day: 0,
                    shoutu_v5_3_open: 0
                }
            }(),
            v = {
                hasTraiCard: function (t) {
                    return "{}" !== u()(t.trial_card)
                }, needPopupOldCard: function (t) {
                    return "{}" !== u()(t.old_user_trial_card_info)
                }, needUpgradeForce: function (t) {
                    return t.need_up_v5 && !n.i(p.a)() && !t.is_inside
                }, needPopupOpen: function (t) {
                    return !n.i(p.a)() && t.is_inside
                }, needPopupDownload: function (t) {
                    return !1
                }, showBindTip: function (t) {
                    return !t.bind_mobile && parseFloat(t.total_reward) > 6
                }
            },
            h = (s = {}, i()(s, d.SYNC_DASHBOARD, function (t, e) {
                t.avatar = e.avatar, t.msg_num = e.msg_num, t.open_msg = e.open_msg, t.balance = e.balance, t.total_reward = e.total_reward, t.today_reward = e.today_reward, t.uid = e.uid, t.is_lite = e.is_lite, t.has_finished_task_once = e.has_finished_task_once, t.reward = e.reward, t.has_rewarded = e.has_rewarded, r()(t.level_info, e.level_info), t.trial_card = e.trial_card, t.old_user_trial_card_info = e.old_user_trial_card_info, t.first_claim = e.first_claim, t.coin_balance = e.coin_balance, t.is_inside = e.is_inside, t.balanceTo = parseFloat(t.balance) + parseFloat(e.reward), t.tudi_online_num = e.tudi_online_num, t.tusun_online_num = e.tusun_online_num, t.has_explore_task = e.has_explore_task, t.has_new_tudi = e.has_new_tudi, t.bind_mobile = e.bind_mobile, t.need_up_v5 = e.need_up_v5, t.reward_coin = e.reward_coin, t.sdj_loan = e.sdj_loan, t.explore_switch = e.explore_switch, t.qt_sale_switch = e.qt_sale_switch, t.yl_article_switch = e.yl_article_switch, t.explore_tags = e.explore_tags, t.yl_huan_info = e.yl_huan_info, t.invite_code = e.invite_code, t.online_reward_open = e.online_reward_open, t.next_level_coin = e.next_level_coin, t.claim_level_coin_open = e.claim_level_coin_open, t.clock_switch = e.clock_switch, t.clock_extends = e.clock_extends, t.clock_countdown_day = e.clock_countdown_day, t.shoutu_v5_3_open = e.shoutu_v5_3_open, $storage.set(l.d, e.uid), $storage.set(l.i, t)
            }), i()(s, d.HAS_REWARDED, function (t, e) {
                t.has_rewarded = e, $storage.set(l.i, t)
            }), i()(s, d.UPDATE_TRIAL_CARD_INFO, function (t, e) {
                t.trial_card = e
            }), i()(s, d.REWARD_COIN_CLAIM_TODAY, function (t, e) {
                t.exp_info = e.exp_info, t.level_rewards = e.level_rewards, t.coin = e.coin, $storage.set(l.i, t)
            }), i()(s, d.UPDATE_REWARD, function (t) {
                t.reward = t.rewardPerDayTo, $storage.set(l.i, t)
            }), i()(s, d.UPDATE_COIN, function (t) {
                t.coin_balance = parseFloat(t.coin_balance) + parseFloat(t.coin), $storage.set(l.i, t)
            }), s),
            m = {
                createUserV5: function () {
                    return $api.createUserV5()
                }, getTrialCardInfo: function (t) {
                    var e = t.commit;
                    return $api.trailCardInfo().then(function (t) {
                        return t.data && t.data.payload
                    }).then(function (t) {
                        e(d.UPDATE_TRIAL_CARD_INFO, t)
                    })
                }, fetch: function (t) {
                    var e = t.commit;
                    return $api.dashboardV5().then(function (t) {
                        return t.data && t.data.payload
                    }).then(function (t) {
                        t.has_finished_task_once && $storage.set(l.j, 1), e(d.SYNC_DASHBOARD, t)
                    })
                }, userAction: function (t, e) {
                    t.commit;
                    return $api.userAction(e)
                }, trialCard: function (t) {
                    t.commit;
                    return $api.trialCard()
                }, hasRewarded: function (t, e) {
                    (0, t.commit)(d.HAS_REWARDED, e)
                }, rewardCoinClaimToday: function (t) {
                    var e = t.commit;
                    return $api.rewardCoinClaimToday().then(function (t) {
                        return t.data && t.data.payload
                    }).then(function (t) {
                        e(d.REWARD_COIN_CLAIM_TODAY, t)
                    })
                }
            };
        e.a = {
            namespaced: !0,
            state: f,
            getters: v,
            mutations: h,
            actions: m
        }
    },
    function (t, e, n) {
        "use strict";
        var s, a = n(28),
            i = n.n(a),
            o = n(7),
            r = n.n(o),
            c = n(3),
            u = n(43),
            l = (n.n(u), n(5)),
            p = n(4),
            d = n(12),
            f = {
                SYNC_LIST: "sync_list",
                SYNC_MY: "sync_my",
                FETCH_DETAIL: "fetch_detail",
                ASSIGN_RECEIVE_TASK: "assign_receive_task",
                INIT: "init"
            },
            v = function () {
                n.i(c.a)() && n.i(c.f)().then(function () {
                    window.location.reload()
                })
            },
            h = function () {
                return {
                    taskTist: [],
                    myList: [],
                    is_jail_broken: 0,
                    in_compare: 0,
                    detail: {},
                    ongoingId: "",
                    ongoingDay: 0,
                    receiveTasks: []
                }
            },
            m = {},
            g = h(),
            b = (s = {}, r()(s, f.SYNC_LIST, function (t, e) {
                t.is_jail_broken = e.is_jail_broken, t.is_jail_broken || (e.explore_tasks.forEach(function (t) {
                    t.status = 0
                }), t.taskTist = e.explore_tasks, t.in_compare = e.in_compare)
            }), r()(s, f.SYNC_MY, function (t, e) {
                t.myList = e, _.each(e, function (e) {
                    _.each(e.explore_tasks, function (e) {
                        1 === e.status && (t.ongoingId = e.id, t.ongoingDay = e.the_day)
                    })
                })
            }), r()(s, f.FETCH_DETAIL, function (t, e) {
                e.cdkey && (e.slogan = "" + e.slogan + e.cdkey), t.detail = e
            }), r()(s, f.ASSIGN_RECEIVE_TASK, function (t, e) {
                t.receiveTasks = e
            }), r()(s, f.INIT, function (t, e) {
                h()
            }), s),
            k = {
                exploreTaskList: function (t) {
                    var e = t.commit;
                    return $api.exploreTaskList().then(function (t) {
                        return t.data
                    }).then(function (t) {
                        if (t.err_code === p.h) return void v();
                        var n = t.payload;
                        e(f.SYNC_LIST, n)
                    })
                }, exploreMyList: function (t) {
                    var e = t.commit;
                    return $api.exploreMyList().then(function (t) {
                        return t.data
                    }).then(function (t) {
                        if (t.err_code === p.h) return void v();
                        var n = t.payload;
                        e(f.SYNC_MY, n)
                    })
                }, exploreAcquire: function (t, e, s) {
                    var a = t.commit,
                        i = s || "拼命争抢任务中";
                    $loading.show(i);
                    ! function t() {
                        return $api.exploreAcquire(e).then(function (t) {
                            return t.data
                        }).then(function (s) {
                            if (s.err_code === p.h) return void v();
                            var i = s.payload,
                                o = i.type,
                                r = i.message,
                                d = i.receive_task;
                            if (1 === o) n.i(c.g)(2e3).then(function () {
                                t()
                            });
                            else if (2 === o) n.i(c.g)(1e3).then(function () {
                                $toast.show("领取成功已加入我的探索计划"), l.a.$emit(l.b.ACQUIRE_EXPLORE_TASK_SUCCESS)
                            });
                            else if (3 === o) $toast.show(r);
                            else if (4 === o) {
                                $loading.hide(), a(f.ASSIGN_RECEIVE_TASK, d);
                                var _ = $popup.fromTemplate(u.popup_give_up_remind.template, u.popup_give_up_remind.options);
                                _.show().then(function (t) {
                                    1 === t && l.a.$emit(l.b.SHOW_EXPLORE_GIVE_UP_TASK, e)
                                })
                            }
                        })
                    }()
                }, exploreStart: function (t, e) {
                    t.commit;
                    return $api.exploreStart(e).then(function (t) {
                        return t.data
                    }).then(function (t) {
                        return t.err_code === p.h ? void v() : t.payload
                    })
                }, exploreDetail: function (t, e) {
                    var s = t.commit;
                    return $api.exploreDetail(e).then(function (t) {
                        return t.data && t.data.payload
                    }).then(function (t) {
                        if (t.app_url) {
                            var e = t.app_url;
                            e = decodeURIComponent(e).match(/:\/\/(\S*)\?t=/), e && (e = e[1], n.i(d.b)([e]))
                        }
                        s(f.FETCH_DETAIL, t)
                    })
                }, resetExploreTime: function (t) {
                    var e = t.commit;
                    return $api.resetExploreTime().then(function (t) {
                        return t.data && t.data.payload
                    }).then(function (t) {
                        "{}" !== i()(t) && e(f.FETCH_DETAIL, t)
                    })
                }, giveUpExplore: function (t, e) {
                    t.commit;
                    return $api.giveUpExplore(e)
                }, checkExplore: function (t, e) {
                    t.commit;
                    return $api.checkExploreStatus(e).then(function (t) {
                        return t.data && t.data.payload
                    }).then(function (t) {
                        0 === t.type ? $toast.show("任务未开始") : 1 === t.type && $toast.show("任务进行中")
                    })
                }
            };
        e.a = {
            namespaced: !0,
            state: g,
            getters: m,
            mutations: b,
            actions: k
        }
    },
    function (t, e, n) {
        "use strict";
        var s, a = n(7),
            i = n.n(a),
            o = {
                GET_GROUPREGISTER_INFO: "get_groupregister_info",
                GET_GROUPPAY_INFO: "getgrouppay_info"
            },
            r = {},
            c = function () {
                return {
                    groupinfo: {
                        is_open: 0,
                        is_clock: 0,
                        the_day: 1,
                        open_reward: 0,
                        reward: 0,
                        members: [{
                            user_id: 12345,
                            icon: "",
                            is_clock: 0,
                            role: 1
                        }]
                    },
                    teamInfo: {
                        user_id: 0,
                        icon: "",
                        role: 0
                    }
                }
            }(),
            u = (s = {}, i()(s, o.GET_GROUPREGISTER_INFO, function (t, e) {
                t.groupinfo = e
            }), i()(s, o.GET_GROUPPAY_INFO, function (t, e) {
                t.teamInfo = e
            }), s),
            l = {
                groupResigter: function (t) {
                    var e = t.commit;
                    return $api.groupResigter().then(function (t) {
                        return t.data
                    }).then(function (t) {
                        e(o.GET_GROUPREGISTER_INFO, t.payload)
                    })
                }, groupSignIn: function (t) {
                    t.commit;
                    return $api.groupSignIn().then(function (t) {
                        return t.data
                    }).then(function (t) {
                        return t
                    })
                }, groupExit: function (t) {
                    t.commit;
                    return $api.groupExit().then(function (t) {
                        return t.data
                    }).then(function (t) {
                        return t
                    })
                }, groupPayTeam: function (t) {
                    var e = t.commit;
                    return $api.groupPayTeam().then(function (t) {
                        return t.data
                    }).then(function (t) {
                        return e(o.GET_GROUPPAY_INFO, t.payload), t
                    })
                }, groupInvited: function (t, e) {
                    t.commit;
                    return $api.groupInvited(e).then(function (t) {
                        return t.data
                    }).then(function (t) {
                        return t
                    })
                }
            };
        e.a = {
            namespaced: !0,
            state: c,
            getters: r,
            mutations: u,
            actions: l
        }
    },
    function (t, e, n) {
        "use strict";
        var s, a = n(7),
            i = n.n(a),
            o = n(18),
            r = n.n(o),
            c = {
                SYNC: "sync",
                RESET_STATE: "resetState"
            },
            u = function () {
                return {
                    level: "",
                    level_exp: "",
                    level_coin: "",
                    tomorrow_reward: "",
                    next_level_need: "1",
                    next_level_exp: "1",
                    next_level: "",
                    next_level_more_income: "",
                    next_level_more_coin: "",
                    next_level_coin: "",
                    table_list: [],
                    level_list: [],
                    claim_level_coin_open: 0
                }
            },
            l = {
                expPerc: function (t) {
                    var e = t.next_level_exp;
                    return 100 * (1 - (t.next_level_need / e).toFixed(2))
                }
            },
            p = u(),
            d = (s = {}, i()(s, c.SYNC, function (t, e) {
                t.level = e.level, t.level_exp = e.level_exp, t.level_coin = e.level_coin, t.tomorrow_reward = e.tomorrow_reward, t.next_level = e.next_level, t.next_level_need = e.next_level_need, t.next_level_exp = e.next_level_exp, t.next_level_more_income = e.next_level_more_income, t.next_level_more_coin = e.next_level_more_coin, t.next_level_coin = e.next_level_coin, t.level_list = e.level_list, t.table_list = e.table_list, t.claim_level_coin_open = e.claim_level_coin_open
            }), i()(s, c.RESET_STATE, function (t) {
                r()(t, u())
            }), s),
            _ = {
                fetchDashboard: function (t, e) {
                    var n = t.commit;
                    t.state;
                    return $api.fetchLevelDashboard().then(function (t) {
                        return t.data && t.data.payload
                    }).then(function (t) {
                        n(c.SYNC, t)
                    }).catch(function (t) {})
                }
            };
        e.a = {
            namespaced: "level",
            state: p,
            getters: l,
            mutations: d,
            actions: _
        }
    },
    function (t, e, n) {
        "use strict";
        var s, a = n(7),
            i = n.n(a),
            o = {
                MESSAGE_LIST: "message_list",
                RESET: "reset"
            },
            r = {},
            c = function () {
                return {
                    messageList: [],
                    noMoreData: !1
                }
            }(),
            u = (s = {}, i()(s, o.MESSAGE_LIST, function (t, e) {
                t.messageList = t.messageList.concat(e), 0 === t.messageList.length ? t.noMoreData = !1 : (t.messageList.length < 5 || 0 === e.length) && (t.noMoreData = !0)
            }), i()(s, o.RESET, function (t) {
                t.messageList = [], t.noMoreData = !1
            }), s),
            l = {
                fetchMessage: function (t, e) {
                    var n = t.commit;
                    return $api.userMessage(e).then(function (t) {
                        return t.data && t.data.payload
                    }).then(function (t) {
                        n(o.MESSAGE_LIST, t.message_list)
                    })
                }
            };
        e.a = {
            namespaced: !0,
            state: c,
            getters: r,
            mutations: u,
            actions: l
        }
    },
    function (t, e, n) {
        "use strict";
        var s, a = n(7),
            i = n.n(a),
            o = n(142),
            r = n.n(o),
            c = n(34),
            u = n.n(c),
            l = {
                SYNC: "sync",
                RESET_DATA: "resetData",
                SORT_TO_END: "sortToEnd"
            },
            p = function () {
                return {
                    miss_list: [],
                    top_list: [],
                    offset: 0,
                    limit: 50,
                    no_more: !0
                }
            }(),
            d = {
                picked_list: function (t) {
                    return u.a.filter(t.miss_list, function (t) {
                        return 0 !== t.got_type && 1 !== t.got_type
                    })
                }, not_picked_list: function (t) {
                    return u.a.filter(t.miss_list, function (t) {
                        return 0 === t.got_type || 1 === t.got_type
                    })
                }
            },
            _ = (s = {}, i()(s, l.SYNC, function (t, e) {
                var n;
                if ((n = t.miss_list).push.apply(n, r()(e.miss_list)), e.top_list && e.top_list.length > 0) {
                    var s;
                    (s = t.top_list).push.apply(s, r()(e.top_list))
                }
                e.miss_list.length < t.limit ? t.no_more = !0 : (t.offset = e.miss_list[t.limit - 1].id, t.no_more = !1)
            }), i()(s, l.RESET_DATA, function (t, e) {
                t.miss_list = [], t.offset = 0, t.no_more = !0
            }), i()(s, l.SORT_TO_END, function (t, e) {
                e.got_type = 1, $toast.show("捡漏成功，获取" + e.reward + "元")
            }), s),
            f = {
                fetchMissList: function (t) {
                    var e = t.commit,
                        n = t.state,
                        s = n.offset,
                        a = n.limit;
                    return $api.fetchMissList({
                        offset: s,
                        limit: a
                    }).then(function (t) {
                        return t.data && t.data.payload
                    }).then(function (t) {
                        t.miss_list || (t.miss_list = []), e(l.SYNC, t)
                    })
                }, reclaimtMiss: function (t, e) {
                    var n = t.commit;
                    t.state;
                    if (0 === e.got_type) return $api.reclaimtMiss(e.id).then(function (t) {
                        n(l.SORT_TO_END, e)
                    })
                }
            };
        e.a = {
            namespaced: !0,
            state: p,
            getters: d,
            mutations: _,
            actions: f
        }
    },
    function (t, e, n) {
        "use strict";
        var s, a = n(7),
            i = n.n(a),
            o = {
                SYNC: "sync",
                MENU_SELECTED: "menuSelected",
                RESET_STATE: "resetReadState"
            },
            r = function () {
                return {
                    menus: [],
                    articles: [],
                    advs_index: [],
                    selectedChannelId: 0,
                    isMenuClick: !1,
                    no_more: !1,
                    slotbydupArr: []
                }
            }(),
            c = (s = {}, i()(s, o.SYNC, function (t, e) {
                var n = e.channels,
                    s = e.articles;
                0 === t.menus.length && (_.each(n, function (t, e) {
                    t.selected = !1, 0 === e && (t.selected = !0)
                }), t.menus = n, t.selectedChannelId = n.length > 0 && n[0].channel_id), t.isMenuClick ? (t.articles = s.data, t.isMenuClick = !1) : t.articles = t.articles.concat(s.data), t.no_more = !1, 0 === s.data.length && (t.no_more = !0);
                var a = t.advs_index,
                    i = [];
                _.each(t.articles, function (t, e) {
                    "advertisement" === t.type && -1 === a.indexOf(e) && (a.push(e), i.push({
                        id: "u3474734",
                        container: "ad_container_" + e
                    }))
                }), t.slotbydupArr = i
            }), i()(s, o.MENU_SELECTED, function (t, e) {
                _.find(t.menus, function (t) {
                    return !0 === t.selected
                }).selected = !1, e.selected = !0, t.isMenuClick = !0, t.advs_index = [], t.no_more = !1, t.selectedChannelId = e.channel_id, t.slotbydupArr = []
            }), i()(s, o.RESET_STATE, function (t, e) {
                t.articles = [], t.menus = [], t.advs_index = [], t.no_more = !1, t.slotbydupArr = []
            }), s),
            u = {
                fetchReadingList: function (t) {
                    var e = t.commit,
                        n = t.state,
                        s = n.selectedChannelId;
                    return $api.queryReadList(s).then(function (t) {
                        return t.data && t.data.payload
                    }).then(function (t) {
                        e(o.SYNC, t)
                    })
                }, prefetchReading: function (t) {
                    var e = (t.commit, t.state),
                        n = e.selectedChannelId;
                    return $api.prefetchReading(n)
                }, saveReadAction: function () {
                    return $api.postReadAction()
                }
            };
        e.a = {
            namespaced: !0,
            state: r,
            mutations: c,
            actions: u
        }
    },
    function (t, e, n) {
        "use strict";
        var s, a = n(7),
            i = n.n(a),
            o = n(18),
            r = n.n(o),
            c = {
                SYNC: "sync",
                UPDATE_REWARD: "update_reward",
                APPEND_LIST: "append_list",
                RESET: "reset"
            },
            u = function () {
                return {
                    apprenticesContainer: [],
                    grandsonContainer: [],
                    already_reward: "0",
                    current_reward: "0",
                    is_vip: 0,
                    apprentices: [],
                    grandson: [],
                    share_shoutu_url_qq: "",
                    share_shoutu_url_wx: ""
                }
            },
            l = u(),
            p = {},
            d = (s = {}, i()(s, c.SYNC, function (t, e) {
                if (t.already_reward = e.already_reward, t.current_reward = e.current_reward, t.share_shoutu_url_qq = e.share_shoutu_url_qq, t.share_shoutu_url_wx = e.share_shoutu_url_wx, t.is_vip = e.is_vip, t.apprenticesContainer = e.apprentices.filter(function (t) {
                    return 1 === t.shoutu_type
                }), t.grandsonContainer = e.apprentices.filter(function (t) {
                    return 2 === t.shoutu_type
                }), t.apprentices = t.apprenticesContainer.slice(0, 25), t.apprentices.length < 25 && t.grandsonContainer.length > 0) {
                    var n = 25 - t.apprentices.length;
                    t.grandson = t.grandsonContainer.slice(0, n)
                }
            }), i()(s, c.UPDATE_REWARD, function (t, e) {
                var n = e.reward;
                t.already_reward += n, t.current_reward -= n
            }), i()(s, c.APPEND_LIST, function (t) {
                if (0 === t.grandson.length) {
                    var e = t.apprentices.length;
                    t.apprentices = t.apprentices.concat(t.apprenticesContainer.slice(e, e + 25));
                    var n = t.apprentices.length % 25;
                    t.apprentices.length === t.apprenticesContainer.length && (t.grandson = t.grandson.concat(t.grandsonContainer.slice(0, 25 - n)))
                } else {
                    var s = t.grandson.length;
                    t.grandson = t.grandson.concat(t.grandsonContainer.slice(s, s + 25))
                }
            }), i()(s, c.RESET, function (t) {
                r()(t, u())
            }), s),
            _ = {
                fetch: function (t) {
                    var e = t.commit;
                    return $api.onlineRewardDashboard().then(function (t) {
                        return t.data && t.data.payload
                    }).then(function (t) {
                        return e(c.SYNC, t), t
                    })
                }, rewardAll: function (t) {
                    var e = t.commit;
                    return $api.onlineAcquire().then(function (t) {
                        return t.data && t.data.payload
                    }).then(function (t) {
                        return e(c.UPDATE_REWARD, t), t
                    })
                }
            };
        e.a = {
            namespaced: !0,
            state: l,
            getters: p,
            mutations: d,
            actions: _
        }
    },
    function (t, e, n) {
        "use strict";
        var s, a = n(7),
            i = n.n(a),
            o = n(18),
            r = n.n(o),
            c = n(140),
            u = (n.n(c), n(94)),
            l = n.n(u),
            p = {
                GOODS_LIST: "goods_list",
                MENU_SELECTED: "menuSelected",
                GOODS_INFO: "goods_info",
                SEARCH_LIST: "search_list",
                ORDER_INFO: "order_info",
                ORDER_LIST: "order_list",
                DETAIL_PIC_DES: "detail_pic_des",
                RESET_STATE: "reset_state",
                SHARE_URL: "share_url",
                TAO_KOU_LING: "tao_kou_ling",
                IS_AGENT_ID: "is_agent_id",
                RESET: "reset",
                IS_WITHDRAWING: "is_withdrawing",
                SAVE_TAB: "save_tab",
                IS_WITHDRAWING_TEXT: "is_withdrawing_text",
                INCREASE_PAGE: "increase_page",
                RESET_PAGE: "reset_page",
                IS_EMPTY: "is_empty",
                SEARCH_STR: "search_str",
                TOAST_TIP: "toast_tip"
            },
            d = function () {
                return {
                    agent_info: {},
                    goodsList: [],
                    goodsDetailInfo: {},
                    searchList: [],
                    orderInfo: {
                        agent: {
                            accountBalance: 0,
                            todayCommissionSelf: 0,
                            withdrawAmount: 0
                        },
                        unsettledAmount: 0
                    },
                    orderList: [],
                    selectedGoodsType: 0,
                    isMenuClick: !1,
                    pcDescContent: "",
                    shareUrl: "",
                    shareScheme: "",
                    isBindPhone: 1,
                    isWithdrawing: 0,
                    taoKouLing: "",
                    tabId: 0,
                    withDrawText: "转入零钱",
                    empty: 0,
                    goodsPageNum: 1,
                    searchStr: "",
                    toastTip: ""
                }
            },
            _ = d(),
            f = (s = {}, i()(s, p.TOAST_TIP, function (t, e) {
                t.toastTip = e
            }), i()(s, p.SEARCH_STR, function (t, e) {
                t.searchStr = e
            }), i()(s, p.IS_EMPTY, function (t) {
                t.empty = 1
            }), i()(s, p.IS_WITHDRAWING_TEXT, function (t, e) {
                t.withDrawText = e
            }), i()(s, p.SAVE_TAB, function (t, e) {
                t.tabId = e
            }), i()(s, p.GOODS_LIST, function (t, e) {
                t.goodsList = t.goodsList.concat(e.goodsList)
            }), i()(s, p.GOODS_INFO, function (t, e) {
                t.goodsDetailInfo = e.goods
            }), i()(s, p.SEARCH_LIST, function (t, e) {
                t.searchList = e.goodsList, 0 === e.goodsList.length ? t.empty = 1 : t.empty = 0
            }), i()(s, p.SHARE_URL, function (t, e) {
                t.shareUrl = e.url, t.shareScheme = e.app_scheme
            }), i()(s, p.TAO_KOU_LING, function (t, e) {
                t.taoKouLing = e
            }), i()(s, p.IS_AGENT_ID, function (t, e) {
                t.isBindPhone = e, t.empty = 1
            }), i()(s, p.ORDER_INFO, function (t, e) {
                t.orderInfo = r()({}, t.orderInfo, e)
            }), i()(s, p.ORDER_LIST, function (t, e) {
                t.orderList = t.orderList.concat(e.agentOrderList), 0 === t.orderList.length ? t.empty = 1 : t.empty = 0
            }), i()(s, p.MENU_SELECTED, function (t, e) {
                t.isMenuClick = !0, t.selectedGoodsType = e.id, t.searchList = [], t.goodsList = [], t.goodsPageNum = 1
            }), i()(s, p.INCREASE_PAGE, function (t) {
                t.goodsPageNum = t.goodsPageNum + 1
            }), i()(s, p.RESET_STATE, function (t, e) {
                t.searchList = [], t.no_more = !1
            }), i()(s, p.DETAIL_PIC_DES, function (t, e) {
                t.pcDescContent = e.data.pcDescContent
            }), i()(s, p.IS_WITHDRAWING, function (t, e) {
                t.isWithdrawing = e
            }), i()(s, p.RESET, function (t) {
                t.goodsDetailInfo = {}, t.pcDescContent = "", t.toastTip = "", t.isBindPhone = ""
            }), i()(s, p.RESET_PAGE, function (t) {
                r()(t, d())
            }), s),
            v = {
                fetchData: function (t, e) {
                    var n = t.commit;
                    return $api.saleDashboard(e).then(function (t) {
                        return t.data
                    }).then(function (t) {
                        var e = t.payload;
                        e.url && axios.get(e.url).then(function (t) {
                            n(p.GOODS_LIST, t.data)
                        })
                    })
                }, fetchDetail: function (t, e) {
                    var n = t.commit;
                    return $api.saleDetail(e).then(function (t) {
                        return t.data
                    }).then(function (t) {
                        if (40001 === t.err_code) return void n(p.IS_AGENT_ID, 0);
                        var e = t.payload;
                        e.url && axios.get(e.url).then(function (t) {
                            n(p.GOODS_INFO, t.data)
                        })
                    })
                }, fetchDetailPicDes: function (t, e) {
                    var n = t.commit;
                    return l()('https://h5api.m.taobao.com/h5/mtop.taobao.detail.getdesc/6.0/?data={"id":"' + e + '"}', function (t, e) {
                        t || n(p.DETAIL_PIC_DES, e)
                    })
                }, fetchTaoKouLing: function (t, e) {
                    var n = t.commit,
                        s = 10;
                    return function t(e) {
                        if (s > 0 && s < 10 && n(p.TOAST_TIP, "系统错误，请稍后再试"), 0 === s) return void n(p.TOAST_TIP, "系统错误，请刷新重试");
                        $api.saleTaoKouLing(e).then(function (t) {
                            return t.data
                        }).then(function (a) {
                            if (40001 === a.err_code) return void n(p.IS_AGENT_ID, 0);
                            if (40002 === a.err_code) s--, setTimeout(function () {
                                t(e)
                            }, 300);
                            else if (0 !== a.err_code) n(p.TOAST_TIP, a.err_msg);
                            else {
                                var i = a.payload;
                                i.url && axios.get(i.url).then(function (t) {
                                    return t.data
                                }).then(function (t) {
                                    n(p.TAO_KOU_LING, t.twoInOneKouling)
                                })
                            }
                        })
                    }(e)
                }, fetchSaleShare: function (t, e) {
                    var n = t.commit,
                        s = 10;
                    return function t(e) {
                        if (0 === s) return void $toast.show("系统错误，请稍后再试");
                        $api.saleShare(e).then(function (t) {
                            return t.data
                        }).then(function (a) {
                            if (40001 === a.err_code) {
                                return void $popup.fromTemplate(c.popup_bind_phone.template, c.popup_bind_phone.options).show().then(function (t) {
                                    if (1 === t) {
                                        $router.forward({
                                            path: "/user/bindMobile/0",
                                            query: {
                                                backroute: "/sale/list"
                                            }
                                        })
                                    }
                                })
                            }
                            40002 === a.err_code ? (s--, setTimeout(function () {
                                t(e)
                            }, 300)) : 0 !== a.err_code ? $toast.show(a.err_msg) : n(p.SHARE_URL, a.payload)
                        })
                    }(e)
                }, fetchSearch: function (t, e) {
                    var n = t.commit;
                    return $api.saleSearch(e).then(function (t) {
                        return t.data
                    }).then(function (t) {
                        var e = t.payload;
                        if (e.url) return axios.get(e.url).then(function (t) {
                            n(p.SEARCH_LIST, t.data)
                        })
                    })
                }, fetchOrder: function (t, e) {
                    var n = t.commit;
                    return $api.fetchMine(e).then(function (t) {
                        return t.data
                    }).then(function (t) {
                        var e = t.payload;
                        if (e.url) return axios.get(e.url).then(function (t) {
                            n(p.ORDER_INFO, t.data)
                        })
                    })
                }, fetchOrderList: function (t, e) {
                    var n = t.commit,
                        s = 10;
                    return function t(e) {
                        if (0 === s) return void $toast.show("系统错误，请稍后再试");
                        $api.saleOrder(e).then(function (t) {
                            return t.data
                        }).then(function (a) {
                            if (40001 === a.err_code) n(p.IS_AGENT_ID, 0);
                            else if (40002 === a.err_code) s--, setTimeout(function () {
                                t(e)
                            }, 300), n(p.IS_EMPTY);
                            else if (0 !== a.err_code) $toast.show(a.err_msg), n(p.IS_EMPTY);
                            else {
                                var i = a.payload;
                                i.url && axios.get(i.url).then(function (t) {
                                    n(p.ORDER_LIST, t.data)
                                })
                            }
                        })
                    }(e)
                }, fetchFindOrder: function (t, e) {
                    var n = (t.commit, 10);
                    return function t(e) {
                        if (0 === n) return void $toast.show("系统错误，请稍后再试");
                        $api.saleFindOrder(e).then(function (t) {
                            return t.data
                        }).then(function (s) {
                            if (40001 === s.err_code) {
                                return void $popup.fromTemplate(c.popup_bind_phone.template, c.popup_bind_phone.options).show().then(function (t) {
                                    if (1 === t) {
                                        $router.forward({
                                            path: "/user/bindMobile/0",
                                            query: {
                                                backroute: "/sale/orders"
                                            }
                                        })
                                    }
                                })
                            }
                            if (40002 === s.err_code) n--, setTimeout(function () {
                                t(e)
                            }, 300);
                            else if (0 !== s.err_code) $toast.show(s.err_msg);
                            else {
                                var a = s.payload;
                                a.url && axios.get(a.url).then(function (t) {
                                    return t.data
                                }).then(function (t) {
                                    $toast.show("正在同步订单，3分钟后可查看结果")
                                })
                            }
                        })
                    }(e)
                }, fetchWithdrawStatus: function (t, e) {
                    var n = t.commit;
                    return $api.saleWithdrawStatus().then(function (t) {
                        return t.data.payload
                    }).then(function (t) {
                        n(p.IS_WITHDRAWING, t.is_withdrawing)
                    })
                }, fetchSaveWithdraw: function (t, e) {
                    t.commit;
                    return $api.saleSaveWithdraw(e).then(function (t) {
                        return t.data
                    }).then(function (t) {
                        40001 === t.err_code && $toast.show("提现金额无效"), 40003 === t.err_code && $toast.show("提现失败，请稍后再试"), "ok" === t.payload && $toast.show("已成功转入，可前往零钱提现")
                    })
                }
            };
        e.a = {
            namespaced: !0,
            state: _,
            mutations: f,
            actions: v
        }
    },
    function (t, e, n) {
        "use strict";
        var s, a = n(7),
            i = n.n(a),
            o = n(18),
            r = n.n(o),
            c = n(138),
            u = (n.n(c), n(94)),
            l = n.n(u),
            p = {
                GOODS_LIST: "goods_list",
                MENU_SELECTED: "menuSelected",
                GOODS_INFO: "goods_info",
                SEARCH_LIST: "search_list",
                ORDER_INFO: "order_info",
                ACCOUNT_INFO: "account_info",
                ORDER_LIST: "order_list",
                DETAIL_PIC_DES: "detail_pic_des",
                RESET_STATE: "reset_state",
                SHARE_URL: "share_url",
                TAO_KOU_LING: "tao_kou_ling",
                IS_AGENT_ID: "is_agent_id",
                RESET: "reset",
                IS_WITHDRAWING: "is_withdrawing",
                SAVE_TAB: "save_tab",
                IS_WITHDRAWING_TEXT: "is_withdrawing_text",
                INCREASE_PAGE: "increase_page",
                RESET_PAGE: "reset_page",
                IS_EMPTY: "is_empty",
                SEARCH_STR: "search_str",
                TOAST_TIP: "toast_tip",
                CONTENT_SHAER_LIST: "content_share_list",
                CONTENT_SHARE_OFFSET: "content_share_offset",
                GETARTICLEID: "get_article_id",
                SWIPER_LIST: "swiperlist",
                ARTICLE_DETAIL_INFO: "aritcle_detail_info",
                SHARELINK: "share_link",
                GET_GRADESHARE_LIST: "get_gradeshare_list",
                GRADE_LIST_OFFSET: "grade_list_offset",
                RESET_ORDER_DATA: "reset_order_data"
            },
            d = function () {
                return {
                    agent_info: {},
                    goodsList: [],
                    goodsDetailInfo: {},
                    searchList: [],
                    orderInfo: {
                        agent: {
                            accountBalance: 0,
                            todayCommission: 0,
                            todayCommissionSelf: 0,
                            withdrawAmount: 0
                        },
                        unsettledAmount: 0
                    },
                    accountInfo: {
                        accountBalance: "",
                        todayCommission: "",
                        unsettledAmount: "",
                        selfOrderNum: "",
                        withdrawAmount: "",
                        totalReading: "",
                        totalCoin: "",
                        my_share_list: []
                    },
                    orderList: [],
                    selectedGoodsType: 0,
                    isMenuClick: !1,
                    pcDescContent: "",
                    shareUrl: "",
                    qrcodeUrl: "",
                    shareScheme: "",
                    isBindPhone: 1,
                    isWithdrawing: 0,
                    taoKouLing: "",
                    tabId: 0,
                    withDrawText: "转入零钱",
                    empty: 0,
                    emptyShare: 0,
                    goodsPageNum: 1,
                    searchStr: "",
                    toastTip: "",
                    shareContentList: [],
                    noMoreData: !1,
                    noMoreDataTaobao: !1,
                    noMoreDataShare: !1,
                    articleId: 0,
                    swiperList: [],
                    openSwitch: 0,
                    aritcleInfo: {},
                    shareOffset: 0,
                    shareLink: "",
                    shareContentScheme: "",
                    salesGradeShareList: [],
                    salesgradeOffset: 0
                }
            },
            _ = {},
            f = d(),
            v = (s = {}, i()(s, p.TOAST_TIP, function (t, e) {
                t.toastTip = e
            }), i()(s, p.SEARCH_STR, function (t, e) {
                t.searchStr = e
            }), i()(s, p.IS_EMPTY, function (t) {
                t.empty = 1
            }), i()(s, p.IS_WITHDRAWING_TEXT, function (t, e) {
                t.withDrawText = e
            }), i()(s, p.SAVE_TAB, function (t, e) {
                t.tabId = e
            }), i()(s, p.SWIPER_LIST, function (t, e) {
                t.swiperList = e.lunbo_list, t.openSwitch = e.open_switch
            }), i()(s, p.GOODS_LIST, function (t, e) {
                t.goodsList = t.goodsList.concat(e.goodsList), t.isMenuClick = !1
            }), i()(s, p.GOODS_INFO, function (t, e) {
                t.goodsDetailInfo = e.goods
            }), i()(s, p.SEARCH_LIST, function (t, e) {
                t.searchList = e.goodsList, 0 === e.goodsList.length ? t.empty = 1 : t.empty = 0
            }), i()(s, p.SHARE_URL, function (t, e) {
                t.shareUrl = e.url, t.shareScheme = e.app_scheme, t.qrcodeUrl = e.qrcode_url
            }), i()(s, p.TAO_KOU_LING, function (t, e) {
                t.taoKouLing = e
            }), i()(s, p.IS_AGENT_ID, function (t, e) {
                t.isBindPhone = e, t.empty = 1
            }), i()(s, p.ORDER_INFO, function (t, e) {
                t.orderInfo = r()({}, t.orderInfo, e)
            }), i()(s, p.ACCOUNT_INFO, function (t, e) {
                t.accountInfo = r()({}, t.accountInfo, e), t.salesGradeShareList = e.my_share_list
            }), i()(s, p.ORDER_LIST, function (t, e) {
                t.orderList = t.orderList.concat(e.agentOrderList), 0 === t.orderList.length ? t.empty = 1 : t.empty = 0, 0 === e.agentOrderList.length && (t.noMoreData = !0, t.noMoreDataTaobao = !0)
            }), i()(s, p.GETARTICLEID, function (t, e) {
                t.articleId = e
            }), i()(s, p.MENU_SELECTED, function (t, e) {
                t.isMenuClick = !0, t.selectedGoodsType = t.tabId, t.searchList = [], t.goodsList = [], t.goodsPageNum = 1
            }), i()(s, p.INCREASE_PAGE, function (t) {
                t.goodsPageNum = t.goodsPageNum + 1
            }), i()(s, p.RESET_STATE, function (t, e) {
                t.searchList = [], t.no_more = !1
            }), i()(s, p.DETAIL_PIC_DES, function (t, e) {
                t.pcDescContent = e.data.pcDescContent
            }), i()(s, p.IS_WITHDRAWING, function (t, e) {
                t.isWithdrawing = e
            }), i()(s, p.RESET, function (t) {
                t.goodsDetailInfo = {}, t.pcDescContent = "", t.toastTip = "", t.isBindPhone = ""
            }), i()(s, p.RESET_PAGE, function (t) {
                r()(t, d())
            }), i()(s, p.CONTENT_SHARE_OFFSET, function (t) {
                0 !== t.shareContentList.length ? t.shareOffset = t.shareContentList[t.shareContentList.length - 1].id : t.shareOffset = 0
            }), i()(s, p.CONTENT_SHAER_LIST, function (t, e) {
                if (!e.payload.length) return void(t.noMoreData = !0);
                t.shareContentList = t.shareContentList.concat(e.payload)
            }), i()(s, p.ARTICLE_DETAIL_INFO, function (t, e) {
                t.aritcleInfo = e.payload
            }), i()(s, p.SHARELINK, function (t, e) {
                t.shareLink = e.payload.url, t.shareContentScheme = e.payload.scheme
            }), i()(s, p.GRADE_LIST_OFFSET, function (t) {
                0 !== t.salesGradeShareList.length ? t.salesgradeOffset = t.salesGradeShareList[t.salesGradeShareList.length - 1].id : t.salesgradeOffset = t.accountInfo.my_share_list[t.accountInfo.my_share_list.length - 1].id
            }), i()(s, p.GET_GRADESHARE_LIST, function (t, e) {
                if (!e.payload.length) return t.noMoreData = !0, void(t.noMoreDataShare = !0);
                t.salesGradeShareList = t.salesGradeShareList.concat(e.payload)
            }), i()(s, p.RESET_ORDER_DATA, function (t, e) {
                t.accountInfo = d().accountInfo, t.orderList = d().orderList
            }), s),
            h = {
                fetchData: function (t, e) {
                    var n = t.commit;
                    return $api.salesDashboard(e).then(function (t) {
                        return t.data
                    }).then(function (t) {
                        var e = t.payload;
                        if (e.url) return axios.get(e.url).then(function (t) {
                            n(p.GOODS_LIST, t.data)
                        })
                    })
                }, fetchSwiper: function (t, e) {
                    var n = t.commit;
                    return $api.salesSwiper().then(function (t) {
                        return t.data.payload
                    }).then(function (t) {
                        n(p.SWIPER_LIST, t)
                    })
                }, fetchDetail: function (t, e) {
                    var n = t.commit;
                    return $api.saleDetail(e).then(function (t) {
                        return t.data
                    }).then(function (t) {
                        if (40001 === t.err_code) return void n(p.IS_AGENT_ID, 0);
                        var e = t.payload;
                        e.url && axios.get(e.url).then(function (t) {
                            n(p.GOODS_INFO, t.data)
                        })
                    })
                }, fetchDetailPicDes: function (t, e) {
                    var n = t.commit;
                    return l()('https://h5api.m.taobao.com/h5/mtop.taobao.detail.getdesc/6.0/?data={"id":"' + e + '"}', function (t, e) {
                        t || n(p.DETAIL_PIC_DES, e)
                    })
                }, fetchTaoKouLing: function (t, e) {
                    var n = t.commit,
                        s = 10;
                    return function t(e) {
                        if (s > 0 && s < 10 && n(p.TOAST_TIP, "系统错误，请稍后再试"), 0 === s) return void n(p.TOAST_TIP, "系统错误，请刷新重试");
                        $api.saleTaoKouLing(e).then(function (t) {
                            return t.data
                        }).then(function (a) {
                            if (40001 === a.err_code) return void n(p.IS_AGENT_ID, 0);
                            if (40002 === a.err_code) s--, setTimeout(function () {
                                t(e)
                            }, 300);
                            else if (0 !== a.err_code) n(p.TOAST_TIP, a.err_msg);
                            else {
                                var i = a.payload;
                                i.url && axios.get(i.url).then(function (t) {
                                    return t.data
                                }).then(function (t) {
                                    n(p.TAO_KOU_LING, t.twoInOneKouling)
                                })
                            }
                        })
                    }(e)
                }, fetchSaleShare: function (t, e) {
                    var n = t.commit,
                        s = 10;
                    return function t(e) {
                        if (0 === s) return void $toast.show("系统错误，请稍后再试");
                        $api.saleShare(e).then(function (t) {
                            return t.data
                        }).then(function (a) {
                            if (40001 === a.err_code) {
                                return void $popup.fromTemplate(c.popup_bind_phone.template, c.popup_bind_phone.options).show().then(function (t) {
                                    if (1 === t) {
                                        $router.forward({
                                            path: "/user/bindMobile/0",
                                            query: {
                                                backroute: "/sales"
                                            }
                                        })
                                    }
                                })
                            }
                            40002 === a.err_code ? (s--, setTimeout(function () {
                                t(e)
                            }, 300)) : 0 !== a.err_code ? $toast.show(a.err_msg) : n(p.SHARE_URL, a.payload)
                        })
                    }(e)
                }, fetchSearch: function (t, e) {
                    var n = t.commit;
                    return $api.saleSearch(e).then(function (t) {
                        return t.data
                    }).then(function (t) {
                        var e = t.payload;
                        if (e.url) return axios.get(e.url).then(function (t) {
                            n(p.SEARCH_LIST, t.data)
                        })
                    })
                }, fetchOrder: function (t, e) {
                    var n = t.commit;
                    return $api.fetchMine(e).then(function (t) {
                        return t.data
                    }).then(function (t) {
                        var e = t.payload;
                        if (e.url) return axios.get(e.url).then(function (t) {
                            n(p.ORDER_INFO, t.data)
                        })
                    })
                }, fetchOrderList: function (t, e) {
                    var n = t.commit,
                        s = 10;
                    return function t(e) {
                        if (0 === s) return void $toast.show("系统错误，请稍后再试");
                        $api.saleOrder(e).then(function (t) {
                            return t.data
                        }).then(function (a) {
                            if (40001 === a.err_code) n(p.IS_AGENT_ID, 0), $toast.show(a.err_msg);
                            else if (40002 === a.err_code) s--, setTimeout(function () {
                                t(e)
                            }, 300), n(p.IS_EMPTY);
                            else if (0 !== a.err_code) $toast.show(a.err_msg), n(p.IS_EMPTY);
                            else {
                                var i = a.payload;
                                i.url && axios.get(i.url).then(function (t) {
                                    n(p.ORDER_LIST, t.data)
                                })
                            }
                        })
                    }(e)
                }, fetchFindOrder: function (t, e) {
                    var n = (t.commit, 10);
                    return function t(e) {
                        if (0 === n) return void $toast.show("系统错误，请稍后再试");
                        $api.saleFindOrder(e).then(function (t) {
                            return t.data
                        }).then(function (s) {
                            if (40001 === s.err_code) {
                                return void $popup.fromTemplate(c.popup_bind_phone.template, c.popup_bind_phone.options).show().then(function (t) {
                                    if (1 === t) {
                                        $router.forward({
                                            path: "/user/bindMobile/0",
                                            query: {
                                                backroute: "/sales/orders/findorders"
                                            }
                                        })
                                    }
                                })
                            }
                            if (40002 === s.err_code) n--, setTimeout(function () {
                                t(e)
                            }, 300);
                            else if (0 !== s.err_code) $toast.show(s.err_msg);
                            else {
                                var a = s.payload;
                                a.url && axios.get(a.url).then(function (t) {
                                    return t.data
                                }).then(function (t) {
                                    $popup.fromTemplate(c.popup_ordering.template, c.popup_ordering.options).show()
                                })
                            }
                        })
                    }(e)
                }, fetchWithdrawStatus: function (t, e) {
                    var n = t.commit;
                    return $api.saleWithdrawStatus().then(function (t) {
                        return t.data.payload
                    }).then(function (t) {
                        n(p.IS_WITHDRAWING, t.is_withdrawing)
                    })
                }, fetchSaveWithdraw: function (t, e) {
                    t.commit;
                    return $api.saleSaveWithdraw(e).then(function (t) {
                        return t.data
                    }).then(function (t) {
                        40001 === t.err_code && $toast.show("提现金额无效"), 40003 === t.err_code && $toast.show("提现失败，请稍后再试"), "ok" === t.payload && $toast.show("已成功转入，可前往零钱提现")
                    })
                }, SalesContentShare: function (t, e) {
                    var n = t.commit;
                    return $api.SalesContentShare(e).then(function (t) {
                        return t.data
                    }).then(function (t) {
                        n(p.CONTENT_SHAER_LIST, t)
                    })
                }, SalesShareDetail: function (t, e) {
                    var n = t.commit;
                    return $api.SalesShareDetail(e).then(function (t) {
                        return t.data
                    }).then(function (t) {
                        return n(p.ARTICLE_DETAIL_INFO, t), t
                    })
                }, SalesCallwx: function (t, e) {
                    var n = t.commit;
                    return $api.SalesCallwx(e).then(function (t) {
                        return n(p.SHARELINK, t.data), t
                    })
                }, fetchUserAccount: function (t, e) {
                    var n = t.commit;
                    return $api.SalesUserAccount(e).then(function (t) {
                        return t.data
                    }).then(function (t) {
                        t.payload.my_share_list.length || (f.emptyShare = 1), n(p.ACCOUNT_INFO, t.payload)
                    })
                }, SalesGradeShare: function (t, e) {
                    var n = t.commit;
                    return $api.SalesGradeShare(e).then(function (t) {
                        return t.data
                    }).then(function (t) {
                        n(p.GET_GRADESHARE_LIST, t)
                    })
                }
            };
        e.a = {
            namespaced: !0,
            state: f,
            getters: _,
            mutations: v,
            actions: h
        }
    },
    function (t, e, n) {
        "use strict";
        var s, a = n(7),
            i = n.n(a),
            o = {
                SYNC: "sync",
                SYNC_APPLY_LISTS: "sync_apply_Lists",
                SYNC_JFB: "sync_jfb"
            },
            r = {
                alipayInfo: function (t) {
                    var e = t.info,
                        n = e.alipay.user_info || {},
                        s = [],
                        a = [],
                        i = [],
                        o = e.alipay.mapping;
                    return _.each(o, function (t, e) {
                        a.push(t), i.push(e);
                        s.push({
                            title: "提现" + e + "元",
                            desc: ""
                        })
                    }), {
                        enabled: e.alipay.enabled,
                        account: n.object_number,
                        realName: n.real_name,
                        withdrawLists: s,
                        realPricesHash: a,
                        amountHash: i
                    }
                }, wechatInfo: function (t) {
                    var e = t.info,
                        n = e.wechat,
                        s = n.mapping,
                        a = n.user_info && n.user_info.real_name,
                        i = [],
                        o = [],
                        r = [];
                    _.each(s, function (t, e) {
                        o.push(e);
                        i.push({
                            title: "提现" + e + "元",
                            desc: ""
                        }), r.push(e)
                    });
                    var c = e.wechat_large.mapping,
                        u = [],
                        l = [],
                        p = [],
                        d = 0,
                        f = [25, 50, 100];
                    return _.each(c, function (t, e) {
                        l.push(t);
                        var n = 0 === f[d] ? "" : "优惠" + f[d] + "咖币";
                        u.push({
                            title: "提现" + e + "元",
                            desc: n
                        }), p.push(e), d++
                    }), {
                        real_name: a,
                        wechatOptions: i,
                        realprices: o,
                        amount: r,
                        wechatBigOptions: u,
                        realpricesLarge: l,
                        amountLarge: p
                    }
                }, mobileInfo: function (t) {
                    var e = t.info,
                        n = e.mobile,
                        s = n.mapping,
                        a = n.user_info && n.user_info.object_number,
                        i = [],
                        o = [],
                        r = [];
                    return _.each(s, function (t, e) {
                        o.push(e);
                        i.push({
                            title: "充" + e + "元",
                            desc: ""
                        }), r.push(e)
                    }), {
                        mobile: a,
                        phoneOptions: i,
                        realprices: o,
                        amount: r
                    }
                }, jfbInfo: function (t) {
                    var e = t.jfbInfo,
                        n = e.mapping,
                        s = e.total_jfb,
                        a = e.user_info && e.user_info.object_number,
                        i = e.user_info && e.user_info.real_name,
                        o = [],
                        r = [],
                        c = [];
                    return _.each(n, function (t, e) {
                        o.push(n[e]), c.push({
                            title: e + "集分宝",
                            desc: "等值" + t + "元"
                        }), r.push(e)
                    }), {
                        balance: s,
                        account: a,
                        real_name: i,
                        rebateScoreOptions: c,
                        realprices: o,
                        amount: r,
                        enabled: e.enabled,
                        mobile_bind: e.mobile_bind
                    }
                }
            },
            c = function () {
                return {
                    info: {
                        balance: "",
                        mobile_bind: 0,
                        alipay: {},
                        wechat: {},
                        mobile: {},
                        wechat_large: {},
                        phone_verify: 0,
                        verify_info: {}
                    },
                    jfbInfo: {},
                    applyLists: []
                }
            }(),
            u = (s = {}, i()(s, o.SYNC, function (t, e) {
                var n = t.info;
                n.alipay = e.alipay;
                var s = n.alipay.mapping;
                for (var a in s) {
                    var i = s[a];
                    isNaN(i) && delete s[a]
                }
                n.wechat = e.wechat, n.wechat_large = e.wechat_large, n.mobile = e.mobile, n.balance = e.balance, n.mobile_bind = e.mobile_bind, n.phone_verify = e.phone_verify, n.verify_info = e.verify_info
            }), i()(s, o.SYNC_APPLY_LISTS, function (t, e) {
                t.applyLists = e
            }), i()(s, o.SYNC_JFB, function (t, e) {
                t.jfbInfo = e
            }), s),
            l = {
                getWithdrawList: function (t, e) {
                    var n = t.commit;
                    return $api.withdrawList().then(function (t) {
                        return t.data && t.data.payload
                    }).then(function (t) {
                        n(o.SYNC, t)
                    })
                }, submitMobile: function (t, e) {
                    t.commit;
                    return $api.withdrawToMobile(e)
                }, submitWechat: function (t, e) {
                    t.commit;
                    return $api.withdrawToWechat(e)
                }, submitAlipay: function (t, e) {
                    t.commit;
                    return $api.withdrawToAlipay(e)
                }, getJfbWithdrawList: function (t, e) {
                    var n = t.commit;
                    return $api.jifenbaoWithdraw().then(function (t) {
                        return t.data && t.data.payload
                    }).then(function (t) {
                        n(o.SYNC_JFB, t)
                    })
                }, submitJfb: function (t, e) {
                    t.commit;
                    return $api.withdrawJfb(e)
                }, WithdrawApplyListAll: function (t) {
                    t.commit;
                    return $api.withdrawApplyListAll()
                }, withdrawApplyList: function (t, e) {
                    t.commit;
                    return $api.withdrawApplyList(e.type, e.offset, e.limit)
                }
            };
        e.a = {
            namespaced: !0,
            state: c,
            getters: r,
            mutations: u,
            actions: l
        }
    },
    function (t, e, n) {
        "use strict";
        var s, a = n(8),
            i = n.n(a),
            o = n(7),
            r = n.n(o),
            c = n(6),
            u = n(3),
            l = function () {
                return {
                    tasks: [],
                    zstask_info: {
                        id: 0,
                        status: 0,
                        reward: "0.0",
                        icon: "",
                        title: "",
                        hint: "",
                        bundle_id: "",
                        appstore_url: "",
                        zs_tasks: [],
                        subtask_id: "",
                        callback_url: ""
                    },
                    steps: [1, 0]
                }
            },
            p = l(),
            d = {
                INIT: "init",
                SYNC: "sync",
                FETCH_ZSTASK_INFO: "fetch_zstask_info",
                UPDATE_STEPS: "update_steps"
            },
            f = {},
            v = (s = {}, r()(s, d.INIT, function (t) {
                _.extend(t, l())
            }), r()(s, d.SYNC, function (t, e) {
                t.tasks = e.tasks
            }), r()(s, d.FETCH_ZSTASK_INFO, function (t, e) {
                t.zstask_info = e
            }), r()(s, d.UPDATE_STEPS, function (t, e) {
                t.steps = e
            }), s),
            h = {
                fetch: function (t) {
                    var e = t.commit;
                    e(d.INIT), $api.zstasks().then(function (t) {
                        return t.data && t.data.payload
                    }).then(function (t) {
                        e(d.SYNC, t)
                    })
                }, fetchDetail: function (t, e) {
                    var n = t.commit;
                    return new i.a(function (t) {
                        $api.zstaskDetail(e).then(function (t) {
                            return t.data && t.data.payload
                        }).then(function (e) {
                            n(d.FETCH_ZSTASK_INFO, e), t()
                        })
                    })
                }, _openApp: function (t) {
                    var e = t.commit,
                        s = p.zstask_info,
                        a = s.bundle_id,
                        i = s.appstore_url;
                    0 === s.status ? $assistant.getAppInfo(a).then(function (t) {
                        var o = t.data.payload;
                        if (o && o.bundle_id && o.bundle_version) $api.zstaskStart(s.id).then(function (t) {
                            $assistant.openApp({
                                bid: a
                            }).then(function (t) {
                                $api.subtaskOpenApp({
                                    task_id: s.subtask_id,
                                    task_type: 2
                                }).then(function (t) {
                                    e(d.UPDATE_STEPS, [1, 1]), $assistant.updateState().then(function (t) {
                                        $api.zstaskCheckState(s.id)
                                    })
                                })
                            })
                        });
                        else {
                            var r = c.c;
                            $popup.fromTemplate(r.template, r.options).show().then(function (t) {
                                1 === t && (location.href = n.i(u.e)(i, {
                                    return_url: location.href
                                }))
                            })
                        }
                    }) : 2 === s.status ? $assistant.openApp({
                        bid: a
                    }).then(function (t) {
                        $api.subtaskOpenApp({
                            task_id: s.subtask_id,
                            task_type: 2
                        }).then(function (t) {
                            e(d.UPDATE_STEPS, [1, 1]), $assistant.updateState()
                        })
                    }) : setTimeout(function () {
                        $router.back({
                            path: "/zstasks"
                        })
                    }, 600)
                }, _openAppWith11: function (t) {
                    var e = t.commit,
                        n = p.zstask_info,
                        s = n.bundle_id,
                        a = n.callback_url;
                    0 === n.status ? $api.zstaskStart(n.id).then(function (t) {
                        $assistant.openAppIOS11({
                            bid: s,
                            url: a
                        }).then(function (t) {
                            return t.data && t.data.status
                        }).then(function (t) {
                            if ("ok" === t) e(d.UPDATE_STEPS, [1, 1]), $api.zstaskCheckState(n.id);
                            else {
                                var s = n.appstore_url;
                                window.location = s
                            }
                        })
                    }) : 2 === n.status ? $assistant.openAppIOS11({
                        bid: s,
                        url: a
                    }).then(function (t) {
                        return t.data && t.data.status
                    }).then(function (t) {
                        if ("ok" === t) e(d.UPDATE_STEPS, [1, 1]), $api.zstaskCheckState(n.id);
                        else {
                            var s = n.appstore_url;
                            window.location = s
                        }
                    }) : setTimeout(function () {
                        $router.back({
                            path: "/zstasks"
                        })
                    }, 600)
                }, _checkReward: function (t) {
                    t.commit;
                    $api.zstaskCheckState(p.zstask_info.id).then(function (t) {
                        var e = t.data.payload,
                            n = e.status;
                        if (1 === n) return void $router.back("/zstasks");
                        if (2 === n) {
                            $popup.fromTemplate('\n            <div class="title text-center">试玩进行中</div>\n            <div class="desc text-center">满30秒后即可领取奖励</div>\n          ', {
                                effect: "scale",
                                cssClass: "popup-general",
                                buttons: [{
                                    text: "知道了"
                                }]
                            }).show()
                        }
                        if (0 === n || 3 === n) {
                            var s = 0 === n ? "任务未开始" : "任务已作废";
                            return void $popup.fromTemplate(function (t) {
                                return '\n              <div class="desc text-center">' + t + "</div>\n            "
                            }(s), {
                                effect: "scale",
                                cssClass: "popup-general",
                                buttons: [{
                                    text: "返回任务列表"
                                }]
                            }).show().then(function (t) {
                                $router.forward("/zstasks")
                            })
                        }
                        $assistant.updateState()
                    })
                }, updateSteps: function (t, e) {
                    (0, t.commit)(d.UPDATE_STEPS, e)
                }
            };
        e.a = {
            namespaced: !0,
            state: p,
            mutations: v,
            getters: f,
            actions: h
        }
    },
    function (t, e) {
        var n = {
            options: {
                effect: "scale",
                cssClass: "popup-general",
                buttons: [{
                    text: "取消"
                }, {
                    text: "立即收徒"
                }]
            },
            template: '\n      <div class="desc">徒弟完成1个试玩任务后解锁</div>\n    '
        };
        t.exports = {
            popup_no_apprentice: n
        }
    },
    function (t, e, n) {
        "use strict";

        function s(t) {
            return t.next_level < 50 ? 1 === t.claim_level_coin_open ? "再赚" + a(t.next_level_need) + "元升至Lv." + t.next_level + '  每天可领\n            <span class="cf6">' + t.next_level_coin + "金币</span>" : "再赚" + a(t.next_level_need) + "元升至Lv." + t.next_level + '  每天多领\n            <span class="cf6">' + t.next_level_more_coin + "金币</span>" : "小彩蛋！请联系客服获取～"
        }
        e.a = s;
        var a = function (t) {
            return t.indexOf(".00") > -1 ? parseFloat(t).toFixed(0) : "0" === t.substr(t.length - 1) ? parseFloat(t).toFixed(1) : t
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(2),
            a = n.n(s),
            i = n(9),
            o = n.n(i),
            r = n(1),
            c = n(5),
            u = n(3);
        e.default = {
            components: {
                CustomPopup: o.a
            },
            computed: a()({}, n.i(r.a)("assistant", ["info"])),
            methods: {
                show: function () {
                    this.$refs.p.show()
                }, hide: function (t) {
                    this.$refs.p.hide(t)
                }, open: function () {
                    window.location.href = this.info.app_scheme
                }, download: function () {
                    this.hide(), 3 === this.info.app_type ? (c.a.$emit(c.b.ASSISTANT_POPUP), window.location.href = this.info.download_url) : location.href = n.i(u.e)(this.info.download_url, {
                        return_url: location.href
                    })
                }
            }
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(4);
        e.default = {
            methods: {
                trust: function () {
                    var t = $storage.get(s.b);
                    t && (t.showed = 1, $storage.set(s.b, t)), location.href = s.c
                }
            }
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(2),
            a = n.n(s),
            i = n(3),
            o = n(1);
        e.default = {
            created: function () {
                var t = this;
                $bus.$on("showCustomerService", function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        pos_bottom: 26
                    };
                    t.pos_bottom = e.pos_bottom, t.show = !0
                }), $bus.$on("hideCustomerService", function () {
                    t.show = !1
                })
            }, data: function () {
                return {
                    show: !1,
                    pos_bottom: 0
                }
            }, computed: a()({}, n.i(o.a)("taskDetail", ["show_coupon"])),
            methods: {
                talkToCustomerService: function () {
                    window.location.href = n.i(i.l)()
                }, kameiMove: function () {
                    return this.show_coupon && $router && "task_detail" === $router.currentRoute.name
                }
            }
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(3);
        e.default = {
            created: function () {
                if (n.i(s.m)() >= 11) this.state = n.i(s.q)();
                else try {
                    localStorage.test = 1
                } catch (t) {
                    this.state = 1
                }
            }, data: function () {
                return {
                    state: 0
                }
            }, methods: {
                getState: function () {
                    return this.state
                }, moreThan11: function () {
                    return n.i(s.m)() >= 11
                }
            }
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(2),
            a = n.n(s),
            i = n(1),
            o = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    obvious: 1,
                    buttons: [{
                        text: "短信验证码"
                    }, {
                        text: "语音验证码"
                    }],
                    showClose: !0,
                    btnLengthways: !0
                },
                template: '\n  <div class="title">没收到验证码？</div>\n  <div class="desc">\n    您可以选择获取语音验证码\n  </div>\n'
            },
            r = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    buttons: [{
                        text: "取消"
                    }, {
                        text: "确定接听"
                    }]
                },
                template: '\n  <div class="title">提示</div>\n  <div class="desc">\n    你将收到钱咖电话播报的语音验证码，请注意接听\n  </div>\n'
            },
            c = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    buttons: [{
                        text: "取消"
                    }, {
                        text: "切换账号"
                    }]
                },
                template: '\n  <div class="title">此手机已被其它账号绑定</div>\n  <div class="desc">若当前账号未绑定手机号，切换账号后将永久丢失，确认切换？</div>\n  '
            },
            u = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    buttons: [{
                        text: "知道了"
                    }]
                },
                template: function (t) {
                    return '\n    <div class="title">' + t + '</div>\n    <div class="desc">\n      请使用该账号绑定的手机号进行验证\n    </div>\n  '
                }
            },
            l = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    buttons: [{
                        text: "知道了"
                    }]
                },
                template: function (t) {
                    return '\n    <div class="title">该账号尚未绑定手机</div>\n    <div class="desc">\n      请绑定手机后再提交申诉\n    </div>\n  '
                }
            },
            p = {
                options: {
                    effect: "scale",
                    cssClass: "popup-general",
                    obvious: 1,
                    buttons: [{
                        text: "知道了"
                    }]
                },
                template: '\n  <div class="title">获取验证码失败</div>\n  <div class="desc">该手机号尚未绑定过钱咖账号</div>\n'
            };
        e.default = {
            props: {
                phone: {
                    type: String,
                    default: ""
                },
                codeType: {
                    type: Number,
                    default: 0
                }
            },
            data: function () {
                return {
                    getCodeLock: !1,
                    getCodeText: "获取验证码",
                    sec: 0,
                    voiceVerify: !1
                }
            }, methods: a()({
                sendCode: function () {
                    this.voiceVerify ? this.popCodeType() : this.getCode(1)
                }, popCodeType: function () {
                    var t = this;
                    $popup.fromTemplate(o.template, o.options).show().then(function (e) {
                        0 === e && t.getCode(1), 1 === e && t.popCheckVoiceCode()
                    })
                }, popCheckVoiceCode: function () {
                    var t = this,
                        e = $popup.fromTemplate(r.template, r.options);
                    e.show().then(function (n) {
                        0 === n && e.hide(), 1 === n && t.getCode(2)
                    })
                }, getCode: function (t) {
                    var e = this;
                    if (!(this.getCodeLock || (this.getCodeLock = !0, this.sec > 0))) {
                        var n = this.phone.replace(/\s/g, ""),
                            s = "";
                        if (n ? /^[1][2-9]\d{9}$|^[9]\d{7}$|^[0][9]\d{8}$|^[6]\d{7}$/.test(n) || (s = "手机号格式不正确") : s = "手机号不能为空", s) return setTimeout(function () {
                            e.getCodeLock = !1
                        }, 1e3), void $toast.show(s);
                        this.voiceVerify = !0;
                        var a = void 0;
                        switch (this.codeType) {
                            case 1:
                                a = this.bindMobileSendCode;
                                break;
                            case 2:
                                a = this.unfreezeSendCode;
                                break;
                            case 3:
                                a = this.loginSendCode
                        }
                        a({
                            phone: n,
                            type: t
                        }).then(function (t) {
                            return t.data && t.data
                        }).then(function (t) {
                            switch (e.codeType) {
                                case 1:
                                    if (40003 === t.err_code) {
                                        $popup.fromTemplate(c.template, c.options).show().then(function (t) {
                                            if (1 === t) {
                                                var n = {
                                                    path: "/login",
                                                    query: {
                                                        backroute: "/user/bindMobile/" + e.$route.params.status
                                                    }
                                                };
                                                $router.forward(n)
                                            } else e.getCodeLock = !1
                                        })
                                    } else e.sec = 60, e.countDown();
                                    break;
                                case 2:
                                    40003 === t.err_code ? e.show_correct_mobile_unfreezeForm(t) : 40006 === t.err_code ? e.show_unfreeze_unbind_mobile_unfreezeForm() : (e.sec = 60, e.countDown());
                                    break;
                                case 3:
                                    10001 === t.err_code ? (e.unregistered_phone_loginSendCode(), e.voiceVerify = !1) : (e.sec = 60, e.countDown())
                            }
                        }).catch(function () {
                            e.getCodeLock = !1
                        })
                    }
                }, show_correct_mobile_unfreezeForm: function (t) {
                    var e = this,
                        n = t.err_msg.substr(0, 11).split("");
                    n.splice(3, 4, "****"), n = n.join(""), $popup.fromTemplate(u.template(n), u.options).show(), this.voiceVerify = !1, setTimeout(function () {
                        e.getCodeLock = !1
                    }, 1e3)
                }, show_unfreeze_unbind_mobile_unfreezeForm: function (t) {
                    var e = this;
                    $popup.fromTemplate(l.template(), l.options).show(), this.voiceVerify = !1, setTimeout(function () {
                        e.getCodeLock = !1
                    }, 1e3)
                }, unregistered_phone_loginSendCode: function () {
                    var t = this;
                    $popup.fromTemplate(p.template, p.options).show().then(function (e) {
                        1 === e ? $api.createUserV5().then(function () {
                            $router.forward({
                                path: "/dashboard"
                            })
                        }) : t.getCodeLock = !1
                    })
                }, countDown: function () {
                    var t = this;
                    this.sec ? (this.sec--, this.getCodeText = this.sec ? this.sec + "s" : "发送验证码", setTimeout(function () {
                        t.countDown()
                    }, 1e3)) : this.getCodeLock = !1
                }
            }, n.i(i.c)("sendCodeMod", ["bindMobileSendCode", "unfreezeSendCode", "loginSendCode"]))
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(4);
        e.default = {
            created: function () {
                var t = this;
                $bus.$on("showWebclip", function (e) {
                    t.url = e.url, setTimeout(function () {
                        t.show = !0
                    }, 500)
                }), $bus.$on("hideWebclip", function () {
                    t.show = !1
                })
            }, data: function () {
                return {
                    url: "",
                    show: !1
                }
            }, methods: {
                onClick: function () {
                    location.href = this.url, this.show = !1
                }, maybeLater: function () {
                    var t = "" + s.g,
                        e = $storage.get(t) || 0;
                    ++e, $storage.set(t, e);
                    var n = (new Date).getDate();
                    $cookie.set(t, n), this.show = !1
                }
            }
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(2),
            a = n.n(s),
            i = n(148),
            o = n(1),
            r = n(5);
        e.default = {
            computed: a()({}, n.i(o.a)(["zhima_status"])),
            mixins: [i.a],
            mounted: function () {
                var t = this;
                r.a.$on(r.b.POPUP_BIND_ZHIMA, function () {
                    t.showBindZhimaPopup()
                })
            }
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = {
            methods: {
                goBack: function () {
                    this.$router.back("/dashboard")
                }
            }
        }
    },
    function (t, e, n) {
        "use strict";

        function s(t) {
            t.preventDefault()
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = n(2),
            i = n.n(a),
            o = n(1),
            r = n(29),
            c = n.n(r);
        e.default = {
            data: function () {
                return {
                    state: 0,
                    buttonText: "一键复制",
                    copyed: 0
                }
            }, computed: i()({}, n.i(o.a)("dashboardV5", ["invite_code"])),
            methods: {
                show: function () {
                    document.body.classList.add("popup-open"), $backdrop.show(), this.state = 1, $api.addAction(102), document.addEventListener("touchmove", s)
                }, hide: function () {
                    var t = this;
                    this.state = 2, setTimeout(function () {
                        document.body.classList.remove("popup-open")
                    }, 300), $backdrop.hide(), document.removeEventListener("touchmove", s), setTimeout(function () {
                        t.state = 0, t.buttonText = "一键复制", t.copyed = 0
                    }, 300)
                }, toAli: function () {
                    $api.addAction(103), location.href = "alipay://"
                }, copy: function () {
                    this.clipboard = new c.a(".copy-button"), this.buttonText = "已复制", this.copyed = 1
                }
            }
        }
    },
    function (t, e, n) {
        "use strict";

        function s(t) {
            t.preventDefault()
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = n(4),
            i = function (t, e) {
                var n = $storage.get(a.d);
                return {
                    url: t.url + "&title=" + encodeURIComponent(e),
                    title: e,
                    desc: "[点击领取]",
                    img: t.icon,
                    type: 1,
                    jump_url: __ENV__.ws_endpoint + "/v4/key/again_share?user_id=" + n + "&type=new&url=" + encodeURIComponent(t.url) + "&title=" + encodeURIComponent(e) + "&icon=" + encodeURIComponent(t.icon)
                }
            };
        e.default = {
            props: {
                info: Object
            },
            data: function () {
                return {
                    state: 0,
                    title: ""
                }
            }, mounted: function () {
                var t = this;
                $bus.$on("showNewYearPopup", function () {
                    t.show()
                })
            }, methods: {
                show: function () {
                    document.body.classList.add("popup-open"), $backdrop.show(), this.state = 1, document.addEventListener("touchmove", s)
                }, hide: function () {
                    var t = this;
                    this.state = 2, setTimeout(function () {
                        document.body.classList.remove("popup-open")
                    }, 300), $backdrop.hide(), document.removeEventListener("touchmove", s), setTimeout(function () {
                        t.state = 0
                    }, 300)
                }, share: function () {
                    this.title || (this.title = "新年大吉！祝愿狗年顺利！");
                    var t = i(this.info, this.title);
                    $assistant.share(t), this.title = ""
                }, inputLength: function (t) {
                    34 === this.title.length && $toast.show("祝福太长，承载不下啦(最多34字)", 2e3)
                }
            }
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(10),
            a = n.n(s),
            i = n(141),
            o = n.n(i),
            r = n(147),
            c = (n.n(r), n(4)),
            u = n(3),
            l = !1;
        e.default = {
            components: {
                AnimateHeader: a.a,
                SendCodeMod: o.a
            },
            data: function () {
                return {
                    form: {
                        phone: "",
                        code: ""
                    },
                    canSubmit: !1,
                    getCodeLock: !1,
                    getCodeText: "获取验证码",
                    sec: 0,
                    voiceVerify: !1,
                    loginLock: !1
                }
            }, watch: {
                "form.phone": function (t) {
                    if (!l) {
                        l = !0;
                        var e = t.replace(/\s/g, "");
                        this.form.phone = _.filter([e.substr(0, 3), e.substr(3, 4), e.substr(7, 4)], function (t) {
                            return "" !== t
                        }).join(" "), l = !1, this.canSubmit = this.canFormSubmit(t, this.form.code)
                    }
                }, "form.code": function (t) {
                    this.canSubmit = this.form.phone && t && 4 == t.length, t.length > 4 && (this.form.code = t.substr(0, 4)), this.canSubmit = this.canFormSubmit(this.form.phone, t)
                }
            }, mounted: function () {
                $sess.set(c._10, (new Date).getTime());
                var t = location.search;
                t.length > 0 && t.indexOf("match_user=1") >= 0 && $api.matchUser().then(function (t) {
                    return t.data
                }).then(function (t) {
                    if (10001 == t.err_code) {
                        return $popup.fromTemplate(r.invalid_certification.template, r.invalid_certification.options).show()
                    }
                    $storage.set(c._3, 1), $storage.set(c.I, $cookie.get(c.J)), location.href = "/v4/dashboard"
                })
            }, destroyed: function () {
                $modal.destroy(this.agreement)
            }, methods: {
                back: function () {
                    if (/iPad/.test(navigator.userAgent)) location.href = "/v4/";
                    else {
                        var t = _.get(this.$route.query, "backroute", "/");
                        $router.back({
                            path: t
                        })
                    }
                }, sendCode: function () {
                    this.voiceVerify ? this.popCodeType() : this.getCode(1)
                }, getCode: function (t) {
                    var e = this;
                    if (!(this.getCodeLock || (this.getCodeLock = !0, this.sec > 0))) {
                        var n = this.form.phone.replace(/\s/g, ""),
                            s = "";
                        if (n ? /^[1][2-9]\d{9}$|^[9]\d{7}$|^[0][9]\d{8}$|^[6]\d{7}$/.test(n) || (s = "手机号格式不正确") : s = "手机号不能为空", s) return setTimeout(function () {
                            e.getCodeLock = !1
                        }, 1e3), void $toast.show(s);
                        this.voiceVerify = !0, $api.loginSendCode({
                            phone: n,
                            type: t
                        }).then(function (t) {
                            return t.data && t.data.err_code
                        }).then(function (t) {
                            if (10001 == t) return e.unregisteredPhone(), void(e.voiceVerify = !1);
                            e.sec = 60, e.countDown()
                        }, function () {
                            e.getCodeLock = !1
                        })
                    }
                }, popCodeType: function () {
                    var t = this;
                    $popup.fromTemplate(r.popup_choose_verify_code_type.template, r.popup_choose_verify_code_type.options).show().then(function (e) {
                        0 === e && t.getCode(1), 1 === e && t.getCode(2)
                    })
                }, login: function () {
                    var t = this;
                    if (this.canSubmit && !this.loginLock) {
                        this.loginLock = !0, setTimeout(function () {
                            t.loginLock = !1
                        }, 1e3);
                        var e = this.form.phone.replace(/\s/g, ""),
                            s = this.form.code,
                            a = "";
                        if (e ? /^[1][2-9]\d{9}$|^[9]\d{7}$|^[0][9]\d{8}$|^[6]\d{7}$/.test(e) ? s ? /^[\d]{4}$/.test(s) || (a = "验证码格式不正确") : a = "验证码不能为空" : a = "手机号格式不正确" : a = "手机号不能为空", a) return void $toast.show(a);
                        $api.loginByPhoneV5({
                            phone: e,
                            code: s
                        }).then(function (t) {
                            return t.data
                        }).then(function (t) {
                            if (10002 === t.err_code) return void $toast.show(t.err_msg);
                            n.i(u.a)() && n.i(u.f)(), $storage.set(c.I, $cookie.get(c.J)), $storage.remove(c.v);
                            var e = {
                                    path: "/dashboard"
                                },
                                s = parseInt(((new Date).getTime() - $sess.get(c._10)) / 1e3);
                            window._hmt && window._hmt.push(["_trackEvent", "登录", "老用户登录", "登录时长", s]), $router.forward(e)
                        })
                    }
                }, countDown: function () {
                    var t = this;
                    this.sec ? (this.sec--, this.getCodeText = this.sec ? this.sec + "s" : "发送验证码", setTimeout(function () {
                        t.countDown()
                    }, 1e3)) : this.getCodeLock = !1
                }, unbindPhone: function () {
                    $popup.fromTemplate(r.login_with_certification.template, r.login_with_certification.options).show().then(function (t) {
                        if (1 == t) {
                            var e = location.protocol + "//" + location.host + "/v4/login?match_user=1",
                                s = $cookie.get("DIS4");
                            n.i(u.o)(e, s)
                        }
                    })
                }, unregisteredPhone: function () {
                    var t = this;
                    $popup.fromTemplate(r.get_code_fail.template, r.get_code_fail.options).show().then(function (e) {
                        1 == e ? $api.createUserV5().then(function () {
                            $router.forward({
                                path: "/dashboard"
                            })
                        }) : t.getCodeLock = !1
                    })
                }, canFormSubmit: function (t, e) {
                    return t && 13 == t.length && e && 4 == e.length
                }
            }
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = {
            props: ["title", "subtitle"]
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(23),
            a = n.n(s);
        e.default = {
            components: {
                CountDown: a.a
            },
            props: {
                tags: Array
            },
            methods: {
                getNowTime: function () {
                    return (new Date).getTime()
                }
            }
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = {
            props: {
                color: {
                    type: String,
                    default: "#FFFFFF"
                }
            }
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = {
            props: {
                color: {
                    type: String,
                    default: "#FFFFFF"
                }
            }
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(469),
            a = n.n(s),
            i = n(470),
            o = n.n(i),
            r = n(19),
            c = (n.n(r), {
                headerHeight: 100,
                titleMarginTop: 17,
                titleFontSize: 20,
                titleLineHeight: 28,
                subTitleOpacity: 1,
                fixed: !1
            }),
            u = {
                headerHeight: 50,
                titleMarginTop: 14,
                titleFontSize: 16,
                titleLineHeight: 22,
                subTitleOpacity: 0,
                fixed: !0
            },
            l = function (t) {
                return t ? c : u
            };
        e.default = {
            components: {
                BackArrow: a.a,
                Close: o.a
            },
            props: {
                title: String,
                subTitle: String,
                bgColor: String,
                menuBgColor: String,
                color: {
                    type: String,
                    default: "#FFF"
                },
                showBackButton: {
                    type: Boolean,
                    default: !0
                },
                onBackButtonClick: Function,
                showMenuButton: {
                    type: Boolean,
                    default: !1
                },
                onMenuButtonClick: Function,
                animateDuration: Number,
                animate: {
                    type: Boolean,
                    default: !0
                },
                expanded: {
                    type: Boolean,
                    default: !1
                },
                getScrollTop: Function,
                hasSubHeader: Boolean,
                hasSubTip: Boolean
            },
            mounted: function () {
                var t = this;
                this.animate && (this.timer = setInterval(function () {
                    var e = t.getScrollTop ? t.getScrollTop() : Vonic.app.pageContentScrollTop();
                    e > 100 && !t.shrinked && t.shrink(), e < 100 && t.shrinked && t.expand()
                }, 50))
            }, beforeDestroy: function () {
                this.timer && clearInterval(this.timer)
            }, data: function () {
                return {
                    state: l(this.expanded),
                    shrinked: !this.animate,
                    timer: void 0
                }
            }, methods: {
                onBack: function () {
                    this.onBackButtonClick && this.onBackButtonClick()
                }, onMenu: function () {
                    this.onMenuButtonClick && this.onMenuButtonClick()
                }, _shift: function (t) {
                    var e = this,
                        s = {
                            from: c,
                            to: u,
                            duration: this.animateDuration || 150,
                            easing: "easeOutQuad",
                            step: function (t) {
                                e.state = t
                            }
                        };
                    t && _.extend(s, {
                        from: u,
                        to: c
                    }), n.i(r.tween)(s).then(function (t) {
                        e.state = t
                    })
                }, shrink: function () {
                    this._shift(), this.shrinked = !0
                }, expand: function () {
                    this._shift(!0), this.shrinked = !1
                }, isShrinked: function () {
                    return this.shrinked
                }
            }
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(2),
            a = n.n(s),
            i = n(9),
            o = n.n(i),
            r = n(1),
            c = n(5);
        e.default = {
            components: {
                CustomPopup: o.a
            },
            data: function () {
                return {
                    task: {}
                }
            }, mounted: function () {
                var t = this;
                c.a.$on(c.b.HIDE_APPOINT_POPUP, function () {
                    t.hide()
                })
            }, destroyed: function () {
                c.a.$off(c.b.HIDE_APPOINT_POPUP)
            }, methods: a()({}, n.i(r.c)("taskLite", ["startAppoint"]), {
                show: function (t) {
                    this.task = t, this.$refs.p.show()
                }, hide: function (t) {
                    this.$refs.p.hide(t)
                }, appointImmediately: function () {
                    var t = this.task;
                    this.startAppoint(t)
                }
            })
        }
    },
    function (t, e, n) {
        "use strict";

        function s(t) {
            t.preventDefault()
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = {
            data: function () {
                return {
                    state: 0,
                    refresh: ""
                }
            }, destroyed: function () {
                this.refresh && clearTimeout(this.refresh)
            }, methods: {
                show: function () {
                    document.body.classList.add("popup-open"), $backdrop.show(), this.state = 1, this.refresh = setTimeout(function () {
                        window.location.reload()
                    }, 7e3), document.addEventListener("touchmove", s)
                }, hide: function () {
                    var t = this;
                    this.state = 2, setTimeout(function () {
                        document.body.classList.remove("popup-open")
                    }, 300), $backdrop.hide(), this.refresh && clearTimeout(this.refresh), document.removeEventListener("touchmove", s), setTimeout(function () {
                        t.state = 0
                    }, 300)
                }
            }
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(2),
            a = n.n(s),
            i = n(1),
            o = n(9),
            r = n.n(o),
            c = n(5);
        e.default = {
            components: {
                CustomPopup: r.a
            },
            props: {
                mode: {
                    type: String,
                    default: "auto",
                    validator: function (t) {
                        return "auto" === t || "manual" === t
                    }
                }
            },
            computed: a()({}, n.i(i.e)("assistant", ["showAssistantInvalidPopup"])),
            mounted: function () {
                var t = this;
                setTimeout(function () {
                    t._init(t.showAssistantInvalidPopup)
                }, 500)
            }, destroyed: function () {
                c.a.$off(c.b.POPUP_ASSISTANT_INVALID)
            }, watch: {
                showAssistantInvalidPopup: function (t) {
                    this._init(t)
                }
            }, methods: a()({
                _init: function (t) {
                    var e = this;
                    this.$refs.p && "auto" === this.mode && (t && 1 !== this.$refs.p.getState() && this.$refs.p.show(), t || 1 !== this.$refs.p.getState() || this.$refs.p.hide()), this.$refs.p && "manual" === this.mode && c.a.$on(c.b.POPUP_ASSISTANT_INVALID, function (t) {
                        t.showAssistantInvalidPopup && 1 !== e.$refs.p.getState() && e.$refs.p.show(), t.showAssistantInvalidPopup || 1 !== e.$refs.p.getState() || e.$refs.p.hide()
                    })
                }, toDownload: function () {
                    this.$refs.p.hide(), c.a.$emit(c.b.ASSISTANT_POPUP), this.download()
                }, hide: function (t) {
                    this.$refs.p.hide(t);
                    var e = ["tasks", "zstasks", "zstask_detail"]; - 1 !== _.indexOf(e, this.$route.name) && setTimeout(function () {
                        $router.back("/dashboard")
                    }, 300)
                }
            }, n.i(i.c)("assistant", ["download"]))
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(2),
            a = n.n(s),
            i = n(1),
            o = n(9),
            r = n.n(o),
            c = n(5),
            u = n(3);
        e.default = {
            components: {
                CustomPopup: r.a
            },
            props: {
                mode: {
                    type: String,
                    default: "auto",
                    validator: function (t) {
                        return "auto" === t || "manual" === t
                    }
                }
            },
            data: function () {
                return {
                    currentRoute: ""
                }
            }, computed: a()({}, n.i(i.a)("assistant", ["info"]), n.i(i.e)("assistant", ["showAssistantUnopenPopup"]), {
                showHide: function () {
                    return -1 === _.indexOf(["task_detail", "easy_detail"], this.currentRoute)
                }
            }),
            mounted: function () {
                var t = this;
                setTimeout(function () {
                    t._init(t.showAssistantUnopenPopup)
                }, 500)
            }, destroyed: function () {
                c.a.$off(c.b.POPUP_ASSISTANT_UNOPEN)
            }, watch: {
                showAssistantUnopenPopup: function (t) {
                    this._init(t)
                }
            }, methods: a()({
                _init: function (t) {
                    var e = this;
                    this.$refs.p && "auto" === this.mode && (t && 1 !== this.$refs.p.getState() && (this.$refs.p.show(), this.currentRoute = $router.currentRoute.name), t || 1 !== this.$refs.p.getState() || this.$refs.p.hide()), this.$refs.p && "manual" === this.mode && c.a.$on(c.b.POPUP_ASSISTANT_UNOPEN, function (t) {
                        t.showAssistantUnopenPopup && 1 !== e.$refs.p.getState() && (e.$refs.p.show(), e.currentRoute = $router.currentRoute.name), t.showAssistantUnopenPopup || 1 !== e.$refs.p.getState() || e.$refs.p.hide()
                    })
                }
            }, n.i(i.c)("assistant", ["open", "download"]), {
                isIOSLessThan8: function () {
                    if (n.i(u.n)()) return !0
                }, toDownload: function () {
                    this.$refs.p.hide(), 3 === this.info.app_type && c.a.$emit(c.b.ASSISTANT_POPUP), this.download()
                }, hide: function (t) {
                    this.$refs.p.hide(t);
                    var e = ["tasks", "zstasks", "zstask_detail"]; - 1 !== _.indexOf(e, this.$route.name) && setTimeout(function () {
                        $router.back("/dashboard")
                    }, 300)
                }
            })
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(2),
            a = n.n(s),
            i = n(1),
            o = n(9),
            r = n.n(o),
            c = n(5),
            u = n(4);
        e.default = {
            components: {
                CustomPopup: r.a
            },
            data: function () {
                return {
                    app_name: "",
                    reward: "",
                    cards: [{
                        rotate: !1
                    }, {
                        rotate: !1
                    }, {
                        rotate: !1
                    }, {
                        rotate: !1
                    }],
                    fliped: !1
                }
            }, mounted: function () {
                var t = this;
                c.a.$on(c.b.BONUS_TASK_FINISHED, function (e) {
                    t.app_name = e.app_name, t.$refs.p.show()
                })
            }, destroyed: function () {
                c.a.$off(c.b.BONUS_TASK_FINISHED)
            }, methods: a()({}, n.i(i.c)("bonusTaskDetailLite", ["bonusFlip"]), {
                reverse: function (t) {
                    var e = this;
                    this.fliped || this.bonusFlip().then(function (n) {
                        e.fliped = !0, e.reward = n, e.cards[t].rotate = !0
                    })
                }, setClass: function (t, e) {
                    if (1 === e) {
                        var n = "flip-reserve-" + t;
                        if (this.cards[t].rotate) return n
                    } else {
                        var s = "flip-" + t;
                        if (this.cards[t].rotate) return s
                    }
                }, back: function () {
                    this.$refs.p.hide(), $storage.get(u.p) && $storage.remove(u.p), $router.back("/tasks/lite")
                }, backWithFinsh: function () {
                    this.reward && ($storage.get(u.p) && $storage.remove(u.p), $router.back("/tasks/lite"))
                }
            })
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(2),
            a = n.n(s),
            i = n(1),
            o = n(9),
            r = n.n(o),
            c = n(4);
        e.default = {
            components: {
                CustomPopup: r.a
            },
            computed: a()({}, n.i(i.a)("taskLite", ["show_bonus_popup", "bonus_tasks_reward"])),
            watch: {
                show_bonus_popup: function (t) {
                    1 === t && this.showBonusPopup()
                }
            },
            methods: a()({}, n.i(i.c)("taskLite", ["start"]), {
                startTask: function () {
                    var t = this,
                        e = {};
                    e.label = "bonus", e.id = 0, this.start(e).then(function () {
                        t.$refs.p.hide()
                    })
                }, showBonusPopup: function () {
                    this.$refs.p.show(), $storage.set(c.u, (new Date).getDate())
                }
            })
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(2),
            a = n.n(s),
            i = n(1),
            o = n(9),
            r = n.n(o);
        e.default = {
            components: {
                CustomPopup: r.a
            },
            data: function () {
                return {
                    currentRoute: ""
                }
            }, computed: a()({}, n.i(i.a)("assistant", ["info"]), n.i(i.e)("assistant", ["showAssistantUnopenPopup"]), {
                showHide: function () {
                    return -1 === _.indexOf(["task_detail", "easy_detail"], this.currentRoute)
                }
            }),
            mounted: function () {
                var t = this;
                setTimeout(function () {
                    t._init(t.showAssistantUnopenPopup)
                }, 500)
            }, watch: {
                showAssistantUnopenPopup: function (t) {
                    this._init(t)
                }
            }, methods: a()({
                _init: function (t) {
                    t && 1 !== this.$refs.p.getState() && (this.$refs.p.show(), this.currentRoute = $router.currentRoute.name), t || 1 !== this.$refs.p.getState() || this.$refs.p.hide()
                }
            }, n.i(i.c)("assistant", ["open", "download"]), {
                hide: function (t) {
                    this.$refs.p.hide(t);
                    var e = ["tasks", "zstasks", "zstask_detail"]; - 1 !== _.indexOf(e, this.$route.name) && setTimeout(function () {
                        $router.back("/dashboard")
                    }, 300)
                }
            })
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = {
            props: {
                callback: Function,
                troubleTimeout: null
            },
            data: function () {
                return {
                    state: 0,
                    title: ""
                }
            }, mounted: function () {
                var t = this;
                $bus.$on("showHumanCheckPopup", function (e) {
                    t.show(), t.callback = e
                })
            }, methods: {
                init: function () {
                    document.getElementById("sc").hasChildNodes() && (document.getElementById("sc").innerHTML = ""), this.$el.classList.contains("show-backdrop") || this.$el.classList.add("show-backdrop"), this.hideTrouble(), this.clearTroubleTimeout();
                    var t = this;
                    new(0, window.smartCaptcha)({
                        renderTo: "#sc",
                        width: 300,
                        height: 42,
                        default_txt: "点击开始验证",
                        success_txt: "验证成功",
                        fail_txt: "验证失败，请重试",
                        scaning_txt: "智能检测中",
                        success: function (e) {
                            t.hide(), $api.humanCheckAction(4), t.callback(e)
                        }, fail: function () {
                            t.clearTroubleTimeout(), $api.humanCheckAction(8)
                        }
                    }).init(), $api.humanCheckAction(1)
                }, show: function () {
                    this.$el.classList.add("show-backdrop"), this.init()
                }, cancel: function () {
                    this.clearTroubleTimeout(), $api.humanCheckAction(2), this.hide()
                }, showTrouble: function () {
                    this.$el.getElementsByClassName("trouble")[0].style.display = "block"
                }, hideTrouble: function () {
                    this.$el.getElementsByClassName("trouble")[0].style.display = "none"
                }, trouble: function () {
                    this.hide(), $api.humanCheckAction(5), this.callback({
                        trouble: 1
                    })
                }, startTimeout: function () {
                    var t = this;
                    this.troubleTimeout = setTimeout(function () {
                        t.showTrouble()
                    }, 1e4), $api.humanCheckAction(9)
                }, clearTroubleTimeout: function () {
                    this.troubleTimeout && (clearTimeout(this.troubleTimeout), this.troubleTimeout = null)
                }, hide: function () {
                    document.getElementById("sc").innerHTML = "", this.$el.classList.remove("show-backdrop")
                }
            }
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(2),
            a = n.n(s),
            i = n(1),
            o = n(9),
            r = n.n(o),
            c = n(3);
        e.default = {
            components: {
                CustomPopup: r.a
            },
            props: {
                isLite: {
                    type: Boolean,
                    default: !1
                }
            },
            computed: a()({}, n.i(i.a)(["showInstallCertificationPopup"])),
            watch: {
                showInstallCertificationPopup: function (t) {
                    if (t) return $loading.hide(), void this.show();
                    this.hide()
                }
            },
            methods: a()({
                show: function () {
                    this.$refs.p.show()
                }, hide: function (t) {
                    this.$refs.p.hide(t), this.hideInstallCertificationPopup()
                }, install: function () {
                    var t = $cookie.get("DIS4");
                    this.isLite ? n.i(c.o)("/v4/tasks/lite", t) : n.i(c.o)("/v4/tasks", t), this.hide()
                }
            }, n.i(i.c)(["hideInstallCertificationPopup"]))
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(2),
            a = n.n(s),
            i = n(9),
            o = n.n(i),
            r = n(1);
        e.default = {
            components: {
                CustomPopup: o.a
            },
            computed: a()({}, n.i(r.a)("task", ["kagou_link", "showInstallKagouPopup"])),
            watch: {
                showInstallKagouPopup: function (t) {
                    if (t) return void this.show();
                    this.hide()
                }
            },
            methods: a()({
                show: function () {
                    this.$refs.p.show()
                }, hide: function (t) {
                    this.$refs.p.hide(t), this.hideKagou()
                }, install: function () {
                    this.kagou_link && (location.href = this.kagou_link)
                }
            }, n.i(r.c)("task", ["hideKagou"]))
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(2),
            a = n.n(s),
            i = n(1),
            o = n(9),
            r = n.n(o);
        e.default = {
            components: {
                CustomPopup: r.a
            },
            props: {
                mode: {
                    type: String,
                    default: "auto",
                    validator: function (t) {
                        return "auto" === t || "manual" === t
                    }
                }
            },
            data: function () {
                return {
                    currentRoute: ""
                }
            }, computed: a()({}, n.i(i.e)("task", ["showNoHelpTaskPopup"]), {
                showHide: function () {
                    return -1 === _.indexOf(["task_detail", "easy_detail"], this.currentRoute)
                }
            }),
            mounted: function () {
                var t = this;
                setTimeout(function () {
                    t._init(t.showNoHelpTaskPopup)
                }, 500)
            }, destroyed: function () {
                this.$refs.p.hide()
            }, watch: {
                showNoHelpTaskPopup: function (t) {
                    this._init(t)
                }
            }, methods: {
                _init: function (t) {
                    this.$refs.p && "auto" === this.mode && (t && 1 !== this.$refs.p.getState() && (this.$refs.p.show(), this.currentRoute = $router.currentRoute.name), t || 1 !== this.$refs.p.getState() || this.$refs.p.hide())
                }, start: function () {
                    $router.forward("/tasks/"), this.$refs.p.hide()
                }
            }
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(9),
            a = n.n(s),
            i = n(4);
        e.default = {
            components: {
                CustomPopup: a.a
            },
            props: {
                href: String
            },
            data: function () {
                return {
                    isChecked: 0
                }
            }, methods: {
                show: function () {
                    this.$refs.p.show()
                }, hide: function (t) {
                    this.isChecked && $storage.set(i.j, 1), this.$refs.p.hide(t), location.href = this.href
                }, check: function () {
                    this.isChecked = !this.isChecked
                }
            }
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(2),
            a = n.n(s),
            i = n(1),
            o = n(9),
            r = n.n(o);
        e.default = {
            components: {
                CustomPopup: r.a
            },
            props: {
                mode: {
                    type: String,
                    default: "auto",
                    validator: function (t) {
                        return "auto" === t || "manual" === t
                    }
                }
            },
            data: function () {
                return {
                    currentRoute: ""
                }
            }, computed: a()({}, n.i(i.e)("task", ["showNoHelpTaskPopup"]), {
                showHide: function () {
                    return -1 === _.indexOf(["task_detail", "easy_detail"], this.currentRoute)
                }
            }),
            mounted: function () {
                var t = this;
                setTimeout(function () {
                    t._init(t.showNoHelpTaskPopup)
                }, 500)
            }, destroyed: function () {
                this.$refs.p.hide()
            }, watch: {
                showNoHelpTaskPopup: function (t) {
                    this._init(t)
                }
            }, methods: {
                _init: function (t) {
                    this.$refs.p && "auto" === this.mode && (t && 1 !== this.$refs.p.getState() && (this.$refs.p.show(), this.currentRoute = $router.currentRoute.name), t || 1 !== this.$refs.p.getState() || this.$refs.p.hide())
                }, start: function () {
                    this.$refs.p.hide()
                }
            }
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(2),
            a = n.n(s),
            i = n(1),
            o = n(42);
        e.default = {
            computed: a()({}, n.i(i.a)("assistant", ["info"])),
            mixins: [o.a]
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(2),
            a = n.n(s),
            i = n(1),
            o = n(11),
            r = n(32),
            c = n.n(r),
            u = n(6),
            l = n(42);
        e.default = {
            props: {
                taskType: {
                    type: String,
                    default: "standard"
                }
            },
            components: {
                Action: o.a,
                ActionList: o.b,
                Tags: c.a
            },
            computed: a()({
                title: function () {
                    return "easy" === this.taskType ? "简易任务预告" : "标准任务预告"
                }
            }, n.i(i.a)("task", ["tasks_coming", "easy_coming", "ongoing", "has_tasks_coming"]), {
                coming: function () {
                    return "easy" === this.taskType ? this.easy_coming : this.tasks_coming
                }
            }, n.i(i.e)("assistant", ["isNewbie"]), {
                showActionList: function () {
                    return "easy" === this.taskType ? this.coming.length > 0 : this.coming.length > 0 || !this.has_tasks_coming
                }
            }),
            mixins: [l.a],
            methods: a()({
                onComingTaskClick: function () {
                    var t = this,
                        e = function () {
                            _.find(t.ongoing, function (t) {
                                return 1 === t.type
                            }) ? $popup.fromTemplate(u.r.template, u.r.options).show() : $toast.show("任务还没开始哦~")
                        };
                    this.isAssistantAlive().then(function () {
                        e()
                    }, function () {
                        if (t.isNewbie) return void t.showDownloadAssistantPopup();
                        e()
                    })
                }
            }, n.i(i.c)("assistant", {
                isAssistantAlive: "alive"
            }))
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(2),
            a = n.n(s),
            i = n(1),
            o = n(11);
        e.default = {
            components: {
                Action: o.a,
                ActionList: o.b
            },
            computed: a()({}, n.i(i.a)("task", ["ongoing", "easy"])),
            methods: a()({
                startTask: function (t) {
                    this.getTaskDetail(t.id)
                }, getTaskDetail: function (t) {
                    function e(t) {
                        n.start(t).then(function (n) {
                            switch (n.type) {
                                case 1:
                                    setTimeout(function () {
                                        e(t)
                                    }, n.delay || 1e3);
                                    break;
                                case 2:
                                    $loading.hide(), $router.forward("/easy/detail/" + t);
                                    break;
                                case 3:
                                    $toast.show(n.message || "出错了")
                            }
                        })
                    }
                    $loading.show("排队中, 请勿刷新页面");
                    var n = this;
                    e(t)
                }
            }, n.i(i.c)("easy", ["start"]), n.i(i.c)("assistant", {
                isAssistantAlive: "alive"
            }))
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(2),
            a = n.n(s),
            i = n(1),
            o = n(11),
            r = n(466),
            c = n.n(r);
        e.default = {
            components: {
                Action: o.a,
                ActionList: o.b,
                Banner: c.a
            },
            data: function () {
                return {
                    banner_url: "",
                    game_url: ""
                }
            }, computed: a()({}, n.i(i.a)("task", ["game_banner", "game_cards"]), n.i(i.e)("task", ["showGameBanner"])),
            methods: {
                getGame: function (t) {
                    location.href = t
                }
            }
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(2),
            a = n.n(s),
            i = n(1),
            o = n(11),
            r = n(32),
            c = n.n(r);
        e.default = {
            components: {
                Action: o.a,
                ActionList: o.b,
                Tags: c.a
            },
            computed: a()({}, n.i(i.a)("task", ["recommends"])),
            methods: {
                jump: function (t) {
                    t.onPortalClick()
                }
            }
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(28),
            a = n.n(s),
            i = n(2),
            o = n.n(i),
            r = n(16),
            c = n.n(r),
            u = n(1),
            l = n(11),
            p = n(32),
            d = n.n(p),
            f = n(42),
            v = n(6),
            h = n(3),
            m = n(648),
            g = n.n(m),
            b = n(4),
            k = n(73);
        c.a.use(g.a);
        var w = [];
        e.default = {
            components: {
                Action: l.a,
                ActionList: l.b,
                Tags: d.a
            },
            data: function () {
                return {}
            }, updated: function () {
                var t = this;
                setTimeout(function () {
                    t.reportSubtaskToCrius()
                }, 1e3)
            }, computed: o()({}, n.i(u.a)("task", ["newbie", "tasks", "ongoing", "in_compare", "has_tasks"]), n.i(u.e)("task", ["newbieTips", "tasksTips"]), n.i(u.e)("assistant", ["isNewbie"]), n.i(u.a)("assistant", {
                assistant_alive: "status"
            })),
            mixins: [f.a],
            beforeMount: function () {
                document.body.addEventListener("touchend", this.reportSubtaskToCrius)
            }, beforeDestroy: function () {
                this.reportSubtaskToCrius()
            }, destroyed: function () {
                document.body.removeEventListener("touchend", this.reportSubtaskToCrius)
            }, methods: o()({
                today: function () {
                    var t = new Date;
                    return t.getFullYear() + "-" + t.getMonth() + "-" + t.getDate()
                }, getAlreadyReportTasks: function () {
                    var t = $storage.get(b._5),
                        e = {},
                        n = [];
                    t && "" !== t.trim() && (e = JSON.parse(t));
                    var s = this.today();
                    return e && e.data && Array.isArray(e.data) ? e.day && e.day === s ? n = e.data : (this.clearAlreadyReportTasks(), n) : n
                }, setAlreadyReportTasks: function (t) {
                    var e = this.today(),
                        n = {};
                    n.data = t, n.day = e, $storage.set(b._5, a()(n))
                }, clearAlreadyReportTasks: function () {
                    $storage.set(b._5, "")
                }, reportSubtaskToCrius: function () {
                    if (0 !== w.length) try {
                        var t = this.getAlreadyReportTasks(),
                            e = [];
                        if (w.forEach(function (n, s) {
                            -1 === t.indexOf(n) && e.push(n)
                        }), w = [], 0 === e.length) return;
                        h.d.sendAction("PAGE", "subtask_view", e), e.forEach(function (e, n) {
                            t.push(e)
                        }), this.setAlreadyReportTasks(t)
                    } catch (t) {}
                }, taskEnterView: function (t) {
                    var e = t.getAttribute("data-id");
                    e = parseInt(e), -1 === w.indexOf(e) && w.push(e)
                }, shoutu: function () {
                    $router.forward({
                        path: "/apprentice",
                        query: {
                            from_shoutu_portal: 1
                        }
                    })
                }, start: function (t) {
                    var e = this;
                    this.isAssistantAlive().then(function () {
                        if (t.isPortal) return void t.onPortalClick();
                        if (2 === t.status) return void $router.forward({
                            path: "/task/detail/" + t.task_id
                        });
                        if (t.type && "gaoe" === t.type) return void n.i(k.a)(t);
                        var s = _.find(e.ongoing, function (t) {
                            return 1 === t.type
                        });
                        s && s.id !== t.id ? $popup.fromTemplate(v.r.template, v.r.options).show() : (h.d.sendAction("EVENT", "click_subtask_start", {
                            task_id: t.id
                        }), e.$store.dispatch("task/start", t))
                    }, function () {
                        e.isNewbie && e.showDownloadAssistantPopup()
                    })
                }
            }, n.i(u.c)("assistant", {
                isAssistantAlive: "alive"
            }))
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(2),
            a = n.n(s),
            i = n(1),
            o = n(11),
            r = n(6);
        e.default = {
            components: {
                Action: o.a,
                ActionList: o.b
            },
            computed: a()({}, n.i(i.a)("task", ["ongoing", "show_push"])),
            mounted: function () {}, methods: {
                start: function (t) {
                    switch (t.type) {
                        case 1:
                            $router.forward("/task/detail/" + t.id);
                            break;
                        case 2:
                            $router.forward("/easy/detail/" + t.id)
                    }
                }, showPushPopup: function () {
                    $assistant.alive().then(function (t) {
                        $popup.fromTemplate(r.q.template, r.q.options).show().then(function (e) {
                            if (0 === e) {
                                var n = t.data && t.data.payload;
                                location.href = n.scheme + "://notification.appsetting"
                            }
                        })
                    })
                }
            }
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(2),
            a = n.n(s),
            i = n(1),
            o = n(10),
            r = n.n(o),
            c = n(23),
            u = n.n(c),
            l = n(27),
            p = n.n(l),
            d = n(33),
            _ = n.n(d),
            f = n(22),
            v = n.n(f),
            h = n(6),
            m = n(4),
            g = n(3),
            b = function () {
                var t = /OS ((\d{1,2})_\d{1,2}||(\d{1,2})_\d{1,2}_\d{1,2}) like Mac OS X/i,
                    e = t.exec(window.navigator.userAgent),
                    n = e && e[1] && e[1].substr(0, 2);
                return 11 === parseInt(n)
            };
        e.default = {
            components: {
                AnimateHeader: r.a,
                CountDown: u.a,
                TaskDetailTitle: p.a,
                AssistantInvalid: _.a,
                AssistantUnopen: v.a
            },
            data: function () {
                return {
                    appStatus: 0,
                    syncTimer: 0,
                    btnRewardText: "领取奖励",
                    btnRewardEnabled: $storage.get(m._4 + ":" + this.$route.params.id) || 0,
                    showCountDown: !1,
                    is_ios_11: b()
                }
            }, computed: a()({}, n.i(i.a)("easy", ["detail"])),
            mounted: function () {
                this.refresh()
            }, destroyed: function () {
                clearTimeout(this.syncTimer)
            }, methods: a()({
                syncAppStatus: function (t) {
                    function e(t) {
                        $assistant.getAppInfo(t).then(function (t) {
                            return t && t.data && t.data.payload
                        }).then(function (s) {
                            if (s && s.bundle_id) {
                                if (s.bundle_version) {
                                    $assistant.updateState();
                                    var a = 10;
                                    return void
                                        function t() {
                                            if (a > 0) return n.btnRewardText = "正在检测应用(" + a + "s)", a--, void setTimeout(function () {
                                                t()
                                            }, 1e3);
                                            n.btnRewardText = "领取奖励", n.appStatus = 2
                                        }()
                                }
                                n.appStatus = 1
                            } else n.appStatus = 0;
                            n.appStatus < 2 && (n.syncTimer = setTimeout(function () {
                                e(t)
                            }, 1e3))
                        })
                    }
                    var n = this;
                    b() || e(t)
                }, openApp: function (t) {
                    var e = this;
                    this.isAssistantAlive().then(function () {
                        $assistant.openAppIOS11({
                            bid: t.bundle_id,
                            url: t.callback_url
                        }).then(function (t) {
                            return t.data && t.data.status
                        }).then(function (t) {
                            "ok" === t ? (e.appStatus = 2, e.btnRewardEnabled = 1, $storage.set(m._4 + ":" + e.$route.params.id, 1), $assistant.updateState()) : $toast.show("应用没有安装或正在安装")
                        })
                    })
                }, refresh: function () {
                    var t = this;
                    this.isAssistantAlive().then(function () {
                        return t.fetch(t.$route.params.id)
                    }).then(function (e) {
                        t.syncAppStatus(e.bundle_id), t.showCountDown = !0
                    })
                }, back: function () {
                    var t = this;
                    $popup.fromTemplate(h.k.template, h.k.options).show().then(function (e) {
                        if (0 === e) {
                            var n = function () {
                                $router.back("/tasks")
                            };
                            if (0 === t.detail.task_id) return void n();
                            t.giveup(t.detail.task_id).then(function () {
                                $storage.set(m._4 + ":" + t.$route.params.id, 0), n()
                            })
                        }
                    })
                }, download: function (t) {
                    this.is_ios_11 || (this.btnRewardEnabled = 1, $storage.set(m._4 + ":" + this.$route.params.id, 1)), location.href = n.i(g.e)(t, {
                        return_url: location.href
                    })
                }, checkState: function (t) {
                    return 0 === this.appStatus ? void $popup.fromTemplate('\n            <div class="title">\n              下载失败\n            </div>\n            <div class="desc">\n              您下载的应用错误或尚未完成安装\n            </div>\n          ', {
                        cssClass: "popup-general",
                        buttons: [{
                            text: "知道了"
                        }]
                    }).show() : 1 === this.appStatus ? void $popup.fromTemplate('\n            <div class="text-center">\n              应用下载中，安装后可领取奖励\n            </div>\n          ', {
                        buttons: [{
                            text: "知道了"
                        }]
                    }).show() : void this.check(t).then(function (t) {
                        2 === t.status && $popup.fromTemplate('\n              <div class="title">\n                拼命提交任务中\n              </div>\n\n              <div class="desc">\n                繁忙期间可能存在几分钟延迟\n              </div>\n            ', {
                            cssClass: "popup-general",
                            buttons: [{
                                text: "知道了"
                            }]
                        }).show(), $assistant.updateState()
                    })
                }
            }, n.i(i.c)("assistant", {
                isAssistantAlive: "alive"
            }), n.i(i.c)("easy", ["fetch", "check", "giveup"]))
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(10),
            a = n.n(s),
            i = n(101),
            o = n.n(i),
            r = n(149),
            c = (n.n(r), n(4)),
            u = n(3),
            l = !1;
        e.default = {
            components: {
                AnimateHeader: a.a,
                BackArrow: o.a
            },
            data: function () {
                return {
                    form: {
                        phone: "",
                        code: ""
                    },
                    showPhone: "",
                    canSubmit: !1,
                    getCodeLock: !1,
                    getCodeText: "获取验证码",
                    sec: 0,
                    loginLock: !1,
                    voiceVerify: !1
                }
            }, watch: {
                "form.phone": function (t) {
                    if (!l) {
                        l = !0;
                        var e = t.replace(/\s/g, "");
                        this.form.phone = _.filter([e.substr(0, 3), e.substr(3, 4), e.substr(7, 4)], function (t) {
                            return "" !== t
                        }).join(" "), l = !1, this.canSubmit = this.canFormSubmit(t, this.form.code)
                    }
                }, "form.code": function (t) {
                    this.canSubmit = this.form.phone && t && 4 == t.length, t.length > 4 && (this.form.code = t.substr(0, 4)), this.canSubmit = this.canFormSubmit(this.form.phone, t)
                }
            }, mounted: function () {
                this.isAutoUser();
                var t = this.getUrlParam("mobile");
                t && (this.form.phone = t, this.showPhone = t.substr(0, 3) + "****" + t.substr(7));
                var e = location.search;
                e.length > 0 && e.indexOf("match_user=1") >= 0 && $api.matchUser().then(function (t) {
                    return t.data
                }).then(function (t) {
                    if (10001 == t.err_code) {
                        return $popup.fromTemplate(r.invalid_certification.template, r.invalid_certification.options).show()
                    }
                    $storage.set(c._3, 1), $storage.set(c.I, $cookie.get(c.J)), location.href = "/v4/dashboard"
                })
            }, destroyed: function () {
                $modal.destroy(this.agreement)
            }, methods: {
                isAutoUser: function () {
                    $storage.set(c.L, "1")
                }, back: function () {
                    if (/iPad/.test(navigator.userAgent)) location.href = "/v4/";
                    else {
                        var t = _.get(this.$route.query, "backroute", "/");
                        $router.back({
                            path: t
                        })
                    }
                }, getUrlParam: function (t) {
                    var e = new RegExp("(^|&)" + t + "=([^&]*)(&|$)"),
                        n = window.location.search.substr(1).match(e);
                    return null !== n ? unescape(n[2]) : null
                }, sendCode: function () {
                    this.voiceVerify ? this.popCodeType() : this.getCode(1)
                }, getCode: function (t) {
                    var e = this;
                    if (!(this.getCodeLock || (this.getCodeLock = !0, this.sec > 0))) {
                        var n = this.form.phone.replace(/\s/g, ""),
                            s = "";
                        if (n ? /^1[23456789][\d]{9}$/.test(n) || (s = "手机号格式不正确") : s = "手机号不能为空", s) return setTimeout(function () {
                            e.getCodeLock = !1
                        }, 1e3), void $toast.show(s);
                        this.voiceVerify = !0, $api.loginSendCode({
                            phone: n,
                            type: t
                        }).then(function (t) {
                            return t.data && t.data.err_code
                        }).then(function (t) {
                            if (10001 == t) return e.unregisteredPhone(), void(e.voiceVerify = !1);
                            e.sec = 60, e.countDown()
                        }, function () {
                            e.getCodeLock = !1
                        })
                    }
                }, popCodeType: function () {
                    var t = this;
                    $popup.fromTemplate(r.popup_choose_verify_code_type.template, r.popup_choose_verify_code_type.options).show().then(function (e) {
                        0 === e && t.getCode(1), 1 === e && t.getCode(2)
                    })
                }, login: function () {
                    var t = this;
                    if (this.canSubmit && !this.loginLock) {
                        this.loginLock = !0, setTimeout(function () {
                            t.loginLock = !1
                        }, 1e3);
                        var e = this.form.phone.replace(/\s/g, ""),
                            n = this.form.code,
                            s = "";
                        if (e ? /^1[23456789][\d]{9}$/.test(e) ? n ? /^[\d]{4}$/.test(n) || (s = "验证码格式不正确") : s = "验证码不能为空" : s = "手机号格式不正确" : s = "手机号不能为空", s) return void $toast.show(s);
                        $api.loginByPhone({
                            phone: e,
                            code: n
                        }).then(function (t) {
                            return t.data
                        }).then(function (t) {
                            if (10002 === t.err_code) return void $toast.show(t.err_msg);
                            $storage.set(c.I, $cookie.get(c.J));
                            var e = {
                                path: "/tasks"
                            };
                            $router.forward(e)
                        })
                    }
                }, countDown: function () {
                    var t = this;
                    this.sec ? (this.sec--, this.getCodeText = this.sec ? this.sec + "s" : "发送验证码", setTimeout(function () {
                        t.countDown()
                    }, 1e3)) : this.getCodeLock = !1
                }, unbindPhone: function () {
                    $popup.fromTemplate(r.login_with_certification.template, r.login_with_certification.options).show().then(function (t) {
                        if (1 == t) {
                            var e = location.protocol + "//" + location.host + "/v4/login?match_user=1",
                                s = $cookie.get("DIS4");
                            n.i(u.o)(e, s)
                        }
                    })
                }, unregisteredPhone: function () {
                    var t = this;
                    $popup.fromTemplate(r.get_code_fail.template, r.get_code_fail.options).show().then(function (e) {
                        1 == e ? $api.createUser().then(function () {
                            $api.dashboard().then(function () {
                                $router.forward({
                                    path: "/dashboard"
                                })
                            })
                        }) : t.getCodeLock = !1
                    })
                }, canFormSubmit: function (t, e) {
                    return t && 13 == t.length && e && 4 == e.length
                }, goRegister: function () {
                    $router.back({
                        path: "/dashboard"
                    })
                }
            }
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(2),
            a = n.n(s),
            i = n(1),
            o = n(11);
        e.default = {
            data: function () {
                return {}
            }, components: {
                ActionList: o.b
            }, computed: a()({}, n.i(i.a)("task", ["zstask_info"])),
            methods: {
                jumpTo: function () {
                    $router.forward("/zstasks")
                }
            }
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(2),
            a = n.n(s),
            i = n(1),
            o = n(3);
        e.default = {
            computed: a()({}, n.i(i.a)("task", ["is_jail_broken"])),
            methods: {
                customService: function () {
                    location.href = n.i(o.l)()
                }
            }
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(8),
            a = n.n(s),
            i = n(2),
            o = n.n(i),
            r = n(19),
            c = (n.n(r), n(1)),
            u = n(10),
            l = n.n(u),
            p = n(23),
            d = n.n(p),
            _ = n(27),
            f = n.n(_),
            v = n(6),
            h = n(22),
            m = n.n(h),
            g = n(33),
            b = n.n(g),
            k = n(99),
            w = n.n(k),
            C = n(50),
            y = n.n(C),
            T = n(49),
            x = n.n(T),
            S = n(4),
            $ = n(3),
            A = !1,
            P = !1;
        e.default = {
            components: {
                AnimateHeader: l.a,
                CountDown: d.a,
                TaskDetailTitle: f.a,
                AssistantUnopen: m.a,
                AssistantInvalid: b.a,
                NoHelpTask: w.a,
                StartTaskPopup: y.a,
                AppstorePopup: x.a
            },
            data: function () {
                return {
                    isPad: /iPad/.test(navigator.userAgent),
                    noHelpTask: !1,
                    href: ""
                }
            }, computed: o()({}, n.i(c.a)("taskDetail", ["task_id", "task_status", "reward", "app_keyword", "app_rank", "app_name", "app_icon", "app_url", "app_bid", "app_exe", "tips", "expire_at", "exclusive_count", "exclusive_reward", "show_coupon_btn", "double_reward", "steps", "show_coupon", "coupon_num", "is_invest", "check_idfa", "go_app_store_type"]), n.i(c.e)("taskDetail", ["couponNum"])),
            mounted: function () {
                var t = this;
                this.fetch(this.$route.params.id).then(function () {
                    t.href = n.i($.e)(t.app_url, {
                        return_url: location.href
                    }), t.check_idfa && t.checkIDFA()
                })
            }, destroyed: function () {
                this.cancelPoll()
            }, methods: o()({
                checkIDFA: function () {
                    var t = this;
                    $loading.show("任务匹配中..."), setTimeout(function () {
                        $api.subtaskCheckIDFA(t.$route.params.id).then(function (t) {
                            return t.data
                        }).then(function (e) {
                            if (10002 === e.err_code) return void $toast.show(e.err_msg);
                            e.payload.status ? t.noHelpTask = !0 : t.noHelpTask = !1, $loading.hide()
                        })
                    }, 5e3)
                }, goAppstore: function () {
                    var t = this;
                    this.isAssistantAlive().then(function () {
                        new a.a(function (e) {
                            0 !== t.steps[2] ? e() : (t.updateSteps(S.l), e())
                        }).then(function () {
                            1 === t.go_app_store_type && t.app_keyword ? t.$refs.appstore.show() : location.href = n.i($.e)(t.app_url, {
                                return_url: location.href
                            })
                        })
                    })
                }, openApp: function () {
                    var t = this;
                    this.isAssistantAlive().then(function () {
                        var e = $popup.fromTemplate(v.j.template, v.j.options);
                        t.is_invest && 1 !== t.steps[0] ? e.show().then(function () {
                            t.openWithVersion()
                        }) : t.openWithVersion()
                    })
                }, openWithVersion: function () {
                    A || (A = !0, setTimeout(function () {
                        A = !1
                    }, 1e3), n.i($.j)() ? this._openAppWith11() : this._openApp())
                }, checkTaskStatus: function () {
                    var t = this;
                    P || (P = !0, setTimeout(function () {
                        P = !1
                    }, 1e3), 0 !== this.steps[2] && this.isAssistantAlive().then(function () {
                        t._checkTaskStatus()
                    }))
                }, useCoupon: function () {
                    var t = this;
                    this._useCoupon().then(function () {
                        t.doubleReward()
                    })
                }, removeNeedHideCouponId: function () {
                    var t = $storage.get(S.q) || [],
                        e = $storage.get(S.d) + "-" + this.task_id,
                        n = t.indexOf(e);
                    n > -1 && (t.splice(n, 1), $storage.set(S.q, t))
                }, back: function () {
                    var t = this;
                    $popup.fromTemplate(v.k.template, v.k.options).show().then(function (e) {
                        if (!e) {
                            var n = function () {
                                setTimeout(function () {
                                    $router.back({
                                        path: "/tasks"
                                    })
                                }, 200)
                            };
                            if (0 === t.task_id) return void n();
                            $api.subtaskGiveup(t.task_id).then(function () {
                                $storage.get(S.p) && $storage.remove(S.p), t.removeNeedHideCouponId(), n()
                            })
                        }
                    })
                }, talkToCustomerService: function () {
                    window.location.href = n.i($.l)()
                }
            }, n.i(c.c)("taskDetail", ["fetch", "_openApp", "_openAppWith11", "_checkTaskStatus", "_useCoupon", "updateSteps", "cancelPoll"]), n.i(c.c)("assistant", {
                isAssistantAlive: "alive"
            }), {
                doubleReward: function () {
                    var t = document.querySelector("[task-detail-reward]"),
                        e = parseFloat(this.reward),
                        s = this.double_reward;
                    n.i(r.tween)({
                        from: {
                            x: e
                        },
                        to: {
                            x: s
                        },
                        duration: 750,
                        easing: "easeOutQuad",
                        step: function (e) {
                            t.innerHTML = e.x.toFixed(1)
                        }
                    }).then(function () {
                        t.innerHTML = s.toFixed(1)
                    })
                }
            })
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(2),
            a = n.n(s),
            i = n(1),
            o = n(74),
            r = n.n(o),
            c = n(75),
            u = n.n(c),
            l = n(481),
            p = n.n(l),
            d = n(480),
            f = n.n(d),
            v = n(478),
            h = n.n(v),
            m = n(477),
            g = n.n(m),
            b = n(484),
            k = n.n(b),
            w = n(479),
            C = n.n(w),
            y = n(100),
            T = n.n(y),
            x = n(485),
            S = n.n(x),
            $ = n(22),
            A = n.n($),
            P = n(474),
            E = n.n(P),
            I = n(33),
            L = n.n(I),
            O = n(98),
            R = n.n(O),
            N = n(476),
            D = n.n(N),
            F = n(143),
            M = n.n(F),
            U = n(3),
            q = n(139),
            B = n.n(q),
            H = n(6),
            z = n(5),
            j = n(4);
        e.default = {
            components: {
                TaskListHeader: r.a,
                AssistantBanner: u.a,
                IndividualTask: k.a,
                BlockTasksOngoing: p.a,
                BlockTasks: f.a,
                BlockRecommends: C.a,
                BlockEasy: h.a,
                BlockGame: T.a,
                BlockComing: g.a,
                JailBroken: S.a,
                AssistantUnopen: A.a,
                HelpAssistantUnopen: E.a,
                AssistantInvalid: L.a,
                InstallCertification: R.a,
                InstallKagou: D.a,
                YearPopup: M.a,
                gangAoTaiPopup: B.a
            },
            data: function () {
                return {
                    showAssistantBanner: !1,
                    is_auto: 0
                }
            }, computed: a()({}, n.i(i.a)("task", ["zstask_info", "tasks_coming", "new_year", "gangAoTaiPopupVar"]), n.i(i.e)("assistant", ["isNewbie"])),
            mounted: function () {
                var t = this;
                this.isAutoUser(), this.refresh(), z.a.$on(z.b.POPUP_JAIL_BREAKER, function () {
                    t.showJailBreakerPopup()
                }), z.a.$on(z.b.POPUP_BIND_PHONE, function () {
                    t.showBindPhonePopup()
                }), z.a.$on(z.b.POPUP_USER_FREEZE, function () {
                    t.showUserFreezePopup()
                })
            }, methods: a()({
                isAutoUser: function () {
                    this.$route.query.is_auto && "1" === this.$route.query.is_auto ? (this.is_auto = 1, $storage.set(j.L, "1")) : "1" === $storage.get(j.L) && (this.is_auto = 1)
                }, back: function () {
                    if (this.$route.query) {
                        var t = _.get(this.$route.query, "backroute", "dashboard");
                        $router.back({
                            path: t
                        })
                    } else $router.back({
                        path: "/dashboard"
                    })
                }, refresh: function () {
                    var t = this;
                    this.isAssistantAlive().then(function () {
                        t.$store.dispatch("task/fetch")
                    }, function () {
                        t.isNewbie && (t.showAssistantBanner = !0, t.$store.dispatch("task/fetchNewbie"))
                    })
                }
            }, n.i(i.c)("assistant", {
                isAssistantAlive: "alive"
            }), {
                showJailBreakerPopup: function () {
                    $popup.fromTemplate(H.l.template(n.i(U.l)()), H.l.options).show()
                }, showBindPhonePopup: function () {
                    var t = t = $popup.fromTemplate(H.m.template, H.m.options);
                    t.show().then(function (t) {
                        1 === t && $router.forward({
                            path: "/user/bindMobile/0",
                            query: {
                                backroute: "/tasks"
                            }
                        })
                    })
                }, showUserFreezePopup: function () {
                    $popup.fromTemplate(H.n.template(), H.n.options).show()
                }, getScrollTop: function () {
                    var t = this.$refs.scroller.getPosition();
                    t.left;
                    return t.top
                }
            })
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(2),
            a = n.n(s),
            i = n(10),
            o = n.n(i),
            r = n(27),
            c = n.n(r),
            u = n(22),
            l = n.n(u),
            p = n(33),
            d = n.n(p),
            _ = n(1),
            f = n(4),
            v = n(6),
            h = function () {
                var t = /OS ((\d{1,2})_\d{1,2}||(\d{1,2})_\d{1,2}_\d{1,2}) like Mac OS X/i,
                    e = t.exec(window.navigator.userAgent),
                    n = e && e[1] && e[1].substr(0, 2);
                return 11 === parseInt(n)
            };
        e.default = {
            components: {
                AnimateHeader: o.a,
                TaskDetailTitle: c.a,
                AssistantUnopen: l.a,
                AssistantInvalid: d.a
            },
            data: function () {
                return {
                    checkRewardLock: !1
                }
            }, computed: a()({}, n.i(_.a)("zstask", ["zstask_info", "steps"])),
            mounted: function () {
                var t = this;
                this.isAssistantAlive().then(function () {
                    t.fetchDetail(t.$route.params.id).then(function () {
                        t.zstask_info.status === f._0 && $api.zstaskCheckState(t.zstask_info.id), t.zstask_info.status === f._1 && $router.back("/zstasks")
                    })
                })
            }, methods: a()({
                openApp: function (t) {
                    var e = this;
                    this.isAssistantAlive().then(function () {
                        h() ? e._openAppWith11(t) : e._openApp(t)
                    })
                }, checkReward: function () {
                    var t = this;
                    this.isAssistantAlive().then(function () {
                        return 0 !== t.steps[1] && (!t.checkRewardLock && (t.checkRewardLock = !0, t._checkReward(), void setTimeout(function () {
                            t.checkRewardLock = !1
                        }, 600)))
                    })
                }, back: function () {
                    var t = this,
                        e = function () {
                            $router.back("/zstasks")
                        };
                    if (0 === this.zstask_info.id) return void e();
                    $api.zstaskCheckState(this.zstask_info.id).then(function (n) {
                        if (n.data.payload.status === f._0) {
                            var s = v.h;
                            $popup.fromTemplate(s.template, s.options).show().then(function (n) {
                                0 === n && $api.zstaskGiveup(t.zstask_info.id).then(function () {
                                    e()
                                })
                            })
                        } else e()
                    })
                }
            }, n.i(_.c)("zstask", ["fetchDetail", "updateSteps", "_openApp", "_openAppWith11", "_checkReward"]), n.i(_.c)("assistant", {
                isAssistantAlive: "alive"
            }))
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(2),
            a = n.n(s),
            i = n(10),
            o = n.n(i),
            r = n(11),
            c = n(1),
            u = n(4),
            l = n(6);
        e.default = {
            components: {
                Action: r.a,
                ActionList: r.b,
                AnimateHeader: o.a
            },
            computed: a()({}, n.i(c.a)("zstask", ["tasks"])),
            mounted: function () {
                this.$store.dispatch("zstask/fetch")
            }, methods: a()({
                back: function () {
                    $router.back("/tasks")
                }, start: function (t, e) {
                    if (!e.is_enabled && t.status !== u._0) {
                        return void(_.some(e.zs_tasks, function (t) {
                            return t.status === u._0
                        }) ? this.showPopup("has_ongoing") : this.showPopup("muted_task", {
                            date: e.date
                        }))
                    }
                    var n = {
                        name: "zstask_detail",
                        params: {
                            id: t.zs_task_id
                        }
                    };
                    $router.forward(n)
                }, showPopup: function (t, e) {
                    var n = void 0;
                    if ("muted_task" === t && $toast.show("任务还没开始哦~"), "has_ongoing" === t) {
                        var s = l.i;
                        n = $popup.fromTemplate(s.template, s.options)
                    }
                    n && n.show()
                }
            }, n.i(c.c)("zstask", ["fetch"]))
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = {
            data: function () {
                return {
                    rules: [{
                        title: "什么是预约券？",
                        desc: ["只需要花费 500 金币可预约一个即将开始的试玩任务，成功预约后，您可在任务开始30分钟内无需争抢，即可领到任务。", "每天限量预约数量，预约完即止，每人每天最多可预约3个任务，不可同时预约2个任务。"]
                    }, {
                        title: "如何获得金币？",
                        desc: ["每日领金币：每日打开钱咖，即可领取一定数额的金币奖励。", "阅读资讯：可通过阅读资讯，获得金币，每天最多可领取200金币奖励。", "探索任务：可在「首页-金币专区」完成探索任务，即可领取金币奖励。"]
                    }]
                }
            }
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(2),
            a = n.n(s),
            i = n(1),
            o = n(11),
            r = n(32),
            c = n.n(r),
            u = n(12);
        e.default = {
            props: {
                taskType: {
                    type: String,
                    default: "standard"
                },
                showAppointPopup: Function
            },
            components: {
                Action: o.a,
                ActionList: o.b,
                Tags: c.a
            },
            computed: a()({
                title: function () {
                    return "easy" === this.taskType ? "简易任务预告" : "任务预告"
                }
            }, n.i(i.a)("taskLite", ["tasks_coming", "easy_coming", "ongoing", "has_tasks_coming", "is_reservation", "reservation_tasks"]), {
                coming: function () {
                    return "easy" === this.taskType ? this.easy_coming : this.tasks_coming
                }, showActionList: function () {
                    return "easy" === this.taskType ? this.coming.length > 0 : this.coming.length > 0 || !this.has_tasks_coming
                }
            }),
            methods: {
                onComingTaskClick: function (t) {
                    t.reservation_qty > 0 && this.showAppointPopup ? this.reservation_tasks.length > 0 ? $toast.show("不可同时预约2个任务~") : this.showAppointPopup(t) : $toast.show("任务还没开始哦~")
                }, forwardTo: function (t) {
                    var e = window.location.origin + window.__ENV__.base + t;
                    n.i(u.h)(e)
                }
            }
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(2),
            a = n.n(s),
            i = n(1),
            o = n(11),
            r = n(32),
            c = n.n(r),
            u = n(12);
        e.default = {
            components: {
                Action: o.a,
                ActionList: o.b,
                Tags: c.a
            },
            computed: a()({}, n.i(i.a)("taskLite", ["recommends", "yl_huan_info"])),
            methods: {
                jump: function (t) {
                    if (t.isMiniPortal) return void n.i(u.l)({
                        userName: this.yl_huan_info.username,
                        path: this.yl_huan_info.path,
                        miniProgramType: this.yl_huan_info.miniprogram_type
                    });
                    t.onPortalClick()
                }
            }
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(2),
            a = n.n(s),
            i = n(1),
            o = n(11),
            r = n(32),
            c = n.n(r),
            u = n(6),
            l = n(3),
            p = n(42),
            d = n(73);
        e.default = {
            components: {
                Action: o.a,
                ActionList: o.b,
                Tags: c.a
            },
            computed: a()({}, n.i(i.a)("taskLite", ["newbie", "tasks", "ongoing", "in_compare", "has_tasks", "showAssistantBanner", "bonus_tasks_reward"]), n.i(i.e)("taskLite", ["newbieTips", "tasksTips"])),
            mixins: [p.a],
            methods: {
                shoutu: function () {
                    $router.forward({
                        path: "/apprentice",
                        query: {
                            from_shoutu_portal: 1
                        }
                    })
                }, start: function (t) {
                    if (this.showAssistantBanner) return void this.showDownloadAssistantPopup();
                    if (t.isPortal) return void t.onPortalClick();
                    if (2 === t.status) return void $router.forward({
                        path: "/task/detail/" + t.task_id
                    });
                    if (t.type && "gaoe" === t.type) return void n.i(d.a)(t);
                    var e = _.find(this.ongoing, function (t) {
                        return 1 === t.type && 2 === t.status
                    });
                    e && e.id !== t.id ? $popup.fromTemplate(u.o.template("标准"), u.o.options).show().then(function (t) {}) : (t.label && "bonus" === t.label.toString() && (t.id = 0), l.d.sendAction("EVENT", "click_subtask_start", {
                        task_id: t.id
                    }), this.$store.dispatch("taskLite/start", t))
                }
            }
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(2),
            a = n.n(s),
            i = n(1),
            o = n(11),
            r = n(6),
            c = n(4),
            u = n(6),
            l = n(23),
            p = n.n(l);
        e.default = {
            components: {
                Action: o.a,
                ActionList: o.b,
                CountDown: p.a
            },
            computed: a()({}, n.i(i.a)("taskLite", ["ongoing", "show_push", "bonus_tasks_reward"])),
            methods: a()({
                startAction: function (t) {
                    this.reservationStart(t.id).then(function (t) {
                        return t.data && t.data
                    }).then(function (e) {
                        if (10001 === e.err_code) return void $popup.fromTemplate(u.p.template, u.p.options).show().then(function () {
                            window.location.reload()
                        });
                        2 === e.payload.type && $router.forward("/task/detail/lite/" + t.id)
                    })
                }, start: function (t) {
                    var e = this;
                    if (t.label && "bonus" === t.label.toString() && (t.id = 0, $router.forward("/bonus/detail/lite/" + t.id)), 2 === t.status) 0 === t.id.toString().indexOf("u") ? $router.forward("/ufilter_task/detail/lite/" + t.id) : $router.forward("/task/detail/lite/" + t.id);
                    else if (4 === t.status) $toast.show("任务还没开始哦~");
                    else if (5 === t.status) {
                        var n = _.find(this.ongoing, function (t) {
                            return 1 === t.type && 2 === t.status
                        });
                        n && n.id !== t.id ? $popup.fromTemplate(u.o.template(), u.o.options).show().then(function (n) {
                            1 === n && e.startAction(t)
                        }) : this.startAction(t)
                    }
                }, showPushPopup: function () {
                    var t = this;
                    $api.assistantInfo().then(function (e) {
                        $popup.fromTemplate(r.q.template, r.q.options).show().then(function (n) {
                            if (0 === n) {
                                t.hidePush(), $storage.set(c.r, (new Date).getTime());
                                var s = e.data && e.data.payload;
                                location.href = s.app_scheme + "notification.appsetting"
                            }
                        })
                    })
                }
            }, n.i(i.c)("taskLite", ["hidePush", "reservationStart"]))
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(8),
            a = n.n(s),
            i = n(2),
            o = n.n(i),
            r = n(19),
            c = (n.n(r), n(1)),
            u = n(10),
            l = n.n(u),
            p = n(23),
            d = n.n(p),
            _ = n(27),
            f = n.n(_),
            v = n(6),
            h = n(50),
            m = n.n(h),
            g = n(49),
            b = n.n(g),
            k = n(472),
            w = n.n(k),
            C = n(4),
            y = n(3),
            T = n(5),
            x = !1;
        e.default = {
            components: {
                AnimateHeader: l.a,
                CountDown: d.a,
                TaskDetailTitle: f.a,
                StartTaskPopup: m.a,
                AppstorePopup: b.a,
                BonusFinish: w.a
            },
            data: function () {
                return {
                    isPad: /iPad/.test(navigator.userAgent),
                    href: "",
                    pollTimes: 0,
                    moreReward: !1
                }
            }, computed: o()({}, n.i(c.a)("bonusTaskDetailLite", ["task_id", "task_status", "reward", "app_keyword", "app_rank", "app_name", "app_icon", "app_url", "app_bid", "app_exe", "tips", "expire_at", "exclusive_count", "exclusive_reward", "steps", "is_invest", "scheme_url", "show_coupon_btn", "double_reward", "show_coupon", "coupon_num", "go_app_store_type", "explore_reward"]), n.i(c.e)("bonusTaskDetailLite", ["couponNum"])),
            mounted: function () {
                var t = this;
                this.fetch(this.$route.params.id).then(function () {
                    t.href = n.i(y.e)(t.app_url, {
                        return_url: location.href
                    }), (t.exclusive_count > 0 || t.explore_reward > 0) && (t.moreReward = !0)
                }), T.a.$on(T.b.STOP_LITE_POLL_OPEN_STATUS, function () {
                    setTimeout(function () {
                        $loading.hide()
                    }, 2e3), t.stopTimerAppStatus()
                }), T.a.$on(T.b.CHECK_OPEN_AGAIN, function () {
                    t.openAndCheck()
                })
            }, destroyed: function () {
                this.stopTimerAppStatus()
            }, methods: o()({
                stopTimerAppStatus: function () {
                    this.timerOpenStatus && (clearInterval(this.timerOpenStatus), this.timerOpenStatus = "")
                }, goAppstore: function () {
                    var t = this;
                    new a.a(function (e) {
                        0 !== t.steps[2] ? e() : (t.updateSteps(C.l), e())
                    }).then(function () {
                        1 === t.go_app_store_type && t.app_keyword ? t.$refs.appstore.show() : location.href = n.i(y.e)(t.app_url, {
                            return_url: location.href
                        })
                    })
                }, openApp: function () {
                    var t = this;
                    if (1 !== this.steps[0]) {
                        this.saveCouponStatus();
                        var e = $popup.fromTemplate(v.j.template, v.j.options);
                        this.is_invest && 1 !== this.steps[0] && e.show().then(function () {
                            t.openAndCheck()
                        }), this.openAndCheck()
                    }
                }, openAndCheck: function () {
                    var t = this;
                    new a.a(function (e) {
                        t.updateSteps(C.n), e()
                    }).then(function () {
                        location.href = t.scheme_url, t.pollTimes = 0, clearInterval(t.timerOpenStatus), t.timerOpenStatus = setInterval(t.pollCheckOpenStatus, 1e3)
                    })
                }, pollCheckOpenStatus: function () {
                    this.pollTimes >= 10 ? clearInterval(this.timerOpenStatus) : (this.pollTimes++, this.checkOpenStatus())
                }, checkTaskStatus: function () {
                    x || (x = !0, setTimeout(function () {
                        x = !1
                    }, 1e3), 0 !== this.steps[2] && this._checkTaskStatus())
                }, back: function () {
                    var t = this;
                    $popup.fromTemplate(v.k.template, v.k.options).show().then(function (e) {
                        if (!e) {
                            var n = function () {
                                setTimeout(function () {
                                    $router.back({
                                        path: "/tasks/lite"
                                    })
                                }, 200)
                            };
                            if (0 === t.task_id) return void n();
                            $api.bonusTaskGiveup(t.task_id).then(function () {
                                $storage.get(C.p) && $storage.remove(C.p), t.removeNeedHideCouponId(), n()
                            })
                        }
                    })
                }, useCoupon: function () {
                    var t = this;
                    this._useCoupon().then(function () {
                        t.doubleReward()
                    })
                }, saveCouponStatus: function () {
                    var t = $storage.get(C.q) || [],
                        e = $storage.get(C.d) + "-" + this.task_id; - 1 === t.indexOf(e) && (t.push(e), $storage.set(C.q, t))
                }, removeNeedHideCouponId: function () {
                    var t = $storage.get(C.q) || [],
                        e = $storage.get(C.d) + "-" + this.task_id,
                        n = t.indexOf(e);
                    n > -1 && (t.splice(n, 1), $storage.set(C.q, t))
                }, doubleReward: function () {
                    var t = document.querySelector("[task-detail-reward]"),
                        e = parseFloat(this.reward),
                        s = this.double_reward;
                    n.i(r.tween)({
                        from: {
                            x: e
                        },
                        to: {
                            x: s
                        },
                        duration: 750,
                        easing: "easeOutQuad",
                        step: function (e) {
                            t.innerHTML = e.x.toFixed(1)
                        }
                    }).then(function () {
                        t.innerHTML = s.toFixed(1)
                    })
                }, talkToCustomerService: function () {
                    window.location.href = n.i(y.l)()
                }
            }, n.i(c.c)("bonusTaskDetailLite", ["fetch", "checkOpenStatus", "_checkTaskStatus", "updateSteps", "_useCoupon"]))
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(2),
            a = n.n(s),
            i = n(1);
        e.default = {
            computed: a()({}, n.i(i.a)("taskLite", ["explore_task_info"]))
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(2),
            a = n.n(s),
            i = n(1),
            o = n(499),
            r = n.n(o),
            c = n(11);
        e.default = {
            data: function () {
                return {}
            }, components: {
                ActionList: c.b,
                PersonalTasks: r.a
            }, computed: a()({}, n.i(i.a)("taskLite", ["explore_task_info", "zstask_info"])),
            methods: {
                onZsTaskClick: function () {
                    $router.forward("/zstasks/lite")
                }, onTsTaskClick: function () {
                    $router.forward("/explore/1")
                }
            }
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(2),
            a = n.n(s),
            i = n(1),
            o = n(3);
        e.default = {
            computed: a()({}, n.i(i.a)("taskLite", ["is_jail_broken"])),
            methods: {
                customService: function () {
                    location.href = n.i(o.l)()
                }
            }
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(2),
            a = n.n(s),
            i = n(1),
            o = n(9),
            r = n.n(o),
            c = n(5),
            u = n(3);
        e.default = {
            components: {
                CustomPopup: r.a
            },
            data: function () {
                return {
                    scheme_url: "",
                    app_type: 5,
                    download_url: ""
                }
            }, computed: a()({}, n.i(i.a)("assistant", ["info"])),
            mounted: function () {
                var t = this;
                c.a.$on(c.b.LITE_POPUP_OPEN_KEY, function (e) {
                    t.scheme_url = e.assistant_info.scheme_url, t.download_url = e.assistant_info.download_url, t.app_type = e.assistant_info.app_type, t.$refs.liteKeyPopup.show()
                })
            }, destroyed: function () {
                c.a.$off(c.b.LITE_POPUP_OPEN_KEY)
            }, methods: {
                open: function () {
                    location.href = this.scheme_url
                }, download: function () {
                    this.$refs.liteKeyPopup.hide(), 3 === this.app_type || 3 === this.info.app_type ? (c.a.$emit(c.b.ASSISTANT_POPUP), location.href = this.download_url) : location.href = n.i(u.e)(this.download_url, {
                        return_url: location.href
                    })
                }, hide: function (t) {
                    this.$refs.liteKeyPopup.hide(t);
                    var e = ["tasks_lite", "task_detail_lite", "zstasks_lite", "zstask_detail_lite"]; - 1 !== _.indexOf(e, this.$route.name) && setTimeout(function () {
                        $router.back("/dashboard")
                    }, 300)
                }
            }
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = {
            props: {
                TaskInfo: Object,
                money: String,
                type: String,
                onTaskClick: Function
            },
            data: function () {
                return {}
            }, components: {}, mounted: function () {}, methods: {
                jumpTo: function () {
                    this.onTaskClick && this.onTaskClick()
                }
            }
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(8),
            a = n.n(s),
            i = n(2),
            o = n.n(i),
            r = n(19),
            c = (n.n(r), n(1)),
            u = n(10),
            l = n.n(u),
            p = n(23),
            d = n.n(p),
            _ = n(27),
            f = n.n(_),
            v = n(6),
            h = n(50),
            m = n.n(h),
            g = n(49),
            b = n.n(g),
            k = n(4),
            w = n(3),
            C = n(5),
            y = !1;
        e.default = {
            components: {
                AnimateHeader: l.a,
                CountDown: d.a,
                TaskDetailTitle: f.a,
                StartTaskPopup: m.a,
                AppstorePopup: b.a
            },
            data: function () {
                return {
                    isPad: /iPad/.test(navigator.userAgent),
                    href: "",
                    pollTimes: 0,
                    moreReward: !1
                }
            }, computed: o()({}, n.i(c.a)("taskDetailLite", ["task_id", "task_status", "reward", "app_keyword", "app_rank", "app_name", "app_icon", "app_url", "app_bid", "app_exe", "tips", "expire_at", "exclusive_count", "exclusive_reward", "steps", "is_invest", "scheme_url", "show_coupon_btn", "double_reward", "show_coupon", "coupon_num", "go_app_store_type", "explore_reward"]), n.i(c.e)("taskDetailLite", ["couponNum"])),
            mounted: function () {
                var t = this;
                this.fetch(this.$route.params.id).then(function () {
                    t.href = n.i(w.e)(t.app_url, {
                        return_url: location.href
                    }), (t.exclusive_count > 0 || t.explore_reward > 0) && (t.moreReward = !0)
                }), C.a.$on(C.b.STOP_LITE_POLL_OPEN_STATUS, function () {
                    setTimeout(function () {
                        $loading.hide()
                    }, 2e3), t.stopTimerAppStatus()
                }), C.a.$on(C.b.CHECK_OPEN_AGAIN, function () {
                    t.openAndCheck()
                })
            }, destroyed: function () {
                this.stopTimerAppStatus()
            }, methods: o()({
                stopTimerAppStatus: function () {
                    this.timerOpenStatus && (clearInterval(this.timerOpenStatus), this.timerOpenStatus = "")
                }, goAppstore: function () {
                    var t = this;
                    new a.a(function (e) {
                        0 !== t.steps[2] ? e() : (t.updateSteps(k.l), e())
                    }).then(function () {
                        1 === t.go_app_store_type && t.app_keyword ? t.$refs.appstore.show() : location.href = n.i(w.e)(t.app_url, {
                            return_url: location.href
                        })
                    })
                }, openApp: function () {
                    var t = this;
                    if (1 !== this.steps[0]) {
                        this.saveCouponStatus();
                        var e = $popup.fromTemplate(v.j.template, v.j.options);
                        this.is_invest && 1 !== this.steps[0] && e.show().then(function () {
                            t.openAndCheck()
                        }), this.openAndCheck()
                    }
                }, openAndCheck: function () {
                    var t = this;
                    new a.a(function (e) {
                        t.updateSteps(k.n), e()
                    }).then(function () {
                        location.href = t.scheme_url, t.pollTimes = 0, clearInterval(t.timerOpenStatus), t.timerOpenStatus = setInterval(t.pollCheckOpenStatus, 1e3)
                    })
                }, pollCheckOpenStatus: function () {
                    this.pollTimes >= 10 ? clearInterval(this.timerOpenStatus) : (this.pollTimes++, this.checkOpenStatus())
                }, checkTaskStatus: function () {
                    y || (y = !0, setTimeout(function () {
                        y = !1
                    }, 1e3), 0 !== this.steps[2] && this._checkTaskStatus())
                }, back: function () {
                    var t = this;
                    $popup.fromTemplate(v.k.template, v.k.options).show().then(function (e) {
                        if (!e) {
                            var n = function () {
                                setTimeout(function () {
                                    $router.back({
                                        path: "/tasks/lite"
                                    })
                                }, 200)
                            };
                            if (0 === t.task_id) return void n();
                            $api.subtaskGiveup(t.task_id).then(function () {
                                $storage.get(k.p) && $storage.remove(k.p), t.removeNeedHideCouponId(), n()
                            })
                        }
                    })
                }, useCoupon: function () {
                    var t = this;
                    this._useCoupon().then(function () {
                        t.doubleReward()
                    })
                }, saveCouponStatus: function () {
                    var t = $storage.get(k.q) || [],
                        e = $storage.get(k.d) + "-" + this.task_id; - 1 === t.indexOf(e) && (t.push(e), $storage.set(k.q, t))
                }, removeNeedHideCouponId: function () {
                    var t = $storage.get(k.q) || [],
                        e = $storage.get(k.d) + "-" + this.task_id,
                        n = t.indexOf(e);
                    n > -1 && (t.splice(n, 1), $storage.set(k.q, t))
                }, doubleReward: function () {
                    var t = document.querySelector("[task-detail-reward]"),
                        e = parseFloat(this.reward),
                        s = this.double_reward;
                    n.i(r.tween)({
                        from: {
                            x: e
                        },
                        to: {
                            x: s
                        },
                        duration: 750,
                        easing: "easeOutQuad",
                        step: function (e) {
                            t.innerHTML = e.x.toFixed(1)
                        }
                    }).then(function () {
                        t.innerHTML = s.toFixed(1)
                    })
                }, talkToCustomerService: function () {
                    window.location.href = n.i(w.l)()
                }
            }, n.i(c.c)("taskDetailLite", ["fetch", "checkOpenStatus", "_checkTaskStatus", "updateSteps", "_useCoupon"]))
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(2),
            a = n.n(s),
            i = n(1),
            o = n(74),
            r = n.n(o),
            c = n(75),
            u = n.n(c),
            l = n(505),
            p = n.n(l),
            d = n(496),
            f = n.n(d),
            v = n(494),
            h = n.n(v),
            m = n(493),
            g = n.n(m),
            b = n(491),
            k = n.n(b),
            w = n(492),
            C = n.n(w),
            y = n(100),
            T = n.n(y),
            x = n(497),
            S = n.n(x),
            $ = n(498),
            A = n.n($),
            P = n(98),
            E = n.n(P),
            I = n(471),
            L = n.n(I),
            O = n(473),
            R = n.n(O),
            N = n(144),
            D = n.n(N),
            F = n(475),
            M = n.n(F),
            U = n(3),
            q = n(6),
            B = n(5),
            H = n(4);
        e.default = {
            data: function () {
                return {
                    showTip: !0
                }
            }, components: {
                TaskListHeader: r.a,
                AssistantBanner: u.a,
                ZsTaskBanner: p.a,
                HumanCheckPopup: M.a,
                ExploreTaskBanner: f.a,
                BlockTasksOngoing: h.a,
                BlockTasks: g.a,
                BlockRecommends: C.a,
                BlockGame: T.a,
                BlockComing: k.a,
                JailBroken: A.a,
                InstallCertification: E.a,
                OpenLiteKeyPopup: D.a,
                AppointImmediately: L.a,
                BonusPopup: R.a,
                IndividualTask: S.a
            }, computed: a()({}, n.i(i.a)("taskLite", ["zstask_info", "explore_task_info", "tasks_coming", "showAssistantBanner"])),
            mounted: function () {
                var t = this;
                this.$store.dispatch("taskLite/fetch"), B.a.$on(B.b.POPUP_JAIL_BREAKER, function () {
                    t.showJailBreakerPopup()
                }), B.a.$on(B.b.POPUP_BIND_PHONE, function () {
                    t.showBindPhonePopup()
                }), B.a.$on(B.b.POPUP_USER_FREEZE, function () {
                    t.showUserFreezePopup()
                }), $storage.get(H.X) && this.scrollToAppoint(), 1 === $storage.get(H._2) && (this.showTip = !1)
            }, methods: {
                scrollToAppoint: function () {
                    var t = this;
                    $storage.set(H.X, 0), setTimeout(function () {
                        var e = document.querySelector(".anchor"),
                            n = e.offsetTop;
                        t.$refs.scroller.scrollTo(0, n, !0), t.$route.query.needScroll = 0
                    }, 500)
                }, back: function () {
                    if (this.$route.query) {
                        var t = _.get(this.$route.query, "backroute", "dashboard");
                        $router.back({
                            path: t
                        })
                    } else $router.back({
                        path: "/dashboard"
                    })
                }, closeTip: function () {
                    $storage.set(H._2, 1), this.showTip = !1
                }, showJailBreakerPopup: function () {
                    $popup.fromTemplate(q.l.template(n.i(U.l)()), q.l.options).show()
                }, showBindPhonePopup: function () {
                    var t = t = $popup.fromTemplate(q.m.template, q.m.options);
                    t.show().then(function (t) {
                        1 === t && $router.forward({
                            path: "/user/bindMobile/0",
                            query: {
                                backroute: "/tasks/lite"
                            }
                        })
                    })
                }, showUserFreezePopup: function () {
                    $popup.fromTemplate(q.n.template(), q.n.options).show()
                }, getScrollTop: function () {
                    var t = this.$refs.scroller.getPosition();
                    t.left;
                    return t.top
                }, showAppointPopup: function (t) {
                    this.$refs.appointPopup.show(t)
                }
            }
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(8),
            a = n.n(s),
            i = n(2),
            o = n.n(i),
            r = n(19),
            c = (n.n(r), n(1)),
            u = n(10),
            l = n.n(u),
            p = n(23),
            d = n.n(p),
            _ = n(27),
            f = n.n(_),
            v = n(6),
            h = n(50),
            m = n.n(h),
            g = n(49),
            b = n.n(g),
            k = n(4),
            w = n(3),
            C = n(5),
            y = !1;
        e.default = {
            components: {
                AnimateHeader: l.a,
                CountDown: d.a,
                TaskDetailTitle: f.a,
                StartTaskPopup: m.a,
                AppstorePopup: b.a
            },
            data: function () {
                return {
                    isPad: /iPad/.test(navigator.userAgent),
                    href: "",
                    pollTimes: 0
                }
            }, computed: o()({}, n.i(c.a)("ufilterTaskDetailLite", ["task_id", "task_status", "reward", "app_keyword", "app_rank", "app_name", "app_icon", "app_url", "app_bid", "app_exe", "tips", "expire_at", "exclusive_count", "exclusive_reward", "steps", "is_invest", "scheme_url", "show_coupon_btn", "double_reward", "show_coupon", "coupon_num", "go_app_store_type"]), n.i(c.e)("ufilterTaskDetailLite", [])),
            mounted: function () {
                var t = this;
                this.fetch(this.$route.params.id).then(function () {
                    t.href = n.i(w.e)(t.app_url, {
                        return_url: location.href
                    })
                }), C.a.$on(C.b.STOP_LITE_POLL_OPEN_STATUS, function () {
                    t.stopTimerAppStatus()
                })
            }, destroyed: function () {
                this.stopTimerAppStatus()
            }, methods: o()({
                stopTimerAppStatus: function () {
                    this.timerOpenStatus && clearInterval(this.timerOpenStatus)
                }, goAppstore: function () {
                    var t = this;
                    new a.a(function (e) {
                        0 !== t.steps[2] ? e() : (t.updateSteps(k.l), e())
                    }).then(function () {
                        1 === t.go_app_store_type && t.app_keyword ? t.$refs.appstore.show() : location.href = n.i(w.e)(t.app_url, {
                            return_url: location.href
                        })
                    })
                }, openApp: function () {
                    var t = this;
                    if (1 !== this.steps[0]) {
                        this.saveCouponStatus();
                        var e = $popup.fromTemplate(v.j.template, v.j.options);
                        this.is_invest && 1 !== this.steps[0] && e.show().then(function () {
                            t.openAndCheck()
                        }), this.openAndCheck()
                    }
                }, openAndCheck: function () {
                    var t = this;
                    new a.a(function (e) {
                        t.updateSteps(k.n), e()
                    }).then(function () {
                        location.href = t.scheme_url, t.pollTimes = 0, clearInterval(t.timerOpenStatus), t.timerOpenStatus = setInterval(t.pollCheckOpenStatus, 1e3)
                    })
                }, pollCheckOpenStatus: function () {
                    this.pollTimes >= 10 ? clearInterval(this.timerOpenStatus) : (this.pollTimes++, this.checkOpenStatus())
                }, checkTaskStatus: function () {
                    y || (y = !0, setTimeout(function () {
                        y = !1
                    }, 1e3), 0 !== this.steps[2] && this._checkTaskStatus())
                }, back: function () {
                    var t = this;
                    $popup.fromTemplate(v.k.template, v.k.options).show().then(function (e) {
                        if (!e) {
                            var n = function () {
                                setTimeout(function () {
                                    $router.back({
                                        path: "/tasks/lite"
                                    })
                                }, 200)
                            };
                            if (0 === t.task_id) return void n();
                            $api.subtaskGiveup(t.task_id).then(function () {
                                $storage.get(k.p) && $storage.remove(k.p), t.removeNeedHideCouponId(), n()
                            })
                        }
                    })
                }, saveCouponStatus: function () {
                    var t = $storage.get(k.q) || [],
                        e = $storage.get(k.d) + "-" + this.task_id; - 1 === t.indexOf(e) && (t.push(e), $storage.set(k.q, t))
                }, removeNeedHideCouponId: function () {
                    var t = $storage.get(k.q) || [],
                        e = $storage.get(k.d) + "-" + this.task_id,
                        n = t.indexOf(e);
                    n > -1 && (t.splice(n, 1), $storage.set(k.q, t))
                }, doubleReward: function () {
                    var t = document.querySelector("[task-detail-reward]"),
                        e = parseFloat(this.reward),
                        s = this.double_reward;
                    n.i(r.tween)({
                        from: {
                            x: e
                        },
                        to: {
                            x: s
                        },
                        duration: 750,
                        easing: "easeOutQuad",
                        step: function (e) {
                            t.innerHTML = e.x.toFixed(1)
                        }
                    }).then(function () {
                        t.innerHTML = s.toFixed(1)
                    })
                }
            }, n.i(c.c)("ufilterTaskDetailLite", ["fetch", "checkOpenStatus", "_checkTaskStatus", "updateSteps"]))
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(2),
            a = n.n(s),
            i = n(10),
            o = n.n(i),
            r = n(27),
            c = n.n(r),
            u = n(22),
            l = n.n(u),
            p = n(33),
            d = n.n(p),
            _ = n(1),
            f = n(4),
            v = n(5),
            h = n(6);
        e.default = {
            components: {
                AnimateHeader: o.a,
                TaskDetailTitle: c.a,
                AssistantUnopen: l.a,
                AssistantInvalid: d.a
            },
            data: function () {
                return {
                    checkRewardLock: !1
                }
            }, computed: a()({}, n.i(_.a)("zstaskLite", ["zstask_info", "steps", "scheme_url"])),
            mounted: function () {
                var t = this;
                this.fetchDetail(this.$route.params.id).then(function () {
                    t.zstask_info.status === f._0 && $api.liteZstaskCheckState(t.zstask_info.id), t.zstask_info.status === f._1 && $router.back("/zstasks/lite")
                }), v.a.$on(v.b.STOP_LITE_POLL_OPEN_STATUS, function () {
                    setTimeout(function () {
                        $loading.hide()
                    }, 2e3), t.stopTimerAppStatus()
                })
            }, destroyed: function () {
                this.stopTimerAppStatus()
            }, methods: a()({
                stopTimerAppStatus: function () {
                    this.timerOpenStatus && (clearInterval(this.timerOpenStatus), this.timerOpenStatus = "")
                }, openApp: function (t) {
                    location.href = this.scheme_url, 0 !== this.steps[1] || this.timerOpenStatus || ($loading.show(), this.timerOpenStatus = setInterval(this.checkOpenStatus, 1e3))
                }, checkReward: function () {
                    var t = this;
                    return 0 !== this.steps[1] && (!this.checkRewardLock && (this.checkRewardLock = !0, this._checkReward(), void setTimeout(function () {
                        t.checkRewardLock = !1
                    }, 600)))
                }, back: function () {
                    var t = this,
                        e = function () {
                            $router.back("/zstasks/lite")
                        };
                    if (0 === this.zstask_info.id) return void e();
                    $api.liteZstaskCheckState(this.zstask_info.id).then(function (n) {
                        if (n.data.payload.status === f._0) {
                            var s = h.h;
                            $popup.fromTemplate(s.template, s.options).show().then(function (n) {
                                0 === n && $api.zstaskGiveup(t.zstask_info.id).then(function () {
                                    e()
                                })
                            })
                        } else e()
                    })
                }
            }, n.i(_.c)("zstaskLite", ["fetchDetail", "updateSteps", "checkOpenStatus", "_checkReward"]))
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(2),
            a = n.n(s),
            i = n(10),
            o = n.n(i),
            r = n(11),
            c = n(1),
            u = n(4),
            l = n(6);
        e.default = {
            components: {
                Action: r.a,
                ActionList: r.b,
                AnimateHeader: o.a
            },
            computed: a()({}, n.i(c.a)("zstaskLite", ["tasks"])),
            mounted: function () {
                this.$store.dispatch("zstaskLite/fetch")
            }, methods: a()({
                back: function () {
                    $router.back("/tasks/lite")
                }, start: function (t, e) {
                    if (!e.is_enabled && t.status !== u._0) {
                        return void(_.some(e.zs_tasks, function (t) {
                            return t.status === u._0
                        }) ? this.showPopup("has_ongoing") : this.showPopup("muted_task", {
                            date: e.date
                        }))
                    }
                    var n = {
                        name: "zstask_detail_lite",
                        params: {
                            id: t.zs_task_id
                        }
                    };
                    this.startZsTask(t.zs_task_id).then(function () {
                        $router.forward(n)
                    })
                }, showPopup: function (t, e) {
                    var n = void 0;
                    if ("muted_task" === t && $toast.show("任务还没开始哦~"), "has_ongoing" === t) {
                        var s = l.i;
                        n = $popup.fromTemplate(s.template, s.options)
                    }
                    n && n.show()
                }
            }, n.i(c.c)("zstaskLite", ["fetch", "startZsTask"]))
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(2),
            a = n.n(s),
            i = n(1);
        e.default = {
            computed: a()({}, n.i(i.a)("taskLite", ["zstask_info"]))
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(2),
            a = n.n(s),
            i = n(10),
            o = n.n(i),
            r = n(1),
            c = n(69),
            u = (n.n(c), n(3)),
            l = n(4);
        e.default = {
            components: {
                AnimateHeader: o.a
            },
            data: function () {
                return {
                    letterSpacing: !1,
                    circleBorder: !1,
                    needRecord: !1
                }
            }, computed: a()({}, n.i(r.a)("user", ["user_info"])),
            mounted: function () {
                var t = this,
                    e = $storage.get(l.Z);
                (e ? new Date(e).getDate() : void 0) !== (new Date).getDate() && (this.needRecord = !0, $storage.set(l.Z, (new Date).getTime())), this.fetch().then(function () {
                    t.user_info.msg_num.toString().length > 2 && (t.letterSpacing = !0), 1 === t.user_info.msg_num.toString().length && (t.circleBorder = !0)
                })
            }, filters: {
                limitLen: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
                        n = t;
                    return n.toString().length > e && (n = "···"), n
                }
            }, methods: a()({
                record: function () {
                    if (this.needRecord) {
                        var t = parseInt(((new Date).getTime() - $storage.get(l.Z)) / 1e3);
                        window._hmt && window._hmt.push(["_trackEvent", "个人中心", "首页", "首次点击时间", t]), this.needRecord = !1
                    }
                }, showTest: function () {
                    return !("https:" === window.location.protocol || !n.i(u.a)())
                }, withdraw: function (t) {
                    if ("jifen" === t) return void $router.forward({
                        path: "/withdraw/rebatescore"
                    });
                    $router.forward({
                        path: "/withdraw/"
                    })
                }, logout: function () {
                    if (this.user_info.mobile_bind) $router.forward({
                        path: "/login",
                        query: {
                            backroute: "/user"
                        }
                    });
                    else {
                        var t = c.popupLogoutUnbind;
                        $popup.fromTemplate(t.template, t.options).show().then(function (t) {
                            0 === t ? $router.forward({
                                path: "/user/bindMobile/0",
                                query: {
                                    backroute: "/user"
                                }
                            }) : 1 === t && $router.forward({
                                path: "/login",
                                query: {
                                    backroute: "/user"
                                }
                            })
                        })
                    }
                }, back: function () {
                    $router.back("/dashboard")
                }
            }, n.i(r.c)("user", ["fetch"]))
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = function (t) {
            return (100 + t + "").substr(1, 2)
        };
        e.default = {
            props: {
                format: {
                    type: String,
                    default: "hh:mm:ss"
                },
                endcallback: Function,
                deadline: {
                    type: Number,
                    validator: function (t) {
                        return parseInt(t) == t
                    }, required: !0
                },
                cssClass: {
                    type: String,
                    default: ""
                }
            },
            data: function () {
                return {
                    value: "",
                    timer: 0,
                    started: !1
                }
            }, mounted: function () {
                this.cssClass && this.$el.classList.add(this.cssClass), this.updateValue(), this.timer = setInterval(this.updateValue, 1e3)
            }, destroyed: function () {
                this.stop()
            }, methods: {
                stop: function () {
                    this.timer && clearInterval(this.timer)
                }, onEnd: function () {
                    this.endcallback && this.started && (this.endcallback(), this.started = !1)
                }, updateValue: function () {
                    var t = +new Date;
                    if (this.deadline - t < 0) return this.onEnd(), void this.stop();
                    this.started || (this.started = !0);
                    var e = parseInt((this.deadline - t) / 1e3),
                        n = s(e % 60),
                        a = s(e % 3600 / 60),
                        i = s(parseInt(e / 3600));
                    "mm:ss" === this.format ? this.value = a + ":" + n : this.value = i + ":" + a + ":" + n
                }
            }
        }
    },
    function (t, e, n) {
        "use strict";

        function s(t) {
            t.preventDefault()
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = n(8),
            i = n.n(a);
        e.default = {
            props: {
                effect: {
                    type: String,
                    default: "scale"
                },
                column: {
                    type: Boolean,
                    default: !1
                },
                hideCb: Function
            },
            data: function () {
                return {
                    state: 0
                }
            }, methods: {
                show: function () {
                    var t = this;
                    return this.state = 1, document.body.classList.add("popup-open"), $backdrop.show(), document.addEventListener("touchstart", s), new i.a(function (e, n) {
                        t.$on("PopupButtonClickEvent", function (t) {
                            e(t.buttonIndex)
                        })
                    })
                }, hide: function (t) {
                    var e = this;
                    this.hideCb && this.hideCb(), this.state = 2, $backdrop.hide(), setTimeout(function () {
                        e.state = 0, document.body.classList.remove("popup-open"), document.removeEventListener("touchstart", s), e.$emit("PopupButtonClickEvent", {
                            buttonIndex: t
                        })
                    }, 300)
                }, getState: function () {
                    return this.state
                }
            }
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = {
            props: {
                color: {
                    type: String,
                    default: "#FFFFFF"
                },
                stroke: {
                    type: String,
                    default: "#FFFFFF"
                }
            }
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = {
            props: {
                color: {
                    type: String,
                    default: "#FFFFFF"
                }
            }
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(101),
            a = n.n(s),
            i = n(507),
            o = n.n(i),
            r = n(19),
            c = (n.n(r), {
                headerHeight: 100,
                titleMarginTop: 21,
                titleFontSize: 20,
                titleLineHeight: 28,
                subTitleOpacity: 1,
                fixed: !1
            }),
            u = {
                headerHeight: 50,
                titleMarginTop: 14,
                titleFontSize: 16,
                titleLineHeight: 22,
                subTitleOpacity: 0,
                fixed: !0
            },
            l = function (t) {
                return t ? c : u
            };
        e.default = {
            components: {
                BackArrow: a.a,
                Close: o.a
            },
            props: {
                title: String,
                subTitle: String,
                bgColor: String,
                menuBgColor: String,
                menuRightBgColor: String,
                defaultBgColor: {
                    type: Boolean,
                    default: !1
                },
                fill: {
                    type: String,
                    default: "#FFFFFF"
                },
                stroke: {
                    type: String,
                    default: "#FFFFFF"
                },
                backArrowHeight: {
                    type: String,
                    default: "16px"
                },
                backArrowWidth: {
                    type: String,
                    default: "11px"
                },
                color: {
                    type: String,
                    default: "#FFF"
                },
                showBackButton: {
                    type: Boolean,
                    default: !0
                },
                onBackButtonClick: Function,
                showMenuButton: {
                    type: Boolean,
                    default: !1
                },
                onMenuButtonClick: Function,
                animateDuration: Number,
                animate: {
                    type: Boolean,
                    default: !0
                },
                expanded: {
                    type: Boolean,
                    default: !1
                },
                opacity: {
                    type: Boolean,
                    default: !1
                }
            },
            mounted: function () {
                var t = this;
                this.opacity && (this.timer = setInterval(function () {
                    var e = document.querySelectorAll("._v-content")[0],
                        n = 0;
                    if (e) {
                        var s = e.attributes.style.value,
                            a = /(?:\d+\.?\d*)(?=px,)/gi;
                        n = Math.abs(s.match(a)[1])
                    }
                    n > 50 && t.transparency && (t.transparency = !1), n < 50 && !t.transparency && (t.transparency = !0)
                }, 50)), this.animate && (this.timer = setInterval(function () {
                    var e = Vonic.app.pageContentScrollTop();
                    e > 100 && !t.shrinked && t.shrink(), e < 100 && t.shrinked && t.expand()
                }, 50))
            }, beforeDestroy: function () {
                this.timer && clearInterval(this.timer)
            }, data: function () {
                return {
                    state: l(this.expanded),
                    shrinked: !this.animate,
                    timer: void 0,
                    transparency: !0
                }
            }, methods: {
                onBack: function () {
                    this.onBackButtonClick && this.onBackButtonClick()
                }, onMenu: function () {
                    this.onMenuButtonClick && this.onMenuButtonClick()
                }, _shift: function (t) {
                    var e = this,
                        s = {
                            from: c,
                            to: u,
                            duration: this.animateDuration || 150,
                            easing: "easeOutQuad",
                            step: function (t) {
                                e.state = t
                            }
                        };
                    t && _.extend(s, {
                        from: u,
                        to: c
                    }), n.i(r.tween)(s).then(function (t) {
                        e.state = t
                    })
                }, shrink: function () {
                    this._shift(), this.shrinked = !0
                }, expand: function () {
                    this._shift(!0), this.shrinked = !1
                }, isShrinked: function () {
                    return this.shrinked
                }
            }
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(67),
            a = n.n(s);
        e.default = {
            data: function () {
                return {
                    bindZhimaModal: void 0
                }
            }, mounted: function () {
                var t = this;
                $modal.fromComponent(a.a, {
                    title: "芝麻信用认证",
                    theme: "dark"
                }).then(function (e) {
                    t.bindZhimaModal = e
                })
            }, destroyed: function () {
                this.bindZhimaModal && $modal.destroy(this.bindZhimaModal)
            }, methods: {
                bindAgain: function () {
                    this.bindZhimaModal.show()
                }, back: function () {
                    $router.back({
                        path: "/tasks"
                    })
                }
            }
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = {
            data: function () {
                return {
                    second: 3
                }
            }, mounted: function () {
                var t = this,
                    e = setInterval(function () {
                        t.second > 0 ? t.second-- : (clearInterval(e), $router.back({
                            path: "/tasks"
                        }))
                    }, 1e3)
            }, methods: {
                back: function () {
                    $router.back({
                        path: "/tasks"
                    })
                }
            }
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(67),
            a = n.n(s);
        e.default = {
            components: {
                BindZhimaForm: a.a
            }
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = {
            data: function () {
                return {
                    form: {
                        phone: ""
                    },
                    submitText: "提交",
                    showClearMobileBtn: !1,
                    phoneOK: !1
                }
            }, mounted: function () {
                this.submitText = "提交"
            }, watch: {
                "form.phone": function (t) {
                    t && t.length > 0 ? this.showClearMobileBtn = !0 : this.showClearMobileBtn = !1, t && /^1[23456789][\d]{9}$/.test(t) ? this.phoneOK = !0 : this.phoneOK = !1, t.length > 11 && (this.form.phone = t.substr(0, 11))
                }
            }, methods: {
                clearMobile: function () {
                    this.form.phone = "", this.$refs.phone.focus()
                }, focus: function () {
                    this.form.phone && this.form.phone > 0 && (this.showClearMobileBtn = !0)
                }, blur: function () {
                    this.showClearMobileBtn = !1
                }, check_input: function () {
                    var t = this.form.phone,
                        e = "";
                    return t ? /^1[23456789][\d]{9}$/.test(t) || (e = "手机号格式不正确") : e = "手机号不能为空", e
                }, submit: function () {
                    var t = this.check_input();
                    if (t) return void $toast.show(t);
                    this.submitText = "正在跳转芝麻信用官网...", setTimeout(function () {
                        document.getElementById("bind-phone").submit()
                    }, 1e3)
                }
            }
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(8),
            a = n.n(s);
        e.default = {
            props: {
                effect: {
                    type: String,
                    default: "default"
                },
                title: {
                    type: String,
                    default: ""
                },
                cssClass: {
                    type: String,
                    default: ""
                },
                showClose: {
                    type: String,
                    default: "false"
                },
                btnLengthways: {
                    type: String,
                    default: "false"
                },
                obvious: {
                    type: Number,
                    default: -1
                },
                closeCallback: String,
                keep: String
            },
            data: function () {
                return {
                    state: 0,
                    buttons: []
                }
            }, mounted: function () {
                if (this.cssClass)
                    for (var t = this.cssClass.split(" "), e = 0; e < t.length; e++) this.$el.querySelector("[von-popups] .von-popup").classList.add(t[e])
            }, methods: {
                show: function () {
                    var t = this;
                    return this.state = 1, document.body.classList.add("popup-open"), $backdrop.show(), new a.a(function (e, n) {
                        t.$on("PopupButtonClickEvent", function (t) {
                            e(t.buttonIndex)
                        })
                    })
                }, hide: function (t) {
                    var e = this;
                    if ("true" == this.keep && t > -1) {
                        var n = this.buttons[t] && this.buttons[t].onClick;
                        return void(n && n(t))
                    }
                    "true" === this.keep && this.showClose && -1 == t && this.closeCallback && setTimeout(window[this.closeCallback] && window[this.closeCallback](), 300), this.state = 2, $backdrop.hide(), setTimeout(function () {
                        document.body.classList.remove("popup-open")
                    }, 300), setTimeout(function () {
                        e.state = 0, e.$emit("PopupButtonClickEvent", {
                            buttonIndex: t
                        }), $popup.destroy()
                    }, 300)
                }, setButtons: function (t) {
                    this.buttons = t
                }, updateButtonTextByIndex: function (t, e) {
                    this.buttons[t].text = e
                }, updateButtonStatusByIndex: function (t, e, n) {
                    var s = this.$el.querySelectorAll(".popup-buttons button");
                    n && (s[t].style.backgroundColor = n), s && s[t] && (e ? s[t].removeAttribute("disabled") : s[t].setAttribute("disabled", ""))
                }
            }
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(2),
            a = n.n(s),
            i = n(1);
        e.default = {
            props: {
                posFixed: {
                    type: Boolean,
                    default: !1
                },
                scrollToMenus: {
                    type: Function,
                    default: null
                },
                fetchReadingList: {
                    type: Function,
                    default: void 0
                }
            },
            data: function () {
                return {
                    si: 0,
                    selectedId: 0
                }
            }, computed: a()({}, n.i(i.a)("temp", ["menus"])),
            mounted: function () {}, destroyed: function () {
                clearInterval(this.si)
            }, methods: a()({}, n.i(i.d)("temp", ["menuSelected"]), {
                menuClick: function (t) {
                    var e = this;
                    this.menuSelected(t), this.fetchReadingList(function () {
                        var t = setTimeout(function () {
                            e.posFixed && e.scrollToMenus(), clearTimeout(t)
                        }, 0)
                    })
                }
            })
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(2),
            a = n.n(s),
            i = n(512),
            o = n.n(i),
            r = n(1),
            c = n(3);
        e.default = {
            props: {
                isTryLoading: {
                    type: Boolean,
                    default: !1
                },
                isLoading: {
                    type: Boolean,
                    default: !1
                },
                isLoadingFail: {
                    type: Boolean,
                    default: !1
                },
                fetchReadingList: {
                    type: Function,
                    default: void 0
                }
            },
            components: {
                ReadMenus: o.a
            },
            computed: a()({}, n.i(r.a)("temp", ["menus", "articles", "slotbydupArr", "no_more"])),
            filters: {
                formatTimeAgo: function (t) {
                    var e = Date.now(),
                        s = Math.floor((e - t) / 18e5),
                        a = n.i(c.p)(t, "yyyy.MM.dd hh:mm");
                    return s < 1 && (s = Math.floor((e - t) / 6e4), a = s + "分钟前"), s < 1 && (a = "刚刚"), a
                }, formatSeconds: function (t) {
                    var e = Math.floor(t / 1e3),
                        n = Math.floor(e / 60) + 100 + "",
                        s = Math.floor(e % 60) + 100 + "";
                    return n.substr(1) + ":" + s.substr(1)
                }
            },
            destroyed: function () {
                this.resetReadState()
            }, methods: a()({}, n.i(r.d)("temp", ["resetReadState"]), n.i(r.c)("temp", ["fetchReadingList"]), {
                formatImg: function (t) {
                    return 'url("' + t + '")'
                }, jumpTo: function (t, e) {
                    var n = this;
                    if (t.open_url) {
                        var s = "item_" + e;
                        this.$refs[s][0].classList.add("active");
                        var a = setTimeout(function () {
                            n.$refs[s][0].classList.remove("active"), n.$refs[s][0].classList.add("visited"), clearTimeout(a)
                        }, 600);
                        window.open(t.open_url)
                    }
                }, forwardTo: function (t) {
                    var e = window.location.origin + window.__ENV__.base + t;
                    window.open(e)
                }
            })
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(2),
            a = n.n(s),
            i = n(513),
            o = n.n(i),
            r = n(1);
        e.default = {
            components: {
                Reading: o.a
            },
            data: function () {
                return {
                    isReadingListLoading: !1,
                    isReadingListLoadingFail: !1,
                    startTryThreeTimesFetchReading: !1,
                    isShouldPrefetchReading: !1
                }
            }, mounted: function () {
                var t = this;
                this.fetchMuchTimesIfNoReadingData(function () {
                    t.startWatchScroll()
                })
            }, computed: a()({}, n.i(r.a)("temp", ["slotbydupArr", "no_more"])),
            methods: a()({}, n.i(r.c)("temp", ["fetchReadingList", "prefetchReading"]), {
                startWatchScroll: function () {
                    var t = this,
                        e = 0;
                    this.$refs.scroller.onscroll = function (n) {
                        var s = t.computeScrollTop(),
                            a = s.scrollTop,
                            i = s.totalHeight;
                        if (n.timeStamp - e > 100) {
                            e = n.timeStamp;
                            var o = document.documentElement.clientHeight || window.innerHeight;
                            if (!t.isReadingListLoading && i < o + a + 300) {
                                if (t.startTryThreeTimesFetchReading) return;
                                t.fetchMuchTimesIfNoReadingData()
                            }
                            t.isShouldPrefetchReading && i < o + a + 1722 && (t.isShouldPrefetchReading = !1, t.prefetchReading())
                        }
                    }
                }, getContentElement: function () {
                    var t = document.getElementsByClassName("page-content");
                    return t.length > 0 && t[0] || document.createElement("div")
                }, computeScrollTop: function () {
                    var t = this.getContentElement(),
                        e = 999999,
                        n = 0;
                    return e = parseInt(t.scrollHeight), n = t.scrollTop, {
                        scrollTop: n,
                        totalHeight: e
                    }
                }, fetchMuchTimesIfNoReadingData: function (t) {
                    var e = this;
                    this.startFetchReadingList(function () {
                        t && t(), e.no_more && (e.startTryThreeTimesFetchReading = !0, e.tryFetchReadingThreeTimes())
                    })
                }, tryFetchReadingThreeTimes: function (t) {
                    var e = this,
                        n = function () {
                            t && t(), e.startTryThreeTimesFetchReading = !1
                        };
                    ! function t(s) {
                        ++s, e.startFetchReadingList(function () {
                            if (!e.no_more || s >= 10) n();
                            else var a = setTimeout(function () {
                                t(s), clearTimeout(a)
                            }, 1e3)
                        })
                    }(0)
                }, startFetchReadingList: function (t) {
                    var e = this;
                    this.isReadingListLoading = !0, this.fetchReadingList().then(function () {
                        e.no_more || e.$nextTick(function () {
                            e.isShouldPrefetchReading = !0
                        }), t && t(), e.isReadingListLoading = !1, e.isReadingListLoadingFail = !1, e.$nextTick(function () {
                            window.slotbydup = window.slotbydup || [], _.each(e.slotbydupArr, function (t) {
                                document.getElementById(t.container) && window.slotbydup.push(t)
                            })
                        })
                    }, function () {
                        e.isReadingListLoadingFail = !0, e.isReadingListLoading = !1
                    })
                }
            })
        }
    },
    function (t, e, n) {
        "use strict";

        function s(t) {
            t.preventDefault()
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = function (t) {
            var e = document.querySelector(t) || document.querySelector("[" + t + "]");
            e && document.body.removeChild(e)
        };
        e.default = {
            data: function () {
                return {
                    titie: "",
                    state: 0,
                    tips: "",
                    showSpinner: !0
                }
            }, destroyed: function () {
                a("von-loading")
            }, methods: {
                show: function (t) {
                    var e = this;
                    this.title = t.title, this.tips = t.tips, this.showSpinner = !!t.showSpinner, this.state = 1, setTimeout(function () {
                        e.state = 2
                    }), document.body.addEventListener("touchmove", s)
                }, hide: function () {
                    var t = this;
                    this.state = 1, setTimeout(function () {
                        t.state = 0, setTimeout(function () {
                            t.$destroy()
                        })
                    }, 300), document.body.removeEventListener("touchmove", s)
                }, getState: function () {
                    return this.state
                }, update: function (t) {
                    this.title = t.title, this.tips = t.tips, this.showSpinner = !!t.showSpinner
                }
            }
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = ["//assets.qkcdn.com/images/045946c55d2e3637b8b0c4669867d6ba.png", "//assets.qkcdn.com/images/28e704035333447f4e90c0f179a52921.png", "//assets.qkcdn.com/images/28b9ac34fbfa9e487ca8f5ce8951f3d5.png", "//assets.qkcdn.com/images/174fdbd002c943a4820a1290fd6db8f9.png", "//assets.qkcdn.com/images/d90a72844d4f7bd8428584085d279c04.png", "//assets.qkcdn.com/images/9956ba8a6d40c5cdef933eb3a53a79d5.png", "//assets.qkcdn.com/images/47d82bdadb0c7370aaafb23f580af91b.png", "//assets.qkcdn.com/images/8e82abb09a3a6bfe9590375f5204ab0b.png", "//assets.qkcdn.com/images/d57ba43f480991741183069677afdd8d.png", "//assets.qkcdn.com/images/d7704bce10a030c962ce55299b56e30b.png", "//assets.qkcdn.com/images/3c3ed1e9507d5c4cf854d8df3eec4c86.png", "//assets.qkcdn.com/images/5e5fdfd730b365fea028c86575118496.png", "//assets.qkcdn.com/images/d365b75b00dfb91db30cc21b628b8350.png", "//assets.qkcdn.com/images/799e3bc721baddde6746330bba49fd96.png", "//assets.qkcdn.com/images/0eb28ac076cca9570fcc78079309db61.png", "//assets.qkcdn.com/images/1cd8ccf5dd98d37de4833928e0b2ee3a.png", "//assets.qkcdn.com/images/44f3fb7d952b02b3ec9373350b4e88a3.png", "//assets.qkcdn.com/images/88c89678d0225ef28752c9b15a05343f.png", "//assets.qkcdn.com/images/012db939a6fd5a942e597dbbb9c02994.png", "//assets.qkcdn.com/images/d08ef2569145c175c85a26abb1f234c9.png", "//assets.qkcdn.com/images/f7935d0a5087ff3c0225a77c3927c7fc.png"],
            a = ["//assets.qkcdn.com/images/9dee8e0ed955eaeca2bbadecde4839d3.png", "//assets.qkcdn.com/images/2341b6bdbe2a68755da17c47c32485b7.png", "//assets.qkcdn.com/images/010b9542fa7bf89176773108d5c0e8de.png", "//assets.qkcdn.com/images/c6c730b7b270e01795ddb5cb0998b0c8.png", "//assets.qkcdn.com/images/4b512ab7e08afcd7fb203f3bb915e23b.png", "//assets.qkcdn.com/images/ea6e4a2224e1eaa51725ec165a3fc53d.png", "//assets.qkcdn.com/images/b3ebb5010bf64dcbf3d1012bc785a436.png", "//assets.qkcdn.com/images/c713ecc1cdd8184d8bdaa82fbbb0284d.png", "//assets.qkcdn.com/images/8e40ff893f4c29751bbabeb691a31b04.png", "//assets.qkcdn.com/images/778e6e870789b6a35665489f03fd181c.png", "//assets.qkcdn.com/images/b16ad7e45e1a01625a360b47adbd542c.png", "//assets.qkcdn.com/images/e15608ee3915b956a719c144091e7e9d.png", "//assets.qkcdn.com/images/3237e604d5163ded1ac1bce9b63d8412.png", "//assets.qkcdn.com/images/6cf5e2fec545aced374eae96fd8af349.png", "//assets.qkcdn.com/images/88b06c0cace5f2f70232f733ed434b64.png", "//assets.qkcdn.com/images/2c97ff6d06d5584ad45e13f70d02ad58.png", "//assets.qkcdn.com/images/b77635702399323759609c6a59f2bef6.png", "//assets.qkcdn.com/images/7d9a2b706c7b044d4a2735e7ff9f0db7.png", "//assets.qkcdn.com/images/8e154196778cbf171e7e71855741f7be.png", "//assets.qkcdn.com/images/eee972809770ec88d7348c16a3ab8eba.png", "//assets.qkcdn.com/images/8754fab673c110244bbc0a65b06ecb1f.png"];
        e.default = {
            props: {
                level: Number,
                halo: {
                    type: Boolean,
                    default: !0
                },
                small: {
                    type: Boolean,
                    default: !1
                }
            },
            methods: {
                getImg: function () {
                    return this.halo ? this.chooseImg(s) : this.chooseImg(a)
                }, chooseImg: function (t) {
                    return this.level ? 1 === this.level ? t[0] : 2 === this.level ? t[1] : 3 === this.level ? t[2] : 4 === this.level ? t[3] : 5 === this.level ? t[4] : 6 === this.level ? t[5] : 7 === this.level ? t[6] : 8 === this.level ? t[7] : 9 === this.level ? t[8] : this.level >= 10 && this.level <= 12 ? t[9] : this.level >= 13 && this.level <= 15 ? t[10] : this.level >= 16 && this.level <= 19 ? t[11] : this.level >= 20 && this.level <= 23 ? t[12] : this.level >= 24 && this.level <= 27 ? t[13] : this.level >= 28 && this.level <= 31 ? t[14] : this.level >= 32 && this.level <= 36 ? t[15] : this.level >= 37 && this.level <= 41 ? t[16] : this.level >= 42 && this.level <= 46 ? t[17] : this.level >= 47 && this.level <= 51 ? t[18] : this.level >= 52 && this.level <= 56 ? t[19] : this.level >= 57 && this.level <= 61 ? t[20] : t[0] : ""
                }
            }
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = {
            props: {
                text: {
                    type: String,
                    default: ""
                }
            }
        }
    },
    function (t, e, n) {
        "use strict";

        function s(t, e, s, a) {
            var i = document.querySelector("[" + t + "]");
            n.i(h.tween)({
                from: {
                    x: parseFloat(e)
                },
                to: {
                    x: parseFloat(s)
                },
                duration: 750,
                easing: "easeOutQuad",
                step: function (t) {
                    i.innerHTML = a ? t.x.toFixed(a) : t.x.toFixed(0)
                }
            }).then(function () {
                i.innerHTML = a ? parseFloat(s).toFixed(a) : parseFloat(s)
            })
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = n(8),
            i = n.n(a),
            o = n(2),
            r = n.n(o),
            c = n(1),
            u = n(31),
            l = n.n(u),
            p = n(515),
            d = n.n(p),
            _ = n(16),
            f = n.n(_),
            v = n(51),
            h = n(19),
            m = (n.n(h), n(6)),
            g = n(187),
            b = (n.n(g), n(77));
        e.default = {
            props: {
                isWelcome: {
                    type: Number,
                    default: 0
                }
            },
            data: function () {
                return {
                    tipsBgColor5: "rgba(27, 226, 205, 0.75)",
                    tipsBgColor10: "rgba(243, 159, 0, 0.75)",
                    state: 0,
                    img: "",
                    iconMove: 0,
                    star: 0,
                    animateAfter: 0,
                    tipMove: 0,
                    up: "",
                    down: "",
                    showFlow: 0,
                    letterSpacing: !1,
                    circleBorder: !1
                }
            }, components: {
                LevelIcon: l.a,
                Tooltip: d.a
            }, watch: {
                balance: function (t, e) {
                    t > e && s("balanceNum", e, t, 2)
                }, reward_coin: function (t, e) {
                    t > e && s("perDay", e, t)
                }, coin_balance: function (t, e) {
                    t > e && s("goCoin", e, t)
                }
            }, mounted: function () {
                this.msg_num.toString().length > 2 && (this.letterSpacing = !0), 1 === this.msg_num.toString().length && (this.circleBorder = !0)
            }, destroyed: function () {}, computed: r()({}, n.i(c.a)("dashboardV5", ["avatar", "msg_num", "open_msg", "trial_card", "level_info", "today_reward", "balance", "reward", "has_rewarded", "first_claim", "coin_balance", "tudi_online_num", "tusun_online_num", "has_new_tudi", "reward_coin", "coin", "online_reward_open", "next_level_coin", "claim_level_coin_open", "clock_switch", "clock_extends", "clock_countdown_day"]), n.i(c.a)("assistant", ["info"]), n.i(c.e)("dashboardV5", ["hasTraiCard", "needPopupOldCard", "needPopupDownload"])),
            filters: {
                limitLen: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
                        n = t;
                    return n.toString().length > e && (n = "···"), n
                }
            },
            methods: r()({}, n.i(c.c)("dashboardV5", ["hasRewarded", "rewardCoinClaimToday"]), n.i(c.c)("assistant", ["getInfo"]), n.i(c.d)("dashboardV5", ["updateReward", "updateBalance", "updateCoin"]), {
                forward: function (t) {
                    if (this.needPopupDownload) return void this.showDownloadPopup();
                    if (!this.has_new_tudi && "/reward" === t) {
                        return void $popup.fromTemplate(g.popup_no_apprentice.template, g.popup_no_apprentice.options).show().then(function (t) {
                            1 === t && $router.forward("/apprentice")
                        })
                    }
                    $router.forward(t)
                }, showDownloadPopup: function () {
                    var t = this;
                    this.getInfo().then(function () {
                        $popup.fromTemplate(m.g.template(t.info), m.g.options(t.info)).show()
                    })
                }, gold: function () {
                    var t = this;
                    if (!this.has_rewarded) return this.needPopupDownload ? void this.showDownloadPopup() : void this.rewardCoinClaimToday().then(function () {
                        t.hasRewarded(1), t.updateCoin(), b.a.show("每日奖励", t.coin)
                    })
                }, showUpgrade: function () {
                    var t = this;
                    new i.a(function (e) {
                        n.e(46).then(function () {
                            var s = document.createElement("div");
                            s.id = "upgrade", document.body.appendChild(s);
                            var a = t.needPopupOldCard,
                                i = n(707),
                                o = new f.a({
                                    components: {
                                        Upgrade: i
                                    },
                                    data: function () {
                                        return {
                                            isOld: a
                                        }
                                    }, el: "#upgrade",
                                    store: v.a,
                                    template: '\n              <Upgrade ref="upgrade" :is-old="isOld"/>\n            ',
                                    methods: {
                                        show: function () {
                                            this.$refs.upgrade.show()
                                        }
                                    }
                                });
                            e(o)
                        }.bind(null, n)).catch(n.oe)
                    }).then(function (t) {
                        t.show()
                    })
                }
            })
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(2),
            a = n.n(s),
            i = n(1),
            o = n(31),
            r = n.n(o);
        e.default = {
            data: function () {
                return {
                    start: 0
                }
            }, components: {
                LevelIcon: r.a
            }, computed: a()({}, n.i(i.a)("dashboardV5", ["trial_card"])),
            mounted: function () {
                var t = this;
                $bus.$on("newFlow", function () {
                    t.start = 1, setTimeout(function () {
                        t.start = 0
                    }, 1e3)
                })
            }
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(8),
            a = n.n(s),
            i = n(2),
            o = n.n(i),
            r = n(537),
            c = n.n(r),
            u = n(102),
            l = n.n(u),
            p = n(3),
            d = n(4),
            f = n(16),
            v = n.n(f),
            h = n(22),
            m = n.n(h),
            g = n(520),
            b = n.n(g),
            k = n(519),
            w = n.n(k),
            C = n(518),
            y = n.n(C),
            T = n(521),
            x = n.n(T),
            S = n(516),
            $ = n.n(S),
            A = n(517),
            P = n.n(A),
            E = n(465),
            I = n.n(E),
            L = n(463),
            O = n.n(L),
            R = n(29),
            N = n.n(R),
            D = n(1),
            F = n(5),
            M = n(51),
            U = [{
                color: "#ffffff",
                bg: "//assets.qkcdn.com/images/8243516f0f470d8c4203dea6996bc5ca.png",
                title: "试玩赚钱",
                subTitle: "每个1~3元，无需审核",
                path: "/tasks"
            }, {
                color: "#ffffff",
                bg: "//assets.qkcdn.com/images/8243516f0f470d8c4203dea6996bc5ca.png",
                title: "收徒赚钱",
                subTitle: "100%徒弟收益提成",
                path: "/apprentice"
            }],
            q = function () {
                var t = $storage.get(d.Y) || "";
                t || (t = (new Date).getTime(), $storage.set(d.Y, t))
            };
        e.default = {
            components: {
                AssistantUnopen: m.a,
                ColumnItemsTop: b.a,
                ColumnItemsMiddle: w.a,
                ColumnItems: y.a,
                RowItems: x.a,
                HeaderInfo: $.a,
                IconAnimate: P.a,
                ReadPage: c.a,
                ReadMenus: l.a,
                InvitePopup: I.a,
                OpenRongyuka: O.a
            },
            computed: o()({}, n.i(D.a)("dashboardV5", ["is_inside", "avatar", "balance", "total_reward", "today_reward", "nickname", "uid", "is_lite", "level_info", "has_finished_task_once", "has_explore_task", "first_claim", "sdj_loan", "explore_switch", "qt_sale_switch", "yl_huan_info", "yl_article_switch", "invite_code", "shoutu_v5_3_open"]), n.i(D.a)("read", ["slotbydupArr", "no_more"]), n.i(D.e)("dashboardV5", ["showBindTip", "needUpgradeForce", "needPopupOpen"]), n.i(D.a)("assistant", ["info"])),
            data: function () {
                return {
                    entrancesTop: U,
                    entrancesMiddle: [{
                        color: "#fff",
                        bgImage: "//assets.qkcdn.com/images/8a9c54ad5b030c5ca1b479cddb094007.png",
                        title: "注册赚钱",
                        subTitle: "每个3~30元 审核3天内",
                        path: "/gaoe",
                        hardCodePath: ""
                    }, {
                        color: "#fff",
                        bgImage: "//assets.qkcdn.com/images/2a488c9340008f5445d7623e4895f0db.png",
                        title: "办卡赚钱",
                        subTitle: "每个30~90元 审核14天内",
                        path: "/credit/list",
                        hardCodePath: ""
                    }],
                    entrancesBottom: [],
                    showFlow: 0,
                    flowStep: 0,
                    upgradeNeed: 0,
                    anonymous: !$cookie.get(d._6),
                    showReadMenus: !1,
                    timer: 0,
                    scrollTop: 0,
                    isGoTopShow: !1,
                    isInRongYuKa: !1,
                    isReadingListLoading: !1,
                    isReadingListLoadingFail: !1,
                    startTryThreeTimesFetchReading: !1,
                    isShouldPrefetchReading: !0,
                    requestReadingDataTryingNum: 0,
                    isHashScrolling: !1,
                    requestReadingDataCallback: void 0
                }
            }, watch: {
                scrollTop: function (t, e) {
                    t >= d._7 ? this.isGoTopShow = !0 : this.isGoTopShow = !1
                }
            }, created: function () {
                this.isInRongYuKa = n.i(p.a)(), this.isInRongYuKa && q()
            }, mounted: function () {
                var t = this;
                if (this.fetch().then(function () {
                    if (t.qt_sale_switch) {
                        var e = {
                            color: "#fff",
                            bgImage: "//assets.qkcdn.com/images/f7e2f58dc4e8edff46260f123849d059.png",
                            title: "卖货赚钱",
                            subTitle: "支持淘宝全网商品",
                            path: "/sale/list",
                            hardCodePath: ""
                        };
                        t.yl_article_switch && (e.path = "/sales"), t.entrancesMiddle.push(e)
                    }
                    if (t.sdj_loan) {
                        var n = {
                            color: "#fff",
                            bgImage: "//assets.qkcdn.com/images/41b20336b966afffadcbf83d62f47960.png",
                            title: "闪电借钱",
                            subTitle: "额度大 下款快",
                            path: "/loan",
                            hardCodePath: ""
                        };
                        t.entrancesMiddle.push(n)
                    }
                    if (3 === t.entrancesMiddle.length && t.entrancesMiddle.length < 4) {
                        var s = {
                            color: "#BFBFBF",
                            bgImage: "//assets.qkcdn.com/images/b93ce8e022ed83d513107e726e8fb099.png",
                            title: "敬请期待",
                            subTitle: "Coming soon…",
                            path: "",
                            hardCodePath: ""
                        };
                        t.entrancesMiddle.push(s)
                    }
                    if (t.explore_switch) {
                        var a = {
                            color: "#3a3a3a",
                            bg: "//assets.qkcdn.com/images/d35fe54094fe35a7dc14d946bb60b91a.png",
                            title: "探索任务",
                            subTitle: "深度体验 发现更多",
                            path: "/explore/1"
                        };
                        0 === t.has_explore_task && (a.path = "/explore/2"), t.entrancesBottom.push(a)
                    }
                    if (t.yl_huan_info) {
                        var i = {
                            color: "#3a3a3a",
                            bg: "//assets.qkcdn.com/images/ffc7e6ce31625583a7cfd1035cec5f03.png",
                            title: "金币当钱花",
                            subTitle: "吃的 穿的 用的统统免费拿",
                            path: ""
                        };
                        t.entrancesBottom.push(i)
                    }
                    if (1 === t.entrancesBottom.length && t.entrancesBottom.length < 2) {
                        var o = {
                            color: "#bfbfbf",
                            bg: "//assets.qkcdn.com/images/b803cbc228addbe8c7724199ccaf899b.png",
                            title: "敬请期待",
                            subTitle: "Coming soon…",
                            path: ""
                        };
                        t.entrancesBottom.push(o)
                    }
                    1 !== t.first_claim || t.needUpgradeForce || (document.body.classList.add("popup-open"), t.showFlow = 1, t.flowStep = $storage.get(d._8) || 1, 3 !== t.flowStep && 4 !== t.flowStep || (t.flowStep = 1, $storage.set(d._8, t.flowStep)), t.hideCustomerService()), 3 === $storage.get(d._8) && t.showCoinPopup(), 1 === t.is_lite && (t.entrancesTop[0].path = "/tasks/lite", t.entrancesMiddle[0].path = "/gaoe/lite"), t.shoutu_v5_3_open && (t.entrancesTop[1].path = "/apprentices")
                }), this.$store.watch(function (t) {
                    return t.dashboardV5.is_lite
                }, function (e) {
                    1 === e && (t.entrancesTop[0].path = "/tasks/lite", t.entrancesMiddle[0].path = "/gaoe/lite")
                }), n.i(p.a)() && !this.anonymous) var e = setTimeout(function () {
                    t.startWatchScroll(), clearTimeout(e)
                }, 500)
            }, destroyed: function () {
                clearInterval(this.timer)
            }, methods: o()({}, n.i(D.c)("dashboardV5", ["fetch", "getTrialCardInfo", "rewardCoinClaimToday", "hasRewarded"]), n.i(D.c)("read", ["fetchReadingList", "saveReadAction", "prefetchReading"]), n.i(D.c)("assistant", ["getInfo"]), n.i(D.d)("dashboardV5", ["updateCoin"]), {
                showCustomerService: function () {
                    1 !== this.first_claim && $bus.$emit("showCustomerService", {
                        pos_bottom: 25
                    })
                }, hideCustomerService: function () {
                    $bus.$emit("hideCustomerService")
                }, invitePopup: function () {
                    $api.addAction(101), this.clipboard = new N.a(".intive-popup"), this.$refs.invite.show()
                }, popupOpen: function () {
                    var t = this;
                    this.getInfo().then(function () {
                        t.$refs.open.show()
                    })
                }, hashScrollingCallback: function () {
                    var t = this;
                    this.isHashScrolling = !0;
                    var e = setTimeout(function () {
                        t.isHashScrolling = !1, clearTimeout(e)
                    }, 600)
                }, startWatchScroll: function () {
                    var t = this,
                        e = 0,
                        n = 0,
                        s = 0;
                    this.$refs.scroller.onscroll = function (a) {
                        var i = t.computeScrollTop(),
                            o = i.scrollTop,
                            r = i.totalHeight;
                        if (a.timeStamp - s > 100) {
                            if (s = a.timeStamp, o >= d._7 ? (F.a.$emit(F.b.READ_MENU_FIXED, !0), t.hideCustomerService(), e < 1 && t.saveReadAction(), e++) : (F.a.$emit(F.b.READ_MENU_FIXED, !1), t.showCustomerService()), t.scrollTop = o, $storage.set(d._9, o), t.startTryThreeTimesFetchReading) return;
                            var c = document.documentElement.clientHeight || window.innerHeight;
                            !t.isReadingListLoading && !t.isHashScrolling && r < c + o + 300 && t.fetchMuchTimesIfNoReadingData(), t.isShouldPrefetchReading && r < c + o + 1722 && (t.isShouldPrefetchReading = !1, t.prefetchReading()), !t.isReadingListLoading && o > 50 && n < 1 && (n++, t.fetchMuchTimesIfNoReadingData())
                        }
                    }
                }, fetchMuchTimesIfNoReadingData: function (t) {
                    var e = this;
                    if (this.requestReadingDataTryingNum = 5, this.requestReadingDataCallback = void 0, t && (this.requestReadingDataCallback = function () {
                        var t = setTimeout(function () {
                            e.scrollToReading(), clearTimeout(t)
                        }, 0)
                    }), !this.startTryThreeTimesFetchReading) {
                        var n = function () {
                            e.hashScrollingCallback(), e.requestReadingDataCallback && e.requestReadingDataCallback(), e.startTryThreeTimesFetchReading = !1, e.isShouldPrefetchReading = !0
                        };
                        this.startFetchReadingList(function () {
                            e.no_more ? (e.startTryThreeTimesFetchReading = !0, e.tryFetchReadingThreeTimes(n)) : n()
                        })
                    }
                }, tryFetchReadingThreeTimes: function (t) {
                    var e = this;
                    ! function n() {
                        --e.requestReadingDataTryingNum, e.startFetchReadingList(function () {
                            if (!e.no_more || e.requestReadingDataTryingNum <= 1) t();
                            else var s = setTimeout(function () {
                                n(), clearTimeout(s)
                            }, 1e3)
                        })
                    }()
                }, startFetchReadingList: function (t) {
                    var e = this;
                    this.isReadingListLoading = !0, this.fetchReadingList().then(function () {
                        e.isReadingListLoading = !1, e.isReadingListLoadingFail = !1, e.$nextTick(function () {
                            t && t(), window.slotbydup = window.slotbydup || [], _.each(e.slotbydupArr, function (t) {
                                document.getElementById(t.container) && window.slotbydup.push(t)
                            })
                        })
                    }, function () {
                        e.isReadingListLoadingFail = !0, e.isReadingListLoading = !1, t && t()
                    })
                }, getContentElement: function () {
                    var t = document.getElementsByClassName("page-content");
                    return t.length > 0 && t[0] || document.createElement("div")
                }, computeScrollTop: function () {
                    var t = this.getContentElement(),
                        e = 999999,
                        n = 0;
                    return e = parseInt(t.scrollHeight), n = t.scrollTop, {
                        scrollTop: n,
                        totalHeight: e
                    }
                }, reloadPage: function () {
                    location.reload()
                }, resetHash: function () {
                    var t = setTimeout(function () {
                        location.hash = "", clearTimeout(t)
                    }, 500)
                }, scrollToTop: function () {
                    var t = this,
                        e = function (t, e, n, s) {
                            return (t /= s / 2) < 1 ? n / 2 * t * t * t * t * t + e : n / 2 * ((t -= 2) * t * t * t * t + 2) + e
                        },
                        n = 0,
                        s = this.scrollTop;
                    ! function a(i) {
                        requestAnimationFrame(function () {
                            if (++n <= 50) {
                                var o = e(n, i, -i, 50);
                                t.getContentElement().scrollTop = parseInt(o), a(s)
                            }
                        })
                    }(s)
                }, scrollToReading: function () {
                    location.hash = "reading", this.resetHash()
                }, nextStep: function () {
                    var t = this;
                    this.flowStep < 3 && this.flowStep++, 3 === this.flowStep && (document.body.classList.remove("popup-open"), this.showFlow = 0, this.rewardCoinClaimToday().then(function () {
                        t.hasRewarded(1), t.updateCoin(), t.showCoinPopup()
                    }).catch(function () {
                        $storage.set(d._8, 1)
                    })), $storage.set(d._8, this.flowStep)
                }, showCoinPopup: function () {
                    new a.a(function (t) {
                        n.e(47).then(function () {
                            var e = document.createElement("div");
                            e.id = "first-coin-popup", document.body.appendChild(e);
                            var s = n(706),
                                a = new v.a({
                                    components: {
                                        FirstCoinPopup: s
                                    },
                                    el: "#first-coin-popup",
                                    store: M.a,
                                    template: '\n              <first-coin-popup ref="firstCoin" />\n            ',
                                    methods: {
                                        show: function () {
                                            this.$refs.firstCoin.show()
                                        }
                                    }
                                });
                            t(a)
                        }.bind(null, n)).catch(n.oe)
                    }).then(function (t) {
                        t.show()
                    })
                }
            })
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(2),
            a = n.n(s),
            i = n(1),
            o = n(6),
            r = n(12);
        e.default = {
            props: {
                list: {
                    type: Array,
                    default: [{
                        bg: "",
                        color: "#3a3a3a",
                        title: "",
                        subTitle: ""
                    }]
                }
            },
            data: function () {
                return {}
            }, computed: a()({}, n.i(i.a)("assistant", ["info"]), n.i(i.a)("dashboardV5", ["explore_tags", "yl_huan_info"]), n.i(i.e)("dashboardV5", ["needPopupDownload"])),
            methods: a()({}, n.i(i.c)("assistant", ["getInfo"]), n.i(i.c)("dashboardV5", ["userAction"]), {
                jumpTo: function (t) {
                    var e = this;
                    return this.needPopupDownload ? void this.getInfo().then(function () {
                        $popup.fromTemplate(o.g.template(e.info), o.g.options(e.info)).show()
                    }) : "金币当钱花" === t.title ? (this.userAction({
                        action_id: 104
                    }), void n.i(r.l)({
                        userName: this.yl_huan_info.username,
                        path: this.yl_huan_info.path,
                        miniProgramType: this.yl_huan_info.miniprogram_type
                    })) : void $router.forward(t.path)
                }
            })
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(2),
            a = n.n(s),
            i = n(3),
            o = n(1),
            r = n(6);
        e.default = {
            props: {
                list: {
                    type: Array,
                    default: [{
                        title: "",
                        subTitle: "",
                        bg: ""
                    }]
                }
            },
            computed: a()({}, n.i(o.a)("assistant", ["info"]), n.i(o.e)("dashboardV5", ["needPopupDownload"])),
            methods: a()({}, n.i(o.c)("assistant", ["getInfo"]), {
                jumpTo: function (t) {
                    var e = this;
                    return this.needPopupDownload ? void this.getInfo().then(function () {
                        $popup.fromTemplate(r.g.template(e.info), r.g.options(e.info)).show()
                    }) : t.hardCodePath ? void(n.i(i.a)() ? window.location.href = t.hardCodePath : window.open(t.hardCodePath)) : void $router.forward(t.path)
                }
            })
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(2),
            a = n.n(s),
            i = n(1),
            o = n(6);
        e.default = {
            props: {
                list: {
                    type: Array,
                    default: [{
                        bg: "",
                        color: "#3a3a3a",
                        title: "",
                        subTitle: ""
                    }]
                }
            },
            computed: a()({}, n.i(i.a)("assistant", ["info"]), n.i(i.e)("dashboardV5", ["needPopupDownload"])),
            methods: a()({}, n.i(i.c)("assistant", ["getInfo"]), {
                jumpTo: function (t) {
                    var e = this;
                    return "试玩赚钱" === t.title ? void $router.forward(t.path) : this.needPopupDownload ? void this.getInfo().then(function () {
                        $popup.fromTemplate(o.g.template(e.info), o.g.options(e.info)).show()
                    }) : void $router.forward(t.path)
                }
            })
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(2),
            a = n.n(s),
            i = n(3),
            o = n(1),
            r = n(5);
        e.default = {
            props: {
                list: {
                    type: Array,
                    default: [{
                        title: "",
                        subTitle: "",
                        bg: ""
                    }]
                },
                locked: {
                    type: Boolean,
                    default: !1
                }
            },
            computed: a()({}, n.i(o.a)("dashboardV5", ["is_lite"]), n.i(o.e)("dashboardV5", ["needPopupDownload"])),
            methods: a()({}, n.i(o.c)("assistant", ["getInfo"]), {
                jumpTo: function (t) {
                    return this.needPopupDownload ? void this.getInfo().then(function () {
                        r.a.$emit(r.b.POPUP_ASSISTANT_UNOPEN, {
                            showAssistantUnopenPopup: !0
                        })
                    }) : t.hardCodePath ? void(n.i(i.a)() ? window.location.href = t.hardCodePath : window.open(t.hardCodePath)) : void $router.forward(t.path)
                }
            })
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(2),
            a = n.n(s),
            i = n(1);
        e.default = {
            props: {
                task: {
                    type: Object,
                    default: {}
                }
            },
            methods: a()({}, n.i(i.c)("explore", ["checkExplore", "exploreMyList"]), {
                checkStatus: function (t) {
                    var e = this;
                    this.checkExplore(t).then(function () {
                        e.exploreMyList()
                    })
                }
            })
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(2),
            a = n.n(s),
            i = n(9),
            o = n.n(i),
            r = n(1),
            c = n(43),
            u = (n.n(c), n(3)),
            l = n(5);
        e.default = {
            components: {
                CustomPopup: o.a
            },
            data: function () {
                return {
                    currentTaskId: 0
                }
            }, computed: a()({}, n.i(r.a)("explore", ["receiveTasks"])),
            mounted: function () {
                var t = this;
                l.a.$on(l.b.SHOW_EXPLORE_GIVE_UP_TASK, function (e) {
                    t.currentTaskId = e, t.show()
                })
            }, destroyed: function () {
                l.a.$off(l.b.SHOW_EXPLORE_GIVE_UP_TASK)
            }, methods: a()({}, n.i(r.c)("explore", ["giveUpExplore", "exploreAcquire"]), {
                show: function () {
                    this.$refs.giveUp.show()
                }, hide: function () {
                    this.$refs.giveUp.hide()
                }, giveup: function (t) {
                    var e = this,
                        s = this.currentTaskId;
                    this.hide(), n.i(u.g)(500).then(function () {
                        $popup.fromTemplate(c.popup_give_up_explore.template, c.popup_give_up_explore.options).show().then(function (n) {
                            1 === n && e.giveUpExplore({
                                taskId: t,
                                currentTaskId: s
                            }).then(function () {
                                e.exploreAcquire(e.currentTaskId, "放弃成功，正在争抢新任务...")
                            })
                        })
                    })
                }
            })
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(2),
            a = n.n(s),
            i = n(10),
            o = n.n(i),
            r = n(522),
            c = n.n(r),
            u = n(526),
            l = n.n(u),
            p = n(523),
            d = n.n(p),
            _ = n(1),
            f = n(43),
            v = (n.n(f), n(4)),
            h = n(525),
            m = n.n(h),
            g = n(12),
            b = n(5),
            k = n(3);
        e.default = {
            components: {
                AnimateHeader: o.a,
                ExploreCard: c.a,
                StartExplorePopup: l.a,
                GiveUpTaskPopup: d.a,
                JailBroken: m.a
            },
            data: function () {
                return {
                    index: 1,
                    showResetMask: 0,
                    reset: "",
                    showTip: $storage.get(v.M) || 0
                }
            }, computed: a()({}, n.i(_.a)("explore", ["taskTist", "myList", "is_jail_broken", "in_compare", "ongoingId", "ongoingDay", "detail"])),
            mounted: function () {
                var t = this;
                this.index = parseInt(this.$route.params.index), 1 === this.index ? this.exploreMyList() : this.exploreTaskList(), b.a.$on(b.b.ACQUIRE_EXPLORE_TASK_SUCCESS, function () {
                    t.showTip = 1, $storage.set(v.M, t.showTip), t.exploreTaskList()
                })
            }, destroyed: function () {
                this.init(), b.a.$off(b.b.ACQUIRE_EXPLORE_TASK_SUCCESS)
            }, methods: a()({}, n.i(_.c)("explore", ["exploreTaskList", "exploreMyList", "exploreAcquire", "resetExploreTime", "exploreStart"]), n.i(_.d)("explore", ["init"]), {
                back: function () {
                    $router.back("/dashboard")
                }, tabClick: function (t) {
                    this.index = t, 1 === this.index ? (this.showTip = 0, $storage.set(v.M, this.showTip), this.exploreMyList()) : this.exploreTaskList(), $router.push({
                        path: "/explore/" + t
                    })
                }, acquire: function (t) {
                    var e = t.id;
                    this.exploreAcquire(e)
                }, start: function (t, e) {
                    if (1 !== e.status) {
                        if ("今天" !== t) return void $toast.show("任务还没开始哦~");
                        var n = {
                            explore_task_id: e.id,
                            the_day: e.the_day
                        };
                        this.$refs.exploreDetail.show(n)
                    }
                }, resetMaskVisible: function (t) {
                    var e = this,
                        n = 1e3 * this.detail.submiao;
                    this.showResetMask = 1, this.reset && clearTimeout(this.reset), this.reset = setTimeout(function () {
                        e.showResetMask = 0
                    }, n)
                }, resetExplore: function () {
                    var t = this;
                    this.resetExploreTime().then(function () {
                        $popup.fromTemplate(f.popup_patient_explore.template, f.popup_patient_explore.options).show().then(function () {
                            var e = function (e) {
                                    if (e && 0 === e.status) $popup.fromTemplate(f.popup_undownload_explore.template, f.popup_undownload_explore.options).show().then(function (e) {
                                        1 === e && (location.href = n.i(k.e)(t.detail.app_url, {
                                            return_url: location.href
                                        }))
                                    });
                                    else if (e && 1 === e.status) {
                                        var s = {
                                            taskId: t.detail.explore_task_id,
                                            time: (new Date).getTime()
                                        };
                                        $storage.set(v.N, s), t.resetMaskVisible(!0);
                                        var a = {
                                            explore_task_id: t.detail.explore_task_id,
                                            the_day: t.ongoingDay
                                        };
                                        t.exploreStart(a)
                                    }
                                },
                                s = {
                                    x_dis: $cookie.get("DIS4"),
                                    task_id: t.detail.explore_task_id,
                                    task_type: t.detail.task_type,
                                    bid: t.detail.app_bid,
                                    scheme: encodeURIComponent(t.detail.scheme)
                                };
                            n.i(g.g)(s, e)
                        })
                    })
                }
            })
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(2),
            a = n.n(s),
            i = n(1),
            o = n(3);
        e.default = {
            computed: a()({}, n.i(i.a)("explore", ["is_jail_broken"])),
            methods: {
                customService: function () {
                    location.href = n.i(o.l)()
                }
            }
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(2),
            a = n.n(s),
            i = n(9),
            o = n.n(i),
            r = n(1),
            c = n(43),
            u = (n.n(c), n(3)),
            l = n(12),
            p = n(4),
            d = n(29),
            _ = n.n(d);
        e.default = {
            props: {
                callback: Function
            },
            components: {
                CustomPopup: o.a
            },
            data: function () {
                return {
                    the_day: 0
                }
            }, computed: a()({}, n.i(r.a)("explore", ["detail"])),
            methods: a()({}, n.i(r.c)("explore", ["exploreDetail", "exploreMyList", "exploreStart"]), {
                show: function (t) {
                    var e = this;
                    this.exploreDetail(t).then(function () {
                        e.the_day = t.the_day, e.$refs.f.show()
                    })
                }, copyCDK: function () {
                    if (this.detail.cdkey) {
                        var t = document.querySelector(".copywriting");
                        t.setAttribute("data-clipboard-action", "copy"), t.setAttribute("data-clipboard-text", this.detail.cdkey), this.clipboard = new _.a(".copywriting"), n.i(u.m)() >= 10 && $toast.show("复制成功，可在任务APP中进行兑换~")
                    }
                }, startExplore: function () {
                    var t = this,
                        e = {
                            x_dis: $cookie.get("DIS4"),
                            task_id: this.detail.explore_task_id,
                            task_type: this.detail.task_type,
                            bid: this.detail.app_bid,
                            scheme: encodeURIComponent(this.detail.scheme)
                        },
                        s = function (e) {
                            if (e && 0 === e.status) t.$refs.f.hide(), n.i(u.g)(500).then(function () {
                                $popup.fromTemplate(c.popup_undownload_explore.template, c.popup_undownload_explore.options).show().then(function (e) {
                                    1 === e && (location.href = n.i(u.e)(t.detail.app_url, {
                                        return_url: location.href
                                    }))
                                })
                            });
                            else if (e && 1 === e.status) {
                                var s = {
                                    taskId: t.detail.explore_task_id,
                                    time: (new Date).getTime()
                                };
                                $storage.set(p.N, s);
                                var a = {
                                    explore_task_id: t.detail.explore_task_id,
                                    the_day: t.the_day
                                };
                                t.exploreStart(a).then(function () {
                                    t.callback(), t.$refs.f.hide()
                                })
                            }
                        };
                    n.i(l.g)(e, s)
                }
            })
        }
    },
    function (t, e, n) {
        "use strict";

        function s(t) {
            t.preventDefault()
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = n(31),
            i = n.n(a),
            o = n(5);
        e.default = {
            data: function () {
                return {
                    state: 0,
                    unit: "元",
                    exp_info: {
                        add_reward: 1.4,
                        final_level: 15,
                        start_level: 10
                    }
                }
            }, components: {
                LevelIcon: i.a
            }, mounted: function () {
                var t = this;
                o.a.$on(o.b.LEVEL_UPGRADE, function (e) {
                    t.unit = e.unit, t.exp_info = e.exp_info, t.show()
                })
            }, methods: {
                show: function () {
                    document.body.classList.add("popup-open"), $backdrop.show(), this.state = 1, document.addEventListener("touchmove", s)
                }, hide: function () {
                    var t = this;
                    this.state = 2, setTimeout(function () {
                        document.body.classList.remove("popup-open")
                    }, 300), $backdrop.hide(), document.removeEventListener("touchmove", s), setTimeout(function () {
                        t.state = 0
                    }, 300)
                }, closed: function () {
                    this.hide()
                }
            }
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(8),
            a = n.n(s),
            i = n(9),
            o = n.n(i),
            r = n(31),
            c = n.n(r),
            u = n(5),
            l = n(19);
        n.n(l);
        e.default = {
            data: function () {
                return {
                    isLevelUp: !1,
                    levelOld: 1,
                    levelNew: 1,
                    reward: 0,
                    content: "",
                    type: "",
                    id: 1,
                    unit: "元",
                    progressWitdh: 0,
                    level: 1,
                    exp: 0,
                    exp_need: 0,
                    expWidth: 0,
                    taskTypeName: "",
                    exp_info: {
                        now_exp: 0,
                        now_level: 0,
                        need_exp: 0,
                        final_level: 0,
                        final_need_exp: 0
                    },
                    showShouTo: !1
                }
            }, components: {
                CustomPopup: o.a,
                LevelIcon: c.a
            }, mounted: function () {
                var t = this;
                u.a.$on(u.b.TASK_REWARD_POPUP, function (e) {
                    t.reward = e.reward, t.content = e.content, t.type = e.type, t.id = e.id, t.unit = e.unit, t.exp_info = e.exp_info, t.level = t.exp_info.now_level, t.levelOld = t.exp_info.now_level, t.exp = t.exp_info.now_exp, t.exp_need = t.exp_info.need_exp, t.expWidth = parseFloat(t.exp_info.now_exp) / parseFloat(t.exp_info.need_exp) * 235, t.progressWitdh = t.exp_info.need_exp, [3, 6, 7].indexOf(t.type) > -1 ? (t.taskTypeName = "试玩", t.showShouTo = !0) : 4 === t.type ? t.taskTypeName = "专属" : 12 === t.type ? t.taskTypeName = "办卡" : 9 === t.type && (t.taskTypeName = "注册"), t.show()
                })
            }, methods: {
                show: function () {
                    var t = this;
                    return new a.a(function (e) {
                        t.$refs.p.show(), e()
                    }).then(function () {
                        var e = (parseFloat(t.exp_info.now_exp) + parseFloat(t.reward)) / t.exp_info.need_exp * 235;
                        setTimeout(function () {
                            n.i(l.tween)({
                                from: {
                                    x: parseFloat(t.exp)
                                },
                                to: {
                                    x: parseFloat(t.exp_info.now_exp) + parseFloat(t.reward)
                                },
                                duration: 750,
                                easing: "easeOutQuad",
                                step: function (e) {
                                    t.exp = e.x.toFixed(2)
                                }
                            }), e > 235 && n.i(l.tween)({
                                from: {
                                    x: parseFloat(t.exp_need)
                                },
                                to: {
                                    x: parseFloat(t.exp_info.final_need_exp)
                                },
                                duration: 750,
                                easing: "easeOutQuad",
                                step: function (e) {
                                    t.exp_need = e.x.toFixed(2)
                                }
                            }), t.rush()
                        }, 500)
                    })
                }, rush: function () {
                    function t(s) {
                        o >= 0 && (n.i(l.tween)({
                            from: {
                                x: s ? 0 : e
                            },
                            to: {
                                x: 0 === o ? a : 235
                            },
                            duration: 750,
                            easing: "linear",
                            step: function (t) {
                                i.style.width = t.x + "px"
                            }
                        }).then(function () {
                            o--, t(1)
                        }), 0 === o && (r.level = r.exp_info.final_level, setTimeout(function () {
                            r.isLevelUp = !0, r.levelNew = r.exp_info.final_level
                        }, 100)))
                    }
                    var e = parseFloat(this.exp_info.now_exp) / parseFloat(this.exp_info.need_exp) * 235,
                        s = (parseFloat(this.exp_info.now_exp) + parseFloat(this.reward)) / parseFloat(this.exp_info.need_exp) * 235,
                        a = s < 235 ? s : (parseFloat(this.exp_info.now_exp) + parseFloat(this.reward)) / parseFloat(this.exp_info.final_need_exp) * 235,
                        i = document.querySelector("[progress]");
                    i.style.width = e + "px";
                    var o = this.exp_info.final_level - this.exp_info.now_level,
                        r = this;
                    t()
                }, action: function () {
                    var t = $router.currentRoute.name;
                    switch (this.taskTypeName) {
                        case "试玩":
                            this.$refs.p.hide(), "task_detail_lite" === t ? $router.back("/tasks/lite") : "task_detail" === t && $router.back("/tasks");
                            break;
                        case "注册":
                            this.$refs.p.hide();
                            var e = $router.currentRoute.query;
                            e.lite && "1" === e.lite.toString() ? $router.back("/gaoe/lite") : "gaoe_detail" === $router.currentRoute.name && $router.back("/gaoe");
                            break;
                        case "专属":
                            this.$refs.p.hide(), "zstasks_lite" === t || "zstask_detail_lite" === t ? $router.back("/tasks/lite") : "zstask_detail" !== t && "zstasks" !== t || $router.back("/tasks");
                            break;
                        default:
                            this.$refs.p.hide()
                    }
                }, goToShoutu: function () {
                    this.$refs.p.hide(), $router.forward("/apprentices")
                }
            }
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(2),
            a = n.n(s),
            i = n(530),
            o = n.n(i),
            r = n(528),
            c = n.n(r),
            u = n(531),
            l = n.n(u),
            p = n(529),
            d = n.n(p),
            _ = n(53),
            f = (n.n(_), n(1));
        e.default = {
            components: {
                Register: o.a,
                Punch: c.a,
                invitedPopup: l.a,
                ReferralPopopup: d.a
            },
            data: function () {
                return {
                    img: "//assets.qkcdn.com/images/d852563424b6f99f9ed510d27891f3cf.png",
                    lockInfo: {}
                }
            }, computed: a()({}, n.i(f.a)("group", ["groupinfo"]), n.i(f.a)("dashboardV5", ["clock_countdown_day"])),
            mounted: function () {
                var t = this;
                this.groupResigter().then(function () {
                    var e = $storage.get("group:referral:day"),
                        n = (new Date).getDate();
                    e !== n && n < 24 && n > 15 && 0 !== t.clock_countdown_day && (t.$refs.group.show(), $storage.set("group:referral:day", n))
                })
            }, methods: a()({}, n.i(f.c)("group", ["groupResigter", "groupExit"]), {
                back: function () {
                    this.$router.back("./dashboard")
                }, invited: function () {
                    this.$refs.invited.show()
                }, quit: function () {
                    var t = this;
                    $popup.fromTemplate(_.popup_signout_punch.template, _.popup_signout_punch.options).show().then(function (e) {
                        1 === e && t.groupExit().then(function (t) {
                            0 === t.err_code ? window.location.reload() : $toast.show(t.err_msg)
                        })
                    })
                }
            })
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(2),
            a = n.n(s),
            i = n(53),
            o = (n.n(i), n(1));
        e.default = {
            data: function () {
                return {
                    punchText: "先解锁，后开团",
                    flag: !1
                }
            }, mounted: function () {
                var t = this;
                setTimeout(function () {
                    t.flag = 1 === t.groupinfo.current_role
                }, 500)
            }, props: {
                groupinfo: {
                    type: Object,
                    default: {}
                }
            }, computed: a()({}, n.i(o.a)("group", ["teamInfo"])),
            methods: a()({}, n.i(o.c)("group", ["groupPayTeam", "groupResigter"]), {
                deblocking: function () {
                    var t = this;
                    if (!this.groupinfo.is_open) {
                        $popup.fromTemplate(i.popup_pay_punch.template, i.popup_pay_punch.options).show().then(function (e) {
                            1 === e && t.groupPayTeam().then(function (e) {
                                if (0 !== e.err_code) return void $toast.show(e.err_msg);
                                t.groupResigter()
                            })
                        })
                    }
                }, invitedFri: function () {
                    this.$emit("invited")
                }
            })
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(2),
            a = n.n(s),
            i = n(9),
            o = n.n(i),
            r = n(1);
        e.default = {
            components: {
                CustomPopup: o.a
            },
            computed: a()({}, n.i(r.a)("dashboardV5", ["clock_countdown_day"])),
            methods: {
                show: function () {
                    var t = this;
                    setTimeout(function () {
                        t.$refs.f.show()
                    }, 300)
                }
            }
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(2),
            a = n.n(s),
            i = n(1);
        e.default = {
            data: function () {
                return {
                    days: ["第1天", "第2天", "第3天", "第4天", "第5天", "第6天", "第7天"],
                    punchtext: "打卡",
                    flag: !1
                }
            }, props: {
                groupinfo: {
                    type: Object,
                    default: {}
                }
            }, mounted: function () {
                var t = this;
                setTimeout(function () {
                    t.flag = 0 !== t.groupinfo.the_day && !t.groupinfo.is_clock
                }, 300)
            }, methods: a()({}, n.i(i.c)("group", ["groupSignIn", "groupResigter"]), {
                registerday: function (t) {
                    if (5 === this.groupinfo.today_clock_num) {
                        if (t < this.groupinfo.the_day) return "register-day"
                    } else if (t + 2 <= this.groupinfo.the_day) return "register-day"
                }, hasregister: function (t) {
                    if (5 === this.groupinfo.today_clock_num) {
                        if (t <= this.groupinfo.the_day) return "has-register"
                    } else if (t < this.groupinfo.the_day) return "has-register"
                }, attendance: function () {
                    var t = this;
                    this.groupinfo.is_clock || this.groupSignIn().then(function (e) {
                        0 === e.err_code ? (t.groupinfo.is_clock = 1, t.punchtext = "今日已打卡", $toast.show("打卡成功"), t.groupResigter()) : $toast.show("打卡失败")
                    })
                }
            })
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(2),
            a = n.n(s),
            i = n(9),
            o = n.n(i),
            r = n(1);
        e.default = {
            components: {
                CustomPopup: o.a
            },
            data: function () {
                return {
                    inviteId: ""
                }
            }, beforeMount: function () {
                this.inviteId = ""
            }, methods: a()({}, n.i(r.c)("group", ["groupInvited"]), {
                show: function () {
                    this.$refs.invited.show(), this.inviteId = ""
                }, invited: function () {
                    var t = this,
                        e = /[^\d]/g,
                        n = this.inviteId;
                    if (!this.inviteId) return void $toast.show("请输入ID");
                    e.test(this.inviteId) ? $toast.show("请填写有效用户ID") : this.groupInvited({
                        user_id: n
                    }).then(function (e) {
                        t.$refs.invited.hide(), 0 === e.err_code ? t.inviteId = "" : ($toast.show(e.messages), t.inviteId = "")
                    })
                }
            })
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(31),
            a = n.n(s);
        e.default = {
            props: {
                style: {
                    type: String,
                    default: ""
                },
                data: {
                    type: Array,
                    default: []
                },
                theads: {
                    type: Array,
                    default: []
                },
                cols: {
                    type: Array,
                    default: []
                },
                type: 0
            },
            components: {
                LevelIcon: a.a
            },
            data: function () {
                return {
                    startPageY: 0,
                    time: 0
                }
            }, methods: {
                startTouch: function (t) {
                    if (this.startPageY = t.touches[0].pageY, 1 === this.type) {
                        (new Date).getSeconds() - this.time < 2 && (t.stopPropagation(), t.returnValue = !0)
                    }
                }, touchMove: function (t) {
                    if (1 === this.type) {
                        var e = t.touches[0].pageY;
                        if (Math.abs(this.startPageY - e) < 6) return this.time = (new Date).getSeconds(), t.stopPropagation(), void(t.returnValue = !0)
                    }
                }, endTouch: function (t) {}
            }
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(2),
            a = n.n(s),
            i = n(10),
            o = n.n(i),
            r = n(532),
            c = n.n(r),
            u = n(31),
            l = n.n(u),
            p = n(188),
            d = n(1);
        e.default = {
            components: {
                AnimateHeader: o.a,
                BTable: c.a,
                LevelIcon: l.a
            },
            computed: a()({}, n.i(d.a)("level", ["level", "level_exp", "level_coin", "next_level", "next_level_need", "next_level_exp", "next_level_more_income", "next_level_more_coin", "next_level_coin", "table_list", "level_list", "claim_level_coin_open"]), n.i(d.e)("level", ["expPerc"])),
            data: function () {
                return {
                    levelTips: ""
                }
            }, filters: {
                addLevelPreStr: function (t) {
                    return "Lv." + t
                }, rmTrailingZero: function (t) {
                    return t.indexOf(".00") > -1 ? parseFloat(t).toFixed(0) : "0" === t.substr(t.length - 1) ? parseFloat(t).toFixed(1) : t
                }
            }, mounted: function () {
                var t = this;
                this.fetchDashboard().then(function () {
                    t.levelTips = n.i(p.a)(t)
                })
            }, destroyed: function () {
                this.resetState()
            }, methods: a()({}, n.i(d.d)("level", ["resetState"]), n.i(d.c)("level", ["fetchDashboard"]), {
                back: function () {
                    $router.back("/dashboard")
                }
            })
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(2),
            a = n.n(s),
            i = n(1),
            o = n(10),
            r = n.n(o),
            c = n(12);
        e.default = {
            data: function () {
                return {
                    isEmpty: !1,
                    id: 0,
                    message_time: "",
                    showNoData: !1
                }
            }, components: {
                AnimateHeader: r.a
            }, mounted: function () {}, computed: a()({}, n.i(i.a)("message", ["messageList", "noMoreData"])),
            destroyed: function () {
                this.reset()
            }, methods: a()({}, n.i(i.c)("message", ["fetchMessage"]), n.i(i.d)("message", ["reset"]), {
                jumpTo: function (t) {
                    if (t.is_read = 1, "" !== t.url)
                        if (1 === t.open_webview) n.i(c.h)(t.url);
                        else if (0 === t.open_webview) {
                            $router.forward({
                                path: t.url,
                                query: {
                                    backroute: "/message"
                                }
                            })
                        }
                }, infinite: function (t) {
                    var e = this;
                    this.noMoreData && setTimeout(function () {
                        e.$refs.scroller.finishInfinite(2)
                    }, 1e3), setTimeout(function () {
                        var n = {
                            limit: 20,
                            id: e.id,
                            message_time: e.message_time
                        };
                        e.fetchMessage(n).then(function () {
                            if (0 === e.messageList.length) e.isEmpty = !0;
                            else {
                                e.messageList.length < 5 && (e.showNoData = !0);
                                var n = e.messageList.length - 1;
                                e.id = e.messageList[n].id, e.message_time = e.messageList[n].message_time
                            }
                            t(!0)
                        })
                    }, 1e3)
                }, back: function () {
                    $router.back("/user")
                }
            })
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(2),
            a = n.n(s),
            i = n(145),
            o = n(1);
        e.default = {
            data: function () {
                return {
                    tips: ["1、钱咖可直接在任务助手中试玩啦！", "2、全新等级系统，赚的越多等级越高，每日领钱越多；", "3、全新探索任务，更多金币玩法等你来发现。"]
                }
            }, computed: a()({}, n.i(o.a)("assistant", ["info"])),
            methods: a()({}, n.i(o.c)("assistant", ["getInfo"]), {
                upgrade: function () {
                    var t = this;
                    this.getInfo().then(function () {
                        $popup.fromTemplate(i.a.template(t.info), i.a.options(t.info)).show()
                    })
                }
            })
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(2),
            a = n.n(s),
            i = n(5),
            o = n(1);
        e.default = {
            props: {
                scrollToMenus: {
                    type: Function,
                    default: null
                },
                fetchReadingList: {
                    type: Function,
                    default: void 0
                }
            },
            data: function () {
                return {
                    si: 0,
                    selectedId: 0,
                    posFixed: !1
                }
            }, computed: a()({}, n.i(o.a)("read", ["menus"])),
            mounted: function () {
                var t = this;
                i.a.$on(i.b.READ_MENU_FIXED, function (e) {
                    t.posFixed = e
                })
            }, destroyed: function () {
                clearInterval(this.si), i.a.$off(i.b.READ_MENU_FIXED)
            }, methods: a()({}, n.i(o.d)("read", ["menuSelected"]), {
                menuClick: function (t) {
                    this.menuSelected(t), this.fetchReadingList(this.posFixed)
                }
            })
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = {
            props: ["src", "big"],
            data: function () {
                return {
                    url: ""
                }
            }, computed: {
                imgUrl: function () {
                    return this.url ? this.url : this.big ? "//assets.qkcdn.com/images/e0786307f638017251756270232b8bda.png" : "//assets.qkcdn.com/images/17aec67656c9eeea0a0b6e615ffbe81e.png"
                }
            }, mounted: function () {
                var t = this,
                    e = new Image;
                e.src = this.src, e.onerror = function () {
                    e.src = ""
                }, e.onload = function () {
                    t.url = e.src
                }
            }
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(2),
            a = n.n(s),
            i = n(102),
            o = n.n(i),
            r = n(1),
            c = n(12),
            u = n(3),
            l = n(536),
            p = n.n(l);
        e.default = {
            props: {
                isTryLoading: {
                    type: Boolean,
                    default: !1
                },
                isLoading: {
                    type: Boolean,
                    default: !1
                },
                isLoadingFail: {
                    type: Boolean,
                    default: !1
                },
                fetchReadingList: {
                    type: Function,
                    default: void 0
                }
            },
            components: {
                ReadMenus: o.a,
                QkImage: p.a
            },
            created: function () {
                this.isInRongYuKa = n.i(u.a)()
            }, mounted: function () {
                function t(t) {
                    var e = t.data,
                        n = t.data.tuid;
                    e.noadx > 0 && (document.getElementById("iframe" + n).parentElement.parentElement.parentElement.style.display = "none")
                }
                window.addEventListener("message", t, !1)
            }, computed: a()({}, n.i(r.a)("read", ["menus", "articles", "slotbydupArr", "no_more"])),
            filters: {
                formatTimeAgo: function (t) {
                    var e = Date.now(),
                        s = Math.floor((e - t) / 18e5),
                        a = n.i(u.p)(t, "yyyy.MM.dd hh:mm");
                    return s < 1 && (s = Math.floor((e - t) / 6e4), a = s + "分钟前"), s < 1 && (a = "刚刚"), a
                }, formatSeconds: function (t) {
                    var e = Math.floor(t / 1e3),
                        n = Math.floor(e / 60) + 100 + "",
                        s = Math.floor(e % 60) + 100 + "";
                    return n.substr(1) + ":" + s.substr(1)
                }
            },
            destroyed: function () {
                this.resetReadState()
            }, methods: a()({}, n.i(r.d)("read", ["resetReadState"]), n.i(r.c)("dashboardV5", ["userAction"]), {
                formatImg: function (t) {
                    return 'url("' + t + '")'
                }, jumpTo: function (t, e) {
                    var s = this;
                    if (t.ad_url && (this.userAction({
                        action_id: t.action_id,
                        ext: t.ext,
                        pos: t.pos,
                        type: t.type
                    }), n.i(c.h)(t.ad_url)), t.open_url) {
                        var a = "item_" + e;
                        this.$refs[a][0].classList.add("active");
                        var i = setTimeout(function () {
                            s.$refs[a][0].classList.remove("active"), s.$refs[a][0].classList.add("visited"), clearTimeout(i)
                        }, 600);
                        n.i(c.k)({
                            url: t.open_url
                        })
                    }
                }, forwardTo: function (t) {
                    var e = window.location.origin + window.__ENV__.base + t;
                    n.i(c.h)(e)
                }
            })
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = {
            data: function () {
                return {
                    rules: [{
                        title: "什么是阅读赚金币？",
                        desc: "阅读赚金币是钱咖的全新板块，只需有效阅读板块中任意一篇新闻即可得10金币，每日最高可得200金币！"
                    }, {
                        title: "什么是“有效阅读”？",
                        desc: "为防止小部分用户恶意刷取奖励，钱咖采取了一些手段来验证用户是否真的阅读了新闻。您只需要认真阅读某篇新闻一段时间即可哦～"
                    }]
                }
            }
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(2),
            a = n.n(s),
            i = n(1),
            o = n(3);
        e.default = {
            data: function () {
                return {
                    showLogin: 0
                }
            }, mounted: function () {
                this.$route.query.referer_code || (this.showLogin = 1)
            }, methods: a()({}, n.i(i.c)("dashboardV5", ["createUserV5"]), {
                start: function () {
                    this.createUserV5().then(function () {
                        n.i(o.a)() && n.i(o.f)(), $router.forward("/dashboard")
                    })
                }, login: function () {
                    var t = {
                        path: "/login",
                        query: {
                            backroute: "/"
                        }
                    };
                    $router.forward(t)
                }
            })
        }
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {},
    function (t, e) {}, , , , , , , , , , , , , , , , , , ,
    function (t, e, n) {
        n(429);
        var s = n(0)(n(189), n(628), "data-v-91b34774", null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(364);
        var s = n(0)(n(190), n(557), "data-v-128e43f4", null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(416);
        var s = n(0)(n(197), n(612), "data-v-6cfe193c", null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(418);
        var s = n(0)(null, n(614), "data-v-6ff5a6f1", null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(382);
        var s = n(0)(null, n(578), "data-v-371fac4d", null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(442);
        var s = n(0)(n(200), n(644), "data-v-f44d40ea", null);
        t.exports = s.exports
    },
    function (t, e, n) {
        var s = n(0)(n(202), n(631), null, null);
        t.exports = s.exports
    },
    function (t, e, n) {
        var s = n(0)(n(203), n(630), null, null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(375);
        var s = n(0)(n(205), n(570), "data-v-28d5a01e", null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(374);
        var s = n(0)(n(209), n(569), "data-v-27e9ee4e", null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(353);
        var s = n(0)(n(210), n(543), "data-v-03929c41", null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(376);
        var s = n(0)(n(211), n(571), null, null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(377);
        var s = n(0)(n(212), n(572), null, null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(436);
        var s = n(0)(n(214), n(638), "data-v-c3b9eee0", null);
        t.exports = s.exports
    },
    function (t, e, n) {
        var s = n(0)(n(219), n(545), null, null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(401);
        var s = n(0)(n(220), n(597), "data-v-53af7eba", null);
        t.exports = s.exports
    },
    function (t, e, n) {
        var s = n(0)(n(222), n(576), null, null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(425);
        var s = n(0)(n(223), n(624), "data-v-83eabbf4", null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(373);
        var s = n(0)(n(224), n(568), "data-v-2684e545", null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(433);
        var s = n(0)(n(225), n(635), "data-v-acf4be10", null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(411);
        var s = n(0)(n(226), n(607), "data-v-63e103ae", null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(351);
        var s = n(0)(n(227), n(541), "data-v-033b047a", null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(397);
        var s = n(0)(n(228), n(593), "data-v-4fd5f5d8", null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(423);
        var s = n(0)(n(229), n(621), "data-v-7dfaaa8a", null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(422);
        var s = n(0)(n(230), n(620), "data-v-7ca04108", null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(387);
        var s = n(0)(n(231), n(583), "data-v-3e841ef4", null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(363);
        var s = n(0)(n(232), n(556), null, null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(431);
        var s = n(0)(n(233), n(633), "data-v-a63b6e62", null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(371);
        var s = n(0)(n(234), n(566), "data-v-23f056c0", null);
        t.exports = s.exports
    },
    function (t, e, n) {
        var s = n(0)(n(235), n(616), null, null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(384);
        var s = n(0)(n(236), n(580), "data-v-3916d27f", null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(428);
        var s = n(0)(n(237), n(627), "data-v-905e2aa8", null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(365);
        var s = n(0)(n(238), n(558), "data-v-14a26075", null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(388);
        var s = n(0)(n(239), n(584), "data-v-42d78476", null);
        t.exports = s.exports
    },
    function (t, e, n) {
        var s = n(0)(n(240), n(623), null, null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(400);
        var s = n(0)(n(241), n(596), "data-v-5321358d", null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(402);
        var s = n(0)(n(243), n(598), "data-v-53c485a0", null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(359);
        var s = n(0)(n(244), n(552), "data-v-111a3b02", null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(372);
        var s = n(0)(n(245), n(567), "data-v-24de8d0f", null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(378);
        var s = n(0)(n(246), n(573), "data-v-29afaea3", null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(427);
        var s = n(0)(n(247), n(626), "data-v-8c7c5f0a", null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(369);
        var s = n(0)(n(248), n(563), null, null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(408);
        var s = n(0)(n(249), n(604), "data-v-62f9dea8", null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(367);
        var s = n(0)(n(250), n(561), "data-v-1a4b517a", null);
        t.exports = s.exports
    },
    function (t, e, n) {
        var s = n(0)(n(254), n(564), null, null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(403);
        var s = n(0)(n(256), n(599), "data-v-56fe53f1", null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(409);
        var s = n(0)(n(257), n(605), "data-v-6363e200", null);
        t.exports = s.exports
    },
    function (t, e, n) {
        var s = n(0)(n(258), n(548), null, null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(417);
        var s = n(0)(n(260), n(613), null, null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(383);
        var s = n(0)(n(261), n(579), "data-v-37343bac", null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(385);
        var s = n(0)(n(262), n(581), "data-v-3d267de4", null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(394);
        var s = n(0)(n(264), n(590), "data-v-4dbf89c8", null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(357);
        var s = n(0)(n(266), n(549), null, null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(415);
        var s = n(0)(n(267), n(611), "data-v-694f9fa3", null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(360);
        var s = n(0)(n(268), n(553), "data-v-112c3310", null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(390);
        var s = n(0)(n(270), n(586), "data-v-45cff419", null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(426);
        var s = n(0)(n(271), n(625), "data-v-8bf21ae4", null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(368);
        var s = n(0)(n(272), n(562), "data-v-1eb7c7a8", null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(355);
        var s = n(0)(n(273), n(546), "data-v-0b5a3487", null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(432);
        var s = n(0)(n(274), n(634), "data-v-a82cfb2c", null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(361);
        var s = n(0)(n(275), n(554), "data-v-1140fca2", null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(412);
        var s = n(0)(n(276), n(608), "data-v-63e1ca8e", null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(381);
        var s = n(0)(n(277), n(577), "data-v-339f2538", null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(444);
        var s = n(0)(n(278), n(646), "data-v-fc01737c", null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(393);
        var s = n(0)(n(281), n(589), "data-v-49654336", null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(414);
        var s = n(0)(n(282), n(610), "data-v-65f06e7e", null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(366);
        var s = n(0)(n(283), n(559), "data-v-17e939bc", null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(356);
        var s = n(0)(n(284), n(547), "data-v-0c2e5440", null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(350);
        var s = n(0)(n(285), n(540), "data-v-00ff148e", null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(380);
        var s = n(0)(n(286), n(575), "data-v-31650338", null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(410);
        var s = n(0)(n(287), n(606), "data-v-63c9214a", null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(419);
        var s = n(0)(n(288), n(615), null, null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(358);
        var s = n(0)(n(289), n(551), "data-v-10fd4a8e", null);
        t.exports = s.exports
    },
    function (t, e, n) {
        var s = n(0)(n(291), n(550), null, null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(420);
        var s = n(0)(n(292), n(618), "data-v-7943d273", null);
        t.exports = s.exports
    },
    function (t, e, n) {
        n(440);
        var s = n(0)(n(293), n(642), "data-v-dac34e18", null);
        t.exports = s.exports
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "page"
                }, [n("AnimateHeader", {
                    attrs: {
                        "bg-color": "#f5f5f5",
                        "menu-bg-color": "#f0f0f0",
                        color: "#3A3A3A",
                        title: "老用户登录",
                        "on-back-button-click": t.back,
                        expanded: !1,
                        animate: !1
                    }
                }), t._v(" "), n("div", {
                    staticClass: "page-content change-nickname"
                }, [n("div", {
                    staticClass: "tip"
                }, [t._v("不支持iOS账号和安卓账号互切")]), t._v(" "), n("label", {
                    attrs: {
                        for: "phone"
                    }
                }, [n("div", {
                    staticClass: "title"
                }, [t._v("手机号")]), t._v(" "), n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.form.phone,
                        expression: "form.phone"
                    }],
                    staticClass: "input",
                    attrs: {
                        type: "tel",
                        id: "phone",
                        placeholder: "输入手机号码",
                        maxlength: "13"
                    },
                    domProps: {
                        value: t.form.phone
                    },
                    on: {
                        input: function (e) {
                            e.target.composing || (t.form.phone = e.target.value)
                        }
                    }
                })]), t._v(" "), n("div", {
                    staticClass: "division"
                }), t._v(" "), n("SendCodeMod", {
                    staticClass: "send-code-mod",
                    attrs: {
                        phone: t.form.phone,
                        codeType: 3
                    }
                }), t._v(" "), n("div", {
                    staticClass: "bottom-line"
                }), t._v(" "), n("label", {
                    attrs: {
                        for: "code"
                    }
                }, [n("div", {
                    staticClass: "title"
                }, [t._v("验证码")]), t._v(" "), n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.form.code,
                        expression: "form.code"
                    }],
                    staticClass: "input",
                    attrs: {
                        type: "tel",
                        id: "code",
                        placeholder: "输入验证码"
                    },
                    domProps: {
                        value: t.form.code
                    },
                    on: {
                        input: function (e) {
                            e.target.composing || (t.form.code = e.target.value)
                        }
                    }
                }), t._v(" "), n("div", {
                    staticClass: "bottom-line last"
                })]), t._v(" "), n("button", {
                    staticClass: "button button-submit",
                    class: {
                        "can-submit": t.canSubmit,
                        "button-disabled": !t.canSubmit
                    },
                    on: {
                        click: function (e) {
                            t.login()
                        }
                    }
                }, [t._v("登录")])], 1)], 1)
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("CustomPopup", {
                    ref: "invited",
                    attrs: {
                        column: !0
                    }
                }, [n("div", {
                    staticClass: "invited-container"
                }, [n("div", {
                    staticClass: "popup-invited-body"
                }, [n("div", {
                    staticClass: "invite-title"
                }, [t._v("邀请好友组团")]), t._v(" "), n("div", {
                    staticClass: "input-id"
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.inviteId,
                        expression: "inviteId"
                    }],
                    attrs: {
                        type: "number",
                        pattern: "[0-9]*",
                        placeholder: "输入好友ID"
                    },
                    domProps: {
                        value: t.inviteId
                    },
                    on: {
                        input: function (e) {
                            e.target.composing || (t.inviteId = e.target.value)
                        }, blur: function (e) {
                            t.$forceUpdate()
                        }
                    }
                })]), t._v(" "), n("div", {
                    staticClass: "prompt"
                }, [t._v("ID在首页点击头像进入「个人中心」查看")])]), t._v(" "), n("div", {
                    staticClass: "popup-buttons",
                    on: {
                        click: function (e) {
                            t.invited()
                        }
                    }
                }, [n("button", {
                    staticClass: "button button-block button-light"
                }, [n("span", [t._v("发送邀请")])])])])])
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return t.zstask_info.total > 0 ? n("ActionList", {
                    attrs: {
                        title: "我的任务"
                    }
                }, [n("div", {
                    staticClass: "personal-tasks",
                    on: {
                        click: function (e) {
                            t.jumpTo()
                        }
                    }
                }, [n("div", {
                    staticClass: "icons"
                }, t._l(t.zstask_info.icons, function (t) {
                    return n("div", [n("img", {
                        attrs: {
                            src: t
                        }
                    })])
                })), t._v(" "), n("div", {
                    staticClass: "day-tasks"
                }, [t._v("您有"), n("span", [t._v(t._s(t.zstask_info.total))]), t._v("个专属任务")]), t._v(" "), n("div", {
                    staticClass: "reward-content"
                }, [n("span", {
                    staticClass: "plus"
                }, [t._v("+")]), t._v(" "), n("span", {
                    staticClass: "reward",
                    domProps: {
                        textContent: t._s(parseFloat(t.zstask_info.total_reward).toFixed(1))
                    }
                }), t._v(" "), n("span", {
                    staticClass: "yuan"
                }, [t._v("元")])])])]) : t._e()
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "level-icon",
                    class: {
                        "no-halo": !t.halo,
                        small: t.small
                    }
                }, [n("span", [t._v("Lv." + t._s(t.level))]), t._v(" "), n("img", {
                    class: {
                        "no-halo": !t.halo
                    },
                    attrs: {
                        src: t.getImg(),
                        alt: ""
                    }
                })])
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("CustomPopup", {
                    ref: "p",
                    attrs: {
                        column: !0
                    }
                }, [n("div", {
                    staticClass: "popup-body popup-bonus-start"
                }, [n("div", {
                    staticClass: "title"
                }, [n("img", {
                    attrs: {
                        src: "//assets.qkcdn.com/images/43860a30444b4552e6e2434020300cde.png",
                        alt: ""
                    }
                })]), t._v(" "), n("div", {
                    staticClass: "sub-title"
                }, [t._v("任务仅需下载，10秒试玩")]), t._v(" "), n("div", {
                    staticClass: "reward"
                }, [t._v("奖励随机 "), n("span", {
                    domProps: {
                        textContent: t._s(t.bonus_tasks_reward[0])
                    }
                }), n("span", [t._v("~")]), n("span", {
                    domProps: {
                        textContent: t._s(t.bonus_tasks_reward[1])
                    }
                }), t._v(" 金币")]), t._v(" "), n("div", {
                    staticClass: "button-start-egg",
                    on: {
                        click: t.startTask
                    }
                }, [t._v("抢金币")])])])
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("CustomPopup", {
                    ref: "p"
                }, [n("div", {
                    staticClass: "popup-body popup-noHelpTask"
                }, [n("div", {
                    staticClass: "icon-gangAoTaiPopup"
                }, [n("img", {
                    attrs: {
                        src: "//assets.qkcdn.com/images/27b45482f54027cbc824250002067288.png"
                    }
                })]), t._v(" "), n("div", {
                    staticClass: "tips"
                }, [t._v("完成任务可能需要用到中国大陆地区的AppStore账号和手机号")]), t._v(" "), n("div", {
                    staticClass: "double-button",
                    on: {
                        click: function (e) {
                            t.start()
                        }
                    }
                }, [t._v("我知道了")])])])
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return t.showActionList ? n("ActionList", {
                    attrs: {
                        title: t.title
                    }
                }, [t._l(t.coming, function (e, s) {
                    return n("Action", {
                        key: s,
                        nativeOn: {
                            click: function (e) {
                                t.onComingTaskClick(e)
                            }
                        }
                    }, [n("div", {
                        staticClass: "icon",
                        class: {
                            "border-blue": "easy" === t.taskType,
                            "border-green": "easy" !== t.taskType
                        },
                        slot: "icon"
                    }, [n("div", {
                        staticClass: "icon-no-img",
                        class: {
                            easy: "easy" === t.taskType
                        }
                    }, [n("div", {
                        domProps: {
                            textContent: t._s(e.start_date)
                        }
                    })])]), t._v(" "), n("span", {
                        domProps: {
                            textContent: t._s(e.title)
                        },
                        slot: "app-name"
                    }), t._v(" "), n("Tags", {
                        attrs: {
                            tags: e.tags
                        },
                        slot: "desc"
                    }), t._v(" "), n("div", {
                        staticClass: "reward-content",
                        slot: "reward-wrap"
                    }, [n("span", {
                        staticClass: "plus"
                    }, [t._v("+")]), t._v(" "), n("span", {
                        staticClass: "reward",
                        domProps: {
                            textContent: t._s(parseFloat(e.reward).toFixed(1))
                        }
                    }), t._v(" "), n("span", {
                        staticClass: "yuan"
                    }, [t._v("元")])])], 1)
                }), t._v(" "), "standard" !== t.taskType || t.has_tasks_coming ? t._e() : n("Action", [n("div", {
                    staticClass: "icon",
                    slot: "icon"
                }, [n("img", {
                    attrs: {
                        src: "//qianka.b0.upaiyun.com/images/809c958dfd2f7f6f78da97f40322423a.png"
                    }
                })]), t._v(" "), n("span", {
                    slot: "app-name"
                }, [t._v("暂无任务预告")]), t._v(" "), n("span", {
                    slot: "desc"
                }, [t._v("过会儿再来看看吧")])])], 2) : t._e()
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "row-list-wrap"
                }, [t._l(t.list, function (e, s) {
                    return t.locked ? t._e() : n("div", {
                        key: s,
                        staticClass: "item-vertical",
                        style: {
                            background: "url(" + e.bg + ") no-repeat"
                        },
                        on: {
                            click: function (n) {
                                t.jumpTo(e)
                            }
                        }
                    }, [n("div", {
                        staticClass: "title"
                    }, [t._v(t._s(e.title))]), t._v(" "), n("div", {
                        staticClass: "subtitle"
                    }, [t._v(t._s(e.subTitle))])])
                }), t._v(" "), t.locked ? n("div", {}, [n("img", {
                    staticClass: "shade",
                    attrs: {
                        src: "//assets.qkcdn.com/images/d729550ac41c668afe3fb1b1af5fbe40.png"
                    }
                }), t._v(" "), n("img", {
                    staticClass: "shade",
                    attrs: {
                        src: "//assets.qkcdn.com/images/d8b87151d0c2f3791879a1a0e7c2e505.png"
                    }
                }), t._v(" "), n("img", {
                    staticClass: "shade",
                    attrs: {
                        src: "//assets.qkcdn.com/images/8420ceaff7b9f40f94ae014a3db82dc9.png"
                    }
                })]) : t._e()], 2)
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "register"
                }, [n("div", {
                    staticClass: "register-shadow"
                }), t._v(" "), n("div", {
                    staticClass: "days"
                }, [n("ul", {
                    staticClass: "clearfix"
                }, t._l(t.days, function (e, s) {
                    return n("li", {
                        key: s,
                        class: t.registerday(s)
                    }, [t._v(t._s(e))])
                }))]), t._v(" "), n("div", {
                    staticClass: "progress-bar"
                }, [n("ul", {
                    staticClass: "clearfix"
                }, [t._l(t.days.length - 1, function (e) {
                    return n("li", {
                        key: e,
                        class: t.hasregister(e)
                    }, [n("span")])
                }), t._v(" "), t.groupinfo.reward > 2 ? n("li", {
                    staticClass: "packet double",
                    class: 7 === t.groupinfo.the_day && 5 === this.groupinfo.today_clock_num ? "colonel" : ""
                }, [n("span", [t._v("3元红包")]), n("i")]) : n("li", {
                    staticClass: "packet League",
                    class: 7 === t.groupinfo.the_day && 5 === this.groupinfo.today_clock_num ? "awards" : ""
                }, [n("span", [t._v("1.5元红包")]), n("i")])], 2)]), t._v(" "), n("div", {
                    class: t.groupinfo.is_open && t.groupinfo.the_day ? t.groupinfo.is_clock ? "attendance clockoff" : "attendance clockon" : "attendance",
                    on: {
                        click: function (e) {
                            t.flag && t.attendance()
                        }
                    }
                }, [n("span", {
                    domProps: {
                        textContent: t._s(0 !== t.groupinfo.is_clock ? "今日已打卡" : "打卡")
                    }
                })])])
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    directives: [{
                        name: "nav",
                        rawName: "v-nav",
                        value: {
                            title: "芝麻信用认证",
                            showBackButton: !0,
                            onBackButtonClick: t.back
                        },
                        expression: "{title: '芝麻信用认证', showBackButton: true, onBackButtonClick: back }"
                    }],
                    staticClass: "page has-navbar"
                }, [n("div", {
                    staticClass: "page-content"
                }, [n("bind-zhima-form")], 1)])
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", [n("div", {
                    staticClass: "tooltip"
                }, [t._v(t._s(t.text))])])
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement;
                return (t._self._c || e)("img", {
                    attrs: {
                        src: t.imgUrl
                    }
                })
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "page page-upgrade"
                }, [n("div", {
                    staticClass: "page-content page-content-upgrade"
                }, [n("div", {
                    staticClass: "back",
                    on: {
                        click: function (e) {
                            t.$router.back("/dahsboard")
                        }
                    }
                }, [n("img", {
                    attrs: {
                        src: "//assets.qkcdn.com/images/452af697fa4f02c0d9061a31bddc08c5.png",
                        alt: ""
                    }
                }), t._v(" "), n("span", [t._v("返回")])]), t._v(" "), t._m(0), t._v(" "), n("div", {
                    staticClass: "title"
                }, [t._v("重磅升级")]), t._v(" "), n("div", t._l(t.tips, function (e, s) {
                    return n("div", {
                        key: s,
                        staticClass: "tips"
                    }, [n("span", [t._v(t._s(e))])])
                })), t._v(" "), n("div", {
                    staticClass: "button-coral btn-upgrade",
                    on: {
                        click: function (e) {
                            t.upgrade()
                        }
                    }
                }, [t._v("立即升级")]), t._v(" "), n("div", {
                    staticClass: "remind-tip"
                }, [t._v("您的所有数据升级后都将保留")])])])
            }, staticRenderFns: [
                function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "banner"
                    }, [n("img", {
                        attrs: {
                            src: "//assets.qkcdn.com/images/c070ab33a8a95fcb3da6cc7a1bcb835d.png",
                            alt: ""
                        }
                    })])
                }
            ]
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    directives: [{
                        name: "nav",
                        rawName: "v-nav",
                        value: {
                            hideNavbar: !0
                        },
                        expression: "{hideNavbar: true}"
                    }],
                    staticClass: "page page-task-detail"
                }, [n("AnimateHeader", {
                    attrs: {
                        "bg-color": "#FFDD55",
                        "menu-bg-color": "#FFD155",
                        color: "#3A3A3A",
                        "on-back-button-click": t.back,
                        expanded: !0,
                        animate: !1,
                        "show-back-button": !1,
                        "show-menu-button": !0,
                        "on-menu-button-click": t.back
                    }
                }, [n("div", {
                    slot: "content"
                }, [n("TaskDetailTitle", [n("div", {
                    staticClass: "reward"
                }, [n("span", [t._v("任务奖励 + ")]), t._v(" "), n("span", {
                    staticClass: "income",
                    attrs: {
                        "task-detail-reward": ""
                    },
                    domProps: {
                        textContent: t._s(t.reward)
                    }
                }), t._v(" "), n("span", [t._v("元")])]), t._v(" "), n("div", {
                    staticClass: "countdown"
                }, [n("span", [t._v("剩余时间 ")]), t.expire_at > 0 ? n("count-down", {
                    attrs: {
                        deadline: t.expire_at,
                        format: "mm:ss"
                    }
                }) : t._e()], 1)])], 1)]), t._v(" "), t.explore_reward > 0 ? n("div", {
                    staticClass: "dl-title"
                }, [t._v("完成试玩后解锁 "), n("span", [t._v(t._s(t.explore_reward))]), t._v(" 金币探索任务")]) : t._e(), t._v(" "), t.exclusive_count > 0 ? n("div", {
                    staticClass: "dl-title"
                }, [t._v("完成试玩后解锁 "), n("span", [t._v(t._s(t.exclusive_reward))]), t._v(" 元专属任务")]) : t._e(), t._v(" "), n("div", {
                    staticClass: "page-content task-detail"
                }, [n("scroller", {
                    staticStyle: {
                        width: "257px"
                    },
                    style: {
                        paddingTop: (t.explore_reward > 0 || t.exclusive_count > 0 ? 136 : 100) + "px"
                    }
                }, [t.app_keyword ? n("div", {
                    staticClass: "step step-1"
                }, [n("div", {
                    staticClass: "semibold"
                }, [t._v("① 前往 App Store 搜索："), t.app_keyword.length <= 6 ? n("span", {
                    staticClass: "light",
                    domProps: {
                        textContent: t._s(t.app_keyword)
                    }
                }) : t._e()]), t._v(" "), n("div", [t.app_keyword.length > 6 ? n("span", {
                    staticClass: "light",
                    domProps: {
                        textContent: t._s(t.app_keyword)
                    }
                }) : t._e()]), t._v(" "), n("div", [t._v("约排第 "), n("span", {
                    staticClass: "light light-rank",
                    domProps: {
                        textContent: t._s(t.app_rank)
                    }
                }), t._v(" 位，找到该图标应用下载安装")]), t._v(" "), t.isPad ? n("div", [t._v("iPad设备请选择 仅限iPhone")]) : t._e(), t._v(" "), n("div", {
                    staticClass: "app-wrapper"
                }, [n("div", {
                    staticClass: "img-box"
                }, [n("img", {
                    attrs: {
                        src: t.app_icon,
                        alt: ""
                    }
                })]), t._v(" "), n("span", {
                    staticClass: "app-name"
                }, [t._v(t._s(t.app_name.substring(0, 1)) + "***")]), t._v(" "), n("div", {
                    staticClass: "step-button can-click",
                    on: {
                        click: function (e) {
                            t.goAppstore()
                        }
                    }
                }, [n("span", [t._v("前往下载")])])])]) : t._e(), t._v(" "), t.app_keyword ? t._e() : n("div", {
                    staticClass: "step step-1"
                }, [n("div", {
                    staticClass: "semibold"
                }, [t._v("① 前往 App Store 下载应用："), n("span", {
                    staticClass: "light"
                }, [t._v(t._s(t.app_name))])]), t._v(" "), n("div", {
                    staticClass: "app-wrapper"
                }, [n("div", {
                    staticClass: "img-box"
                }, [n("img", {
                    attrs: {
                        src: t.app_icon,
                        alt: ""
                    }
                })]), t._v(" "), n("span", {
                    staticClass: "app-name"
                }, [t._v(t._s(t.app_name.substring(0, 1)) + "***")]), t._v(" "), n("div", {
                    staticClass: "step-button can-click",
                    on: {
                        click: function (e) {
                            t.goAppstore()
                        }
                    }
                }, [n("span", [t._v("前往下载")])])])]), t._v(" "), n("div"), t._v(" "), n("div", {
                    staticClass: "step step-2"
                }, [n("div", {
                    staticClass: "semibold"
                }, [t._v("② 点击"), n("span", {
                    staticClass: "light"
                }, [t._v("“开始试玩”")]), n("span", {
                    domProps: {
                        textContent: t._s(t.tips)
                    }
                })]), t._v(" "), n("div", [t._v("打开应用时请 “允许”使用数据")]), t._v(" "), n("div", {
                    staticClass: "step-button disabled",
                    class: {
                        "can-click": 1 !== t.steps[0]
                    },
                    on: {
                        click: function (e) {
                            t.openApp()
                        }
                    }
                }, [n("span", [t._v("开始试玩")])])]), t._v(" "), n("div", {
                    staticClass: "step step-3"
                }, [n("div", {
                    staticClass: "semibold"
                }, [t._v("③ 试玩结束回本页"), n("span", {
                    staticClass: "light"
                }, [t._v("领奖")])]), t._v(" "), n("div", {
                    staticClass: "step-button disabled",
                    class: {
                        reward: 0 !== t.steps[2]
                    },
                    on: {
                        click: function (e) {
                            t.checkTaskStatus()
                        }
                    }
                }, [n("span", [t._v("领取奖励")])])]), t._v(" "), n("div", {
                    staticClass: "consult"
                }, [n("div", {
                    on: {
                        click: function (e) {
                            t.talkToCustomerService()
                        }
                    }
                }, [n("img", {
                    attrs: {
                        src: "//assets.qkcdn.com/images/16c187409a4c2e71b7a57d5d918b0650.png",
                        alt: ""
                    }
                }), t._v(" "), n("span", [t._v("在线咨询")])])]), t._v(" "), n("div", {
                    staticStyle: {
                        height: "200px",
                        background: "#F5F5F5"
                    }
                })]), t._v(" "), n("transition", {
                    attrs: {
                        name: "fade-coupon"
                    }
                }, [t.show_coupon ? n("div", {
                    staticClass: "coupon-use-remind"
                }, [n("div", {
                    staticClass: "num-and-reward"
                }, [t._v("您有双倍券"), n("span", {
                    staticClass: "light",
                    domProps: {
                        textContent: t._s(t.coupon_num)
                    }
                }), t._v("张，使用后奖励增加"), n("span", {
                    staticClass: "light",
                    domProps: {
                        textContent: t._s(t.couponNum)
                    }
                }), t._v("元")]), t._v(" "), n("div", {
                    staticClass: "coupon-use-button",
                    on: {
                        click: t.useCoupon
                    }
                }, [n("span", [t._v("使用")])])]) : t._e()])], 1), t._v(" "), n("StartTaskPopup", {
                    ref: "startRemind",
                    attrs: {
                        href: t.href
                    }
                }), t._v(" "), n("AppstorePopup", {
                    ref: "appstore"
                })], 1)
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return t.start ? n("LevelIcon", {
                    staticClass: "belin",
                    class: {
                        transition: t.start
                    },
                    attrs: {
                        level: t.trial_card.level,
                        halo: !0
                    }
                }) : t._e()
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("CustomPopup", {
                    ref: "giveUp",
                    attrs: {
                        column: !0
                    }
                }, [n("div", {
                    staticClass: "giveup-popup"
                }, [n("div", {
                    staticClass: "task-title"
                }, [t._v("请选择要放弃的任务")]), t._v(" "), n("div", {
                    staticClass: "task-content"
                }, [n("ul", t._l(t.receiveTasks, function (e, s) {
                    return n("li", {
                        key: s,
                        staticClass: "clearfix"
                    }, [n("div", {
                        staticClass: "task-pic"
                    }, [n("img", {
                        attrs: {
                            src: e.icon,
                            alt: ""
                        }
                    })]), t._v(" "), n("div", {
                        staticClass: "task-card"
                    }, [n("span", [t._v(t._s(e.title))]), t._v(" "), n("em", [t._v("剩" + t._s(e.surplus_day) + "天")])]), t._v(" "), n("div", {
                        staticClass: "giveup-btn",
                        on: {
                            click: function (n) {
                                t.giveup(e.explore_task_id)
                            }
                        }
                    }, [t._v("放弃")])])
                }))])])])
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "upgrade-container"
                }, [n("div", {
                    staticClass: "back-home",
                    on: {
                        click: function (e) {
                            t.goBack()
                        }
                    }
                }, [n("img", {
                    attrs: {
                        src: "//assets.qkcdn.com/images/de66ff43dfb0662706e409930fe7db38.png",
                        alt: ""
                    }
                }), n("span", [t._v("返回")])]), t._v(" "), t._m(0), t._v(" "), t._m(1), t._v(" "), t._m(2)])
            }, staticRenderFns: [
                function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "upgrade-pic"
                    }, [n("img", {
                        attrs: {
                            src: "//assets.qkcdn.com/images/ed1f9d6a01e356605aa856d20dc47a09.png",
                            alt: ""
                        }
                    })])
                },
                function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("section", [n("h4", [t._v("钱咖5.0 重磅升级")]), t._v(" "), n("div", {
                        staticClass: "upgrade-list"
                    }, [n("ul", [n("li", [t._v("1、钱咖可直接在任务助手中试玩啦！")]), t._v(" "), n("li", [t._v("2、全新等级系统, 赚的越多等级越高, 每日领钱越多;")]), t._v(" "), n("li", [t._v("3、全新探索任务, 更多金币玩法等你来发现。")])])])])
                },
                function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("footer", [n("div", {
                        staticClass: "tail"
                    }, [t._v("已对部分新用户开放，老用户将于近期统一升级")])])
                }
            ]
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    directives: [{
                        name: "nav",
                        rawName: "v-nav",
                        value: {
                            hideNavbar: !0
                        },
                        expression: "{hideNavbar: true}"
                    }],
                    staticClass: "page page-zstask-list"
                }, [n("AnimateHeader", {
                    attrs: {
                        "bg-color": "#FFDD55",
                        "menu-bg-color": "#FFD155",
                        color: "#3A3A3A",
                        title: "专属任务",
                        "on-back-button-click": t.back,
                        expanded: !1
                    }
                }), t._v(" "), n("div", {
                    staticClass: "page-content zstask-list"
                }, t._l(t.tasks, function (e, s) {
                    return n("ActionList", {
                        key: s,
                        attrs: {
                            title: e.date
                        }
                    }, t._l(e.zs_tasks, function (s) {
                        return n("Action", {
                            key: s.task_id,
                            nativeOn: {
                                click: function (n) {
                                    t.start(s, e)
                                }
                            }
                        }, [n("div", {
                            staticClass: "icon",
                            class: {
                                "icon-border": 2 === s.status
                            },
                            slot: "icon"
                        }, [n("img", {
                            attrs: {
                                src: s.icon
                            }
                        })]), t._v(" "), n("span", {
                            domProps: {
                                textContent: t._s(s.app_name)
                            },
                            slot: "app-name"
                        }), t._v(" "), n("span", {
                            staticClass: "count-down-box",
                            slot: "desc"
                        }, [2 === s.status ? n("span", {
                            staticClass: "ongoing"
                        }, [t._v("进行中…")]) : t._e(), t._v(" "), 0 === s.status ? n("span", {
                            domProps: {
                                textContent: t._s(s.desc)
                            }
                        }) : t._e()]), t._v(" "), n("div", {
                            staticClass: "reward-content",
                            class: {
                                disabled: 0 === e.is_enabled
                            },
                            slot: "reward-wrap"
                        }, [n("span", {
                            staticClass: "plus"
                        }, [t._v("+")]), t._v(" "), n("span", {
                            staticClass: "reward",
                            domProps: {
                                textContent: t._s(parseFloat(s.money).toFixed(1))
                            }
                        }), t._v(" "), n("span", {
                            staticClass: "yuan"
                        }, [t._v("元")])])])
                    }))
                }))], 1)
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "page has-navbar"
                }, [n("div", {
                    staticClass: "page-content"
                }, [n("div", {
                    staticClass: "item item-borderless instruction"
                }, [t._v("\n      由于iOS9以上系统限制，安装“任务助手”后，首次打开会提示“未受信任的企业级开发者”。为正常使用，请按如下流程操作(设置-通用-描述文件与设备管理-信任)，即可解决哦！\n    ")]), t._v(" "), t._m(0), t._v(" "), t._m(1), t._v(" "), t._m(2), t._v(" "), t._m(3), t._v(" "), n("div", {
                    staticClass: "button button-trust",
                    on: {
                        click: function (e) {
                            t.trust()
                        }
                    }
                }, [t._v("去信任")]), t._v(" "), n("div", {
                    staticStyle: {
                        height: "50px"
                    }
                })])])
            }, staticRenderFns: [
                function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "item item-borderless step"
                    }, [n("p", [t._v("1.在[设置]－[通用]－[描述文件与设备管理]"), n("br"), t._v("找到相对应的证书")]), t._v(" "), n("div", {
                        staticClass: "img img-1"
                    })])
                },
                function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "item item-borderless step"
                    }, [n("p", [t._v("2.点击信任")]), t._v(" "), n("div", {
                        staticClass: "img img-2"
                    })])
                },
                function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "item item-borderless step"
                    }, [n("p", [t._v("3.回到桌面打开助手")]), t._v(" "), n("div", {
                        staticClass: "img img-3"
                    })])
                },
                function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "item item-borderless step"
                    }, [n("p", [t._v("4.打开后请务必允许使用数据")]), t._v(" "), n("div", {
                        staticClass: "img img-4"
                    })])
                }
            ]
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    directives: [{
                        name: "nav",
                        rawName: "v-nav",
                        value: {
                            hideNavbar: !0
                        },
                        expression: "{hideNavbar: true}"
                    }],
                    staticClass: "page page-task-detail"
                }, [n("AnimateHeader", {
                    attrs: {
                        "bg-color": "#FFDD55",
                        "menu-bg-color": "#FFD155",
                        color: "#3A3A3A",
                        "on-back-button-click": t.back,
                        expanded: !0,
                        animate: !1,
                        "show-back-button": !1,
                        "show-menu-button": !0,
                        "on-menu-button-click": t.back
                    }
                }, [n("div", {
                    slot: "content"
                }, [n("TaskDetailTitle", [n("div", {
                    staticClass: "reward"
                }, [n("span", [t._v("任务奖励 + ")]), t._v(" "), n("span", {
                    staticClass: "income",
                    staticStyle: {
                        "font-size": "20px"
                    },
                    attrs: {
                        "task-detail-reward": ""
                    }
                }, [t._v(t._s(t.reward[0]) + "~" + t._s(t.reward[1]))]), t._v(" "), n("span", [t._v("金币（随机）")])]), t._v(" "), n("div", {
                    staticClass: "countdown"
                }, [n("span", [t._v("剩余时间 ")]), t.expire_at > 0 ? n("count-down", {
                    attrs: {
                        deadline: t.expire_at,
                        format: "mm:ss"
                    }
                }) : t._e()], 1)])], 1)]), t._v(" "), t.explore_reward > 0 ? n("div", {
                    staticClass: "dl-title"
                }, [t._v("完成试玩后解锁 "), n("span", [t._v(t._s(t.explore_reward))]), t._v(" 金币探索任务")]) : t._e(), t._v(" "), t.exclusive_count > 0 ? n("div", {
                    staticClass: "dl-title"
                }, [t._v("完成试玩后解锁 "), n("span", [t._v(t._s(t.exclusive_reward))]), t._v(" 元专属任务")]) : t._e(), t._v(" "), n("div", {
                    staticClass: "page-content task-detail"
                }, [n("scroller", {
                    staticStyle: {
                        width: "257px"
                    },
                    style: {
                        paddingTop: (t.explore_reward > 0 || t.exclusive_count > 0 ? 136 : 100) + "px"
                    }
                }, [t.app_keyword ? n("div", {
                    staticClass: "step step-1"
                }, [n("div", {
                    staticClass: "semibold"
                }, [t._v("① 前往 App Store 搜索："), t.app_keyword.length <= 6 ? n("span", {
                    staticClass: "light",
                    domProps: {
                        textContent: t._s(t.app_keyword)
                    }
                }) : t._e()]), t._v(" "), n("div", [t.app_keyword.length > 6 ? n("span", {
                    staticClass: "light",
                    domProps: {
                        textContent: t._s(t.app_keyword)
                    }
                }) : t._e()]), t._v(" "), n("div", [t._v("约排第 "), n("span", {
                    staticClass: "light light-rank",
                    domProps: {
                        textContent: t._s(t.app_rank)
                    }
                }), t._v(" 位，找到该图标应用下载安装")]), t._v(" "), t.isPad ? n("div", [t._v("iPad设备请选择 仅限iPhone")]) : t._e(), t._v(" "), n("div", {
                    staticClass: "app-wrapper"
                }, [n("div", {
                    staticClass: "img-box"
                }, [n("img", {
                    attrs: {
                        src: t.app_icon,
                        alt: ""
                    }
                })]), t._v(" "), n("span", {
                    staticClass: "app-name"
                }, [t._v(t._s(t.app_name.substring(0, 1)) + "***")]), t._v(" "), n("div", {
                    staticClass: "step-button can-click",
                    on: {
                        click: function (e) {
                            t.goAppstore()
                        }
                    }
                }, [n("span", [t._v("前往下载")])])])]) : t._e(), t._v(" "), t.app_keyword ? t._e() : n("div", {
                    staticClass: "step step-1"
                }, [n("div", {
                    staticClass: "semibold"
                }, [t._v("① 前往 App Store 下载应用："), n("span", {
                    staticClass: "light"
                }, [t._v(t._s(t.app_name))])]), t._v(" "), n("div", {
                    staticClass: "app-wrapper"
                }, [n("div", {
                    staticClass: "img-box"
                }, [n("img", {
                    attrs: {
                        src: t.app_icon,
                        alt: ""
                    }
                })]), t._v(" "), n("span", {
                    staticClass: "app-name"
                }, [t._v(t._s(t.app_name.substring(0, 1)) + "***")]), t._v(" "), n("div", {
                    staticClass: "step-button can-click",
                    on: {
                        click: function (e) {
                            t.goAppstore()
                        }
                    }
                }, [n("span", [t._v("前往下载")])])])]), t._v(" "), n("div"), t._v(" "), n("div", {
                    staticClass: "step step-2"
                }, [n("div", {
                    staticClass: "semibold"
                }, [t._v("② 点击"), n("span", {
                    staticClass: "light"
                }, [t._v("“开始试玩”")]), n("span", {
                    domProps: {
                        textContent: t._s(t.tips)
                    }
                })]), t._v(" "), n("div", [t._v("打开应用时请 “允许”使用数据")]), t._v(" "), n("div", {
                    staticClass: "step-button disabled",
                    class: {
                        "can-click": 1 !== t.steps[0]
                    },
                    on: {
                        click: function (e) {
                            t.openApp()
                        }
                    }
                }, [n("span", [t._v("开始试玩")])])]), t._v(" "), n("div", {
                    staticClass: "step step-3"
                }, [n("div", {
                    staticClass: "semibold"
                }, [t._v("③ 试玩结束回本页"), n("span", {
                    staticClass: "light"
                }, [t._v("领奖")])]), t._v(" "), n("div", {
                    staticClass: "step-button disabled",
                    class: {
                        reward: 0 !== t.steps[2]
                    },
                    on: {
                        click: function (e) {
                            t.checkTaskStatus()
                        }
                    }
                }, [n("span", [t._v("领取奖励")])])]), t._v(" "), n("div", {
                    staticClass: "consult"
                }, [n("div", {
                    on: {
                        click: function (e) {
                            t.talkToCustomerService()
                        }
                    }
                }, [n("img", {
                    attrs: {
                        src: "//assets.qkcdn.com/images/16c187409a4c2e71b7a57d5d918b0650.png",
                        alt: ""
                    }
                }), t._v(" "), n("span", [t._v("在线咨询")])])]), t._v(" "), n("div", {
                    staticStyle: {
                        height: "200px",
                        background: "#F5F5F5"
                    }
                })]), t._v(" "), n("transition", {
                    attrs: {
                        name: "fade-coupon"
                    }
                }, [t.show_coupon ? n("div", {
                    staticClass: "coupon-use-remind"
                }, [n("div", {
                    staticClass: "num-and-reward"
                }, [t._v("您有双倍券"), n("span", {
                    staticClass: "light",
                    domProps: {
                        textContent: t._s(t.coupon_num)
                    }
                }), t._v("张，使用后奖励增加"), n("span", {
                    staticClass: "light",
                    domProps: {
                        textContent: t._s(t.couponNum)
                    }
                }), t._v("元")]), t._v(" "), n("div", {
                    staticClass: "coupon-use-button",
                    on: {
                        click: t.useCoupon
                    }
                }, [n("span", [t._v("使用")])])]) : t._e()])], 1), t._v(" "), n("StartTaskPopup", {
                    ref: "startRemind",
                    attrs: {
                        href: t.href
                    }
                }), t._v(" "), n("AppstorePopup", {
                    ref: "appstore"
                }), t._v(" "), n("BonusFinish")], 1)
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("CustomPopup", {
                    ref: "f",
                    attrs: {
                        column: !0
                    }
                }, [n("div", {
                    staticClass: "group-referral"
                }, [n("div", {
                    staticClass: "icon"
                }, [n("img", {
                    attrs: {
                        src: "//assets.qkcdn.com/images/132f20f38a21f1810f954478eedacea7.png",
                        alt: ""
                    }
                })]), t._v(" "), n("div", {
                    staticClass: "title"
                }, [t._v("开团" + t._s(t.clock_countdown_day) + "天倒计时")]), t._v(" "), n("div", {
                    staticClass: "desc-content"
                }, [n("div", [t._v("第一期组团打卡活动即将完美收官")]), t._v(" "), n("div", [t._v("金币解锁开团将于11月23日晚12时截止")]), t._v(" "), n("div", [t._v("已经加入团队的用户可在23日之后继续邀请好友或者打卡,不受影响")])]), t._v(" "), n("div", {
                    staticClass: "footer"
                }, [t._v("钱咖运营团队")])])])
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", [t.showGameBanner || t.game_cards.length > 0 ? n("ActionList", {
                    attrs: {
                        title: "游戏特权"
                    }
                }, [t._l(t.game_banner, function (e, s) {
                    return t.showGameBanner ? n("Banner", {
                        key: s,
                        nativeOn: {
                            click: function (n) {
                                t.getGame(e.game_url)
                            }
                        }
                    }, [n("img", {
                        attrs: {
                            src: e.banner_url,
                            alt: ""
                        },
                        slot: "banner"
                    })]) : t._e()
                }), t._v(" "), t._l(t.game_cards, function (e, s) {
                    return n("Action", {
                        key: s,
                        nativeOn: {
                            click: function (n) {
                                t.getGame(e.game_url)
                            }
                        }
                    }, [n("div", {
                        staticClass: "icon",
                        slot: "icon"
                    }, [n("img", {
                        attrs: {
                            src: e.icon
                        }
                    })]), t._v(" "), n("span", {
                        domProps: {
                            textContent: t._s(e.title)
                        },
                        slot: "app-name"
                    }), t._v(" "), t._l(e.tags, function (e, s) {
                        return n("span", {
                            key: s,
                            staticClass: "tag-box",
                            slot: "desc"
                        }, ["string" == typeof e ? n("span", {
                            staticClass: "tag",
                            domProps: {
                                textContent: t._s(e)
                            }
                        }) : t._e(), t._v(" "), "object" == typeof e && e.text ? n("span", {
                            staticClass: "tag",
                            class: {
                                assertive: "assertive" == e.theme
                            },
                            domProps: {
                                textContent: t._s(" ‧ " + e.text)
                            }
                        }) : t._e()])
                    }), t._v(" "), n("div", {
                        staticClass: "reward-content",
                        slot: "reward-wrap"
                    }, [n("span", {
                        staticClass: "plus"
                    }, [t._v("+")]), t._v(" "), n("span", {
                        staticClass: "reward",
                        domProps: {
                            textContent: t._s(parseFloat(e.reward).toFixed(1))
                        }
                    }), t._v(" "), n("span", {
                        staticClass: "yuan"
                    }, [t._v("元")])])], 2)
                })], 2) : t._e()], 1)
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "page",
                    on: {
                        click: function (e) {
                            t.record()
                        }
                    }
                }, [n("AnimateHeader", {
                    attrs: {
                        "bg-color": "#f5f5f5",
                        "menu-bg-color": "#f0f0f0",
                        color: "#3A3A3A",
                        title: "个人中心",
                        "on-back-button-click": t.back,
                        expanded: !1,
                        animate: !1
                    }
                }), t._v(" "), n("div", {
                    staticClass: "page-content user-info"
                }, [n("div", {
                    staticClass: "user-account"
                }, [n("div", {
                    staticClass: "my-account"
                }, [t._v("我的资产")]), t._v(" "), n("div", {
                    staticClass: "avatar",
                    on: {
                        click: function (e) {
                            t.$router.forward("/user/profile")
                        }
                    }
                }, [n("img", {
                    attrs: {
                        src: t.user_info.avatar_url,
                        alt: ""
                    }
                })]), t._v(" "), n("div", {
                    staticClass: "income"
                }, [n("span", [t._v(t._s(t.user_info.my_total_income))]), n("img", {
                    attrs: {
                        src: "//qianka.b0.upaiyun.com/images/a91173004e3f0282514595e85b66bb04.png",
                        alt: ""
                    }
                })]), t._v(" "), n("div", {
                    staticClass: "widthdraw-progress",
                    on: {
                        click: function (e) {
                            t.$router.forward("/withdraw/process/kabi")
                        }
                    }
                }, [n("span", [t._v("有 ")]), n("span", {
                    class: {
                        assertive: t.user_info.withdraw_count > 0
                    }
                }, [t._v(t._s(t.user_info.withdraw_count))]), n("span", [t._v(" 笔提现")]), n("img", {
                    attrs: {
                        src: "//qianka.b0.upaiyun.com/images/f314ecace76ee8968a807ebe5abc2b6e.png",
                        alt: ""
                    }
                })]), t._v(" "), n("div", {
                    staticClass: "division"
                })]), t._v(" "), n("div", {
                    staticClass: "withdraw"
                }, [n("div", {
                    staticClass: "withdraw-item"
                }, [n("div", {
                    staticClass: "withdraw-button button-assertive",
                    on: {
                        click: function (e) {
                            t.withdraw()
                        }
                    }
                }, [t._v("立即提现")])])]), t._v(" "), n("div", {
                    staticClass: "account-related"
                }, [n("div", {
                    staticClass: "related"
                }, [t._v("账户相关")]), t._v(" "), n("div", {
                    staticClass: "action-type"
                }, [n("div", {
                    staticClass: "action-button text-center",
                    on: {
                        click: function (e) {
                            t.$router.forward("/user/accountDetail")
                        }
                    }
                }, [n("img", {
                    attrs: {
                        src: "//qianka.b0.upaiyun.com/images/953d0a3a163c5a49296e773a27ef4db3.png",
                        alt: ""
                    }
                }), t._v(" "), n("div", [t._v("收入明细")])]), t._v(" "), n("div", {
                    staticClass: "action-button text-center",
                    on: {
                        click: function (e) {
                            t.$router.forward("/user/profile")
                        }
                    }
                }, [n("img", {
                    attrs: {
                        src: "//qianka.b0.upaiyun.com/images/1a455c8e5c7f6938902d2a46ff0b50c8.png",
                        alt: ""
                    }
                }), t._v(" "), n("div", [t._v("账户设置")])]), t._v(" "), n("div", {
                    staticClass: "action-button text-center",
                    on: {
                        click: function (e) {
                            t.$router.forward("/help")
                        }
                    }
                }, [n("img", {
                    attrs: {
                        src: "//qianka.b0.upaiyun.com/images/d75552af1f193e0c5bf4d5215e8861c3.png",
                        alt: ""
                    }
                }), t._v(" "), n("div", [t._v("帮助中心")])]), t._v(" "), t.user_info.open_msg ? n("div", {
                    staticClass: "action-button text-center message",
                    on: {
                        click: function (e) {
                            t.$router.forward("/message")
                        }
                    }
                }, [t.user_info.msg_num > 0 ? n("span", {
                    staticClass: "msg-spot",
                    class: {
                        "letter-spac": t.letterSpacing,
                        "circle-border": t.circleBorder
                    }
                }, [t._v(t._s(t._f("limitLen")(t.user_info.msg_num)))]) : t._e(), t._v(" "), n("img", {
                    attrs: {
                        src: "//assets.qkcdn.com/images/30cf3bc009d17b34d98328e03fff5a90.png",
                        alt: ""
                    }
                }), t._v(" "), n("div", [t._v("消息中心")])]) : t._e(), t._v(" "), t.user_info.open_msg ? t._e() : n("div", {
                    staticClass: "action-button text-center",
                    on: {
                        click: function (e) {
                            t.$router.forward("/about")
                        }
                    }
                }, [n("img", {
                    attrs: {
                        src: "//qianka.b0.upaiyun.com/images/70cd54efbca52eb00d8ce0af758bb855.png",
                        alt: ""
                    }
                }), t._v(" "), n("div", [t._v("关于钱咖")])])]), t._v(" "), n("div", {
                    staticClass: "action-type"
                }, [t.user_info.open_msg ? n("div", {
                    staticClass: "action-button text-center",
                    on: {
                        click: function (e) {
                            t.$router.forward("/about")
                        }
                    }
                }, [n("img", {
                    attrs: {
                        src: "//qianka.b0.upaiyun.com/images/70cd54efbca52eb00d8ce0af758bb855.png",
                        alt: ""
                    }
                }), t._v(" "), n("div", [t._v("关于钱咖")])]) : t._e(), t._v(" "), this.user_info.is_inside ? t._e() : n("div", {
                    staticClass: "action-button text-center",
                    on: {
                        click: function (e) {
                            t.$router.forward("/entrance")
                        }
                    }
                }, [n("img", {
                    attrs: {
                        src: "//assets.qkcdn.com/images/b199218cadc5a35fe9b0649897cc2b83.png",
                        alt: ""
                    }
                }), t._v(" "), n("div", [t._v("钱咖入口")])]), t._v(" "), n("div", {
                    staticClass: "action-button text-center",
                    on: {
                        click: function (e) {
                            t.logout()
                        }
                    }
                }, [n("img", {
                    attrs: {
                        src: "//qianka.b0.upaiyun.com/images/318612375ecfa16000ef6e525fccb69f.png",
                        alt: ""
                    }
                }), t._v(" "), n("div", [t._v("切换帐号")])]), t._v(" "), n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: this.user_info.invitation_info.is_show,
                        expression: "this.user_info.invitation_info.is_show"
                    }],
                    staticClass: "action-button text-center",
                    on: {
                        click: function (e) {
                            t.$router.forward("/user/userInvitation")
                        }
                    }
                }, [n("img", {
                    attrs: {
                        src: "//assets.qkcdn.com/images/5d12f0aa195464272f329c90692c4345.png",
                        alt: ""
                    }
                }), t._v(" "), n("div", [t._v("输入邀请码")])]), t._v(" "), t.showTest() ? n("div", {
                    staticClass: "action-button text-center",
                    on: {
                        click: function (e) {
                            t.$router.forward("/jstest")
                        }
                    }
                }, [n("img", {
                    attrs: {
                        src: "//assets.qkcdn.com/images/5d12f0aa195464272f329c90692c4345.png",
                        alt: ""
                    }
                }), t._v(" "), n("div", [t._v("JsBridge")])]) : t._e()])])])], 1)
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "list-wrap"
                }, t._l(t.list, function (e, s) {
                    return n("div", {
                        key: s,
                        staticClass: "column",
                        style: {
                            background: "url(" + e.bg + ") no-repeat",
                            color: e.color
                        },
                        attrs: {
                            item: e
                        },
                        on: {
                            click: function (n) {
                                t.jumpTo(e)
                            }
                        }
                    }, [n("div", {
                        staticClass: "title"
                    }, [t._v(t._s(e.title))]), t._v(" "), n("div", {
                        staticClass: "sub-title"
                    }, [t._v(t._s(e.subTitle))])])
                }))
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    directives: [{
                        name: "nav",
                        rawName: "v-nav",
                        value: {
                            hideNavbar: !0
                        },
                        expression: "{hideNavbar: true}"
                    }],
                    staticClass: "page page-zstask-list"
                }, [n("AnimateHeader", {
                    attrs: {
                        "bg-color": "#FFDD55",
                        "menu-bg-color": "#FFD155",
                        color: "#3A3A3A",
                        title: "专属任务",
                        "on-back-button-click": t.back,
                        expanded: !1,
                        animate: !1
                    }
                }), t._v(" "), n("div", {
                    staticClass: "page-content zstask-list"
                }, t._l(t.tasks, function (e, s) {
                    return n("ActionList", {
                        key: s,
                        attrs: {
                            title: e.date
                        }
                    }, t._l(e.zs_tasks, function (s) {
                        return n("Action", {
                            key: s.task_id,
                            nativeOn: {
                                click: function (n) {
                                    t.start(s, e)
                                }
                            }
                        }, [n("div", {
                            staticClass: "icon",
                            class: {
                                "icon-border": 2 === s.status
                            },
                            slot: "icon"
                        }, [n("img", {
                            attrs: {
                                src: s.icon
                            }
                        })]), t._v(" "), n("span", {
                            domProps: {
                                textContent: t._s(s.app_name)
                            },
                            slot: "app-name"
                        }), t._v(" "), n("span", {
                            staticClass: "count-down-box",
                            slot: "desc"
                        }, [2 === s.status ? n("span", {
                            staticClass: "ongoing"
                        }, [t._v("进行中…")]) : t._e(), t._v(" "), 0 === s.status ? n("span", {
                            domProps: {
                                textContent: t._s(s.desc)
                            }
                        }) : t._e()]), t._v(" "), n("div", {
                            staticClass: "reward-content",
                            class: {
                                disabled: 0 === e.is_enabled
                            },
                            slot: "reward-wrap"
                        }, [n("span", {
                            staticClass: "plus"
                        }, [t._v("+")]), t._v(" "), n("span", {
                            staticClass: "reward",
                            domProps: {
                                textContent: t._s(parseFloat(s.money).toFixed(1))
                            }
                        }), t._v(" "), n("span", {
                            staticClass: "yuan"
                        }, [t._v("元")])])])
                    }))
                }))], 1)
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("svg", {
                    attrs: {
                        width: "18px",
                        height: "16px",
                        viewBox: "0 0 18 16",
                        version: "1.1",
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink"
                    }
                }, [n("g", {
                    attrs: {
                        stroke: "none",
                        "stroke-width": "1",
                        fill: "none",
                        "fill-rule": "evenodd",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                    }
                }, [n("g", {
                    attrs: {
                        transform: "translate(-336.000000, -106.000000)",
                        stroke: t.color,
                        fill: t.color
                    }
                }, [n("g", {
                    attrs: {
                        transform: "translate(0.000000, 64.000000)"
                    }
                }, [n("g", {
                    attrs: {
                        transform: "translate(336.000000, 41.000000)"
                    }
                }, [n("g", {
                    attrs: {
                        transform: "translate(1.000000, 1.000000)"
                    }
                }, [n("path", {
                    attrs: {
                        d: "M9.5,7.5 L7.5,9.5 L1,16 L0,15 L7,8 L0,1 L1,0 L8,7 L15,0 L16,1 L9.5,7.5 Z M9.5,10.5 L10.5,9.5 L16,15 L15,16 L9.5,10.5 Z"
                    }
                })])])])])])])
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("CustomPopup", {
                    ref: "p"
                }, [n("div", {
                    staticClass: "popup-body popup-noHelpTask"
                }, [n("div", {
                    staticClass: "text"
                }, [t._v("您未满足该广告主要求"), n("br"), t._v("无法领取本任务")]), t._v(" "), n("div", {
                    staticClass: "icon-noHelpTask"
                }, [n("img", {
                    attrs: {
                        src: "//assets.qkcdn.com/images/87cf48362c4525d9403ecb472030192c.png"
                    }
                })]), t._v(" "), n("div", {
                    staticClass: "tips"
                }, [t._v("送您一张双倍券"), n("br"), t._v("完成试玩任务可拿双倍奖励")]), t._v(" "), n("div", {
                    staticClass: "double-button",
                    on: {
                        click: function (e) {
                            t.start()
                        }
                    }
                }, [t._v("领取")])])])
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return t.showActionList ? n("ActionList", {
                    attrs: {
                        title: t.title
                    }
                }, [t.is_reservation ? n("div", {
                    staticClass: "appoint-remind"
                }, [n("span", [t._v("使用 "), n("b", [t._v("500")]), t._v(" 金币预约，可免抢任务！")]), t._v(" "), n("span", {
                    staticClass: "btn-appoint-rules",
                    on: {
                        click: function (e) {
                            t.forwardTo("/appoint/rule")
                        }
                    }
                }, [t._v("规则详情")])]) : t._e(), t._v(" "), t._l(t.coming, function (e, s) {
                    return n("Action", {
                        key: s,
                        nativeOn: {
                            click: function (n) {
                                t.onComingTaskClick(e)
                            }
                        }
                    }, [n("div", {
                        staticClass: "icon",
                        class: {
                            "border-blue": "easy" === t.taskType,
                            "border-green": "easy" !== t.taskType
                        },
                        slot: "icon"
                    }, [n("div", {
                        staticClass: "icon-no-img",
                        class: {
                            easy: "easy" === t.taskType
                        }
                    }, [n("div", {
                        domProps: {
                            textContent: t._s(e.start_date)
                        }
                    })])]), t._v(" "), n("span", {
                        domProps: {
                            textContent: t._s(e.title)
                        },
                        slot: "app-name"
                    }), t._v(" "), n("Tags", {
                        attrs: {
                            tags: e.tags
                        },
                        slot: "desc"
                    }), t._v(" "), n("div", {
                        staticClass: "reward-content",
                        slot: "reward-wrap"
                    }, [n("span", {
                        staticClass: "plus"
                    }, [t._v("+")]), t._v(" "), n("span", {
                        staticClass: "reward",
                        domProps: {
                            textContent: t._s(parseFloat(e.reward).toFixed(1))
                        }
                    }), t._v(" "), n("span", {
                        staticClass: "yuan"
                    }, [t._v("元")])])], 1)
                }), t._v(" "), "standard" !== t.taskType || t.has_tasks_coming ? t._e() : n("Action", [n("div", {
                    staticClass: "icon",
                    slot: "icon"
                }, [n("img", {
                    attrs: {
                        src: "//qianka.b0.upaiyun.com/images/809c958dfd2f7f6f78da97f40322423a.png"
                    }
                })]), t._v(" "), n("span", {
                    slot: "app-name"
                }, [t._v("暂无任务预告")]), t._v(" "), n("span", {
                    slot: "desc"
                }, [t._v("过会儿再来看看吧")])])], 2) : t._e()
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    directives: [{
                        name: "nav",
                        rawName: "v-nav",
                        value: {
                            hideNavbar: !0
                        },
                        expression: "{hideNavbar: true}"
                    }],
                    staticClass: "page page-task-list"
                }, [n("TaskListHeader", {
                    attrs: {
                        "bg-color": "#FFDD55",
                        "menu-bg-color": "#FFD155",
                        color: "#3A3A3A",
                        title: "试玩赚钱",
                        "sub-title": "① 下载应用 &nbsp;② 打开试玩 &nbsp;③ 领取现金",
                        "on-back-button-click": t.back,
                        expanded: !0,
                        animate: !0,
                        "get-scroll-top": t.getScrollTop,
                        "has-sub-header": t.showAssistantBanner,
                        "has-sub-tip": t.showTip && !t.showAssistantBanner
                    }
                }, [t.showAssistantBanner ? n("AssistantBanner", {
                    slot: "subheader"
                }) : t._e(), t._v(" "), t.showTip && !t.showAssistantBanner ? n("div", {
                    staticClass: "dl-title",
                    slot: "subtip"
                }, [t._v("任务不定时新增，每天17:00任务最多哟!"), n("img", {
                    attrs: {
                        src: "//assets.qkcdn.com/images/1b4aaed159e50eb4df6c1d3d5d7e7c63.png"
                    },
                    on: {
                        click: function (e) {
                            t.closeTip()
                        }
                    }
                })]) : t._e()], 1), t._v(" "), n("div", {
                    staticClass: "page-content task-list",
                    class: {
                        "has-subheader": t.showAssistantBanner
                    }
                }, [n("scroller", {
                    ref: "scroller",
                    style: {
                        paddingTop: (t.showAssistantBanner ? 160 : 100) + "px"
                    }
                }, [t.showTip && !t.showAssistantBanner ? n("div", {
                    staticStyle: {
                        height: "36px"
                    }
                }) : t._e(), t._v(" "), n("BlockTasksOngoing"), t._v(" "), n("IndividualTask"), t._v(" "), n("BlockTasks"), t._v(" "), n("BlockRecommends"), t._v(" "), t.showAssistantBanner ? n("div", {
                    staticClass: "task-tips"
                }, [t._v("\n        开启助手显示全部任务\n      ")]) : t._e(), t._v(" "), n("BlockGame"), t._v(" "), n("div", {
                    staticClass: "anchor"
                }), t._v(" "), n("BlockComing", {
                    attrs: {
                        "task-type": "standard",
                        "show-appoint-popup": t.showAppointPopup
                    }
                }), t._v(" "), t.showAssistantBanner && 8 == t.tasks_coming.length ? n("div", {
                    staticClass: "task-tips"
                }, [t._v("\n        开启助手显示全部任务\n      ")]) : t._e(), t._v(" "), n("JailBroken"), t._v(" "), n("div", {
                    style: {
                        height: (t.showAssistantBanner ? 160 : 100) + "px"
                    }
                }), t._v(" "), n("div", {
                    staticStyle: {
                        height: "20px"
                    }
                })], 1)], 1), t._v(" "), n("InstallCertification", {
                    attrs: {
                        "is-lite": !0
                    }
                }), t._v(" "), n("BonusPopup"), t._v(" "), n("OpenLiteKeyPopup"), t._v(" "), n("HumanCheckPopup"), t._v(" "), n("AppointImmediately", {
                    ref: "appointPopup"
                })], 1)
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", [t.show_push || t.ongoing.length > 0 ? n("ActionList", [t.show_push ? n("Action", {
                    nativeOn: {
                        click: function (e) {
                            t.showPushPopup(e)
                        }
                    }
                }, [n("div", {
                    staticClass: "icon",
                    slot: "icon"
                }, [n("img", {
                    attrs: {
                        src: "//assets.qkcdn.com/images/8c5ea6b548b734c637d31fee3eb23673.png"
                    }
                })]), t._v(" "), n("span", {
                    slot: "desc"
                }, [n("span", {
                    staticClass: "push-tips"
                }, [t._v("提高抢任务成功率")])]), t._v(" "), n("div", {
                    staticClass: "reward-content",
                    slot: "reward-wrap"
                }, [n("span", {
                    staticClass: "plus"
                }, [t._v("+")]), t._v(" "), n("span", {
                    staticClass: "reward"
                }, [t._v("40")]), t._v(" "), n("span", {
                    staticClass: "yuan"
                }, [t._v("%")])])]) : t._e(), t._v(" "), t._l(t.ongoing, function (e) {
                    return t.ongoing.length > 0 ? n("Action", {
                        key: e.task_id,
                        nativeOn: {
                            click: function (n) {
                                t.start(e)
                            }
                        }
                    }, [n("div", {
                        staticClass: "icon",
                        class: {
                            "icon-border": 2 === e.status
                        },
                        slot: "icon"
                    }, [n("img", {
                        attrs: {
                            src: e.icon
                        }
                    })]), t._v(" "), n("span", {
                        domProps: {
                            textContent: t._s(e.title)
                        },
                        slot: "app-name"
                    }), t._v(" "), n("span", {
                        staticClass: "count-down-box",
                        slot: "desc"
                    }, [n("span", {
                        staticClass: "ongoing"
                    }, [t._v("进行中...")])]), t._v(" "), n("div", {
                        staticClass: "reward-content",
                        slot: "reward-wrap"
                    }, [n("span", {
                        staticClass: "plus"
                    }, [t._v("+")]), t._v(" "), n("span", {
                        staticClass: "reward",
                        domProps: {
                            textContent: t._s(parseFloat(e.reward).toFixed(1))
                        }
                    }), t._v(" "), n("span", {
                        staticClass: "yuan"
                    }, [t._v("元")])])]) : t._e()
                })], 2) : t._e()], 1)
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("CustomPopup", {
                    ref: "p",
                    attrs: {
                        column: !0,
                        "hide-cb": t.backWithFinsh
                    }
                }, [n("div", {
                    staticClass: "popup-body popup-bonus"
                }, [n("div", {
                    staticClass: "title"
                }, [n("img", {
                    attrs: {
                        src: "//assets.qkcdn.com/images/acbdd7e8aa35452d2b3ccc262d4b5584.png",
                        alt: ""
                    }
                })]), t._v(" "), n("div", {
                    staticClass: "sub-title"
                }, [t._v("彩蛋任务「" + t._s(t.app_name) + "」")]), t._v(" "), n("div", {
                    staticClass: "card-content"
                }, t._l(t.cards, function (e, s) {
                    return n("div", {
                        staticClass: "card-item",
                        class: {
                            priority: e.rotate
                        },
                        on: {
                            click: function (e) {
                                t.reverse(s)
                            }
                        }
                    }, [n("div", {
                        staticClass: "positive",
                        class: t.setClass(s, 2)
                    }), t._v(" "), n("div", {
                        staticClass: "negative",
                        class: t.setClass(s, 1)
                    }, [n("div", {
                        staticClass: "icon",
                        class: {
                            "fade-in": e.rotate
                        }
                    }, [n("img", {
                        attrs: {
                            src: "//assets.qkcdn.com/images/74fac8280bb61f699ec7e9fca69f48e6.png",
                            alt: ""
                        }
                    })]), t._v(" "), n("div", {
                        staticClass: "sub-title",
                        class: {
                            "fade-in": e.rotate
                        }
                    }, [t._v("恭喜获得金币")]), t._v(" "), n("div", {
                        staticClass: "reward",
                        class: {
                            "fade-in": e.rotate
                        }
                    }, [t._v(t._s(t.reward))]), t._v(" "), n("div", {
                        staticClass: "button-coral",
                        class: {
                            "fade-in": e.rotate
                        },
                        on: {
                            click: function (e) {
                                t.back()
                            }
                        }
                    }, [t._v("继续赚钱")])])])
                }))])])
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("CustomPopup", {
                    ref: "p"
                }, [n("div", {
                    staticClass: "popup-body popup-appoint-immediately"
                }, [n("div", {
                    staticClass: "icon-wrapper"
                }, [n("div", {
                    staticClass: "icon"
                }, [n("div", {
                    staticClass: "icon-no-img"
                }, [n("div", {
                    domProps: {
                        textContent: t._s(t.task.start_date)
                    }
                })])])]), t._v(" "), n("div", {
                    staticClass: "question-text"
                }, [t._v("是否花费 "), n("span", [t._v("500金币 ")]), t._v("预约试玩")]), t._v(" "), n("div", {
                    staticClass: "remind"
                }, [n("div", [t._v("• 预约成功后自动为您抢到此任务")]), t._v(" "), n("div", [t._v("• 请在任务开始后 30 分钟内领取")]), t._v(" "), n("div", [t._v("• 预约成功后不可变更")]), t._v(" "), n("div", [t._v("• 请务必在任务开始后，进行下载")]), t._v(" "), n("div", {
                    staticStyle: {
                        "margin-left": "12px"
                    }
                }, [t._v("试玩")])]), t._v(" "), n("div", {
                    staticClass: "button-appoint",
                    on: {
                        click: function (e) {
                            t.appointImmediately()
                        }
                    }
                }, [t._v("\n      立即预约\n    ")]), t._v(" "), n("button", {
                    staticClass: "button button-royal button-small button-clear button-close",
                    on: {
                        click: function (e) {
                            t.hide(-1)
                        }
                    }
                }, [n("i", {
                    staticClass: "ion-ios-close-empty"
                })])])])
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("CustomPopup", {
                    ref: "p"
                }, [n("div", {
                    staticClass: "popup-body popup-assistant-help popup-unopen-assistant-help"
                }, [n("div", {
                    staticClass: "icon-wrapper"
                }, [n("img", {
                    staticClass: "icon",
                    attrs: {
                        src: t.info.app_icon,
                        alt: ""
                    }
                })]), t._v(" "), n("div", {
                    staticClass: "name"
                }, [t._v(t._s(t.info.app_name))]), t._v(" "), n("div", {
                    staticClass: "tag"
                }, [t._v("这是最新任务助手，抢任务更快了哟")]), t._v(" "), n("button", {
                    staticClass: "button button-assertive btn-open",
                    on: {
                        click: function (e) {
                            t.download()
                        }
                    }
                }, [t._v("立即下载")]), t._v(" "), n("div", {
                    staticClass: "tips"
                }, [t._v("\n      我已安装， "), n("span", {
                    staticClass: "assertive",
                    staticStyle: {
                        "text-decoration": "underline"
                    },
                    on: {
                        click: function (e) {
                            t.open()
                        }
                    }
                }, [t._v("直接打开")])]), t._v(" "), t.showHide ? n("button", {
                    staticClass: "button button-royal button-small button-clear button-close",
                    on: {
                        click: function (e) {
                            t.hide(-1)
                        }
                    }
                }, [n("i", {
                    staticClass: "ion-ios-close-empty"
                })]) : t._e()])])
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "human-check-backdrop",
                    on: {
                        click: function (e) {
                            t.cancel()
                        }
                    }
                }, [n("div", {
                    staticClass: "human-check-box",
                    on: {
                        click: function (e) {
                            e.stopPropagation(), t.startTimeout()
                        }
                    }
                }, [n("div", {
                    staticClass: "box",
                    attrs: {
                        id: "sc"
                    }
                }), t._v(" "), n("div", {
                    staticClass: "trouble",
                    on: {
                        click: function (e) {
                            t.trouble()
                        }
                    }
                }, [t._v("无法验证？")])])])
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    directives: [{
                        name: "nav",
                        rawName: "v-nav",
                        value: {
                            hideNavbar: !0
                        },
                        expression: "{hideNavbar: true}"
                    }],
                    staticClass: "page page-task-detail"
                }, [n("AnimateHeader", {
                    attrs: {
                        "bg-color": "#FFDD55",
                        "menu-bg-color": "#FFD155",
                        color: "#3A3A3A",
                        "on-back-button-click": t.back,
                        expanded: !0,
                        animate: !1,
                        "show-back-button": !1,
                        "show-menu-button": !0,
                        "on-menu-button-click": t.back
                    }
                }, [n("div", {
                    slot: "content"
                }, [n("TaskDetailTitle", [n("div", {
                    staticClass: "reward"
                }, [n("span", [t._v("任务奖励 " + t._s(t.exclusive_count ? "=" : "+") + " ")]), t._v(" "), n("span", {
                    staticClass: "income",
                    attrs: {
                        "task-detail-reward": ""
                    },
                    domProps: {
                        textContent: t._s(t.reward)
                    }
                }), t._v(" "), t.exclusive_count ? n("span", [n("span", [t._v("元试玩 + ")]), n("span", {
                    staticClass: "income",
                    domProps: {
                        textContent: t._s(t.exclusive_reward)
                    }
                }), n("span", [t._v(" 元专属")])]) : n("span", [t._v("元")])]), t._v(" "), n("div", {
                    staticClass: "countdown"
                }, [n("span", [t._v("剩余时间 ")]), t.expire_at > 0 ? n("count-down", {
                    attrs: {
                        deadline: t.expire_at,
                        format: "mm:ss"
                    }
                }) : t._e()], 1)])], 1)]), t._v(" "), n("div", {
                    staticClass: "page-content task-detail"
                }, [n("scroller", {
                    staticStyle: {
                        "padding-top": "100px",
                        width: "257px"
                    }
                }, [n("div", {
                    staticClass: "icon-wrapper"
                }, [n("img", {
                    attrs: {
                        src: t.app_icon,
                        alt: ""
                    }
                })]), t._v(" "), t.app_keyword ? n("div", {
                    staticClass: "step step-1"
                }, [n("div", [t._v("一、前往 App Store 搜索："), t.app_keyword.length <= 6 ? n("span", {
                    staticClass: "light",
                    domProps: {
                        textContent: t._s(t.app_keyword)
                    }
                }) : t._e()]), t._v(" "), n("div", [t.app_keyword.length > 6 ? n("span", {
                    staticClass: "light",
                    domProps: {
                        textContent: t._s(t.app_keyword)
                    }
                }) : t._e()]), t._v(" "), n("div", [t._v("约第 "), n("span", {
                    staticClass: "light",
                    domProps: {
                        textContent: t._s(t.app_rank)
                    }
                }), t._v(" 位，找到该图标应用下载安装")]), t._v(" "), t.isPad ? n("div", [t._v("iPad设备请选择 仅限iPhone")]) : t._e()]) : t._e(), t._v(" "), t.app_keyword ? t._e() : n("div", {
                    staticClass: "step step-1"
                }, [n("div", [t._v("一、前往 App Store 下载应用："), n("span", {
                    staticClass: "light"
                }, [t._v(t._s(t.app_name))])])]), t._v(" "), n("div"), t._v(" "), n("div", {
                    staticClass: "step step-2"
                }, [n("div", [t._v("二、回本页，点击 "), n("span", {
                    staticClass: "light"
                }, [t._v("试玩应用 ")]), n("span", {
                    domProps: {
                        textContent: t._s(t.tips)
                    }
                })]), t._v(" "), n("div", [t._v("打开应用时请 “允许”使用数据")])]), t._v(" "), n("div", {
                    staticClass: "step step-3"
                }, [n("div", [t._v("三、满足条件后，回本页面 "), n("span", {
                    staticClass: "light"
                }, [t._v("领取奖励")])])]), t._v(" "), n("div", {
                    staticClass: "step-button can-click",
                    on: {
                        click: function (e) {
                            t.goAppstore()
                        }
                    }
                }, [n("span", [t._v("开始任务")])]), t._v(" "), n("div", {
                    staticClass: "step-button disabled",
                    class: {
                        "can-click": 1 !== t.steps[0]
                    },
                    on: {
                        click: function (e) {
                            t.openApp()
                        }
                    }
                }, [n("span", [t._v("试玩应用")])]), t._v(" "), n("div", {
                    staticClass: "step-button disabled",
                    class: {
                        reward: 0 !== t.steps[2]
                    },
                    on: {
                        click: function (e) {
                            t.checkTaskStatus()
                        }
                    }
                }, [n("span", [t._v("领取奖励")])]), t._v(" "), n("div", {
                    staticStyle: {
                        height: "200px"
                    }
                })])], 1), t._v(" "), n("StartTaskPopup", {
                    ref: "startRemind",
                    attrs: {
                        href: t.href
                    }
                }), t._v(" "), n("AppstorePopup", {
                    ref: "appstore"
                })], 1)
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "popup-container popup-appstore",
                    class: {
                        "popup-showing active": 1 === t.state,
                        "popup-showing popup-hidden": 2 === t.state
                    },
                    attrs: {
                        effect: "scale"
                    }
                }, [n("div", {
                    staticClass: "popup popup-appstore"
                }, [t._m(0), t._v(" "), n("div", {
                    staticClass: "close",
                    on: {
                        click: function (e) {
                            t.hide()
                        }
                    }
                }, [n("img", {
                    attrs: {
                        src: "//assets.qkcdn.com/images/4da3039bc3c0f6ece75d0f990df76359.png",
                        alt: ""
                    }
                })])])])
            }, staticRenderFns: [
                function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "popup-body"
                    }, [n("div", {
                        staticClass: "title"
                    }, [t._v("任务已开始")]), t._v(" "), n("div", {
                        staticClass: "subtitle"
                    }, [t._v("请在桌面打开App Store下载应用")]), t._v(" "), n("img", {
                        staticClass: "bg",
                        attrs: {
                            src: "//assets.qkcdn.com/images/d826046c57b97f3ab5f1234bdf8b0df0.png",
                            alt: ""
                        }
                    })])
                }
            ]
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("table", {
                    ref: "_btable",
                    on: {
                        touchstart: t.startTouch,
                        touchmove: t.touchMove,
                        touchend: t.endTouch
                    }
                }, [t.data.length > 0 ? n("colgroup", t._l(Object.keys(t.data[0]), function (e, s) {
                    return n("col", {
                        key: s,
                        attrs: {
                            width: t.cols.length > 0 && t.cols[s]
                        }
                    })
                })) : t._e(), t._v(" "), n("thead", [t.theads.length > 0 ? n("tr", t._l(t.theads, function (e, s) {
                    return n("td", {
                        key: s
                    }, [t._v(t._s(e))])
                })) : t._e()]), t._v(" "), n("tbody", [t._l(t.data, function (e, s) {
                    return t.type ? t._e() : n("tr", {
                        key: s
                    }, t._l(e, function (e, a) {
                        return n("td", [0 == s ? n("span", {
                            staticClass: "number"
                        }, [t._v(t._s(e.value))]) : t._e(), t._v(" "), s > 0 && 0 == a ? n("span", {
                            staticClass: "number"
                        }, [t._v(t._s(e.value))]) : t._e(), t._v(" "), s > 0 && 1 == a ? n("span", {
                            staticClass: "other-num"
                        }, [t._v(t._s(parseFloat(e.value)) + "元")]) : t._e(), t._v(" "), s > 0 && a > 1 ? n("span", {
                            staticClass: "other-num"
                        }, [t._v(t._s(parseFloat(e.value)) + "金币/天")]) : t._e(), t._v(" "), s >= 1 && 0 == a ? n("level-icon", {
                            attrs: {
                                level: e.value,
                                halo: !1,
                                size: "small",
                                small: !0
                            }
                        }) : t._e()], 1)
                    }))
                }), t._v(" "), t._l(t.data, function (e, s) {
                    return 1 == t.type ? n("tr", {
                        key: s
                    }, t._l(e, function (e, s) {
                        return n("td", ["object" != typeof e ? n("i", [t._v(t._s("时间" == e ? "" : e))]) : t._e(), t._v(" "), "object" == typeof e ? n("i", [t._v(t._s(0 === e.value ? "-" : e.value))]) : t._e(), t._v(" "), e.is_trial ? n("i", {
                            staticClass: "ftr-trail"
                        }, [t._v("体验")]) : t._e(), t._v(" "), e.times > 1 ? n("i", {
                            staticClass: "ftr-times"
                        }, [t._v("双倍")]) : t._e()])
                    })) : t._e()
                })], 2)])
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", [t.recommends.length > 0 ? n("ActionList", {
                    attrs: {
                        title: "推荐"
                    }
                }, t._l(t.recommends, function (e, s) {
                    return n("Action", {
                        key: s,
                        nativeOn: {
                            click: function (n) {
                                t.jump(e)
                            }
                        }
                    }, [n("div", {
                        staticClass: "icon",
                        slot: "icon"
                    }, [n("img", {
                        attrs: {
                            src: e.icon
                        }
                    })]), t._v(" "), n("span", {
                        domProps: {
                            textContent: t._s(e.title)
                        },
                        slot: "app-name"
                    }), t._v(" "), n("Tags", {
                        attrs: {
                            tags: e.tags
                        },
                        slot: "desc"
                    }), t._v(" "), n("div", {
                        staticClass: "reward-content",
                        slot: "reward-wrap"
                    }, [n("span", {
                        staticClass: "plus",
                        domProps: {
                            textContent: t._s("fanli" === e.portalName ? "返" : "loan" === e.portalName ? "借" : "+")
                        }
                    }), t._v(" "), n("span", {
                        staticClass: "reward",
                        domProps: {
                            textContent: t._s(e.reward)
                        }
                    }), t._v(" "), n("span", {
                        staticClass: "yuan",
                        domProps: {
                            textContent: t._s("credit" === e.portalName ? "元" : "元／日")
                        }
                    })])], 1)
                })) : t._e()], 1)
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return t.is_jail_broken ? n("div", {
                    staticClass: "jail-broken"
                }, [n("div", {
                    staticClass: "tips"
                }, [t._v("\n    您的设备已越狱或安装了第三方应用商店软件、越狱软件，请恢复正版或删除该类应用。如需帮助请 "), n("span", {
                    staticClass: "assertive",
                    on: {
                        click: function (e) {
                            t.customService()
                        }
                    }
                }, [t._v("联系客服")])]), t._v(" "), n("img", {
                    attrs: {
                        src: "//assets.qkcdn.com/images/e3c1e2c8e177b442b77b2e6f1c91cfa5.png",
                        alt: ""
                    }
                })]) : t._e()
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "task-action"
                }, [n("scalable", {
                    staticClass: "icon-wrapper",
                    attrs: {
                        width: "52",
                        height: "52"
                    }
                }, [t._t("icon")], 2), t._v(" "), n("div", {
                    staticClass: "app-name"
                }, [t._t("app-name")], 2), t._v(" "), n("div", {
                    staticClass: "desc"
                }, [t._t("desc")], 2), t._v(" "), n("div", {
                    staticClass: "no-task-desc"
                }, [t._t("no-task-desc")], 2), t._v(" "), n("div", {
                    staticClass: "reward-wrap"
                }, [t._t("reward-wrap")], 2)], 1)
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    class: {
                        "menu-wrap-fixed": t.posFixed,
                        "menu-wrap": !t.posFixed
                    }
                }, t._l(t.menus, function (e) {
                    return n("div", {
                        key: e.id,
                        staticClass: "menu-item",
                        class: {
                            active: e.selected
                        },
                        on: {
                            click: function (n) {
                                t.menuClick(e)
                            }
                        }
                    }, [t._v(t._s(e.name))])
                }))
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", [t.newbie.length > 0 ? n("ActionList", {
                    attrs: {
                        title: "新人专享"
                    }
                }, [t.newbieTips ? n("div", {
                    staticClass: "appoint-remind"
                }, [n("span", [t._v("还有 "), n("b", [t._v(t._s(t.in_compare.newbie))]), t._v(" 个任务正在匹配，请稍后刷新...")])]) : t._e(), t._v(" "), t._l(t.newbie, function (e) {
                    return n("Action", {
                        key: e.task_id,
                        nativeOn: {
                            click: function (n) {
                                t.start(e)
                            }
                        }
                    }, [n("div", {
                        staticClass: "icon",
                        slot: "icon"
                    }, [n("img", {
                        attrs: {
                            src: e.icon
                        }
                    })]), t._v(" "), n("span", {
                        domProps: {
                            textContent: t._s(e.title)
                        },
                        slot: "app-name"
                    }), t._v(" "), n("Tags", {
                        attrs: {
                            tags: e.tags
                        },
                        slot: "desc"
                    }), t._v(" "), n("div", {
                        staticClass: "reward-content",
                        slot: "reward-wrap"
                    }, [n("span", {
                        staticClass: "plus"
                    }, [t._v("+")]), t._v(" "), n("span", {
                        staticClass: "reward",
                        domProps: {
                            textContent: t._s(parseFloat(e.reward).toFixed(1))
                        }
                    }), t._v(" "), n("span", {
                        staticClass: "yuan"
                    }, [t._v("元")])])], 1)
                })], 2) : t._e(), t._v(" "), 0 !== t.tasks.length || t.has_tasks ? t._e() : n("ActionList", {
                    attrs: {
                        title: "标准任务"
                    }
                }, [n("Action", [n("div", {
                    staticClass: "icon",
                    slot: "icon"
                }, [n("img", {
                    attrs: {
                        src: "//qianka.b0.upaiyun.com/images/809c958dfd2f7f6f78da97f40322423a.png"
                    }
                })]), t._v(" "), n("span", {
                    slot: "app-name"
                }, [t._v("暂无任务")]), t._v(" "), n("span", {
                    slot: "desc"
                }, [t._v("请关注任务预告")])])], 1), t._v(" "), t.tasks.length > 0 ? n("ActionList", {
                    attrs: {
                        title: "标准任务"
                    }
                }, [t.tasksTips ? n("div", {
                    staticClass: "appoint-remind"
                }, [n("span", [t._v("还有 "), n("b", [t._v(t._s(t.in_compare.tasks))]), t._v(" 个任务正在匹配，请稍后刷新...")])]) : t._e(), t._v(" "), t._l(t.tasks, function (e) {
                    return n("Action", {
                        key: e.task_id,
                        nativeOn: {
                            click: function (n) {
                                t.start(e)
                            }
                        }
                    }, [n("div", {
                        staticClass: "icon",
                        slot: "icon"
                    }, [n("img", {
                        attrs: {
                            src: e.icon
                        }
                    })]), t._v(" "), n("span", {
                        domProps: {
                            textContent: t._s(e.title)
                        },
                        slot: "app-name"
                    }), t._v(" "), n("Tags", {
                        attrs: {
                            tags: e.tags
                        },
                        slot: "desc"
                    }), t._v(" "), e.portalName || e.is_zssh || "bonus" === e.label ? t._e() : n("div", {
                        staticClass: "reward-content",
                        slot: "reward-wrap"
                    }, [n("span", {
                        staticClass: "plus"
                    }, [t._v("+")]), t._v(" "), n("span", {
                        staticClass: "reward",
                        domProps: {
                            textContent: t._s(parseFloat(e.reward).toFixed(1))
                        }
                    }), t._v(" "), n("span", {
                        staticClass: "yuan"
                    }, [t._v("元")])]), t._v(" "), !e.portalName && e.is_zssh ? n("div", {
                        staticClass: "reward-content",
                        slot: "reward-wrap"
                    }, [n("span", {
                        staticClass: "plus"
                    }, [t._v("+")]), t._v(" "), n("span", {
                        staticClass: "reward",
                        domProps: {
                            textContent: t._s(parseFloat(e.reward).toFixed(1))
                        }
                    }), t._v(" "), n("span", {
                        staticClass: "yuan"
                    }, [t._v("元")])]) : t._e(), t._v(" "), e.portalName || "bonus" != e.label ? t._e() : n("div", {
                        staticClass: "reward-content",
                        slot: "reward-wrap"
                    }, [n("span", {
                        staticClass: "plus"
                    }, [t._v("+")]), t._v(" "), n("span", {
                        staticClass: "reward"
                    }, [t._v(t._s(t.bonus_tasks_reward[0]) + "~" + t._s(t.bonus_tasks_reward[1]))]), t._v(" "), n("span", {
                        staticClass: "yuan"
                    }, [t._v("金币")])]), t._v(" "), e.portalName ? n("div", {
                        staticClass: "reward-content",
                        slot: "reward-wrap"
                    }, [n("span", {
                        staticClass: "plus"
                    }, [t._v("+")]), t._v(" "), n("span", {
                        staticClass: "reward",
                        domProps: {
                            textContent: t._s("shoutu" === e.portalName ? "10" : "2000")
                        }
                    }), t._v(" "), n("span", {
                        staticClass: "yuan",
                        domProps: {
                            textContent: t._s("shoutu" === e.portalName ? "元" : "元/月")
                        }
                    })]) : t._e()], 1)
                })], 2) : t._e()], 1)
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "page-read"
                }, [n("div", {
                    staticClass: "page-header"
                }, [n("div", {
                    staticClass: "page-title"
                }, [t._v("阅读赚金币")]), t._v(" "), n("div", {
                    attrs: {
                        id: "reading"
                    }
                }), t._v(" "), n("div", {
                    staticClass: "v-short-line"
                }), t._v(" "), n("read-menus", {
                    attrs: {
                        "fetch-reading-list": t.fetchReadingList
                    }
                })], 1), t._v(" "), n("div", {
                    staticClass: "tips-bar",
                    on: {
                        click: function (e) {
                            t.forwardTo("/readRules")
                        }
                    }
                }, [n("img", {
                    attrs: {
                        src: "//assets.qkcdn.com/images/5b70c4da452306d3a0d44defc312d51e.png"
                    }
                })]), t._v(" "), n("div", {
                    staticClass: "read-list-wrap"
                }, t._l(t.articles, function (e, s) {
                    return n("div", {
                        key: s,
                        ref: "item_" + s,
                        refInFor: !0,
                        on: {
                            click: function (n) {
                                t.jumpTo(e, s)
                            }
                        }
                    }, ["article" === e.type && e.images.length > 1 ? n("div", {
                        staticClass: "read-item-a item-common three-img"
                    }, [n("div", {
                        staticClass: "title",
                        staticStyle: {
                            "-webkit-box-orient": "vertical"
                        }
                    }, [t._v(t._s(e.title))]), t._v(" "), n("div", {
                        staticClass: "sub"
                    }, [t._v(t._s(e.origin) + " " + t._s(t._f("formatTimeAgo")(e.publishTime)))]), t._v(" "), n("div", {
                        staticClass: "img-wrap"
                    }, t._l(e.images, function (e, s) {
                        return n("div", {
                            key: s,
                            staticClass: "cover",
                            style: {
                                backgroundImage: t.formatImg(e)
                            }
                        })
                    }))]) : t._e(), t._v(" "), "video" === e.type && e.images.length > 0 ? n("div", {
                        staticClass: "read-item-a item-common"
                    }, [n("div", {
                        staticClass: "title",
                        staticStyle: {
                            "-webkit-box-orient": "vertical"
                        }
                    }, [t._v(t._s(e.title))]), t._v(" "), n("div", {
                        staticClass: "sub"
                    }, [t._v(t._s(e.origin) + " " + t._s(t._f("formatTimeAgo")(e.publishTime)))]), t._v(" "), n("div", {
                        staticClass: "img-wrap"
                    }, [n("div", {
                        staticClass: "cover",
                        style: {
                            backgroundImage: t.formatImg(e.images[0])
                        }
                    }), t._v(" "), n("div", {
                        staticClass: "time"
                    }, [t._v(t._s(t._f("formatSeconds")(e.videoTime)))]), t._v(" "), t._m(0, !0)])]) : t._e(), t._v(" "), "article" === e.type && 1 === e.images.length ? n("div", {
                        staticClass: "read-item-a item-common"
                    }, [n("div", {
                        staticClass: "title",
                        staticStyle: {
                            "-webkit-box-orient": "vertical"
                        }
                    }, [t._v(t._s(e.title))]), t._v(" "), n("div", {
                        staticClass: "sub"
                    }, [t._v(t._s(e.origin) + " " + t._s(t._f("formatTimeAgo")(e.publishTime)))]), t._v(" "), n("div", {
                        staticClass: "img-wrap"
                    }, [n("div", {
                        staticClass: "cover",
                        style: {
                            backgroundImage: t.formatImg(e.images[0])
                        }
                    })])]) : t._e(), t._v(" "), "advertisement" === e.type ? n("div", {
                        staticClass: "ad-item"
                    }, [n("div", {
                        staticClass: "overflow-h",
                        attrs: {
                            id: "ad_container_" + s
                        }
                    })]) : t._e()])
                })), t._v(" "), t.isLoading || t.isTryLoading ? n("div", {
                    staticClass: "loading"
                }, [n("img", {
                    staticClass: "loading-img",
                    attrs: {
                        src: "//assets.qkcdn.com/images/dbd35ed7ebf4491cdf8ea0e5ea86ad72.png"
                    }
                })]) : t._e(), t._v(" "), !t.no_more || t.isLoading || t.isTryLoading ? t._e() : n("div", {
                    staticClass: "no-more isIphoneX"
                }, [n("div", {
                    staticClass: "hint"
                }, [t._v("已经没有更多内容了")])]), t._v(" "), t.isLoadingFail ? n("div", {
                    staticClass: "load-fail",
                    on: {
                        click: t.fetchReadingList
                    }
                }, [n("img", {
                    staticClass: "img-fail",
                    attrs: {
                        src: "//assets.qkcdn.com/images/9e7bb4554012cf4ba847cd811727a81b.png"
                    }
                }), t._v(" "), n("div", {
                    staticClass: "hint"
                }, [t._v("加载失败，请点击重试")])]) : t._e()])
            }, staticRenderFns: [
                function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "play-btn"
                    }, [n("img", {
                        attrs: {
                            src: "//assets.qkcdn.com/images/ae0591cba0f1fa2c35c24b684327d24d.png"
                        }
                    })])
                }
            ]
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "page"
                }, [n("div", {
                    staticClass: "page-content page-welcome"
                }, [n("div", {
                    staticClass: "button-coral start",
                    on: {
                        click: function (e) {
                            t.start()
                        }
                    }
                }, [t._v("开始来玩")]), t._v(" "), t.showLogin ? n("div", {
                    staticClass: "login",
                    on: {
                        click: function (e) {
                            t.login()
                        }
                    }
                }, [t._v("老用户登录")]) : t._e()])])
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    directives: [{
                        name: "nav",
                        rawName: "v-nav",
                        value: {
                            hideNavbar: !0
                        },
                        expression: "{hideNavbar: true}"
                    }],
                    staticClass: "page page-zstask-detail"
                }, [n("AnimateHeader", {
                    attrs: {
                        "bg-color": "#FFDD55",
                        "menu-bg-color": "#FFD155",
                        color: "#3A3A3A",
                        "on-back-button-click": t.back,
                        expanded: !0,
                        animate: !1,
                        "show-back-button": !1,
                        "show-menu-button": !0,
                        "on-menu-button-click": t.back
                    }
                }, [n("div", {
                    slot: "content"
                }, [n("TaskDetailTitle", [n("div", {
                    staticClass: "reward"
                }, [n("span", [t._v("任务奖励 + ")]), t._v(" "), n("span", {
                    staticClass: "income",
                    domProps: {
                        textContent: t._s(t.zstask_info.reward)
                    }
                }), t._v(" 元\n        ")])])], 1)]), t._v(" "), n("div", {
                    staticClass: "page-content zstask-detail"
                }, [n("div", {
                    staticClass: "step step-1"
                }, [n("div", {
                    staticClass: "semibold"
                }, [t._v("① 打开应用试玩")]), t._v(" "), n("div", {
                    staticClass: "app-wrapper"
                }, [n("div", {
                    staticClass: "img-box"
                }, [n("img", {
                    attrs: {
                        src: t.zstask_info.icon,
                        alt: ""
                    }
                })]), t._v(" "), n("span", {
                    staticClass: "app-name"
                }, [t._v(t._s(t.zstask_info.title.substring(0, 1)) + "***")]), t._v(" "), n("div", {
                    staticClass: "step-button can-click",
                    on: {
                        click: function (e) {
                            t.openApp(t.zstask_info)
                        }
                    }
                }, [n("span", [t._v("打开应用")])])])]), t._v(" "), n("div", {
                    staticClass: "step step-2"
                }, [n("div", {
                    staticClass: "semibold"
                }, [t._v("② 试玩结束回本页领奖")]), t._v(" "), n("div", {
                    staticClass: "step-button disabled",
                    class: {
                        reward: 1 == t.steps[1]
                    },
                    on: {
                        click: function (e) {
                            t.checkReward()
                        }
                    }
                }, [n("span", [t._v("领取奖励")])])])]), t._v(" "), n("AssistantInvalid"), t._v(" "), n("AssistantUnopen")], 1)
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "explore-entrance",
                    on: {
                        click: function (e) {
                            t.$router.forward("/explore/1")
                        }
                    }
                }, [n("div", {
                    staticClass: "icon-wrapper"
                }, t._l(t.explore_task_info.icons, function (t, e) {
                    return n("div", {
                        key: e,
                        staticClass: "icon",
                        class: {
                            offset1: 1 == e,
                            offset2: 2 == e
                        }
                    }, [n("img", {
                        attrs: {
                            src: t,
                            alt: ""
                        }
                    })])
                })), t._v(" "), n("div", {
                    staticClass: "total-tip"
                }, [t._v(t._s(t.explore_task_info.date_str) + "有"), n("span", [t._v(" " + t._s(t.explore_task_info.total) + " ")]), t._v("个探索任务 共"), n("span", [t._v(" " + t._s(t.explore_task_info.total_reward) + " ")]), t._v("金币")]), t._v(" "), n("i", {
                    staticClass: "triangle"
                })])
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "popup-container popup-level-upgrade",
                    class: {
                        "popup-showing active": 1 === t.state,
                        "popup-showing popup-hidden": 2 === t.state
                    },
                    attrs: {
                        effect: "level-upgrade"
                    }
                }, [n("div", {
                    staticClass: "popup popup-level-upgrade"
                }, [n("div", {
                    staticClass: "popup-body"
                }, [n("level-icon", {
                    staticClass: "upgrade-level",
                    attrs: {
                        level: t.exp_info.final_level,
                        halo: !1
                    }
                }), t._v(" "), n("div", {
                    staticClass: "title"
                }, [t._v("恭喜升级啦!")]), t._v(" "), n("div", {
                    staticClass: "reward-num"
                }, [n("span", {
                    staticClass: "tip"
                }, [t._v("每日可领")]), t._v(" "), n("span", [t._v(t._s(parseFloat(t.exp_info.add_reward)))]), t._v(" "), n("span", [t._v(t._s(t.unit))])])], 1), t._v(" "), n("div", {
                    staticClass: "close-popup",
                    on: {
                        click: function (e) {
                            t.closed()
                        }
                    }
                }, [n("img", {
                    attrs: {
                        src: "//assets.qkcdn.com/images/eadb0bd474358489a27a88bacaa9b5c0.png",
                        alt: ""
                    }
                })])])])
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "list-wrap"
                }, t._l(t.list, function (e, s) {
                    return n("div", {
                        key: s,
                        staticClass: "column",
                        style: {
                            background: "url(" + e.bg + ") no-repeat",
                            color: e.color
                        },
                        attrs: {
                            item: e
                        },
                        on: {
                            click: function (n) {
                                t.jumpTo(e)
                            }
                        }
                    }, [n("div", {
                        staticClass: "title"
                    }, [t._v(t._s(e.title))]), t._v(" "), n("div", {
                        staticClass: "sub-title"
                    }, [t._v(t._s(e.subTitle))]), t._v(" "), "探索任务" === e.title && t.explore_tags.tasks_reward > 0 ? n("div", {
                        staticClass: "tip"
                    }, [t._v(t._s(t.explore_tags.tasks_reward) + "金币")]) : t._e()])
                }))
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "animate-header",
                    style: {
                        height: t.state.headerHeight + "px"
                    }
                }, [t.showBackButton ? n("div", {
                    staticClass: "menu-item menu-item-left",
                    style: {
                        backgroundColor: t.transparency && t.opacity ? "rgba(255, 255, 255, 0)" : t.menuBgColor,
                        width: t.opacity ? "51px" : ""
                    },
                    on: {
                        click: function (e) {
                            t.onBack()
                        }
                    }
                }, [n("BackArrow", {
                    attrs: {
                        color: t.color
                    }
                })], 1) : t._e(), t._v(" "), n("div", {
                    staticClass: "header-content",
                    style: {
                        backgroundColor: t.transparency && t.opacity ? "rgba(255, 255, 255, 0)" : t.bgColor
                    }
                }, [t._t("content", [n("h4", {
                    staticClass: "light",
                    style: {
                        color: t.color,
                        marginTop: t.state.titleMarginTop + "px",
                        fontSize: t.state.titleFontSize + "px",
                        lineHeight: t.state.titleLineHeight + "px",
                        color: t.color
                    },
                    domProps: {
                        textContent: t._s(t.title)
                    }
                }), t._v(" "), n("p", {
                    staticClass: "light",
                    style: {
                        opacity: t.state.subTitleOpacity,
                        color: t.color
                    },
                    domProps: {
                        innerHTML: t._s(t.subTitle)
                    }
                })])], 2), t._v(" "), t.showMenuButton ? n("div", {
                    staticClass: "menu-item menu-item-right",
                    style: {
                        backgroundColor: t.defaultBgColor ? t.bgColor : t.menuRightBgColor ? t.menuRightBgColor : t.menuBgColor
                    },
                    on: {
                        click: function (e) {
                            t.onMenu()
                        }
                    }
                }, [t._t("menu", [n("Close", {
                    attrs: {
                        color: t.color
                    }
                })])], 2) : t._e()])
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    directives: [{
                        name: "nav",
                        rawName: "v-nav",
                        value: {
                            hideNavbar: !0
                        },
                        expression: "{hideNavbar: true}"
                    }],
                    staticClass: "page"
                }, [n("div", {
                    ref: "scroller",
                    staticClass: "page-content"
                }, [n("reading", {
                    staticStyle: {
                        "margin-top": "0px"
                    },
                    attrs: {
                        "fetch-reading-list": t.fetchMuchTimesIfNoReadingData,
                        "is-try-loading": t.startTryThreeTimesFetchReading,
                        "is-loading": t.isReadingListLoading,
                        "is-loading-fail": t.isReadingListLoadingFail
                    }
                })], 1)])
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "page page-group"
                }, [n("div", {
                    staticClass: "page-content punch-container"
                }, [n("div", {
                    staticClass: "background-img"
                }), t._v(" "), n("div", {
                    staticClass: "header"
                }, [n("div", {
                    staticClass: "back",
                    on: {
                        click: function (e) {
                            t.back()
                        }
                    }
                }, [n("img", {
                    attrs: {
                        src: "//assets.qkcdn.com/images/e091920bcd5e7136e3e45da9c95f840b.png"
                    }
                })]), t._v(" "), n("div", {
                    staticClass: "packet"
                }), t._v(" "), n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.groupinfo.is_open && t.groupinfo.current_num < 5,
                        expression: "groupinfo.is_open && groupinfo.current_num < 5"
                    }],
                    staticClass: "quit",
                    on: {
                        click: function (e) {
                            t.quit()
                        }
                    }
                }, [t._v("退出团队")])]), t._v(" "), n("Register", {
                    attrs: {
                        groupinfo: t.groupinfo
                    },
                    on: {
                        hasRegister: function (e) {
                            t.hasRegister(t.status)
                        }
                    }
                }), t._v(" "), n("Punch", {
                    attrs: {
                        groupinfo: t.groupinfo
                    },
                    on: {
                        invited: function (e) {
                            t.invited()
                        }
                    }
                }), t._v(" "), n("div", {
                    staticClass: "boundary"
                }), t._v(" "), t._m(0)], 1), t._v(" "), n("invitedPopup", {
                    ref: "invited"
                }), t._v(" "), n("ReferralPopopup", {
                    ref: "group"
                })], 1)
            }, staticRenderFns: [
                function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "activity-rules"
                    }, [n("h4", [t._v("活动规则")]), t._v(" "), n("div", {
                        staticClass: "rules"
                    }, [n("div", [t._v("1、组团打卡红包为钱咖推出的全新玩法，用户仅需邀请4个好友一起组成5人团队，连续7天打卡，即可获得红包奖励。团长奖励翻倍哦！")]), t._v(" "), n("div", [t._v("2、团长每次组建新的团队，都需要支付金币解锁后，才可以邀请好友加入")]), t._v(" "), n("div", [t._v("3、用户可以作为团长去邀请好友入团，亦可以加入好友的团队")]), t._v(" "), n("div", [t._v("4、团队在满5人时自动开团，接下来的7天内，如任意好友中断打卡，则团队将自动解散，同时所有团员失去全部红包奖励")]), t._v(" "), n("div", [t._v("5、团长或者团员在团队未满5人时（即未开团时），可以任意退出；原始团长退出后，顺位用户将自动替补为团长，享受团长的红包奖励；如退团后仅剩一名非原始团长用户，则团队自动解散")]), t._v(" "), n("div", [t._v("6、组团打卡红包活动，仅支持钱咖5.0版本")]), t._v(" "), n("div", [t._v("7、钱咖保留在法律允许范围内对活动规则的修改，恕不另行通知")])])])
                }
            ]
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "loading-container",
                    class: {
                        visible: 1 == t.state,
                        "visible active": 2 == t.state
                    },
                    attrs: {
                        "von-loading": ""
                    }
                }, [n("div", {
                    staticClass: "coin"
                }, [n("div", {
                    staticClass: "title"
                }, [t._v(t._s(t.title))]), t._v(" "), n("div", {
                    staticClass: "add-num"
                }, [n("img", {
                    attrs: {
                        src: "//assets.qkcdn.com/images/0d23dc4f82a403417febcf0f3aedc336.png",
                        alt: ""
                    }
                }), t._v(" "), n("span", {
                    staticClass: "num",
                    domProps: {
                        textContent: t._s(t.tips)
                    }
                }), t._v(" "), n("span", {
                    staticClass: "unit"
                }, [t._v("金币")])])])])
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "assistant-banner"
                }, [n("scalable", {
                    staticClass: "app-icon",
                    attrs: {
                        width: "44",
                        height: "44"
                    }
                }, [n("img", {
                    attrs: {
                        src: t.info.app_icon
                    }
                })]), t._v(" "), n("div", {
                    staticClass: "title"
                }, [t._v("需启动助手才能开始试玩")]), t._v(" "), n("div", {
                    staticClass: "desc"
                }, [t._v("您的任务助手是："), n("span", {
                    domProps: {
                        textContent: t._s(t.info.app_name)
                    }
                })]), t._v(" "), n("button", {
                    staticClass: "button button-assertive button-small btn-download",
                    on: {
                        click: function (e) {
                            t.showDownloadAssistantPopup()
                        }
                    }
                }, [t._v("下载")])], 1)
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("CustomPopup", {
                    ref: "liteKeyPopup"
                }, [n("div", {
                    staticClass: "popup-body lite-popup-assistant popup-unopen-assistant"
                }, [n("div", {
                    staticClass: "text"
                }, [t._v("\n      您的助手未开启\n    ")]), t._v(" "), n("button", {
                    staticClass: "button button-assertive btn-open",
                    on: {
                        click: function (e) {
                            t.open()
                        }
                    }
                }, [t._v("打开助手")]), t._v(" "), n("div", {
                    staticClass: "tips"
                }, [t._v("\n      如遇问题请 "), n("span", {
                    staticClass: "assertive",
                    staticStyle: {
                        "text-decoration": "underline"
                    },
                    on: {
                        click: function (e) {
                            t.download()
                        }
                    }
                }, [t._v("重新下载助手")])]), t._v(" "), n("button", {
                    staticClass: "button button-royal button-small button-clear button-close",
                    on: {
                        click: function (e) {
                            t.hide(-1)
                        }
                    }
                }, [n("i", {
                    staticClass: "ion-ios-close-empty"
                })])])])
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return t.is_jail_broken ? n("div", {
                    staticClass: "jail-broken"
                }, [n("div", {
                    staticClass: "tips"
                }, [t._v("\n    您的设备已越狱或安装了第三方应用商店软件、越狱软件，请恢复正版或删除该类应用。如需帮助请 "), n("span", {
                    staticClass: "assertive",
                    on: {
                        click: function (e) {
                            t.customService()
                        }
                    }
                }, [t._v("联系客服")])])]) : t._e()
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "page-content qk-bind-zhima-form"
                }, [t._m(0), t._v(" "), n("form", {
                    attrs: {
                        action: "/s4/3rd/zhima.register",
                        method: "post",
                        id: "bind-phone"
                    }
                }, [n("div", {
                    staticClass: "list list-ios login-form"
                }, [n("div", {
                    staticClass: "item item-borderless"
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.form.phone,
                        expression: "form.phone"
                    }],
                    ref: "phone",
                    attrs: {
                        type: "tel",
                        name: "phone",
                        placeholder: "芝麻信用实名认证时绑定的手机号"
                    },
                    domProps: {
                        value: t.form.phone
                    },
                    on: {
                        focus: function (e) {
                            t.focus()
                        }, blur: function (e) {
                            t.blur()
                        }, input: function (e) {
                            e.target.composing || (t.form.phone = e.target.value)
                        }
                    }
                }), t._v(" "), t.showClearMobileBtn ? n("div", {
                    staticClass: "btn-clear-mobile",
                    on: {
                        click: function (e) {
                            t.clearMobile()
                        }
                    }
                }, [n("img", {
                    attrs: {
                        src: "//qianka.b0.upaiyun.com/images/d9736469d2fe0512ee89485fbf1a7689.png"
                    }
                })]) : t._e()])])]), t._v(" "), n("div", {
                    staticClass: "item-submit"
                }, [n("button", {
                    staticClass: "button button-block button-bind",
                    on: {
                        click: function (e) {
                            t.submit()
                        }
                    }
                }, [t._v(t._s(t.submitText))])]), t._v(" "), t._m(1)])
            }, staticRenderFns: [
                function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "bnind-progress"
                    }, [n("div", {
                        staticClass: "progress progress-left"
                    }, [n("img", {
                        attrs: {
                            src: "//qianka.b0.upaiyun.com/images/4d9a91998d5f76215d9906bd244f684a.png",
                            alt: ""
                        }
                    }), n("span", [t._v("立即认证")])]), t._v(" "), n("div", {
                        staticClass: "progress-arrow-right"
                    }, [n("img", {
                        attrs: {
                            src: "//qianka.b0.upaiyun.com/images/55f80168960728176a548daf0f8eaad3.png",
                            alt: ""
                        }
                    })]), t._v(" "), n("div", {
                        staticClass: "progress progress-middle"
                    }, [n("img", {
                        attrs: {
                            src: "//qianka.b0.upaiyun.com/images/d1bcfe4f2d596dd55b84bf1bee933de3.png",
                            alt: ""
                        }
                    }), n("span", [t._v("同意协议")])]), t._v(" "), n("div", {
                        staticClass: "progress-arrow-left"
                    }, [n("img", {
                        attrs: {
                            src: "//qianka.b0.upaiyun.com/images/55f80168960728176a548daf0f8eaad3.png",
                            alt: ""
                        }
                    })]), t._v(" "), n("div", {
                        staticClass: "progress progress-right"
                    }, [n("img", {
                        attrs: {
                            src: "//qianka.b0.upaiyun.com/images/705b3ea7c079440cba9b79cc1101ebec.png",
                            alt: ""
                        }
                    }), n("span", [t._v("身份验证")])])])
                },
                function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "bind-remind"
                    }, [n("span", [t._v("1. 以上信息仅用于认证并确认用户唯一性")]), t._v(" "), n("span", [t._v("2. 认证后钱咖将更加精准的为您匹配限时任务")])])
                }
            ]
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("CustomPopup", {
                    ref: "p"
                }, [t.isIOSLessThan8() ? n("div", {
                    staticClass: "popup-body popup-assistant popup-unopen-assistant popup-ios-less-than-8"
                }, [n("div", {
                    staticClass: "text"
                }, [t._v("企业助手仅支持 iOS 8.0 及以上版本")]), t._v(" "), t.showHide ? n("button", {
                    staticClass: "button button-royal button-small button-clear button-close",
                    on: {
                        click: function (e) {
                            t.hide(-1)
                        }
                    }
                }, [n("i", {
                    staticClass: "ion-ios-close-empty"
                })]) : t._e()]) : n("div", {
                    staticClass: "popup-body popup-assistant popup-unopen-assistant"
                }, [n("div", {
                    staticClass: "text"
                }, [t._v("\n      您的助手未开启\n    ")]), t._v(" "), n("button", {
                    staticClass: "button button-assertive btn-open",
                    on: {
                        click: function (e) {
                            t.open()
                        }
                    }
                }, [t._v("打开助手")]), t._v(" "), n("div", {
                    staticClass: "tips"
                }, [t._v("\n      如遇问题请 "), n("span", {
                    staticClass: "assertive",
                    staticStyle: {
                        "text-decoration": "underline"
                    },
                    on: {
                        click: function (e) {
                            t.toDownload()
                        }
                    }
                }, [t._v("重新下载助手")])]), t._v(" "), t.showHide ? n("button", {
                    staticClass: "button button-royal button-small button-clear button-close",
                    on: {
                        click: function (e) {
                            t.hide(-1)
                        }
                    }
                }, [n("i", {
                    staticClass: "ion-ios-close-empty"
                })]) : t._e()])])
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return t.is_jail_broken ? n("div", {
                    staticClass: "jail-broken"
                }, [n("div", {
                    staticClass: "tips"
                }, [t._v("\n    您的设备已越狱或安装了第三方应用商店软件、越狱软件，请恢复正版或删除该类应用。如需帮助请 "), n("span", {
                    staticClass: "assertive",
                    on: {
                        click: function (e) {
                            t.customService()
                        }
                    }
                }, [t._v("联系客服")])])]) : t._e()
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return t.easy.length > 0 ? n("ActionList", {
                    attrs: {
                        title: "简易任务"
                    }
                }, t._l(t.easy, function (e) {
                    return n("Action", {
                        key: e.task_id,
                        nativeOn: {
                            click: function (n) {
                                t.startTask(e)
                            }
                        }
                    }, [n("div", {
                        staticClass: "icon",
                        slot: "icon"
                    }, [n("img", {
                        attrs: {
                            src: e.icon
                        }
                    })]), t._v(" "), n("span", {
                        domProps: {
                            textContent: t._s(e.title)
                        },
                        slot: "app-name"
                    }), t._v(" "), t._l(e.tags, function (e, s) {
                        return n("span", {
                            key: s,
                            staticClass: "tag-box",
                            slot: "desc"
                        }, ["string" == typeof e ? n("span", {
                            staticClass: "tag",
                            domProps: {
                                textContent: t._s(e)
                            }
                        }) : t._e(), t._v(" "), "object" == typeof e && e.text ? n("span", {
                            staticClass: "tag",
                            class: {
                                assertive: "assertive" == e.theme
                            },
                            domProps: {
                                textContent: t._s(" ‧ " + e.text)
                            }
                        }) : t._e(), t._v(" "), "object" == typeof e && 1e3 * e.countdown > t.getNowTime() ? n("span", {
                            staticClass: "tag time-tag",
                            class: {
                                assertive: "assertive" == e.theme
                            }
                        }, [n("count-down", {
                            attrs: {
                                deadline: 1e3 * e.countdown
                            }
                        })], 1) : t._e()])
                    }), t._v(" "), n("div", {
                        staticClass: "reward-content",
                        slot: "reward-wrap"
                    }, [n("span", {
                        staticClass: "plus"
                    }, [t._v("+")]), t._v(" "), n("span", {
                        staticClass: "reward",
                        domProps: {
                            textContent: t._s(parseFloat(e.reward).toFixed(1))
                        }
                    }), t._v(" "), n("span", {
                        staticClass: "yuan"
                    }, [t._v("元")])])], 2)
                })) : t._e()
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "personal-tasks",
                    on: {
                        click: function (e) {
                            t.jumpTo()
                        }
                    }
                }, [n("div", {
                    staticClass: "icon-wrapper"
                }, t._l(t.TaskInfo.icons, function (t, e) {
                    return n("scalable", {
                        key: e,
                        staticClass: "icons",
                        attrs: {
                            width: "52",
                            height: "52"
                        }
                    }, [n("div", [n("img", {
                        attrs: {
                            src: t
                        }
                    })])])
                })), t._v(" "), n("div", {
                    staticClass: "day-tasks"
                }, [t._v(t._s(t.TaskInfo.date_str) + "有"), n("span", [t._v(t._s(t.TaskInfo.total))]), t._v("个" + t._s(t.type) + "任务")]), t._v(" "), n("div", {
                    staticClass: "reward-content"
                }, [n("span", {
                    staticClass: "plus"
                }, [t._v("+")]), t._v(" "), "专属" === t.type ? n("span", {
                    staticClass: "reward",
                    domProps: {
                        textContent: t._s(parseFloat(t.TaskInfo.total_reward).toFixed(1))
                    }
                }) : t._e(), t._v(" "), "探索" === t.type ? n("span", {
                    staticClass: "reward",
                    domProps: {
                        textContent: t._s(t.TaskInfo.total_reward)
                    }
                }) : t._e(), t._v(" "), n("span", {
                    staticClass: "yuan coin"
                }, [t._v(t._s(t.money))])])])
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    directives: [{
                        name: "nav",
                        rawName: "v-nav",
                        value: {
                            title: "芝麻信用认证",
                            showBackButton: !0,
                            onBackButtonClick: t.back
                        },
                        expression: "{title: '芝麻信用认证', showBackButton: true, onBackButtonClick: back }"
                    }],
                    staticClass: "page has-navbar"
                }, [n("div", {
                    staticClass: "page-content"
                }, [t._m(0), t._v(" "), n("div", {
                    staticClass: "zhima-button text-center",
                    on: {
                        click: function (e) {
                            t.bindAgain()
                        }
                    }
                }, [n("span", {
                    staticClass: "text-center"
                }, [t._v("重新认证")])]), t._v(" "), n("div", {
                    staticClass: "back text-center",
                    on: {
                        click: function (e) {
                            t.back()
                        }
                    }
                }, [n("u", [t._v("返回试玩列表")])])])])
            }, staticRenderFns: [
                function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "remind-icon text-center"
                    }, [n("img", {
                        attrs: {
                            src: "//qianka.b0.upaiyun.com/images/664f4b1c03150cbd2c664ad39bea62f1.png",
                            alt: ""
                        }
                    }), n("span", [t._v("认证失败")])])
                }
            ]
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "send-code"
                }, [n("button", {
                    staticClass: "send-code-btn",
                    class: {
                        "button-royal disabled": t.getCodeLock,
                        "button-dark": !t.getCodeLock
                    },
                    domProps: {
                        textContent: t._s(t.getCodeText)
                    },
                    on: {
                        click: function (e) {
                            t.sendCode()
                        }
                    }
                })])
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("span", t._l(t.tags, function (e, s) {
                    return n("span", {
                        key: s,
                        staticClass: "tag-box"
                    }, [s > 0 ? n("span", [t._v(" ‧ ")]) : t._e(), t._v(" "), "string" == typeof e ? n("span", {
                        staticClass: "tag",
                        domProps: {
                            textContent: t._s(e)
                        }
                    }) : t._e(), t._v(" "), "object" == typeof e && e.text ? n("span", {
                        staticClass: "tag",
                        class: {
                            assertive: "assertive" == e.theme,
                            green: "green" == e.theme
                        },
                        domProps: {
                            textContent: t._s(e.text)
                        }
                    }) : t._e(), t._v(" "), "object" == typeof e && 1e3 * e.countdown > t.getNowTime() ? n("span", {
                        staticClass: "tag time-tag",
                        class: {
                            assertive: "assertive" == e.theme
                        }
                    }, [n("count-down", {
                        attrs: {
                            deadline: 1e3 * e.countdown
                        }
                    })], 1) : t._e()])
                }))
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("transition", {
                    attrs: {
                        name: "fade-customer-service"
                    }
                }, [t.show ? n("div", {
                    staticClass: "customer-service",
                    class: {
                        move: t.kameiMove()
                    },
                    style: {
                        bottom: t.pos_bottom + "px"
                    },
                    on: {
                        click: function (e) {
                            t.talkToCustomerService()
                        }
                    }
                }, [n("img", {
                    attrs: {
                        src: "//qianka.b0.upaiyun.com/images/34ce008031c02405a50b4850c3718d8b.png",
                        alt: "咖妹"
                    }
                })]) : t._e()])
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("CustomPopup", {
                    ref: "p"
                }, [n("div", {
                    staticClass: "popup-body popup-reward-v5"
                }, [n("div", {
                    staticClass: "title"
                }, [t._v("获得奖励")]), t._v(" "), n("div", {
                    staticClass: "reward-num"
                }, [n("div", {
                    staticClass: "plus"
                }, [n("img", {
                    attrs: {
                        src: "//assets.qkcdn.com/images/817b17e1aa34eb5a972351f2e9c52dd0.png",
                        alt: ""
                    }
                })]), t._v(" "), n("span", {
                    staticClass: "num"
                }, [t._v(t._s(parseFloat(t.reward)))]), t._v(" "), n("span", {
                    staticClass: "unit"
                }, [t._v("元")])]), t._v(" "), n("LevelIcon", {
                    staticClass: "level",
                    class: {
                        levelUp: t.isLevelUp
                    },
                    attrs: {
                        level: t.levelOld,
                        halo: !1
                    }
                }), t._v(" "), n("LevelIcon", {
                    staticClass: "level-new",
                    class: {
                        levelUpNew: t.isLevelUp
                    },
                    attrs: {
                        level: t.levelNew,
                        halo: !1
                    }
                }), t._v(" "), n("div", {
                    staticClass: "progress"
                }, [n("div", {
                    staticClass: "exp-text"
                }, [n("span", [t._v("Lv." + t._s(t.level))]), t._v(" "), n("span", [t._v(t._s(parseFloat(t.exp)) + "/" + t._s(parseFloat(t.exp_need)) + t._s(t.unit))])]), t._v(" "), n("div", {
                    staticClass: "progress-container"
                }, [n("div", {
                    staticClass: "exp-progress",
                    style: {
                        width: t.expWidth + "px"
                    },
                    attrs: {
                        progress: ""
                    }
                })])]), t._v(" "), n("div", {
                    staticClass: "desc"
                }, [t._v("完成" + t._s(t.taskTypeName) + "任务「" + t._s(t.content) + "」")]), t._v(" "), n("div", {
                    staticClass: "button-coral continue",
                    on: {
                        click: function (e) {
                            t.action()
                        }
                    }
                }, [t._v("继续赚钱")]), t._v(" "), t.showShouTo ? n("div", {
                    staticClass: "button-coral shoutu",
                    on: {
                        click: function (e) {
                            t.goToShoutu()
                        }
                    }
                }, [t._v("收徒赚10元")]) : t._e()], 1)])
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "zs-entrance",
                    on: {
                        click: function (e) {
                            t.$router.forward("/zstasks/lite")
                        }
                    }
                }, [n("div", {
                    staticClass: "icon-wrapper"
                }, t._l(t.zstask_info.icons, function (t, e) {
                    return n("div", {
                        key: e,
                        staticClass: "icon",
                        class: {
                            offset1: 1 == e,
                            offset2: 2 == e
                        }
                    }, [n("img", {
                        attrs: {
                            src: t,
                            alt: ""
                        }
                    })])
                })), t._v(" "), n("div", {
                    staticClass: "total-tip"
                }, [t._v("您有" + t._s(t.zstask_info.total) + "个专属任务")]), t._v(" "), n("div"), t._v(" "), n("div", {
                    staticClass: "reward-content"
                }, [n("span", {
                    staticClass: "plus"
                }, [t._v("+")]), t._v(" "), n("span", {
                    staticClass: "reward",
                    domProps: {
                        textContent: t._s(parseFloat(t.zstask_info.total_reward).toFixed(1))
                    }
                }), t._v(" "), n("span", {
                    staticClass: "yuan"
                }, [t._v("元")])])])
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    directives: [{
                        name: "nav",
                        rawName: "v-nav",
                        value: {
                            title: "芝麻信用认证",
                            showBackButton: !0,
                            onBackButtonClick: t.back
                        },
                        expression: "{title: '芝麻信用认证', showBackButton: true, onBackButtonClick: back }"
                    }],
                    staticClass: "page has-navbar"
                }, [n("div", {
                    staticClass: "page-content"
                }, [t._m(0), t._v(" "), n("div", {
                    staticClass: "zhima-button text-center"
                }, [n("span", {
                    staticClass: "text-center"
                }, [t._v("返回试玩任务（" + t._s(t.second) + "s）")])])])])
            }, staticRenderFns: [
                function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "remind-icon text-center"
                    }, [n("img", {
                        attrs: {
                            src: "//qianka.b0.upaiyun.com/images/2fec065173b77b7a57b35da2fcf0efc4.png",
                            alt: ""
                        }
                    }), n("span", [t._v("认证成功")])])
                }
            ]
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "page"
                }, [n("AnimateHeader", {
                    attrs: {
                        "bg-color": "#fff",
                        "menu-bg-color": "#fff",
                        color: "#3A3A3A",
                        title: "",
                        "on-back-button-click": t.back,
                        expanded: !1,
                        animate: !1,
                        opacity: !0
                    }
                }), t._v(" "), n("scroller", {
                    staticClass: "page-content"
                }, [n("section", {
                    staticClass: "top-section",
                    staticStyle: {
                        "border-bottom": "8px solid #f5f5f5"
                    }
                }, [n("div", {
                    staticClass: "level-info"
                }, [n("level-icon", {
                    attrs: {
                        level: t.level
                    }
                })], 1), t._v(" "), n("div", [n("div", {
                    staticClass: "progress"
                }, [n("div", {
                    staticClass: "perc",
                    style: {
                        width: t.expPerc + "%"
                    }
                }), t._v(" "), n("span", {
                    staticClass: "from"
                }, [t._v(t._s(t._f("addLevelPreStr")(t.level)))]), t._v(" "), n("span", {
                    staticClass: "to"
                }, [t._v(t._s(t._f("rmTrailingZero")(t.level_exp)) + "/" + t._s(t._f("rmTrailingZero")(t.next_level_exp)) + "元")])])]), t._v(" "), n("div", {
                    staticClass: "tips",
                    domProps: {
                        innerHTML: t._s(t.levelTips)
                    }
                })]), t._v(" "), n("section", {
                    staticClass: "section",
                    staticStyle: {
                        "border-bottom": "8px solid #f5f5f5",
                        "padding-bottom": "22px"
                    }
                }, [n("div", {
                    staticClass: "title"
                }, [t._v("您当前等级每日可领奖励")]), t._v(" "), n("div", {
                    staticClass: "short-line"
                }), t._v(" "), 1 === t.claim_level_coin_open ? n("div", [n("div", {
                    staticClass: "level-coin"
                }, [n("span", [t._v(t._s(t.level_coin))]), n("span", [t._v("金币")])])]) : t._e(), t._v(" "), n("div", {
                    staticStyle: {
                        "overflow-x": "auto"
                    }
                }, [t.table_list.length > 0 ? n("b-table", {
                    staticClass: "v-table-overflow",
                    style: {
                        width: 82 * Object.keys(t.table_list[0]).length - 24 + "px"
                    },
                    attrs: {
                        type: 1,
                        data: t.table_list
                    }
                }) : t._e()], 1)]), t._v(" "), n("footer", {
                    staticClass: "section"
                }, [n("div", {
                    staticClass: "title"
                }, [t._v("每日奖励说明")]), t._v(" "), n("div", {
                    staticClass: "short-line"
                }), t._v(" "), n("div", {
                    staticClass: "sc-content"
                }, [t.claim_level_coin_open ? n("div", [n("b-table", {
                    staticClass: "v-table",
                    staticStyle: {
                        width: "100%"
                    },
                    attrs: {
                        cols: [68, 76, 94, 97],
                        data: t.level_list
                    }
                }), t._v(" "), n("div", {
                    staticStyle: {
                        "margin-bottom": "6px",
                        "margin-top": "20px"
                    }
                }, [t._v("1.等级由您的累计收入计算得出，收入越高等级越高。获得试玩、办卡、注册奖励的同时均能提升您的等级。")]), t._v(" "), n("div", {
                    staticStyle: {
                        "text-align": "left",
                        "margin-top": "18px"
                    }
                }, [n("div", {
                    staticStyle: {
                        "margin-bottom": "6px"
                    }
                }, [t._v("2.每次升级后，对应的可获金币数额也会对应提高。您永久享受该等级可获的金币数额，不会过期。")]), t._v(" "), n("div", {
                    staticStyle: {
                        "margin-bottom": "6px"
                    }
                }, [t._v("3.金币将在您每日登录钱咖时自动发放至账户中，24点前未领视为放弃当日奖励。")]), t._v(" "), n("div", {
                    staticStyle: {
                        "margin-bottom": "6px"
                    }
                }, [t._v("4.发现以下相关的作弊行为，钱咖有权取消您已经获得的奖励，包括但不仅限于：\n"), n("br"), t._v("①使用虚拟设备、越狱设备收徒、做任务\n"), n("br"), t._v("②同设备互刷账户的各类赚钱行为\n"), n("br"), t._v("③收虚假徒弟、徒孙")]), t._v(" "), n("div", {
                    staticStyle: {
                        "margin-bottom": "58px"
                    }
                }, [t._v("5.钱咖保留在法律允许范围内对规则的修改权，恕不另行通知改动。")])])], 1) : t._e(), t._v(" "), t.claim_level_coin_open ? t._e() : n("div", [n("div", {
                    staticStyle: {
                        "margin-bottom": "6px"
                    }
                }, [t._v("1.每日奖励对应表（单位：金币）")]), t._v(" "), n("b-table", {
                    staticClass: "v-table",
                    staticStyle: {
                        width: "100%"
                    },
                    attrs: {
                        cols: [68, 76, 94, 97],
                        data: t.level_list
                    }
                }), t._v(" "), n("div", {
                    staticStyle: {
                        "margin-bottom": "6px",
                        "margin-top": "20px"
                    }
                }, [t._v("2.等级由用户加入钱咖5.0之后的累计收入计算得出，收入越高等级越高，获得试玩、专属、办卡、注册奖励的同时还能提升您的等级。")]), t._v(" "), n("div", {
                    staticStyle: {
                        "text-align": "left",
                        "margin-top": "18px"
                    }
                }, [n("div", {
                    staticStyle: {
                        "margin-bottom": "6px"
                    }
                }, [t._v("3.每次升级，您可领取45日该等级对应的奖励。24点前未领视为放弃当日奖励。")]), t._v(" "), n("div", {
                    staticStyle: {
                        "margin-bottom": "6px"
                    }
                }, [t._v("4.每天可领的奖励是根据您当前享受的所有等级奖励叠加算出。（例：您当前为LV.30，即可同时享受Lv.30 + Lv.29 + Lv.28 + ... + LV.1的所有奖励）")]), t._v(" "), n("div", {
                    staticStyle: {
                        "margin-bottom": "6px"
                    }
                }, [t._v("5.如发现以下相关作弊行为，钱咖有权取消您已获得的奖励：\n"), n("br"), t._v("①使用虚拟设备、越狱设备收徒、做任务\n"), n("br"), t._v("②同设备互刷账户的各类赚钱行为\n"), n("br"), t._v("③收虚假徒弟、徒孙")]), t._v(" "), n("div", {
                    staticStyle: {
                        "margin-bottom": "58px"
                    }
                }, [t._v("6.最终解释权归钱咖网络科技（上海）有限公司拥有，钱咖拥有对规则的最终解释权。\n"), n("br"), t._v("在法律允许范围内的规则变更，恕不另行通知。")])])], 1)])])]), t._v(" "), t._m(0)], 1)
            }, staticRenderFns: [
                function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticStyle: {
                            position: "fixed",
                            bottom: "30px",
                            right: "20px",
                            display: "none"
                        }
                    }, [n("img", {
                        staticStyle: {
                            width: "60px",
                            height: "68px"
                        },
                        attrs: {
                            src: "//assets.qkcdn.com/images/c739aa480b8c17537880dee9538e8ae3.png"
                        }
                    })])
                }
            ]
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "page"
                }, [n("div", {
                    staticClass: "animate-header"
                }, [n("a", {
                    staticClass: "menu-item menu-item-left",
                    attrs: {
                        href: "javascript: window.history.back();"
                    }
                }, [n("BackArrow", {
                    attrs: {
                        color: "#3a3a3a"
                    }
                })], 1), t._v(" "), n("div", {
                    staticClass: "header-content"
                }, [t._t("content", [n("h4", {
                    staticClass: "light"
                }, [t._v("请先登录")])])], 2), t._v(" "), t.showMenuButton ? n("div", {
                    staticClass: "menu-item menu-item-right",
                    style: {
                        backgroundColor: t.defaultBgColor ? t.bgColor : t.menuBgColor
                    },
                    on: {
                        click: function (e) {
                            t.onMenu()
                        }
                    }
                }, [t._t("menu", [n("Close", {
                    attrs: {
                        color: t.color
                    }
                })])], 2) : t._e()]), t._v(" "), n("div", {
                    staticClass: "page-content change-nickname"
                }, [n("label", {
                    attrs: {
                        for: "phone"
                    }
                }, [n("div", {
                    staticClass: "title"
                }, [t._v("手机号")]), t._v(" "), n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.showPhone,
                        expression: "showPhone"
                    }],
                    staticClass: "input",
                    attrs: {
                        type: "tel",
                        id: "phone",
                        placeholder: "输入手机号码",
                        maxlength: "13",
                        readonly: "",
                        unselectable: "on"
                    },
                    domProps: {
                        value: t.showPhone
                    },
                    on: {
                        input: function (e) {
                            e.target.composing || (t.showPhone = e.target.value)
                        }
                    }
                })]), t._v(" "), n("div", {
                    staticClass: "division"
                }), t._v(" "), n("button", {
                    staticClass: "button button-clear btn-get-code",
                    class: {
                        "button-royal disabled": t.getCodeLock,
                        "button-dark": !t.getCodeLock
                    },
                    domProps: {
                        textContent: t._s(t.getCodeText)
                    },
                    on: {
                        click: function (e) {
                            t.sendCode()
                        }
                    }
                }), t._v(" "), n("div", {
                    staticClass: "bottom-line"
                }), t._v(" "), n("label", {
                    attrs: {
                        for: "code"
                    }
                }, [n("div", {
                    staticClass: "title"
                }, [t._v("验证码")]), t._v(" "), n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.form.code,
                        expression: "form.code"
                    }],
                    staticClass: "input",
                    staticStyle: {
                        color: "#000"
                    },
                    attrs: {
                        type: "tel",
                        id: "code",
                        placeholder: "输入验证码"
                    },
                    domProps: {
                        value: t.form.code
                    },
                    on: {
                        input: function (e) {
                            e.target.composing || (t.form.code = e.target.value)
                        }
                    }
                }), t._v(" "), n("div", {
                    staticClass: "bottom-line last"
                })]), t._v(" "), n("button", {
                    staticClass: "button button-submit",
                    class: {
                        "can-submit": t.canSubmit,
                        "button-disabled": !t.canSubmit
                    },
                    on: {
                        click: function (e) {
                            t.login()
                        }
                    }
                }, [t._v("提交")]), t._v(" "), n("p", {
                    staticClass: "assertive link-unbind-phone",
                    on: {
                        click: t.goRegister
                    }
                }, [t._v("\n      限此手机绑定的账号领取，号码已遗失"), n("span", [t._v("注册新用户")])])])])
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "page page-explore"
                }, [n("AnimateHeader", {
                    attrs: {
                        "bg-color": "#4A90E2",
                        "menu-bg-color": "#4586D2",
                        color: "#fff",
                        title: "探索任务",
                        "sub-title": "① 领取任务 &nbsp;② 开始探索 &nbsp;③ 获得金币 &nbsp;",
                        "on-back-button-click": t.back,
                        expanded: !0,
                        animate: !1
                    }
                }), t._v(" "), n("div", {
                    staticClass: "page-content explore-content"
                }, [n("div", {
                    staticClass: "tab"
                }, [n("div", {
                    staticClass: "tab-item",
                    class: {
                        active: 1 == t.index
                    },
                    on: {
                        click: function (e) {
                            t.tabClick(1)
                        }
                    }
                }, [n("span", [t._v("我的任务")]), t._v(" "), n("div", {
                    staticClass: "selected"
                }), t._v(" "), t.showTip ? n("div", {
                    staticClass: "new-tip"
                }, [t._v("有啦!")]) : t._e()]), t._v(" "), n("div", {
                    staticClass: "tab-item",
                    class: {
                        active: 2 == t.index
                    },
                    on: {
                        click: function (e) {
                            t.tabClick(2)
                        }
                    }
                }, [n("span", [t._v("任务广场")]), t._v(" "), n("div", {
                    staticClass: "selected"
                })])]), t._v(" "), 2 == t.index && t.taskTist.length > 0 ? n("div", {
                    staticClass: "tip"
                }, [t._v("最多同时领取5个任务，尽量挑选感兴趣的应用哟~")]) : t._e(), t._v(" "), 1 == t.index ? n("div", [t._l(t.myList, function (e, s) {
                    return t.myList.length > 0 ? n("div", {
                        key: s,
                        staticClass: "explore-block my-explore"
                    }, [n("div", {
                        staticClass: "title"
                    }, [t._v(t._s(e.date))]), t._v(" "), t._l(e.explore_tasks, function (s, a) {
                        return n("ExploreCard", {
                            key: a,
                            attrs: {
                                task: s
                            },
                            nativeOn: {
                                click: function (n) {
                                    t.start(e.date, s)
                                }
                            }
                        })
                    })], 2) : t._e()
                }), t._v(" "), 0 === t.myList.length ? n("div", {
                    staticClass: "no-content"
                }, [n("div", {
                    staticClass: "remind-title"
                }, [t._v("暂无任务")]), t._v(" "), n("div", {
                    staticClass: "remind-tip"
                }, [t._v("可在任务广场中领取")]), t._v(" "), n("img", {
                    attrs: {
                        src: "//assets.qkcdn.com/images/1b477a36e18b9e57d89b1a01ea3e4c21.png",
                        alt: ""
                    }
                })]) : t._e(), t._v(" "), 0 !== t.myList.length ? n("img", {
                    staticClass: "copyright-img",
                    attrs: {
                        src: "//assets.qkcdn.com/images/e08aa713e2ccaeda07de1f0091dc3a85.png"
                    }
                }) : t._e()], 2) : t._e(), t._v(" "), 2 == t.index ? n("div", [t.taskTist.length > 0 ? n("div", {
                    staticClass: "explore-block"
                }, [n("div", {
                    staticClass: "title"
                }, [t._v("任务广场")]), t._v(" "), t.in_compare > 0 ? n("div", {
                    staticClass: "sub-title"
                }, [t._v("还有" + t._s(t.in_compare) + "个任务正在匹配，请稍后刷新…")]) : t._e(), t._v(" "), t._l(t.taskTist, function (e, s) {
                    return n("ExploreCard", {
                        key: s,
                        attrs: {
                            task: e
                        },
                        nativeOn: {
                            click: function (n) {
                                t.acquire(e)
                            }
                        }
                    })
                })], 2) : t._e(), t._v(" "), 0 !== t.taskTist.length || t.is_jail_broken ? t._e() : n("div", {
                    staticClass: "no-content"
                }, [n("div", {
                    staticClass: "remind-title"
                }, [t._v("抢光啦")]), t._v(" "), n("div", {
                    staticClass: "remind-tip"
                }, [t._v("常来逛哟，任务不定时刷新")]), t._v(" "), n("img", {
                    attrs: {
                        src: "//assets.qkcdn.com/images/1b477a36e18b9e57d89b1a01ea3e4c21.png",
                        alt: ""
                    }
                })]), t._v(" "), n("JailBroken"), t._v(" "), 0 === t.taskTist.length || t.is_jail_broken ? t._e() : n("img", {
                    staticClass: "copyright-img",
                    attrs: {
                        src: "//assets.qkcdn.com/images/e08aa713e2ccaeda07de1f0091dc3a85.png"
                    }
                })], 1) : t._e()]), t._v(" "), n("StartExplorePopup", {
                    ref: "exploreDetail",
                    attrs: {
                        callback: t.resetMaskVisible
                    }
                }), t._v(" "), n("GiveUpTaskPopup", {
                    ref: "giveupTasks"
                }), t._v(" "), t.showResetMask ? n("div", {
                    staticClass: "transparent-bg",
                    on: {
                        click: function (e) {
                            t.resetExplore()
                        }
                    }
                }) : t._e()], 1)
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    directives: [{
                        name: "nav",
                        rawName: "v-nav",
                        value: {
                            hideNavbar: !0
                        },
                        expression: "{hideNavbar: true}"
                    }],
                    staticClass: "page",
                    class: {
                        "page-rongyuka-dashboard": t.isInRongYuKa
                    }
                }, [n("div", {
                    ref: "scroller",
                    staticClass: "page-content dashboard-content"
                }, [n("div", {
                    attrs: {
                        id: "top"
                    }
                }), t._v(" "), n("header", [t.showBindTip ? n("section", {
                    staticClass: "bind-tip",
                    on: {
                        click: function (e) {
                            t.$router.forward("/user/bindMobile/0")
                        }
                    }
                }, [n("span", [t._v("您当前的模式无法保存收益，请尽快")]), t._v(" "), n("span", [t._v("绑定手机")])]) : t._e(), t._v(" "), n("HeaderInfo")], 1), t._v(" "), n("section", {
                    staticClass: "entrances"
                }, [n("section", [n("div", {
                    staticClass: "module-title"
                }, [t._v("赚钱升级")]), t._v(" "), n("div", {
                    staticClass: "resc",
                    staticStyle: {
                        "margin-bottom": "11px"
                    }
                }, [t._v("全部真实现金任务 · 支持微信/支付宝提现")]), t._v(" "), n("column-items-top", {
                    attrs: {
                        list: t.entrancesTop
                    }
                }), t._v(" "), n("column-items-middle", {
                    staticStyle: {
                        padding: "0 5px"
                    },
                    attrs: {
                        list: t.entrancesMiddle
                    }
                })], 1), t._v(" "), t.entrancesBottom.length > 0 && 1 === t.is_inside ? n("section", {
                    staticStyle: {
                        "margin-top": "44px"
                    }
                }, [n("div", {
                    staticClass: "module-title"
                }, [t._v("金币专区")]), t._v(" "), n("div", {
                    staticClass: "resc",
                    staticStyle: {
                        "margin-bottom": "20px"
                    }
                }, [t._v("海量金币轻松赚 · 可探索可换物")]), t._v(" "), n("column-items", {
                    staticStyle: {
                        padding: "0 5px"
                    },
                    attrs: {
                        list: t.entrancesBottom
                    }
                })], 1) : t._e()]), t._v(" "), t.isInRongYuKa ? t._e() : n("footer", [n("img", {
                    staticClass: "reminder",
                    attrs: {
                        src: "//assets.qkcdn.com/images/aeffaf497506625dfb0055e21a9bbbdd.png"
                    }
                }), t._v(" "), n("div", {
                    staticStyle: {
                        height: "10px"
                    }
                })]), t._v(" "), t.isInRongYuKa ? n("read-page", {
                    attrs: {
                        "fetch-reading-list": t.fetchMuchTimesIfNoReadingData,
                        "is-try-loading": t.startTryThreeTimesFetchReading,
                        "is-loading": t.isReadingListLoading,
                        "is-loading-fail": t.isReadingListLoadingFail
                    }
                }) : t._e()], 1), t._v(" "), t.isInRongYuKa ? n("div", {
                    staticClass: "go-top",
                    class: {
                        "go-top-show": t.isGoTopShow
                    },
                    on: {
                        click: t.scrollToTop
                    }
                }, [n("img", {
                    attrs: {
                        src: "//assets.qkcdn.com/images/f8de09c9f4e31c2be116318d5b6a2a60.png"
                    }
                })]) : t._e(), t._v(" "), t.showFlow ? n("div", {
                    staticClass: "flow-backdrop",
                    on: {
                        click: function (e) {
                            t.nextStep()
                        }
                    }
                }, [1 == t.flowStep ? n("div", {
                    staticClass: "first"
                }, [n("img", {
                    attrs: {
                        src: "//assets.qkcdn.com/images/ab47cc34dc81d466437919fa213f3e31.png",
                        alt: ""
                    }
                })]) : t._e(), t._v(" "), 2 == t.flowStep ? n("div", {
                    staticClass: "second"
                }, [n("img", {
                    attrs: {
                        src: "//assets.qkcdn.com/images/f93cf156c08e8218823eb9d2b96c6f8c.png",
                        alt: ""
                    }
                })]) : t._e()]) : t._e(), t._v(" "), t.needUpgradeForce ? n("div", {
                    staticClass: "upgrade-backdrop",
                    on: {
                        click: function (e) {
                            t.$router.forward("/upgrade")
                        }
                    }
                }) : t._e(), t._v(" "), t.needPopupOpen ? n("div", {
                    staticClass: "upgrade-backdrop",
                    on: {
                        click: function (e) {
                            t.popupOpen()
                        }
                    }
                }) : t._e(), t._v(" "), n("AssistantUnopen", {
                    attrs: {
                        mode: "manual"
                    }
                }), t._v(" "), n("InvitePopup", {
                    ref: "invite"
                }), t._v(" "), n("OpenRongyuka", {
                    ref: "open"
                })], 1)
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "punch"
                }, [n("div", {
                    staticClass: "title"
                }, [t.groupinfo.is_open ? t.groupinfo.is_open && 5 !== t.groupinfo.current_num ? n("span", [t._v("还差"), n("em", [t._v(t._s(t.groupinfo.total_num - t.groupinfo.current_num))]), t._v("人开团")]) : t.groupinfo.the_day || 5 !== t.groupinfo.current_num ? 5 === t.groupinfo.current_num && t.groupinfo.today_clock_num < 5 ? n("span", [t._v("今日"), n("i", {
                    staticStyle: {
                        margin: "0 3px"
                    }
                }, [t._v(t._s(5 - t.groupinfo.today_clock_num))]), t._v("人未打卡")]) : n("span", [t._v("今日已全部打卡")]) : n("span", [n("i", [t._v("明日")]), t._v("开始打卡")]) : n("span", [t._v("先解锁，后开团")])]), t._v(" "), n("div", {
                    staticClass: "sub-title",
                    domProps: {
                        textContent: t._s(t.groupinfo.is_open ? "已打卡的团员头像将自动点亮" : "团长收益翻倍哦")
                    }
                }), t._v(" "), n("div", {
                    staticClass: "groun-punch"
                }, [n("ul", {
                    staticClass: "clearfix"
                }, [n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !t.groupinfo.is_open,
                        expression: "!groupinfo.is_open"
                    }],
                    staticClass: "clearfix"
                }, t._l(t.groupinfo.total_num, function (e) {
                    return n("li", {
                        key: e,
                        staticClass: "lock",
                        on: {
                            click: function (e) {
                                t.deblocking()
                            }
                        }
                    }, [t._m(0, !0), t._v(" "), n("div", {
                        staticClass: "invitename name"
                    }, [t._v("待解锁")])])
                })), t._v(" "), n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.groupinfo.is_open,
                        expression: "groupinfo.is_open"
                    }],
                    staticClass: "clearfix"
                }, [t._l(t.groupinfo.members, function (e, s) {
                    return n("li", {
                        key: e,
                        staticClass: "unlock"
                    }, [n("div", {
                        class: 1 === t.groupinfo.members[s].role ? "avatar role" : "avatar normal"
                    }, [n("img", {
                        class: 0 === t.groupinfo.members[s].is_clock && 5 === t.groupinfo.current_num && t.groupinfo.the_day ? "unClock" : "",
                        attrs: {
                            src: e.icon
                        }
                    }), n("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: 1 === t.groupinfo.members[s].role,
                            expression: "groupinfo.members[index].role === 1"
                        }]
                    }, [t._v("团长")])]), t._v(" "), n("div", {
                        staticClass: "name",
                        class: 0 === t.groupinfo.members[s].is_clock && 5 === t.groupinfo.current_num ? "unClockname" : ""
                    }, [t._v(t._s(t.groupinfo.members[s].nickname))])])
                }), t._v(" "), t._l(5 - t.groupinfo.members.length, function (e, s) {
                    return 1 === t.groupinfo.current_role ? n("li", {
                        key: s,
                        staticClass: "unlock",
                        on: {
                            click: function (e) {
                                t.flag && t.invitedFri()
                            }
                        }
                    }, [t._m(1, !0), t._v(" "), n("div", {
                        staticClass: "name invitename"
                    }, [t._v("邀请好友")])]) : t._e()
                }), t._v(" "), t._l(5 - t.groupinfo.members.length, function (e, s) {
                    return 2 === t.groupinfo.current_role ? n("li", {
                        key: s,
                        staticClass: "unlock stay",
                        on: {
                            click: function (e) {
                                1 === t.groupinfo.current_role && t.invitedFri()
                            }
                        }
                    }, [t._m(2, !0), t._v(" "), n("div", {
                        staticClass: "name invitename"
                    }, [t._v("待加入")])]) : t._e()
                })], 2)])]), t._v(" "), n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !t.groupinfo.is_open,
                        expression: "!groupinfo.is_open"
                    }],
                    staticClass: "deblocking",
                    on: {
                        click: function (e) {
                            t.deblocking()
                        }
                    }
                }, [n("span", [t._v("支付200金币解锁")])])])
            }, staticRenderFns: [
                function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "avatar"
                    }, [n("img", {
                        attrs: {
                            src: "//assets.qkcdn.com/images/47dc79c524a5821a02f78a6635d9766e.png"
                        }
                    })])
                },
                function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "avatar"
                    }, [n("img", {
                        attrs: {
                            src: "//assets.qkcdn.com/images/06d1d5e001647b1e49bdcad5295f27b6.png"
                        }
                    })])
                },
                function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "avatar"
                    }, [n("img", {
                        attrs: {
                            src: "//assets.qkcdn.com/images/7cd663527d3c4e0e66515d1292084bd3.png"
                        }
                    })])
                }
            ]
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "reward-pane"
                }, [n("section", {
                    staticClass: "income"
                }, [n("div", {
                    staticClass: "avatar",
                    on: {
                        click: function (e) {
                            t.forward("/user")
                        }
                    }
                }, [t.open_msg && t.msg_num > 0 ? n("span", {
                    staticClass: "msg-spot",
                    class: {
                        "letter-spac": t.letterSpacing,
                        "circle-border": t.circleBorder
                    }
                }, [t._v(t._s(t._f("limitLen")(t.msg_num)))]) : t._e(), t._v(" "), n("img", {
                    staticClass: "avatar-img",
                    attrs: {
                        src: t.avatar,
                        alt: ""
                    }
                }), t._v(" "), n("img", {
                    staticClass: "tag",
                    attrs: {
                        src: "//assets.qkcdn.com/images/5a56f077db0c226acca7653c42f5fc3e.png",
                        alt: ""
                    }
                })]), t._v(" "), n("div", {
                    staticClass: "property coin",
                    on: {
                        click: function (e) {
                            t.forward("/user/userCoin")
                        }
                    }
                }, [n("div", {
                    staticClass: "unit"
                }, [t._v("金币")]), t._v(" "), n("div", {
                    staticClass: "num",
                    attrs: {
                        goCoin: ""
                    },
                    domProps: {
                        textContent: t._s(parseFloat(t.coin_balance))
                    }
                })]), t._v(" "), n("div", {
                    staticClass: "property balance",
                    on: {
                        click: function (e) {
                            t.forward("/user/userBalance")
                        }
                    }
                }, [t._m(0), t._v(" "), n("div", {
                    staticClass: "num"
                }, [n("span", {
                    attrs: {
                        balanceNum: "",
                        changeBalance: ""
                    },
                    domProps: {
                        textContent: t._s(parseFloat(t.balance))
                    }
                }), n("span", {
                    staticClass: "unit"
                }, [t._v("元")])])])]), t._v(" "), n("section", {
                    staticClass: "reward-info"
                }, [n("LevelIcon", {
                    staticClass: "level",
                    attrs: {
                        halo: !1,
                        level: t.level_info.level
                    },
                    nativeOn: {
                        click: function (e) {
                            t.forward("/level")
                        }
                    }
                }), t._v(" "), t.has_rewarded ? t._e() : n("span", {
                    staticClass: "remind-title"
                }, [t._v("今日可领")]), t._v(" "), t.has_rewarded ? n("span", {
                    staticClass: "remind-title"
                }, [t._v("明日可领")]) : t._e(), t._v(" "), n("div", {
                    staticClass: "today-reward"
                }, [n("span", {
                    staticClass: "num",
                    attrs: {
                        perDay: ""
                    },
                    domProps: {
                        textContent: t._s(t.reward_coin)
                    }
                }), n("span", {
                    staticClass: "unit"
                }, [t._v("金币")])]), t._v(" "), t.level_info.next_level < 50 && 0 === t.claim_level_coin_open ? n("span", {
                    staticClass: "remind-more"
                }, [t._v("再赚"), n("b", [t._v(t._s(parseFloat(t.level_info.next_level_need)) + "元")]), t._v("即可升级，每日多领"), n("b", [t._v(t._s(parseFloat(t.level_info.next_level_more_coin)) + "金币")])]) : t._e(), t._v(" "), t.level_info.next_level < 50 && 1 === t.claim_level_coin_open ? n("span", {
                    staticClass: "remind-more"
                }, [t._v("再赚"), n("b", [t._v(t._s(parseFloat(t.level_info.next_level_need)) + "元")]), t._v("即可升级，每日可领"), n("b", [t._v(t._s(parseFloat(t.next_level_coin)) + "金币")])]) : t._e(), t._v(" "), 50 == t.level_info.next_level ? n("span", [t._v("小彩蛋！请联系客服获取~")]) : t._e(), t._v(" "), n("div", {
                    staticClass: "button-coral reward-button",
                    class: {
                        disabled: t.has_rewarded
                    },
                    on: {
                        click: function (e) {
                            t.gold()
                        }
                    }
                }, [t.has_rewarded ? t._e() : n("span", [t._v("今日领钱")]), t._v(" "), t.has_rewarded ? n("span", [t._v("明日再来")]) : t._e()])], 1), t._v(" "), t.online_reward_open ? n("section", {
                    staticClass: "online-info"
                }, [n("div", {
                    staticClass: "info apprentice"
                }, [n("span", {
                    staticClass: "title"
                }, [t._v("徒弟上线")]), t._v(" "), n("br"), t._v(" "), n("span", {
                    staticClass: "online-num"
                }, [n("span", [t._v(t._s(t.tudi_online_num))]), n("span", [t._v("人")])])]), t._v(" "), t._m(1), t._v(" "), n("div", {
                    staticClass: "info grandson"
                }, [n("span", {
                    staticClass: "title"
                }, [t._v("徒孙上线")]), t._v(" "), n("br"), t._v(" "), n("span", {
                    staticClass: "online-num"
                }, [n("span", [t._v(t._s(t.tusun_online_num))]), n("span", [t._v("人")])])]), t._v(" "), n("div", {
                    staticClass: "online-reward-btn",
                    class: {
                        disabled: !t.has_new_tudi
                    },
                    on: {
                        click: function (e) {
                            t.forward("/reward")
                        }
                    }
                }, [t.has_new_tudi ? t._e() : n("img", {
                    attrs: {
                        src: "//assets.qkcdn.com/images/5b5f76bfc52351151182bd9ec1f1ebeb.png",
                        alt: ""
                    }
                }), t._v(" "), n("span", [t._v("上线奖励")])])]) : t._e(), t._v(" "), n("section", [t.clock_switch ? n("div", {
                    staticClass: "group-punch"
                }, [t.clock_extends.has_team || t.clock_countdown_day ? t._e() : n("div", {
                    staticClass: "noTeam-punch"
                }, [n("div", {
                    staticClass: "punch-text"
                }, [t._v("组团打卡领红包 了解一下？")]), t._v(" "), n("div", {
                    staticClass: "punch-button",
                    on: {
                        click: function (e) {
                            t.forward("/group")
                        }
                    }
                }, [t._v("组团打卡")])]), t._v(" "), !t.clock_extends.has_team && t.clock_countdown_day ? n("div", {
                    staticClass: "noTeam-punch"
                }, [n("div", {
                    staticClass: "punch-text"
                }, [t._v("组团打卡领红包 了解一下？")]), t._v(" "), n("div", {
                    staticClass: "punch-button",
                    on: {
                        click: function (e) {
                            t.forward("/group")
                        }
                    }
                }, [t._v("最后" + t._s(t.clock_countdown_day) + "天")])]) : t._e(), t._v(" "), t.clock_extends.has_team && !t.clock_extends.clock_days && t.clock_extends.current_num < 5 ? n("div", {
                    staticClass: "completed-punch build-punch"
                }, [t._m(2), t._v(" "), n("div", {
                    staticClass: "punch-button",
                    on: {
                        click: function (e) {
                            t.forward("/group")
                        }
                    }
                }, [t._v("组团打卡")])]) : t._e(), t._v(" "), t.clock_extends.has_team && !t.clock_extends.clock_flag && 5 === t.clock_extends.current_num ? n("div", {
                    staticClass: "completed-punch"
                }, [t._m(3), t._v(" "), n("div", {
                    staticClass: "punch-button",
                    on: {
                        click: function (e) {
                            t.forward("/group")
                        }
                    }
                }, [t._v("组团打卡")])]) : t._e(), t._v(" "), t.clock_extends.has_team && t.clock_extends.clock_flag ? n("div", {
                    staticClass: "hasTeam-punch"
                }, [n("div", {
                    staticClass: "complete-punch"
                }, [n("div", {
                    staticClass: "complete-text"
                }, [t._v("今日打卡")]), t._v(" "), n("div", {
                    staticClass: "complete-peo"
                }, [n("span", [t._v(t._s(t.clock_extends.today_clock_members))]), t._v("人")])]), t._v(" "), n("div", {
                    staticClass: "unfinish-punch"
                }, [n("div", {
                    staticClass: "unfinish-text"
                }, [t._v("连续打卡")]), t._v(" "), n("div", {
                    staticClass: "unfinish-peo"
                }, [n("span", [t._v(t._s(t.clock_extends.clock_days))]), t._v("天")])]), t._v(" "), n("div", {
                    staticClass: "punch-button",
                    on: {
                        click: function (e) {
                            t.forward("/group")
                        }
                    }
                }, [t._v("组团打卡")])]) : t._e()]) : t._e()])])
            }, staticRenderFns: [
                function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "unit"
                    }, [t._v("零钱"), n("span", [t._v("「提现」")])])
                },
                function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "separator"
                    }, [n("img", {
                        attrs: {
                            src: "//assets.qkcdn.com/images/908d6d482310a7abc31a36211ee97be3.png",
                            alt: ""
                        }
                    })])
                },
                function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "completed-text build-text"
                    }, [t._v("团队组建中"), n("br"), t._v("满5人即开团")])
                },
                function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "completed-text"
                    }, [t._v("团队已组建"), n("br"), t._v("明日开始打卡")])
                }
            ]
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "popup-container popup-invite-hongbao",
                    class: {
                        "popup-showing active": 1 === t.state,
                        "popup-showing popup-hidden": 2 === t.state
                    },
                    attrs: {
                        effect: "new-year"
                    }
                }, [n("div", {
                    staticClass: "popup popup-invite-hongbao"
                }, [n("div", {
                    staticClass: "popup-body"
                }, [n("div", {
                    staticClass: "tips"
                }, [t._v("每次付款前都可以来领一次哦")]), t._v(" "), n("div", {
                    staticClass: "remind"
                }, [t._v("您的领取码已生成")]), t._v(" "), n("div", {
                    staticClass: "invite-code"
                }, [t._v(t._s(t.invite_code))]), t._v(" "), t._m(0), t._v(" "), t._m(1), t._v(" "), n("div", {
                    staticClass: "copy-button",
                    class: {
                        copyed: t.copyed
                    },
                    attrs: {
                        "data-clipboard-text": t.invite_code
                    },
                    on: {
                        click: function (e) {
                            t.copy()
                        }
                    }
                }, [t._v(t._s(t.buttonText))]), t._v(" "), n("div", {
                    staticClass: "to-ali-button",
                    class: {
                        copyed: t.copyed
                    },
                    on: {
                        click: function (e) {
                            t.toAli()
                        }
                    }
                }, [t._v("去支付宝粘贴")])]), t._v(" "), n("div", {
                    staticClass: "close",
                    on: {
                        click: function (e) {
                            t.hide()
                        }
                    }
                }, [n("img", {
                    attrs: {
                        src: "//assets.qkcdn.com/images/4da3039bc3c0f6ece75d0f990df76359.png",
                        alt: ""
                    }
                })])])])
            }, staticRenderFns: [
                function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "action-remind"
                    }, [n("div", [t._v("打开支付宝搜索“511475023”")]), t._v(" "), n("div", [t._v("即可领取红包")])])
                },
                function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "use-remind"
                    }, [n("div", [t._v("红包线下付款可用")]), t._v(" "), n("div", [t._v("余额宝支付补贴最大")])])
                }
            ]
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "popup-container",
                    class: {
                        "popup-showing active": 1 == t.state,
                        "popup-showing popup-hidden": 2 == t.state
                    },
                    attrs: {
                        effect: t.effect
                    }
                }, [n("div", {
                    staticClass: "popup von-popup"
                }, [t.title ? n("div", {
                    staticClass: "popup-head"
                }, [n("div", {
                    staticClass: "popup-title",
                    domProps: {
                        innerHTML: t._s(t.title)
                    }
                })]) : t._e(), t._v(" "), n("div", {
                    staticClass: "popup-body",
                    class: {
                        "no-content": 0 == t.state
                    }
                }, [t._t("default"), t._v(" "), "true" == t.showClose && "false" == t.btnLengthways ? n("button", {
                    staticClass: "button button-royal button-small button-clear button-close",
                    on: {
                        click: function (e) {
                            t.hide(-1)
                        }
                    }
                }, [n("i", {
                    staticClass: "ion-ios-close-empty"
                })]) : t._e(), t._v(" "), t.buttons.length ? n("div", {
                    staticClass: "hairline-bottom"
                }) : t._e()], 2), t._v(" "), t.buttons.length > 0 && "false" == t.btnLengthways ? n("div", {
                    staticClass: "popup-buttons"
                }, t._l(t.buttons, function (e, s) {
                    return n("button", {
                        staticClass: "button button-block",
                        class: {
                            "button-assertive": "assertive" == e.theme,
                            "button-positive": "positive" == e.theme,
                            "button-blanced": "blanced" == e.theme,
                            "button-energized": "energized" == e.theme,
                            "button-calm": "calm" == e.theme,
                            "button-royal": "royal" == e.theme,
                            "button-dark": "dark" == e.theme,
                            "button-light": "light" == e.theme,
                            "button-light": !e.theme,
                            obvious: s == t.obvious
                        },
                        on: {
                            click: function (e) {
                                t.hide(s)
                            }
                        }
                    }, [n("span", {
                        domProps: {
                            textContent: t._s(e.text)
                        }
                    }), t._v(" "), t.buttons.length > 1 ? n("div", {
                        staticClass: "hairline-right"
                    }) : t._e()])
                })) : t._e(), t._v(" "), t.buttons.length > 0 && "true" == t.btnLengthways ? n("div", {
                    staticClass: "popup-buttons-lengthways"
                }, [t._l(t.buttons, function (e, s) {
                    return n("button", {
                        staticClass: "button button-block",
                        class: {
                            "button-assertive": "assertive" == e.theme,
                            "button-positive": "positive" == e.theme,
                            "button-blanced": "blanced" == e.theme,
                            "button-energized": "energized" == e.theme,
                            "button-calm": "calm" == e.theme,
                            "button-royal": "royal" == e.theme,
                            "button-dark": "dark" == e.theme,
                            "button-light": "light" == e.theme,
                            "button-light": !e.theme,
                            obvious: s == t.obvious
                        },
                        on: {
                            click: function (e) {
                                t.hide(s)
                            }
                        }
                    }, [n("span", {
                        domProps: {
                            textContent: t._s(e.text)
                        }
                    })])
                }), t._v(" "), n("button", {
                    staticClass: "button button-block button-light",
                    on: {
                        click: function (e) {
                            t.hide(-1)
                        }
                    }
                }, [n("span", [t._v("取消")])])], 2) : t._e()])])
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement;
                return (t._self._c || e)("div", {
                    staticClass: "action-banner"
                }, [t._t("banner")], 2)
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    directives: [{
                        name: "nav",
                        rawName: "v-nav",
                        value: {
                            hideNavbar: !0
                        },
                        expression: "{hideNavbar: true}"
                    }],
                    staticClass: "page message-content"
                }, [n("AnimateHeader", {
                    attrs: {
                        "bg-color": "#f5f5f5",
                        "menu-bg-color": "#f0f0f0",
                        color: "#3A3A3A",
                        title: "消息中心",
                        "on-back-button-click": t.back,
                        expanded: !1,
                        animate: !1
                    }
                }), t._v(" "), t.isEmpty ? n("div", {
                    staticClass: "empty"
                }, [n("p", [t._v("暂无消息")]), t._v(" "), n("img", {
                    attrs: {
                        src: "//assets.qkcdn.com/images/35d7169382eb728c0da26f419c1c9e79.png",
                        alt: ""
                    }
                })]) : t._e(), t._v(" "), n("scroller", {
                    ref: "scroller",
                    class: {
                        "show-no-data": t.showNoData
                    },
                    staticStyle: {
                        padding: "50px 0 0 20px"
                    },
                    attrs: {
                        "on-infinite": t.infinite,
                        noDataText: ""
                    }
                }, [t._l(t.messageList, function (e) {
                    return t.isEmpty ? t._e() : n("div", {
                        staticClass: "news-wrap",
                        on: {
                            click: function (n) {
                                t.jumpTo(e)
                            }
                        }
                    }, [n("div", {
                        staticClass: "news-head"
                    }, [0 === e.is_read ? n("span", {
                        staticClass: "news-spot"
                    }) : t._e(), t._v(" "), n("span", {
                        staticClass: "news-title"
                    }, [t._v(t._s(e.title))]), t._v(" "), n("span", {
                        staticClass: "news-time"
                    }, [t._v(t._s(e.format_msg_time))])]), t._v(" "), n("div", {
                        staticClass: "news-content",
                        domProps: {
                            innerHTML: t._s(e.content)
                        }
                    })])
                }), t._v(" "), t.noMoreData ? n("footer", [n("span", {
                    staticClass: "line"
                }), t._v(" "), n("span", [t._v("没有其他消息啦")]), t._v(" "), n("span", {
                    staticClass: "line"
                })]) : t._e()], 2)], 1)
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", [t.recommends.length > 0 ? n("ActionList", {
                    attrs: {
                        title: "推荐"
                    }
                }, t._l(t.recommends, function (e, s) {
                    return n("Action", {
                        key: s,
                        nativeOn: {
                            click: function (n) {
                                t.jump(e)
                            }
                        }
                    }, [n("div", {
                        staticClass: "icon",
                        slot: "icon"
                    }, [n("img", {
                        attrs: {
                            src: e.icon
                        }
                    })]), t._v(" "), n("span", {
                        domProps: {
                            textContent: t._s(e.title)
                        },
                        slot: "app-name"
                    }), t._v(" "), n("Tags", {
                        attrs: {
                            tags: e.tags
                        },
                        slot: "desc"
                    }), t._v(" "), n("div", {
                        staticClass: "reward-content",
                        slot: "reward-wrap"
                    }, [n("span", {
                        staticClass: "plus",
                        domProps: {
                            textContent: t._s("fanli" === e.portalName ? "返" : "loan" === e.portalName ? "借" : "+")
                        }
                    }), t._v(" "), n("span", {
                        staticClass: "reward",
                        domProps: {
                            textContent: t._s(e.reward)
                        }
                    }), t._v(" "), n("span", {
                        staticClass: "yuan",
                        domProps: {
                            textContent: t._s("fanli" === e.portalName ? "%" : "credit" === e.portalName ? "元" : "元／日")
                        }
                    })])], 1)
                })) : t._e()], 1)
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("svg", {
                    attrs: {
                        width: "11px",
                        height: "16px",
                        viewBox: "0 0 11 16",
                        version: "1.1",
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink"
                    }
                }, [n("g", {
                    attrs: {
                        stroke: "none",
                        "stroke-width": "1",
                        fill: "none",
                        "fill-rule": "evenodd",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                    }
                }, [n("g", {
                    attrs: {
                        transform: "translate(-24.000000, -106.000000)",
                        stroke: t.color,
                        fill: t.color
                    }
                }, [n("g", {
                    attrs: {
                        transform: "translate(0.000000, 64.000000)"
                    }
                }, [n("g", {
                    attrs: {
                        transform: "translate(24.000000, 41.000000)"
                    }
                }, [n("g", {
                    attrs: {
                        transform: "translate(1.000000, 1.000000)"
                    }
                }, [n("path", {
                    attrs: {
                        d: "M2.75,7.25 L9,1 L8,0 L0,8 L1,9 L2.75,7.25 Z M3.5,9.5 L9,15 L8,16 L2.5,10.5 L3.5,9.5 Z"
                    }
                })])])])])])])
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "page-read"
                }, [n("div", {
                    staticClass: "page-header"
                }, [n("div", {
                    attrs: {
                        id: "reading"
                    }
                }), t._v(" "), n("read-menus", {
                    attrs: {
                        "fetch-reading-list": t.fetchReadingList
                    }
                })], 1), t._v(" "), n("div", {
                    staticClass: "tips-bar",
                    on: {
                        click: function (e) {
                            t.forwardTo("/readRules")
                        }
                    }
                }, [n("img", {
                    attrs: {
                        src: "//assets.qkcdn.com/images/c7ed4666124bf00b66f3c0688d812d9f.png"
                    }
                })]), t._v(" "), n("div", {
                    staticClass: "read-list-wrap"
                }, t._l(t.articles, function (e, s) {
                    return n("div", {
                        key: s,
                        ref: "item_" + s,
                        refInFor: !0,
                        on: {
                            click: function (n) {
                                t.jumpTo(e, s)
                            }
                        }
                    }, ["article" === e.type && "one" !== e.image_type ? n("div", {
                        staticClass: "read-item-a item-common",
                        class: {
                            "three-img": e.images.length > 1
                        }
                    }, [n("div", {
                        staticClass: "title",
                        staticStyle: {
                            "-webkit-box-orient": "vertical"
                        }
                    }, [t._v(t._s(e.title))]), t._v(" "), n("div", {
                        staticClass: "sub"
                    }, [t._v(t._s(e.origin) + " " + t._s(t._f("formatTimeAgo")(e.publishTime)))]), t._v(" "), n("div", {
                        staticClass: "img-wrap"
                    }, t._l(e.images, function (t, s) {
                        return n("div", {
                            key: s,
                            staticClass: "cover"
                        }, [n("qk-image", {
                            attrs: {
                                src: t,
                                big: "big" === e.image_type
                            }
                        })], 1)
                    })), t._v(" "), n("div", {
                        staticClass: "h-line"
                    })]) : t._e(), t._v(" "), "article" === e.type && "one" === e.image_type ? n("div", {
                        staticClass: "read-item-b item-common"
                    }, [n("div", {
                        staticClass: "left"
                    }, [n("div", {
                        staticClass: "cover",
                        style: {
                            backgroundImage: t.formatImg(e.images[0])
                        }
                    }, [n("qk-image", {
                        attrs: {
                            src: e.images[0]
                        }
                    })], 1)]), t._v(" "), n("div", {
                        staticClass: "right"
                    }, [n("div", {
                        staticClass: "title",
                        staticStyle: {
                            "-webkit-box-orient": "vertical"
                        }
                    }, [t._v(t._s(e.title))]), t._v(" "), n("div", {
                        staticClass: "sub"
                    }, [t._v(t._s(e.origin) + " " + t._s(t._f("formatTimeAgo")(e.publishTime)))])])]) : t._e(), t._v(" "), "video" === e.type && e.images.length > 0 ? n("div", {
                        staticClass: "read-item-a item-common"
                    }, [n("div", {
                        staticClass: "title",
                        staticStyle: {
                            "-webkit-box-orient": "vertical"
                        }
                    }, [t._v(t._s(e.title))]), t._v(" "), n("div", {
                        staticClass: "sub"
                    }, [t._v(t._s(e.origin) + " " + t._s(t._f("formatTimeAgo")(e.publishTime)))]), t._v(" "), n("div", {
                        staticClass: "img-wrap"
                    }, [n("div", {
                        staticClass: "video-img"
                    }, [n("img", {
                        attrs: {
                            src: e.images[0]
                        }
                    })]), t._v(" "), n("div", {
                        staticClass: "time"
                    }, [t._v(t._s(t._f("formatSeconds")(e.videoTime)))]), t._v(" "), t._m(0, !0)]), t._v(" "), n("div", {
                        staticClass: "h-line"
                    })]) : t._e(), t._v(" "), "advertisement" === e.type ? n("div", {
                        staticClass: "ad-item"
                    }, [n("div", {
                        staticClass: "overflow-h",
                        attrs: {
                            id: "ad_container_" + s
                        }
                    })]) : t._e(), t._v(" "), "juta_ad" === e.type ? n("div", {
                        staticClass: "juta-ad-item"
                    }, [n("div", {
                        staticClass: "ad-inner"
                    }, [n("div", {
                        staticClass: "title"
                    }, [t._v(t._s(e.title))]), t._v(" "), n("div", {
                        staticClass: "sub-title"
                    }, [t._v(t._s(e.sub_title))]), t._v(" "), n("div", {
                        staticClass: "logo",
                        class: {
                            "no-ad-tag": !e.superscript
                        }
                    }, [n("img", {
                        attrs: {
                            src: e.img_url
                        }
                    })]), t._v(" "), e.superscript ? n("div", {
                        staticClass: "ad-tag"
                    }, [t._v(t._s(e.superscript))]) : t._e()])]) : t._e(), t._v(" "), "taobao_ad" === e.type ? n("div", {
                        staticClass: "juta-ad-item taobao"
                    }, [n("div", {
                        staticClass: "ad-inner"
                    })]) : t._e()])
                })), t._v(" "), n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.isLoading || t.isTryLoading,
                        expression: "isLoading || isTryLoading"
                    }],
                    staticClass: "loading"
                }, [n("img", {
                    staticClass: "loading-img",
                    attrs: {
                        src: "//assets.qkcdn.com/images/dbd35ed7ebf4491cdf8ea0e5ea86ad72.png"
                    }
                })]), t._v(" "), n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.no_more && !t.isLoading && !t.isTryLoading,
                        expression: "no_more && !isLoading && !isTryLoading"
                    }],
                    staticClass: "no-more",
                    class: {
                        isIphoneX: t.isInRongYuKa
                    }
                }, [n("div", {
                    staticClass: "hint"
                }, [t._v("已经没有更多内容了")])]), t._v(" "), t.isLoadingFail && !t.isTryLoading ? n("div", {
                    staticClass: "load-fail",
                    on: {
                        click: t.fetchReadingList
                    }
                }, [n("img", {
                    staticClass: "img-fail",
                    attrs: {
                        src: "//assets.qkcdn.com/images/9e7bb4554012cf4ba847cd811727a81b.png"
                    }
                }), t._v(" "), n("div", {
                    staticClass: "hint"
                }, [t._v("加载失败，请点击重试")])]) : t._e()])
            }, staticRenderFns: [
                function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "play-btn"
                    }, [n("img", {
                        attrs: {
                            src: "//assets.qkcdn.com/images/ae0591cba0f1fa2c35c24b684327d24d.png"
                        }
                    })])
                }
            ]
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("CustomPopup", {
                    ref: "p"
                }, [n("div", {
                    staticClass: "popup-body popup-assistant popup-invalid-assistant"
                }, [n("div", {
                    staticClass: "text"
                }, [t._v("\n      您的助手已失效\n    ")]), t._v(" "), n("button", {
                    staticClass: "button button-assertive btn-download",
                    on: {
                        click: function (e) {
                            t.toDownload()
                        }
                    }
                }, [t._v("下载新助手")]), t._v(" "), n("button", {
                    staticClass: "button button-royal button-small button-clear button-close",
                    on: {
                        click: function (e) {
                            t.hide(-1)
                        }
                    }
                }, [n("i", {
                    staticClass: "ion-ios-close-empty"
                })])])])
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    directives: [{
                        name: "nav",
                        rawName: "v-nav",
                        value: {
                            hideNavbar: !0
                        },
                        expression: "{hideNavbar: true}"
                    }],
                    staticClass: "page page-task-list"
                }, [n("TaskListHeader", {
                    attrs: {
                        "bg-color": "#FFDD55",
                        "menu-bg-color": "#FFD155",
                        color: "#3A3A3A",
                        title: "试玩赚钱",
                        "sub-title": "① 下载应用 &nbsp;② 打开试玩 &nbsp;③ 领取现金",
                        "on-back-button-click": t.back,
                        expanded: !0,
                        animate: !0,
                        "get-scroll-top": t.getScrollTop,
                        "has-sub-header": t.showAssistantBanner
                    }
                }, [t.showAssistantBanner ? n("AssistantBanner", {
                    slot: "subheader"
                }) : t._e()], 1), t._v(" "), n("div", {
                    staticClass: "page-content task-list",
                    class: {
                        "has-subheader": t.showAssistantBanner
                    }
                }, [n("scroller", {
                    ref: "scroller",
                    style: {
                        paddingTop: (t.showAssistantBanner ? 160 : 100) + "px"
                    }
                }, [n("BlockTasksOngoing"), t._v(" "), n("IndividualTask"), t._v(" "), n("BlockTasks"), t._v(" "), n("BlockRecommends"), t._v(" "), t.showAssistantBanner ? n("div", {
                    staticClass: "task-tips"
                }, [t._v("\n        开启助手显示全部任务\n      ")]) : t._e(), t._v(" "), n("BlockEasy"), t._v(" "), n("BlockGame"), t._v(" "), n("BlockComing", {
                    attrs: {
                        "task-type": "standard"
                    }
                }), t._v(" "), t.showAssistantBanner && 8 == t.tasks_coming.length ? n("div", {
                    staticClass: "task-tips"
                }, [t._v("\n        开启助手显示全部任务\n      ")]) : t._e(), t._v(" "), n("BlockComing", {
                    attrs: {
                        "task-type": "easy"
                    }
                }), t._v(" "), n("JailBroken"), t._v(" "), n("div", {
                    style: {
                        height: (t.showAssistantBanner ? 160 : 100) + "px"
                    }
                }), t._v(" "), n("div", {
                    staticStyle: {
                        height: "20px"
                    }
                })], 1)], 1), t._v(" "), n("AssistantInvalid"), t._v(" "), t.is_auto ? t._e() : n("AssistantUnopen"), t._v(" "), t.is_auto ? n("HelpAssistantUnopen") : t._e(), t._v(" "), n("YearPopup", {
                    ref: "year",
                    attrs: {
                        info: t.new_year
                    }
                }), t._v(" "), n("InstallCertification"), t._v(" "), n("InstallKagou"), t._v(" "), t.gangAoTaiPopupVar ? n("gangAoTaiPopup") : t._e()], 1)
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    directives: [{
                        name: "nav",
                        rawName: "v-nav",
                        value: {
                            hideNavbar: !0
                        },
                        expression: "{hideNavbar: true}"
                    }],
                    staticClass: "page page-task-detail"
                }, [n("AnimateHeader", {
                    attrs: {
                        "bg-color": "#FFDD55",
                        "menu-bg-color": "#FFD155",
                        color: "#3A3A3A",
                        "on-back-button-click": t.back,
                        expanded: !0,
                        animate: !1,
                        "show-back-button": !1,
                        "show-menu-button": !0,
                        "on-menu-button-click": t.back
                    }
                }, [n("div", {
                    slot: "content"
                }, [n("TaskDetailTitle", [n("div", {
                    staticClass: "reward"
                }, [n("span", [t._v("任务奖励 + ")]), t._v(" "), n("span", {
                    staticClass: "income",
                    attrs: {
                        "task-detail-reward": ""
                    },
                    domProps: {
                        textContent: t._s(t.reward)
                    }
                }), t._v(" "), n("span", [t._v("元")])]), t._v(" "), n("div", {
                    staticClass: "countdown"
                }, [n("span", [t._v("剩余时间 ")]), t._v(" "), t.expire_at > 0 ? n("count-down", {
                    attrs: {
                        deadline: t.expire_at,
                        format: "mm:ss"
                    }
                }) : t._e()], 1)])], 1)]), t._v(" "), t.exclusive_count > 0 ? n("div", {
                    staticClass: "dl-title"
                }, [t._v("完成试玩后解锁 "), n("span", [t._v(t._s(t.exclusive_reward))]), t._v(" 元专属任务")]) : t._e(), t._v(" "), n("div", {
                    staticClass: "page-content task-detail"
                }, [n("scroller", {
                    staticStyle: {
                        width: "257px"
                    },
                    style: {
                        paddingTop: (t.exclusive_count > 0 ? 136 : 100) + "px"
                    }
                }, [n("div", {
                    staticClass: "icon-wrapper"
                }, [n("img", {
                    attrs: {
                        src: t.app_icon,
                        alt: ""
                    }
                })]), t._v(" "), t.app_keyword ? n("div", {
                    staticClass: "step step-1"
                }, [n("div", {
                    staticClass: "semibold"
                }, [t._v("① 前往 App Store 搜索："), t.app_keyword.length <= 6 ? n("span", {
                    staticClass: "light",
                    domProps: {
                        textContent: t._s(t.app_keyword)
                    }
                }) : t._e()]), t._v(" "), n("div", [t.app_keyword.length > 6 ? n("span", {
                    staticClass: "light",
                    domProps: {
                        textContent: t._s(t.app_keyword)
                    }
                }) : t._e()]), t._v(" "), n("div", [t._v("约排第 "), n("span", {
                    staticClass: "light light-rank",
                    domProps: {
                        textContent: t._s(t.app_rank)
                    }
                }), t._v(" 位，找到该图标应用下载安装")]), t._v(" "), t.isPad ? n("div", [t._v("iPad设备请选择 仅限iPhone")]) : t._e(), t._v(" "), n("div", {
                    staticClass: "app-wrapper"
                }, [n("img", {
                    attrs: {
                        src: t.app_icon,
                        alt: ""
                    }
                }), t._v(" "), n("span", {
                    staticClass: "app-name"
                }, [t._v(t._s(t.app_name.substring(0, 1)) + "***")]), t._v(" "), n("div", {
                    staticClass: "step-button can-click",
                    on: {
                        click: function (e) {
                            t.goAppstore()
                        }
                    }
                }, [n("span", [t._v("前往下载")])])])]) : t._e(), t._v(" "), t.app_keyword ? t._e() : n("div", {
                    staticClass: "step step-1"
                }, [n("div", {
                    staticClass: "semibold"
                }, [t._v("① 前往 App Store 下载应用："), n("span", {
                    staticClass: "light"
                }, [t._v(t._s(t.app_name))])]), t._v(" "), n("div", {
                    staticClass: "app-wrapper"
                }, [n("img", {
                    attrs: {
                        src: t.app_icon,
                        alt: ""
                    }
                }), t._v(" "), n("span", {
                    staticClass: "app-name"
                }, [t._v(t._s(t.app_name.substring(0, 1)) + "***")]), t._v(" "), n("div", {
                    staticClass: "step-button can-click",
                    on: {
                        click: function (e) {
                            t.goAppstore()
                        }
                    }
                }, [n("span", [t._v("前往下载")])])])]), t._v(" "), n("div"), t._v(" "), n("div", {
                    staticClass: "step step-2"
                }, [n("div", {
                    staticClass: "semibold"
                }, [t._v("② 点击 "), n("span", {
                    staticClass: "light"
                }, [t._v("“开始试玩” ")]), n("span", {
                    domProps: {
                        textContent: t._s(t.tips)
                    }
                })]), t._v(" "), n("div", [t._v("未联网试玩，无法领奖")]), t._v(" "), n("div", {
                    staticClass: "step-button disabled",
                    class: {
                        "can-click": 1 !== t.steps[0]
                    },
                    on: {
                        click: function (e) {
                            t.openApp()
                        }
                    }
                }, [n("span", [t._v("开始试玩")])])]), t._v(" "), n("div", {
                    staticClass: "step step-3"
                }, [n("div", {
                    staticClass: "semibold"
                }, [t._v("③ 试玩结束回本页 "), n("span", {
                    staticClass: "light"
                }, [t._v("领奖")])]), t._v(" "), n("div", {
                    staticClass: "step-button disabled",
                    class: {
                        reward: 0 !== t.steps[2]
                    },
                    on: {
                        click: function (e) {
                            t.checkTaskStatus()
                        }
                    }
                }, [n("span", [t._v("领取奖励")])])]), t._v(" "), n("div", {
                    staticClass: "consult"
                }, [n("div", {
                    on: {
                        click: function (e) {
                            t.talkToCustomerService()
                        }
                    }
                }, [n("img", {
                    attrs: {
                        src: "//assets.qkcdn.com/images/16c187409a4c2e71b7a57d5d918b0650.png",
                        alt: ""
                    }
                }), t._v(" "), n("span", [t._v("在线咨询")])])]), t._v(" "), n("div", {
                    staticStyle: {
                        height: "200px",
                        background: "#F5F5F5"
                    }
                })]), t._v(" "), n("transition", {
                    attrs: {
                        name: "fade-coupon"
                    }
                }, [t.show_coupon ? n("div", {
                    staticClass: "coupon-use-remind"
                }, [n("div", {
                    staticClass: "num-and-reward"
                }, [t._v("您有双倍券"), n("span", {
                    staticClass: "light",
                    domProps: {
                        textContent: t._s(t.coupon_num)
                    }
                }), t._v("张，使用后奖励增加"), n("span", {
                    staticClass: "light",
                    domProps: {
                        textContent: t._s(t.couponNum)
                    }
                }), t._v("元")]), t._v(" "), n("div", {
                    staticClass: "coupon-use-button",
                    on: {
                        click: t.useCoupon
                    }
                }, [n("span", [t._v("使用")])])]) : t._e()])], 1), t._v(" "), n("AssistantInvalid"), t._v(" "), n("AssistantUnopen"), t._v(" "), t.noHelpTask ? n("NoHelpTask") : t._e(), t._v(" "), n("StartTaskPopup", {
                    ref: "startRemind",
                    attrs: {
                        href: t.href
                    }
                }), t._v(" "), n("AppstorePopup", {
                    ref: "appstore"
                })], 1)
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement;
                return (t._self._c || e)("div", {
                    staticClass: "task-detail-title"
                }, [t._t("default")], 2)
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return t.explore_task_info.total > 0 || t.zstask_info.total > 0 ? n("ActionList", {
                    attrs: {
                        title: "我的任务"
                    }
                }, [t.zstask_info.total > 0 ? n("PersonalTasks", {
                    attrs: {
                        "task-info": t.zstask_info,
                        money: "元",
                        type: "专属",
                        "on-task-click": t.onZsTaskClick
                    }
                }) : t._e(), t._v(" "), t.explore_task_info.total > 0 ? n("PersonalTasks", {
                    staticClass: "explore-task",
                    attrs: {
                        "task-info": t.explore_task_info,
                        money: "金币",
                        type: "探索",
                        "on-task-click": t.onTsTaskClick
                    }
                }) : t._e()], 1) : t._e()
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", [t.newbie.length > 0 ? n("ActionList", {
                    attrs: {
                        title: "新人专享"
                    }
                }, [t.newbieTips ? n("div", {
                    staticClass: "appoint-remind"
                }, [n("span", [t._v("还有 "), n("b", [t._v(t._s(t.in_compare.newbie))]), t._v(" 个任务正在匹配，请稍后刷新...")])]) : t._e(), t._v(" "), t._l(t.newbie, function (e) {
                    return n("Action", {
                        key: e.task_id,
                        nativeOn: {
                            click: function (n) {
                                t.start(e)
                            }
                        }
                    }, [n("div", {
                        staticClass: "icon",
                        slot: "icon"
                    }, [n("img", {
                        attrs: {
                            src: e.icon
                        }
                    })]), t._v(" "), n("span", {
                        directives: [{
                            name: "inview",
                            rawName: "v-inview:enter",
                            value: t.taskEnterView,
                            expression: "taskEnterView",
                            arg: "enter"
                        }],
                        attrs: {
                            "data-id": e.id
                        },
                        domProps: {
                            textContent: t._s(e.title)
                        },
                        slot: "app-name"
                    }), t._v(" "), n("Tags", {
                        attrs: {
                            tags: e.tags
                        },
                        slot: "desc"
                    }), t._v(" "), n("div", {
                        staticClass: "reward-content",
                        slot: "reward-wrap"
                    }, [n("span", {
                        staticClass: "plus"
                    }, [t._v("+")]), t._v(" "), n("span", {
                        staticClass: "reward",
                        domProps: {
                            textContent: t._s(parseFloat(e.reward).toFixed(1))
                        }
                    }), t._v(" "), n("span", {
                        staticClass: "yuan"
                    }, [t._v("元")])])], 1)
                })], 2) : t._e(), t._v(" "), t.has_tasks ? t._e() : n("ActionList", {
                    attrs: {
                        title: "标准任务"
                    }
                }, [n("Action", [n("div", {
                    staticClass: "icon",
                    slot: "icon"
                }, [n("img", {
                    attrs: {
                        src: "//qianka.b0.upaiyun.com/images/809c958dfd2f7f6f78da97f40322423a.png"
                    }
                })]), t._v(" "), n("span", {
                    slot: "app-name"
                }, [t._v("暂无任务")]), t._v(" "), n("span", {
                    slot: "desc"
                }, [t._v("请关注任务预告")])])], 1), t._v(" "), t.tasks.length > 0 ? n("ActionList", {
                    attrs: {
                        title: "标准任务"
                    }
                }, [t.tasksTips ? n("div", {
                    staticClass: "appoint-remind"
                }, [n("span", [t._v("还有 "), n("b", [t._v(t._s(t.in_compare.tasks))]), t._v(" 个任务正在匹配，请稍后刷新...")])]) : t._e(), t._v(" "), t._l(t.tasks, function (e) {
                    return n("Action", {
                        key: e.task_id,
                        nativeOn: {
                            click: function (n) {
                                t.start(e)
                            }
                        }
                    }, [n("div", {
                        staticClass: "icon",
                        slot: "icon"
                    }, [n("img", {
                        attrs: {
                            src: e.icon
                        }
                    })]), t._v(" "), n("span", {
                        directives: [{
                            name: "inview",
                            rawName: "v-inview:enter",
                            value: t.taskEnterView,
                            expression: "taskEnterView",
                            arg: "enter"
                        }],
                        attrs: {
                            "data-id": e.id
                        },
                        domProps: {
                            textContent: t._s(e.title)
                        },
                        slot: "app-name"
                    }), t._v(" "), n("Tags", {
                        attrs: {
                            tags: e.tags
                        },
                        slot: "desc"
                    }), t._v(" "), e.portalName || e.is_zssh ? t._e() : n("div", {
                        staticClass: "reward-content",
                        slot: "reward-wrap"
                    }, [n("span", {
                        staticClass: "plus"
                    }, [t._v("+")]), t._v(" "), n("span", {
                        staticClass: "reward",
                        domProps: {
                            textContent: t._s(parseFloat(e.reward).toFixed(1))
                        }
                    }), t._v(" "), n("span", {
                        staticClass: "yuan"
                    }, [t._v("元")])]), t._v(" "), !e.portalName && e.is_zssh ? n("div", {
                        staticClass: "reward-content",
                        slot: "reward-wrap"
                    }, [n("span", {
                        staticClass: "plus"
                    }, [t._v("+")]), t._v(" "), n("span", {
                        staticClass: "reward",
                        domProps: {
                            textContent: t._s(parseFloat(e.reward).toFixed(1))
                        }
                    }), t._v(" "), n("span", {
                        staticClass: "yuan"
                    }, [t._v("元")])]) : t._e(), t._v(" "), e.portalName ? n("div", {
                        staticClass: "reward-content",
                        slot: "reward-wrap"
                    }, [n("span", {
                        staticClass: "plus"
                    }, [t._v("+")]), t._v(" "), n("span", {
                        staticClass: "reward",
                        domProps: {
                            textContent: t._s("shoutu" === e.portalName ? "10" : "2000")
                        }
                    }), t._v(" "), n("span", {
                        staticClass: "yuan",
                        domProps: {
                            textContent: t._s("shoutu" === e.portalName ? "元" : "元/月")
                        }
                    })]) : t._e()], 1)
                })], 2) : t._e()], 1)
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "wrap"
                }, t._l(t.list, function (e, s) {
                    return n("div", {
                        key: s,
                        staticClass: "column",
                        class: {
                            mr: s % 2 == 0
                        },
                        style: {
                            "background-image": "url(" + e.bgImage + ")",
                            color: e.color
                        },
                        attrs: {
                            item: e
                        },
                        on: {
                            click: function (n) {
                                t.jumpTo(e)
                            }
                        }
                    }, [n("div", {
                        staticClass: "title"
                    }, [t._v(t._s(e.title))]), t._v(" "), n("div", {
                        staticClass: "sub-title"
                    }, [t._v(t._s(e.subTitle))])])
                }))
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    directives: [{
                        name: "nav",
                        rawName: "v-nav",
                        value: {
                            hideNavbar: !0
                        },
                        expression: "{hideNavbar: true}"
                    }],
                    staticClass: "page page-zstask-detail"
                }, [n("AnimateHeader", {
                    attrs: {
                        "bg-color": "#FFDD55",
                        "menu-bg-color": "#FFD155",
                        color: "#3A3A3A",
                        "on-back-button-click": t.back,
                        expanded: !0,
                        animate: !1,
                        "show-back-button": !1,
                        "show-menu-button": !0,
                        "on-menu-button-click": t.back
                    }
                }, [n("div", {
                    slot: "content"
                }, [n("TaskDetailTitle", [n("div", {
                    staticClass: "reward"
                }, [n("span", [t._v("任务奖励 + ")]), t._v(" "), n("span", {
                    staticClass: "income",
                    domProps: {
                        textContent: t._s(t.zstask_info.reward)
                    }
                }), t._v(" 元\n        ")])])], 1)]), t._v(" "), n("div", {
                    staticClass: "page-content zstask-detail"
                }, [n("div", {
                    staticClass: "step step-1"
                }, [n("div", {
                    staticClass: "semibold"
                }, [t._v("① 打开应用试玩")]), t._v(" "), n("div", {
                    staticClass: "app-wrapper"
                }, [n("div", {
                    staticClass: "img-box"
                }, [n("img", {
                    attrs: {
                        src: t.zstask_info.icon,
                        alt: ""
                    }
                })]), t._v(" "), n("span", {
                    staticClass: "app-name"
                }, [t._v(t._s(t.zstask_info.title.substring(0, 1)) + "***")]), t._v(" "), n("div", {
                    staticClass: "step-button can-click",
                    on: {
                        click: function (e) {
                            t.openApp(t.zstask_info)
                        }
                    }
                }, [n("span", [t._v("打开应用")])])])]), t._v(" "), n("div", {
                    staticClass: "step step-2"
                }, [n("div", {
                    staticClass: "semibold"
                }, [t._v("② 试玩结束回本页领奖")]), t._v(" "), n("div", {
                    staticClass: "step-button disabled",
                    class: {
                        reward: 1 == t.steps[1]
                    },
                    on: {
                        click: function (e) {
                            t.checkReward()
                        }
                    }
                }, [n("span", [t._v("领取奖励")])])])]), t._v(" "), n("AssistantInvalid"), t._v(" "), n("AssistantUnopen")], 1)
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "on-going-task-list"
                }, [t.show_push || t.ongoing.length > 0 ? n("ActionList", [t.show_push ? n("Action", {
                    nativeOn: {
                        click: function (e) {
                            t.showPushPopup(e)
                        }
                    }
                }, [n("div", {
                    staticClass: "icon",
                    slot: "icon"
                }, [n("img", {
                    attrs: {
                        src: "//assets.qkcdn.com/images/8c5ea6b548b734c637d31fee3eb23673.png"
                    }
                })]), t._v(" "), n("span", {
                    slot: "desc"
                }, [n("span", {
                    staticClass: "push-tips"
                }, [t._v("提高抢任务成功率")])]), t._v(" "), n("div", {
                    staticClass: "reward-content",
                    slot: "reward-wrap"
                }, [n("span", {
                    staticClass: "plus"
                }, [t._v("+")]), t._v(" "), n("span", {
                    staticClass: "reward"
                }, [t._v("40")]), t._v(" "), n("span", {
                    staticClass: "yuan"
                }, [t._v("%")])])]) : t._e(), t._v(" "), t._l(t.ongoing, function (e) {
                    return t.ongoing.length > 0 ? n("Action", {
                        key: e.task_id,
                        nativeOn: {
                            click: function (n) {
                                t.start(e)
                            }
                        }
                    }, [4 !== e.status ? n("div", {
                        staticClass: "icon",
                        class: {
                            "icon-border": 2 == e.status || "bonus" == e.label
                        },
                        slot: "icon"
                    }, [n("img", {
                        attrs: {
                            src: e.icon
                        }
                    })]) : n("div", {
                        staticClass: "icon border-green",
                        slot: "icon"
                    }, [n("div", {
                        staticClass: "icon-no-img"
                    }, [n("div", {
                        domProps: {
                            textContent: t._s(e.start_date)
                        }
                    })])]), t._v(" "), n("span", {
                        domProps: {
                            textContent: t._s(e.title)
                        },
                        slot: "app-name"
                    }), t._v(" "), n("span", {
                        staticClass: "count-down-box",
                        slot: "desc"
                    }, [2 == e.status || "bonus" == e.label ? n("span", {
                        staticClass: "ongoing"
                    }, [t._v("进行中...")]) : t._e(), t._v(" "), t._l(e.tags, function (s, a) {
                        return 4 == e.status || 5 == e.status ? n("span", {
                            key: a
                        }, [a > 0 ? n("span", [t._v(" ‧ ")]) : t._e(), t._v(" "), "string" == typeof s ? n("span", {
                            staticClass: "tag",
                            domProps: {
                                textContent: t._s(s)
                            }
                        }) : t._e(), t._v(" "), "object" == typeof s && 1e3 * s.countdown > (new Date).getTime() ? n("span", [t._v("\n            请在\n            "), n("count-down", {
                            staticClass: "count-text",
                            attrs: {
                                format: "mm:ss",
                                deadline: 1e3 * s.countdown
                            }
                        }), t._v("\n            内领取 超时自动放弃\n          ")], 1) : t._e()]) : t._e()
                    })], 2), t._v(" "), "bonus" !== e.label ? n("div", {
                        staticClass: "reward-content",
                        slot: "reward-wrap"
                    }, [n("span", {
                        staticClass: "plus"
                    }, [t._v("+")]), t._v(" "), n("span", {
                        staticClass: "reward",
                        domProps: {
                            textContent: t._s(parseFloat(e.reward).toFixed(1))
                        }
                    }), t._v(" "), n("span", {
                        staticClass: "yuan"
                    }, [t._v("元")])]) : n("div", {
                        staticClass: "reward-content",
                        slot: "reward-wrap"
                    }, [n("span", {
                        staticClass: "plus"
                    }, [t._v("+")]), t._v(" "), n("span", {
                        staticClass: "reward"
                    }, [t._v(t._s(t.bonus_tasks_reward[0]) + "~" + t._s(t.bonus_tasks_reward[1]))]), t._v(" "), n("span", {
                        staticClass: "yuan"
                    }, [t._v("金币")])])]) : t._e()
                })], 2) : t._e()], 1)
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("CustomPopup", {
                    ref: "p"
                }, [n("div", {
                    staticClass: "popup-body popup-open-rongyuka"
                }, [n("div", {
                    staticClass: "remind"
                }, [t._v("\n    请在助手中继续试玩\n    ")]), t._v(" "), n("div", {
                    staticClass: "content"
                }, [n("img", {
                    staticClass: "app-icon",
                    attrs: {
                        src: t.info.app_icon,
                        alt: ""
                    }
                }), t._v(" "), n("p", {
                    staticClass: "app-name"
                }, [t._v(t._s(t.info.app_name))])]), t._v(" "), n("div", {
                    staticClass: "continue",
                    on: {
                        click: function (e) {
                            t.open()
                        }
                    }
                }, [t._v("继续试玩")]), t._v(" "), n("div", {
                    staticClass: "bottom-remind"
                }, [n("span", [t._v("如遇问题，请 ")]), n("a", {
                    staticStyle: {
                        color: "#EF502B",
                        "font-size": "12px",
                        "font-family": "PingFangSC-Semibold",
                        "text-decoration": "underline"
                    },
                    on: {
                        click: function (e) {
                            t.download()
                        }
                    }
                }, [t._v("重新下载助手")])])])])
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "popup-container popup-new-year",
                    class: {
                        "popup-showing active": 1 === t.state,
                        "popup-showing popup-hidden": 2 === t.state
                    },
                    attrs: {
                        effect: "new-year"
                    }
                }, [n("div", {
                    staticClass: "popup popup-new-year"
                }, [n("div", {
                    staticClass: "popup-body"
                }, [t._m(0), t._v(" "), n("div", {
                    staticClass: "congratulation"
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.title,
                        expression: "title"
                    }],
                    attrs: {
                        type: "text",
                        placeholder: "新年大吉！祝愿狗年顺利！",
                        maxlength: "34"
                    },
                    domProps: {
                        value: t.title
                    },
                    on: {
                        keyup: function (e) {
                            t.inputLength(e)
                        }, input: function (e) {
                            e.target.composing || (t.title = e.target.value)
                        }
                    }
                })]), t._v(" "), n("button", {
                    staticClass: "share-button",
                    on: {
                        click: function (e) {
                            t.share()
                        }
                    }
                }, [t._v("发微信")])]), t._v(" "), n("div", {
                    staticClass: "close",
                    on: {
                        click: function (e) {
                            t.hide()
                        }
                    }
                }, [n("img", {
                    attrs: {
                        src: "//assets.qkcdn.com/images/d23ff50f569e778b8ba96c5dbf8d9886.png",
                        alt: ""
                    }
                })])])])
            }, staticRenderFns: [
                function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "tips"
                    }, [n("span", [t._v("写下您的祝福，钱咖替您给好友发红包(可提现)，好友领取红包您将获得后续收徒奖励。")])])
                }
            ]
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("svg", {
                    attrs: {
                        width: "18px",
                        height: "16px",
                        viewBox: "0 0 18 16",
                        version: "1.1",
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink"
                    }
                }, [n("g", {
                    attrs: {
                        stroke: "none",
                        "stroke-width": "1",
                        fill: "none",
                        "fill-rule": "evenodd",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                    }
                }, [n("g", {
                    attrs: {
                        transform: "translate(-336.000000, -106.000000)",
                        stroke: t.color,
                        fill: t.color
                    }
                }, [n("g", {
                    attrs: {
                        transform: "translate(0.000000, 64.000000)"
                    }
                }, [n("g", {
                    attrs: {
                        transform: "translate(336.000000, 41.000000)"
                    }
                }, [n("g", {
                    attrs: {
                        transform: "translate(1.000000, 1.000000)"
                    }
                }, [n("path", {
                    attrs: {
                        d: "M9.5,7.5 L7.5,9.5 L1,16 L0,15 L7,8 L0,1 L1,0 L8,7 L15,0 L16,1 L9.5,7.5 Z M9.5,10.5 L10.5,9.5 L16,15 L15,16 L9.5,10.5 Z"
                    }
                })])])])])])])
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("svg", {
                    attrs: {
                        width: "11px",
                        height: "16px",
                        viewBox: "0 0 11 16",
                        version: "1.1",
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink"
                    }
                }, [n("g", {
                    attrs: {
                        stroke: "none",
                        "stroke-width": "1",
                        fill: "none",
                        "fill-rule": "evenodd",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                    }
                }, [n("g", {
                    attrs: {
                        transform: "translate(-24.000000, -106.000000)",
                        stroke: t.color,
                        fill: t.color
                    }
                }, [n("g", {
                    attrs: {
                        transform: "translate(0.000000, 64.000000)"
                    }
                }, [n("g", {
                    attrs: {
                        transform: "translate(24.000000, 41.000000)"
                    }
                }, [n("g", {
                    attrs: {
                        transform: "translate(1.000000, 1.000000)"
                    }
                }, [n("path", {
                    attrs: {
                        d: "M2.75,7.25 L9,1 L8,0 L0,8 L1,9 L2.75,7.25 Z M3.5,9.5 L9,15 L8,16 L2.5,10.5 L3.5,9.5 Z"
                    }
                })])])])])])])
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("span", [n("span", {
                    domProps: {
                        textContent: t._s(t.value)
                    }
                })])
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "page"
                }, t._l(t.rules, function (e, s) {
                    return n("dl", {
                        key: s
                    }, [n("dt", [n("div", {
                        staticClass: "title"
                    }, [t._v(t._s(e.title))]), t._v(" "), n("div", {
                        staticClass: "v-short-line"
                    })]), t._v(" "), t._l(e.desc, function (e, s) {
                        return n("dd", {
                            staticClass: "desc"
                        }, [t._v("\n         " + t._s(e) + "\n     ")])
                    })], 2)
                }))
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "card-wraper"
                }, [n("div", {
                    staticClass: "icon"
                }, [n("img", {
                    attrs: {
                        src: t.task.icon,
                        alt: ""
                    }
                })]), t._v(" "), n("div", {
                    staticClass: "title"
                }, [t._v(t._s(t.task.title))]), t._v(" "), n("div", {
                    staticClass: "subtitle"
                }, [t._v(t._s(t.task.subtitle))]), t._v(" "), 1 == t.task.status ? n("div", {
                    staticClass: "ongoing"
                }, [n("div", {
                    staticClass: "reward-button",
                    on: {
                        click: function (e) {
                            e.stopPropagation(), t.checkStatus(t.task)
                        }
                    }
                }, [t._v("领取奖励")])]) : t._e(), t._v(" "), 0 == t.task.status ? n("div", [n("div", {
                    staticClass: "reward"
                }, [n("span", {
                    staticClass: "plus"
                }, [t._v("+")]), t._v(" "), n("span", {
                    staticClass: "num"
                }, [t._v(t._s(t.task.reward))]), t._v(" "), n("span", {
                    staticClass: "unit"
                }, [t._v("金币")])]), t._v(" "), t.task.the_day ? t._e() : n("div", {
                    staticClass: "days"
                }, [t._v("共" + t._s(t.task.days) + "天")]), t._v(" "), t.task.the_day && !t.task.real_day ? n("div", {
                    staticClass: "days"
                }, [t._v("共" + t._s(t.task.the_day) + "/" + t._s(t.task.days) + "天")]) : t._e(), t._v(" "), t.task.real_day ? n("div", {
                    staticClass: "days"
                }, [t._v("共" + t._s(t.task.real_day) + "/" + t._s(t.task.days) + "天")]) : t._e()]) : t._e()])
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    directives: [{
                        name: "nav",
                        rawName: "v-nav",
                        value: {
                            hideNavbar: !0
                        },
                        expression: "{hideNavbar: true}"
                    }],
                    staticClass: "page page-easy-detail"
                }, [n("AnimateHeader", {
                    attrs: {
                        "bg-color": "#FFDD55",
                        "menu-bg-color": "#FFD155",
                        color: "#3A3A3A",
                        "on-back-button-click": t.back,
                        expanded: !0,
                        animate: !1,
                        "show-back-button": !1,
                        "show-menu-button": !0,
                        "on-menu-button-click": t.back
                    }
                }, [n("div", {
                    slot: "content"
                }, [n("TaskDetailTitle", [n("div", {
                    staticClass: "reward"
                }, [n("span", [t._v("任务奖励 + ")]), t._v(" "), n("span", {
                    staticClass: "income",
                    domProps: {
                        textContent: t._s(t.detail.reward)
                    }
                }), t._v(" 元\n      ")]), t._v(" "), n("div", {
                    staticClass: "countdown"
                }, [n("span", [t._v("剩余时间 ")]), t.showCountDown ? n("count-down", {
                    attrs: {
                        deadline: 1e3 * t.detail.deadline,
                        format: "mm:ss"
                    }
                }) : t._e()], 1)])], 1)]), t._v(" "), n("div", {
                    staticClass: "page-content easy-detail"
                }, [n("div", {
                    staticClass: "icon-wrapper"
                }, [n("img", {
                    attrs: {
                        src: t.detail.icon,
                        alt: "应用图标"
                    }
                })]), t._v(" "), t._m(0), t._v(" "), n("div", {
                    staticClass: "btn-wrapper"
                }, [n("div", {
                    staticClass: "button button-positive btn-download",
                    on: {
                        click: function (e) {
                            t.download(t.detail.download_url)
                        }
                    }
                }, [n("span", [t._v("下载应用")])])]), t._v(" "), t.is_ios_11 ? n("div", {
                    staticClass: "btn-wrapper"
                }, [n("div", {
                    staticClass: "button button-positive btn-download",
                    on: {
                        click: function (e) {
                            t.openApp(t.detail)
                        }
                    }
                }, [n("span", [t._v("打开应用")])])]) : t._e(), t._v(" "), n("div", {
                    staticClass: "btn-wrapper"
                }, [n("div", {
                    staticClass: "button button-assertive btn-reward",
                    class: {
                        disabled: 2 !== t.appStatus
                    },
                    on: {
                        click: function (e) {
                            t.checkState(t.detail.task_id)
                        }
                    }
                }, [n("span", {
                    domProps: {
                        textContent: t._s(t.btnRewardText)
                    }
                })])])]), t._v(" "), n("AssistantInvalid"), t._v(" "), n("AssistantUnopen")], 1)
            }, staticRenderFns: [
                function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "step"
                    }, [n("div", [t._v("下载应用，安装后无需打开")]), t._v(" "), n("div", [t._v("即可返回本页领取奖励")])])
                }
            ]
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("CustomPopup", {
                    ref: "p"
                }, [n("div", {
                    staticClass: "popup-body popup-start-remind"
                }, [n("div", {
                    staticClass: "title"
                }, [t._v("下载后请回本页面")]), t._v(" "), n("div", {
                    staticClass: "remind"
                }, [t._v("点“开始试玩”打开任务应用")]), t._v(" "), n("div", {
                    staticClass: "img"
                }, [n("img", {
                    attrs: {
                        src: "//assets.qkcdn.com/images/4d086679ec93485f279235c8564cc6e1.png",
                        alt: ""
                    }
                })]), t._v(" "), n("button", {
                    staticClass: "button button-assertive btn-know",
                    on: {
                        click: function (e) {
                            t.hide()
                        }
                    }
                }, [t._v("知道了")]), t._v(" "), n("div", {
                    staticClass: "remind-wrapper"
                }, [n("input", {
                    attrs: {
                        type: "checkbox",
                        id: "checkbox_remind"
                    }
                }), t._v(" "), n("div", {
                    staticClass: "label",
                    on: {
                        click: function (e) {
                            t.check()
                        }
                    }
                }, [t.isChecked ? t._e() : n("img", {
                    staticClass: "checkmark-empty",
                    attrs: {
                        src: "//qianka.b0.upaiyun.com/images/cb75253230cfb5d70f1e2f00791c0eb7.png"
                    }
                }), t._v(" "), t.isChecked ? n("img", {
                    staticClass: "checkmark-checked",
                    attrs: {
                        src: "//qianka.b0.upaiyun.com/images/d3b50c2afc269dfae839f235e58b2e31.png"
                    }
                }) : t._e(), t._v(" "), n("span", {
                    staticClass: "checkbox-remind-text"
                }, [t._v("不再提醒")])])])])])
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "animate-header-wrapper"
                }, [n("div", {
                    staticClass: "animate-header",
                    style: {
                        height: t.state.headerHeight + "px"
                    }
                }, [t.showBackButton ? n("div", {
                    staticClass: "menu-item menu-item-left",
                    style: {
                        backgroundColor: t.menuBgColor
                    },
                    on: {
                        click: function (e) {
                            t.onBack()
                        }
                    }
                }, [n("BackArrow", {
                    attrs: {
                        color: t.color
                    }
                })], 1) : t._e(), t._v(" "), n("div", {
                    staticClass: "header-content",
                    style: {
                        backgroundColor: t.bgColor
                    }
                }, [t._t("content", [n("h4", {
                    staticClass: "light",
                    style: {
                        marginTop: t.state.titleMarginTop + "px",
                        fontSize: t.state.titleFontSize + "px",
                        lineHeight: t.state.titleLineHeight + "px",
                        color: t.color
                    },
                    domProps: {
                        textContent: t._s(t.title)
                    }
                }), t._v(" "), n("p", {
                    staticClass: "light",
                    style: {
                        opacity: t.state.subTitleOpacity,
                        color: t.color
                    },
                    domProps: {
                        innerHTML: t._s(t.subTitle)
                    }
                })])], 2), t._v(" "), t.showMenuButton ? n("div", {
                    staticClass: "menu-item menu-item-right",
                    style: {
                        backgroundColor: t.menuBgColor
                    },
                    on: {
                        click: function (e) {
                            t.onMenu()
                        }
                    }
                }, [t._t("menu", [n("Close", {
                    attrs: {
                        color: t.color
                    }
                })])], 2) : t._e()]), t._v(" "), t.hasSubTip ? n("div", {
                    style: {
                        marginTop: t.state.headerHeight + "px"
                    }
                }, [t._t("subtip")], 2) : t._e(), t._v(" "), t.hasSubHeader ? n("div", {
                    style: {
                        marginTop: t.state.headerHeight + 60 + "px"
                    }
                }, [t._t("subheader")], 2) : t._e()])
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("CustomPopup", {
                    ref: "p"
                }, [n("div", {
                    staticClass: "popup-body popup-install-kagou"
                }, [n("div", {
                    staticClass: "icon-wrapper"
                }, [n("img", {
                    attrs: {
                        src: "//qianka.b0.upaiyun.com/images/978ec9d32204256ce0cd5a4287190b09.png",
                        alt: ""
                    }
                })]), t._v(" "), n("div", {
                    staticClass: "desc"
                }, [n("div", [t._v("下载咖购")]), t._v(" "), n("div", [t._v("领新人0元包邮商品福利")]), t._v(" "), n("img", {
                    staticClass: "remind-icon",
                    attrs: {
                        src: "//qianka.b0.upaiyun.com/images/784a08941dea023aac029fcee751686c.png",
                        alt: ""
                    }
                })]), t._v(" "), n("button", {
                    staticClass: "button button-assertive btn-install",
                    on: {
                        click: function (e) {
                            t.install()
                        }
                    }
                }, [t._v("查看该商品")]), t._v(" "), n("button", {
                    staticClass: "button button-royal button-small button-clear button-close",
                    on: {
                        click: function (e) {
                            t.hide(-1)
                        }
                    }
                }, [n("i", {
                    staticClass: "ion-ios-close-empty"
                })])])])
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "read-menus",
                    class: {
                        "menu-wrap-fixed": t.posFixed,
                        "menu-wrap": !t.posFixed
                    }
                }, [n("div", {
                    staticClass: "wrap-outer"
                }, [n("div", {
                    staticClass: "wrap-inside"
                }, t._l(t.menus, function (e) {
                    return n("div", {
                        key: e.id,
                        staticClass: "menu-item",
                        class: {
                            active: e.selected
                        },
                        on: {
                            click: function (n) {
                                t.menuClick(e)
                            }
                        }
                    }, [t._v(t._s(e.name) + "\n      ")])
                }))]), t._v(" "), n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !t.posFixed,
                        expression: "!posFixed"
                    }],
                    staticClass: "h-line"
                })])
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("CustomPopup", {
                    ref: "p"
                }, [n("div", {
                    staticClass: "popup-body popup-assistant popup-install-certification"
                }, [n("div", {
                    staticClass: "title"
                }, [t._v("\n      苹果官方认证\n    ")]), t._v(" "), n("div", {
                    staticClass: "desc"
                }, [t._v("\n      为获得更多任务，需要您安装证书"), n("br"), t._v("验证设备唯一性\n    ")]), t._v(" "), n("button", {
                    staticClass: "button button-assertive btn-install",
                    on: {
                        click: function (e) {
                            t.install()
                        }
                    }
                }, [t._v("安装证书")]), t._v(" "), n("button", {
                    staticClass: "button button-royal button-small button-clear button-close",
                    on: {
                        click: function (e) {
                            t.hide(-1)
                        }
                    }
                }, [n("i", {
                    staticClass: "ion-ios-close-empty"
                })])])])
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("transition", {
                    attrs: {
                        name: "fade-webclip"
                    }
                }, [t.show ? n("div", {
                    staticClass: "webclip"
                }, [n("div", {
                    staticClass: "qk-icon"
                }), t._v(" "), n("div", {
                    staticClass: "title"
                }, [t._v("钱咖永久访问入口")]), t._v(" "), n("div", {
                    staticClass: "desc"
                }, [t._v("再也不担心找不到钱咖")]), t._v(" "), n("button", {
                    staticClass: "button button-assertive button-small btn-common btn-install",
                    on: {
                        click: function (e) {
                            t.onClick()
                        }
                    }
                }, [t._v("立即安装")]), t._v(" "), n("button", {
                    staticClass: "button button-assertive button-small btn-common btn-maybe_later",
                    on: {
                        click: function (e) {
                            t.maybeLater()
                        }
                    }
                }, [t._v("以后再说")])]) : t._e()])
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "page"
                }, t._l(t.rules, function (e, s) {
                    return n("dl", {
                        key: s
                    }, [n("dt", [n("div", {
                        staticClass: "title"
                    }, [t._v(t._s(e.title))]), t._v(" "), n("div", {
                        staticClass: "v-short-line"
                    })]), t._v(" "), n("dd", {
                        staticClass: "desc"
                    }, [t._v("\n         " + t._s(e.desc) + "\n     ")])])
                }))
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "popup-container custom-popup-container",
                    class: {
                        "popup-showing active": 1 == t.state,
                        "popup-showing popup-hidden": 2 == t.state,
                        column: t.column
                    },
                    attrs: {
                        effect: t.effect
                    }
                }, [n("div", {
                    staticClass: "popup von-popup"
                }, [t._t("default")], 2), t._v(" "), t.column ? n("div", {
                    staticClass: "close",
                    on: {
                        click: function (e) {
                            t.hide()
                        }
                    }
                }, [n("img", {
                    attrs: {
                        src: "//assets.qkcdn.com/images/5fb1050fc6fc6cd2c26e16a2faccb1a7.png",
                        alt: ""
                    }
                })]) : t._e()])
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "task-action-list"
                }, [t.title ? n("div", {
                    staticClass: "task-action-list-title",
                    domProps: {
                        textContent: t._s(t.title)
                    }
                }) : t._e(), t._v(" "), t.subtitle ? n("div", {
                    staticClass: "task-action-list-subtitle",
                    domProps: {
                        textContent: t._s(t.subtitle)
                    }
                }) : t._e(), t._v(" "), t._t("default")], 2)
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return 1 === t.state ? n("div", {
                    staticClass: "unsupported-browser"
                }, [t.moreThan11() ? n("div", {
                    staticStyle: {
                        "background-color": "#fff"
                    }
                }, [n("img", {
                    staticClass: "auto",
                    attrs: {
                        src: "//assets.qkcdn.com/images/a70e88bc5d36bad29b379458dad37622.jpeg"
                    }
                }), t._v(" "), n("img", {
                    staticClass: "auto",
                    attrs: {
                        src: "//assets.qkcdn.com/images/3470c6376268d9183482054a89612602.jpeg"
                    }
                }), t._v(" "), n("img", {
                    staticClass: "auto",
                    staticStyle: {
                        "margin-top": "-6px"
                    },
                    attrs: {
                        src: "//assets.qkcdn.com/images/45ff87ce19d9bdd344a78163791ae2d5.jpeg"
                    }
                })]) : n("img", {
                    staticClass: "guide-image",
                    attrs: {
                        src: "//qianka.b0.upaiyun.com/images/418e0fbdf138ce667435c3bdc083cd93.png"
                    }
                })]) : t._e()
            }, staticRenderFns: []
        }
    },
    function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("CustomPopup", {
                    ref: "f",
                    attrs: {
                        column: !0,
                        "hide-cb": t.exploreMyList
                    }
                }, [n("div", {
                    staticClass: "popup-body start-explore-popup"
                }, [n("div", {
                    staticClass: "start-explore"
                }, [n("div", {
                    staticClass: "explore-pic"
                }, [n("img", {
                    attrs: {
                        src: t.detail.icon,
                        alt: ""
                    }
                })]), t._v(" "), n("div", {
                    staticClass: "explore-name"
                }, [n("span", [t._v(t._s(t.detail.title))]), t._v(" "), n("em", [t._v(t._s(t.detail.subtitle))])]), t._v(" "), n("div", {
                    staticClass: "explore-coin"
                }, [n("i"), t._v(" "), n("span", [t._v(t._s(t.detail.reward))]), t._v(" "), n("b", [t._v("金币")])])]), t._v(" "), n("div", {
                    staticClass: "start-explore-middle"
                }, [t.detail.background_url ? t._e() : n("img", {
                    attrs: {
                        src: "//assets.qkcdn.com/images/4f5c88bdf981c1d55b9eed65fda3c7b7.png",
                        alt: ""
                    }
                }), t._v(" "), t.detail.background_url ? n("img", {
                    attrs: {
                        src: t.detail.background_url,
                        alt: ""
                    }
                }) : t._e()]), t._v(" "), n("div", {
                    staticClass: "start-explore-bottom"
                }, [n("div", {
                    staticClass: "copywriting",
                    on: {
                        click: function (e) {
                            t.copyCDK()
                        }
                    }
                }, [t.detail.slogan ? t._e() : n("span", [t._v("生活中从不缺少美 而是缺少发现美的眼睛")]), t._v(" "), t.detail.slogan ? n("span", [t._v(t._s(t.detail.slogan))]) : t._e()]), t._v(" "), n("div", {
                    staticClass: "start-btn",
                    on: {
                        click: function (e) {
                            t.startExplore()
                        }
                    }
                }, [t._v("开始探索")])])])])
            }, staticRenderFns: []
        }
    }, , , ,
    function (t, e) {
        t.exports = moment
    }
], [150]);
