const software = require("./software");

class antivirus extends software() {

	constructor(category,operatingSystem, price, version) {
		super(operatingSystem, price, version);
		this.category = category;
	}
}

module.exports = antivirus;
