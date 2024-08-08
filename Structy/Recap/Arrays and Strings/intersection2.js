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

// Solution #2 (Brute Force(Time Out)):

const intersection = (a, b) => {
    const result = [];
    for (let item of b) {
        if (a.includes(item)) {
            result.push(item);
        }
    }
    return result;
};

// #3: Using Set (Pass):

const intersection = (a, b) => {
    const result = [];
    const setA = new Set(a);
    for (let item of b) {
        if (setA.has(item)) {
            result.push(item);
        }
    }
    return result;
};

// Test Cases: 

intersection([4, 2, 1, 6], [3, 6, 9, 2, 10]) // -> [2,6]
intersection([2, 4, 6], [4, 2]) // -> [2,4]
intersection([4, 2, 1], [1, 2, 4, 6]) // -> [1,2,4]
intersection([0, 1, 2], [10, 11]) // -> []
const a = [];
const b = [];
for (let i = 0; i < 50000; i += 1) {
    a.push(i);
    b.push(i);
}
intersection(a, b) // -> [0,1,2,3,..., 49999]

