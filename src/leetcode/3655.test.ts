import { describe, expect, test } from "bun:test";
import { xorAfterQueries } from "./3655";

describe("3655. XOR after Range Multiplication Queries III", () => {
	test("should pass basic LeetCode cases", () => {
		expect(xorAfterQueries([1, 1, 1], [[0, 2, 1, 4]])).toBe(4);
		expect(
			xorAfterQueries(
				[2, 3, 1, 5, 4],
				[
					[1, 4, 2, 3],
					[0, 2, 1, 2],
				],
			),
		).toBe(31);
	});
});
