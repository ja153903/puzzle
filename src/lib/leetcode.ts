export class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val ?? 0;
		this.next = next ?? null;
	}
}

export class TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;

	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = val ?? 0;
		this.left = left ?? null;
		this.right = right ?? null;
	}
}

// NOTE: This was used in one problem that needed a random pointer
export class _Node {
	val: number;
	next: _Node | null;
	random: _Node | null;

	constructor(val?: number, next?: _Node, random?: _Node) {
		this.val = val ?? 0;
		this.next = next ?? null;
		this.random = random ?? null;
	}
}
