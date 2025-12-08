import { getPathToProblemInput } from "@/utils/advent-of-code";
import { read } from "@/utils/file-io";

export type Range = { start: number; end: number };

export async function getData(isTest: boolean = false): Promise<Range[]> {
	const ranges: Range[] = [];
	const content = await read(getPathToProblemInput("2025", "02", isTest));
	for (const range of content.split(",")) {
		if (!range) {
			continue;
		}
		const [start, end] = range.split("-");
		ranges.push({
			start: Number.parseInt(start, 10),
			end: Number.parseInt(end, 10),
		});
	}

	return ranges;
}
