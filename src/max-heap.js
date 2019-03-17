const Node = require('./node');

class MaxHeap {
	constructor() {
		this.parentNodes = [];
		this.root = null;

		this.sizeHeap = 0;
	}

	push(data, priority) {
		this.sizeHeap++;

		let newNode = new Node(data, priority);

		this.insertNode(newNode);
		this.shiftNodeUp(newNode);
	}

	pop() {
		if (!this.sizeHeap === 0) {
			this.sizeHeap--;


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
		return this.sizeHeap;
	}

	isEmpty() {
		return this.size() == 0;
	}

	clear() {

		this.parentNodes = [];
		this.root = null;

		this.sizeHeap = 0;
	}

	insertNode(node) {

		if (!this.root) {
			this.root = node;
			this.parentNodes.push(node);
		} else {
			this.parentNodes.push(node);
			this.parentNodes[0].appendChild(node);
			if (this.parentNodes[0].right) {
				this.parentNodes.shift();
			}
		}
	}


	shiftNodeUp(node) {

	}

	shiftNodeDown(node) {

	}
}

module.exports = MaxHeap;
