import { getNeighborCount } from "@/lib/grid";
import { getData } from "./04.data";

async function solve() {
	const grid = await getData();
	let result = 0;

	while (true) {
		let hasNoUpdate = true;
		for (let i = 0; i < grid.length; i++) {
			for (let j = 0; j < grid[0].length; j++) {
				if (grid[i][j] !== "@") {
					continue;
				}
				const count = getNeighborCount(grid, {
					position: [i, j],
					target: "@",
					withDiagonals: true,
				});
				if (count < 4) {
					grid[i][j] = ".";
					result++;
					hasNoUpdate = false;
				}
			}
		}

		if (hasNoUpdate) {
			break;
		}
	}

	return result;
}

const ans = await solve();
console.log(`Advent of Code 2025 - Day 04 - Part 2: ${ans}`);
