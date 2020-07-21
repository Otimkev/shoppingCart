const computers = require("./computers");

class desktop extends computers {

	constructor(monitorSize) {
		super();
		this.monitorSize = monitorSize;
	}
}

module.exports = desktop;
