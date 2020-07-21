const laptop = require("./models/laptops");
const desktop = require("./models/desktop");

class shopeFactory {
	create() {
		return new laptop("8hrs", "4GB", "1TB", "16inch", "silver", 3500);
	}
}
module.exports = shopeFactory;
