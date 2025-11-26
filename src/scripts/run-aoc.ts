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
	},
});

const { year, day } = values;

if (!year) {
	throw new Error(`Invalid year provided: ${year}`);
}

if (day?.length !== 2) {
	throw new Error(`Invalid day provided: ${day}`);
}

await $`bun src/advent-of-code/years/${year}/${day}.ts`;
