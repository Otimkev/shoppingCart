const software = require("./software");

class msOffice extends software() {
	#numberOfPackages;

	constructor(numberOfPackages) {
		super();
		this.#numberOfPackages = numberOfPackages;
	}
}

module.exports = msOffice;
