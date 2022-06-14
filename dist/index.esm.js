import { jsxs, jsx } from 'react/jsx-runtime';

var styles = ".container {\r\n  width: min-content;\r\n  height: min-content;\r\n  min-width: 20rem;\r\n  max-width: 22rem;\r\n  min-height: 20rem;\r\n  max-height: 22rem;\r\n  flex-direction: column;\r\n  display: flex;\r\n  background: #fff;\r\n  border: 1px solid rgba(0,0,0,.2);\r\n}\r\n\r\n.borderRadiusContainer {\r\n  border-radius: 10px;\r\n}\r\n\r\n.thumbnail {\r\n  width: 100%;\r\n  height: 12.533rem;\r\n}\r\n\r\n.borderRadiusThumbnail {\r\n  border-top-left-radius: 10px;\r\n  border-top-right-radius: 10px;\r\n}\r\n\r\n.content {\r\n  padding: 10px;\r\n}\r\n\r\n.title, .description, .date, .tags, .readMore {\r\n  font-size: 1rem;\r\n  color: #53565b\r\n}\r\n\r\n.title {\r\n  font-weight: 700;\r\n}\r\n\r\n.description {\r\n  text-align: initial;\r\n  max-height: 44%;\r\n  text-overflow: ellipsis;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-line-clamp: 2;\r\n  display: -webkit-box;\r\n  overflow: hidden;\r\n}\r\n\r\n.date, .tags, .readMore {\r\n  font-size: 0.8rem;\r\n}\r\n\r\n.tags {\r\n  word-spacing: 0.5rem;\r\n}";

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
  return /*#__PURE__*/jsxs("div", {
    className: "".concat(styles.container, " ").concat(borderRadiusContainer),
    children: [/*#__PURE__*/jsx("span", {
      children: /*#__PURE__*/jsx("img", {
        className: "".concat(styles.thumbnail, " ").concat(borderRadiusThumbnail),
        src: imageUrl,
        alt: "T\xEDtulo do artigo"
      })
    }), /*#__PURE__*/jsxs("span", {
      className: styles.content,
      children: [/*#__PURE__*/jsx("span", {
        className: styles.title,
        children: "T\xEDtulo do artigo"
      }), /*#__PURE__*/jsx("p", {
        className: styles.description,
        children: "Um pequeno tutorial de como fazer dark theme com HTML, CSS e JavaScript puro."
      }), showDate && /*#__PURE__*/jsx("p", {
        className: styles.date,
        children: "12.06.2022"
      }), showTags && /*#__PURE__*/jsx("p", {
        className: styles.tags,
        children: "dark-mode js-tutorial javascript"
      })]
    })]
  });
}

export { Card as default };
