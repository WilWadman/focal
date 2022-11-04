/*
*  We need to define a function called obfuscate => done
*  This function should take in 1 input in the form of a string
*  The output for the function will also be a string
*  We need to find a way to replace specifc characters with othe rspecific characters 
*  There shouldnt be any edge cases as we are having very specific rules
*  The solution should loop through the initial string
*  We are not allowed to use any built in functions */



const args = process.argv;

let initialPass = args.splice(2);
let stringPass = initialPass.toString();
let arrayPass = stringPass.split("");

const letterChanger = function(arrayPass){
for (let i = 0; i < arrayPass.length; i++) {
  if(arrayPass[i] === "a") {
    arrayPass[i] = "4"
}  if(arrayPass[i] === "e") {
  arrayPass[i] = "3"
 
 } if(arrayPass[i] === "o") {
  arrayPass[i] = "0"
 
 }  if(arrayPass[i] === "l") {
  arrayPass[i] = "1"
 } 
 let obfPass = arrayPass.join("");
 console.log(obfPass)
 
}
}




