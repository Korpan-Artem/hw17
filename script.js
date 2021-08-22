/*dz_function.txt*/
console.log('Task 1. Find square rectangle.');

function declatationSquare (firstSide,secondSide) {
    return firstSide * secondSide;
}

console.log(`Function Declaration: Square rectangle with sides 5 and 6: ${declatationSquare(5,6)}`);

let expressionSquare = function (firstSide, secondSide) {
    return firstSide * secondSide;
}

console.log(`Function Expression: Square rectangle with sides 4 and 5: ${declatationSquare(4,5)}`);

let arrowSquare = (firstSide, secondSide) => firstSide * secondSide; 

console.log(`Arrow Function: Square rectangle with sides 10 and 2: ${declatationSquare(10,2)}`);

console.log('Task 2. Calculate by Pythagorean theorem.');

function declarationPythagorean(firstSide, secondSide){
    return Math.sqrt(firstSide*firstSide + secondSide*secondSide);
}

console.log(`Function Declaration: Calculate by Pythagorean theorem  1 and 2: ${declarationPythagorean(1,2)}`);

let expressionPythagorean = function (firstSide,secondSide) {
    return Math.sqrt(firstSide*firstSide + secondSide*secondSide);
}

console.log(`Function Expression: Calculate by Pythagorean theorem  1 and 4: ${expressionPythagorean(1,4)}`);

let arrowPythagorean = (firstSide, secondSide) => Math.sqrt(firstSide*firstSide + secondSide*secondSide);


console.log(`Arrow function: Calculate by Pythagorean theorem  1 and 5: ${arrowPythagorean(1,5)}`);

console.log('Task 3. Find the discriminant.');

function declarationDiscriminant(a, b, c) {
    return (b * b) - (4 * a * c);
}

console.log(`Function Declaration: Calculate the dicscriminant  1, 2, 3: ${declarationDiscriminant(1,2,3)}`);

let expressionDiscriminant = function (a, b, c) {
    return (b * b) - (4 * a * c);
}

console.log(`Function Expression: Calculate the dicscriminant  2, 5, 2: ${expressionDiscriminant(2,5,2)}`);

let arrowDiscriminant = (a, b, c) => (b * b) - (4 * a * c);

console.log(`Arrow function: Calculate the dicscriminant  3, 10, 5: ${arrowDiscriminant(3,10,5)}`);

console.log('Task 4 and 5. Create even or odd numbers. In code choose 0 or 1.');

function declarationEvenOrOddNumbers (upTo, EvenOrOdd) {
    let arrayEvenNumbers = [];
    let arrayOddNumbers = [];
    for (let i = 0; i < upTo;i++) {
        if (i % 2 === 0) {
            arrayEvenNumbers.push(i) ;
        }else {
            arrayOddNumbers.push(i);
        }
    }
    if (EvenOrOdd === 0){
        return arrayEvenNumbers;
    }else if (EvenOrOdd === 1) {
        return arrayOddNumbers;
    }

}

console.log(`Function Declaration: Create even or odd numbers: ${declarationEvenOrOddNumbers(100,0)}`);

let expressionEvenOrOddNumbers = function (upTo, EvenOrOdd) {
    let arrayEvenNumbers = [];
    let arrayOddNumbers = [];
    for (let i = 0; i < upTo;i++) {
        if (i % 2 === 0) {
            arrayEvenNumbers.push(i) ;
        }else {
            arrayOddNumbers.push(i);
        }
    }
    if (EvenOrOdd === 0){
        return arrayEvenNumbers;
    }else if (EvenOrOdd === 1) {
        return arrayOddNumbers;
    }
}

console.log(`Function Expression: Create even or odd numbers: ${expressionEvenOrOddNumbers(100,1)}`);

let arrowEvenOrOddNumbers = (upTo, EvenOrOdd) => {
    let arrayEvenNumbers = [];
    let arrayOddNumbers = [];
    for (let i = 0; i < upTo;i++) {
        if (i % 2 === 0) {
            arrayEvenNumbers.push(i) ;
        }else {
            arrayOddNumbers.push(i);
        }
    }
    if (EvenOrOdd === 0){
        return arrayEvenNumbers;
    }else if (EvenOrOdd === 1) {
        return arrayOddNumbers;
    }
}

console.log(`Arrow function: Create even or odd numbers: ${arrowEvenOrOddNumbers(100,1)}`);

console.log('Task 6. Exponentiation.');

function declarationExponentiation (number, exp) {
    let numberExp = 1;
    for(let i = 0;i < exp; i++){    
        numberExp *= number;
    }
    return numberExp;
}

