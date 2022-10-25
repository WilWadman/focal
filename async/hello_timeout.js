const sentence = "4311o th3r3 w0r1d";
let sentArray = sentence.split(" ");
for (let i = 0; i < sentArray.length; i++) {
  setTimeout(function() {
    console.log(sentArray[i]);
  }, i * 1000);
}


