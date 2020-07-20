const computers = require("./computers");

class desktop extends computers {
	#monitorSize;

	constructor(monitorSize) {
		super();
		this.#monitorSize = monitorSize;
	}
}

module.exports = desktop;
