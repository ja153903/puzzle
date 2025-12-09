import { combinations } from "@/lib/itertools";
import { getData } from "./09.data";

function getArea(coordinates: number[][]) {
	const [a, b] = coordinates;
	const length = Math.abs(a[0] - b[0]) + 1;
	const width = Math.abs(a[1] - b[1]) + 1;
	return length * width;
}

class Edge {
	horizontal: boolean;
	p1: { y: number; x: number };
	p2: { y: number; x: number };

	constructor(p1: { y: number; x: number }, p2: { y: number; x: number }) {
		this.horizontal = p1.y === p2.y;
		this.p1 = this.horizontal ? (p1.x < p2.x ? p1 : p2) : p1.y < p2.y ? p1 : p2;
		this.p2 = this.horizontal ? (p1.x < p2.x ? p2 : p1) : p1.y < p2.y ? p2 : p1;
	}

	intersects(that: Edge): boolean {
		if (this.horizontal === that.horizontal) {
			return false;
		}

		const horizontal = this.horizontal ? this : that;
		const vertical = this.horizontal ? that : this;

		return (
			vertical.p1.x > horizontal.p1.x &&
			vertical.p1.x < horizontal.p2.x &&
			horizontal.p1.y > vertical.p1.y &&
			horizontal.p1.y < vertical.p2.y
		);
	}
}

class Polygon {
	points: { y: number; x: number }[];
	edges: Edge[];

	constructor(points: { y: number; x: number }[]) {
		this.points = points;
		this.edges = [];
		points.forEach((p, i) => {
			const next = points[(i + 1) % points.length];
			this.edges.push(new Edge(p, next));
		});
	}

	intersects(edge: Edge): boolean {
		return this.edges.some((e) => e.intersects(edge));
	}
}

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
