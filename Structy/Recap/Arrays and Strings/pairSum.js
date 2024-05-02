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