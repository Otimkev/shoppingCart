class laptopBag {

	constructor(color, numberOfPockets, dimensions, price) {
		this.color = color;
		this.numberOfPockets = numberOfPockets;
		this.dimensions = dimensions;
		this.price = price;
	}

	getRam() {
		return this.#color;
	}
}
module.exports = laptopBag;
