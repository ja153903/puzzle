import { Counter } from "@/lib/collections";

function minWindow(s: string, t: string): string {
	if (t.length > s.length) {
		return "";
	}

	const counter = new Counter<string>(t);

	let windowStart = 0;
	let minWindowLen = Number.POSITIVE_INFINITY;

	let left = 0,
		right = 0;
	let size = t.length;

	// the issue I see right now is that we're always decrementing even if the key
	// doesn't exist; we end up adding it as a negative value
	while (right < s.length) {
		if ((counter.get(s[right]) ?? 0) > 0) {
			size--;
		}

		counter.decrementBy(s[right]);
		right++;

		while (size === 0) {
			if (right - left < minWindowLen) {
				windowStart = left;
				minWindowLen = right - left;
			}

			if (counter.get(s[left]) === 0) {
				size++;
			}
			counter.incrementBy(s[left]);
			left++;
		}
	}

	return minWindowLen === Number.POSITIVE_INFINITY
		? ""
		: s.substring(windowStart, windowStart + minWindowLen);
}

export { minWindow };
