import { getData } from "./01.data";

async function solve() {
	const inputs = await getData();

	let position = 50;
	let result = 0;

	for (const { direction, clicks } of inputs) {
		if (direction === "L") {
			position -= clicks;
			if (position < 0) {
				position += 100;
			}
		} else {
			position += clicks;
		}

		position %= 100;
		if (position === 0) {
			result++;
		}
	}

	return result;
}

const ans = await solve();
console.log(`Advent of Code 2025 - Day 01 - Part 1: ${ans}`);
