// Defining Node class
class Node {
	/**
	 *
	 * @param value
	 * @param next default value is null
	 */
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}
// Defining LinkedList Class
class LinkedList {
	/**
	 *
	 * @param value
	 */
	constructor(value) {
		let node = new Node(value);
		this.head = node;
		this.tail = node;
		this.length = 1;
	}

	/**
	 *
	 * @param value
	 */
	append(value) {
		let newNode = new Node(value);
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
	}

	/**
	 *
	 * @param value
	 */
	prepend(value) {
		let newNode = new Node(value, this.head);
		this.head = newNode;
		this.length++;
	}
	print() {
		let data = this.head;
		while (data) {
			console.log(data.value);
			data = data.next;
		}
	}
	insertAt(value, position) {
		if (position === 1) {
			this.prepend(value);
		} else if (position === this.length + 1) {
			this.append(value);
		}
		let preNode = this.find(position - 1);
		let newNode = new Node(value, preNode.next);
		preNode.next = newNode;
		this.length++;
	}
	find(n) {
		let data = this.head;
		let count = 1;
		while (count < n) {
			data = data.next;
			count++;
		}
		return data;
	}
	update(n, value) {
		const targetNode = this.find(n);
		targetNode.value = value;
	}
	delete(n) {
		const preNode = this.find(n - 1);
		const targetNode = this.find(n);
		preNode.next = targetNode.next;
	}
}

let list = new LinkedList(100);
list.append(200);
list.append("two");
list.append("three");
list.insertAt(250, 3);
// list.print();
list.update(2, 300);
list.delete(2);
list.print();
