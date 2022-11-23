/**
    suppose we have an array of numbers,
    from which we will have to find one specific number.
*/

let numbers = [10, 15, 25, 30, 40, 45, 60, 55, 50, 70, 65, 90, 85];

/**
    Now we are going to make a function which will be used
    to iterate through this array of numbers.

    The function below will have 2 parameters. 
    - One is the array we want to  iterate through and 
    - another one is the number which we want to find from this array.
*/

function linearSearch(arrayOfItems, itemsToFind) {
	/**
    We have create a for loop to iterate through all the items of the
    array, until the targeted item is found. 
  */
	for (let i = 0; i < arrayOfItems.length; i++) {
		if (itemsToFind === arrayOfItems[i]) {
			/*
        when the value of targeted item matches to any item
        of the array, we return the index of that item.
      */
			return "Index of the item: " + i;
		}
	}
	/*
    When the loop ends but no item matches with the value of the targeted
    item, then we know that the item doesn't exist in the array.
  */
	return "Item not found.";
}

/**
  Now we will call the function and will pass our numbers' array
  and a desired number (suppose 55) as arguments to find from that array.
 */

console.log(linearSearch(numbers, 55)); //output: Index of the item: 7

/**
  Now let's try to search for a number 
  which is not present in our array
 */

console.log(linearSearch(numbers, 20)); //output: Item not found
