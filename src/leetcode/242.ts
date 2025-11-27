function isAnagram(s: string, t: string): boolean {
	// check if t is an anagram of s
	const frequencies = new Array(26).fill(0);
	for (const ch of s) {
		frequencies[ch.charCodeAt(0) - 97]++;
	}

	for (const ch of t) {
		frequencies[ch.charCodeAt(0) - 97]--;
	}

	for (const freq of frequencies) {
		if (freq !== 0) {
			return false;
		}
	}

	return true;
}

export { isAnagram };
