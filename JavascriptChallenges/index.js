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
