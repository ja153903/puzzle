import { combinations } from "@/lib/itertools";
import { Polygon } from "@/lib/ray-casting";
import { getData } from "./09.data";

function getArea(coordinates: number[][]) {
	const [a, b] = coordinates;
	const length = Math.abs(a[0] - b[0]) + 1;
	const width = Math.abs(a[1] - b[1]) + 1;
	return length * width;
}

// NOTE: Ray-casting example
function isRectangleValid(
	corner1: number[],
	corner2: number[],
	redTiles: number[][],
): boolean {
	const [y1, x1] = corner1;
	const [y2, x2] = corner2;

	const polygonPoints = redTiles.map(([y, x]) => ({ y, x }));
	const polygon = new Polygon(polygonPoints);

	const minY = Math.min(y1, y2) + 0.5;
	const maxY = Math.max(y1, y2) - 0.5;
	const minX = Math.min(x1, x2) + 0.5;
	const maxX = Math.max(x1, x2) - 0.5;

	const rect = new Polygon([
		{ y: minY, x: minX },
		{ y: minY, x: maxX },
		{ y: maxY, x: maxX },
		{ y: maxY, x: minX },
	]);

	return !rect.edges.some((edge) => polygon.intersects(edge));
}

async function solve(isTest = false) {
	const data = await getData(isTest);
	const combs = Array.from(combinations(data, 2));
	combs.sort((a, b) => {
		return getArea(b) - getArea(a);
	});

	let maxArea = 0;

	for (const [corner1, corner2] of combs) {
		if (isRectangleValid(corner1, corner2, data)) {
			const area = getArea([corner1, corner2]);
			maxArea = Math.max(maxArea, area);
		}

		const currentCombArea = getArea([corner1, corner2]);
		if (maxArea > 0 && currentCombArea <= maxArea) {
			break;
		}
	}

	return maxArea;
}

const ans = await solve();
console.log(`Advent of Code 2025 - Day 09 - Part 2: ${ans}`);
