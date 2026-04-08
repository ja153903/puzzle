import { DIRECTIONS_WITH_DIAGONALS } from "@/lib/grid";
import { getData } from "./04.data";

const XMAS: readonly string[] = ["X", "M", "A", "S"];

async function solve(isTest = false) {
	const data = await getData(isTest);
	let result = 0;

	for (let i = 0; i < data.length; i++) {
		for (let j = 0; j < data[i].length; j++) {
			if (data[i][j] === "X") {
				for (const [dr, dc] of DIRECTIONS_WITH_DIAGONALS) {
					let pathLength = 0;

					for (
						let row = i, col = j;
						0 <= row &&
						row < data.length &&
						0 <= col &&
						col < data[0].length;
						row += dr, col += dc
					) {
						if (data[row][col] !== XMAS[pathLength]) {
							break;
						}
						pathLength++;
					}

					if (pathLength === 4) {
						result++;
					}
				}
			}
		}
	}

	return result;
}

const ans = await solve();
console.log(`Advent of Code 2024 - Day 04 - Part 1: ${ans}`);
