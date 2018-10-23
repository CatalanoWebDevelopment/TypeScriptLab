//# sourceMappingURL=3-functions.js.map

function demoFunction(sumNum) {
  return sumNum;
}

demoFunction(1);

function addNumbers(numOne: number, numTwo: number) {
    return numOne + numTwo
}

addNumbers(1, 2)

function sayHello(name: string) : string {
    return name
}

sayHello("Parker")

// Optionals allow for flexibility in our parameters. With optionals we can allow an argument to be left out, if needed. Optionals are declared using a question mark after them.

function addNumbersWithOptionals(numOne: number, numTwo: number, someString?: string) {
    console.log(someString)
    return numOne + numTwo
}

// OPTIONAL PARAMS MUST GO AFTER REQUIRED PARAMS

