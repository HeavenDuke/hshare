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
        }
    };

    var defaults = {
        size: "small",
        platforms: []
    };

    var sizes = ["small", "medium", "large"];

    var hShare = function (options) {

        var url = encodeURIComponent(location.href);
        var title = encodeURIComponent(document.title);

        var opts = options ? options : defaults;
        var size = sizes.includes(opts.size) ? opts.size : "medium";

        if (options.platforms instanceof Array) {
            console.log(options.platforms);
            options.platforms.forEach(function (platform) {
                opts.platforms.push($.extend({}, platform, (platform.name && platforms[platform.name]) ? defaultPlatforms[platform.name] : {}));
            });
        }
        else {
            for(var key in platforms) {
                if (platforms[key].default) {
                    opts.platforms.push(platforms[key]);
                }
            }
        }

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
            return "<a class='hshare hshare-" + size + "'  href=\"javascript:void(function(){var w=window,d=document,e=encodeURIComponent,s1=window.getSelection,s2=d.getSelection,s3=d.selection,s=s1?s1():s2?s2():s3?s3.createRange().text:'',r='https://www.douban.com/recommend/?url='+e(w.location.href)+'&title='+e(d.title)+'&sel='+e(s)+'&v=1',w=450,h=330,x=function(){if(!window.open(r,'douban','toolbar=0,resizable=1,scrollbars=yes,status=1,width='+w+',height='+h+',left='+(screen.width-w)/2+',top='+(screen.height-h)/2))location.href=r+'&r=1'};if(/Firefox/.test(navigator.userAgent)){setTimeout(x,0)}else{x()}})()\"><img src='" + icon + "' alt='推荐到豆瓣' /></a>";
        };

        var _renderRenren = function (icon) {
            return "<a class='hshare hshare-" + size + "' href=\"javascript:void((function(s,d,e){var f='http://share.renren.com/share/buttonshare?link=',u=location.href,l='',p=[e(u),'&title=',e(l)].join('');function a(){if(!window.open([f,p].join(''),'xnshare',['toolbar=0,status=0,resizable=1,width=626,height=436,left=',(s.width-626)/2,',top=',(s.height-436)/2].join('')))u.href=[f,p].join('');};if(/Firefox/.test(navigator.userAgent))setTimeout(a,0);else a();})(screen,document,encodeURIComponent));\" alt='分享到人人网'><img src='" + icon + "' /></a>";
        };

        var _renderSinaWeibo = function (icon) {
            return "<a class='hshare hshare-" + size + "' href=\"javascript:void((function(s,d,e){try{}catch(e){}var f='http://v.t.sina.com.cn/share/share.php?',u=d.location.href,p=['url=',e(u),'&title=',e(d.title)].join('');function a(){if(!window.open([f,p].join(''),'mb',['toolbar=0,status=0,resizable=1,width=620,height=450,left=',(s.width-620)/2,',top=',(s.height-450)/2].join('')))u.href=[f,p].join('');};if(/Firefox/.test(navigator.userAgent)){setTimeout(a,0)}else{a()}})(screen,document,encodeURIComponent));\"><img src='" + icon + "' alt='分享到新浪'/></a>";
        };

        return this.each(function () {
            var $this = $(this);

            var names = opts.platforms;

            names.forEach(function (plt) {
                var name = plt.name || "";
                var icon = plt.icon || "";
                var isCustomized = !!plt.customize;
                var customize = plt.customize || "";
                $this.append($(_render(name, icon, isCustomized, customize)));
            });

        });
    };

    $.fn.extend({
        hshare: hShare
    });

})(jQuery);