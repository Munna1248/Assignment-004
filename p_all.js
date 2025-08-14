// Problem-01: Train TT's Fine Calculator

function totalFine(fare) {
    if (typeof fare !== "number") {
        return "Invalid";
    }

    if (fare <= 0) {
        return "Invalid";
    }

    let surcharge = fare * 0.2;
    let serviceCharge = 30;
    let total = fare + surcharge + serviceCharge;

    return total;
}

// Test Cases
console.log(totalFine(200));     
console.log(totalFine(0));     
console.log(totalFine(50));     
console.log(totalFine(552));    
console.log(totalFine(-35));   
console.log(totalFine("65"));
console.log(totalFine("Gorib tai ticket katinai")); 



function onlyCharacter(str) {
    if (typeof str !== "string") {
        return "Invalid";
    }

    let noSpaces = str.replace(/ /g, "");
    let capitalLetters = noSpaces.toUpperCase();

    return capitalLetters;
}

// Test Cases
console.log(onlyCharacter(" h e llo wor  ld "));     
console.log(onlyCharacter("Cy  bar- At tac k "));    
console.log(onlyCharacter(" ha ck m e 1 @ru.c  n  "));        
console.log(onlyCharacter("Serv er : : Do wn"));                  
console.log(onlyCharacter(["hack", "me"]));                  
console.log(onlyCharacter(true));                  




function bestTeam(player1, player2) {
    if (typeof player1 !== "object" || typeof player2 !== "object") {
        return "Invalid";
    }

    let team1Total = player1.foul + player1.cardY + player1.cardR;
    let team2Total = player2.foul + player2.cardY + player2.cardR;

    if (team1Total < team2Total) {
        return player1.name;
    } else if (team2Total < team1Total) {
        return player2.name;
    } else {
        return "Tie";
    }
}

// Test cases
console.log(bestTeam(
    { name: "Brazil", foul: 5, cardY: 1, cardR: 0 },
    { name: "Argentina", foul: 7, cardY: 0, cardR: 0 }
)); 

console.log(bestTeam(
    { name: "Germany", foul: 12, cardY: 0, cardR: 0 },
    { name: "Sweden", foul: 7, cardY: 4, cardR: 1 }
)); 

console.log(bestTeam(
    { name: "Germany", foul: 10, cardY: 1, cardR: 1 },
    { name: "France", foul: 10, cardY: 2, cardR: 1 }
)); 

console.log(bestTeam(
    { name: "Germany", foul: 10, cardY: 1, cardR: 1 },
    "France"
)); 





function isSame(arr1, arr2) {
    // Check if both inputs are arrays
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return "Invalid";
    }

    // Check if lengths are equal
    if (arr1.length !== arr2.length) {
        return false;
    }

    // Check each value at every index
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    // If all values match
    return true;
}

// Test cases
console.log(isSame([1, 2, 3], [1, 2, 3])); // true
console.log(isSame([34, 5, 7, 9], [34, 5, 7])); // false
console.log(isSame([1, undefined, 3], [1, null, 3])); // false
console.log(isSame([1, 4, 5], [1, 4, 5])); // true
console.log(isSame([1, "4", 4], [1, 4, 4])); // false
console.log(isSame([2, 5, 6], 256)); // Invalid
console.log(isSame({ data: [2, 5, 6] }, [2, 5, 6])); // Invalid




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

