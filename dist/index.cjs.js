'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var classnames = require('classnames');
var gr = require('react-icons/gr');

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

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function useArray() {
    function array(array) {
        if (array === void 0) { array = []; }
        var isEmpty = (array.length === 0) ? true : false;
        return {
            isEmpty: isEmpty
        };
    }
    return {
        array: array
    };
}

function useBlankSpace(tagArray) {
    var tags = tagArray.map(function (item, index) { return item.concat(' '); });
    return {
        tags: tags
    };
}

var e=[],t=[];function n(n,r){if(n&&"undefined"!=typeof document){var a,s=!0===r.prepend?"prepend":"append",d=!0===r.singleTag,i="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(d){var u=e.indexOf(i);-1===u&&(u=e.push(i)-1,t[u]={}),a=t[u]&&t[u][s]?t[u][s]:t[u][s]=c();}else a=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),a.styleSheet?a.styleSheet.cssText+=n:a.appendChild(document.createTextNode(n));}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var a="prepend"===s?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}

var css$4 = ".Card_module_container__bd43ad53 {\n  width: min-content;\n  height: 100%;\n  min-width: 25rem;\n  max-width: 35rem;\n  min-height: 25rem;\n  max-height: 35rem;\n  flex-direction: column;\n  display: flex;\n  background: #fff;\n  border: 1px solid rgba(0,0,0,.2);\n  font-size: 10px;\n  font-family: 'Roboto', sans-serif;\n  margin: 0;\n}\n\n.Card_module_borderRadiusContainer__bd43ad53 {\n  border-radius: 10px;\n}\n\n.Card_module_thumbnail__bd43ad53 {\n  width: 100%;\n  height: 12.533rem;\n  min-height: 12.533rem;\n  max-height: 14.533rem;\n}\n\n.Card_module_borderRadiusThumbnail__bd43ad53 {\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n\n.Card_module_content__bd43ad53 {\n  padding: 10px;\n}\n\n.Card_module_title__bd43ad53, .Card_module_description__bd43ad53, .Card_module_date__bd43ad53, .Card_module_tags__bd43ad53 {\n  font-size: 1.6rem;\n  color: #53565b\n}\n\n.Card_module_title__bd43ad53 {\n  font-weight: 700;\n  text-overflow: ellipsis;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  display: -webkit-box;\n  overflow: hidden;\n}\n\n.Card_module_description__bd43ad53 {\n  text-align: initial;\n  max-height: 44%;\n  text-overflow: ellipsis;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  display: -webkit-box;\n  overflow: hidden;\n}\n\n.Card_module_date__bd43ad53, .Card_module_tags__bd43ad53 {\n  font-size: 1.2rem;\n}\n\n.Card_module_tags__bd43ad53 {\n  word-spacing: 0.5rem;\n  line-height: 1.6rem;\n}";
var modules_e5a68879 = {"container":"Card_module_container__bd43ad53","borderRadiusContainer":"Card_module_borderRadiusContainer__bd43ad53","thumbnail":"Card_module_thumbnail__bd43ad53","borderRadiusThumbnail":"Card_module_borderRadiusThumbnail__bd43ad53","content":"Card_module_content__bd43ad53","title":"Card_module_title__bd43ad53","description":"Card_module_description__bd43ad53","date":"Card_module_date__bd43ad53","tags":"Card_module_tags__bd43ad53"};
n(css$4,{});

function Card(_a) {
    var userdata = _a.userdata, _b = _a.options, options = _b === void 0 ? {} : _b;
    var array = useArray().array;
    var borderRadius = (options.hasOwnProperty('borderRadius')) ? options.borderRadius : true;
    var borderRadiusContainer = (borderRadius) && modules_e5a68879.borderRadiusContainer;
    var borderRadiusThumbnail = (borderRadius) && modules_e5a68879.borderRadiusThumbnail;
    var tagArray = (array(userdata.tags).isEmpty) ? ['NoTags'] : userdata.tags;
    var tags = useBlankSpace(tagArray).tags;
    return (jsxRuntime.jsxs("div", __assign({ className: classnames__default["default"](modules_e5a68879.container, borderRadiusContainer) }, { children: [jsxRuntime.jsx("span", { children: jsxRuntime.jsx("img", { className: classnames__default["default"](modules_e5a68879.thumbnail, borderRadiusThumbnail), src: userdata.image, alt: userdata.title }) }), jsxRuntime.jsxs("span", __assign({ className: modules_e5a68879.content }, { children: [jsxRuntime.jsx("span", __assign({ className: modules_e5a68879.title }, { children: userdata.title })), jsxRuntime.jsx("p", __assign({ className: modules_e5a68879.description }, { children: userdata.description })), (options.showDate) && (jsxRuntime.jsx("p", __assign({ className: modules_e5a68879.date }, { children: userdata.date }))), (options.showTags) && (jsxRuntime.jsx("p", __assign({ className: modules_e5a68879.tags }, { children: tags })))] }))] })));
}

var axios = require('axios');
function fetchMedium(username) {
    return __awaiter(this, void 0, void 0, function () {
        var baseUrl, response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    baseUrl = 'https://mediumpostsapi.vercel.app';
                    return [4 /*yield*/, axios.get("".concat(baseUrl, "/api/").concat(username))];
                case 1:
                    response = _a.sent();
                    data = response.data;
                    return [2 /*return*/, data];
            }
        });
    });
}

