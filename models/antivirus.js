const software = require("./software");

class antivirus extends software() {

	constructor(category) {
		super();
		this.category = category;
	}
}

module.exports = antivirus;
