const factorialMemo = [];
function factorial(num) {
	if (factorialMemo[num]) {
		return factorialMemo[num];
	}
	let result = 1;
	for (let i = 1; i <= num; i++) {
		result = result * i;
	}
	factorialMemo[num] = result;
	return result;
}
numbers = [3, 3, 3, 5, 5, 5, 5, 7, 7, 8, 9, 3, 3, 3];

for (let i = 0; i < numbers.length; i++) {
	console.log(factorial(numbers[i]));
}
