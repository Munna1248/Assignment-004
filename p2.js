function onlyCharacter(str) {
    if (typeof str !== "string") {
        return "Invalid";
    }

    let noSpaces = str.replace(/ /g, "");
    let capLet = noSpaces.toUpperCase();

    return capLet;
}

// Test Cases
console.log(onlyCharacter(" h e llo wor  ld "));     
console.log(onlyCharacter("Cy  bar- At tac k "));    
console.log(onlyCharacter(" ha ck m e 1 @ru.c  n  "));        
console.log(onlyCharacter("Serv er : : Do wn"));                  
console.log(onlyCharacter(["hack", "me"]));                  
console.log(onlyCharacter(true));                  
