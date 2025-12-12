import { getPathToProblemInput } from "@/utils/advent-of-code";
import { read } from "@/utils/file-io";

export type Shape = string[][];
export type Region = {
	dimensions: { length: number; width: number };
	quantities: number[];
};

export async function getData(isTest = false): Promise<{
	shapes: Shape[];
	regions: Region[];
}> {
	const s = await read(getPathToProblemInput("2025", "12", isTest));
	const parts = s.split("\n\n");

	const rawRegions = parts.pop();
	if (!rawRegions) {
		throw new Error("Empty list");
	}

	const regions = parseRegions(rawRegions);
	const shapes = parts.map((part) => parseShape(part));

	return { shapes, regions };
}

function parseRegions(part: string): Region[] {
	return part.split("\n").map((region) => {
		const [dimensions, quantities] = region.split(": ");
		const [width, length] = dimensions.split("x");
		return {
			dimensions: {
				length: Number.parseInt(length, 10),
				width: Number.parseInt(width, 10),
			},
			quantities: quantities.split(/\s+/g).map((n) => Number.parseInt(n, 10)),
		};
	});
}

function parseShape(part: string): Shape {
	const lines = part.split("\n");
	const index = lines.shift();
	if (!index) {
		throw new Error("Could not get index from shape ");
	}

	return lines.map((line) => line.split(""));
}
