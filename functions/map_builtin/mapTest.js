const lighthouses = ["Gibraltar Point", "Peggy's Point", "Cove Island", "Discovery Island", "Cape Scott", "Point Clark", "Kincardine"];

// write code here to use map
const numberOfCharacters = lighthouses.map(function(lighthouses){
  return lighthouses.length
})
console.log(numberOfCharacters)
// It should output: [ 15, 13, 11, 16, 10, 11, 10 ]