# hshare - a jQuery social sharing plugin

This is a social sharing plugin that allows web developers to include social sharing buttons/links with just some basic configuration. Existing platforms such as bshare/baidushare/jiathis uses **HTTP** protocol to fetch resources which makes it very hard to deploy such services on **HTTPS** pages due to security restriction. This is what triggers this project. Currently it still supports limited number of platform, but I believe that it will be better through time : )

## Demo

Here is a demo of the default platforms:
![demo picture](http://ohtikzqed.bkt.clouddn.com/QQ%E5%9B%BE%E7%89%8720170121223132.jpg)

## Install
**npm**
```plain
npm install --save hshare
```

**bower**
```plain
bower install --save bower
```

**HTML**
```html
<script type="text/javascript" href="jquery.min.js"></script>
<script type="text/javascript" href="hshare.min.js"></script>
```

The plugin depends on **jquery v1.4.3+**

## Usage

First specify a container in your html files like this:
```html
<html>
    <head>
        <!-- something here -->
    </head>
    <body>
        <div id="container"></div>
        <!-- something here -->
    </body>
</html>
```

Then initialize the social sharing components like in your JavaScript file like this:
```javascript
$("#container").hshare();
```

You can also specify options for hshare like this:

```javascript
$("#container").hshare({
	size: "large",
	copyLink: false,
	platforms: [{
		name: "wechat"
	}, {
		name: "qzone"
	}]
});
```

Here is the option params that we currently support:

|name|meaning|value|default|
|:----:|:----:|:---:|:---:|
|size|size of the icon|small/medium/large|medium|
|copyLink|if a copy link entry is included|true/false|
|platforms|platforms that will be shown|---|---|

Currently hshare supports the following platforms, their name is shown as following:

|name|platform|
|:----:|:----:|
|qzone|分享到QQ空间与朋友网|
|qq|分享到QQ好友|
|douban|推荐到豆瓣|
|sinaweibo|分享到新浪微博|
|renren|分享到人人网|
|wechat|分享到微信|
|kaixin|分享到开心网|
|pengyou|分享到朋友网|
|tieba|分享到百度贴吧|
|renminweibo|分享到人民微博|
|hexunweibo|分享到和讯财经微博|
|tianya|分享到天涯网|
|reddit|分享到Reddit|

**Rules: **
* if you don't specify any platform, the first 5 ones will be shown as default ones.
* Even if only one platform is manually specified, the default one will not be used.
* If you specify the above platform, you won't need to specify icon resource for the linkage button, they have been included(but you may use your own if you like).
* Apart from the supported ones, you must specify your own html code for the button.

**use the supported platforms(can specify icon):**
```javascript
$("#container").hshare({
	platforms: [{
		name: "qzone"
	}, {
		name: "douban",
		icon: "https://somedomain.com/douban_icon.png"
	}]
});
```

**use the unsupported platforms:**
```javascript
$("#container").hshare({
	platforms: [{
		name: "qzone"
	}, {
		name: "something",
		customize: "<a href='some sharing action' target='_blank'><img src='some icon source'></img><a>"
	}]
});
```

## License
[MIT](https://opensource.org/licenses/MIT)