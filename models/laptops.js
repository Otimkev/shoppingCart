const computers = require("./computers");

class laptop extends computers {
	#battery;

	constructor(battery, ram, hdd, screenSize, color, price) {
		super(ram, hdd, screenSize, color, price);
		this.#battery = battery;
	}
}

module.exports = laptop;
