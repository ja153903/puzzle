import { describe, expect, test } from "bun:test";
import { minWindow } from "./76";

describe("Minimum Window Substring", () => {
	test("it should solve basic cases", () => {
		expect(minWindow("ADOBECODEBANC", "ABC")).toBe("BANC");
		expect(minWindow("a", "aa")).toBe("");
		expect(minWindow("a", "a")).toBe("a");
		expect(minWindow("a", "b")).toBe("");
		expect(minWindow("ab", "a")).toBe("a");
	});

	test("it should solve more difficult cases", () => {
		expect(minWindow("cabwefgewcwaefgcf", "cae")).toBe("cwae");
	});
});
