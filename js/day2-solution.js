const validatePassword = (entry) => {
    let key = entry.split(":")[0].trim();
    let value = entry.split(":")[1].trim();
    let range = key.split(' ')[0];
    let low = range.split('-')[0];
    let high = range.split('-')[1];
    let required = key.split(' ')[1];
    let count = 0;

    // RegEx fails if the letter does not occur at all
    try {
        count = value.match(new RegExp(required, "g")).length;
    }
    catch (e) {
        console.log("Rrequired letter not found");
    }

    // If its within the range, its valid, if not, invalid
    if (count >= low && count <= high) {
        return true;
    }
    else {
        return false;
    }
}

const validatePasswordNew = (entry) => {
    let key = entry.split(":")[0].trim();
    let value = Array.from(entry.split(":")[1].trim());
    let range = key.split(' ')[0];
    let pos1 = range.split('-')[0];
    let pos2 = range.split('-')[1];
    let required = key.split(' ')[1];

    if (value[pos1 - 1] == required && value[pos2 - 1] == required) {
        return false;
    }
    else if (value[pos1 - 1] == required || value[pos2 - 1] == required) {
        return true;
    }
    else {
        return false;
    }
}

let valid = 0;
let invalid = 0;

// Test part 1
// passwords.forEach(entry => {
//     if (validatePassword(entry)) {
//         valid++;
//         console.clear();
//         console.log('Valid:', valid, '\nInvalid:', invalid);
//     }
//     else {
//         invalid++;
//         console.clear();
//         console.log('Valid:', valid, '\nInvalid:', invalid);
//     }
// });

// Test part 2
passwords.forEach(entry => {
    if (validatePasswordNew(entry)) {
        valid++;
        console.clear();
        console.log('Valid:', valid, '\nInvalid:', invalid);
    }
    else {
        invalid++;
        console.clear();
        console.log('Valid:', valid, '\nInvalid:', invalid);
    }
});