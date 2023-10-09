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
multiplesOfThreeOrFive();
