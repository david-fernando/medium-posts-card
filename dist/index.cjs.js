'use strict';

var jsxRuntime = require('react/jsx-runtime');
var classnames = require('classnames');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var classnames__default = /*#__PURE__*/_interopDefaultLegacy(classnames);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var e=[],t=[];function n(n,r){if(n&&"undefined"!=typeof document){var a,s=!0===r.prepend?"prepend":"append",d=!0===r.singleTag,i="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(d){var u=e.indexOf(i);-1===u&&(u=e.push(i)-1,t[u]={}),a=t[u]&&t[u][s]?t[u][s]:t[u][s]=c();}else a=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),a.styleSheet?a.styleSheet.cssText+=n:a.appendChild(document.createTextNode(n));}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var a="prepend"===s?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}

var css = ".Card_module_container__845f97ef {\r\n  width: min-content;\r\n  height: min-content;\r\n  min-width: 20rem;\r\n  max-width: 22rem;\r\n  min-height: 20rem;\r\n  max-height: 22rem;\r\n  flex-direction: column;\r\n  display: flex;\r\n  background: #fff;\r\n  border: 1px solid rgba(0,0,0,.2);\r\n  font-size: 10px;\r\n  font-family: 'Roboto', sans-serif;\r\n  margin: 0;\r\n}\r\n\r\n.Card_module_borderRadiusContainer__845f97ef {\r\n  border-radius: 10px;\r\n}\r\n\r\n.Card_module_thumbnail__845f97ef {\r\n  width: 100%;\r\n  height: 12.533rem;\r\n}\r\n\r\n.Card_module_borderRadiusThumbnail__845f97ef {\r\n  border-top-left-radius: 10px;\r\n  border-top-right-radius: 10px;\r\n}\r\n\r\n.Card_module_content__845f97ef {\r\n  padding: 10px;\r\n}\r\n\r\n.Card_module_title__845f97ef, .Card_module_description__845f97ef, .Card_module_date__845f97ef, .Card_module_tags__845f97ef, .Card_module_readMore__845f97ef {\r\n  font-size: 1rem;\r\n  color: #53565b\r\n}\r\n\r\n.Card_module_title__845f97ef {\r\n  font-weight: 700;\r\n}\r\n\r\n.Card_module_description__845f97ef {\r\n  text-align: initial;\r\n  max-height: 44%;\r\n  text-overflow: ellipsis;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-line-clamp: 2;\r\n  display: -webkit-box;\r\n  overflow: hidden;\r\n}\r\n\r\n.Card_module_date__845f97ef, .Card_module_tags__845f97ef, .Card_module_readMore__845f97ef {\r\n  font-size: 0.8rem;\r\n}\r\n\r\n.Card_module_tags__845f97ef {\r\n  word-spacing: 0.5rem;\r\n}";
var modules_e5a68879 = {"container":"Card_module_container__845f97ef","borderRadiusContainer":"Card_module_borderRadiusContainer__845f97ef","thumbnail":"Card_module_thumbnail__845f97ef","borderRadiusThumbnail":"Card_module_borderRadiusThumbnail__845f97ef","content":"Card_module_content__845f97ef","title":"Card_module_title__845f97ef","description":"Card_module_description__845f97ef","date":"Card_module_date__845f97ef","tags":"Card_module_tags__845f97ef","readMore":"Card_module_readMore__845f97ef"};
n(css,{});

function Card(_a) {
    var _b = _a.options, options = _b === void 0 ? {} : _b;
    var borderRadius = (options.hasOwnProperty('borderRadius')) ? options.borderRadius : true;
    var borderRadiusContainer = (borderRadius) && modules_e5a68879.borderRadiusContainer;
    var borderRadiusThumbnail = (borderRadius) && modules_e5a68879.borderRadiusThumbnail;
    var imageUrl = 'https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ';
    return (jsxRuntime.jsxs("div", __assign({ className: classnames__default["default"](modules_e5a68879.container, borderRadiusContainer) }, { children: [jsxRuntime.jsx("span", { children: jsxRuntime.jsx("img", { className: classnames__default["default"](modules_e5a68879.thumbnail, borderRadiusThumbnail), src: imageUrl, alt: "T\u00EDtulo do artigo" }) }), jsxRuntime.jsxs("span", __assign({ className: modules_e5a68879.content }, { children: [jsxRuntime.jsx("span", __assign({ className: modules_e5a68879.title }, { children: "T\u00EDtulo do artigo" })), jsxRuntime.jsx("p", __assign({ className: modules_e5a68879.description }, { children: "Um pequeno tutorial de como fazer dark theme com HTML, CSS e JavaScript puro." })), (options.showDate) && (jsxRuntime.jsx("p", __assign({ className: modules_e5a68879.date }, { children: "12.06.2022" }))), (options.showTags) && (jsxRuntime.jsx("p", __assign({ className: modules_e5a68879.tags }, { children: "dark-mode js-tutorial javascript" })))] }))] })));
}

module.exports = Card;
