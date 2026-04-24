import { describe, expect, test } from "bun:test";
import { colorGrid } from "./3";

describe("3", () => {
	test("basic cases", () => {
		let n = 3;
		let m = 3;
		let sources = [
			[0, 0, 1],
			[2, 2, 2],
		];

		expect(colorGrid(n, m, sources)).toEqual([
			[1, 1, 2],
			[1, 2, 2],
			[2, 2, 2],
		]);

		n = 3;
		m = 3;
		sources = [
			[0, 1, 3],
			[1, 1, 5],
		];
		expect(colorGrid(n, m, sources)).toEqual([
			[3, 3, 3],
			[5, 5, 5],
			[5, 5, 5],
		]);
	});

	test("other cases", () => {
		const n = 1;
		const m = 2;
		const sources = [
			[0, 1, 923912],
			[0, 0, 870304],
		];

		expect(colorGrid(n, m, sources)).toEqual([[870304, 923912]]);
	});
});
