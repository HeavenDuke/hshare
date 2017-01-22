/**
 * Created by Obscurity on 2017/1/21.
 */

(function ($) {

    'use strict';

    var platforms = {
        qzone: {
            name: "qzone",
            default: true,
            icon: "https://ohtikzqed.bkt.clouddn.com/qzone.png",
            text: "QQ空间"
        },
        qq: {
            name: "qq",
            default: true,
            icon: "https://ohtikzqed.bkt.clouddn.com/qq.png",
            text: "QQ好友"
        },
        wechat: {
            name: "wechat",
            default: true,
            icon: "https://ohtikzqed.bkt.clouddn.com/wechat.png",
            text: "微信"
        },
        sinaweibo: {
            name: "sinaweibo",
            default: true,
            icon: "https://ohtikzqed.bkt.clouddn.com/sinaweibo.png",
            text: "新浪微博"
        },
        douban: {
            name: "douban",
            default: true,
            icon: "https://ohtikzqed.bkt.clouddn.com/douban.png",
            text: "豆瓣"
        },
        renren: {
            name: "renren",
            default: false,
            icon: "https://ohtikzqed.bkt.clouddn.com/renren.png",
            text: "人人网"
        },
        kaixin: {
            name: "kaixin",
            default: false,
            icon: "https://ohtikzqed.bkt.clouddn.com/kaixin.png",
            text: "开心网"
        },
        pengyou: {
            name: "pengyou",
            default: false,
            icon: "https://ohtikzqed.bkt.clouddn.com/pengyou.png",
            text: "朋友网"
        },
        tieba: {
            name: "tieba",
            default: false,
            icon: "https://ohtikzqed.bkt.clouddn.com/tieba.png",
            text: "百度贴吧"
        },
        renminweibo: {
            name: "renminweibo",
            default: false,
            icon: "https://ohtikzqed.bkt.clouddn.com/renminweibo.png",
            text: "人民微博"
        },
        hexunweibo: {
            name: "hexunweibo",
            default: false,
            icon: "https://ohtikzqed.bkt.clouddn.com/hexunweibo.png",
            text: "和讯微博"
        },
        tianya: {
            name: "tianya",
            default: false,
            icon: "https://ohtikzqed.bkt.clouddn.com/tianya.png",
            text: "天涯网"
        },
        reddit: {
            name: "reddit",
            default: false,
            icon: "https://ohtikzqed.bkt.clouddn.com/reddit.png",
            text: "Reddit"
        },
        copyLink: {
            default: false,
            icon: "https://ohtikzqed.bkt.clouddn.com/copylink.png"
        },
        print: {
            default: false,
            icon: "https://ohtikzqed.bkt.clouddn.com/print.png"
        },
        bookmark: {
            default: false,
            icon: "https://ohtikzqed.bkt.clouddn.com/bookmark.png"
        }
    };

    var defaults = {
        size: "small",
        copyLink: true,
        print: false,
        bookmark: false,
        platforms: []
    };

    var sizes = ["small", "medium", "large"];

    var hShare = function (options) {

        var _render = function (name, icon, customize, html) {
            if (customize) {
                return html;
            }
            else {
                switch(name) {
                    case "qzone":
                        return _renderQzone(icon);
                    case "qq":
                        return __renderQQ(icon);
                    case "wechat":
                        return _renderWechat(icon);
                    case "sinaweibo":
                        return _renderSinaWeibo(icon);
                    case "renren":
                        return _renderRenren(icon);
                    case "douban":
                        return _renderDouban(icon);
                    case "kaixin":
                        return _renderKaixin(icon);
                    case "pengyou":
                        return _renderPengyou(icon);
                    case "tieba":
                        return _renderTieba(icon);
                    case "renminweibo":
                        return _renderRenminWeibo(icon);
                    case "hexunweibo":
                        return _renderHexunWeibo(icon);
                    case "tianya":
                        return _renderTianya(icon);
                    case "reddit":
                        return _renderReddit(icon);
                    default:
                        throw Error("invalid name");
                        break;
                }
            }
        };

        var __renderQQ = function (icon) {
            return "<a class='hshare hshare-" + size + "' href='http://connect.qq.com/widget/shareqq/index.html?title=" + title + "&url=" + url + "' target='_blank' title='分享到QQ好友'><img src=" + icon + " alt='分享到QQ好友'/></a>"
        };

        var _renderWechat = function (icon) {
            return "<a class='hshare hshare-" + size + "' href='https://cli.im/api/qrcode' target='_blank' title='分享到微信'><img src=" + icon + " alt='分享到微信' /><\/a>";
        };

        var _renderQzone = function (icon) {
            return "<a class='hshare hshare-" + size + "' href='http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=" + url + "&title=" + title + "' target='_blank'  title='分享到QQ空间'><img src=" + icon + " alt='分享到QQ空间' /><\/a>";
        };

        var _renderDouban = function (icon) {
            return "<a class='hshare hshare-" + size + "'  href='http://www.douban.com/recommend/?url=" + url + "&title=" + title + "' target='_blank'  title='推荐到豆瓣'><img src='" + icon + "' alt='推荐到豆瓣' /></a>";
        };

        var _renderRenren = function (icon) {
            return "<a class='hshare hshare-" + size + "' href='http://share.renren.com/share/buttonshare?link=" + url + "&title=" + title + "' target='_blank' title='分享到人人网'><img alt='分享到人人网' src='" + icon + "' /></a>";
        };

        var _renderSinaWeibo = function (icon) {
            return "<a class='hshare hshare-" + size + "' href='http://v.t.sina.com.cn/share/share.php?url=" + url + "&title=" + title + "' target='_blank' title='分享到新浪微博'><img src='" + icon + "' alt='分享到新浪微博'/></a>";
        };

        var _renderKaixin = function (icon) {
            return "<a class='hshare hshare-" + size + "' href='http://www.kaixin001.com/repaste/share.php?rtitle=" + title + "&rurl=" + url + "' target='_blank' title='分享到开心网'><img alt='分享到开心网' src='" + icon + "' /></a>";
        };

        var _renderPengyou = function (icon) {
            return "<a class='hshare hshare-" + size + "' href='http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?to=pengyou&url=" + url + "&title=" + title + "' target='_blank'  title='分享到朋友网'><img src=" + icon + " alt='分享到朋友网' /><\/a>";
        };

        var _renderTieba = function (icon) {
            return "<a class='hshare hshare-" + size + "' href='http://tieba.baidu.com/f/commit/share/openShareApi?url=" + url + "&title=" + title + "' target='_blank' title='分享到百度贴吧'><img alt='分享到百度贴吧' src='" + icon + "'></a>";
        };

        var _renderRenminWeibo = function (icon) {
            return "<a class='hshare hshare-" + size + "' href='http://t.people.com.cn/toshareinfo.action?url=" + url + "&title=" + title + "' target='_blank' title='分享到人民微博'><img alt='分享到人民微博' src='" + icon + "'></a>";
        };

        var _renderHexunWeibo = function (icon) {
            return "<a class='hshare hshare-" + size + "' href='http://t.hexun.com/channel/shareweb.aspx?url=" + url + "&title=" + title + "' target='_blank' title='分享到和讯微博'><img alt='分享到和讯微博' src='" + icon + "'></a>";
        };

        var _renderTianya = function (icon) {
            return "<a class='hshare hshare-" + size + "' href='http://open.tianya.cn/widget/send_for.php?action=send-html&shareTo=2&appkey=&url=" + url + "&title=" + title + "' target='_blank' title='分享到天涯网'><img alt='分享到天涯网' src='" + icon + "'></a>";
        };

        var _renderReddit = function (icon) {
            return "<a class='hshare hshare-" + size + "' href='https://www.reddit.com/submit?url=" + url + "&title=" + title + "' target='_blank' title='分享到Reddit'><img alt='分享到Reddit' src='" + icon + "'></a>";
        };

        var _renderCopyLink = function (icon) {
            return "<a class='hshare hshare-" + size + "' title='复制链接'><img alt='复制链接' src='" + icon + "'></a>";
        };

        var _renderPrintLink = function (icon) {
            return "<a class='hshare hshare-" + size + "' title='打印页面'><img alt='打印页面' src='" + icon + "'></a>";
        };

        var _renderBookmark = function (icon) {
            return "<a class='hshare hshare-" + size + "' title='添加到收藏夹'><img alt='添加到收藏夹' src='" + icon + "'></a>";
        };

        var _loadScript = function (url, callback)
        {
            // Adding the script tag to the head as suggested before
            var head = document.getElementsByTagName('head')[0];
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = url;

            // Then bind the event to the callback function.
            // There are several events for cross browser compatibility.
            script.onreadystatechange = callback;
            script.onload = callback;

            // Fire the loading
            head.appendChild(script);
        };

        var url = encodeURIComponent(location.href);
        var title = encodeURIComponent(document.title);

        var opts = options ? $.extend(true, {}, options) : $.extend(true, {}, defaults);
        var size = sizes.includes(opts.size) ? opts.size : "medium";

        opts.platforms = [];
        if (options && (options.platforms instanceof Array)) {
            options.platforms.forEach(function (platform) {
                opts.platforms.push($.extend({}, (platform.name && platforms[platform.name]) ? platforms[platform.name] : {}, platform));
            });
        }
        else {
            for(var key in platforms) {
                if (platforms[key].default) {
                    opts.platforms.push(platforms[key]);
                }
            }
        }

        return this.each(function () {
            var $this = $(this);

            var _platforms = opts.platforms;

            _platforms.forEach(function (plt) {
                var name = plt.name || "";
                var icon = plt.icon || "";
                var isCustomized = !!plt.customize;
                var customize = plt.customize || "";
                $this.append($(_render(name, icon, isCustomized, customize)));
            });

            if(opts.copyLink) {
                var copyEntry = $(_renderCopyLink(platforms.copyLink.icon));
                _loadScript("https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/1.5.16/clipboard.min.js", function () {
                    var clipboard = new Clipboard(copyEntry[0], {
                        text: function(trigger) {
                            return location.href;
                        }
                    });

                    clipboard.on('success', function(e) {
                        alert("已复制链接到剪贴板");
                    });
                });
                $this.append(copyEntry);
            }

            if (opts.print) {
                var printEntry = $(_renderPrintLink(platforms.print.icon));
                printEntry.on('click', function () {
                    window.print();
                });
                $this.append(printEntry);
            }

            if (opts.print) {
                var bookmarkEntry = $(_renderBookmark(platforms.bookmark.icon));
                bookmarkEntry.on('click', function () {
                    alert("请按Ctrl + D以将本页面添加至收藏夹");
                });
                $this.append(bookmarkEntry);
            }

        });
    };

    $.fn.extend({
        hshare: hShare
    });

})(jQuery);