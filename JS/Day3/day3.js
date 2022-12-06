// --- Day 3: Rucksack Reorganization ---
const fs = require("fs");

class Rucksack {
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }

  combined() {
    return this.left + this.right;
  }

  findMatchingLetter() {
    const left = this.left.split("");
    for (const letter of left) {
      if (this.right.search(letter) !== -1) {
        return letter;
      }
    }
    return "";
  }

  calculatePriority() {
    const letter = this.findMatchingLetter();
    const asciiNum = letter.charCodeAt();

    if (asciiNum > 96 && asciiNum < 123) {
      return asciiNum - 96;
    }
    if (asciiNum > 64 && asciiNum < 91) {
      return asciiNum - 64 + 26;
    }
  }
}

const findMatchingLetterAndReturnPriority = (arr) => {
  const letters = arr[0].split("");
  for (const letter of letters) {
    if (arr[1].search(letter) !== -1 && arr[2].search(letter) !== -1) {
      const asciiNum = letter.charCodeAt();

      if (asciiNum > 96 && asciiNum < 123) {
        return asciiNum - 96;
      }
      if (asciiNum > 64 && asciiNum < 91) {
        return asciiNum - 64 + 26;
      }
    }
  }
  console.log(letters);
  console.log(arr);
};

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return "";
  }
  const dataArray = data
    .split("\n")
    .map((e) => e.replace("\r", ""))
    .map((e) => {
      const rucksackRight = e.slice(e.length / 2);
      const rucksackLeft = e.replace(rucksackRight, "");
      const newRucksack = new Rucksack(rucksackLeft, rucksackRight);
      return newRucksack;
    });
  let total = 0;
  for (const rucksack of dataArray) {
    total += rucksack.calculatePriority();
  }
  console.log("#PART1#");
  console.log(total);
  const groupsArray = [];
  for (let i = 0; i < dataArray.length; i++) {
    groupsArray.push(dataArray.slice(i, i + 3).map((e) => e.combined()));
  }
  const beforeLast = groupsArray.pop();
  const last = groupsArray.pop();
  const merged = beforeLast.concat(last);
  groupsArray.push(merged);
  let totalPart2 = 0;
  for (const group of groupsArray) {
    totalPart2 += findMatchingLetterAndReturnPriority(group);
    //if (!findMatchingLetterAndReturnPriority(group)) console.log(group);
  }
  console.log("#PART2#");
  console.log(totalPart2);
  //console.log(groupsArray);
});
