# hshare - a jQuery social sharing plugin

This is a social sharing plugin that allows web developers to include social sharing buttons/links with just some basic configuration. Existing platforms such as bshare/baidushare/jiathis uses **HTTP** protocol to fetch resources which makes it very hard to deploy such services on **HTTPS** pages due to security restriction. This is what triggers this project. Currently it still supports limited number of platform, but I believe that it will be better through time : )

## Demo

Here is a demo of the default platforms:

![demo picture](http://ohtikzqed.bkt.clouddn.com/QQ%E5%9B%BE%E7%89%8720170121223132.jpg)

## Supported Platforms
[Platforms](https://github.com/HeavenDuke/hshare/wiki/Supported-Platforms)

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
|copyLink|if a copy link entry is included|true/false|true|
|print|if a print page entry is included|true/false|false|
|bookmark|if a bookmark entry is included|true/false|false|
|collapse|if a collapsable + is included|true/false|true|
|renderText|if text is shown|true/false|false|
|platforms|platforms that will be shown|---|---|

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

## Rules:
* if you don't specify any platform, the first 5 ones will be shown as default ones.
* Even if only one platform is manually specified, the default one will not be used.
* If you specify the above platform, you won't need to specify icon resource for the linkage button, they have been included(but you may use your own if you like).
* Apart from the supported ones, you must specify your own html code for the button.
* If collapse param is set to true, then all platforms that are no manually specified will be included in the + button.
* If renderText param is set to true, then size will be disabled and icon size is set to small by default.


## Contributors
* [HeavenDuke](https://github.com/HeavenDuke)
* [AsherWang](https://github.com/AsherWang)

## License
[MIT](https://opensource.org/licenses/MIT)