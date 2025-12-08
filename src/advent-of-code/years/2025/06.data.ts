import { getPathToProblemInput } from "@/utils/advent-of-code";
import { readlines } from "@/utils/file-io";

export async function getData(isTest = false) {
	const lines = await readlines(getPathToProblemInput("2025", "06", isTest));

	const spaceSeparatedLines = lines.map((line) => line.trim().split(/\s+/g));

	const characterSeparatedLines = lines.map((line) => line.split(""));
	characterSeparatedLines.pop();

	const operations = spaceSeparatedLines.pop();

	if (operations === undefined) {
		throw new Error("Could not properly pop operations");
	}

	return {
		spaceSeparatedLines: spaceSeparatedLines.map((items) =>
			items.map((s) => Number.parseInt(s, 10)),
		),
		characterSeparatedLines,
		operations,
	};
}
