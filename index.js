/**
 * call sortNumbers with numbers as argument
 * take numbers as paramemeter named 'nums' in sortNumbers()
 * call sort() on an nums array. 
 * in sort() call a callback function which defines, how to compare
 */

let numbers = [4, 2, 5, 3, 9, 7, 1, 8, 2, 6];

const sortNumbers = nums => {
    return nums.sort( (a,b) => a-b);
};

console.log(sortNumbers(numbers));

/**
 * call sortNames with names as argument
 * take names as paramemeter named 'names' in sortNumbers()
 * call sort() on an names array. 
 * in sort() call a callback function which defines, how to compare
 * callbackfunction compares to values and return the smallest based on a positive or negative return value
 */

let names = ["Fran", "Leon", "Ale", "Jenna", "Bleda", "Hadi"];

const sortNames = names => {
    return names.sort( (a,b) => a<b? -1 : 1 );
};

console.log(sortNames(numbers));