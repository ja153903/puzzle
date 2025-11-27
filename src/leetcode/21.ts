import type { ListNode } from "@/lib/leetcode";

function mergeTwoLists(a: ListNode | null, b: ListNode | null) {
	if (!a && !b) {
		return null;
	}
	if (!a) {
		return b;
	}
	if (!b) {
		return a;
	}

	if (a.val < b.val) {
		a.next = mergeTwoLists(a.next, b);
		return a;
	} else {
		b.next = mergeTwoLists(a, b.next);
		return b;
	}
}

export { mergeTwoLists };
