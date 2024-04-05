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



// Structy Solution:
// using a hashmap (object)

const mostFrequentChar = (s) => {
    const count = {};

    for (let char of s) {
        if (!(char in count)) {
            count[char] = 0;
        }
        count[char] += 1
    }

    let best = null;
    for (let char of s) {
        if (best === null || count[char] > count[best]) {
            best = char;
        }
    }
    return best;
};


// Sara's Solution: 

const mostFrequentChar = (s) => {
    const counted = count(s);
    //  const max = Math.max(...Object.values(counted))
    let max = null
    for (let char of s) {
        if (max === null || counted[char] > counted[max]) {
            max = char
        }
    }
    return max
};


const count = (s) => {
    const hash = {};
    for (let char of s) {
        char in hash ? hash[char]++ : hash[char] = 1;
    }
    return hash;
}



// Test Cases:

mostFrequentChar('bookeeper'); // -> 'e'
mostFrequentChar('david'); // -> 'd'
mostFrequentChar('abby'); // -> 'b'
mostFrequentChar('mississippi'); // -> 'i'
mostFrequentChar('potato'); // -> 'o'
mostFrequentChar('eleventennine'); // -> 'e'
mostFrequentChar("riverbed"); // -> 'r'


