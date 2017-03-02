(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ClientBugTrackingSystem = function () {
	function ClientBugTrackingSystem(hostObj, destination) {
		_classCallCheck(this, ClientBugTrackingSystem);

		this._ho = hostObj;
		this._dest = destination;
		this.initialize();
	}

	_createClass(ClientBugTrackingSystem, [{
		key: 'initialize',
		value: function initialize() {
			var me = this;
			this._ho.onerror = function (msg, url, line, col, error) {
				me.sendData.apply(me, [{
					message: msg,
					url: url,
					line: line,
					col: col,
					error: error
				}]);

				return false;
			};
		}
	}, {
		key: 'sendData',
		value: function sendData(data) {
			var request = new XMLHttpRequest();
			var date = new Date().toString();

			request.open('GET', this._dest + encodeURIComponent(JSON.stringify({
				data: data,
				when: date,
				from: this._ho.location.href
			})), true);

			request.send();
		}
	}]);

	return ClientBugTrackingSystem;
}();

module.exports = ClientBugTrackingSystem;

},{}],2:[function(require,module,exports){
'use strict';

window['JS-CBTS'] = require('./index.js');

},{"./index.js":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvaW5kZXguanMiLCJzcmMvanMtY2J0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztJQ0FNLHVCO0FBQ0wsa0NBQWEsT0FBYixFQUFzQixXQUF0QixFQUFtQztBQUFBOztBQUNsQyxPQUFLLEdBQUwsR0FBVyxPQUFYO0FBQ0EsT0FBSyxLQUFMLEdBQWEsV0FBYjtBQUNBLE9BQUssVUFBTDtBQUNBOzs7OytCQUVhO0FBQ2IsT0FBSSxLQUFLLElBQVQ7QUFDQSxRQUFLLEdBQUwsQ0FBUyxPQUFULEdBQW1CLFVBQVMsR0FBVCxFQUFjLEdBQWQsRUFBbUIsSUFBbkIsRUFBeUIsR0FBekIsRUFBOEIsS0FBOUIsRUFBcUM7QUFDckQsT0FBRyxRQUFILENBQVksS0FBWixDQUFrQixFQUFsQixFQUFzQixDQUFDO0FBQ3RCLGNBQVMsR0FEYTtBQUV0QixVQUFLLEdBRmlCO0FBR3RCLFdBQU0sSUFIZ0I7QUFJdEIsVUFBSyxHQUppQjtBQUt0QixZQUFPO0FBTGUsS0FBRCxDQUF0Qjs7QUFRQSxXQUFPLEtBQVA7QUFDRixJQVZEO0FBV0E7OzsyQkFHUyxJLEVBQU07QUFDZixPQUFJLFVBQVUsSUFBSSxjQUFKLEVBQWQ7QUFDQSxPQUFJLE9BQU8sSUFBSSxJQUFKLEdBQVcsUUFBWCxFQUFYOztBQUdBLFdBQVEsSUFBUixDQUFhLEtBQWIsRUFBb0IsS0FBSyxLQUFMLEdBQWEsbUJBQW1CLEtBQUssU0FBTCxDQUFlO0FBQ2xFLFVBQU0sSUFENEQ7QUFFbEUsVUFBTSxJQUY0RDtBQUdsRSxVQUFNLEtBQUssR0FBTCxDQUFTLFFBQVQsQ0FBa0I7QUFIMEMsSUFBZixDQUFuQixDQUFqQyxFQUlLLElBSkw7O0FBTUEsV0FBUSxJQUFSO0FBQ0E7Ozs7OztBQUdGLE9BQU8sT0FBUCxHQUFpQix1QkFBakI7Ozs7O0FDdENBLE9BQU8sU0FBUCxJQUFvQixRQUFRLFlBQVIsQ0FBcEIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiY2xhc3MgQ2xpZW50QnVnVHJhY2tpbmdTeXN0ZW0ge1xuXHRjb25zdHJ1Y3RvciAoaG9zdE9iaiwgZGVzdGluYXRpb24pIHtcblx0XHR0aGlzLl9obyA9IGhvc3RPYmo7XG5cdFx0dGhpcy5fZGVzdCA9IGRlc3RpbmF0aW9uO1xuXHRcdHRoaXMuaW5pdGlhbGl6ZSgpO1xuXHR9XG5cblx0aW5pdGlhbGl6ZSAoKSB7XG5cdFx0bGV0IG1lID0gdGhpcztcblx0XHR0aGlzLl9oby5vbmVycm9yID0gZnVuY3Rpb24obXNnLCB1cmwsIGxpbmUsIGNvbCwgZXJyb3IpIHtcblx0XHQgICBtZS5zZW5kRGF0YS5hcHBseShtZSwgW3tcblx0XHRcdCAgIG1lc3NhZ2U6IG1zZyxcblx0XHRcdCAgIHVybDogdXJsLFxuXHRcdFx0ICAgbGluZTogbGluZSxcblx0XHRcdCAgIGNvbDogY29sLFxuXHRcdFx0ICAgZXJyb3I6IGVycm9yXG5cdFx0ICAgfV0pO1xuXG5cdFx0ICAgcmV0dXJuIGZhbHNlO1xuXHRcdH07XG5cdH1cblxuXG5cdHNlbmREYXRhIChkYXRhKSB7XG5cdFx0bGV0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblx0XHRsZXQgZGF0ZSA9IG5ldyBEYXRlKCkudG9TdHJpbmcoKTtcblxuXG5cdFx0cmVxdWVzdC5vcGVuKCdHRVQnLCB0aGlzLl9kZXN0ICsgZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdGRhdGE6IGRhdGEsXG5cdFx0XHR3aGVuOiBkYXRlLFxuXHRcdFx0ZnJvbTogdGhpcy5faG8ubG9jYXRpb24uaHJlZlxuXHRcdH0pKSwgdHJ1ZSk7XG5cblx0XHRyZXF1ZXN0LnNlbmQoKTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENsaWVudEJ1Z1RyYWNraW5nU3lzdGVtO1xuIiwid2luZG93WydKUy1DQlRTJ10gPSByZXF1aXJlKCcuL2luZGV4LmpzJyk7XG4iXX0=
