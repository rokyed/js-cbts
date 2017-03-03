class ClientBugTrackingSystem {
	constructor (hostObj, destination) {
		this._ho = hostObj;
		this._dest = destination;
		this.initialize();
	}

	initialize () {
		let me = this;
		this._ho.onerror = function(msg, url, line, col, error) {
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

	sendData (data) {
		let request = new XMLHttpRequest();
		let date = new Date().toString();

		request.open('GET', this._dest + "?data=" + encodeURIComponent(JSON.stringify({
			data: data,
			when: date,
			from: this._ho.location.href
		})), true);

		request.send();
	}
}

module.exports = ClientBugTrackingSystem;
