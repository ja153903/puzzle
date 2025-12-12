import { getData, type Region } from "./12.data";

function canFitShape(
	shapes: number[],
	dimensions: Region["dimensions"],
	quantities: Region["quantities"],
): boolean {
	const size = dimensions.length * dimensions.width;
	let needed = 0;

	for (let i = 0; i < quantities.length; i++) {
		needed += shapes[i] * quantities[i];
	}

	return needed <= size;
}

async function solve(isTest = false) {
	const { shapes, regions } = await getData(isTest);

	const shapesAsFilledCount = shapes.map((shape) => {
		return shape.reduce(
			(acc, row) =>
				acc + row.reduce((acc, col) => acc + (col === "#" ? 1 : 0), 0),
			0,
		);
	});

	let result = 0;

	for (const { dimensions, quantities } of regions) {
		if (canFitShape(shapesAsFilledCount, dimensions, quantities)) {
			result++;
		}
	}

	return result;
}

const ans = await solve();
console.log(`Advent of Code 2025 - Day 12 - Part 1: ${ans}`);
