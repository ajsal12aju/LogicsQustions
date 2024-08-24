// 1. sum of the natural number 

function sunOfNaturalNumbers(num){
    let sum= 0;
    for (let i = 0; i <= num; i++){
        sum =sum +1
    }
    // return sum
    // another methord
    return num*(num+1)/2;
    // behind the sence its happenig like this
    // Sum= 5 * (5+1) / 2 ;
        //  6*5 = 30 /2 = 15

    }
console.log(sunOfNaturalNumbers(5))
 
// Q2 sum of the digits of a number 1234 ans 1+2+3+4 like

function digitCalculation(num) {
let sum= 0;
while (num > 0) {
    sum += num%10;
    num = Math.floor(num/10)
}
return sum
}

console.log(digitCalculation(12));