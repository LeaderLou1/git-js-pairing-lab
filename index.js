//Code your solutions in this file
const fiveToOneHundred  = () =>{
    for ( let i = 5; i <= 100; i++) {
        console.log(i)
    }
}
console.log(fiveToOneHundred(200));
console.log(fiveToOneHundred(100));
console.log(fiveToOneHundred(3));
// fiveToOneHundred();

const multiplesOfThree = () =>{
    for ( let i = 3; i <= 99; i+=3) {
        console.log(i)
    }
}
console.log(multiplesOfThree(15));
console.log(multiplesOfThree(12));
console.log(multiplesOfThree(8));
//multiplesOfThree()

const multiplesOfThreeOrFive = () => {
    for ( let i = 1; i <= 100; i++) {
        if( i % 3 ===0 || i % 5 === 0){
        console.log(i)
    }
}
}
console.log(multiplesOfThreeOrFive(33));
console.log(multiplesOfThreeOrFive(23));
console.log(multiplesOfThreeOrFive(25));

const multiply = (num1, num2) =>{
    return num1 * num2
};
console.log(multiply(7,4))
console.log(multiply(6,3))
console.log(multiply(500,600))


const isNegative = (num) => {
        return num <0;
}
console.log(isNegative(-7));
console.log(isNegative(28));
console.log(isNegative(0));

const betweenTwentyAndFourty = (num) => {
    if (num >= 30 && num <= 50){
        return true
    } else { 
        return false
    }
}
console.log(betweenTwentyAndFourty(4));
console.log(betweenTwentyAndFourty(21));
console.log(betweenTwentyAndFourty(30));