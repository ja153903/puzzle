import { describe, expect, test } from "bun:test";
import { combinations, permutations, powerset } from "@/lib/itertools";
import { factorial } from "@/lib/math";

describe("permutations", () => {
	test("we should get back the proper permutations", () => {
		const items = [1, 2, 3];
		const perms = permutations(items);
		const collected = [];
		for (const perm of perms) {
			collected.push(perm);
			expect(perm).toHaveLength(items.length);
		}

		expect(collected).toHaveLength(factorial(items.length));
	});
});

describe("combinations", () => {
	test("we should get back the proper combinations", () => {
		const items = [1, 2, 3];
		const combs = combinations(items, 2);
		const collected = [];

		for (const comb of combs) {
			collected.push(comb);
			expect(comb).toHaveLength(2);
		}

		console.log(collected);
		expect(collected).toHaveLength(3);
	});
});

describe("powerset", () => {
	test("we should get back the powerset", () => {
		const items = [1, 2, 3];
		const pset = powerset(items);

		expect(pset).toHaveLength(8);
	});
});
