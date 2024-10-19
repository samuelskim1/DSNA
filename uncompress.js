// Problem 
// uncompress
// Write a function, uncompress, that takes in a string as an argument.
// The input string will be formatted into multiple groups according to the following pattern:
// <number><char>
// for example, '2c' or '3a'.
// The function should return an uncompressed version of the string where each 'char' of a group is repeated 'number' times consecutively.
// You may assume that the input string is well-formed according to the previously mentioned pattern.

// My work:

const uncompress = (s) => {
    // todo
    // 1) create an empty string variable to concatonate to (This is what we are returning in the end)
    // 2) First I have to iterate through the arg string in order to check for whether the value is either a number or a char
    // 3) Use two pointers of indicies in my for loop to keep track of start and end indicies for number
    // 4) Create helper function that checks if the value for current index is a char or a number
    // -If the next value in the string is a letter, multiple the letter by the number that was before it and concatonate the result to the empy string var created in step 1
    // 5) Have for loop end once you reach the end of the arg string and return value of step 1

    let result = "";
    //This allows us to check whether the value is a number or not;
    const numbers = "0123456789";

    // two indicators
    let i = 0;
    let j = 0;

    while (j < s.length) {
        if (numbers.includes(s[j])) {
            j++
        } else {
            let num = Number(s.slice(s[i], s[j]));
            for (let count = 0; count < num; count++) {
                result += s[j];
            }
            j += 1;
            i = j;
        }
    }

    return result;

};

const uncompress = (s) => {
    let result = [];
    const numbers = '0123456789';
    let i = 0;
    let j = 0;
    while (j < s.length) {
        if (numbers.includes(s[j])) {
            j += 1;
        } else {
            const num = Number(s.slice(i, j));
            for (let count = 0; count < num; count += 1) {
                result.push(s[j]);
            }
            j += 1;
            i = j;
        }
    }
    return result.join('');
};
// n = number of groups
// m = max num found in any group
// Time: O(n*m)
// Space: O(n*m)




// Test Cases: 
uncompress("2c3a1t"); // -> 'ccaaat'
uncompress("4s2b"); // -> 'ssssbb'
uncompress("2p1o5p"); // -> 'ppoppppp'
uncompress("3n12e2z"); // -> 'nnneeeeeeeeeeeezz'
uncompress("127y"); // ->'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'
