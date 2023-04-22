// ==UserScript==
// @name RemoveRM_Flair
// @namespace https://github.com/MdoubleDash
// @version 1.1
// @description Removes the recognized member text from RM's flair
// @author MDoubleDash (@M--)
// @contributor  @Makyen
// @match *://*.stackoverflow.com/questions/*
// @downloadURL https://github.com/MdoubleDash/Remove_RM_Flair/edit/main/Remove RM Flair.user.js
// @updateURL   https://github.com/MdoubleDash/Remove_RM_Flair/edit/main/Remove RM Flair.user.js
// @grant none
// ==/UserScript==

(function() {
    'use strict';

    document.documentElement.insertAdjacentHTML('beforeend', '<style type="text/css" id="my-hide-recognized-by-collective"> .s-user-card--type.affiliate-badge.px8.pb8.mtn4.fs-caption { display: none; }</style>') 
  
})();
