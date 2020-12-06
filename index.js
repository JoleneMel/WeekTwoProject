var a = true && false
console.log(a);

var b = true || false
console.log(b);

var c = false && false
console.log(c);

var d = true && (false || true)
console.log(d);

var e = false || (true && false)
console.log(e);

var f = false || 1 < 5
console.log(f);

var g = 5 >= 4 && 1 > 3
console.log(g);

var h = 10 < 4 || 1 > 4
console.log(h);
var i = 12 >= 2 && 1 < 24
console.log(i);

var j = "Hello".charAt(0) == "h"
console.log(j);


var isHotOutside = true 
var isWeekDay = false 
var hasMoneyInPocket = true 

var costOfMilk = 2.00
var moneyInWallet = 50.00 
var thirstLevel = 3 

if (isHotOutside == true && hasMoneyInPocket == true) {
    var shouldBuyIceCream = true 
}

if (shouldBuyIceCream) {
    console.log('I will buy ice cream');
}else{
    console.log('No Ice cream today, its too cold for icecream!');
}

var willGoSwimming 

if (isHotOutside == true && isWeekDay == false) {
    var willGoSwimming = true 
}

if (willGoSwimming) {
    console.log('Time to swim!!!');
}else{
    console.log('No swimming today, its a week day and its too cold');
}

if (isHotOutside == true && moneyInWallet == true && isWeekDay == false) {
    var isAGoodDay = true 
}

if (isAGoodDay) {
    console.log('Its a good day');
}else{
    console.log('No, its not a good day I am broke, and I have work.');
}


if (isHotOutside ==  true && thirstLevel >= 3 && moneyInWallet >= costOfMilk * 2) {
    var willBuyMilk = true 
}

if (willBuyMilk) {
    console.log('I will buy milk');
}else{
    console.log('I will not buy milk');
}