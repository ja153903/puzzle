import { countPaths } from "@/lib/graphs";
import { getData } from "./11.data";

async function solve(isTest = false) {
	const graph = await getData(isTest);
	const paths = countPaths(graph, "you", "out");
	return paths;
}

const ans = await solve();
console.log(`Advent of Code 2025 - Day 11 - Part 1: ${ans}`);
