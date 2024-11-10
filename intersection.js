// Problem

// intersection
// Write a function, intersection, that takes in two arrays, a, b, as arguments.
// The function should return a new array containing elements that are in both of the two arrays.
// You may assume that each input array does not contain duplicate elements.

// Complexities:

// For brute force (timeout)

// n = length of array a, m = length of array b
// Time: O(n * m)
// Space: O(min(n, m))

// For using set (pass):

// n = length of array a, m = length of array b
// Time: O(n + m)
// Space: O(n)
// My Solution:

const intersection = (a, b) => {
    const result = [];
    for (let item of b) {
        if (a.includes(item)) {
            result.push(item);
        }
    }
    return result;
};
