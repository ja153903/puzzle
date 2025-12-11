/**
 * `read` takes a filepath and reads the contents into a string
 */
export async function read(path: string) {
	const file = Bun.file(path);

	try {
		const content = await file.text();
		return content.trim();
	} catch (e) {
		throw new Error(
			`Something went wrong reading the file: ${JSON.stringify(e, null, 2)}`,
		);
	}
}

/**
 * `readlines` takes a filepath and reads the content into a string, but
 * then splits everything by line
 */
export async function readlines(path: string) {
	const file = Bun.file(path);
	let content = "";

	try {
		content = await file.text();
	} catch (e) {
		throw new Error(
			`Something went wrong reading the file: ${JSON.stringify(e, null, 2)}`,
		);
	}

	const lines = content.split("\n").filter(Boolean);

	if (lines.length === 0) {
		throw new Error(`Empty file content from file: ${path}`);
	}

	return lines;
}

export async function readgrid<T>(path: string, coerceFn: (ch: string) => T) {
	const lines = await readlines(path);
	return lines.map((line) => line.split("").map((ch) => coerceFn(ch)));
}
