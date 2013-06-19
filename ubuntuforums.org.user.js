// ==UserScript==
// @name        Remove Ubuntu Forums Background
// @namespace   http://rogerhub.com/
// @version     0.3
// @match       http://ubuntuforums.org/*
// ==/UserScript==

(function() {
    var s = document.createElement("style");
    s.innerHTML="html{background: none !important;}";
	document.head.appendChild(s);
})();
