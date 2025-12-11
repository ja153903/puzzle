import { countPaths } from "@/lib/graphs";
import { getData } from "./11.data";

async function solve(isTest = false) {
	const graph = await getData(isTest);
	let paths = countPaths(graph, "svr", "fft");
	paths *= countPaths(graph, "fft", "dac");
	paths *= countPaths(graph, "dac", "out");
	return paths;
}

const ans = await solve();
console.log(`Advent of Code 2025 - Day 11 - Part 2: ${ans}`);
