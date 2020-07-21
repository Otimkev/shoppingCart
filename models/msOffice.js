const software = require("./software");

class msOffice extends software() {

	constructor(numberOfPackages) {
		super();
		this.numberOfPackages = numberOfPackages;
	}
}

module.exports = msOffice;
