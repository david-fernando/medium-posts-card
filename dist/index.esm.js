import { jsxs, jsx } from 'react/jsx-runtime';

var styles = {"container":"Card-module_container__SodM9","borderRadiusContainer":"Card-module_borderRadiusContainer__37hyI","thumbnail":"Card-module_thumbnail__GicTK","borderRadiusThumbnail":"Card-module_borderRadiusThumbnail__m-SrW","content":"Card-module_content__7fty0","title":"Card-module_title__otTtq","description":"Card-module_description__v-qMr","date":"Card-module_date__mbUlM","tags":"Card-module_tags__yIEry","readMore":"Card-module_readMore__ld-WG"};

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
