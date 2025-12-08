import { getData } from "./08.data";

async function solve() {
	const data = await getData();
}

const ans = await solve();
console.log(`Advent of Code 2025 - Day 08 - Part 1: ${ans}`);
