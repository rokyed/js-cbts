(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

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
		key: "initialize",
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
		key: "sendData",
		value: function sendData(data) {
			var request = new XMLHttpRequest();
			var date = new Date().toString();

			request.open('GET', this._dest + "?data=" + encodeURIComponent(JSON.stringify({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvaW5kZXguanMiLCJzcmMvanMtY2J0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztJQ0FNLHVCO0FBQ0wsa0NBQWEsT0FBYixFQUFzQixXQUF0QixFQUFtQztBQUFBOztBQUNsQyxPQUFLLEdBQUwsR0FBVyxPQUFYO0FBQ0EsT0FBSyxLQUFMLEdBQWEsV0FBYjtBQUNBLE9BQUssVUFBTDtBQUNBOzs7OytCQUVhO0FBQ2IsT0FBSSxLQUFLLElBQVQ7QUFDQSxRQUFLLEdBQUwsQ0FBUyxPQUFULEdBQW1CLFVBQVMsR0FBVCxFQUFjLEdBQWQsRUFBbUIsSUFBbkIsRUFBeUIsR0FBekIsRUFBOEIsS0FBOUIsRUFBcUM7QUFDckQsT0FBRyxRQUFILENBQVksS0FBWixDQUFrQixFQUFsQixFQUFzQixDQUFDO0FBQ3RCLGNBQVMsR0FEYTtBQUV0QixVQUFLLEdBRmlCO0FBR3RCLFdBQU0sSUFIZ0I7QUFJdEIsVUFBSyxHQUppQjtBQUt0QixZQUFPO0FBTGUsS0FBRCxDQUF0Qjs7QUFRQSxXQUFPLEtBQVA7QUFDRixJQVZEO0FBV0E7OzsyQkFFUyxJLEVBQU07QUFDZixPQUFJLFVBQVUsSUFBSSxjQUFKLEVBQWQ7QUFDQSxPQUFJLE9BQU8sSUFBSSxJQUFKLEdBQVcsUUFBWCxFQUFYOztBQUVBLFdBQVEsSUFBUixDQUFhLEtBQWIsRUFBb0IsS0FBSyxLQUFMLEdBQWEsUUFBYixHQUF3QixtQkFBbUIsS0FBSyxTQUFMLENBQWU7QUFDN0UsVUFBTSxJQUR1RTtBQUU3RSxVQUFNLElBRnVFO0FBRzdFLFVBQU0sS0FBSyxHQUFMLENBQVMsUUFBVCxDQUFrQjtBQUhxRCxJQUFmLENBQW5CLENBQTVDLEVBSUssSUFKTDs7QUFNQSxXQUFRLElBQVI7QUFDQTs7Ozs7O0FBR0YsT0FBTyxPQUFQLEdBQWlCLHVCQUFqQjs7Ozs7QUNwQ0EsT0FBTyxTQUFQLElBQW9CLFFBQVEsWUFBUixDQUFwQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJjbGFzcyBDbGllbnRCdWdUcmFja2luZ1N5c3RlbSB7XG5cdGNvbnN0cnVjdG9yIChob3N0T2JqLCBkZXN0aW5hdGlvbikge1xuXHRcdHRoaXMuX2hvID0gaG9zdE9iajtcblx0XHR0aGlzLl9kZXN0ID0gZGVzdGluYXRpb247XG5cdFx0dGhpcy5pbml0aWFsaXplKCk7XG5cdH1cblxuXHRpbml0aWFsaXplICgpIHtcblx0XHRsZXQgbWUgPSB0aGlzO1xuXHRcdHRoaXMuX2hvLm9uZXJyb3IgPSBmdW5jdGlvbihtc2csIHVybCwgbGluZSwgY29sLCBlcnJvcikge1xuXHRcdCAgIG1lLnNlbmREYXRhLmFwcGx5KG1lLCBbe1xuXHRcdFx0ICAgbWVzc2FnZTogbXNnLFxuXHRcdFx0ICAgdXJsOiB1cmwsXG5cdFx0XHQgICBsaW5lOiBsaW5lLFxuXHRcdFx0ICAgY29sOiBjb2wsXG5cdFx0XHQgICBlcnJvcjogZXJyb3Jcblx0XHQgICB9XSk7XG5cblx0XHQgICByZXR1cm4gZmFsc2U7XG5cdFx0fTtcblx0fVxuXG5cdHNlbmREYXRhIChkYXRhKSB7XG5cdFx0bGV0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblx0XHRsZXQgZGF0ZSA9IG5ldyBEYXRlKCkudG9TdHJpbmcoKTtcblxuXHRcdHJlcXVlc3Qub3BlbignR0VUJywgdGhpcy5fZGVzdCArIFwiP2RhdGE9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0ZGF0YTogZGF0YSxcblx0XHRcdHdoZW46IGRhdGUsXG5cdFx0XHRmcm9tOiB0aGlzLl9oby5sb2NhdGlvbi5ocmVmXG5cdFx0fSkpLCB0cnVlKTtcblxuXHRcdHJlcXVlc3Quc2VuZCgpO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2xpZW50QnVnVHJhY2tpbmdTeXN0ZW07XG4iLCJ3aW5kb3dbJ0pTLUNCVFMnXSA9IHJlcXVpcmUoJy4vaW5kZXguanMnKTtcbiJdfQ==
