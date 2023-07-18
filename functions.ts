//functions.ts Es el archivo que contiene el primer reto llamado Create and use functions in TypeScript

//Define a function named calculateSum that takes two parameters, num1 and num2, both of type number. The function should calculate and return the sum of the two numbers.
function calculateSum (num1: number, num2: number) : number {
    return num1 + num2;
}

//Define a function named isEven that takes a parameter num of type number. The function should return true if the number is even, and false otherwise.
function isEven (num: number) : boolean {
    return num % 2 == 0;
}

//Define a function named reverseString that takes a parameter str of type string. The function should return the reverse of the input string.
function reverseString (str: string) : string {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str.charAt(i);
    }
    return reversedStr;
}

//Define an arrow function named calculateAverage that takes an array of numbers nums as a parameter. The function should calculate and return the average of the numbers in the array.
const calculateAverage = (nums: number[]): number => {
    //Evitamos usar un array vacio
    if (nums.length === 0) {
        return 0;
    }
    const sum = nums.reduce((total, num) => total + num, 0);
    return sum / nums.length;
};

//Define a function type named MathOperation that represents a function that takes two parameters of type number and returns a number. Use this type to declare a variable named multiply with the value of an arrow function that multiplies two numbers.
type MathOperation = (num1: number, num2: number) => number;

const multiply: MathOperation = (num1, num2) => {
  return num1 * num2;
};

//Testing de funciones
//Suma
console.log("Sumas:");
console.log(calculateSum(5, 3));
console.log(calculateSum(10, 20));
console.log(calculateSum(0, 0));

//Par o impar
console.log("¿Es par?:");
console.log(isEven(4));
console.log(isEven(7));
console.log(isEven(30));

//Reversa de texto
console.log("Textos en Reversa:");
console.log(reverseString("Cristhian"));
console.log(reverseString("TypeScript"));
console.log(reverseString("IronHack"));

//Promedio de matriz de numeros
console.log("Promedio de numeros:");
console.log(calculateAverage([1, 2, 3, 4, 5]));
console.log(calculateAverage([]));//La colocamos vacia para probar el if 
console.log(calculateAverage([10, 10, 10, 10, 10]));

//Multiplicaciones de 2 numeros para el formato Type
console.log("Multiplicaciones:");
console.log(multiply(5, 3));
console.log(multiply(10, 20));
console.log(multiply(0, 0));