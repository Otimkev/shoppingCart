class keyboardModel {
	#type;
	#color;
	#brand;

	constructor(type, color, brand) {
		this.#type = type;
		this.#color = color;
		this.#brand = brand;
	}

	getRam() {
		return this.#type;
	}
}

module.exports = keyboardModel;