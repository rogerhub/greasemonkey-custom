// ==UserScript==
// @name       Remove Ubuntu Forums Background
// @namespace  http://rogerhub.com/
// @version    0.2
// @description Removes the background on ubuntuforums.org
// @match      http://ubuntuforums.org/*
// @copyright  2012+, RogerHub
// @require    http://code.jquery.com/jquery-1.9.1.min.js
// ==/UserScript==

(function($) {
    $(document).ready(function() {
        $('body').css("background", "none");
    });
})(jQuery);
