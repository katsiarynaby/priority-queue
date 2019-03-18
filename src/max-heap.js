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
		if (!this.isEmpty()) {
			// let data = this.root.data;
			let detached = this.detachRoot();
		this.restoreRootFromLastInsertedNode(detached);
		this.shiftNodeDown(this.root);
			this.sizeHeap--;
			return this.root.data;
		} ;
	}

	detachRoot() {

		let detachedRoot = this.root;

		if (this.parentNodes[0] == detachedRoot) {
			this.parentNodes.shift();
		}

		this.root = null;
		return detachedRoot;

	}

	restoreRootFromLastInsertedNode(detached) {
		if (this.isEmpty()) {
			return;
		}
		let node = this.parentNodes.pop();
		if (node.parent && node.parent != detached && node.parent.right == node) {
			this.parentNodes.unshift(node.parent);
		}
		node.remove();

		this.root = node;
		if (detached.left) {
			this.root.left = detached.left;
			detached.left.parent = this.root;
		}
		if (detached.right) {
			this.root.right = detached.right;
			detached.right.parent = this.root;
		}
		if (!(this.root.left) || !(this.root.right)) {
			this.parentNodes.unshift(this.root);
		}
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
				if (parent == this.root) {
					this.root = node;
				}
				let nodeIndex = this.parentNodes.indexOf(node);
				let parentIndex = this.parentNodes.indexOf(parent);

				this.parentNodes[nodeIndex] = parent;
				this.parentNodes[parentIndex] = node;

				node.swapWithParent();
				this.shiftNodeUp(node);
			}
		}
	}

	shiftNodeDown(node) {
		if (node.left && node.right
			&& node.priority < node.left.priority && node.left.priority > node.right.priority
			|| node.left && !(node.right) && node.priority < node.left.priority) {
			let nodeIndex = this.parentNodes.indexOf(node);
			let nodeLeftIndex = this.parentNodes.indexOf(node.left);

			this.parentNodes[nodeIndex] = node.left;
			this.parentNodes[nodeLeftIndex] = node;


			node.left.swapWithParent();

			if (!node.parent.parent) {
				this.root = node.parent;
			}
			this.shiftNodeDown(node);
		}
		if (node.left && node.right
			&& node.priority < node.left.priority && node.left.priority < node.right.priority) {
			let nodeIndex = this.parentNodes.indexOf(node);
			let nodeRightIndex = this.parentNodes.indexOf(node.right);

			this.parentNodes[nodeIndex] = node.right;
			this.parentNodes[nodeRightIndex] = node;


			node.right.swapWithParent();

			if (!node.parent.parent) {
				this.root = node.parent;
			}
			this.shiftNodeDown(node);
		}
	}
}

module.exports = MaxHeap;
