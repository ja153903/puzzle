function isPalindrome(s: string): boolean {
	const cs = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

	for (let i = 0, j = cs.length - 1; i < j; i++, j--) {
		if (cs[i] !== cs[j]) {
			return false;
		}
	}

	return true;
}

export { isPalindrome };
