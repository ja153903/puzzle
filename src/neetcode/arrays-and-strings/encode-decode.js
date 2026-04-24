class Solution {
	/**
	 * @param {string[]} strs
	 * @returns {string}
	 */
	encode(strs) {
		/** @type {string[]} */
		const encoded = [];

		for (const str of strs) {
			encoded.push(`${str.length}#${str}`);
		}

		return encoded.join("");
	}

	/**
	 * @param {string} ch
	 * @returns {boolean}
	 */
	isNumber(ch) {
		return "0" <= ch && ch <= "9";
	}

	/**
	 * @param {string} str
	 * @returns {string[]}
	 */
	decode(str) {
		/** @type {string[]} */
		const decoded = [];

		let i = 0;
		while (i < str.length) {
			let length = 0;

			while (i < str.length && this.isNumber(str[i])) {
				length = length * 10 + Number.parseInt(str[i], 10);
				i++;
			}

			i++;

			let count = 0;
			/** @type {string[]} */
			const decodedStr = [];
			while (i < str.length && count < length) {
				decodedStr.push(str[i]);
				count++;
				i++;
			}

			decoded.push(decodedStr.join(""));
		}

		return decoded;
	}
}

export { Solution };
