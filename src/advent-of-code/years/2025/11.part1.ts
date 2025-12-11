import { getData } from "./11.data";

async function solve(isTest = false) {
	const data = await getData(isTest);
}

const ans = await solve();
console.log(`Advent of Code 2025 - Day 11 - Part 1: ${ans}`);
