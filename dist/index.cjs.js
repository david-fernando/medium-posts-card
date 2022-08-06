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

var e=[],t=[];function n(n,r){if(n&&"undefined"!=typeof document){var a,s=!0===r.prepend?"prepend":"append",d=!0===r.singleTag,i="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(d){var u=e.indexOf(i);-1===u&&(u=e.push(i)-1,t[u]={}),a=t[u]&&t[u][s]?t[u][s]:t[u][s]=c();}else a=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),a.styleSheet?a.styleSheet.cssText+=n:a.appendChild(document.createTextNode(n));}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var a="prepend"===s?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}

var css$1 = ".Card_module_container__0e637d59 {\r\n  width: min-content;\r\n  height: 100%;\r\n  min-width: 18rem;\r\n  max-width: 22rem;\r\n  min-height: 18rem;\r\n  max-height: 23rem;\r\n  flex-direction: column;\r\n  display: flex;\r\n  background: #fff;\r\n  border: 1px solid rgba(0,0,0,.2);\r\n  font-size: 10px;\r\n  font-family: 'Roboto', sans-serif;\r\n  margin: 0;\r\n}\r\n\r\n.Card_module_borderRadiusContainer__0e637d59 {\r\n  border-radius: 10px;\r\n}\r\n\r\n.Card_module_thumbnail__0e637d59 {\r\n  width: 100%;\r\n  height: 9.533rem;\r\n  min-height: 9.533rem;\r\n  max-height: 12.533rem;\r\n}\r\n\r\n.Card_module_borderRadiusThumbnail__0e637d59 {\r\n  border-top-left-radius: 10px;\r\n  border-top-right-radius: 10px;\r\n}\r\n\r\n.Card_module_content__0e637d59 {\r\n  padding: 10px;\r\n}\r\n\r\n.Card_module_title__0e637d59, .Card_module_description__0e637d59, .Card_module_date__0e637d59, .Card_module_tags__0e637d59, .Card_module_readMore__0e637d59 {\r\n  font-size: 1rem;\r\n  color: #53565b\r\n}\r\n\r\n.Card_module_title__0e637d59 {\r\n  font-weight: 700;\r\n  text-overflow: ellipsis;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-line-clamp: 2;\r\n  display: -webkit-box;\r\n  overflow: hidden;\r\n}\r\n\r\n.Card_module_description__0e637d59 {\r\n  text-align: initial;\r\n  max-height: 44%;\r\n  text-overflow: ellipsis;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-line-clamp: 2;\r\n  display: -webkit-box;\r\n  overflow: hidden;\r\n}\r\n\r\n.Card_module_date__0e637d59, .Card_module_tags__0e637d59, .Card_module_readMore__0e637d59 {\r\n  font-size: 0.8rem;\r\n}\r\n\r\n.Card_module_tags__0e637d59 {\r\n  word-spacing: 0.5rem;\r\n  line-height: 1.3rem;\r\n}";
var modules_e5a68879 = {"container":"Card_module_container__0e637d59","borderRadiusContainer":"Card_module_borderRadiusContainer__0e637d59","thumbnail":"Card_module_thumbnail__0e637d59","borderRadiusThumbnail":"Card_module_borderRadiusThumbnail__0e637d59","content":"Card_module_content__0e637d59","title":"Card_module_title__0e637d59","description":"Card_module_description__0e637d59","date":"Card_module_date__0e637d59","tags":"Card_module_tags__0e637d59","readMore":"Card_module_readMore__0e637d59"};
n(css$1,{});

function Card(_a) {
    var userdata = _a.userdata, _b = _a.options, options = _b === void 0 ? {} : _b;
    var array = useArray().array;
    var borderRadius = (options.hasOwnProperty('borderRadius')) ? options.borderRadius : true;
    var borderRadiusContainer = (borderRadius) && modules_e5a68879.borderRadiusContainer;
    var borderRadiusThumbnail = (borderRadius) && modules_e5a68879.borderRadiusThumbnail;
    var mediumUrl = userdata.image.split('.clientViewed')[0];
    var mediumUrlBlocked = 'https://medium.com/_/stat?event=post';
    var placeholderUrl = 'https://placehold.jp/bdbdc2/ffffff/250x250.png?text=No%20image';
    var tags = (array(userdata.tags).isEmpty) ? ['NoTags'] : userdata.tags;
    var tagsWithBlankSpace = tags.map(function (item, index) { return item.concat(' '); });
    var imageUrl = (mediumUrl === mediumUrlBlocked) ? placeholderUrl : userdata.image;
    return (jsxRuntime.jsxs("div", __assign({ className: classnames__default["default"](modules_e5a68879.container, borderRadiusContainer) }, { children: [jsxRuntime.jsx("span", { children: jsxRuntime.jsx("img", { className: classnames__default["default"](modules_e5a68879.thumbnail, borderRadiusThumbnail), src: imageUrl, alt: userdata.title }) }), jsxRuntime.jsxs("span", __assign({ className: modules_e5a68879.content }, { children: [jsxRuntime.jsx("span", __assign({ className: modules_e5a68879.title }, { children: userdata.title })), jsxRuntime.jsx("p", __assign({ className: modules_e5a68879.description }, { children: userdata.description })), (options.showDate) && (jsxRuntime.jsx("p", __assign({ className: modules_e5a68879.date }, { children: userdata.date }))), (options.showTags) && (jsxRuntime.jsx("p", __assign({ className: modules_e5a68879.tags }, { children: tagsWithBlankSpace })))] }))] })));
}

var axios = require('axios');
function fetchMedium(username) {
    return __awaiter(this, void 0, void 0, function () {
        var baseUrl, response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    baseUrl = 'https://mediumpostapi.herokuapp.com';
                    return [4 /*yield*/, axios.get("".concat(baseUrl, "/?usermedium=").concat(username))];
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
        var isElementVisible = (elementPosition < containerWidth) ? true : false;
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

var css = "a {\r\n  text-decoration: none;\r\n}\r\n\r\n.Carousel_module_container__8b418cc9 {\r\n  width: 100%;\r\n  height: 18.3rem;\r\n  min-height: 18.3rem;\r\n  max-height: 26rem;\r\n  display: block;\r\n  background: none;\r\n  overflow: hidden;\r\n  padding-bottom: 0.2rem\r\n}\r\n\r\n\r\n.Carousel_module_content__8b418cc9 {\r\n  display: flex;\r\n  position: relative;\r\n  background: #fff;\r\n  gap: 1rem;\r\n}\r\n\r\n.Carousel_module_carouselButton__8b418cc9 {\r\n  width: 2.4rem;\r\n  height: 2.4rem;\r\n  border-radius: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: relative;\r\n  z-index: 1;\r\n  border: 0;\r\n  background: rgba(0,0,0,.5);\r\n  opacity: 1;\r\n}\r\n\r\n.Carousel_module_previousButton__8b418cc9 {\r\n  margin-left: 0.5%;\r\n  float: left;\r\n  top: 8.4rem;\r\n}\r\n\r\n.Carousel_module_nextButton__8b418cc9 {\r\n  float: right;\r\n  right: 1rem;\r\n  top: -9.7rem;\r\n}\r\n\r\n.Carousel_module_iconButton__8b418cc9 > polyline {\r\n  stroke: #fff;\r\n}";
var modules_d1f32e6e = {"container":"Carousel_module_container__8b418cc9","content":"Carousel_module_content__8b418cc9","carouselButton":"Carousel_module_carouselButton__8b418cc9","previousButton":"Carousel_module_previousButton__8b418cc9","nextButton":"Carousel_module_nextButton__8b418cc9","iconButton":"Carousel_module_iconButton__8b418cc9"};
n(css,{});

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

exports.Carousel = Carousel;
exports.fetchMedium = fetchMedium;
