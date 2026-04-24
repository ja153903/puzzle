const directions = [
	[0, 1],
	[0, -1],
	[1, 0],
	[-1, 0],
];

function colorGrid(n: number, m: number, sources: number[][]): number[][] {
	const grid: number[][] = [];
	for (let i = 0; i < n; i++) {
		grid.push(new Array(m).fill(0));
	}

	sources.sort((a, b) => b[2] - a[2]); // highest color first
	// NOTE: Good pattern for setting the visited array as a one dimensional array
	const visited = new Uint8Array(n * m);
	const queue: number[][] = [];
	for (const [r, c, color] of sources) {
		if (!visited[r * m + c]) {
			visited[r * m + c] = 1;
			grid[r][c] = color;
			queue.push([r, c, color]);
		}
	}
	for (let head = 0; head < queue.length; head++) {
		const [r, c, color] = queue[head];
		for (const [dR, dC] of directions) {
			const nr = r + dR,
				nc = c + dC;
			if (nr < 0 || nr >= n || nc < 0 || nc >= m) continue;
			const idx = nr * m + nc;
			if (visited[idx]) continue;
			visited[idx] = 1;
			grid[nr][nc] = color;
			queue.push([nr, nc, color]);
		}
	}

	return grid;
}

export { colorGrid };
