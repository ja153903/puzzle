import { getData } from "./05.data";

async function solve(isTest = false) {
	const data = await getData(isTest);

	const mustComeBefore = new Set<string>();
	let result = 0;

	for (const rule of data.pageOrderingRules) {
		mustComeBefore.add(rule);
	}

	for (const pages of data.pagesToProduce) {
		let isOrdered = true;

		// Just compare pairwise values
		for (let i = 0; i < pages.length && isOrdered; i++) {
			for (let j = i + 1; j < pages.length && isOrdered; j++) {
				if (mustComeBefore.has(`${pages[j]}|${pages[i]}`)) {
					isOrdered = false;
				}
			}
		}

		if (isOrdered) {
			result += Number.parseInt(pages[Math.floor(pages.length / 2)], 10);
		}
	}

	return result;
}

const ans = await solve();
console.log(`Advent of Code 2024 - Day 5 - Part 1: ${ans}`);
