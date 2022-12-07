function targetIndices(nums, target) {
	nums.sort(function (a, b) {
		return a - b;
	});

	let start = 0;
	let end = nums.length - 1;
	let mid;
	const outputArray = [];

	while (start <= end) {
		mid = Math.floor((start + end) / 2);
		if (nums[mid] === target) {
			outputArray.push(mid);
			for (let j = mid - 1; j >= 0; j--) {
				if (nums[j] === target) {
					outputArray.unshift(j);
				} else {
					break;
				}
			}
			for (let i = mid + 1; i <= end; i++) {
				if (nums[i] === target) {
					outputArray.push(i);
				} else {
					break;
				}
			}
			break;
		} else if (nums[mid] > target) {
			end = mid - 1;
		} else {
			start = mid + 1;
		}
	}
	return outputArray;
}

// console.log(targetIndices([1, 2, 5, 2, 3], 2));
// console.log(targetIndices([1, 2, 5, 2, 3], 3));
console.log(
	targetIndices(
		[
			33, 22, 49, 7, 2, 6, 13, 70, 59, 19, 21, 45, 98, 93, 32, 23, 89, 47, 17, 27, 11, 22, 93, 77, 52, 34, 75, 96, 48, 53, 44, 76, 76, 7, 48, 25, 68,
			70, 48, 32, 89, 21, 12, 81, 65, 36, 92, 21, 94, 84, 77, 43, 4, 88, 78, 82, 94, 20, 52, 20, 16, 84, 83, 100, 84, 97, 49, 10, 12, 94, 88, 24, 1,
			31, 81, 95, 92, 51, 36, 84, 48, 34, 85, 8, 3, 47, 46, 18, 84, 43, 42, 35, 97, 60, 93, 14, 92, 47, 44, 72,
		],
		84
	)
);
