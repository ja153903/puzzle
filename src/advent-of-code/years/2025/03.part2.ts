import { getData } from "./03.data";

// monotonic stack works the best here
function getMaxSequence(line: string) {
	const stack: string[] = [];
	let deletions = line.length - 12;

	for (let i = 0; i < line.length; i++) {
		while (
			stack.length > 0 &&
			deletions > 0 &&
			stack[stack.length - 1] < line[i]
		) {
			stack.pop();
			deletions--;
		}

		stack.push(line[i]);
	}

	const joined = stack
		.slice(0, 12)
		.map((number) => number.toString())
		.join("");

	return Number.parseInt(joined, 10);
}

async function solve() {
	const lines = await getData();

	return lines.reduce((acc, line) => {
		return acc + getMaxSequence(line);
	}, 0);
}

const ans = await solve();
console.log(`Advent of Code 2025 - Day 03 - Part 2: ${ans}`);
