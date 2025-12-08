export const DIRECTIONS = [
	[1, 0],
	[-1, 0],
	[0, 1],
	[0, -1],
];
export const DIRECTIONS_WITH_DIAGONALS = [
	...DIRECTIONS,
	[1, 1],
	[-1, -1],
	[1, -1],
	[-1, 1],
];

type GetNeighborCountOptions<T> = {
	position: [number, number];
	target: T;
	withDiagonals?: boolean;
};
export function getNeighborCount<T>(
	grid: T[][],
	{ position, target, withDiagonals = false }: GetNeighborCountOptions<T>,
) {
	let count = 0;
	const [i, j] = position;
	const directions = withDiagonals ? DIRECTIONS_WITH_DIAGONALS : DIRECTIONS;

	for (const [di, dj] of directions) {
		const ni = i + di;
		const nj = j + dj;
		if (
			ni >= 0 &&
			ni < grid.length &&
			nj >= 0 &&
			nj < grid[0].length &&
			grid[ni][nj] === target
		) {
			count++;
		}
	}

	return count;
}
