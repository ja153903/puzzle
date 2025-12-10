/** biome-ignore-all lint/suspicious/noExplicitAny: <javascript-lp-solver does not have adequate types> */
import { type Config, getData } from "./10.data";

// NOTE: This is explicitly a require import because package doesn't support modern JS
const solver = require("javascript-lp-solver");

function getFewestPresses(config: Config): number {
	const target = config.joltageRequirements;
	const buttons = config.buttons;
	const n = buttons.length;

	const model = {
		optimize: "cost",
		opType: "min",
		constraints: {} as any,
		variables: {} as any,
		ints: {} as any,
	};

	for (let i = 0; i < n; i++) {
		const varName = `button${i}`;
		model.variables[varName] = { cost: 1 }; // Minimize sum of all button presses
		model.ints[varName] = 1; // Integer constraint
	}

	for (let pos = 0; pos < target.length; pos++) {
		const constraintName = `pos${pos}`;
		model.constraints[constraintName] = { equal: target[pos] };

		for (let buttonIdx = 0; buttonIdx < n; buttonIdx++) {
			if (buttons[buttonIdx].includes(pos)) {
				const varName = `button${buttonIdx}`;
				if (!model.variables[varName][constraintName]) {
					model.variables[varName][constraintName] = 0;
				}
				model.variables[varName][constraintName] = 1;
			}
		}
	}

	const solution = solver.Solve(model);

	if (!solution.feasible) {
		throw new Error("No solution found");
	}

	return Math.round(solution.result);
}

async function solve(isTest = false) {
	const data = await getData(isTest);
	return data.reduce((acc, config) => acc + getFewestPresses(config), 0);
}

const ans = await solve();
console.log(`Advent of Code 2025 - Day 10 - Part 2: ${ans}`);
