import { getPathToProblemInput } from "@/utils/advent-of-code";
import { readlines } from "@/utils/file-io";

export async function getData(isTest = false) {
	const lines = await readlines(getPathToProblemInput("2025", "07", isTest));

	return lines.map((line) => line.split(""));
}
