// Part 1 - 0.258056640625 ms
const goSleddin = (slope) => {
    let trees = 0;
    let y = 0;

    map.forEach((row, i) => {
        if (i % slope[1] == 0) {
            if (row[y] == '#') {
                trees++;
            }
            // Progress to the next Y
            if (y + slope[0] > row.length - 1) {
                let remaining = row.length - y;
                y = slope[0] - remaining;
            } else {
                y += slope[0];
            }
        }
    })
    return trees;
};

const slope = [3, 1];
console.time('Part 1');
console.log('Part 1\nTrees:', goSleddin(slope));
console.timeEnd('Part 1');

// Part 2 - 0.349853515625 ms
let answer = 1;
const slopes = [
    [1, 1],
    [3, 1],
    [5, 1],
    [7, 1],
    [1, 2]
];

console.time('Part 2');
slopes.forEach(slope => {
    let trees = (goSleddin(slope));
    answer *= trees;
})
console.log('Part 2\nAnswer:', answer);
console.timeEnd('Part 2');