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
<link rel="stylesheet" href="hshare.min.css">
<script type="text/javascript" href="jquery.min.js"></script>
<script type="text/javascript" href="hshare.min.js"></script>
```

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

Then initialize the social sharing components in your JavaScript file like this:
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

Furthur Demo & Documentation is shown below:
* [Basic Usage](https://github.com/HeavenDuke/hshare/wiki/Basic-Usage)
* [Rules](https://github.com/HeavenDuke/hshare/wiki/Rules)
* [Configure a platform](https://github.com/HeavenDuke/hshare/wiki/Configure-a-platform)
* [Configure a more entry](https://github.com/HeavenDuke/hshare/wiki/Configure-a-more-entry)
* [Enable statistics](https://github.com/HeavenDuke/hshare/wiki/Enable-statistics)
* [Supported platforms](https://github.com/HeavenDuke/hshare/wiki/Supported-Platforms)

## Contributors
* [HeavenDuke](https://github.com/HeavenDuke)
* [AsherWang](https://github.com/AsherWang)

## License
[MIT](https://opensource.org/licenses/MIT)
