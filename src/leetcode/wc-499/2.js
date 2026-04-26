/**
 * @param {string} s
 * @return {string}
 */
function sortVowels(s) {
	const vowelPositions = [];
	const vowelByFirstPosition = new Map();
	const vowelCount = new Map([
		["a", 0],
		["e", 0],
		["i", 0],
		["o", 0],
		["u", 0],
	]);

	for (let i = 0; i < s.length; i++) {
		if ("aeiou".includes(s[i])) {
			vowelPositions.push(i);
			vowelCount.set(s[i], (vowelCount.get(s[i]) ?? 0) + 1);
			if (!vowelByFirstPosition.has(s[i])) {
				vowelByFirstPosition.set(s[i], i);
			}
		}
	}

	const sortedEntries = [...vowelCount.entries()].sort((a, b) => {
		if (a[1] === b[1]) {
			const indexA = vowelByFirstPosition.get(a[0]);
			const indexB = vowelByFirstPosition.get(b[0]);

			return indexA - indexB;
		}

		return b[1] - a[1];
	});

	// now place the vowels in the appropriate positions
	const result = s.split("");

	for (const position of vowelPositions) {
		const [vowel, frequency] = sortedEntries[0];
		result[position] = vowel;
		if (frequency - 1 === 0) {
			sortedEntries.shift();
		} else {
			sortedEntries[0][1] = frequency - 1;
		}
	}

	return result.join("");
}

export { sortVowels };
