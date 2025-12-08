import { getData } from "./02.data";

function canBeRepeated(num: number) {
	const s = num.toString();
	for (let i = 0; i <= Math.floor(s.length / 2); i++) {
		const ss = s.substring(0, i);
		if (ss.length === 0) {
			continue;
		}
		if (s.length % ss.length === 0) {
			const reps = Math.floor(s.length / ss.length);
			if (ss.repeat(reps) === s) {
				return true;
			}
		}
	}

	return false;
}

async function solve() {
	const ranges = await getData();
	let result = 0;
	for (const { start, end } of ranges) {
		for (let i = start; i <= end; i++) {
			if (canBeRepeated(i)) {
				result += i;
			}
		}
	}

	return result;
}

const ans = await solve();
console.log(`Advent of Code 2025 - Day 02 - Part 2: ${ans}`);
