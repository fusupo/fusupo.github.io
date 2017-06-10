/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//(function() {
var addClass = function addClass(elm, cls) {
  for (var i = 0; i < cls.length; i++) {
    elm.classList.add(cls[i]);
  }
};

var mkDiv = function mkDiv(cls) {
  var div = document.createElement('DIV');
  addClass(div, cls);
  return div;
};

var left = ['col-md-3'];
var middle = ['col-md-6'];
var right = ['col-md-3'];

var container = mkDiv(['container-fluid']);

var preamble = document.getElementById('preamble');
var content = document.getElementById('content');
var postamble = document.getElementById('postamble');
var subtitle = document.getElementById('subtitle');

var postamblerow = mkDiv(['row']);
var contentrow = mkDiv(['row']);
var preamblerow = mkDiv(['row']);

document.body.appendChild(container); // Append <button> to <body>

container.appendChild(preamblerow);
container.appendChild(contentrow);
container.appendChild(postamblerow);

preamblerow.appendChild(mkDiv(left));
preamblerow.appendChild(preamble);
preamblerow.appendChild(mkDiv(right));

contentrow.appendChild(mkDiv(left));
contentrow.appendChild(content);
contentrow.appendChild(mkDiv(right));

postamblerow.appendChild(mkDiv(left));
postamblerow.appendChild(postamble);
postamblerow.appendChild(mkDiv(right));

addClass(preamble, middle);
addClass(content, middle);
addClass(postamble, middle);

//////////////////////////////////////////////////////////////////////////////

var formatTimestamps = function formatTimestamps(selector, format) {
  var titleTimestamps = document.querySelectorAll(selector);
  if (titleTimestamps.length > 0) {
    Array.prototype.forEach.call(titleTimestamps, function (el, i) {
      var dateStr = el.innerHTML;
      dateStr = dateStr.substr(1, dateStr.length - 2);
      var mom = moment(dateStr, 'YYYY-MM-DD ddd');
      el.innerHTML = mom.format(format);
    });
  }
};

formatTimestamps('.title .timestamp', 'MMMM Do YYYY');
formatTimestamps('.post-list .timestamp', 'MMM DD');

//////////////////////////////////////////////////////////////////////////////

var randomSubtitile = function randomSubtitile() {
  var potentials = ['foo', 'bar', 'baz', 'javascript, clojure, things between'];
  var msg = potentials[Math.floor(Math.random() * potentials.length)];
  subtitle.innerHTML = msg;
};

subtitle && randomSubtitile();

setTimeout(function () {
  preamble.style.display = 'block';
}, 0);

setTimeout(function () {
  content.style.display = 'block';
}, 0);

setTimeout(function () {
  postamble.style.display = 'block';
}, 0);

//////////////////////////////////////////////////////////////////////////////
//})();

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map