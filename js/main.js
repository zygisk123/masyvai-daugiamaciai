console.log("1 uzdavinys");

let numArray = [];
let numArrayLength = 10;
let arrayChildLength = 5;
let max = 25;
let min = 5;
for (let i = 0; i < numArrayLength; i++) { 
    numArray[i] = [];
    for (let a = 0; a < arrayChildLength; a++) {
        numArray[i][a] = Math.round(Math.random() * (max - min) + min);        
    }
}

console.log(numArray);

console.log("2 uzdavinys");
// a ir b-----------------------------------------
let more10 = 0;
let maxValue = 0;

for (let i = 0; i < numArrayLength; i++) { 
    for (let a = 0; a < numArray.length; a++) {
        if (numArray[i][a] > 10) {
            more10++;
        }
        if (numArray[i][a] > maxValue) {
            maxValue = numArray[i][a]
        }           
    }
}
// c-----------------------------------------
let sumIndex0 = 0;
let sumIndex1 = 0;
let sumIndex2 = 0;
let sumIndex3 = 0;
let sumIndex4 = 0;

for (let i = 0; i < numArrayLength; i++) {
    for (let a = 0; a < numArray[i].length; a++) {
        if(a == 0){
            sumIndex0 += numArray[i][a];
        }
        if(a == 1){
            sumIndex1 += numArray[i][a];
        }  
        if(a == 2){
            sumIndex2 += numArray[i][a];
        }  
        if(a == 3){
            sumIndex3 += numArray[i][a];
        }        
        if(a == 4){
            sumIndex4 += numArray[i][a];
        }     
    }
}

console.log("0 indeksu suma: " + sumIndex0);
console.log("1 indeksu suma: " + sumIndex1);
console.log("2 indeksu suma: " + sumIndex2);
console.log("3 indeksu suma: " + sumIndex3);
console.log("4 indeksu suma: " + sumIndex4);

// d-----------------------------------------
for (let i = 0; i < numArrayLength; i++) { 
    numArray[i] = [];
    for (let a = 0; a < arrayChildLength + 2; a++) {
        numArray[i][a] = Math.round(Math.random() * (max - min) + min);        
    }
}
console.log(numArray);

// e-----------------------------------------
let newArray = []
for (let i = 0; i < numArrayLength; i++) {
    let elementSum = 0;
    for (let a = 0; a < numArray[i].length; a++) {
        elementSum += numArray[i][a];
    }
    newArray[i] = elementSum;
}

console.log(newArray);

console.log("Masyve yra " + more10 + " sk. didesni uz 10");
console.log("Didziausia masyvo reiksme: " + maxValue);

console.log("3 uzdavinys");
let charArray = [];
let charArrayLength = 10;
let max2 = 20;
let min2 = 2;
var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var charactersLength = characters.length;
for (let i = 0; i < charArrayLength; i++) {
    charArray[i] = [];
    let newElementLength =  Math.round(Math.random() * (max2 - min2) + min2);
    for (let a = 0; a < newElementLength; a++) {
        charArray[i][a] = characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    charArray[i].sort();    
}

console.log(charArray);

console.log("4 uzdavinys");

charArray.sort(function(a, b){
    // ASC  -> a.length - b.length
    // DESC -> b.length - a.length
    return a.length - b.length;
  });

  console.log(charArray);
  
let newID = 0;
let hasK = false;
for (let i = 0; i < charArray.length; i++) {
    for (let a = 0; a <= charArray[i].length; a++) {
        if (charArray[i][a] == "K") {
            hasK = true;
        }
    }
    if (hasK && i != newID) {
        let temporarySpot = charArray[newID];
        charArray[newID] = charArray[i];
        charArray[i] = temporarySpot;
        hasK = false;
        newID++;
    }else{
        hasK = false;
    }
}

console.log(charArray);

console.log("5 uzdavinys");

console.log("6 uzdavinys");

console.log("7 uzdavinys");

console.log("8 uzdavinys");

console.log("9 uzdavinys");

console.log("10 uzdavinys");

console.log("11 uzdavinys");
