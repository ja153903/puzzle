import type { ListNode } from "@/lib/leetcode";

function hasCycle(head: ListNode | null): boolean {
	let slow = head;
	let fast = head;

	while (fast?.next) {
		slow = slow?.next ?? null;
		fast = fast.next?.next;

		if (slow === fast) {
			return true;
		}
	}

	return false;
}

export { hasCycle };
