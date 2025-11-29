import { getPathToProblemInput } from "@/utils/advent-of-code";
import { read } from "@/utils/file-io";

const content = await read(getPathToProblemInput("2016", "09"));

function evaluate(content: string) {
	let totalLength = 0;
	let i = 0;

	while (i < content.length) {
		if (content[i] === "(") {
			i++;

			let _length = "";

			while (i < content.length && content[i] !== "x") {
				_length += content[i];
				i++;
			}

			i++;

			let _repeat = "";
			while (i < content.length && content[i] !== ")") {
				_repeat += content[i];
				i++;
			}

			const length = Number.parseInt(_length, 10);
			const repeat = Number.parseInt(_repeat, 10);

			totalLength += length * repeat;

			i += length;
		} else {
			totalLength++;
			i++;
		}
	}

	return totalLength;
}

function evaluate2(content: string): number {
	let totalLength = 0;
	let i = 0;

	while (i < content.length) {
		if (content[i] === "(") {
			i++;

			let _length = "";
			while (i < content.length && content[i] !== "x") {
				_length += content[i];
				i++;
			}

			i++;

			let _repeat = "";
			while (i < content.length && content[i] !== ")") {
				_repeat += content[i];
				i++;
			}

			const length = Number.parseInt(_length, 10);
			const repeat = Number.parseInt(_repeat, 10);

			i++;

			const substring = content.substring(i, i + length);
			totalLength += evaluate2(substring) * repeat;

			i += length;
		} else {
			totalLength += 1;
			i++;
		}
	}

	return totalLength;
}

function solve(part: 1 | 2) {
	switch (part) {
		case 1: {
			const result = evaluate(content);
			console.log(`Part 1: ${result}`);
			break;
		}
		case 2: {
			const result = evaluate2(content);
			console.log(`Part 2: ${result}`);
			break;
		}
	}
}

solve(1);
solve(2);
