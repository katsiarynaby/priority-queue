class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.right = null;
		this.left = null;
	}

	appendChild(node) {
		if (!this.left) {
			this.left = node;
			node.parent = this;

		} else if (!this.right) {
			this.right = node;
			node.parent = this;
		}
	}

	removeChild(node) {
		if (this.left == node) {
			node.parent = null;
			this.left = null;
		} else
			if (this.right == node) {
				node.parent = null;
				this.right = null;
			} else {
				throw new Error('error');
			}
	}

	remove() {
		if (this.parent) {
			this.parent.removeChild(this)
		}
	}

	swapWithParent() {
		if (this.parent) {
			let tmp;
			if (this.left) {
				this.left.parent = this.parent;
			} if (this.right) {
				this.right.parent = this.parent;
			}
			if (this.parent.left === this) {
				if (this.parent.right) {
					this.parent.right.parent = this;
				}
				tmp = this.right;
				this.right = this.parent.right;
				this.parent.right = tmp;
				tmp = this.left;
				this.left = this.parent;
				this.parent.left = tmp;
			} else {
				if (this.parent.right === this) {
					if (this.parent.left) {
						this.parent.left.parent = this;
					}
					tmp = this.left;
					this.left = this.parent.left;
					this.parent.left = tmp;
					tmp = this.right;
					this.right = this.parent;
					this.parent.right = tmp;
				}
			}
			if (this.parent.parent) {
				if (this.parent.parent.left === this.parent) {
					this.parent.parent.left = this;
				} else {
					this.parent.parent.right = this;
				}
			}
			tmp = this.parent;
			this.parent = this.parent.parent;
			tmp.parent = this;
		}
	}
}

module.exports = Node;
