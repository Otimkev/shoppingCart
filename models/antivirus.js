const software = require("./software");

class antivirus extends software() {
	#category;

	constructor(category) {
		super();
		this.#category = category;
	}
}

module.exports = antivirus;
