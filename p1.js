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

// Test Cases
console.log(totalFine(200));     
console.log(totalFine(0));     
console.log(totalFine(50));     
console.log(totalFine(552));    
console.log(totalFine(-35));   
console.log(totalFine("65"));
console.log(totalFine("Gorib tai ticket katinai")); 
