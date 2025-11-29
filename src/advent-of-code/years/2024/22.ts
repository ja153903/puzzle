import { getPathToProblemInput } from "@/utils/advent-of-code";
import { readlines } from "@/utils/file-io";

const lines = await readlines(getPathToProblemInput("2024", "22"));

const MOD = 16777216n;

function updateSecret(secret: bigint) {
	const phase1 = ((secret * 64n) ^ secret) % MOD;
	const phase2 = ((phase1 / 32n) ^ phase1) % MOD;

	return ((phase2 * 2048n) ^ phase2) % MOD;
}

function updateSecretLoop(secret: bigint) {
	let current = secret;
	for (let i = 0; i < 2000; i++) {
		const next = updateSecret(current);
		current = next;
	}

	return current;
}

function solve(part: 1 | 2) {
	switch (part) {
		case 1: {
			const sum = lines
				.map((line) => updateSecretLoop(BigInt(line)))
				.reduce((a, b) => a + b);
			console.log(`Part 1: ${sum}`);
			break;
		}
		case 2: {
			// FIXME: Don't know how to do this one well
			break;
		}
	}
}

solve(1);
solve(2);
