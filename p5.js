function resultReport(marks) {
    // Check if input is an array
    if (!Array.isArray(marks)) {
        return "Invalid";
    }

    let total = 0;
    let passCount = 0;
    let failCount = 0;

    // Loop through each mark
    for (let i = 0; i < marks.length; i++) {
        let score = marks[i];
        total += score;

        if (score >= 40) {
            passCount++;
        } else {
            failCount++;
        }
    }

    // Avoid dividing by zero
    let average;
    if (marks.length === 0) {
        average = 0;
    } else {
        average = Math.round(total / marks.length);
    }

    // Return the result object
    return {
        finalScore: average,
        pass: passCount,
        fail: failCount
    };
}

// Test cases
console.log(resultReport([])); 

console.log(resultReport([98, 87, 67, 91, 92, 33, 87])); 

console.log(resultReport([99, 87, 67, 12, 87])); 

console.log(resultReport([99])); 

console.log(resultReport(100)); 

