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
		let parent = node.parent;
		if (parent) {
			if (node.priority > parent.priority) {
				let nodeIndex = this.parentNodes.indexOf(node);
				let parentIndex = this.parentNodes.indexOf(parent);

				if (nodeIndex !== 1 ) {
					this.parentNodes[nodeIndex] = parent
				}
				if (parentIndex !== 1) {
					this.parentNodes[parentIndex] = node
				}
				

				node.swapWithParent();
				this.shiftNodeUp(node);
			}
		} else this.root = node;
	}

	shiftNodeDown(node) {

	}
}

module.exports = MaxHeap;
