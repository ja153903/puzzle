import type { BinaryTree } from "@/lib/binary-tree.types";

export function inorderTraversal<T>(
	tree: BinaryTree<T> | null,
	processFn: (node: BinaryTree<T>) => void,
) {
	if (tree !== null) {
		inorderTraversal(tree.left, processFn);
		processFn(tree);
		inorderTraversal(tree.right, processFn);
	}
}

export function preorderTraversal<T>(
	tree: BinaryTree<T> | null,
	processFn: (node: BinaryTree<T>) => void,
) {
	if (tree !== null) {
		processFn(tree);
		preorderTraversal(tree.left, processFn);
		preorderTraversal(tree.right, processFn);
	}
}

export function postorderTraversal<T>(
	tree: BinaryTree<T> | null,
	processFn: (node: BinaryTree<T>) => void,
) {
	if (tree !== null) {
		postorderTraversal(tree.left, processFn);
		postorderTraversal(tree.right, processFn);
		processFn(tree);
	}
}
