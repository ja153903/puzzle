import { type Config, getData } from "./10.data";

function isDesiredState(desiredState: string[], currentState: string[]) {
	for (let i = 0; i < desiredState.length; i++) {
		if (desiredState[i] !== currentState[i]) {
			return false;
		}
	}

	return true;
}

function applyTransform(currentState: string[], buttons: number[]) {
	const transformed = [...currentState];
	for (const button of buttons) {
		transformed[button] = transformed[button] === "." ? "#" : ".";
	}

	return transformed;
}

function getFewestPresses(config: Config): number {
	const emptyState = new Array<string>(config.terminalLightState.length).fill(
		".",
	);

	const queue: [number[], number, string[]][] = [];
	const visited: Set<string> = new Set();

	for (const button of config.buttons) {
		queue.push([button, 0, [...emptyState]]);
	}

	while (queue.length > 0) {
		const size = queue.length;
		for (let i = 0; i < size; i++) {
			const front = queue.shift();
			if (!front) {
				throw new Error("For some reason this is empty");
			}

			const [button, level, currentState] = front;

			if (isDesiredState(config.terminalLightState, currentState)) {
				return level;
			}

			const nextState = applyTransform(currentState, button);

			for (const button of config.buttons) {
				const nextStateHash = `${JSON.stringify(button)} => ${level + 1} => ${JSON.stringify(nextState)}`;
				if (visited.has(nextStateHash)) {
					continue;
				}

				visited.add(nextStateHash);
				queue.push([button, level + 1, [...nextState]]);
			}
		}
	}

	throw new Error("Did not get the appropriate fewest presses");
}

async function solve(isTest = false) {
	const data = await getData(isTest);
	return data.reduce((acc, config) => acc + getFewestPresses(config), 0);
}

const ans = await solve();
console.log(`Advent of Code 2025 - Day 10 - Part 1: ${ans}`);
