const computers = require("./computers");

class desktop extends computers {

	constructor(monitorSize,ram, hdd, screenSize, color, price) {
		super(ram, hdd,screenSize,color,price);
		this.monitorSize = monitorSize;
	}
}

module.exports = desktop;
