const numbers = [10, 15, 25, 30, 40, 45, 50, 55, 60, 65, 70, 85, 90];
const numbers2 = [90, 85, 70, 65, 55, 50, 40, 35, 25, 20, 15, 10];

function orderAgnosticBinarySearch(arrayOfItems, targetItem) {
	let start = 0;
	let end = arrayOfItems.length - 1;
	let mid, asc;

	if (arrayOfItems[start] < arrayOfItems[end]) {
		asc = true;
	} else {
		asc = false;
	}

	while (start <= end) {
		mid = Math.floor((start + end) / 2);
		if (arrayOfItems[mid] === targetItem) {
			return "Item found at: " + mid;
		}
		if (asc) {
			if (arrayOfItems[mid] < targetItem) {
				start = mid + 1;
			} else {
				end = mid - 1;
			}
		} else {
			if (arrayOfItems[mid] < targetItem) {
				end = mid - 1;
			} else {
				start = mid + 1;
			}
		}
	}
	return -1;
}

console.log(orderAgnosticBinarySearch(numbers2, 50));
