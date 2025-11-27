import { ssort } from "@/lib/strings";

function groupAnagrams(strs: string[]): string[][] {
	const groups = new Map<string, string[]>();
	for (const s of strs) {
		const ss = ssort(s);
		if (!groups.has(ss)) {
			groups.set(ss, []);
		}
		groups.get(ss)?.push(s);
	}

	return Array.from(groups.values());
}

export { groupAnagrams };
