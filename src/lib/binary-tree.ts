export class BinaryTreeNode<T> {
	#data: T;
	#left: BinaryTreeNode<T> | null;
	#right: BinaryTreeNode<T> | null;

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
	set left(left: BinaryTreeNode<T> | null) {
		this.#left = left;
	}

	get right() {
		return this.#right;
	}
	set right(right: BinaryTreeNode<T> | null) {
		this.#right = right;
	}
}
