(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var arr = [1, 2, 3, 4];

console.log(arr.map(function (num) {
  return num * 2;
}));

arr.forEach(function (num) {
  console.log(num);
});

module.exports = arr;

},{}],2:[function(require,module,exports){
"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = (function () {
   function App() {
      _classCallCheck(this, App);

      console.log("App::constructor");
   }

   _createClass(App, [{
      key: "init",
      value: function init() {
         console.log("App::init");
      }
   }]);

   return App;
})();

var ChildApp = (function (_App) {
   _inherits(ChildApp, _App);

   function ChildApp() {
      _classCallCheck(this, ChildApp);

      _get(Object.getPrototypeOf(ChildApp.prototype), "constructor", this).call(this);
      console.log("ChildApp::constructor");
      this.init();
   }

   _createClass(ChildApp, [{
      key: "init",
      value: function init() {
         console.log("ChildApp::init");
      }
   }]);

   return ChildApp;
})(App);

module.exports = ChildApp;

},{}],3:[function(require,module,exports){
'use strict';

var age = 55;

for (var _i = 0; _i < 5; _i++) {
    age += 5;
}

try {
    console.log(i);
} catch (e) {
    console.log('i is out of scope due to using let!');
}

module.exports = age;

},{}],4:[function(require,module,exports){
// Basic literal string creation
"use strict";

var _templateObject = _taggedTemplateLiteral(["In JavaScript this is \n not legal."], ["In JavaScript this is \\n not legal."]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var oldWay = "In JavaScript '\n' is a line-feed.";
// Multiline strings
var newWay = "In JavaScript this is\n   not legal.";

console.log(newWay);

// String interpolation
var name = "Bob",
    time = "today";
var inter = "Hello " + name + ", how are you " + time + "?";

console.log(inter);

//tag function
var rawStr = String.raw(_templateObject);

console.log(rawStr);

module.exports = rawStr;

},{}],5:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Class = require('./Class');

var _Class2 = _interopRequireDefault(_Class);

var _Arrows = require('./Arrows');

var _TemplateString = require('./TemplateString');

var _Let = require('./Let');

var app = new _Class2['default']();

},{"./Arrows":1,"./Class":2,"./Let":3,"./TemplateString":4}]},{},[5])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvcm9vdC9ndWxwLWVzNi1tb2R1bGUvc3JjL0Fycm93cy5qcyIsIi9yb290L2d1bHAtZXM2LW1vZHVsZS9zcmMvQ2xhc3MuanMiLCIvcm9vdC9ndWxwLWVzNi1tb2R1bGUvc3JjL0xldC5qcyIsIi9yb290L2d1bHAtZXM2LW1vZHVsZS9zcmMvVGVtcGxhdGVTdHJpbmcuanMiLCIvcm9vdC9ndWxwLWVzNi1tb2R1bGUvc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDOztBQUVwQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHO1NBQUksR0FBRyxHQUFDLENBQUM7Q0FBQSxDQUFDLENBQUMsQ0FBQzs7QUFFbkMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUcsRUFBSTtBQUNqQixTQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0NBQ2xCLENBQUMsQ0FBQzs7QUFFSCxNQUFNLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQzs7Ozs7Ozs7Ozs7OztJQ1JmLEdBQUc7QUFFSyxZQUZSLEdBQUcsR0FFTzs0QkFGVixHQUFHOztBQUdILGFBQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNsQzs7Z0JBSkUsR0FBRzs7YUFNRixnQkFBRTtBQUNILGdCQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO09BQzNCOzs7VUFSRSxHQUFHOzs7SUFZSCxRQUFRO2FBQVIsUUFBUTs7QUFDQSxZQURSLFFBQVEsR0FDRTs0QkFEVixRQUFROztBQUVQLGlDQUZELFFBQVEsNkNBRUM7QUFDUixhQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7QUFDckMsVUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2Y7O2dCQUxFLFFBQVE7O2FBT1AsZ0JBQUU7QUFDRixnQkFBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO09BQ2pDOzs7VUFURSxRQUFRO0dBQVMsR0FBRzs7QUFZMUIsTUFBTSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUM7Ozs7O0FDeEIxQixJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7O0FBRWIsS0FBSyxJQUFJLEVBQUMsR0FBRyxDQUFDLEVBQUUsRUFBQyxHQUFHLENBQUMsRUFBRSxFQUFDLEVBQUUsRUFBRTtBQUN4QixPQUFHLElBQUksQ0FBQyxDQUFDO0NBQ1o7O0FBRUQsSUFBSTtBQUNBLFdBQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDbEIsQ0FBQyxPQUFPLENBQUMsRUFBRTtBQUNSLFdBQU8sQ0FBQyxHQUFHLENBQUMscUNBQXFDLENBQUMsQ0FBQztDQUN0RDs7QUFFRCxNQUFNLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQTs7Ozs7Ozs7OztBQ1hqQixJQUFJLE1BQU0sdUNBQXVDLENBQUE7O0FBRWpELElBQUksTUFBTSx5Q0FDQyxDQUFBOztBQUVYLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7OztBQUdwQixJQUFJLElBQUksR0FBRyxLQUFLO0lBQUUsSUFBSSxHQUFHLE9BQU8sQ0FBQztBQUNqQyxJQUFJLEtBQUssY0FBWSxJQUFJLHNCQUFpQixJQUFJLE1BQUcsQ0FBQTs7QUFFakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7O0FBR3BCLElBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxHQUFHLGlCQUFxQyxDQUFDOztBQUU3RCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDOztBQUVwQixNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQzs7Ozs7OztxQkNuQlYsU0FBUzs7OztzQkFDUCxVQUFVOzs4QkFDUCxrQkFBa0I7O21CQUNyQixPQUFPOztBQUV6QixJQUFJLEdBQUcsR0FBRyx3QkFBUyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImxldCBhcnIgPSBbMSwyLDMsNF07XG5cbmNvbnNvbGUubG9nKGFyci5tYXAobnVtID0+IG51bSoyKSk7XG5cbmFyci5mb3JFYWNoKG51bSA9PiB7XG4gIGNvbnNvbGUubG9nKG51bSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBhcnI7XG4iLCJjbGFzcyBBcHAge1xuXG4gICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgY29uc29sZS5sb2coXCJBcHA6OmNvbnN0cnVjdG9yXCIpO1xuICAgfVxuXG4gICBpbml0KCl7XG4gICAgICBjb25zb2xlLmxvZyhcIkFwcDo6aW5pdFwiKTtcbiAgIH1cblxufVxuXG5jbGFzcyBDaGlsZEFwcCBleHRlbmRzIEFwcHtcbiAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgc3VwZXIoKTtcbiAgICAgICBjb25zb2xlLmxvZyhcIkNoaWxkQXBwOjpjb25zdHJ1Y3RvclwiKTtcbiAgICAgICB0aGlzLmluaXQoKTtcbiAgIH0gXG5cbiAgIGluaXQoKXtcbiAgICAgICBjb25zb2xlLmxvZyhcIkNoaWxkQXBwOjppbml0XCIpO1xuICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENoaWxkQXBwO1xuXG4iLCJ2YXIgYWdlID0gNTU7XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgYWdlICs9IDU7XG59XG5cbnRyeSB7XG4gICAgY29uc29sZS5sb2coaSk7XG59IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coJ2kgaXMgb3V0IG9mIHNjb3BlIGR1ZSB0byB1c2luZyBsZXQhJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYWdlXG4iLCIvLyBCYXNpYyBsaXRlcmFsIHN0cmluZyBjcmVhdGlvblxuICAgbGV0IG9sZFdheSA9IGBJbiBKYXZhU2NyaXB0ICdcXG4nIGlzIGEgbGluZS1mZWVkLmBcbi8vIE11bHRpbGluZSBzdHJpbmdzXG4gICBsZXQgbmV3V2F5ID0gYEluIEphdmFTY3JpcHQgdGhpcyBpc1xuICAgbm90IGxlZ2FsLmBcblxuICAgY29uc29sZS5sb2cobmV3V2F5KTtcblxuLy8gU3RyaW5nIGludGVycG9sYXRpb25cbiAgIHZhciBuYW1lID0gXCJCb2JcIiwgdGltZSA9IFwidG9kYXlcIjtcbiAgIGxldCBpbnRlciA9IGBIZWxsbyAke25hbWV9LCBob3cgYXJlIHlvdSAke3RpbWV9P2BcblxuICAgY29uc29sZS5sb2coaW50ZXIpO1xuXG4vL3RhZyBmdW5jdGlvblxuICBsZXQgcmF3U3RyID0gU3RyaW5nLnJhd2BJbiBKYXZhU2NyaXB0IHRoaXMgaXMgXFxuIG5vdCBsZWdhbC5gO1xuXG4gIGNvbnNvbGUubG9nKHJhd1N0cik7XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSByYXdTdHI7XG4iLCJpbXBvcnQgQXBwIGZyb20gJy4vQ2xhc3MnO1xuaW1wb3J0IHthcnJ9IGZyb20gJy4vQXJyb3dzJztcbmltcG9ydCB7cmF3U3RyfSBmcm9tICcuL1RlbXBsYXRlU3RyaW5nJztcbmltcG9ydCB7YWdlfSBmcm9tICcuL0xldCc7XG5cbnZhciBhcHAgPSBuZXcgQXBwKCk7XG4iXX0=
