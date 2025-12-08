import { getPathToProblemInput } from "@/utils/advent-of-code";
import { read, readlines } from "@/utils/file-io";

export async function getData(isTest = false) {
	const text = await read(getPathToProblemInput("2025", "08", isTest));
}
