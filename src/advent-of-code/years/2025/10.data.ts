import { getPathToProblemInput } from "@/utils/advent-of-code";
import { readlines } from "@/utils/file-io";

export type Config = {
	terminalLightState: string[];
	buttons: number[][];
	joltageRequirements: number[];
};
function parseConfig(line: string): Config {
	const parts = line.split(" ");

	const terminalLightState = parts.shift();
	if (terminalLightState == null) {
		throw new Error("Could not get terminal light state");
	}

	const joltageRequirements = parts.pop();
	if (joltageRequirements == null) {
		throw new Error("Could not get joltage requirements");
	}

	const buttons = parts.map((part) => {
		const commaSeparated = part.slice(1, part.length - 1);
		const nums = commaSeparated
			.split(",")
			.map((value) => Number.parseInt(value, 10));
		return nums;
	});

	return {
		buttons,
		terminalLightState: terminalLightState
			.slice(1, terminalLightState.length - 1)
			.split(""),
		joltageRequirements: joltageRequirements
			.slice(1, joltageRequirements.length - 1)
			.split(",")
			.map((value) => Number.parseInt(value, 10)),
	};
}
export async function getData(isTest = false) {
	const lines = await readlines(getPathToProblemInput("2025", "10", isTest));
	return lines.map((line) => parseConfig(line));
}
