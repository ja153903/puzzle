import { describe, expect, test } from "bun:test";
import { findMin } from "./153";

describe("153. Find Minimum in Rotated Sorted Array", () => {
	test("it should pass basic cases", () => {
		expect(findMin([3, 4, 5, 1, 2])).toBe(1);
		expect(findMin([4, 5, 6, 7, 0, 1, 2])).toBe(0);
		expect(findMin([11, 13, 15, 17])).toBe(11);
	});
});
