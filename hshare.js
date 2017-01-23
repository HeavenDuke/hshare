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
        },
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
        }
    };

    var defaults = {
        size: "small",
        copyLink: true,
        print: false,
        bookmark: false,
        collapse: true,
        renderText: false,
        platforms: []
    };

    var sizes = ["small", "medium", "large"];

    var hShare = function (options) {

        var _render = function (name, icon, text, customize, html) {
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
                    default:
                        throw Error("invalid name");
                        break;
                }
            }
        };

        var _renderChouti = function (icon, text) {
            return "<a class='hshare hshare-" + size + "' href='http://dig.chouti.com/digg.action?title=" + title + "&newsURL=" + url + "' target='_blank' title='分享到新华微博'><img align='top' src=" + icon + " alt='分享到新华微博'/>" + (opts.renderText == true ? text : "") + "" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderDigg = function (icon, text) {
            return "<a class='hshare hshare-" + size + "' href='http://digg.com/submit?phase=2&title=" + title + "&url=" + url + "' target='_blank' title='分享到新华微博'><img align='top' src=" + icon + " alt='分享到新华微博'/>" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderPocket = function (icon, text) {
            return "<a class='hshare hshare-" + size + "' href='https://getpocket.com/edit.php?title=" + title + "&url=" + url + "' target='_blank' title='分享到新华微博'><img align='top' src=" + icon + " alt='分享到新华微博'/>" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderBuffer = function (icon, text) {
            return "<a class='hshare hshare-" + size + "' href='https://buffer.com/add?text=" + title + url + "&url=" + url + "' target='_blank' title='分享到新华微博'><img align='top' src=" + icon + " alt='分享到新华微博'/>" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderHootsuite = function (icon, text) {
            return "<a class='hshare hshare-" + size + "' href='https://hootsuite.com/hootlet/social-share?title=" + title + "&url=" + url + "' target='_blank' title='分享到新华微博'><img align='top' src=" + icon + " alt='分享到新华微博'/>" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderXinhua = function (icon, text) {
            return "<a class='hshare hshare-" + size + "' href='http://t.home.news.cn/share.jsp?title=" + title + "&url=" + url + "' target='_blank' title='分享到新华微博'><img align='top' src=" + icon + " alt='分享到新华微博'/>" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderFeixin = function (icon, text) {
            return "<a class='hshare hshare-" + size + "' href='http://i.feixin.10086.cn/apps/share/share?title=" + title + "&url=" + url + "' target='_blank' title='分享到飞信同窗'><img align='top' src=" + icon + " alt='分享到飞信同窗'/>" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderISohu = function (icon, text) {
            return "<a class='hshare hshare-" + size + "' href='http://i.sohu.com/a/app/mblog/add.htm?title=" + title + "&link=" + url + "' target='_blank' title='分享到我的搜狐'><img align='top' src=" + icon + " alt='分享到我的搜狐'/>" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderYoudaoCloud = function (icon, text) {
            return "<a class='hshare hshare-" + size + "' href='http://note.youdao.com/memory/?title=" + title + "&url=" + url + "' target='_blank' title='分享到有道云笔记'><img align='top' src=" + icon + " alt='分享到有道云笔记'/>" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderQingbiji = function (icon, text) {
            return "<a class='hshare hshare-" + size + "' href='http://www.qingbiji.cn/shareToQingBiJi?title=" + title + "&url=" + url + "' target='_blank' title='分享到轻笔记'><img align='top' src=" + icon + " alt='分享到轻笔记'/>" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderSdoNote = function (icon, text) {
            return "<a class='hshare hshare-" + size + "' href='http://note.sdo.com/tool/collect?text=" + title + "&url=" + url + "' target='_blank' title='分享到麦库记事'><img align='top' src=" + icon + " alt='分享到麦库记事'/>" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderLinkedin = function (icon, text) {
            return "<a class='hshare hshare-" + size + "' href='https://www.linkedin.com/shareArticle?mini=true&ro=true&armin=armin&title=" + title + "&url=" + url + "' target='_blank' title='分享到LinkedIn'><img align='top' src=" + icon + " alt='分享到LinkedIn'/>" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderTwitter = function (icon, text) {
            return "<a class='hshare hshare-" + size + "' href='https://twitter.com/intent/tweet?text=" + title + url + "' target='_blank' title='分享到Twitter'><img align='top' src=" + icon + " alt='分享到Twitter'/>" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderFacebook = function (icon, text) {
            return "<a class='hshare hshare-" + size + "' href='http://www.facebook.com/sharer.php?t=" + title + "&u=" + url + "' target='_blank' title='分享到Facebook'><img align='top' src=" + icon + " alt='分享到Facebook'/>" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderIBaidu = function (icon, text) {
            return "<a class='hshare hshare-" + size + "' href='http://i.baidu.com/store/?t=" + title + "&url=" + url + "' target='_blank' title='分享到iBaidu'><img align='top' src=" + icon + " alt='分享到iBaidu'/>" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderBaiduHome = function (icon, text) {
            return "<a class='hshare hshare-" + size + "' href='https://www.baidu.com/home/page/show/url?name=" + title + "&url=" + url + "&from=addtobaidu' target='_blank' title='添加到百度首页'><img align='top' src=" + icon + " alt='添加到百度首页'/>" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderTumblr = function (icon, text) {
            return "<a class='hshare hshare-" + size + "' href='https://www.tumblr.com/widgets/share/tool?shareSource=legacy&title=" + title + "&url=" + url + "' target='_blank' title='分享到Tumblr'><img align='top' src=" + icon + " alt='分享到Tumblr'/>" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderYixin = function (icon, text) {
            return "<a class='hshare hshare-" + size + "' href='http://open.yixin.im/share?type=text&text=" + title + url + "' target='_blank' title='分享到易信'><img align='top' src=" + icon + " alt='分享到易信'/>" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderGooglePlus = function (icon, text) {
            return "<a class='hshare hshare-" + size + "' href='https://plus.google.com/share?hl=zh-CN&url=" + url + "' target='_blank' title='分享到Google+'><img align='top' src=" + icon + " alt='分享到Google+'/>" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderClub189 = function (icon, text) {
            return "<a class='hshare hshare-" + size + "' href='http://club.189.cn/openshare/sharepage?title=" + title + "&object_url=" + url + "' target='_blank' title='分享到翼友圈'><img align='top' src=" + icon + " alt='分享到翼友圈'/>" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderHotmail = function (icon, text) {
            return "<a class='hshare hshare-" + size + "' href='https://outlook.live.com/owa/?subject=" + title + "&body=" + title + url + "&path=/mail/action/compose' target='_blank' title='通过Hotmail发送'><img align='top' src=" + icon + " alt='通过Hotmail发送'/>" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderGmail = function (icon, text) {
            return "<a class='hshare hshare-" + size + "' href='https://mail.google.com/mail/?ui=2&view=cm&fs=1&tf=1&su=" + title + "&body=" + title + url + "' target='_blank' title='通过Gmail发送'><img align='top' src=" + icon + " alt='通过Gmail发送'/>" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderInstapaper = function (icon, text) {
            return "<a class='hshare hshare-" + size + "' href='https://www.instapaper.com/edit?title=" + title + "&url=" + url + "' target='_blank' title='分享到Instapaper'><img align='top' src=" + icon + " alt='分享到Instapaper'/>" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderNetvibes = function (icon, text) {
            return "<a class='hshare hshare-" + size + "' href='http://www.netvibes.com/dashboard/1?share=true&title=" + title + "&url=" + url + "' target='_blank' title='分享到Netvibes'><img align='top' src=" + icon + " alt='分享到Netvibes'/>" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderQQ = function (icon, text) {
            return "<a class='hshare hshare-" + size + "' href='http://connect.qq.com/widget/shareqq/index.html?title=" + title + "&url=" + url + "' target='_blank' title='分享到QQ好友'><img align='top' src=" + icon + " alt='分享到QQ好友'/>" + (opts.renderText == true ? text : "") + "</a>"
        };

        var _renderWechat = function (icon, text) {
            return "<a class='hshare hshare-" + size + "' href='https://cli.im/api/qrcode' target='_blank' title='分享到微信'><img align='top' src=" + icon + " alt='分享到微信' />" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderQzone = function (icon, text) {
            return "<a class='hshare hshare-" + size + "' href='http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=" + url + "&title=" + title + "' target='_blank'  title='分享到QQ空间'><img align='top' src=" + icon + " alt='分享到QQ空间' />" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderDouban = function (icon, text) {
            return "<a class='hshare hshare-" + size + "'  href='http://www.douban.com/recommend/?url=" + url + "&title=" + title + "' target='_blank'  title='推荐到豆瓣'><img align='top' src='" + icon + "' alt='推荐到豆瓣' />" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderRenren = function (icon, text) {
            return "<a class='hshare hshare-" + size + "' href='http://share.renren.com/share/buttonshare?link=" + url + "&title=" + title + "' target='_blank' title='分享到人人网'><img align='top' alt='分享到人人网' src='" + icon + "' />" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderSinaWeibo = function (icon, text) {
            return "<a class='hshare hshare-" + size + "' href='http://v.t.sina.com.cn/share/share.php?url=" + url + "&title=" + title + "' target='_blank' title='分享到新浪微博'><img align='top' src='" + icon + "' alt='分享到新浪微博'/>" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderKaixin = function (icon, text) {
            return "<a class='hshare hshare-" + size + "' href='http://www.kaixin001.com/repaste/share.php?rtitle=" + title + "&rurl=" + url + "' target='_blank' title='分享到开心网'><img align='top' alt='分享到开心网' src='" + icon + "' />" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderPengyou = function (icon, text) {
            return "<a class='hshare hshare-" + size + "' href='http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?to=pengyou&url=" + url + "&title=" + title + "' target='_blank'  title='分享到朋友网'><img align='top' src=" + icon + " alt='分享到朋友网' />" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderTieba = function (icon, text) {
            return "<a class='hshare hshare-" + size + "' href='http://tieba.baidu.com/f/commit/share/openShareApi?url=" + url + "&title=" + title + "' target='_blank' title='分享到百度贴吧'><img align='top' alt='分享到百度贴吧' src='" + icon + "'>" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderRenminWeibo = function (icon, text) {
            return "<a class='hshare hshare-" + size + "' href='http://t.people.com.cn/toshareinfo.action?url=" + url + "&title=" + title + "' target='_blank' title='分享到人民微博'><img align='top' alt='分享到人民微博' src='" + icon + "'>" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderHexunWeibo = function (icon, text) {
            return "<a class='hshare hshare-" + size + "' href='http://t.hexun.com/channel/shareweb.aspx?url=" + url + "&title=" + title + "' target='_blank' title='分享到和讯微博'><img align='top' alt='分享到和讯微博' src='" + icon + "'>" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderTianya = function (icon, text) {
            return "<a class='hshare hshare-" + size + "' href='http://open.tianya.cn/widget/send_for.php?action=send-html&shareTo=2&appkey=&url=" + url + "&title=" + title + "' target='_blank' title='分享到天涯网'><img align='top' alt='分享到天涯网' src='" + icon + "'>" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderReddit = function (icon, text) {
            return "<a class='hshare hshare-" + size + "' href='https://www.reddit.com/submit?url=" + url + "&title=" + title + "' target='_blank' title='分享到Reddit'><img align='top' alt='分享到Reddit' src='" + icon + "'>" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderCopyLink = function (icon, text) {
            return "<a class='hshare hshare-" + size + "' title='复制链接'><img align='top' alt='复制链接' src='" + icon + "'>" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderPrintLink = function (icon, text) {
            return "<a class='hshare hshare-" + size + "' title='打印页面'><img align='top' alt='打印页面' src='" + icon + "'>" + (opts.renderText == true ? text : "") + "</a>";
        };

        var _renderBookmark = function (icon, text) {
            return "<a class='hshare hshare-" + size + "' title='添加到收藏夹'><img align='top' alt='添加到收藏夹' src='" + icon + "'>" + (opts.renderText == true ? text : "") + "</a>";
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

        return this.each(function () {
            var $this = $(this);

            var _platforms = opts.platforms;

            _platforms.forEach(function (plt) {
                var name = plt.name || "";
                var icon = plt.icon || "";
                var text = plt.text || "";
                var isCustomized = !!plt.customize;
                var customize = plt.customize || "";
                $this.append($(_render(name, icon, text, isCustomized, customize)));
            });

            if(opts.copyLink == true) {
                var copyEntry = $(_renderCopyLink(platforms.copyLink.icon, platforms.copyLink.text));
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
                var printEntry = $(_renderPrintLink(platforms.print.icon, platforms.print.text));
                printEntry.on('click', function () {
                    window.print();
                });
                $this.append(printEntry);
            }

            if (opts.bookmark == true) {
                var bookmarkEntry = $(_renderBookmark(platforms.bookmark.icon, platforms.bookmark.text));
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