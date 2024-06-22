// Problem;
// pair product
// Write a function, pairProduct, that takes in an array and a target product as arguments. The function should return an array containing a pair of indices whose elements multiply to the given target. The indices returned must be unique.
// Be sure to return the indices, not the elements themselves.
// There is guaranteed to be one such pair whose product is the target.

// Complexities:
// n = length of array
// Time: O(n)
// Space: O(n)


// My Solution:

const pairProduct = (numbers, targetProduct) => {
    const previousNums = {};
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i]
        const complement = targetProduct / number
        if (complement in hash) return [hash[complement], i];
        hash[number] = i;
    }
}
