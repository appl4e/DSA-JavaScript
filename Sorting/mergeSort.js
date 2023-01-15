const arr = [60, 10, 10, 50, 5, 15, 30, 20, 40];
const tempArr = [];

function mergeSort(arr, l, r) {
	if (l < r) {
		let mid = Math.floor((l + r) / 2);
		console.log("recursion", l, r, mid);
		mergeSort(arr, l, mid);
		mergeSort(arr, mid + 1, r);
		merge(arr, l, mid, r);
		// return arr;
	}
}

// merge([30,15], 5, 5, 6)

function merge(arr, l, mid, r) {
	let i = l;
	let j = mid + 1;
	let k = i;
	// l = 0, r= 1, mid = 0
	console.log("merge", l, mid, r);
	while (i <= mid && j <= r) {
		if (arr[i] <= arr[j]) {
			tempArr[k] = arr[i];
			i++;
		} else {
			tempArr[k] = arr[j];
			j++;
		}
		k++;
	}

	if (i > mid) {
		while (j <= r) {
			tempArr[k] = arr[j];
			j++;
			k++;
		}
	} else {
		while (i <= mid) {
			tempArr[k] = arr[i];
			i++;
			k++;
		}
	}
	for (let z = l; z <= r; z++) {
		arr[z] = tempArr[z];
	}
	console.log(arr, tempArr);
}
mergeSort(arr, 0, arr.length - 1);
console.log(arr);
