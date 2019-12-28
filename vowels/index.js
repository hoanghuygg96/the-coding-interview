// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const match = str.match(/[aeuio]/gi);
  // g: khong stop khi match
  // i: match up case va low case

  return match ? match.length : 0;
}

module.exports = vowels;

// SOLUTION 1

// function vowels(str) {
//   let count = 0;
//   const checker = ["e", "a", "o", "u", "i"];

//   for (const char of str.toLowerCase()) {
//     if (checker.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// }
