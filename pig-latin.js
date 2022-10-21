const originalWords = process.argv.slice(2);
const pigLatinWords = [];

for (let i = 0; i < originalWords.length; i++) {

  pigLatinWords.push(translateToPigLatin(originalWords[i]));
}



function translateToPigLatin(word) {
 
  return word.slice(1, word.length) + word[0] + "ay";
}
console.log(pigLatinWords.join(' '));