import { getPathToProblemInput } from "@/utils/advent-of-code";
import { read } from "@/utils/file-io";

const content = await read(getPathToProblemInput("2015", "01"));

function solve(part: 1 | 2) {
	switch (part) {
		case 1: {
			let level = 0;
			for (const char of content) {
				if (char === "(") {
					level++;
				}
				if (char === ")") {
					level--;
				}
			}
			console.log(`Part 1: ${level}`);
			break;
		}
		case 2: {
			let level = 0;
			for (let i = 0; i < content.length; i++) {
				const char = content[i];
				if (char === undefined) {
					throw new Error("Character is unexpectedly undefined");
				}

				if (char === "(") {
					level++;
				}
				if (char === ")") {
					level--;
				}

				if (level < 0) {
					console.log(`Part 2: ${i + 1}`);
					break;
				}
			}
			break;
		}
	}
}

solve(1);
solve(2);
