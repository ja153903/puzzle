import { getPathToProblemInput } from "@/utils/advent-of-code";
import { readlines } from "@/utils/file-io";

export async function getData(isTest = false) {
	const lines = await readlines(getPathToProblemInput("2025", "11", isTest));
	const graph = new Map<string, Set<string>>();

	for (const line of lines) {
		const [u, vs] = line.split(": ");
		const set = new Set(vs.split(" "));
		graph.set(u, set);
	}

	return graph;
}
