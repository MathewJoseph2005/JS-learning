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