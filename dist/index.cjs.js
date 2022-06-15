'use strict';

var classnames = require('classnames');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var classnames__default = /*#__PURE__*/_interopDefaultLegacy(classnames);

var modules_e5a68879 = {"container":"Card_module_container__845f97ef","borderRadiusContainer":"Card_module_borderRadiusContainer__845f97ef","thumbnail":"Card_module_thumbnail__845f97ef","borderRadiusThumbnail":"Card_module_borderRadiusThumbnail__845f97ef","content":"Card_module_content__845f97ef","title":"Card_module_title__845f97ef","description":"Card_module_description__845f97ef","date":"Card_module_date__845f97ef","tags":"Card_module_tags__845f97ef","readMore":"Card_module_readMore__845f97ef"};

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
