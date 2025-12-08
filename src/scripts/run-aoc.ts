import { parseArgs } from "node:util";
import { $ } from "bun";

const { values } = parseArgs({
	args: Bun.argv.slice(2),
	options: {
		year: {
			type: "string",
			short: "y",
		},
		day: {
			type: "string",
			short: "d",
		},
		part: {
			type: "string",
			short: "p",
		},
	},
});

const { year, day, part } = values;

if (!year) {
	throw new Error(`Invalid year provided: ${year}`);
}

if (day?.length !== 2) {
	throw new Error(`Invalid day provided: ${day}`);
}

if (part !== "1" && part !== "2") {
	throw new Error(`Invalid part provided: ${part}`);
}

await $`bun src/advent-of-code/years/${year}/${day}.part${part}.ts`;
