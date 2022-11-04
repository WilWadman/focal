const input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
const result = input.map(findKey);

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);






const results1 = map(words, word => word[0]);
const results2 = map(animals, animal => animal[0]);
const results4 = map(fish, guppy => guppy[0]);
console.log(results1);
const findKey = function(object, callback) {


  for (let key in object) {
    if (callback(object[key]) === true) {
      return key;
    }
  }
};




const resultsx = findKey(object1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, (x => x.stars === 2));