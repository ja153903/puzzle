export class Trie {
	#isWord: boolean;
	#children: Map<string, Trie>;

	constructor() {
		this.#isWord = false;
		this.#children = new Map();
	}

	insert(word: string) {
		let current: Trie = this;
		for (const ch of word) {
			if (!current.#children.has(ch)) {
				current.#children.set(ch, new Trie());
			}

			const next = current.#children.get(ch);
			if (!next) {
				throw new Error("Cannot find Trie child");
			}

			current = next;
		}

		current.#isWord = true;
	}

	contains(word: string) {
		let current: Trie = this;
		for (const ch of word) {
			if (!current.#children.has(ch)) {
				return false;
			}
			const next = current.#children.get(ch);
			if (!next) {
				return false;
			}

			current = next;
		}

		return current.#isWord;
	}

	startsWith(prefix: string) {
		let current: Trie = this;
		for (const ch of prefix) {
			if (!current.#children.has(ch)) {
				return false;
			}
			const next = current.#children.get(ch);
			if (!next) {
				return false;
			}

			current = next;
		}

		return true;
	}
}
