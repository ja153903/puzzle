import { getData, type Range } from "./02.data";

function sumRepeatableDigits(range: Range) {
	let sum = 0;
	for (let i = range.start; i <= range.end; i++) {
		const s = i.toString();
		if (s.length % 2 !== 0) {
			continue;
		}

		const mid = Math.floor(s.length / 2);
		if (s.substring(0, mid) === s.substring(mid)) {
			sum += i;
		}
	}

	return sum;
}

async function solve() {
	const ranges = await getData();
	return ranges.reduce((acc, range) => acc + sumRepeatableDigits(range), 0);
}

const ans = await solve();
console.log(`Advent of Code 2025 - Day 02 - Part 1: ${ans}`);
