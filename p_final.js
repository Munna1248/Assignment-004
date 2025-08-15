function totalFine(fare) {
    if (typeof fare !== "number") {
        return "Invalid";
    }

    if (fare <= 0) {
        return "Invalid";
    }

    let surcharge = fare * 0.2;
    let serviceCharge = 30;
    let fine = fare + surcharge + serviceCharge;

    return fine;
}

function onlyCharacter(str) {
    if (typeof str !== "string") {
        return "Invalid";
    }

    let noSpaces = str.replace(/ /g, "");
    let capLet = noSpaces.toUpperCase();

    return capLet;
}

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

function isSame(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return "Invalid";
    }

    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}

function resultReport(marks) {
    if (!Array.isArray(marks)) {
        return "Invalid";
    }

    let total = 0;
    let passCount = 0;
    let failCount = 0;

    for (let i = 0; i < marks.length; i++) {
        let score = marks[i];
        total += score;

        if (score >= 40) {
            passCount++;
        } else {
            failCount++;
        }
    }

    let average;
    if (marks.length === 0) {
        average = 0;
    } else {
        average = Math.round(total / marks.length);
    }

    return {
        finalScore: average,
        pass: passCount,
        fail: failCount
    };
}
