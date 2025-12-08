import { getData } from "./01.data";

async function solve() {
	const inputs = await getData();

	let position = 50;
	let result = 0;

	for (const { direction, clicks } of inputs) {
		const rotations = Math.floor(clicks / 100);
		const remaining = clicks % 100;

		result += rotations;

		if (remaining === 0) {
			continue;
		}

		if (direction === "L") {
			// we only want to increment the result if the current position
			// will actually cross 0
			if (position - remaining <= 0 && position > 0) {
				result++;
			}
			position = (position - remaining + 100) % 100;
		}

		if (direction === "R") {
			// we only want to increment the result if the current position
			// will actually cross over 0
			if (position + remaining >= 100 && position < 100) {
				result++;
			}
			position = (position + remaining) % 100;
		}
	}

	return result;
}

const ans = await solve();
console.log(`Advent of Code 2025 - Day 01 - Part 2: ${ans}`);
