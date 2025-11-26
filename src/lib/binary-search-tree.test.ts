import { describe, expect, test } from "bun:test";
import type { BinarySearchTreeNode } from "@/lib/binary-search-tree";
import { createBSTFromArray, search } from "@/lib/binary-search-tree.fns";

import { inorderTraversal } from "@/lib/binary-tree.fns";
import type { BinaryTree } from "@/lib/binary-tree.types";

function collectTreeNodesInorder<T>(bst: BinarySearchTreeNode<T> | null) {
	const result: T[] = [];

	const processFn = (node: BinaryTree<T>) => {
		result.push(node.data);
	};

	inorderTraversal(bst, processFn);
	return result;
}

describe("createBSTFromArray", () => {
	test("should correctly create BST", () => {
		const bst = createBSTFromArray<number>([9, 8, 7, 6], (a, b) => a - b);
		const result = collectTreeNodesInorder<number>(bst);

		expect(result).toEqual([6, 7, 8, 9]);
	});
});

describe("search", () => {
	test("it should find proper elements within BST", () => {
		const cmp = (a: number, b: number) => a - b;
		const bst = createBSTFromArray<number>([2, 1, 3, 4, 8], cmp);

		expect(search(bst, 2, cmp)).toBeTrue();
		expect(search(bst, 1, cmp)).toBeTrue();
		expect(search(bst, 3, cmp)).toBeTrue();
		expect(search(bst, 4, cmp)).toBeTrue();
		expect(search(bst, 8, cmp)).toBeTrue();
	});
});
