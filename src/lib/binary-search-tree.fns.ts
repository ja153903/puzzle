import {
	BinarySearchTreeNode,
	type BSTComparator,
} from "@/lib/binary-search-tree";

/**
 * insertNodeIntoBST allows you to insert a new value into a BST
 * @returns BinarySearchTreeNode<T> ~ always returns the root of a tree
 */
export function insertNodeIntoBST<T>(
	root: BinarySearchTreeNode<T> | null,
	value: T,
	cmp: BSTComparator<T>,
): BinarySearchTreeNode<T> {
	if (root === null) {
		return new BinarySearchTreeNode<T>(value);
	}

	if (cmp(root.data, value) > 0) {
		root.left = insertNodeIntoBST(root.left, value, cmp);
	} else if (cmp(root.data, value) < 0) {
		root.right = insertNodeIntoBST(root.right, value, cmp);
	}

	return root;
}

export function search<T>(
	root: BinarySearchTreeNode<T> | null,
	value: T,
	cmp: BSTComparator<T>,
) {
	if (root === null) {
		return false;
	}

	if (cmp(root.data, value) === 0) {
		return true;
	}

	if (cmp(root.data, value) > 0) {
		return search(root.left, value, cmp);
	}

	return search(root.right, value, cmp);
}

/**
 * createBSTFromArray returns the root of a binary search tree from an array of items
 * @returns BinarySearchTreeNode<T> ~ root of a binary search tree
 */
export function createBSTFromArray<T>(
	array: T[],
	cmp: BSTComparator<T>,
): BinarySearchTreeNode<T> | null {
	if (array.length === 0) {
		return null;
	}

	const first = array[0];
	if (first === undefined) {
		return null;
	}

	const root = new BinarySearchTreeNode<T>(first);

	for (let i = 1; i < array.length; i++) {
		const current = array[i];
		if (current === undefined) {
			throw new Error("Undefined value within array of type T");
		}
		insertNodeIntoBST(root, current, cmp);
	}

	return root;
}
