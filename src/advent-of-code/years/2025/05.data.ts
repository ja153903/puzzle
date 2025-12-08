import { getPathToProblemInput } from "@/utils/advent-of-code";
import { readlines } from "@/utils/file-io";

export async function getData\(isTest = false) {
	const lines = await readlines(getPathToProblemInput("2025", "05", isTest));
	const idStartingPoint = lines.findIndex((line) => !line.includes("-"));

	const _ranges = lines
		.slice(0, idStartingPoint)
		.map((range) => range.split("-").map((num) => Number.parseInt(num, 10)));
	const ids = lines.slice(idStartingPoint);

	_ranges.sort((a, b) => (a[0] - b[0] === 0 ? a[1] - b[1] : a[0] - b[0]));

	const ranges: number[][] = [];

	for (const range of _ranges) {
		if (ranges.length === 0) {
			ranges.push(range);
		} else if (ranges[ranges.length - 1][1] >= range[0]) {
			ranges[ranges.length - 1] = [
				Math.min(ranges[ranges.length - 1][0], range[0]),
				Math.max(ranges[ranges.length - 1][1], range[1]),
			];
		} else {
			ranges.push(range);
		}
	}

	return { ranges, ids };
}
