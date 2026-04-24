import { describe, expect, test } from "bun:test";
import { lengthOfLongestSubstring } from "./longest-substring-without-repeating-characters";

describe("Longest Substring Without Repeating Characters", () => {
	test("simple cases", () => {
		expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
		expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
		expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
	});
});
