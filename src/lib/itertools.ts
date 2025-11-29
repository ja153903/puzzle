export function permutations<T>(items: T[]) {
	function* generate(current: T[], used: boolean[]): Generator<T[]> {
		if (current.length === items.length) {
			yield [...current];
		} else {
			for (let i = 0; i < items.length; i++) {
				if (used[i]) {
					continue;
				}

				used[i] = true;
				current.push(items[i]);
				yield* generate(current, used);
				current.pop();
				used[i] = false;
			}
		}
	}

	const used = new Array<boolean>(items.length).fill(false);
	const current: T[] = [];

	return generate(current, used);
}

export function combinations<T>(items: T[], k: number) {
	function* generate(
		current: T[],
		used: boolean[],
		start: number,
	): Generator<T[]> {
		if (current.length === k) {
			yield [...current];
		} else {
			for (let i = start; i < items.length; i++) {
				if (used[i]) {
					continue;
				}

				used[i] = true;
				current.push(items[i]);
				yield* generate(current, used, i + 1);
				current.pop();
				used[i] = false;
			}
		}
	}

	const used = new Array<boolean>(items.length).fill(false);
	const current: T[] = [];

	return generate(current, used, 0);
}
