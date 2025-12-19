/**
 * ssort implements a string sort
 */
export function ssort(s: string) {
	return s
		.split("")
		.sort((a, b) => a.localeCompare(b))
		.join("");
}

/**
 * splitWhitespace splits a string by any number of whitespace characters
 */
export function splitWhitespace(s: string) {
	return s.split(/\s+/g);
}

/**
 * splitAll will split the string by all characters
 */
export function splitAll(s: string) {
	return s.split("");
}

/**
 * splitlines will split the string by line
 */
export function splitlines(s: string) {
	return s.split("\n");
}
