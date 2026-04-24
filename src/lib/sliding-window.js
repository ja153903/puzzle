/**
 * The problem asks us to find the length of the longest substring
 * where we can replace at most `k` characters to make all the characters
 * in the substring the same
 *
 * This usually means that we should invoke a sliding window pattern
 */

/**
 * @param {unknown[]} container
 * @param {(...args: unknown[]) => boolean} condition
 * @return {unknown}
 */
export function longestWindow(container, condition) {
	let i = 0;
	let maxLength = 0;

	for (let j = 0; j < container.length; j++) {
		// Expand the window
		// Add container[j] to the current window logic
		//
		// Shrink the window if the condition is violated
		while (!condition()) {
			i++;
		}

		// Update the result if the current window is larger
		maxLength = Math.max(maxLength, j - i + 1);
	}

	return maxLength;
}
