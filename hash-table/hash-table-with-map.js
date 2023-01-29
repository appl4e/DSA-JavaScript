const obj = {};
obj.name = "Apple";
// obj.hasOwnProperty = true;

// console.log(obj.hasOwnProperty("name"));

const collection = new Map();

collection.set("Name", "Apple");
collection.set("age", "19");
collection.set("size", "big");
collection["size"] = false;

// console.log(collection.get("size"));
for (let [key, value] of collection) {
	console.log(`${key} = ${value}`);
}
