import { splitAll, splitlines } from "@/lib/strings";
import { getPathToProblemInput } from "@/utils/advent-of-code";
import { read } from "@/utils/file-io";

export async function getData(isTest = false) {
	try {
		const data = await read(getPathToProblemInput("2024", "04", isTest));
		return splitlines(data).map((row) => splitAll(row));
	} catch (e) {
		throw new Error(`Something went wrong: ${JSON.stringify(e)}`);
	}
}
