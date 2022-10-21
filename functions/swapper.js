const swapper = function(key1, object1, key2, object2) {
  console.log("Swap!");

  // Put your solution here
  // in loop needed to go through the obects
  // next we need to swap key1[i] into key2[i] and key2[i] into key1[i]
  for (let key in object1) {
    if (key === key1) {
      let temp = object2[key2];
      object2[key2] = object1[key];
      object1[key1] = temp;
    }
    // for ( let key in object2) {
    //  if (key === key2) {
    //  object1[key1] = object2[key2];
  }




console.log("object1: ", object1);
console.log("object2: ", object2);
};


swapper("a", { a: 1, b: 2, c: 3 }, "c", { a: 4, b: 3, c: 5 });
swapper("b", { a: 8, b: 7, c: 6 }, "d", { a: 5, b: 1, c: 2, d: 12 });
swapper("c", { a: 1, b: 3, c: 3, d: 7 }, "c", { a: 4, b: 0, c: 5 });
// Swap!
// object1: { a: 5 , b: 2, c: 3 }
// object2: { a: 4, b: 3, c: 1 }
// Swap!
// object1: { a: 8 , b: 12, c: 6 }
// object2: { a: 5, b: 1, c: 2, d: 7}
// Swap!
// object1: { a: 1 , b: 3, c: 5, d: 7 }
// object2: { a: 4, b: 0, c: 3 }
