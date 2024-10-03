// max value
// Write a function, maxValue, that takes in array of numbers as an argument.The function should return the largest number in the array.

// Solve this without using any built-in array methods.

// You can assume that the array is non - empty.

// my solution:

const maxValue = (nums) => {
    // todo
    let largestNum = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > largestNum) {
            largestNum = nums[i];
        }
    }

    return largestNum;
};

// structy's solution:

// Time Complexity: 
// n = length of array
// Time: O(n)
// Space: O(1)

const maxValue = (nums) => {
    let maximum = -Infinity;

    for (let num of nums) {
        if (num > maximum) maximum = num;
    }

    return maximum;
};


// test case 00:
maxValue([4, 7, 2, 8, 10, 9]); // -> 10;
// test case 1:
maxValue([10, 5, 40, 40.3]); // -> 40.3;
// test case 2:
maxValue([-5, -2, -1, -11]); // -> -1;
// test case 3:
maxValue([42]); // -> 42;
// test case 4:
maxValue([1000, 8]); // -> 1000;
// test case 5:
maxValue([1000, 8, 9000]); // -> 9000;
// test case 6:
maxValue([2, 5, 1, 1, 4]); // -> 5;

