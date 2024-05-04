const intersection = (a, b) => {
    const set = new Set(a);
    const res = [];
    for (let num of b) {
        set.has(num) ? res.push(num) : ""
    }

    return res
}

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

