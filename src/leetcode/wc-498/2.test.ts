import { describe, expect, test } from "bun:test";
import { firstStableIndex } from "./2";

describe("2", () => {
	test("edge cases", () => {
		expect(firstStableIndex([1, 7], 1)).toBe(0);
	});
});
