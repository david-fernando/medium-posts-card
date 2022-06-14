'use strict';

var jsxRuntime = require('react/jsx-runtime');

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".Card-module_container__SodM9 {\r\n  width: min-content;\r\n  height: min-content;\r\n  min-width: 20rem;\r\n  max-width: 22rem;\r\n  min-height: 20rem;\r\n  max-height: 22rem;\r\n  flex-direction: column;\r\n  display: flex;\r\n  background: #fff;\r\n  border: 1px solid rgba(0,0,0,.2);\r\n  font-size: 10px;\r\n  font-family: 'Roboto', sans-serif;\r\n  margin: 0;\r\n}\r\n\r\n.Card-module_borderRadiusContainer__37hyI {\r\n  border-radius: 10px;\r\n}\r\n\r\n.Card-module_thumbnail__GicTK {\r\n  width: 100%;\r\n  height: 12.533rem;\r\n}\r\n\r\n.Card-module_borderRadiusThumbnail__m-SrW {\r\n  border-top-left-radius: 10px;\r\n  border-top-right-radius: 10px;\r\n}\r\n\r\n.Card-module_content__7fty0 {\r\n  padding: 10px;\r\n}\r\n\r\n.Card-module_title__otTtq, .Card-module_description__v-qMr, .Card-module_date__mbUlM, .Card-module_tags__yIEry, .Card-module_readMore__ld-WG {\r\n  font-size: 1rem;\r\n  color: #53565b\r\n}\r\n\r\n.Card-module_title__otTtq {\r\n  font-weight: 700;\r\n}\r\n\r\n.Card-module_description__v-qMr {\r\n  text-align: initial;\r\n  max-height: 44%;\r\n  text-overflow: ellipsis;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-line-clamp: 2;\r\n  display: -webkit-box;\r\n  overflow: hidden;\r\n}\r\n\r\n.Card-module_date__mbUlM, .Card-module_tags__yIEry, .Card-module_readMore__ld-WG {\r\n  font-size: 0.8rem;\r\n}\r\n\r\n.Card-module_tags__yIEry {\r\n  word-spacing: 0.5rem;\r\n}";
var styles = {"container":"Card-module_container__SodM9","borderRadiusContainer":"Card-module_borderRadiusContainer__37hyI","thumbnail":"Card-module_thumbnail__GicTK","borderRadiusThumbnail":"Card-module_borderRadiusThumbnail__m-SrW","content":"Card-module_content__7fty0","title":"Card-module_title__otTtq","description":"Card-module_description__v-qMr","date":"Card-module_date__mbUlM","tags":"Card-module_tags__yIEry","readMore":"Card-module_readMore__ld-WG"};
styleInject(css_248z);

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
    className: "".concat(styles.container, " ").concat(borderRadiusContainer),
    children: [/*#__PURE__*/jsxRuntime.jsx("span", {
      children: /*#__PURE__*/jsxRuntime.jsx("img", {
        className: "".concat(styles.thumbnail, " ").concat(borderRadiusThumbnail),
        src: imageUrl,
        alt: "T\xEDtulo do artigo"
      })
    }), /*#__PURE__*/jsxRuntime.jsxs("span", {
      className: styles.content,
      children: [/*#__PURE__*/jsxRuntime.jsx("span", {
        className: styles.title,
        children: "T\xEDtulo do artigo"
      }), /*#__PURE__*/jsxRuntime.jsx("p", {
        className: styles.description,
        children: "Um pequeno tutorial de como fazer dark theme com HTML, CSS e JavaScript puro."
      }), showDate && /*#__PURE__*/jsxRuntime.jsx("p", {
        className: styles.date,
        children: "12.06.2022"
      }), showTags && /*#__PURE__*/jsxRuntime.jsx("p", {
        className: styles.tags,
        children: "dark-mode js-tutorial javascript"
      })]
    })]
  });
}

module.exports = Card;
