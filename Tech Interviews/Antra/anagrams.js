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