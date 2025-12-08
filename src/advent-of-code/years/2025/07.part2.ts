import { getData } from "./07.data";

function dfs(
	data: string[][],
	position: [number, number],
	level: number,
	visited: Map<string, number>,
): number {
	if (level === data.length - 1) {
		return 1;
	}

	const [a, b] = position;
	if (a < 0 || a >= data.length || b < 0 || b >= data[0].length) {
		return 0;
	}

	const hash = `${a},${b},${level}`;
	if (visited.has(hash)) {
		return visited.get(hash) ?? 0;
	}

	let subresult = 0;

	if (data[a][b] === "^") {
		subresult =
			dfs(data, [a + 1, b + 1], level + 1, visited) +
			dfs(data, [a + 1, b - 1], level + 1, visited);
	} else {
		subresult = dfs(data, [a + 1, b], level + 1, visited);
	}

	visited.set(hash, subresult);

	return subresult;
}

async function solve() {
	const data = await getData();
	const sIndex = data[0].indexOf("S");
	if (sIndex === -1) {
		throw new Error("Could not find starting point");
	}

	return dfs(data, [0, sIndex], 0, new Map());
}

const ans = await solve();
console.log(`Advent of Code 2025 - Day 07 - Part 2: ${ans}`);
