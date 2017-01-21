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
            text: "QQ空间"
        }, {
            platform: "qq"
        }, {
            platform: "wechat"
        }, {
            platform: "sinaweibo",
            icon: "https://img.t.sinajs.cn/t4/appstyle/widget/images/shareButton/share_icon_mini.png?id=1375775002754",
            text: "新浪微博"
        }, {
            platform: "douban",
            icon: "https://img3.doubanio.com/pics/fw2douban_s.png",
            text: "豆瓣"
        }]
    };

    var medium = {
        size: "small",
        renderText: false,
        shares: [{
            platform: "qzone",
            icon: "https://qzonestyle.gtimg.cn/ac/qzone_v5/app/app_share/qz_logo.png",
            text: "QQ空间"
        }, {
            platform: "qq"
        }, {
            platform: "wechat"
        }, {
            platform: "sinaweibo",
            icon: "https://img.t.sinajs.cn/t4/appstyle/widget/images/shareButton/share_icon_mini.png?id=1375775002754",
            text: "新浪微博"
        }, {
            platform: "douban",
            icon: "https://img3.doubanio.com/pics/fw2douban_s.png",
            text: "豆瓣"
        }]
    };

    var small = {
        size: "small",
        renderText: false,
        shares: [{
            platform: "qzone",
            icon: "https://qzonestyle.gtimg.cn/ac/qzone_v5/app/app_share/qz_logo.png",
            text: "QQ空间"
        }, {
            platform: "qq"
        }, {
            platform: "wechat"
        }, {
            platform: "sinaweibo",
            icon: "https://img.t.sinajs.cn/t4/appstyle/widget/images/shareButton/share_icon_mini.png?id=1375775002754",
            text: "新浪微博"
        }, {
            platform: "douban",
            icon: "https://img3.doubanio.com/pics/fw2douban_s.png",
            text: "豆瓣"
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
                    case "douban":
                        return _renderDouban(icon, text);
                        break;
                    default:
                        throw Error("invalid platform");
                }
            }
        };

        var _renderQzone = function (icon, text) {
            var size = sizes.includes(opts.size) ? opts.size : "medium";
            if (opts.renderText) {
                return "<a class='hshare hshare-" + size + "' href='http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=" + url + "&title=" + title + "' target='_blank'  title='分享到QQ空间'><img src=" + icon + " alt='分享到QQ空间' />" + text + "<\/a>";
            }
            else {
                return "<a class='hshare hshare-" + size + "' href='http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=" + url + "&title=" + title + "' target='_blank'  title='分享到QQ空间'><img src=" + icon + " alt='分享到QQ空间' /><\/a>";
            }
        };

        var _renderDouban = function (icon, text) {
            var size = sizes.includes(opts.size) ? opts.size : "medium";
            if (opts.renderText) {
                return "<a class='hshare hshare-" + size + "'  href=\"javascript:void(function(){var w=window,d=document,e=encodeURIComponent,s1=window.getSelection,s2=d.getSelection,s3=d.selection,s=s1?s1():s2?s2():s3?s3.createRange().text:'',r='https://www.douban.com/recommend/?url='+e(w.location.href)+'&title='+e(d.title)+'&sel='+e(s)+'&v=1',w=450,h=330,x=function(){if(!window.open(r,'douban','toolbar=0,resizable=1,scrollbars=yes,status=1,width='+w+',height='+h+',left='+(screen.width-w)/2+',top='+(screen.height-h)/2))location.href=r+'&r=1'};if(/Firefox/.test(navigator.userAgent)){setTimeout(x,0)}else{x()}})()\"><img src='" + icon + "' alt='推荐到豆瓣' />" + text + "</a>";
            }
            else {
                return "<a class='hshare hshare-" + size + "'  href=\"javascript:void(function(){var w=window,d=document,e=encodeURIComponent,s1=window.getSelection,s2=d.getSelection,s3=d.selection,s=s1?s1():s2?s2():s3?s3.createRange().text:'',r='https://www.douban.com/recommend/?url='+e(w.location.href)+'&title='+e(d.title)+'&sel='+e(s)+'&v=1',w=450,h=330,x=function(){if(!window.open(r,'douban','toolbar=0,resizable=1,scrollbars=yes,status=1,width='+w+',height='+h+',left='+(screen.width-w)/2+',top='+(screen.height-h)/2))location.href=r+'&r=1'};if(/Firefox/.test(navigator.userAgent)){setTimeout(x,0)}else{x()}})()\"><img src='" + icon + "' alt='推荐到豆瓣' /></a>";
            }
        };

        var _renderRenren = function (icon, text) {
            var size = sizes.includes(opts.size) ? opts.size : "medium";
            if (opts.renderText) {
                return "<a class='hshare hshare-" + size + "' href=\"javascript:void((function(s,d,e){var f='http://share.renren.com/share/buttonshare?link=',u=location.href,l='',p=[e(u),'&title=',e(l)].join('');function a(){if(!window.open([f,p].join(''),'xnshare',['toolbar=0,status=0,resizable=1,width=626,height=436,left=',(s.width-626)/2,',top=',(s.height-436)/2].join('')))u.href=[f,p].join('');};if(/Firefox/.test(navigator.userAgent))setTimeout(a,0);else a();})(screen,document,encodeURIComponent));\" alt='分享到人人网'><img src='" + icon + "' />" + text + "</a>";
            }
            else {
                return "<a class='hshare hshare-" + size + "' href=\"javascript:void((function(s,d,e){var f='http://share.renren.com/share/buttonshare?link=',u=location.href,l='',p=[e(u),'&title=',e(l)].join('');function a(){if(!window.open([f,p].join(''),'xnshare',['toolbar=0,status=0,resizable=1,width=626,height=436,left=',(s.width-626)/2,',top=',(s.height-436)/2].join('')))u.href=[f,p].join('');};if(/Firefox/.test(navigator.userAgent))setTimeout(a,0);else a();})(screen,document,encodeURIComponent));\" alt='分享到人人网'><img src='" + icon + "' /></a>";
            }
        };

        var _renderSinaWeibo = function (icon, text) {
            var size = sizes.includes(opts.size) ? opts.size : "medium";
            if (opts.renderText) {
                return "<a class='hshare hshare-" + size + "' href=\"javascript:void((function(s,d,e){try{}catch(e){}var f='http://v.t.sina.com.cn/share/share.php?',u=d.location.href,p=['url=',e(u),'&title=',e(d.title),'&appkey=2924220432'].join('');function a(){if(!window.open([f,p].join(''),'mb',['toolbar=0,status=0,resizable=1,width=620,height=450,left=',(s.width-620)/2,',top=',(s.height-450)/2].join('')))u.href=[f,p].join('');};if(/Firefox/.test(navigator.userAgent)){setTimeout(a,0)}else{a()}})(screen,document,encodeURIComponent));\"><img src='" + icon + "' alt='分享到新浪'/>" + text + "</a>";
            }
            else {
                return "<a class='hshare hshare-" + size + "' href=\"javascript:void((function(s,d,e){try{}catch(e){}var f='http://v.t.sina.com.cn/share/share.php?',u=d.location.href,p=['url=',e(u),'&title=',e(d.title),'&appkey=2924220432'].join('');function a(){if(!window.open([f,p].join(''),'mb',['toolbar=0,status=0,resizable=1,width=620,height=450,left=',(s.width-620)/2,',top=',(s.height-450)/2].join('')))u.href=[f,p].join('');};if(/Firefox/.test(navigator.userAgent)){setTimeout(a,0)}else{a()}})(screen,document,encodeURIComponent));\"><img src='" + icon + "' alt='分享到新浪'/></a>";
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