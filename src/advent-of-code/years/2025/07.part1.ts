import { getData } from "./07.data";

async function solve() {
	const data = await getData();
	let splits = 0;

	const sIndex = data[0].indexOf("S");
	if (sIndex === -1) {
		throw new Error("Could not find starting point");
	}

	const visited = new Set<string>();
	const queue: [number, number][] = [[0, sIndex]];

	visited.add(`0,${sIndex}`);

	while (queue.length > 0) {
		const front = queue.shift();
		if (!front) {
			throw new Error("Empty value within queue?");
		}

		const [row, col] = front;
		if (row + 1 >= data.length) {
			continue;
		}

		const downKey = `${row + 1},${col}`;
		const leftSplitKey = `${row + 1},${col - 1}`;
		const rightSplitKey = `${row + 1},${col + 1}`;

		if (data[row + 1][col] === "^") {
			splits++;

			if (col > 0 && !visited.has(leftSplitKey)) {
				visited.add(leftSplitKey);
				queue.push([row + 1, col - 1]);
			}

			if (col < data[0].length - 1 && !visited.has(rightSplitKey)) {
				visited.add(rightSplitKey);
				queue.push([row + 1, col + 1]);
			}
		} else if (!visited.has(downKey)) {
			visited.add(downKey);
			queue.push([row + 1, col]);
		}
	}

	return splits;
}

const ans = await solve();
console.log(`Advent of Code 2025 - Day 07 - Part 1: ${ans}`);
