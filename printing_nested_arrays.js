const printItems = function(array) {
  array.forEach((item) => {
    if (Array.isArray(item)) {
      // Print out all it's items individually
      printItems(item);
    } else {
      console.log(item);
    }
  });
}

const array = ["A", [["B", ["C"]], [[["D"]], "E"]]];
printItems(array);


/* What the above function is doing
//////////////////////////////////////////
printItems(["A", ["B", "C"], "D", "E"]) {

  // Item is not an array, so just log it
  console.log("A")

  // Item is an array so call the function again
  printItems(["B", "C"]) {

    // Item is not an array, so just log it
    console.log("B")

    // Item is not an array, so just log it
    console.log("C")
  }

  // Item is not an array, so just log it
  console.log("D")

  // Item is not an array, so just log it
  console.log("E")
}*/