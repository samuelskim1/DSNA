const mostFrequentChar = (s) => {
    const count = {};

    for (let char of s) {
        if (!(char in count)) {
            count[char] = 0;
        }
        count[char] += 1
    }

};