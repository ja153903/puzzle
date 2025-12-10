export class MinHeap<T> {
	private heap: T[] = [];

	constructor(private compare: (a: T, b: T) => number) {}

	push(item: T) {
		this.heap.push(item);
		this.bubbleUp(this.heap.length - 1);
	}

	pop(): T | undefined {
		if (this.heap.length === 0) return undefined;
		if (this.heap.length === 1) return this.heap.pop();

		const result = this.heap[0];
		this.heap[0] = this.heap.pop()!;
		this.bubbleDown(0);
		return result;
	}

	get length() {
		return this.heap.length;
	}

	private bubbleUp(index: number) {
		while (index > 0) {
			const parentIndex = Math.floor((index - 1) / 2);
			if (this.compare(this.heap[index], this.heap[parentIndex]) >= 0) break;
			[this.heap[index], this.heap[parentIndex]] = [
				this.heap[parentIndex],
				this.heap[index],
			];
			index = parentIndex;
		}
	}

	private bubbleDown(index: number) {
		while (true) {
			let smallest = index;
			const leftChild = 2 * index + 1;
			const rightChild = 2 * index + 2;

			if (
				leftChild < this.heap.length &&
				this.compare(this.heap[leftChild], this.heap[smallest]) < 0
			) {
				smallest = leftChild;
			}

			if (
				rightChild < this.heap.length &&
				this.compare(this.heap[rightChild], this.heap[smallest]) < 0
			) {
				smallest = rightChild;
			}

			if (smallest === index) break;
			[this.heap[index], this.heap[smallest]] = [
				this.heap[smallest],
				this.heap[index],
			];
			index = smallest;
		}
	}
}
