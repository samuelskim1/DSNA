// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal
// substring
//  consisting of non - space characters only.



//     Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.
// Example 3:

// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.


// Constraints:

// 1 <= s.length <= 104
// s consists of only English letters and spaces ' '.
// There will be at least one word in s.

// sol #1
const lengthOfLastWord = function (s) {
    let end = s.length - 1;

    while (end >= 0 && s[end] === ' ') {
        end--;
    }

    let start = end;
    while (start >= 0 && s[start] !== ' ') {
        start--;
    }

    return end - start;
};

// sol #2:
const lengthOfLastWord = function (s) {
    let length = 0;
    let counting = false;

    for (let c of s) {
        if (c !== ' ') {
            if (!counting) {
                counting = true;
                length = 1;
            } else {
                length++;
            }
        } else {
            counting = false;
        }
    }

    return length;
};