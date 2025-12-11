import { getData } from "./12.data";

async function solve(isTest = false) {
	const data = await getData();
}

const ans = await solve();
console.log(`Advent of Code 2025 - Day 12 - Part 1: ${ans}`);
