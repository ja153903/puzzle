export const getPathToProblemInput = (
	year: string,
	day: string,
	isTest: boolean = false,
) =>
	isTest
		? `src/advent-of-code/years/${year}/data/${day}.test.in`
		: `src/advent-of-code/years/${year}/data/${day}.in`;
