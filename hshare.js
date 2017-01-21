/**
 * Created by Obscurity on 2017/1/21.
 */

(function ($) {

    'use strict';

    var large = {
        size: "large",
        renderText: false,
        shares: [{
            platform: "qzone",
            icon: "https://qzonestyle.gtimg.cn/ac/qzone_v5/app/app_share/qz_logo.png",
            text: "分享到QQ空间"
        }, {
            platform: "qq"
        }, {
            platform: "wechat"
        }, {
            platform: "weibo"
        }, {
            platform: "link"
        }]
    };

    var medium = {
        size: "small",
        renderText: false,
        shares: [{
            platform: "qzone",
            icon: "https://qzonestyle.gtimg.cn/ac/qzone_v5/app/app_share/qz_logo.png",
            text: "分享到QQ空间"
        }, {
            platform: "qq"
        }, {
            platform: "wechat"
        }, {
            platform: "weibo"
        }, {
            platform: "link"
        }]
    };

    var small = {
        size: "small",
        renderText: false,
        shares: [{
            platform: "qzone",
            icon: "https://qzonestyle.gtimg.cn/ac/qzone_v5/app/app_share/qz_logo.png",
            text: "分享到QQ空间"
        }, {
            platform: "qq"
        }, {
            platform: "wechat"
        }, {
            platform: "weibo"
        }, {
            platform: "link"
        }]
    };

    var sizes = ["small", "medium", "large"];

    var defaults = medium;

    var hShare = function (options) {

        var url = encodeURIComponent(location.href);
        var title = encodeURIComponent(document.title);

        var opts = $.extend({}, defaults, options);

        var _render = function (platform, icon, text, customize, html) {
            if (customize) {
                return html;
            }
            else {
                switch(platform) {
                    case "qzone":
                        return _renderQzone(icon, text);
                        break;
                    case "wechat":
                        return _renderWechat(icon, text);
                        break;
                    case "sinaweibo":
                        return _renderSinaWeibo(icon, text);
                        break;
                    case "renren":
                        return _renderRenren(icon, text);
                        break;
                    case "kaixin":
                        return _renderKaixin(icon, text);
                        break;
                    case "txweibo":
                        return _renderTXWeibo(icon, text);
                        break;
                    case "linkage":
                        return _renderLinkage(icon, text);
                        break;
                    default:
                        throw Error("invalid platform");
                }
            }
        };

        var _renderQzone = function (icon, text) {
            var size = sizes.includes(opts.size) ? opts.size : "medium";
            if (opts.renderText) {
                return "<a class='hshare-" + size + "' href='http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=" + url + "&title=" + title + "' target='_blank'  title='分享到QQ空间'><img src=" + icon + " alt='分享到QQ空间' />" + text + "<\/a>";
            }
            else {
                return "<a class='hshare-" + size + "' href='http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=" + url + "&title=" + title + "' target='_blank'  title='分享到QQ空间'><img src=" + icon + " alt='分享到QQ空间' /><\/a>";
            }
        };

        return this.each(function () {
            var $this = $(this);

            var platforms = opts.shares;

            platforms.forEach(function (plt) {
                var platform = plt.platform || "";
                var icon = plt.icon || "";
                var text = plt.text || "";
                var isCustomized = !!plt.customize;
                var customize = plt.customize || "";
                $this.append($(_render(platform, icon, text, isCustomized, customize)));
            });

        });
    };

    $.fn.extend({
        hshare: hShare
    });

})(jQuery);