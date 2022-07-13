import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect, useRef } from 'react';
import classnames from 'classnames';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
import axios from 'axios';

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
    return (jsxs("div", __assign({ className: classnames(modules_e5a68879.container, borderRadiusContainer) }, { children: [jsx("span", { children: jsx("img", { className: classnames(modules_e5a68879.thumbnail, borderRadiusThumbnail), src: imageUrl, alt: userdata.title }) }), jsxs("span", __assign({ className: modules_e5a68879.content }, { children: [jsx("span", __assign({ className: modules_e5a68879.title }, { children: userdata.title })), jsx("p", __assign({ className: modules_e5a68879.description }, { children: userdata.description })), (options.showDate) && (jsx("p", __assign({ className: modules_e5a68879.date }, { children: userdata.date }))), (options.showTags) && (jsx("p", __assign({ className: modules_e5a68879.tags }, { children: tagsWithBlankSpace })))] }))] })));
}

var mockMedium = {
    'data': {
        'dataMedium': [
            {
                title: "Como fazer dark theme com JavaScript puro",
                date: "2021-03-07",
                link: "https://medium.com/david-fernando/como-dark-theme-com-javascript-puro-fc277377447c?source=rss-e1120fb0abef------2",
                image: "https://cdn-images-1.medium.com/max/1024/1*pUi3vkj06Vqp_sXeiI-UbQ.jpeg",
                description: "Um pequeno tutorial de como fazer dark theme com HTML, CSS e JavaScript puro.",
                tags: [
                    "dark-mode",
                    "js-tutorial",
                    "javascript",
                    "tutorial"
                ]
            },
            {
                title: "Como reduzir a quantidade de IFs",
                date: "2020-09-25",
                link: "https://medium.com/david-fernando/como-reduzir-a-quantidade-de-ifs-4484fc728397?source=rss-e1120fb0abef------2",
                image: "https://cdn-images-1.medium.com/max/1024/1*6wlQhci1Pot4BWUPDpHbfw.jpeg",
                description: "Uma introdução ao design pattern Strategy com JavaScript",
                tags: [
                    "strategy-design-pattern",
                    "ecmascript",
                    "javascript",
                    "design-patterns",
                    "ecmascript-6"
                ]
            },
            {
                title: "Por que usar TypeScript?",
                date: "2020-09-24",
                link: "https://medium.com/david-fernando/por-que-usar-typescript-ca15607eed33?source=rss-e1120fb0abef------2",
                image: "https://cdn-images-1.medium.com/max/1024/1*ODf4X51nKEMElimXA706gQ.jpeg",
                description: "Veja quais são os benefícios de utiliza-lo em seus projetos",
                tags: [
                    "ecmascript-2020",
                    "typescript",
                    "ecmascript-6",
                    "javascript",
                    "ecmascript"
                ]
            }
        ]
    }
};

function useGetMedium(username, ssr) {
    var _this = this;
    var _a = useState([]), dataMedium = _a[0], setDataMedium = _a[1];
    var array = useArray().array;
    var environment = process.env.NODE_ENV;
    var isItaTestEnvironment = environment === 'test';
    var urlBase = 'https://mediumpostapi.herokuapp.com';
    var getMedium = function () { return __awaiter(_this, void 0, void 0, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!array(dataMedium).isEmpty) {
                        return [2 /*return*/];
                    }
                    if (isItaTestEnvironment) {
                        setDataMedium(mockMedium.data.dataMedium);
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, axios.get("".concat(urlBase, "/?usermedium=").concat(username))];
                case 1:
                    response = _a.sent();
                    data = response.data.dataMedium;
                    setDataMedium(data);
                    return [2 /*return*/];
            }
        });
    }); };
    if (ssr) {
        getMedium();
    }
    useEffect(function () {
        if (ssr) {
            return;
        }
        getMedium();
    }, [getMedium]);
    return {
        dataMedium: dataMedium
    };
}

