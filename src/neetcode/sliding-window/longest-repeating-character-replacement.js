/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
function characterReplacement(s, k) {
	/** @type {Map<string, number>} */
	const freqs = new Map();

	let i = 0,
		maxFrequency = 0,
		result = 0;

	for (let j = 0; j < s.length; j++) {
		freqs.set(s[j], (freqs.get(s[j]) ?? 0) + 1);
		maxFrequency = Math.max(maxFrequency, freqs.get(s[j]));

		// If the current length of the window minus the max frequency is greater than k
		// this means that we cannot replace characters anymore so we should decrease the window size
		while (j - i + 1 - maxFrequency > k) {
			freqs.set(s[i], freqs.get(s[i]) - 1);
			i++;
		}

		result = Math.max(result, j - i + 1);
	}

	return result;
}

export { characterReplacement };
