const pairSum = (numbers, targetSum) => {
    const previousNums = {}

    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i]
        const complement = targetSum - number
        if (complement in previousNums) {
            return [previousNums[complement], i]
        }

        hash[number] = i
    }
};

// Test Cases:
pairSum([3, 2, 5, 4, 1], 8); // -> [0, 2]
pairSum([4, 7, 9, 2, 5, 1], 5); // -> [0, 5]
pairSum([4, 7, 9, 2, 5, 1], 3); // -> [3, 5]
pairSum([1, 6, 7, 2], 13); // -> [1, 2]
pairSum([9, 9], 18); // -> [0, 1]
pairSum([6, 4, 2, 8], 12); // -> [1, 3]