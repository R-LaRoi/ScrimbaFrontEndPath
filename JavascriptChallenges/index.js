// Challenges 1 - 9 -------->

document.querySelector("h1").innerText = "lets do this!";

const sentence = " This is a challenge";

function panic(string) {
  return string.split(" ").join("✨").toUpperCase() + "!";
}

console.log(panic("Let's go to the movies"));

function whisper(sentence) {
  if (sentence.endsWith("!")) {
    return sentence.slice(0, sentence.length - 1).toLowerCase();
  }
  return "shh..." + sentence.toLowerCase();
}

console.log(whisper(" Let's make noise"));
console.log(whisper("this is not a whisper!"));

function altCaps(sarcasm) {
  let newSoap = "";
  let soap = sarcasm.split("");
  for (let i = 0; i < soap.length; i++) {
    if (i % 2 === 0) {
      newSoap += soap[i].toUpperCase();
    } else {
      newSoap += soap[i];
    }
  }
  return newSoap;
}

console.log(altCaps("in the present now and always"));

function capitalize(words) {
  return words[0].toUpperCase() + words.slice(1);
}

console.log(capitalize("noword"));

function toTitleCase(word) {
  const newSentence = word.split(" ");
  return newSentence.map((sentence) => capitalize(sentence)).join(" ");
}

console.log(toTitleCase("what's that?"));

// Challenges 9 - 20 ------>

function awardBonuses(employeeNum) {
  console.log(employeeNum);
  // loop through the ID numbers
  for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(` ${i} wins Jackpot`);
    } else if (i % 3 === 0 || i % 5 === 0) {
      console.log("Vacation");
    } else {
      console.log("🍉");
    }
  }
}

awardBonuses();

// ---------------->

const emojis = {
  smile: "😊",
  angry: "😠",
  party: "🎉",
  heart: "💜",
  cat: "🐱",
  dog: "🐕",
};

function emojify(word) {
  if (!word.startsWith(":") && !word.endsWith(":")) return word;

  const slice = word.slice(1, -1);

  if (emojis[slice]) {
    return emojis[slice];
  } else {
    return slice;
  }
}

console.log(emojify(":miami:"));
//  ---------------------------------------------
function isAnagram(str1, str2) {
  const newString1 = str1.split("").sort().join(" ");
  const newString2 = str1.split("").sort().join(" ");

  if (str1.length !== str2.length) {
    return false;
  } else if (newString1 === newString2) {
    return true;
  }
}

console.log(isAnagram("allergys", "gallery"));

// ----------------------REVERSE STRING------

const title = ":htraE no od ot ffutS";
const messages = [
  "maerc eci yrT",
  "rewoT leffiE tisiV",
  "noom eht ot snamuh etacoleR",
  "egrahc ni stac tuP",
];

function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString(title));

function reverseStringsInArray(arr) {
  return arr.map((item) => reverseString(item));
}

//  --- Manual ---

function reverseString(revWord) {
  let newWord = "";
  for (let i = revWord.length - 1; i >= 0; i--) {
    newWord += revWord[i];
  }
  console.log(newWord);
}

console.log(reverseString("noops"));
// ----------- Palindromes ----------

function isPalidrome(palWord) {
  //  if character at the beginning is the same as charater at the end  then log true
  if (palWord.split("").reverse().join("") === palWord) {
    return true;
  } else return false;
}

console.log(isPalidrome("civic"));

// ------------ Duplicates
const password = "9338dsabbbadjdjdj2sdfdfdf282ff8fdsd888ss8cfgfg332q23";
function removeDuplicates(character) {
  let duplicateRemoved = "";

  for (let i = 0; i < character.length; i++) {
    if (!duplicateRemoved.includes(character[i])) {
      duplicateRemoved += character[i];
      console.log(character[i]);
    }
  }
  console.log(duplicateRemoved);
}

// convert password into single string
// check the value

removeDuplicates(password);

//  - -----------COUNT CHARACTER VALUE IN STRING
function countCharacters(name) {
  let nameCount = {};
  let characters = name.toLowerCase().split(" ").join("");
  for (let i = 0; i < characters.length; i++) {
    if (!nameCount[characters[i]]) {
      nameCount[characters[i]] = 1;
    } else {
      nameCount[characters[i]] += 1;
    }
  }
  console.log(nameCount);
}

countCharacters("Rachel Stroy");

// ----------Remove Duplicates from array--------

const eggScrambleRecipe = [
  "🥓 bacon",
  "🥓 bacon",
  "🍳 eggs",
  "🫑 green peppers",
  "🧀 cheese",
  "🌶️ hot sauce",
  "🥓 bacon",
  "🥦 broccoli",
  "🧀 cheese",
  "🥦 broccoli",
  "🌶️ hot sauce",
];

function noDuplicates(array) {
  let newItems = [];

  array.forEach((item) => {
    if (!newItems.includes(item)) {
      newItems.push(item);
    }
  });
  console.log(newItems);
}

noDuplicates(eggScrambleRecipe);
// ----- alternative solution using new Set()

function removeDupes(arr) {
  console.log([...new Set(arr)]);
}

removeDupes([10, 10, 10, 20, 45, 99, 99, 99, 1, 1, 1]);

// Flatten Array

// Example input: [1, [4,5], [4,7,6,4], 3, 5]
// Example output: [1, 4, 5, 4, 7, 6, 4, 3, 5]

const kittyScores = [
  [39, 99, 76],
  89,
  98,
  [87, 56, 90],
  [96, 95],
  40,
  78,
  50,
  [63],
];

function flattenArray(array) {
  const newArray = [];

  array.forEach((item) => {
    if (Array.isArray(item)) {
      item.map((score) => {
        newArray.push(score);
      });
    } else {
      newArray.push(item);
    }
    console.log(newArray);
  });

  // console.log(array.flat());
}
flattenArray(kittyScores);

// Count the numbers in an array

const studentCount = [50, 53, 61, 67, 60, 70, 78, 80, 80, 81, 90, 110];

function sumArray(arr) {
  let studentTotal = 0;
  arr.forEach((item) => (studentTotal += item));
  return studentTotal;
}

console.log(sumArray(studentCount));
// ------------ find the highest number
const gameNightFood = {
  "🍕 pizza": 3,
  "🌮 tacos": 10,
  "🥗 salads": 7,
  "🍝 pasta": 5,
};

function findTheWinner(obj) {
  obj.filter();
}

console.log(findTheWinner(gameNightFood));
