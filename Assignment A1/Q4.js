//* Find 1st Digit of a 4 digit number*//

let num=4567
let firstDigit=num
while(firstDigit >=10){
    firstDigit =parseInt(firstDigit/10)
}
console.log(firstDigit)