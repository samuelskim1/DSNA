// Write a function to check if a given integer is a palindrome or not in Javascript
// 121 -> true
// 10 -> false
// -1 -> false
// 1234321 = > True
// -1234321 - False
// 1 -> True
// 123321 -> True

// Change integer to string
// Iterate through string
// Find the middle index
// 

let isPalindrome = (x) => {
    return x < 0 ? false : x === +x.toString().split('').reverse().join('');
}


const isPalidrome = (integer) => {
    // if (integer < 0) return false;

    // const stringedInteger// (Change integer to string);

    // if (stringedInteger.length < 2) return true;

    // let middleIndex = stringedInteger.length / 2

    // let j = -1;

    // for (let i = 0; i < (stringedInteger.length / 2); i++) {
    //     if (stringedInteger[i] === stringedInteger[j]) {
    //         i++;
    //         j--;
    //     } else {
    //         return false;
    //     }
    // }



}