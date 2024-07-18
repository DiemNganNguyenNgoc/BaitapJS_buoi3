//Bai 3
let n ="ABCDCBA"
let char = n.split("");
let string = char.reverse();
let newstring = string.join("");
console.log(n);
console.log(newstring);

if(n== newstring)
{
    console.log(true);
}
else console.log(false);