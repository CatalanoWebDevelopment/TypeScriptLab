/******************
 * 01 - Declaration
 ******************/

let username: string = "instructor";
let password: string = "LetMeIn1234";
let instructorId: number = 5;

let greeting = "Hello";

let newPassword: string;
let phoneNumber: number;
let email: string;
let socialSecurity: number;
let isMarried: boolean;

/*****************
 * 02 - Basic Types
 *******************/

let studentList: string[] = ["Parker", "Austin", "Aaron"]
let allScores: Array<number> = [100, 95, 70]
console.log("Student List:", studentList[0])

let dataFromThirdParty: any = '12345';
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);

//Void
function sayHelloToAll() : void {
    console.log("Hello everybody!")
}

//Undefined and Null
let undefinedVariable: undefined = undefined;
let nullVariable: null = null;

//Tuple
let usernameAndId : [string, number];
usernameAndId = ["ParkerCatalano", 1993]

//Enum allow us to give names to numeric values.
enum WeaponType { Sword, Saber, Spear }
let weapon: WeaponType = WeaponType.Sword

//Like arrays, enums start at 0, but that starting index can be assigned a different number:
enum CardType { Ace = 1, Two, Three, Four }
let cardType: string = CardType[2]
console.log(cardType)

/****************
 * 03 - Union Types
 ****************/
//# sourceMappingURL=2-types.js.map