console.log(`Function Declaration: Exponentiation number 3 in 2 : ${declarationExponentiation(3,2)}`);

let expressionExponentiation = function (number, exp) {
    let numberExp = 1;
    for(let i = 0;i < exp; i++){    
        numberExp *= number;
    }
    return numberExp;
}

console.log(`Function Expression: Exponentiation number 2 in 3: ${expressionExponentiation(2,3)}`);

let arrowExponentiation = (number, exp) => {
    let numberExp = 1;
    for(let i = 0;i < exp; i++){    
        numberExp *= number;
    }
    return numberExp;
}

console.log(`Arrow function: Exponentiation number 4 in 2: ${arrowExponentiation(4,2)}`);

console.log('Task 7. Sort array asc or desc');

let arraySortNumber = [3,5,7,2,7,3,1];
console.log(arraySortNumber);

function declarationSortArray(array){
    let temp;
    return function (ascOrDesc = 'asc') {
        for(let i = 0; i < array.length; i++){
            for(let j = 0; j < array.length;j++){
                if (ascOrDesc === 'desc') {
                    if ((array[j] < array[j+1]) * 1) {
                        temp = array[j];
                        array[j] = array[j+1];
                        array[j+1] = temp;
                    }
                }else if (ascOrDesc === 'asc') {
                    if ((array[j] > array[j+1]) * 1) {
                        temp = array[j];
                        array[j] = array[j+1];
                        array[j+1] = temp;
                    }
                }
            }
        }
        return array;
    }
}
let dSortArray = declarationSortArray(arraySortNumber);
console.log(`Function Declaration: ${dSortArray()}`);

let expressionSortArray = function (array) {
    let temp;
    return function (ascOrDesc = 'asc') {
        for(let i = 0; i < array.length; i++){
            for(let j = 0; j < array.length;j++){
                if (ascOrDesc === 'desc') {
                    if ((array[j] < array[j+1]) * 1) {
                        temp = array[j];
                        array[j] = array[j+1];
                        array[j+1] = temp;
                    }
                }else if (ascOrDesc === 'asc') {
                    if ((array[j] > array[j+1]) * 1) {
                        temp = array[j];
                        array[j] = array[j+1];
                        array[j+1] = temp;
                    }
                }
            }
        }
        return array;
    }
}

arraySortNumber = [3,5,7,2,7,3,1,85,90];
let eSortArray = expressionSortArray (arraySortNumber);
console.log(`Function Expression: ${eSortArray('desc')}`);

let arrowSortArray = (array) => {
    let temp;
    return function (ascOrDesc = 'asc') {
        for(let i = 0; i < array.length; i++){
            for(let j = 0; j < array.length;j++){
                if (ascOrDesc === 'desc') {
                    if ((array[j] < array[j+1]) * 1) {
                        temp = array[j];
                        array[j] = array[j+1];
                        array[j+1] = temp;
                    }
                }else if (ascOrDesc === 'asc') {
                    if ((array[j] > array[j+1]) * 1) {
                        temp = array[j];
                        array[j] = array[j+1];
                        array[j+1] = temp;
                    }
                }
            }
        }
        return array;
    }
}

arraySortNumber = [3,5,7,2,7,3,1,85,90,186];
let aSortArray = arrowSortArray(arraySortNumber);
console.log(`Arrow function: ${aSortArray()}`);

console.log('Task 8. Find number in array.');

arrayNumberBySearch = [1,2,4,5,6,2,2,2];
console.log(arrayNumberBySearch);

function declarationSearchNumber (array, number) {
    let quantity = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === number) {
            quantity++;
        }
    }
    if (quantity === 0) {
        return `Number ${number} not found!`;
    }else {
        return `Number ${number} found ${quantity} times.`;
    }
}

console.log(`Function Declatation: Found 2: ${declarationSearchNumber(arrayNumberBySearch,2)}`);

let expressionSearchNumber = function (array, number) {
    let quantity = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === number) {
            quantity++;
        }
    }
    if (quantity === 0) {
        return `Number ${number} not found!`;
    }else {
        return `Number ${number} found ${quantity} times.`;
    }
}

console.log(`Function Expression: Found 7: ${expressionSearchNumber(arrayNumberBySearch,7)}`);

let arrowSearchNumber = (array, number) => {
    let quantity = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === number) {
            quantity++;
        }
    }
    if (quantity === 0) {
        return `Number ${number} not found!`;
    }else {
        return `Number ${number} found ${quantity} times.`;
    }
}

console.log(`Arrow function: Found 6: ${arrowSearchNumber(arrayNumberBySearch,6)}`);

