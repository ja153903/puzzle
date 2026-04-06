type Fn = (...args: unknown[]) => unknown;

interface DebouncedFunction extends Fn {
	cancel: () => void;
	flush: () => void;
}

export default function debounce(func: Fn, wait: number): DebouncedFunction {
	let timeoutId: ReturnType<typeof setTimeout> | undefined;
	let context: unknown;
	let argsToInvoke: unknown[] | undefined;

	function clearTimer() {
		clearTimeout(timeoutId);
		timeoutId = undefined;
	}

	function invoke() {
		if (timeoutId == null) {
			return;
		}

		clearTimer();
		func.apply(context, argsToInvoke ?? []);
	}

	function fn(this: unknown, ...args: unknown[]) {
		clearTimer();
		argsToInvoke = args;
		context = this;
		timeoutId = setTimeout(() => {
			invoke();
		}, wait);
	}

	fn.cancel = clearTimer;
	fn.flush = invoke;

	return fn;
}
