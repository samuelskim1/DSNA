// Problem:
// most frequent char
// Write a function, mostFrequentChar, that takes in a string as an argument.
// The function should return the most frequent character of the string.
// If there are ties, return the character that appears earlier in the string.
// You can assume that the input string is non - empty.

// Complexities:
// n = length of string
// Time: O(n)
// Space: O(n)


// My Solution: 
const mostFrequentChar = (s) => {
    // todo
    let counters = {};

    for (let char of s) {
        char in counters ? counters[char]++ : counters[char] = 1
    }

    let best = null;
    for (let char of s) {
        if (best === null || counters[char] > counters[best]) {
            best = char;
        }
    }

    return best;
    // let maxCounter = []

    // let pairs = Object.entries(counters);
    // console.log(pairs);

    // for (let pair of pairs) {
    //   let counter = pair[1];
    //   let letter = pair[0];
    //   if (maxCounter.length === 0) {
    //     maxCounter.push(letter);
    //   } else {
    //     if (maxCounter[0])
    //   }
    // }

};