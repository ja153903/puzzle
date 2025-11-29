import { getPathToProblemInput } from "@/utils/advent-of-code";
import { readlines } from "@/utils/file-io";

const lines = await readlines(getPathToProblemInput("2024", "23"));

function buildNetwork(edges: string[]) {
	const network = new Map<string, Set<string>>();

	for (const edge of edges) {
		const parts = edge.split("-");
		if (parts.length !== 2) {
			throw new Error("Invalid part is parsed");
		}

		const [u, v] = parts;
		if (!network.has(u)) {
			network.set(u, new Set());
		}
		if (!network.has(v)) {
			network.set(v, new Set());
		}

		network.get(u)?.add(v);
		network.get(v)?.add(u);
	}

	return network;
}

function solve(part: 1 | 2) {
	const network = buildNetwork(lines);

	switch (part) {
		case 1: {
			const uniqueTriplets = new Set();
			for (const [node, childrenSet] of network.entries()) {
				const children = Array.from(childrenSet);

				for (let i = 0; i < children.length; i++) {
					for (let j = i + 1; j < children.length; j++) {
						if (
							network.get(children[i])?.has(children[j]) &&
							network.get(children[j])?.has(children[i])
						) {
							const candidates = [node, children[i], children[j]];

							if (candidates.some((name) => name.startsWith("t"))) {
								const sortedTriplet = candidates
									.sort((a, b) => a.localeCompare(b))
									.join(",");

								uniqueTriplets.add(sortedTriplet);
							}
						}
					}
				}
			}

			console.log(`Part 1: ${uniqueTriplets.size}`);
			break;
		}
		case 2: {
			break;
		}
	}
}

solve(1);
solve(2);
