import { getData } from "./06.data";

async function solve() {
	const data = await getData();
	let result = 0;

	const rows = data.characterSeparatedLines.length;
	const cols = data.characterSeparatedLines[0].length;
	const operations = data.operations;

	let currentGroup: number[] = [];
	for (let i = cols - 1; i >= 0; i--) {
		let isAllEmpty = true;

		const digits: string[] = [];
		for (let j = 0; j < rows; j++) {
			// go down the rows collecting the values
			const digit = data.characterSeparatedLines[j][i];
			if (digit.trim().length) {
				isAllEmpty = false;
				digits.push(digit);
			}
		}

		if (!isAllEmpty) {
			currentGroup.push(Number.parseInt(digits.join(""), 10));
		} else {
			const op = operations.pop();
			if (op === "+") {
				result += currentGroup.reduce((acc, num) => acc + num);
			} else if (op === "*") {
				result += currentGroup.reduce((acc, num) => acc * num, 1);
			}

			currentGroup = [];
		}
	}

	// don't miss the last group
	if (currentGroup.length) {
		const op = operations.pop();
		if (op === "+") {
			result += currentGroup.reduce((acc, num) => acc + num);
		} else if (op === "*") {
			result += currentGroup.reduce((acc, num) => acc * num, 1);
		}
	}

	return result;
}

const ans = await solve();
console.log(`Advent of Code 2025 - Day 06 - Part 2: ${ans}`);
