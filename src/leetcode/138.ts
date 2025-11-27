import { _Node } from "@/lib/leetcode";

// FIXME: This current implementation assumes that we have unique values for val
// we need to make sure that we account for this
function copyRandomList(head: _Node | null): _Node | null {
	if (!head) {
		return null;
	}

	const copies = new Map<number, _Node>();

	// use a map to keep track of the new copies of the nodes
	let current: _Node | null = head;
	let prev: _Node | null = null;

	while (current !== null) {
		const copy = new _Node(current.val);
		if (prev) {
			prev.next = copy;
		}

		copies.set(current.val, copy);

		prev = copy;
		current = current.next;
	}

	current = head;

	while (current !== null) {
		const copy = copies.get(current.val);
		if (!copy) {
			throw new Error("You should already exist");
		}

		if (current.random?.val != null) {
			const randomCopy = copies.get(current.random.val) ?? null;
			copy.random = randomCopy;
		}

		current = current.next;
	}

	return copies.get(head.val) ?? null;
}

export { copyRandomList };
