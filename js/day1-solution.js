console.time('Advent of Code Day 1');

let start = 0;
let goal = 2020;

a = { id: 0, value: parseInt(expenseReport[0])};
b = { id: 0, value: parseInt(expenseReport[0])};
c = { id: 0, value: parseInt(expenseReport[0])};

console.log('Starting up...');

while (start != goal) {
    start = a.value + b.value + c.value;

    // Update values and check again
    if (start != goal) {
        if (c.id < expenseReport.length - 1) {
            // Increment C
            c.id++;
            c.value = parseInt(expenseReport[c.id]);
        }
        else if (c.id == expenseReport.length - 1 && b.id < expenseReport.length - 1) {
            // Reset C
            c.id = 0;
            c.value = parseInt(expenseReport[c.id]);
            // Increment B
            b.id++;
            b.value = parseInt(expenseReport[b.id]);
            // console.log('Incremented B', b.id, b.value);
        }
        else if (b.id == expenseReport.length - 1 && c.id == expenseReport.length - 1 && a.id < expenseReport.length - 1) {
            // Reset B & C
            b.id = 0;
            b.value = parseInt(expenseReport[b.id]);
            c.id = 0;
            c.value = parseInt(expenseReport[c.id]);
            // Increment A
            a.id++;
            a.value = parseInt(expenseReport[a.id]);
        }
    }
    else {
        console.log('A) index:', a.id, 'value:', a.value);
        console.log('B) index:', b.id, 'value:', b.value);
        console.log('C) index:', c.id, 'value:', c.value);
        console.log('Answers:', a.value, b.value, c.value, '=', a.value + b.value + c.value);
        console.log("Final answer = ", a.value * b.value * c.value);
        console.timeEnd('Advent of Code Day 1');
    }
}