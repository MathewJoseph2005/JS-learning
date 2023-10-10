const name = "Mathew";
const repocount = 50

// console.log(name + repocount + " value"); don't use this
/* The above method is called contactination  we should avoid using it in the modern times instead use String Interpolation

console.log(`My name is ${name} and i have ${repocount} repo in github`);
use `` and ${}.
*/
// we can get valuses of a string using indexes
console.log(name[0]);
// we can make everything of a string to uppercase using toUpperCase()
console.log(name.toUpperCase());
// we can get the charector at a specific index using charAt
console.log(name.charAt(3));
// we can find what is the index of the charator using indexOf(<char to find>);
console.log(name.indexOf("M"));
/* we can slice strings using two methods  


<variableName>.slice(<startingIindex>, <stopingIndex>); 

<variableName>.substring(0, 4);

(here the stoping index will not be printed)*/
console.log(name.substring(0,3));
console.log(name.slice(-1));
// we can remove white spaces on both sides of the string using string method
const newName = "   mathew  ";
console.log(newName.trim());
// we could replace charactors in string with replace method
console.log(name.replace("ew","apen"));
// we could slip a string using the string method
console.log();