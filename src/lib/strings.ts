/**
 * ssort implements a string sort
 */
export function ssort(s: string) {
	return s
		.split("")
		.sort((a, b) => a.localeCompare(b))
		.join("");
}
