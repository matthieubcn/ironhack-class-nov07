console.log('Hello World');

// Iteration 1: Names and Input

let hacker1 = "steve jobs"
console.log(`The driver name is : ${hacker1}`);

let hacker2 = "Vin diesel"
console.log(`The navigator's name is : ${hacker2}`)

//Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker1.length < hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker2.length} characters.`);
}    
else if (hacker1.length === hacker2.length) {
    console.log (`Wow, you both have equally long names,${hacker1.length} characters!`)
}

//Iteration 3: Loops

let newDriverName = '';
let driver = hacker1;

for (let i = 0; i < driver.length; i++) {
    newDriverName += driver[i].toUpperCase() + " ";
    }
console.log(newDriverName);

let newNavigatorName = ''


for (let i = hacker2.length - 1; i >0; i--) {
    newNavigatorName += hacker2[i];
}

console.log(newNavigatorName);

let classValue = hacker1.localeCompare(hacker2);
console.log(classValue);

if (classValue === -1) {
    console.log (`The driver's name goes first.
    `)
}
else if (classValue === 1)
    console.log(`Yo, the navigator goes first definitely.
        `)
    
else if (classValue == 0) {
    console.log(`What?! You both have the same name?`);
}


