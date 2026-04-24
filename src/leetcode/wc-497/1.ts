function findDegrees(matrix: number[][]): number[] {
	const indegrees = new Array<number>(matrix.length).fill(0);

	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix.length; j++) {
			if (i !== j && matrix[i][j] > 0) {
				indegrees[i]++;
			}
		}
	}

	return indegrees;
}

export { findDegrees };
