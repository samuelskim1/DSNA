// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false


// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.


const isAnagram = function (s, t) {
    s = s.split("").sort()
    t = t.split("").sort()

    if (s.length !== t.length)
        return false;

    for (const i = 0; i < s.length; i++)
        if (s[i] !== t[i])
            return false;

    return true;
};


// solution #2:
const isAnagram = const anagrams = (s1, s2) => {
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