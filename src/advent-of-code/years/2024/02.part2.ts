import {
	isMonotonicallyDecreasing,
	isMonotonicallyIncreasing,
} from "@/lib/arrays.number";
import { getData, type Report } from "./02.data";

function isSafe(report: Report) {
	const isMonotonic =
		isMonotonicallyIncreasing(report) || isMonotonicallyDecreasing(report);
	if (!isMonotonic) {
		return false;
	}

	for (let i = 1; i < report.length; i++) {
		const diff = Math.abs(report[i] - report[i - 1]);
		if (diff < 1 || diff > 3) {
			return false;
		}
	}

	return true;
}

function isSafeWithRetry(report: Report) {
	const isMonotonic =
		isMonotonicallyIncreasing(report) || isMonotonicallyDecreasing(report);
	if (!isMonotonic) {
		for (let i = 0; i < report.length; i++) {
			if (isSafe(report.slice(0, i).concat(report.slice(i + 1)))) {
				return true;
			}
		}
		return false;
	}

	for (let i = 1; i < report.length; i++) {
		const diff = Math.abs(report[i] - report[i - 1]);
		if (diff < 1 || diff > 3) {
			for (let j = 0; j < report.length; j++) {
				if (isSafe(report.slice(0, j).concat(report.slice(j + 1)))) {
					return true;
				}
			}
			return false;
		}
	}

	return true;
}

async function solve(isTest = false) {
	const reports = await getData(isTest);
	return reports.filter((report) => isSafeWithRetry(report)).length;
}

const ans = await solve();
console.log(`Advent of Code 2024 - Day 02 - Part 2: ${ans}`);