function useCarousel() {
    var _a = useState(0), position = _a[0], setPosition = _a[1];
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
    var _a = useState(false), isVisible = _a[0], setIsVisible = _a[1];
    var _b = useState(0), elementPosition = _b[0], setElementPosition = _b[1];
    var _c = useState(0), containerWidth = _c[0], setContainerWidth = _c[1];
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
    useEffect(function () {
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

var css = "a {\r\n  text-decoration: none;\r\n}\r\n\r\n.Carousel_module_container__00d20a78 {\r\n  width: 100%;\r\n  height: min-content;\r\n  min-height: 18.3rem;\r\n  max-height: 26rem;\r\n  display: flex;\r\n  background: #fff;\r\n  overflow: hidden;\r\n  padding-bottom: 0.2rem\r\n}\r\n\r\n\r\n.Carousel_module_content__00d20a78 {\r\n  display: flex;\r\n  position: relative;\r\n  background: #fff;\r\n  gap: 1rem;\r\n}\r\n\r\n.Carousel_module_carouselButton__00d20a78 {\r\n  width: 2.4rem;\r\n  height: 2.4rem;\r\n  border-radius: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  z-index: 20;\r\n  position: absolute;\r\n  top: 9rem;\r\n  border: 0;\r\n  background: rgba(0,0,0,.5);\r\n  opacity: 1;\r\n}\r\n\r\n.Carousel_module_previousButton__00d20a78 {\r\n  margin-left: 0.5%;\r\n}\r\n\r\n.Carousel_module_nextButton__00d20a78 {\r\n  margin-left: 85%;\r\n}\r\n\r\n.Carousel_module_iconButton__00d20a78 > polyline {\r\n  stroke: #fff;\r\n}\r\n\r\n\r\n@media (min-width: 482px) {\r\n  .Carousel_module_nextButton__00d20a78 {\r\n    margin-left: 87%;\r\n  } \r\n}\r\n\r\n@media (min-width: 582px) {\r\n  .Carousel_module_nextButton__00d20a78 {\r\n    margin-left: 89%;\r\n  } \r\n}\r\n\r\n@media (min-width: 643px) {\r\n  .Carousel_module_nextButton__00d20a78 {\r\n    margin-left: 90%;\r\n  } \r\n}\r\n\r\n@media (min-width: 763px) {\r\n  .Carousel_module_nextButton__00d20a78 {\r\n    margin-left: 92%;\r\n  } \r\n}\r\n\r\n@media (min-width: 933px) {\r\n  .Carousel_module_nextButton__00d20a78 {\r\n    margin-left: 93%;\r\n  } \r\n}\r\n\r\n@media (min-width: 1007px) {\r\n  .Carousel_module_nextButton__00d20a78 {\r\n    margin-left: 94%;\r\n  } \r\n}\r\n\r\n@media (min-width: 1289px) {\r\n  .Carousel_module_nextButton__00d20a78 {\r\n    margin-left: 95%;\r\n  } \r\n}";
var modules_d1f32e6e = {"container":"Carousel_module_container__00d20a78","content":"Carousel_module_content__00d20a78","carouselButton":"Carousel_module_carouselButton__00d20a78","previousButton":"Carousel_module_previousButton__00d20a78","nextButton":"Carousel_module_nextButton__00d20a78","iconButton":"Carousel_module_iconButton__00d20a78"};
n(css,{});

function Carousel(_a) {
    var username = _a.username, _b = _a.options, options = _b === void 0 ? {} : _b;
    var ssr = (options === null || options === void 0 ? void 0 : options.ssr) || false;
    var _c = useCarousel(), moveForward = _c.moveForward, moveBack = _c.moveBack, position = _c.position;
    var dataMedium = useGetMedium(username, ssr).dataMedium;
    var openInNewTab = (options.hasOwnProperty('openInNewTab')) ? options.openInNewTab : true;
    var nameTarget = (openInNewTab) ? '_blank' : '_self';
    var cardContainer = useRef();
    var carouselContainer = useRef();
    var cardIsVisible = useIsVisible(carouselContainer, cardContainer);
    var returnLastCard = useLastCard().returnLastCard;
    return (jsxs("div", __assign({ className: modules_d1f32e6e.container, ref: carouselContainer }, { children: [(position > 0) && (jsx("button", __assign({ onClick: function () { return moveBack(); }, className: classnames(modules_d1f32e6e.carouselButton, modules_d1f32e6e.previousButton) }, { children: jsx(GrFormPrevious, { className: modules_d1f32e6e.iconButton, size: 24 }) }))), jsx("span", __assign({ className: modules_d1f32e6e.content, style: { right: "".concat(position, "rem"), transition: 'right 0.6s linear' } }, { children: dataMedium.map(function (item, index) { return (jsx("a", __assign({ href: item.link, ref: returnLastCard(index, dataMedium, cardContainer), target: nameTarget }, { children: jsx(Card, { userdata: item, options: options }) }), index)); }) })), (!cardIsVisible) && (jsx("button", __assign({ onClick: function () { return moveForward(cardIsVisible); }, className: classnames(modules_d1f32e6e.carouselButton, modules_d1f32e6e.nextButton) }, { children: jsx(GrFormNext, { className: modules_d1f32e6e.iconButton, size: 24 }) })))] })));
}

export { Carousel as default };
