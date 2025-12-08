import { getPathToProblemInput } from "@/utils/advent-of-code";
import { readlines } from "@/utils/file-io";

export async function getData(isTest: boolean = false) {
	const lines = await readlines(getPathToProblemInput("2025", "03", isTest));
	return lines;
}
