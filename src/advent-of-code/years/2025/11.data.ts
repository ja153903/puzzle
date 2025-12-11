import { getPathToProblemInput } from "@/utils/advent-of-code";
import { read, readlines } from "@/utils/file-io";

export async function getData(isTest = false) {
	const data = await readlines(getPathToProblemInput("2025", "11", isTest));
}
