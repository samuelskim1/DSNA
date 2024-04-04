// Problem: 

// compress
// Write a function, compress, that takes in a string as an argument.The function should return a compressed version of the string where consecutive occurrences of the same characters are compressed into the number of occurrences followed by the character.Single character occurrences should not be changed.
// 'aaa' compresses to '3a'
// 'cc' compresses to '2c'
// 't' should remain as 't'
// You can assume that the input only contains alphabetic characters.

// Complexities:

// n = length of string
// Time: O(n)
// Space: O(n)


// My Solution:

const compress = (s) => {
    let result = "";
    let i = 0;
    let j = 0;

    while (j < s.length) {
        if (s[j] === s[j + 1]) {
            j++;
        } else {
            let letters = s.slice(i, j + 1)
            console.log(letters);
            if (letters.length > 1) {
                result += (letters.length + s[j]);
            } else {
                result += s[j];
            }
            j++;
            i = j;
        }
    }
    return result;
};

// Sara's solution:

const compress = (s) => {
    let left = 0;
    let res = "";
    for (let i = 0; i <= s.length; i++) {
        if (i > 0 && s[i] != s[i - 1]) {
            res += left > 1 ? left : ""
            res += s[i - 1];
            left = 0;
        }
        left++

    }
    return res;
};

// Structy Solution: 

const compress = (s) => {
    let result = [];
    let i = 0;
    let j = 0;

    while (j <= s.length) {
        if (s[i] === s[j]) {
            j += 1;
        } else {
            const num = j - i;
            if (num === 1) {
                result.push(s[i]);
            } else {
                result.push(String(num), s[i]);
            }
            i = j;
        }
    }

    return result.join('');
};

// Test Cases:
compress('ccaaatsss'); // -> '2c3at3s'
compress('ssssbbz'); // -> '4s2bz'
compress('ssssbbz'); // -> '4s2bz'
compress('nnneeeeeeeeeeeezz'); // -> '3n12e2z'
compress('yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy');
// -> '127y'
