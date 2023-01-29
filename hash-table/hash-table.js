class hashTable {
	table = new Array(5);
	size = 0;
	constructor() {
		// this.table = new Array(5);
		// this.size = 0;
	}

	_hash(value) {
		let hash = 0;
		for (let i = 0; i < value.length; i++) {
			hash = hash + value.charCodeAt(i);
		}
		// console.log(hash % this.table.length);
		return hash % this.table.length;
	}

	set(value) {
		const index = this._hash(value);
		if (this.table[index]) {
			this.table[index].push(value);
		} else {
			this.table[index] = [value];
		}
		this.size++;
	}

	get(value) {
		const index = this._hash(value);
		if (this.table[index]) {
			for (let i = 0; i < this.table[index].length; i++) {
				if (this.table[index][i] === value) {
					return this.table[index][i];
				}
			}
		}
		return undefined;
	}

	remove(value) {
		const index = this._hash(value);
		if (this.table[index] && this.table[index].length) {
			for (let i = 0; i < this.table[index].length; i++) {
				if (this.table[index][i] === value) {
					this.table[index].splice(i, 1);
					this.size--;
					return true;
				}
			}
		} else {
			return false;
		}
	}
}

const myHashTable = new hashTable();

myHashTable.set("apple");
myHashTable.set("banana");
myHashTable.set("papaya");
myHashTable.set("peanut");
myHashTable.set("jackfruite");
myHashTable.set("malta");
myHashTable.set("mango");
myHashTable.set("orange");

console.log(myHashTable.get("apple"));
console.log(myHashTable.table);
console.log(myHashTable.remove("peanut"));
console.log(myHashTable.table);
