// ==UserScript==
// @name        Remove Adventure Time Subreddit Background
// @namespace   http://rogerhub.com/
// @version     0.1
// @match       http://www.reddit.com/r/adventuretime/*
// ==/UserScript==

(function() {
    var s = document.createElement("style");
    s.innerHTML="body{background: none !important;}";
	document.head.appendChild(s);
})();
