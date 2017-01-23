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
        yixin: {
            name: "yixin",
            default: false,
            icon: "https://ohtikzqed.bkt.clouddn.com/yixin.png",
            text: "易信"
        },
        club189: {
            name: "club189",
            default: false,
            icon: "https://ohtikzqed.bkt.clouddn.com/club189.png",
            text: "翼友圈"
        },
        googleplus: {
            name: "googleplus",
            default: false,
            icon: "https://ohtikzqed.bkt.clouddn.com/googleplus.png",
            text: "Google+"
        },
        tumblr: {
            name: "tumblr",
            default: false,
            icon: "https://ohtikzqed.bkt.clouddn.com/tumblr.png",
            text: "tumblr"
        },
        hotmail: {
            name: "hotmail",
            default: false,
            icon: "https://ohtikzqed.bkt.clouddn.com/hotmail.png",
            text: "hotmail邮箱"
        },
        reddit: {
            name: "reddit",
            default: false,
            icon: "https://ohtikzqed.bkt.clouddn.com/reddit.png",
            text: "Reddit"
        },
        ibaidu: {
            name: "ibaidu",
            default: false,
            icon: "https://ohtikzqed.bkt.clouddn.com/ibaidu.png",
            text: "iBaidu"
        },
        baiduhome: {
            name: "baiduhome",
            default: false,
            icon: "https://ohtikzqed.bkt.clouddn.com/baiduhome.png",
            text: "百度首页"
        },
        linkedin: {
            name: "linkedin",
            default: false,
            icon: "https://ohtikzqed.bkt.clouddn.com/linkedin.png",
            text: "linkedin"
        },
        twitter: {
            name: "twitter",
            default: false,
            icon: "https://ohtikzqed.bkt.clouddn.com/twitter.png",
            text: "Twitter"
        },
        facebook: {
            name: "facebook",
            default: false,
            icon: "https://ohtikzqed.bkt.clouddn.com/facebook.png",
            text: "Facebook"
        },
        feixin: {
            name: "feixin",
            default: false,
            icon: "https://ohtikzqed.bkt.clouddn.com/feixin.png",
            text: "飞信同窗"
        },
        youdaocloud: {
            name: "youdaocloud",
            default: false,
            icon: "https://ohtikzqed.bkt.clouddn.com/youdaocloud.png",
            text: "有道云笔记"
        },
        qingbiji: {
            name: "qingbiji",
            default: false,
            icon: "https://ohtikzqed.bkt.clouddn.com/qingbiji.png",
            text: "轻笔记"
        },
        sdonote: {
            name: "sdonote",
            default: false,
            icon: "https://ohtikzqed.bkt.clouddn.com/sdonote.png",
            text: "麦库记事"
        },
        xinhua: {
            name: "xinhua",
            default: false,
            icon: "https://ohtikzqed.bkt.clouddn.com/xinhua.png",
            text: "新华微博"
        },
        isohu: {
            name: "isohu",
            default: false,
            icon: "https://ohtikzqed.bkt.clouddn.com/isohu.png",
            text: "我的搜狐"
        },
        gmail: {
            name: "gmail",
            default: false,
            icon: "https://ohtikzqed.bkt.clouddn.com/gmail.png",
            text: "Gmail"
        },
        instapaper: {
            name: "instapaper",
            default: false,
            icon: "https://ohtikzqed.bkt.clouddn.com/instapaper.png",
            text: "Instapaper"
        },
        pocket: {
            name: "pocket",
            default: false,
            icon: "https://ohtikzqed.bkt.clouddn.com/pocket.png",
            text: "pocket"
        },
        netvibes: {
            name: "netvibes",
            default: false,
            icon: "https://ohtikzqed.bkt.clouddn.com/netvibes.png",
            text: "Netvibes"
        },
        buffer: {
            name: "buffer",
            default: false,
            icon: "https://ohtikzqed.bkt.clouddn.com/buffer.png",
            text: "buffer"
        },
        hootsuite: {
            name: "hootsuite",
            default: false,
            icon: "https://ohtikzqed.bkt.clouddn.com/hootsuite.png",
            text: "hootsuite"
        },
        digg: {
            name: "digg",
            default: false,
            icon: "https://ohtikzqed.bkt.clouddn.com/digg.png",
            text: "digg"
        },
        chouti: {
            name: "chouti",
            default: false,
            icon: "https://ohtikzqed.bkt.clouddn.com/chouti.png",
            text: "抽屉网"
        }
    };

    var addons = {
        copyLink: {
            default: false,
            icon: "https://ohtikzqed.bkt.clouddn.com/copylink.png",
            text: "复制链接"
        },
        print: {
            default: false,
            icon: "https://ohtikzqed.bkt.clouddn.com/print.png",
            text: "打印"
        },
        bookmark: {
            default: false,
            icon: "https://ohtikzqed.bkt.clouddn.com/bookmark.png",
            text: "收藏夹"
        },
        more: {
            default: false,
            icon: "https://ohtikzqed.bkt.clouddn.com/more.png"
        }
    };

    var defaults = {
        size: "small",
        copyLink: true,
        print: false,
        bookmark: false,
        more: true,
        maxCharNum: 5,
        renderText: false,
        selectShare: false,
        platforms: [],
        extended: []
    };

    var sizes = ["small", "medium", "large"];

    var hShare = function (options) {

        var _render = function (platform) {
            var name = platform.name || "";
            var icon = platform.icon || "";
            var text = platform.text || "";
            var customize = !!platform.customize;
            var html = platform.customize || "";
            if (customize) {
                return html;
            }
            else {
                switch(name) {
                    case "qzone":
                        return _renderQzone(icon, text);
                    case "qq":
                        return _renderQQ(icon, text);
                    case "wechat":
                        return _renderWechat(icon, text);
                    case "sinaweibo":
                        return _renderSinaWeibo(icon, text);
                    case "renren":
                        return _renderRenren(icon, text);
                    case "douban":
                        return _renderDouban(icon, text);
                    case "kaixin":
                        return _renderKaixin(icon, text);
                    case "pengyou":
                        return _renderPengyou(icon, text);
                    case "tieba":
                        return _renderTieba(icon, text);
                    case "renminweibo":
                        return _renderRenminWeibo(icon, text);
                    case "hexunweibo":
                        return _renderHexunWeibo(icon, text);
                    case "tianya":
                        return _renderTianya(icon, text);
                    case "reddit":
                        return _renderReddit(icon, text);
                    case "xinhua":
                        return _renderXinhua(icon, text);
                    case "feixin":
                        return _renderFeixin(icon, text);
                    case "isohu":
                        return _renderISohu(icon, text);
                    case "youdaocloud":
                        return _renderYoudaoCloud(icon, text);
                    case "qingbiji":
                        return _renderQingbiji(icon, text);
                    case "sdonote":
                        return _renderSdoNote(icon, text);
                    case "linkedin":
                        return _renderLinkedin(icon, text);
                    case "twitter":
                        return _renderTwitter(icon, text);
                    case "facebook":
                        return _renderFacebook(icon, text);
                    case "ibaidu":
                        return _renderIBaidu(icon, text);
                    case "baiduhome":
                        return _renderBaiduHome(icon, text);
                    case "tumblr":
                        return _renderTumblr(icon, text);
                    case "yixin":
                        return _renderYixin(icon, text);
                    case "googleplus":
                        return _renderGooglePlus(icon, text);
                    case "club189":
                        return _renderClub189(icon, text);
                    case "hotmail":
                        return _renderHotmail(icon, text);
                    case "gmail":
                        return _renderGmail(icon, text);
                    case "instapaper":
                        return _renderInstapaper(icon, text);
                    case "netvibes":
                        return _renderNetvibes(icon, text);
                    case "pocket":
                        return _renderPocket(icon, text);
                    case "buffer":
                        return _renderBuffer(icon, text);
                    case "hootsuite":
                        return _renderHootsuite(icon, text);
                    case "digg":
                        return _renderDigg(icon, text);
                    case "chouti":
                        return _renderChouti(icon, text);
                    case "copyLink":
                        return "";
                    case "print":
                        return "";
                    case "bookmark":
                        return "";
                    case "more":
                        return "";
                    default:
                        throw Error("invalid name");
                        break;
                }
            }
        };

        var _renderChouti = function (icon, text) {
            return "<a class='hshare hshare-" + size + (opts.renderText == true ? " hshare-text" : "") + "' href='http://dig.chouti.com/digg.action?title=" + title + "&newsURL=" + url + "' target='_blank' title='分享到新华微博'><img align='top' src=" + icon + " alt='分享到新华微博'/>" + (opts.renderText == true ? text : "") + "" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderDigg = function (icon, text) {
            return "<a class='hshare hshare-" + size + (opts.renderText == true ? " hshare-text" : "") + "' href='http://digg.com/submit?phase=2&title=" + title + "&url=" + url + "' target='_blank' title='分享到新华微博'><img align='top' src=" + icon + " alt='分享到新华微博'/>" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderPocket = function (icon, text) {
            return "<a class='hshare hshare-" + size + (opts.renderText == true ? " hshare-text" : "") + "' href='https://getpocket.com/edit.php?title=" + title + "&url=" + url + "' target='_blank' title='分享到新华微博'><img align='top' src=" + icon + " alt='分享到新华微博'/>" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderBuffer = function (icon, text) {
            return "<a class='hshare hshare-" + size + (opts.renderText == true ? " hshare-text" : "") + "' href='https://buffer.com/add?text=" + title + url + "&url=" + url + "' target='_blank' title='分享到新华微博'><img align='top' src=" + icon + " alt='分享到新华微博'/>" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderHootsuite = function (icon, text) {
            return "<a class='hshare hshare-" + size + (opts.renderText == true ? " hshare-text" : "") + "' href='https://hootsuite.com/hootlet/social-share?title=" + title + "&url=" + url + "' target='_blank' title='分享到新华微博'><img align='top' src=" + icon + " alt='分享到新华微博'/>" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderXinhua = function (icon, text) {
            return "<a class='hshare hshare-" + size + (opts.renderText == true ? " hshare-text" : "") + "' href='http://t.home.news.cn/share.jsp?title=" + title + "&url=" + url + "' target='_blank' title='分享到新华微博'><img align='top' src=" + icon + " alt='分享到新华微博'/>" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderFeixin = function (icon, text) {
            return "<a class='hshare hshare-" + size + (opts.renderText == true ? " hshare-text" : "") + "' href='http://i.feixin.10086.cn/apps/share/share?title=" + title + "&url=" + url + "' target='_blank' title='分享到飞信同窗'><img align='top' src=" + icon + " alt='分享到飞信同窗'/>" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderISohu = function (icon, text) {
            return "<a class='hshare hshare-" + size + (opts.renderText == true ? " hshare-text" : "") + "' href='http://i.sohu.com/a/app/mblog/add.htm?title=" + title + "&link=" + url + "' target='_blank' title='分享到我的搜狐'><img align='top' src=" + icon + " alt='分享到我的搜狐'/>" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderYoudaoCloud = function (icon, text) {
            return "<a class='hshare hshare-" + size + (opts.renderText == true ? " hshare-text" : "") + "' href='http://note.youdao.com/memory/?title=" + title + "&url=" + url + "' target='_blank' title='分享到有道云笔记'><img align='top' src=" + icon + " alt='分享到有道云笔记'/>" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderQingbiji = function (icon, text) {
            return "<a class='hshare hshare-" + size + (opts.renderText == true ? " hshare-text" : "") + "' href='http://www.qingbiji.cn/shareToQingBiJi?title=" + title + "&url=" + url + "' target='_blank' title='分享到轻笔记'><img align='top' src=" + icon + " alt='分享到轻笔记'/>" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderSdoNote = function (icon, text) {
            return "<a class='hshare hshare-" + size + (opts.renderText == true ? " hshare-text" : "") + "' href='http://note.sdo.com/tool/collect?text=" + title + "&url=" + url + "' target='_blank' title='分享到麦库记事'><img align='top' src=" + icon + " alt='分享到麦库记事'/>" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderLinkedin = function (icon, text) {
            return "<a class='hshare hshare-" + size + (opts.renderText == true ? " hshare-text" : "") + "' href='https://www.linkedin.com/shareArticle?mini=true&ro=true&armin=armin&title=" + title + "&url=" + url + "' target='_blank' title='分享到LinkedIn'><img align='top' src=" + icon + " alt='分享到LinkedIn'/>" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderTwitter = function (icon, text) {
            return "<a class='hshare hshare-" + size + (opts.renderText == true ? " hshare-text" : "") + "' href='https://twitter.com/intent/tweet?text=" + title + url + "' target='_blank' title='分享到Twitter'><img align='top' src=" + icon + " alt='分享到Twitter'/>" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderFacebook = function (icon, text) {
            return "<a class='hshare hshare-" + size + (opts.renderText == true ? " hshare-text" : "") + "' href='http://www.facebook.com/sharer.php?t=" + title + "&u=" + url + "' target='_blank' title='分享到Facebook'><img align='top' src=" + icon + " alt='分享到Facebook'/>" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderIBaidu = function (icon, text) {
            return "<a class='hshare hshare-" + size + (opts.renderText == true ? " hshare-text" : "") + "' href='http://i.baidu.com/store/?t=" + title + "&url=" + url + "' target='_blank' title='分享到iBaidu'><img align='top' src=" + icon + " alt='分享到iBaidu'/>" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderBaiduHome = function (icon, text) {
            return "<a class='hshare hshare-" + size + (opts.renderText == true ? " hshare-text" : "") + "' href='https://www.baidu.com/home/page/show/url?name=" + title + "&url=" + url + "&from=addtobaidu' target='_blank' title='添加到百度首页'><img align='top' src=" + icon + " alt='添加到百度首页'/>" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderTumblr = function (icon, text) {
            return "<a class='hshare hshare-" + size + (opts.renderText == true ? " hshare-text" : "") + "' href='https://www.tumblr.com/widgets/share/tool?shareSource=legacy&title=" + title + "&url=" + url + "' target='_blank' title='分享到Tumblr'><img align='top' src=" + icon + " alt='分享到Tumblr'/>" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderYixin = function (icon, text) {
            return "<a class='hshare hshare-" + size + (opts.renderText == true ? " hshare-text" : "") + "' href='http://open.yixin.im/share?type=text&text=" + title + url + "' target='_blank' title='分享到易信'><img align='top' src=" + icon + " alt='分享到易信'/>" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderGooglePlus = function (icon, text) {
            return "<a class='hshare hshare-" + size + (opts.renderText == true ? " hshare-text" : "") + "' href='https://plus.google.com/share?hl=zh-CN&url=" + url + "' target='_blank' title='分享到Google+'><img align='top' src=" + icon + " alt='分享到Google+'/>" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderClub189 = function (icon, text) {
            return "<a class='hshare hshare-" + size + (opts.renderText == true ? " hshare-text" : "") + "' href='http://club.189.cn/openshare/sharepage?title=" + title + "&object_url=" + url + "' target='_blank' title='分享到翼友圈'><img align='top' src=" + icon + " alt='分享到翼友圈'/>" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderHotmail = function (icon, text) {
            return "<a class='hshare hshare-" + size + (opts.renderText == true ? " hshare-text" : "") + "' href='https://outlook.live.com/owa/?subject=" + title + "&body=" + title + url + "&path=/mail/action/compose' target='_blank' title='通过Hotmail发送'><img align='top' src=" + icon + " alt='通过Hotmail发送'/>" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderGmail = function (icon, text) {
            return "<a class='hshare hshare-" + size + (opts.renderText == true ? " hshare-text" : "") + "' href='https://mail.google.com/mail/?ui=2&view=cm&fs=1&tf=1&su=" + title + "&body=" + title + url + "' target='_blank' title='通过Gmail发送'><img align='top' src=" + icon + " alt='通过Gmail发送'/>" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderInstapaper = function (icon, text) {
            return "<a class='hshare hshare-" + size + (opts.renderText == true ? " hshare-text" : "") + "' href='https://www.instapaper.com/edit?title=" + title + "&url=" + url + "' target='_blank' title='分享到Instapaper'><img align='top' src=" + icon + " alt='分享到Instapaper'/>" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderNetvibes = function (icon, text) {
            return "<a class='hshare hshare-" + size + (opts.renderText == true ? " hshare-text" : "") + "' href='http://www.netvibes.com/dashboard/1?share=true&title=" + title + "&url=" + url + "' target='_blank' title='分享到Netvibes'><img align='top' src=" + icon + " alt='分享到Netvibes'/>" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderQQ = function (icon, text) {
            return "<a class='hshare hshare-" + size + (opts.renderText == true ? " hshare-text" : "") + "' href='http://connect.qq.com/widget/shareqq/index.html?title=" + title + "&url=" + url + "' target='_blank' title='分享到QQ好友'><img align='top' src=" + icon + " alt='分享到QQ好友'/>" + (opts.renderText == true ? text : "") + "</a>"
        };

        var _renderWechat = function (icon, text) {
            return "<a class='hshare hshare-" + size + (opts.renderText == true ? " hshare-text" : "") + "' href='https://cli.im/api/qrcode' target='_blank' title='分享到微信'><img align='top' src=" + icon + " alt='分享到微信' />" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderQzone = function (icon, text) {
            return "<a class='hshare hshare-" + size + (opts.renderText == true ? " hshare-text" : "") + "' href='http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=" + url + "&title=" + title + "' target='_blank'  title='分享到QQ空间'><img align='top' src=" + icon + " alt='分享到QQ空间' />" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderDouban = function (icon, text) {
            return "<a class='hshare hshare-" + size + (opts.renderText == true ? " hshare-text" : "") + "'  href='http://www.douban.com/recommend/?url=" + url + "&title=" + title + "' target='_blank'  title='推荐到豆瓣'><img align='top' src='" + icon + "' alt='推荐到豆瓣' />" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderRenren = function (icon, text) {
            return "<a class='hshare hshare-" + size + (opts.renderText == true ? " hshare-text" : "") + "' href='http://share.renren.com/share/buttonshare?link=" + url + "&title=" + title + "' target='_blank' title='分享到人人网'><img align='top' alt='分享到人人网' src='" + icon + "' />" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderSinaWeibo = function (icon, text) {
            return "<a class='hshare hshare-" + size + (opts.renderText == true ? " hshare-text" : "") + "' href='http://v.t.sina.com.cn/share/share.php?url=" + url + "&title=" + title + "' target='_blank' title='分享到新浪微博'><img align='top' src='" + icon + "' alt='分享到新浪微博'/>" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderKaixin = function (icon, text) {
            return "<a class='hshare hshare-" + size + (opts.renderText == true ? " hshare-text" : "") + "' href='http://www.kaixin001.com/repaste/share.php?rtitle=" + title + "&rurl=" + url + "' target='_blank' title='分享到开心网'><img align='top' alt='分享到开心网' src='" + icon + "' />" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderPengyou = function (icon, text) {
            return "<a class='hshare hshare-" + size + (opts.renderText == true ? " hshare-text" : "") + "' href='http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?to=pengyou&url=" + url + "&title=" + title + "' target='_blank'  title='分享到朋友网'><img align='top' src=" + icon + " alt='分享到朋友网' />" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderTieba = function (icon, text) {
            return "<a class='hshare hshare-" + size + (opts.renderText == true ? " hshare-text" : "") + "' href='http://tieba.baidu.com/f/commit/share/openShareApi?url=" + url + "&title=" + title + "' target='_blank' title='分享到百度贴吧'><img align='top' alt='分享到百度贴吧' src='" + icon + "'>" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderRenminWeibo = function (icon, text) {
            return "<a class='hshare hshare-" + size + (opts.renderText == true ? " hshare-text" : "") + "' href='http://t.people.com.cn/toshareinfo.action?url=" + url + "&title=" + title + "' target='_blank' title='分享到人民微博'><img align='top' alt='分享到人民微博' src='" + icon + "'>" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderHexunWeibo = function (icon, text) {
            return "<a class='hshare hshare-" + size + (opts.renderText == true ? " hshare-text" : "") + "' href='http://t.hexun.com/channel/shareweb.aspx?url=" + url + "&title=" + title + "' target='_blank' title='分享到和讯微博'><img align='top' alt='分享到和讯微博' src='" + icon + "'>" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderTianya = function (icon, text) {
            return "<a class='hshare hshare-" + size + (opts.renderText == true ? " hshare-text" : "") + "' href='http://open.tianya.cn/widget/send_for.php?action=send-html&shareTo=2&appkey=&url=" + url + "&title=" + title + "' target='_blank' title='分享到天涯网'><img align='top' alt='分享到天涯网' src='" + icon + "'>" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderReddit = function (icon, text) {
            return "<a class='hshare hshare-" + size + (opts.renderText == true ? " hshare-text" : "") + "' href='https://www.reddit.com/submit?url=" + url + "&title=" + title + "' target='_blank' title='分享到Reddit'><img align='top' alt='分享到Reddit' src='" + icon + "'>" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderCopyLink = function (icon, text) {
            return "<a class='hshare hshare-" + size + (opts.renderText == true ? " hshare-text" : "") + "' title='复制链接'><img align='top' alt='复制链接' src='" + icon + "'>" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderPrintLink = function (icon, text) {
            return "<a class='hshare hshare-" + size + (opts.renderText == true ? " hshare-text" : "") + "' title='打印页面'><img align='top' alt='打印页面' src='" + icon + "'>" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderBookmark = function (icon, text) {
            return "<a class='hshare hshare-" + size + (opts.renderText == true ? " hshare-text" : "") + "' title='添加到收藏夹'><img align='top' alt='添加到收藏夹' src='" + icon + "'>" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderMore = function (icon) {
            return "<a class='hshare hshare-" + size + "' title='更多'><img align='top' alt='更多' src='" + icon + "'></a>";
        };

        var _renderMorePanel = function () {
            var result = "<div class='hshare-more-container'>";
            var row = [];
            result += "<table>";
            for(var plt in opts.extended) {
                plt = opts.extended[plt];
                if (row.length >= 2) {
                    result += "<tr>";
                    row.forEach(function (item) {
                        result += "<td>";
                        result += _render(item);
                        result += "</td>";
                    });
                    result += "</tr>";
                    row.splice(0, row.length);
                }
                row.push(plt);
            }
            result += "<tr>";
            row.forEach(function (item) {
                result += "<td>";
                result += _render(item);
                result += "</td>";
            });
            result += "</tr>";
            result += "</table>";
            result += "</div>";
            return result;
        };

        var _renderSelectionPopupContainer = function () {
            return "<div class='hshare-container'></div>";
        };

        var _calculateLocation = function (ex, ey, ew, eh, width, height, sw, sh) {
            var result = {};
            if (ex + ew + width > sw) {
                result.x = ex - width;
            }
            else {
                result.x = ex + ew;
            }
            if (ey + eh + height > sh) {
                result.y = ey - height;
            }
            else {
                result.y = ey + eh;
            }
            return result;
        };

        var _loadScript = function (url, callback)
        {
            var head = document.getElementsByTagName('head')[0];
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = url;

            script.onreadystatechange = callback;
            script.onload = callback;

            head.appendChild(script);
        };

        var _getSelectedText = function () {
            var txt = "";
            if (window.getSelection) {
                txt = window.getSelection();
            } else if (window.document.getSelection) {
                txt = window.document.getSelection();
            } else if (window.document.selection) {
                txt = window.document.selection.createRange().text;
            }
            return txt.toString();
        };

        var _getSelectedLocation = function () {
            var txt = "";
            if (window.getSelection) {
                txt = window.getSelection();
            } else if (window.document.getSelection) {
                txt = window.document.getSelection();
            } else if (window.document.selection) {
                txt = window.document.selection.createRange().text;
            }
            return txt.getRangeAt(0).getBoundingClientRect();
        };

        var url = encodeURIComponent(location.href);
        var title = encodeURIComponent(document.title);

        var opts = options ? $.extend(true, {}, options) : $.extend(true, {}, defaults);
        opts.size = opts.renderText == true ? "small" : opts.size;
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

        opts.extended = [];
        if (options && opts.more == true && (options.extended instanceof Array)) {
            options.extended.forEach(function (platform) {
                opts.extended.push($.extend({}, (platform.name && platforms[platform.name]) ? platforms[platform.name] : {}, platform));
            });
        }
        else if (opts.more == true) {
            for(var key in platforms) {
                var find = false;
                var plt = platforms[key];
                for(var key2 in opts.platforms) {
                    if (opts.platforms[key2].name == plt.name) {
                        find = true;
                        break;
                    }
                }
                if (find == false) {
                    opts.extended.push(plt);
                }
            }
        }

        return this.each(function () {
            var $this = $(this);

            var _platforms = opts.platforms;

            _platforms.forEach(function (plt) {
                $this.append($(_render(plt)));
            });

            if(opts.copyLink == true) {
                var copyEntry = $(_renderCopyLink(addons.copyLink.icon, addons.copyLink.text));
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

            if (opts.print == true) {
                var printEntry = $(_renderPrintLink(addons.print.icon, addons.print.text));
                printEntry.on('click', function () {
                    window.print();
                });
                $this.append(printEntry);
            }

            if (opts.bookmark == true) {
                var bookmarkEntry = $(_renderBookmark(addons.bookmark.icon, addons.bookmark.text));
                bookmarkEntry.on('click', function () {
                    alert("请按Ctrl + D以将本页面添加至收藏夹");
                });
                $this.append(bookmarkEntry);
            }

            if (opts.more == true) {
                var moreEntry = $(_renderMore(addons.more.icon));
                var morePanel = $(_renderMorePanel());
                $this.append(moreEntry);
                $this.append(morePanel);
                moreEntry.hover(function () {
                    var left = $(this).position().left;
                    var top = $(this).position().top;
                    var entryWidth = $(this).width();
                    var entryHeight = $(this).height();
                    var width = morePanel.outerWidth();
                    var height = morePanel.outerHeight();
                    var screenWidth = $(window).width();
                    var screenHeight = $(window).height();
                    var location = _calculateLocation(left, top, entryWidth, entryHeight, width, height, screenWidth, screenHeight);
                    morePanel.attr("style", "left: " + location.x + "px; top: " + location.y + "px;");
                    morePanel.css('display', "block");
                }, function () {
                    morePanel.css('display', "none");
                });
            }

            if(opts.selectShare == true) {
                $(document).on('mousedown', function (event) {
                    var containers = $(".hshare-container");
                    if (containers.length != 0) {
                        containers.remove();
                    }
                });

                $(document).on('mouseup', function (event) {
                    var container = $(_renderSelectionPopupContainer());
                    setTimeout(function () {
                        var selectedText = _getSelectedText();
                        if (selectedText.length >= opts.maxCharNum) {
                            var _options = Object.create(options);
                            _options.selectShare = false;
                            _options.renderText = false;
                            _options.size = 'large';
                            container.hshare(_options);
                            $this.append(container);
                            var sLocation = _getSelectedLocation();
                            var left = sLocation.right;
                            var top = sLocation.bottom;
                            var width = container.outerWidth();
                            var height = container.outerHeight();
                            var screenWidth = $(window).width();
                            var screenHeight = $(window).height();
                            var location = _calculateLocation(left, top, 0, 0, width, height, screenWidth, screenHeight);
                            container.attr("style", "left: " + location.x + "px; top: " + location.y + "px;");
                        }
                    }, 500);
                });
            }

        });
    };

    $.fn.extend({
        hshare: hShare
    });

})(jQuery);