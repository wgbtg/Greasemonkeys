// ==UserScript==
// @name         Twitter Image Origifier
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Converts Twitter images (pbs.twimg.com) to their largest available format (copied from github/whitebell/TwitterOriginalImage.user.js, too lazy to redo myself)
// @author       WhoGonnaBeTheGunner
// @include      https://pbs.twimg.com/media/*
// @include      https://pbs.twimg.com/media/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    (function(){
        if (document.URL.indexOf("about:blank") == -1) {
            const nowurl = document.URL;
    
            const re = /name=(?:thumb|small|medium|large|120x120|240x240|360x360|900x900|4096x4096)/;
            if (nowurl.match(re)) {
                window.location.href = nowurl.replace(re, "name=orig");
                return;
            }
    
            let m;
            if (m = nowurl.match(/\/media\/([a-zA-Z0-9_-]+)\.(jpg|png)(?::|$)/)) {
                let id = m[1], ext = m[2];
                window.location.href = "https://pbs.twimg.com/media/" + id + "?format=" + ext + "&name=orig";
                return;
            }
        }
    })();
})();