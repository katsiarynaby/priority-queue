const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize = 30) {
		this.heap = new MaxHeap();
		this.maxSize = maxSize;
	}

	push(data, priority) {
		if (this.heap.size() < this.maxSize) {
			this.heap.push(data, priority);
		} else {
			throw new Error('queue has max size');
		}

	}


	shift() {
		if (this.heap.parentNodes.length > 0) {
			return this.heap.pop();
		}
		else throw new Error('queue is empty');
	}

	size() {
		return this.heap.size();
	}

	isEmpty() {
		return this.heap.isEmpty();
	}
}

module.exports = PriorityQueue;
