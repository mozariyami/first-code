let firstName = "Moza";
let lastName = "Alriyami";
console.log(firstName + " " + lastName);

const Name = "Aisha";
console.log(Name);

let name = "Ahmed"; //string
let age = 27; //number
let isBolean = true;
let isFalse = false;
let float = 0.2989;
let schoolName = undefined;
let townName = null;


// object

let person = {
    name: "Moza",
    age: 38,
}
console.log(person);
console.log(person.name);
console.log(person.age);

let personName = "Moza";
let getpersonName = person["name"];
console.log(getpersonName);

//Arrays
let people = ['Ahmed', 'Amal'];
people[2] = 99;
people[0] = 88;
console.log(people.length);
console.log(people);

function call(num1, num2) {
    console.log(num1 + num2);
}
call(1, 9);

//return
function getSum(num1, num2) {
    return num1 * num2;
}
console.log(getSum(2, 6));

//Arithmetic Operators
let x = 20;
let y = 10;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x ** y);

//Increase & Decrease

console.log(++x);

console.log(x++);
console.log(x);

console.log(--x);

console.log(x--);
console.log(x);

// Assignment Operators
let s = 30;
let a = 15;

//s= s+5
s += 5

console.log(s);

//Comparison Operators
let m = 20;
let d = 10;

console.log(m > 0);
console.log(m < 0);
console.log(m === 20);
console.log(x !== 0);

//Equality Operators
console.log(1 === 1);
console.log('1' === 1);
console.log('1' === '1');

console.log('--------');

console.log(1 == 1);
console.log('1' == 1);
console.log(x = 1);

//Ternary Operators

//iphone 2000
//samsung 1500

let mobile = 200
let phone = mobile > 2000 ? 'iphone' : 'samsung';

console.log(phone);

//Logical Operators

//and (&&)
// OR (||)
// Not !

console.log(true && true);
console.log(false && true);
console.log(false && false);
console.log('-----');
console.log(true || true);
console.log(false || true);
console.log(false || false);
console.log('-----');
let f = undefined;
let r = false;
let z = 1;
let w = f || r || z;
console.log(w);

//BitWise Operators
// 0- 0000000
// 1- 0000001
// 2- 0000010
// 3- 0000011

console.log(1 | 2);
console.log(2 | 2);
console.log(1 | 1);

console.log(1 & 2);
console.log(1 & 2);

///////////
// if this person ali get hello ali
// if ahmed get hello ahmed
// if ayman get hello ayman

let name1 = 'Malak';

if (name1 === 'Ali') {
    console.log('hello Ali');
} else if (name1 === 'Malak') {
    console.log('hello Malak');
} else if (name1 === 'Salim') {
    console.log('hello Salim');
} else {
    console.log('no name');
}


////////////

let name2 = 'Abdullah';

switch (name2) {
    case 'Moza':
        console.log('hello Moza');
        break;
    case 'Said':
        console.log('hello Said');
        break;
    case 'Nadira':
        console.log('hello Nadira');
        break;
    default:
        console.log(' no name2');
        break;
}

////////

// for loop

for (let i = 0; i<5; i++) {
    console.log('hello'+ i);
}

for (let e=10; e>0; e--){
    console.log('Moza'+e);
}

///While Loop

let n= 10;
while (n>=0) {
    console.log('Salam'+ n);
n--;
    
}
let b= 0;
while (b<10) {
    console.log('hello'+ b);
b++;
    
}