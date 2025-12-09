import { combinations } from "@/lib/itertools";
import { getData } from "./09.data";

function getArea(coordinates: number[][]) {
	const [a, b] = coordinates;

	const length = Math.max(a[0], b[0]) - Math.min(a[0], b[0]) + 1;
	const width = Math.max(a[1], b[1]) - Math.min(a[1], b[1]) + 1;

	return length * width;
}

async function solve(isTest = false) {
	const data = await getData(isTest);
	const combs = Array.from(combinations(data, 2));
	combs.sort((a, b) => {
		return getArea(b) - getArea(a);
	});

	return getArea(combs[0]);
}

const ans = await solve();
console.log(`Advent of Code 2025 - Day 09 - Part 1: ${ans}`);
