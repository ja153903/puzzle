/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
	/** @type {Map<string, number>} */
	const seen = new Map();

	let start = 0;
	let length = 0;

	for (let i = 0; i < s.length; i++) {
		if (seen.has(s[i])) {
			// if the value already exists, then the start gets bumped to either the value
			// after its last seen or stays where it is
			// we don't want to have to go backwards!
			start = Math.max(start, seen.get(s[i]) + 1);
		}

		length = Math.max(length, i - start + 1);

		seen.set(s[i], i);
	}

	return length;
}

export { lengthOfLongestSubstring };
