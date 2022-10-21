/*In this exercise, you will write a function that
identifies whether a supposedly chocolate chip cookie
also has raisins in it. Your function, raisinAlarm,
will receive a cookie which is an array of chocolate chips
("🍫"). However, there is a chance that there might be a
pesky raisin in the array as well ("🍇").
Your function must search through the array to see
whether or not a raisin is present.
If your function detects a raisin, it should return
"Raisin alert!". If no raisin is present, your
function should return "All good!".*/



const raisinAlarm = function(cookie) {
  // Put your solution here
  if (!cookie.includes("🍇")) {
    console.log("All good!");
  } else {
    console.log("Raisin alert!");

  }
};


console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));