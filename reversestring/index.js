// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split("").reduce((res, cha) => cha + res, "");
}

module.exports = reverse;

// SOLUTION 1
// function reverse(str) {
//   return str
//     .split("")
//     .reverse()
//     .join("");
// }

// SOLUTION 2
// function reverse(str) {
//   let reversed = "";
//   for (const character of str) {
//     reversed = character + reversed;
//   }
//   return reversed;
// }

// SOLUTION 3
// function reverse(str) {
//   return str.split("").reduce((res, cha) => cha + res, "");
// }