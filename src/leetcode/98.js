/** @import { TreeNode } from "../lib/leetcode" */

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isValidBST(root) {
	/** @type {number[]} */
	const collected = [];

	/**
	 * @param {TreeNode} node
	 * @return {void}
	 */
	function inorder(node) {
		if (!node) return;
		inorder(node.left);
		collected.push(node.val);
		inorder(node.right);
	}

	inorder(root);

	for (let i = 1; i < collected.length; i++) {
		if (collected[i - 1] >= collected[i]) {
			return false;
		}
	}

	return true;
}

export { isValidBST };
