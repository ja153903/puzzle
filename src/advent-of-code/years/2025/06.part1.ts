import { getData } from "./06.data";

async function solve() {
	const data = await getData();
	let result = 0;

	for (let i = 0; i < data.operations.length; i++) {
		const op = data.operations[i];
		let acc = op === "*" ? 1 : 0;
		for (let j = 0; j < data.spaceSeparatedLines.length; j++) {
			if (op === "*") {
				acc *= data.spaceSeparatedLines[j][i];
			} else {
				acc += data.spaceSeparatedLines[j][i];
			}
		}

		result += acc;
	}

	return result;
}

const ans = await solve();
console.log(`Advent of Code 2025 - Day 06 - Part 1: ${ans}`);
