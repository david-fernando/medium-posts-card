'use strict';

var classnames = require('classnames/bind');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var classnames__default = /*#__PURE__*/_interopDefaultLegacy(classnames);

var styles = {"container":"Card-module_container__SodM9","borderRadiusContainer":"Card-module_borderRadiusContainer__37hyI","thumbnail":"Card-module_thumbnail__GicTK","borderRadiusThumbnail":"Card-module_borderRadiusThumbnail__m-SrW","content":"Card-module_content__7fty0","title":"Card-module_title__otTtq","description":"Card-module_description__v-qMr","date":"Card-module_date__mbUlM","tags":"Card-module_tags__yIEry","readMore":"Card-module_readMore__ld-WG"};

var classBind = classnames__default["default"].bind(styles);

function Card(_ref) {
  var _ref$borderRadius = _ref.borderRadius,
      borderRadius = _ref$borderRadius === void 0 ? true : _ref$borderRadius,
      _ref$showTags = _ref.showTags,
      showTags = _ref$showTags === void 0 ? false : _ref$showTags,
      _ref$showDate = _ref.showDate,
      showDate = _ref$showDate === void 0 ? false : _ref$showDate;
  var borderRadiusContainer = borderRadius && styles.borderRadiusContainer;
  var borderRadiusThumbnail = borderRadius && styles.borderRadiusThumbnail;
  var imageUrl = 'https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ';
  return /*#__PURE__*/jsxRuntime.jsxs("div", {
    className: classBind(styles.container, borderRadiusContainer),
    children: [/*#__PURE__*/jsxRuntime.jsx("span", {
      children: /*#__PURE__*/jsxRuntime.jsx("img", {
        className: classBind(styles.thumbnail, borderRadiusThumbnail),
        src: imageUrl,
        alt: "T\xEDtulo do artigo"
      })
    }), /*#__PURE__*/jsxRuntime.jsxs("span", {
      className: classBind(styles.content),
      children: [/*#__PURE__*/jsxRuntime.jsx("span", {
        className: classBind(styles.title),
        children: "T\xEDtulo do artigo"
      }), /*#__PURE__*/jsxRuntime.jsx("p", {
        className: classBind(styles.description),
        children: "Um pequeno tutorial de como fazer dark theme com HTML, CSS e JavaScript puro."
      }), showDate && /*#__PURE__*/jsxRuntime.jsx("p", {
        className: classBind(styles.date),
        children: "12.06.2022"
      }), showTags && /*#__PURE__*/jsxRuntime.jsx("p", {
        className: classBind(styles.tags),
        children: "dark-mode js-tutorial javascript"
      })]
    })]
  });
}

module.exports = Card;
