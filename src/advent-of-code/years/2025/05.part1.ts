import { getData } from "./05.data";

async function solve() {
	let res = 0;
	const data = await getData();
	for (const id of data.ids) {
		let left = 0;
		let right = data.ranges.length - 1;
		const idAsNum = Number.parseInt(id, 10);

		let found = false;

		while (left <= right) {
			const mid = Math.floor((left + right) / 2);
			const [start, end] = data.ranges[mid];
			if (start <= idAsNum && idAsNum <= end) {
				found = true;
				break;
			} else if (idAsNum < start) {
				right = mid - 1;
			} else {
				left = mid + 1;
			}
		}

		if (found) {
			res++;
		}
	}

	return res;
}

const ans = await solve();
console.log(`Advent of Code 2025 - Day 05 - Part 1: ${ans}`);
