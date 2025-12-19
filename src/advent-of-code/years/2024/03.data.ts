import { getPathToProblemInput } from "@/utils/advent-of-code";
import { read } from "@/utils/file-io";

export async function getData(isTest = false) {
	return await read(getPathToProblemInput("2024", "03", isTest));
}
