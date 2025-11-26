export type BSTComparator<T> = (a: T, b: T) => number;

export class BinarySearchTreeNode<T> {
	#data: T;
	#left: BinarySearchTreeNode<T> | null;
	#right: BinarySearchTreeNode<T> | null;

	constructor(data: T) {
		this.#data = data;

		this.#left = null;
		this.#right = null;
	}

	get data() {
		return this.#data;
	}
	set data(value: T) {
		this.#data = value;
	}

	get left() {
		return this.#left;
	}
	set left(node: BinarySearchTreeNode<T> | null) {
		this.#left = node;
	}

	get right() {
		return this.#right;
	}
	set right(node: BinarySearchTreeNode<T> | null) {
		this.#right = node;
	}
}
