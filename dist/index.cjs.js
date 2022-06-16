'use strict';

var classnames = require('classnames');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var classnames__default = /*#__PURE__*/_interopDefaultLegacy(classnames);

var e=[],t=[];function n(n,r){if(n&&"undefined"!=typeof document){var a,s=!0===r.prepend?"prepend":"append",d=!0===r.singleTag,i="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(d){var u=e.indexOf(i);-1===u&&(u=e.push(i)-1,t[u]={}),a=t[u]&&t[u][s]?t[u][s]:t[u][s]=c();}else a=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),a.styleSheet?a.styleSheet.cssText+=n:a.appendChild(document.createTextNode(n));}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var a="prepend"===s?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}

var css = ".Card_module_container__845f97ef {\r\n  width: min-content;\r\n  height: min-content;\r\n  min-width: 20rem;\r\n  max-width: 22rem;\r\n  min-height: 20rem;\r\n  max-height: 22rem;\r\n  flex-direction: column;\r\n  display: flex;\r\n  background: #fff;\r\n  border: 1px solid rgba(0,0,0,.2);\r\n  font-size: 10px;\r\n  font-family: 'Roboto', sans-serif;\r\n  margin: 0;\r\n}\r\n\r\n.Card_module_borderRadiusContainer__845f97ef {\r\n  border-radius: 10px;\r\n}\r\n\r\n.Card_module_thumbnail__845f97ef {\r\n  width: 100%;\r\n  height: 12.533rem;\r\n}\r\n\r\n.Card_module_borderRadiusThumbnail__845f97ef {\r\n  border-top-left-radius: 10px;\r\n  border-top-right-radius: 10px;\r\n}\r\n\r\n.Card_module_content__845f97ef {\r\n  padding: 10px;\r\n}\r\n\r\n.Card_module_title__845f97ef, .Card_module_description__845f97ef, .Card_module_date__845f97ef, .Card_module_tags__845f97ef, .Card_module_readMore__845f97ef {\r\n  font-size: 1rem;\r\n  color: #53565b\r\n}\r\n\r\n.Card_module_title__845f97ef {\r\n  font-weight: 700;\r\n}\r\n\r\n.Card_module_description__845f97ef {\r\n  text-align: initial;\r\n  max-height: 44%;\r\n  text-overflow: ellipsis;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-line-clamp: 2;\r\n  display: -webkit-box;\r\n  overflow: hidden;\r\n}\r\n\r\n.Card_module_date__845f97ef, .Card_module_tags__845f97ef, .Card_module_readMore__845f97ef {\r\n  font-size: 0.8rem;\r\n}\r\n\r\n.Card_module_tags__845f97ef {\r\n  word-spacing: 0.5rem;\r\n}";
var modules_e5a68879 = {"container":"Card_module_container__845f97ef","borderRadiusContainer":"Card_module_borderRadiusContainer__845f97ef","thumbnail":"Card_module_thumbnail__845f97ef","borderRadiusThumbnail":"Card_module_borderRadiusThumbnail__845f97ef","content":"Card_module_content__845f97ef","title":"Card_module_title__845f97ef","description":"Card_module_description__845f97ef","date":"Card_module_date__845f97ef","tags":"Card_module_tags__845f97ef","readMore":"Card_module_readMore__845f97ef"};
n(css,{});

function Card(_ref) {
  var _ref$borderRadius = _ref.borderRadius,
      borderRadius = _ref$borderRadius === void 0 ? true : _ref$borderRadius,
      _ref$showTags = _ref.showTags,
      showTags = _ref$showTags === void 0 ? false : _ref$showTags,
      _ref$showDate = _ref.showDate,
      showDate = _ref$showDate === void 0 ? false : _ref$showDate;
  var borderRadiusContainer = borderRadius && modules_e5a68879.borderRadiusContainer;
  var borderRadiusThumbnail = borderRadius && modules_e5a68879.borderRadiusThumbnail;
  var imageUrl = 'https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ';
  return /*#__PURE__*/jsxRuntime.jsxs("div", {
    className: classnames__default["default"](modules_e5a68879.container, borderRadiusContainer),
    children: [/*#__PURE__*/jsxRuntime.jsx("span", {
      children: /*#__PURE__*/jsxRuntime.jsx("img", {
        className: classnames__default["default"](modules_e5a68879.thumbnail, borderRadiusThumbnail),
        src: imageUrl,
        alt: "T\xEDtulo do artigo"
      })
    }), /*#__PURE__*/jsxRuntime.jsxs("span", {
      className: modules_e5a68879.content,
      children: [/*#__PURE__*/jsxRuntime.jsx("span", {
        className: modules_e5a68879.title,
        children: "T\xEDtulo do artigo"
      }), /*#__PURE__*/jsxRuntime.jsx("p", {
        className: modules_e5a68879.description,
        children: "Um pequeno tutorial de como fazer dark theme com HTML, CSS e JavaScript puro."
      }), showDate && /*#__PURE__*/jsxRuntime.jsx("p", {
        className: modules_e5a68879.date,
        children: "12.06.2022"
      }), showTags && /*#__PURE__*/jsxRuntime.jsx("p", {
        className: modules_e5a68879.tags,
        children: "dark-mode js-tutorial javascript"
      })]
    })]
  });
}

module.exports = Card;
