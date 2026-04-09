import { getPathToProblemInput } from "@/utils/advent-of-code";
import { read } from "@/utils/file-io";

export async function getData(isTest = false) {
	const data = await read(getPathToProblemInput("2024", "05", isTest));

	const [pageOrderingRules, pagesToProduce] = data.split("\n\n");

	return {
		pageOrderingRules: pageOrderingRules.split("\n"),
		pagesToProduce: pagesToProduce
			.split("\n")
			.map((line) => line.split(",")),
	};
}
