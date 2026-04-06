import { getData } from "./04.data";

async function solve(isTest = false) {
	const data = await getData(isTest);
	let result = 0;

	for (let i = 0; i < data.length; i++) {
		for (let j = 0; j < data[i].length; j++) {
			if (data[i][j] === "X") {
			}
		}
	}

	return result;
}

const ans = await solve(true);
console.log(`Advent of Code 2024 - Day 04 - Part 1: ${ans}`);
