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
    // Sum= 5 * (5+1) / 2 ;vdsfthdr
        //  6*5 = 30 /2 = 15f
        // asdded updated datas

    }
console.log(sunOfNaturalNumbers(5))
console.log(sunOfNaturalNumbers(5))

// Q2 sum of the digits of a number 1234654 ans ccsasa1+2545+3+4 like  UPDAE

 function digitCalculation(num) {
let sum= 0;
while (num > 0) {
    sum += num%10;
    num = Math.floor(num/10)
}
return sum
}

console.log(digitCalculation(12));


function exampleFunction(a,b) {
   a+b
}

const result = exampleFunction(5,5); 
console.log(exampleFunction(5, 5), "===dafgfcfgdfghgjhdddddfhhfftas=");

function calculateTotalCost(subtotal, taxRate, shippingCost) {
  const taxAmount = subtotal * taxRate; 
  const totalCost = subtotal + taxAmount + shippingCost;
  return totalCost;
}

const subtotal = 100;
const taxRate = 0.08;
const shippingCost = 10;
const totalCost = calculateTotalCost(subtotal, taxRate, shippingCost);
console.log(`The total cost is: $${totalCost.toFixed(2)}`);
