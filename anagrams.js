// Problem:
// anagrams
// Write a function, anagrams, that takes in two strings as arguments.
// The function should return a boolean indicating whether or not the strings are anagrams.
// Anagrams are strings that contain the same characters, but in any order.

// Complexity: 
// n = length of string 1
// m = length of string 2
// Time: O(n + m)
// Space: O(n + m)


// Test Cases:
anagrams('restful', 'fluster'); // -> true
anagrams('cats', 'tocs'); // -> false
anagrams('monkeyswrite', 'newyorktimes'); // -> true
anagrams('monkeyswrite', 'newyorktimes'); // -> true
anagrams('monkeyswrite', 'newyorktimes'); // -> true
anagrams('tax', 'taxi'); // -> false
anagrams('tax', 'taxi'); // -> false
anagrams('night', 'thing'); // -> true
anagrams('night', 'thing'); // -> true
anagrams('po', 'popp'); // -> false
anagrams('pp', 'oo') // -> false

// My Solution: 
const anagrams = (s1, s2) => {
    if (s1.length !== s2.length) return false;

    const count = {}
    for (let char of s1) {
        if (!(char in count)) {
            count[char] = 0
        }
        count[char]++
    }

    for (let char of s2) {
        if (char in count) {
            count[char]--
        } else {
            return false
        }
    }

    let counters = Object.values(count);
    for (let counter of counters) {
        if (counter !== 0) return false;
    };

    return true;

};
