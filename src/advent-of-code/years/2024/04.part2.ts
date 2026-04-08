import { getData } from "./04.data";

async function solve(isTest = false) {
	const data = await getData(isTest);
	let result = 0;

	for (let i = 0; i < data.length; i++) {
		for (let j = 0; j < data[i].length; j++) {
			if (data[i][j] === "A") {
				const d1: [number, number][] = [
					[i + 1, j + 1],
					[i - 1, j - 1],
				];
				const d2: [number, number][] = [
					[i + 1, j - 1],
					[i - 1, j + 1],
				];

				if (
					d1.some(
						([row, col]) =>
							row < 0 ||
							col < 0 ||
							row >= data.length ||
							col >= data[0].length,
					) ||
					d2.some(
						([row, col]) =>
							row < 0 ||
							col < 0 ||
							row >= data.length ||
							col >= data[0].length,
					)
				) {
					continue;
				}

				const d1Chars = new Set([
					data[d1[0][0]][d1[0][1]],
					data[d1[1][0]][d1[1][1]],
				]);
				if (!(d1Chars.has("M") && d1Chars.has("S"))) {
					continue;
				}

				const d2Chars = new Set([
					data[d2[0][0]][d2[0][1]],
					data[d2[1][0]][d2[1][1]],
				]);
				if (!(d2Chars.has("M") && d2Chars.has("S"))) {
					continue;
				}

				result++;
			}
		}
	}

	return result;
}

const ans = await solve();
console.log(`Advent of Code 2024 - Day 04 - Part 2: ${ans}`);
