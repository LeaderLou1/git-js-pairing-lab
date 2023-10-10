// Question 1.
const fiveToOneHundred  = () =>{
    for ( let i = 5; i <= 100; i++) {
        console.log(i);
    };
};
fiveToOneHundred();


// Question 2.
const multiplesOfThree = () =>{
    for ( let i = 3; i <= 99; i+=3) {
        console.log(i);
    };
};
multiplesOfThree();


// Question 3.
const multiplesOfThreeOrFive = () => {
    for ( let i = 1; i <= 100; i++) {
        if( i % 3 ===0 || i % 5 === 0){
        console.log(i);
    };
};
};
multiplesOfThreeOrFive();


// Question 4.
const untilNum = (num) => {
    for (let i = 1; i <= num; i++) {
        console.log(i);
    };
};
untilNum(5);


// Question 5.
const multiply = (num1, num2) =>{
    return num1 * num2
};
console.log(multiply(3, 4));


// Question 6.
const add = (num1, num2) => {
    return num1 === num2 ? 3 * (num1 + num2) : num1 + num2;
};
console.log(add(2, 4))
console.log(add(7, 7))


// Question 7.
const isNegative = (num) => {
        return num <0;
};
console.log(isNegative(-7));
console.log(isNegative(28));


// Question 8.
const triangleArea = (base, height) => 
(1 / 2) * base * height;

const area = triangleArea(6, 9)
console.log(area)

// or console.log(triangleArea(6, 9))

// Question 9.
const betweenTwentyAndFourty = (num) => {
    return num >= 20 && num <= 40
};
console.log(betweenTwentyAndFourty(4));
console.log(betweenTwentyAndFourty(44));


// Question 10.
const largest = (num1, num2, num3) => {
    return Math.max(num1, num2, num3);
  };
console.log(largest(6, 77, 190))

/* Or const bestAnswer = largest(6, 77, 190)
console.log(bestAnswer)*/