const computers = require("./computers");

class laptop extends computers {

	constructor(battery, ram, hdd, screenSize, color, price) {
		super(ram, hdd, screenSize, color, price);
		this.battery = battery;
	}
}

module.exports = laptop;
