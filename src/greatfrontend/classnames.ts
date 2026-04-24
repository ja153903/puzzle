/** biome-ignore-all lint/suspicious/noExplicitAny: this is a puzzle */
export type ClassValue =
	| ClassArray
	| ClassDictionary
	| string
	| number
	| null
	| boolean
	| undefined;
export type ClassDictionary = Record<string, any>;
export type ClassArray = Array<ClassValue>;

export default function classNames(...args: Array<ClassValue>): string {
	const result: string[] = [];

	for (const arg of args) {
		if (Array.isArray(arg)) {
			result.push(classNames(...arg));
		} else if (typeof arg === "object" && arg != null) {
			for (const [key, value] of Object.entries(arg)) {
				if (value) {
					result.push(key);
				}
			}
		} else if (arg) {
			result.push(arg.toString());
		}
	}

	return result.join(" ");
}
