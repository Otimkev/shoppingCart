const software = require("./software");

class msOffice extends software() {

	constructor(numberOfPackages,operatingSystem, price, version) {
		super(operatingSystem,price,version);
		this.numberOfPackages = numberOfPackages;
	}
}

module.exports = msOffice;
