var theSonnet = document.getElementById("sonnet").innerHTML;
console.log(theSonnet);

// Find and output the starting position of the word "orphans"
console.log("orphans", theSonnet.indexOf("orphans"));

// Output the number of characters in the sonnet
var numOfChars = theSonnet.length;
console.log("numOfChars", numOfChars);

// Replace the first occurrence of the string "winter" with "yuletide"
var newSonnet = theSonnet.replace("winter", "yuletide");
console.log(newSonnet);

// Replace all occurances of the string "the" with "a large"
var newerSonnet = newSonnet.split(" the ").join(" a large ").split(" The ").join(" A large ");
console.log(newerSonnet);

// Set the content of the sonnet div with the new string
var Sonnet = document.getElementById("sonnet").innerHTML = newerSonnet;