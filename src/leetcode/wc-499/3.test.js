import { describe, expect, test } from "bun:test";
import { minOperations } from "./3";

describe("Min Operations", () => {
	test("simple test cases", () => {
		expect(minOperations([3, 3, 2, 1])).toBe(2);
		expect(minOperations([5, 1, 2, 3])).toBe(4);
	});

	test("another test case", () => {
		expect(minOperations([12, 1, 14])).toBe(11);
		expect(minOperations([16, 4, 19, 3])).toBe(28);
		expect(minOperations([10, 24, 1, 11, 3])).toBe(31);
	});
});