/*дз.txt*/

console.log('Task 9. Array in reverse with word.');

let arrayWordForReverse = ['Alex', 'Vanya' , 'Tanya', 'Lena', 'Tolya'];
console.log(arrayWordForReverse);
function declarationArrayReverse(arrayForReverse) {
    let temp;
    for (let i = 0; i < arrayForReverse.length-1;i++){
        for(let j = 0; j < arrayForReverse.length-1-i;j++){
            temp = arrayForReverse[j];
            arrayForReverse[j] = arrayForReverse[j+1];
            arrayForReverse[j+1] = temp;
        }
    }
    return arrayForReverse;
}

console.log(`Function Declatation: ${declarationArrayReverse(arrayWordForReverse)}`);


let expressionArrayReverse = function (arrayForReverse) {
    let temp;
    for (let i = 0; i < arrayForReverse.length-1;i++){
        for(let j = 0; j < arrayForReverse.length-1-i;j++){
            temp = arrayForReverse[j];
            arrayForReverse[j] = arrayForReverse[j+1];
            arrayForReverse[j+1] = temp;
        }
    }
    return arrayForReverse;
}
console.log(`Function Expression: ${expressionArrayReverse(arrayWordForReverse)}`);


let arrowArrayReverse = (arrayForReverse) => {
    let temp;
    for (let i = 0; i < arrayForReverse.length-1;i++){
        for(let j = 0; j < arrayForReverse.length-1-i;j++){
            temp = arrayForReverse[j];
            arrayForReverse[j] = arrayForReverse[j+1];
            arrayForReverse[j+1] = temp;
        }
    }
    return arrayForReverse;
}

console.log(`Arrow Function: ${arrowArrayReverse(arrayWordForReverse)}`);



console.log('Task 10. Array in reverse.');

let arrayNumberForReverse = [44, 12, 11, 7, 1, 99, 43, 5, 69];

console.log(`Function Declatation: ${declarationArrayReverse(arrayNumberForReverse)}`);
console.log(`Function Expression: ${expressionArrayReverse(arrayNumberForReverse)}`);
console.log(`Arrow Function: ${arrowArrayReverse(arrayNumberForReverse)}`);

console.log('Task 10. String in reverse.');

let stringForReverse = 'Hi I am ALex';

function declarationStringReverse(stringForReverse) {
    let arrayLetters = stringForReverse.split('');
    let temp;
    for (let i = 0; i < arrayLetters.length-1;i++){
        for(let j = 0; j < arrayLetters.length-1-i;j++){
            temp = arrayLetters[j];
            arrayLetters[j] = arrayLetters[j+1];
            arrayLetters[j+1] = temp;
        }
    }
    stringForReverse = arrayLetters.join('');
    return stringForReverse;
}

console.log(`Function Declatation: ${declarationStringReverse(stringForReverse)}`);

let expressionStringReverse = function (stringForReverse) {
    let arrayLetters = stringForReverse.split('');
    let temp;
    for (let i = 0; i < arrayLetters.length-1;i++){
        for(let j = 0; j < arrayLetters.length-1-i;j++){
            temp = arrayLetters[j];
            arrayLetters[j] = arrayLetters[j+1];
            arrayLetters[j+1] = temp;
        }
    }
    stringForReverse = arrayLetters.join('');
    return stringForReverse;
}

console.log(`Function Expression: ${expressionStringReverse(stringForReverse)}`);

let arrowStringReverse = () => {
    let arrayLetters = stringForReverse.split('');
    let temp;
    for (let i = 0; i < arrayLetters.length-1;i++){
        for(let j = 0; j < arrayLetters.length-1-i;j++){
            temp = arrayLetters[j];
            arrayLetters[j] = arrayLetters[j+1];
            arrayLetters[j+1] = temp;
        }
    }
    stringForReverse = arrayLetters.join('');
    return stringForReverse;
}

console.log(`Arrow function: ${arrowStringReverse(stringForReverse)}`);

let stringTask11 = 'Hi I am ALex';
console.log(`Task 11. String to LowerCase: ${stringTask11.toLowerCase()}`);

console.log(`Task 12. String to UpperCase: ${stringTask11.toUpperCase()}`);

console.log(`Task 13. Array String to LowerCase.`);

let arrayTask13 = ['Alex', 'Vanya', 'Tanya', 'Lena', 'Tolya'];

function declarationArrayToLowerCase (array) {
    let i = 0;
    do{
        array[i] = array[i].toLowerCase();
        i++;
    }while(i < array.length);
    return array;
}

