import { getPathToProblemInput } from "@/utils/advent-of-code";
import { readlines } from "@/utils/file-io";

const codes = await readlines(getPathToProblemInput("2024", "21", true));

function getNumericPartFromCode(code: string) {
	return Number.parseInt(code.substring(0, code.length - 1), 10);
}

// FIXME: Something is not correct with how I've decided to find the shortest path
// seems like we do care about the permutation of some characters
// We need to recurisvely construct the paths with some bias on pairs
function getLengthOfShortestSequence(code: string): number {
	const seqFromNumericPad = getSequenceFromNumericPad(code);
	const seqFromDirectionalPad =
		getSequenceFromDirectionalPad(seqFromNumericPad);
	const anotherSeqFromDirectionalPad = getSequenceFromDirectionalPad(
		seqFromDirectionalPad,
	);

	console.log(`
    ${anotherSeqFromDirectionalPad}
    ${seqFromDirectionalPad}
    ${seqFromNumericPad}
    ${code}
  `);

	return anotherSeqFromDirectionalPad.length;
}

const coordinatesByKeypadNumber = new Map<string, [number, number]>([
	["7", [0, 0]],
	["8", [0, 1]],
	["9", [0, 2]],
	["4", [1, 0]],
	["5", [1, 1]],
	["6", [1, 2]],
	["1", [2, 0]],
	["2", [2, 1]],
	["3", [2, 2]],
	["", [3, 0]],
	["0", [3, 1]],
	["A", [3, 2]],
]);

const NUMERIC_KEYPAD: readonly string[][] = [
	["7", "8", "9"],
	["4", "5", "6"],
	["1", "2", "3"],
	["", "0", "A"],
];

const DIRECTIONAL_KEYPAD: readonly string[][] = [
	["", "^", "A"],
	["<", "v", ">"],
];

const coordinatesByDirectionalKeypadKey = new Map<string, [number, number]>([
	["", [0, 0]],
	["^", [0, 1]],
	["A", [0, 2]],
	["<", [1, 0]],
	["v", [1, 1]],
	[">", [1, 2]],
]);

const DIRECTIONS: readonly [number, number, string][] = [
	[1, 0, "v"],
	[-1, 0, "^"],
	[0, 1, ">"],
	[0, -1, "<"],
];

function getShortestPathOnNumericKeypad(src: string, dst: string) {
	const srcCoordinates = coordinatesByKeypadNumber.get(src);
	if (!srcCoordinates) {
		throw new Error(`Invalid src provided: ${src}`);
	}

	const queue: [[number, number], string][] = [[srcCoordinates, ""]];

	while (queue.length > 0) {
		const front = queue.shift();
		if (!front) {
			throw new Error("Unexpected undefined value in queue");
		}

		const [[row, col], path] = front;
		const currentNumberOnKeypad = NUMERIC_KEYPAD[row]?.[col];
		if (currentNumberOnKeypad === undefined) {
			throw new Error(
				`Invalid coordinates for querying number on keypad: (${row}, ${col})`,
			);
		}

		if (currentNumberOnKeypad === dst) {
			return `${path}A`;
		}

		for (const [dRow, dCol, dPath] of DIRECTIONS) {
			const nRow = row + dRow;
			const nCol = col + dCol;

			if (
				nRow < 0 ||
				nRow > 3 ||
				nCol < 0 ||
				nCol > 2 ||
				NUMERIC_KEYPAD[nRow]?.[nCol] === ""
			) {
				continue;
			}

			queue.push([[nRow, nCol], `${path}${dPath}`]);
		}
	}

	throw new Error("Could not find the shortest path");
}

function getShortestPathOnDirectionalKeypad(src: string, dst: string) {
	const srcCoordinates = coordinatesByDirectionalKeypadKey.get(src);
	if (!srcCoordinates) {
		throw new Error(`Invalid src provided: ${src}`);
	}

	const queue: [[number, number], string][] = [[srcCoordinates, ""]];

	while (queue.length > 0) {
		const front = queue.shift();
		if (!front) {
			throw new Error("Unexpected undefined value in queue");
		}

		const [[row, col], path] = front;
		const currentDirectionOnKeypad = DIRECTIONAL_KEYPAD[row]?.[col];
		if (currentDirectionOnKeypad === undefined) {
			throw new Error(
				`Invalid coordinates for querying key on keypad: (${row}, ${col})`,
			);
		}

		if (currentDirectionOnKeypad === dst) {
			return `${path}A`;
		}

		for (const [dRow, dCol, dPath] of DIRECTIONS) {
			const nRow = row + dRow;
			const nCol = col + dCol;

			if (
				nRow < 0 ||
				nRow > 1 ||
				nCol < 0 ||
				nCol > 2 ||
				DIRECTIONAL_KEYPAD[nRow]?.[nCol] === ""
			) {
				continue;
			}

			queue.push([[nRow, nCol], `${path}${dPath}`]);
		}
	}

	throw new Error("Could not find the shortest path");
}

function getSequenceFromNumericPad(code: string) {
	const path: string[] = [];

	let src = "A";

	for (let i = 0; i < code.length; i++) {
		const dst = code[i];
		if (dst === undefined) {
			throw new Error("Unexpected undefined dst");
		}
		path.push(getShortestPathOnNumericKeypad(src, dst));

		src = dst;
	}

	return path.join("");
}

function getSequenceFromDirectionalPad(seqFromNumericPad: string) {
	const path: string[] = [];

	let src = "A";

	for (let i = 0; i < seqFromNumericPad.length; i++) {
		const dst = seqFromNumericPad[i];
		if (dst === undefined) {
			throw new Error("Unexpected undefined dst");
		}
		path.push(getShortestPathOnDirectionalKeypad(src, dst));

		src = dst;
	}

	return path.join("");
}

function solve(part: 1 | 2) {
	switch (part) {
		case 1: {
			let sum = 0;
			for (const code of codes) {
				const seqLength = getLengthOfShortestSequence(code);
				const numericPart = getNumericPartFromCode(code);

				sum += seqLength * numericPart;
			}
			console.log(`Part 1: ${sum}`);
			break;
		}
		case 2:
			break;
	}
}

solve(1);
solve(2);
