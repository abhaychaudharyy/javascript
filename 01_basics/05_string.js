const name = "abhay"
const repoCount = 10
//console.log(name + repoCount + "value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("cricket")

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log((gameName.charAt(2)));
console.log(gameName.indexOf('c'));

const newString = gameName.substring(0, 3)

console.log(newString);

const anotherString = gameName.slice(-6,3)
console.log(anotherString);


const newStringOne = "     abhay   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://abhay.com/abhay%22chaudhary"
console.log(url.replace('%22', '-'));

console.log(url.includes('ggaga'));


console.log(gameName.split('i'));
console.log(gameName.big());
console.log(gameName.blink());

console.log(gameName.bold());