function useGetMedium(username, ssr) {
    var _this = this;
    var _a = react.useState([]), dataMedium = _a[0], setDataMedium = _a[1];
    var array = useArray().array;
    react.useEffect(function () {
        if (!array(dataMedium).isEmpty || ssr) {
            return;
        }
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetchMedium(username)];
                    case 1:
                        data = _a.sent();
                        setDataMedium(data.dataMedium);
                        return [2 /*return*/];
                }
            });
        }); })();
    }, [fetchMedium]);
    return dataMedium;
}

function useCarousel() {
    var _a = react.useState(0), position = _a[0], setPosition = _a[1];
    var displacement = 19;
    function moveForward(cardIsVisible) {
        if (!cardIsVisible) {
            setPosition(position + displacement);
        }
    }
    function moveBack() {
        if (position > 0) {
            setPosition(position - displacement);
        }
    }
    return {
        position: position,
        moveForward: moveForward,
        moveBack: moveBack,
    };
}

function useIsVisible(container, element) {
    var _a = react.useState(false), isVisible = _a[0], setIsVisible = _a[1];
    var _b = react.useState(0), elementPosition = _b[0], setElementPosition = _b[1];
    var _c = react.useState(0), containerWidth = _c[0], setContainerWidth = _c[1];
    var elementDefaultValue = { x: 0 };
    var containerDefaultValue = { width: 0 };
    var timeInMiliseconds = 20;
    var excess = 110;
    setTimeout(function () {
        var _a, _b, _c, _d;
        var x = (((_b = (_a = element.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect) === null || _b === void 0 ? void 0 : _b.call(_a)) || elementDefaultValue).x;
        setElementPosition(x);
        var width = (((_d = (_c = container.current) === null || _c === void 0 ? void 0 : _c.getBoundingClientRect) === null || _d === void 0 ? void 0 : _d.call(_c)) || containerDefaultValue).width;
        setContainerWidth(width);
    }, timeInMiliseconds);
    react.useEffect(function () {
        determineIfElementIsVisible();
        // eslint-disable-next-line 
    }, [elementPosition]);
    function determineIfElementIsVisible() {
        var isElementVisible = (elementPosition + excess < containerWidth) ? true : false;
        setIsVisible(isElementVisible);
    }
    return isVisible;
}

function useLastCard() {
    function returnLastCard(cardItem, dataMedium, element) {
        var numberOfCards = dataMedium.length - 1;
        var lastCard = (cardItem === numberOfCards) ? element : null;
        return lastCard;
    }
    return {
        returnLastCard: returnLastCard
    };
}

var css$3 = "html, body {\n  font-size: 10px;\n}\n\na {\n  text-decoration: none;\n}\n\n.Carousel_module_container__e69fb471 {\n  width: 100%;\n  height: 100%;\n  min-height: 25rem;\n  max-height: 40rem;\n  display: block;\n  background: none;\n  overflow-x: hidden;\n  padding-bottom: 0.2rem\n}\n\n.Carousel_module_content__e69fb471 {\n  display: flex;\n  position: relative;\n  background: #fff;\n  gap: 1rem;\n}\n\n.Carousel_module_carouselButton__e69fb471 {\n  width: 4.0rem;\n  height: 4.0rem;\n  border-radius: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  z-index: 1;\n  border: 0;\n  background: rgba(0,0,0,.5);\n  opacity: 1;\n}\n\n.Carousel_module_previousButton__e69fb471 {\n  margin-left: 0.5%;\n  float: left;\n  top: 11.4rem;\n}\n\n.Carousel_module_nextButton__e69fb471 {\n  float: right;\n  right: 1rem;\n  top: -13.7rem;\n}\n\n.Carousel_module_iconButton__e69fb471 > polyline {\n  stroke: #fff;\n}";
var modules_d1f32e6e = {"container":"Carousel_module_container__e69fb471","content":"Carousel_module_content__e69fb471","carouselButton":"Carousel_module_carouselButton__e69fb471","previousButton":"Carousel_module_previousButton__e69fb471","nextButton":"Carousel_module_nextButton__e69fb471","iconButton":"Carousel_module_iconButton__e69fb471"};
n(css$3,{});

function Carousel(_a) {
    var _b = _a.username, username = _b === void 0 ? '' : _b, dataMedium = _a.dataMedium, _c = _a.options, options = _c === void 0 ? {} : _c;
    var ssr = (options === null || options === void 0 ? void 0 : options.ssr) || false;
    var data = useGetMedium(username, ssr);
    var medium = (ssr) ? dataMedium === null || dataMedium === void 0 ? void 0 : dataMedium.dataMedium : data;
    var _d = useCarousel(), moveForward = _d.moveForward, moveBack = _d.moveBack, position = _d.position;
    var openInNewTab = (options.hasOwnProperty('openInNewTab')) ? options.openInNewTab : true;
    var nameTarget = (openInNewTab) ? '_blank' : '_self';
    var cardContainer = react.useRef();
    var carouselContainer = react.useRef();
    var cardIsVisible = useIsVisible(carouselContainer, cardContainer);
    var returnLastCard = useLastCard().returnLastCard;
    return (jsxRuntime.jsxs("div", __assign({ className: modules_d1f32e6e.container, ref: carouselContainer }, { children: [(position > 0) && (jsxRuntime.jsx("button", __assign({ onClick: function () { return moveBack(); }, className: classnames__default["default"](modules_d1f32e6e.carouselButton, modules_d1f32e6e.previousButton) }, { children: jsxRuntime.jsx(gr.GrFormPrevious, { className: modules_d1f32e6e.iconButton, size: 24 }) }))), jsxRuntime.jsx("span", __assign({ className: modules_d1f32e6e.content, style: { right: "".concat(position, "rem"), transition: 'right 0.6s linear' } }, { children: medium.map(function (item, index) { return (jsxRuntime.jsx("a", __assign({ href: item.link, ref: returnLastCard(index, medium, cardContainer), target: nameTarget }, { children: jsxRuntime.jsx(Card, { userdata: item, options: options }) }), index)); }) })), (!cardIsVisible) && (jsxRuntime.jsx("button", __assign({ onClick: function () { return moveForward(cardIsVisible); }, className: classnames__default["default"](modules_d1f32e6e.carouselButton, modules_d1f32e6e.nextButton) }, { children: jsxRuntime.jsx(gr.GrFormNext, { className: modules_d1f32e6e.iconButton, size: 24 }) })))] })));
}

var css$2 = ".RectangularCard_module_container__e8f8839b {\n  width: 100%;\n  height: max-content;\n  min-height: 19rem;\n  display: flex;\n  background: #fff;\n  border: 1px solid rgba(0,0,0,.2);\n  font-size: 10px;\n  font-family: 'Roboto', sans-serif;\n  margin: 0;\n  gap: 1rem;\n}\n\n.RectangularCard_module_borderRadiusContainer__e8f8839b {\n  border-radius: 10px;\n}\n\n.RectangularCard_module_thumbnail__e8f8839b {\n  width: 19rem;\n  height: 100%;\n  min-height: 5rem;\n  min-width: 5rem;\n  aspect-ratio: 1/1;\n}\n\n.RectangularCard_module_borderRadiusThumbnail__e8f8839b {\n  border-top-left-radius: 10px;\n  border-bottom-left-radius: 10px\n}\n\n.RectangularCard_module_content__e8f8839b {\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  gap: 0.8rem;\n  height: max-content;\n  max-height: 40rem;\n}\n\n.RectangularCard_module_details__e8f8839b {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  gap: 0rem;\n}\n\n.RectangularCard_module_title__e8f8839b, .RectangularCard_module_description__e8f8839b, .RectangularCard_module_date__e8f8839b, .RectangularCard_module_tags__e8f8839b {\n  font-size: 1.6rem;\n  color: #53565b\n}\n\n.RectangularCard_module_title__e8f8839b {\n  font-size: 2.6rem;\n  font-weight: 700;\n  text-overflow: ellipsis;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  display: -webkit-box;\n}\n\n.RectangularCard_module_description__e8f8839b {\n  font-size: 1.6rem;\n  text-align: initial;\n  max-height: 44%;\n  text-overflow: ellipsis;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  display: -webkit-box;\n  overflow: hidden;\n}\n\n.RectangularCard_module_date__e8f8839b, .RectangularCard_module_tags__e8f8839b {\n  font-size: 1.2rem;\n}\n\n.RectangularCard_module_tags__e8f8839b {\n  word-spacing: 0.5rem;\n  line-height: 1.3rem;\n}\n\n@media (max-width: 890px) {\n  .RectangularCard_module_title__e8f8839b {\n    font-size: 1.6rem;\n  }\n  .RectangularCard_module_description__e8f8839b {\n    font-size: 1.5rem;\n  }\n  .RectangularCard_module_thumbnail__e8f8839b {\n    width: 18rem;\n    height: 100%;\n  }\n  .RectangularCard_module_content__e8f8839b {\n    gap: 0.5rem;\n    height: 14rem;\n  }\n}\n\n@media (max-width: 526px) {\n  .RectangularCard_module_description__e8f8839b {\n    overflow: visible;\n  }\n  .RectangularCard_module_thumbnail__e8f8839b {\n    width: 100%;\n    height: 24rem;\n  }\n  .RectangularCard_module_container__e8f8839b {\n    flex-direction: column;\n    height: 100%;\n    min-height: 43rem;\n  }\n  .RectangularCard_module_content__e8f8839b {\n    gap: 0rem;\n  }\n}\n";
var modules_cb0e83ce = {"container":"RectangularCard_module_container__e8f8839b","borderRadiusContainer":"RectangularCard_module_borderRadiusContainer__e8f8839b","thumbnail":"RectangularCard_module_thumbnail__e8f8839b","borderRadiusThumbnail":"RectangularCard_module_borderRadiusThumbnail__e8f8839b","content":"RectangularCard_module_content__e8f8839b","details":"RectangularCard_module_details__e8f8839b","title":"RectangularCard_module_title__e8f8839b","description":"RectangularCard_module_description__e8f8839b","date":"RectangularCard_module_date__e8f8839b","tags":"RectangularCard_module_tags__e8f8839b"};
n(css$2,{});

function RectangularCard(_a) {
    var userdata = _a.userdata, _b = _a.options, options = _b === void 0 ? {} : _b;
    var array = useArray().array;
    var borderRadius = (options.hasOwnProperty('borderRadius')) ? options.borderRadius : false;
    var showDate = (options.hasOwnProperty('showDate')) ? options.showDate : true;
    var showTags = (options.hasOwnProperty('showTags')) ? options.showTags : true;
    var borderRadiusContainer = (borderRadius) && modules_cb0e83ce.borderRadiusContainer;
    var borderRadiusThumbnail = (borderRadius) && modules_cb0e83ce.borderRadiusThumbnail;
    var tagArray = (array(userdata.tags).isEmpty) ? ['NoTags'] : userdata.tags;
    var tags = useBlankSpace(tagArray).tags;
    return (jsxRuntime.jsxs("div", __assign({ className: classnames__default["default"](modules_cb0e83ce.container, borderRadiusContainer) }, { children: [jsxRuntime.jsx("span", { children: jsxRuntime.jsx("img", { className: classnames__default["default"](modules_cb0e83ce.thumbnail, borderRadiusThumbnail), src: userdata.image, alt: userdata.title }) }), jsxRuntime.jsxs("span", __assign({ className: modules_cb0e83ce.content }, { children: [jsxRuntime.jsx("span", __assign({ className: modules_cb0e83ce.title }, { children: userdata.title })), jsxRuntime.jsx("p", __assign({ className: modules_cb0e83ce.description }, { children: userdata.description })), jsxRuntime.jsxs("span", __assign({ className: modules_cb0e83ce.details }, { children: [(showDate) && (jsxRuntime.jsx("p", __assign({ className: modules_cb0e83ce.date }, { children: userdata.date }))), (showTags) && (jsxRuntime.jsx("p", __assign({ className: modules_cb0e83ce.tags }, { children: tags })))] }))] }))] })));
}

var css$1 = "html, body {\n  font-size: 10px;\n}\n\na {\n  text-decoration: none;\n}\n\n.List_module_container__d9646218 {\n  width: 100%;\n  height: 100%;\n  display: block;\n  background: none;\n  padding-bottom: 0.2rem\n}\n\n.List_module_content__d9646218 {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  background: #fff;\n  gap: 1rem;\n}";
var modules_7b101142 = {"container":"List_module_container__d9646218","content":"List_module_content__d9646218"};
n(css$1,{});

function List(_a) {
    var _b = _a.username, username = _b === void 0 ? '' : _b, dataMedium = _a.dataMedium, _c = _a.options, options = _c === void 0 ? {} : _c;
    var ssr = (options === null || options === void 0 ? void 0 : options.ssr) || false;
    var data = useGetMedium(username, ssr);
    var medium = (ssr) ? dataMedium === null || dataMedium === void 0 ? void 0 : dataMedium.dataMedium : data;
    var openInNewTab = (options.hasOwnProperty('openInNewTab')) ? options.openInNewTab : true;
    var nameTarget = (openInNewTab) ? '_blank' : '_self';
    return (jsxRuntime.jsx("div", __assign({ className: modules_7b101142.container }, { children: jsxRuntime.jsx("span", __assign({ className: modules_7b101142.content }, { children: medium.map(function (item, index) { return (jsxRuntime.jsx("a", __assign({ href: item.link, target: nameTarget }, { children: jsxRuntime.jsx(RectangularCard, { userdata: item, options: options }) }), index)); }) })) })));
}

var css = ".Label_module_container__ee32c7c2 {\n    align-items: flex-start;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    height: 0px auto;\n    max-width: 100%;\n  }\n\n  .Label_module_title__ee32c7c2 {\n    font-size: 2.4rem;\n    color: #53565b;\n    font-family: Roboto, sans-serif;\n  }\n  \n  @media (max-width: 717px) {\n    .Label_module_container__ee32c7c2 {\n      align-items: center;\n    }\n  }";
var modules_536e8d56 = {"container":"Label_module_container__ee32c7c2","title":"Label_module_title__ee32c7c2"};
n(css,{});

function Label(_a) {
    var _b = _a.text, text = _b === void 0 ? 'Medium Articles' : _b, children = _a.children;
    return (jsxRuntime.jsxs("div", __assign({ className: modules_536e8d56.container }, { children: [jsxRuntime.jsx("span", __assign({ className: modules_536e8d56.title }, { children: text })), children] })));
}

exports.Carousel = Carousel;
exports.Label = Label;
exports.List = List;
exports.fetchMedium = fetchMedium;
