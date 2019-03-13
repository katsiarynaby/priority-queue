const Node = require('./node');

class MaxHeap {
	constructor() {
		this.parentNodes = [];
		this.root = null;

		this.size = 0;
	}

	push(data, priority) {
		this.size++;

		const newNode = new Node(data, priority);

		this.insertNode(newNode);
		this.shiftNodeUp(newNode);
	}

	pop() {
		if (!this.size ===0 ){
			this.size--;

		}
	}

	detachRoot() {
		let detachedRoot = this.root;
		this.root = null;

		return detachedRoot;

	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		return this.size;
	}

	isEmpty() {
		return this.size() == 0;
	}

	clear() {
		
		this.parentNodes = [];
		this.root = null;

		this.size = 0;
	}

	insertNode(node) {
		if (!this.root) {
			this.root = node;
			this.parentNodes.push(node);
		}
	}

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
