const intersection = (a, b) => {
    const set = new Set(a);
    const res = [];
    for (let num of b) {
        set.has(num) ? res.push(num) : ""
    }

    return res
}