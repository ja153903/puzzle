import { splitWhitespace } from "@/lib/strings";
import { getPathToProblemInput } from "@/utils/advent-of-code";
import { readlines } from "@/utils/file-io";

export type Line = { left: number; right: number };

export async function getData(isTest = false): Promise<Line[]> {
	const lines = await readlines(getPathToProblemInput("2024", "01", isTest));

	return lines.map((line) => {
		const [left, right] = splitWhitespace(line);
		return {
			left: Number.parseInt(left, 10),
			right: Number.parseInt(right, 10),
		};
	});
}
