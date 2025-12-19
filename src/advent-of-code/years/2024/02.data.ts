import { splitWhitespace } from "@/lib/strings";
import { getPathToProblemInput } from "@/utils/advent-of-code";
import { readlines } from "@/utils/file-io";

export type Report = number[];

export async function getData(isTest = false): Promise<Report[]> {
	const lines = await readlines(getPathToProblemInput("2024", "02", isTest));
	return lines.map((line) => {
		const report = splitWhitespace(line).map((level) =>
			Number.parseInt(level, 10),
		);
		return report;
	});
}
