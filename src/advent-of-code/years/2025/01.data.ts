import { getPathToProblemInput } from "@/utils/advent-of-code";
import { readlines } from "@/utils/file-io";

type Input = { direction: "L" | "R"; clicks: number };

export async function getData\(isTest = false): Promise<Input[]> {
	const result: Input[] = [];
	const lines = await readlines(getPathToProblemInput("2025", "01", isTest));
	for (const line of lines) {
		const direction = line.at(0);
		if (direction !== "L" && direction !== "R") {
			throw new Error("Parsed an incorrect direction");
		}

		const numberPart = line.substring(1);
		const clicks = Number.parseInt(numberPart, 10);

		if (Number.isNaN(clicks)) {
			throw new Error(`Parsed an incorrect number: ${numberPart}`);
		}

		result.push({ direction, clicks });
	}

	return result;
}