console.log(`Function Declatation: ${declarationArrayToLowerCase(arrayTask13)}`);

let expressionArrayToLowerCase = function (array) {
    for (let i = 0; i< array.length; i++) {
        array[i] = array[i].toLowerCase();
    }
    return array;
}

arrayTask13 = ['AlexXXXXXX', 'Vanya', 'TanyaFFFFF', 'Lena', 'Tolya'];

console.log(`Function Expression: ${expressionArrayToLowerCase(arrayTask13)}`);

let arrowArrayToLowerCase = (array) => {
    for (let i = 0; i< array.length; i++) {
        array[i] = array[i].toLowerCase();
    }
    return array;
}

arrayTask13 = ['AlexXXXXXX', 'VanyaRRRRRRR', 'TanyaFFFFF', 'Lena', 'TolyaFFFFF'];

console.log(`Arrow Function: ${arrowArrayToLowerCase(arrayTask13)}`);


console.log(`Task 14. Array String to UpperCase.`);

arrayTask13 = ['Alex', 'Vanya', 'Tanya', 'Lena', 'Tolya'];

function declarationArrayToUpperCase (array) {
    let arrayResult = [];
    for (let value of array) {
        arrayResult.push(value.toUpperCase());
    }
    return arrayResult;
}

console.log(`Function Declatation: ${declarationArrayToUpperCase(arrayTask13)}`);

let expressionArrayToUpperCase = function (array) {
    let arrayResult = [];
    for (let value of array) {
        arrayResult.push(value.toUpperCase());
    }
    return arrayResult;
}

arrayTask13 = ['AlexXXXXXX', 'Vanya', 'TanyaFFFFF', 'Lena', 'Tolya'];

console.log(`Function Expression: ${expressionArrayToUpperCase(arrayTask13)}`);

let arrowArrayToUpperCase = (array) => {
    let arrayResult = [];
    for (let value of array) {
        arrayResult.push(value.toUpperCase());
    }
    return arrayResult;
}

arrayTask13 = ['AlexXXXXXX', 'VanyaRRRRRRR', 'TanyaFFFFF', 'Lena', 'TolyaFFFFF'];

console.log(`Arrow Function: ${arrowArrayToUpperCase(arrayTask13)}`);

console.log(`Task 16. Sort array.`);
let arrayTask16 = [44, 12, 11, 7, 1, 99, 43, 5, 69,10];
let declarationArrowSortArray = (array) => {
    let temp;
    for(let i = 0; i < array.length-1;i++){
        for(let j = 0; j < array.length-1-i;j++){
            if (array[j] < array[j+1]) {
                temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
        
    }
    return array;
}

console.log(`Function Declatation: ${declarationArrowSortArray(arrayTask16)}`);

arrayTask16 = [44, 12, 11, 7, 11, 58, 43, 5, 69];

let expressionArrowSortArray = function (array) {
    let temp;
    for(let i = 0; i < array.length-1;i++){
        for(let j = 0; j < array.length-1-i;j++){
            if (array[j] < array[j+1]) {
                temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
        
    }
    return array;
}

console.log(`Function Expression: ${expressionArrowSortArray(arrayTask16)}`);

arrayTask16 = [44, 12, 11, 7, 11, 58, 43, 5, 69,45,65,13];

let arrowArrowSortArray = (array) => {
    let temp;
    for(let i = 0; i < array.length-1;i++){
        for(let j = 0; j < array.length-1-i;j++){
            if (array[j] < array[j+1]) {
                temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
        
    }
    return array;
}

console.log(`Arrow Function: ${arrowArrowSortArray(arrayTask16)}`);


console.log(`Task 17. Number reverse.`);

let numberReverse = 1234678;

function declarationReverseNumber(number) {
    let result = 0;
    while (number > 0) {
        result = result * 10 + number % 10;
        number = Math.floor(number / 10);
    }
    return result;
}

console.log(`Function Declatation: ${declarationReverseNumber(numberReverse)}`);

let expressionReverseNumber = function (number) {
    let result = 0;
    while (number > 0) {
        result = result * 10 + number % 10;
        number = Math.floor(number / 10);
    }
    return result;
}

numberReverse = 5689075;
console.log(`Function Expression: ${expressionReverseNumber(numberReverse)}`);

let arrowReverseNumber = (number) => {
    let result = 0;
    while (number > 0) {
        result = result * 10 + number % 10;
        number = Math.floor(number / 10);
    }
    return result;
}

numberReverse = 789567;

console.log(`Arrow Function: ${arrowReverseNumber(numberReverse)}`);
