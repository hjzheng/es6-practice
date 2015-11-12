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

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

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

console.log('just a test !');

var t = 'test';

module.exports = t;

},{}],6:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Class = require('./Class');

var _Class2 = _interopRequireDefault(_Class);

var _Arrows = require('./Arrows');

var _TemplateString = require('./TemplateString');

var _Let = require('./Let');

var _Test = require('./Test');

var app = new _Class2['default']();

},{"./Arrows":1,"./Class":2,"./Let":3,"./TemplateString":4,"./Test":5}]},{},[6])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvaGp6aGVuZy9naXRodWJXb3Jrc3BhY2UvZXM2LXByYWN0aWNlL3NyYy9BcnJvd3MuanMiLCIvVXNlcnMvaGp6aGVuZy9naXRodWJXb3Jrc3BhY2UvZXM2LXByYWN0aWNlL3NyYy9DbGFzcy5qcyIsIi9Vc2Vycy9oanpoZW5nL2dpdGh1YldvcmtzcGFjZS9lczYtcHJhY3RpY2Uvc3JjL0xldC5qcyIsIi9Vc2Vycy9oanpoZW5nL2dpdGh1YldvcmtzcGFjZS9lczYtcHJhY3RpY2Uvc3JjL1RlbXBsYXRlU3RyaW5nLmpzIiwiL1VzZXJzL2hqemhlbmcvZ2l0aHViV29ya3NwYWNlL2VzNi1wcmFjdGljZS9zcmMvVGVzdC5qcyIsIi9Vc2Vycy9oanpoZW5nL2dpdGh1YldvcmtzcGFjZS9lczYtcHJhY3RpY2Uvc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDOztBQUVwQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHO1NBQUksR0FBRyxHQUFDLENBQUM7Q0FBQSxDQUFDLENBQUMsQ0FBQzs7QUFFbkMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUcsRUFBSTtBQUNqQixTQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0NBQ2xCLENBQUMsQ0FBQzs7QUFFSCxNQUFNLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQzs7Ozs7Ozs7Ozs7OztJQ1JmLEdBQUc7QUFFSyxZQUZSLEdBQUcsR0FFTzs0QkFGVixHQUFHOztBQUdILGFBQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNsQzs7Z0JBSkUsR0FBRzs7YUFNRixnQkFBRTtBQUNILGdCQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO09BQzNCOzs7VUFSRSxHQUFHOzs7SUFZSCxRQUFRO2FBQVIsUUFBUTs7QUFDQSxZQURSLFFBQVEsR0FDRTs0QkFEVixRQUFROztBQUVQLGlDQUZELFFBQVEsNkNBRUM7QUFDUixhQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7QUFDckMsVUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2Y7O2dCQUxFLFFBQVE7O2FBT1AsZ0JBQUU7QUFDRixnQkFBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO09BQ2pDOzs7VUFURSxRQUFRO0dBQVMsR0FBRzs7QUFZMUIsTUFBTSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUM7Ozs7O0FDeEIxQixJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7O0FBRWIsS0FBSyxJQUFJLEVBQUMsR0FBRyxDQUFDLEVBQUUsRUFBQyxHQUFHLENBQUMsRUFBRSxFQUFDLEVBQUUsRUFBRTtBQUN4QixPQUFHLElBQUksQ0FBQyxDQUFDO0NBQ1o7O0FBRUQsSUFBSTtBQUNBLFdBQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDbEIsQ0FBQyxPQUFPLENBQUMsRUFBRTtBQUNSLFdBQU8sQ0FBQyxHQUFHLENBQUMscUNBQXFDLENBQUMsQ0FBQztDQUN0RDs7QUFFRCxNQUFNLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQTs7Ozs7Ozs7OztBQ1hqQixJQUFJLE1BQU0sdUNBQXVDLENBQUE7O0FBRWpELElBQUksTUFBTSx5Q0FDQyxDQUFBOztBQUVYLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7OztBQUdwQixJQUFJLElBQUksR0FBRyxLQUFLO0lBQUUsSUFBSSxHQUFHLE9BQU8sQ0FBQztBQUNqQyxJQUFJLEtBQUssY0FBWSxJQUFJLHNCQUFpQixJQUFJLE1BQUcsQ0FBQTs7QUFFakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7O0FBR3BCLElBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxHQUFHLGlCQUFxQyxDQUFDOztBQUU3RCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDOztBQUVwQixNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQzs7Ozs7QUNuQjFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7O0FBRTdCLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQzs7QUFFZixNQUFNLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQzs7Ozs7OztxQkNKSCxTQUFTOzs7O3NCQUNQLFVBQVU7OzhCQUNQLGtCQUFrQjs7bUJBQ3JCLE9BQU87O29CQUNULFFBQVE7O0FBRXhCLElBQUksR0FBRyxHQUFHLHdCQUFTLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibGV0IGFyciA9IFsxLDIsMyw0XTtcblxuY29uc29sZS5sb2coYXJyLm1hcChudW0gPT4gbnVtKjIpKTtcblxuYXJyLmZvckVhY2gobnVtID0+IHtcbiAgY29uc29sZS5sb2cobnVtKTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFycjtcbiIsImNsYXNzIEFwcCB7XG5cbiAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICBjb25zb2xlLmxvZyhcIkFwcDo6Y29uc3RydWN0b3JcIik7XG4gICB9XG5cbiAgIGluaXQoKXtcbiAgICAgIGNvbnNvbGUubG9nKFwiQXBwOjppbml0XCIpO1xuICAgfVxuXG59XG5cbmNsYXNzIENoaWxkQXBwIGV4dGVuZHMgQXBwe1xuICAgY29uc3RydWN0b3IoKXtcbiAgICAgICBzdXBlcigpO1xuICAgICAgIGNvbnNvbGUubG9nKFwiQ2hpbGRBcHA6OmNvbnN0cnVjdG9yXCIpO1xuICAgICAgIHRoaXMuaW5pdCgpO1xuICAgfSBcblxuICAgaW5pdCgpe1xuICAgICAgIGNvbnNvbGUubG9nKFwiQ2hpbGRBcHA6OmluaXRcIik7XG4gICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2hpbGRBcHA7XG5cbiIsInZhciBhZ2UgPSA1NTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICBhZ2UgKz0gNTtcbn1cblxudHJ5IHtcbiAgICBjb25zb2xlLmxvZyhpKTtcbn0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZygnaSBpcyBvdXQgb2Ygc2NvcGUgZHVlIHRvIHVzaW5nIGxldCEnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhZ2VcbiIsIi8vIEJhc2ljIGxpdGVyYWwgc3RyaW5nIGNyZWF0aW9uXG4gICBsZXQgb2xkV2F5ID0gYEluIEphdmFTY3JpcHQgJ1xcbicgaXMgYSBsaW5lLWZlZWQuYFxuLy8gTXVsdGlsaW5lIHN0cmluZ3NcbiAgIGxldCBuZXdXYXkgPSBgSW4gSmF2YVNjcmlwdCB0aGlzIGlzXG4gICBub3QgbGVnYWwuYFxuXG4gICBjb25zb2xlLmxvZyhuZXdXYXkpO1xuXG4vLyBTdHJpbmcgaW50ZXJwb2xhdGlvblxuICAgdmFyIG5hbWUgPSBcIkJvYlwiLCB0aW1lID0gXCJ0b2RheVwiO1xuICAgbGV0IGludGVyID0gYEhlbGxvICR7bmFtZX0sIGhvdyBhcmUgeW91ICR7dGltZX0/YFxuXG4gICBjb25zb2xlLmxvZyhpbnRlcik7XG5cbi8vdGFnIGZ1bmN0aW9uXG4gIGxldCByYXdTdHIgPSBTdHJpbmcucmF3YEluIEphdmFTY3JpcHQgdGhpcyBpcyBcXG4gbm90IGxlZ2FsLmA7XG5cbiAgY29uc29sZS5sb2cocmF3U3RyKTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IHJhd1N0cjtcbiIsImNvbnNvbGUubG9nKCdqdXN0IGEgdGVzdCAhJyk7XG5cbmxldCB0ID0gJ3Rlc3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHQ7IFxuIiwiaW1wb3J0IEFwcCBmcm9tICcuL0NsYXNzJztcbmltcG9ydCB7YXJyfSBmcm9tICcuL0Fycm93cyc7XG5pbXBvcnQge3Jhd1N0cn0gZnJvbSAnLi9UZW1wbGF0ZVN0cmluZyc7XG5pbXBvcnQge2FnZX0gZnJvbSAnLi9MZXQnO1xuaW1wb3J0IHt0fSBmcm9tICcuL1Rlc3QnO1xuXG52YXIgYXBwID0gbmV3IEFwcCgpO1xuIl19
