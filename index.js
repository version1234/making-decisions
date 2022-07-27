console.log("Hello Class");
let speed = 25;
const name = "speed is"
console.log (name, speed);

speed = 500;
console.log (name, speed);

var faveSnack = "popcorn";
console.log (faveSnack);
faveSnack = "poptarts";
console.log (faveSnack);
faveDrink = "coffee";
console.log (faveDrink);
faveDrink = "soda";
console.log (faveDrink);
let food = "My favorate food is"
console.log (food,faveSnack,faveDrink);

const private = true;


let Netflix= 15;
console.log ("$",Netflix,"Netflix");
let Hulu= 7;
console.log ("$",Hulu, "Hulu");
let Disney = 5;
console.log ("$",Disney , "Disney+");
let YouTubePremium = 10;
console.log ("$",YouTubePremium,"YouTubePremium");
let Peacock = 10;
console.log ("$",Peacock,"Peacock");

let Total = (Netflix+Hulu+Disney+YouTubePremium+Peacock);
console.log ("Total subscription cost =",Total);

Netflix = Netflix -7;
Hulu = Hulu -7;
Peacock = Peacock -5;

console.log ("$",Netflix ,"Netflix");
console.log ("$",Hulu,"Hulu");
console.log ("$",Disney,"Disney+");
console.log ("$",YouTubePremium,"YouTubePremium");
console.log ("$",Peacock,"Peacock");
let NewTotal = (Netflix+Hulu+Disney+YouTubePremium+Peacock);

console.log ("NewTotal subscription cost =",NewTotal);
console.log ("Total subscription cost =",Total);

let savings = ((Total  - NewTotal)* 100)/ Total;
console.log (savings)