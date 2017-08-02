"use strict";

(function () {
    'use strict';

    function deviceInfo() {
        var ua = navigator.userAgent.toLowerCase(),
            isAndroid = ua.match(/(android);?[\s\/]+([\d.]+)?/),
            isIOS = ua.match(/(iphone\sos)\s([\d_]+)/);
        if (isIOS) {
            var versions = /[\S\s]*os ([\d_]+) like/ig.exec(ua);
            // iOS 版本
            var iOSMajorVersion = parseInt(versions[1], 10);
        }
        return {
            "isAndroid": isAndroid || "",
            "isIOS": isIOS || "",
            "iosVersion": iOSMajorVersion || ""
        };
    }

    console.log('index.js is load!!');
    console.log(deviceInfo());
})();