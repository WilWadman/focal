// Title case means we need to capitilize every word in a string

// Our function is going to accept a string
// we need to break up that string into an array of words
// we will need to loop through thearray
// we will need a way to identify the first character of each word
// we will need to find a function that will turn lowercase letters into upper
// we will need to setup an edge case in case the first character of the word is a symbol or letter
// an empty string should also return an empty string
// if the string is a single letter it will also need to be turned into uppercase
// Our function will also output a string







const titleCase = function(text) {
  if(!text.length)
  return "";
  let newArr = text.split(" ");
 
    for (let i = 0; i < newArr.length; i++) {
      newArr[i] = newArr[i][0].toUpperCase() + newArr[i].substr(1).toLowerCase();

    } console.log(newArr.join(' '));
    return newArr.join(" ");
  }
    
  








titleCase("this is an example"); //should return "This Is An Example"
titleCase("test"); //should return "Test"
titleCase("i r cool"); //should return "I R Cool"
titleCase("WHAT HAPPENS HERE"); //should return "What Happens Here"
titleCase(""); //should return ""
titleCase("A"); //should return "A"