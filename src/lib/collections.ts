export class Counter<T> extends Map<T, number> {
	constructor(values: Iterable<T>) {
		super();

		for (const value of values) {
			this.set(value, (this.get(value) ?? 0) + 1);
		}
	}

	canDecrement(key: T) {
		if (!this.has(key)) return false;
		return (this.get(key) ?? 0) - 1 >= 0;
	}

	incrementBy(key: T, by = 1) {
		this.set(key, (this.get(key) ?? 0) + by);
	}

	decrementBy(key: T, by = 1) {
		this.set(key, (this.get(key) ?? 0) - by);
	}

	/**
	 * This checks if all values in the map are empty
	 */
	get empty() {
		for (const value of this.values()) {
			if (value > 0) {
				return false;
			}
		}

		return true;
	}
}
