function isValidSudoku(board: string[][]): boolean {
	const seen = new Set<string>();
	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			if (board[i][j] !== ".") {
				const rowHash = `row ${i} ${board[i][j]}`;
				const colHash = `col ${j} ${board[i][j]}`;
				const boxHash = `box ${Math.floor(i / 3)} ${Math.floor(j / 3)} ${board[i][j]}`;
				if (
					seen.has(rowHash) ||
					seen.has(colHash) ||
					seen.has(boxHash)
				) {
					return false;
				}
				[rowHash, colHash, boxHash].forEach((hash) => {
					seen.add(hash);
				});
			}
		}
	}

	return true;
}

export { isValidSudoku };
