// --- Day 2: Rock Paper Scissors ---
const fs = require("fs");

class Fight {
  constructor(enemy, me) {
    this.enemy = enemy;
    this.me = me;
  }

  calculateScorePart1() {
    let score = 0;
    switch (this.me) {
      case "X":
        score += 1;
        if (this.enemy === "A") score += 3;
        else if (this.enemy === "B") score += 0;
        else if (this.enemy === "C") score += 6;
        break;
      case "Y":
        score += 2;
        if (this.enemy === "A") score += 6;
        else if (this.enemy === "B") score += 3;
        else if (this.enemy === "C") score += 0;
        break;
      case "Z":
        score += 3;
        if (this.enemy === "A") score += 0;
        else if (this.enemy === "B") score += 6;
        else if (this.enemy === "C") score += 3;
        break;
      default:
        break;
    }
    return score;
  }

  calculateScorePart2() {
    let score = 0;
    switch (this.me) {
      case "X":
        score += 0;
        if (this.enemy === "A") score += 3;
        else if (this.enemy === "B") score += 1;
        else if (this.enemy === "C") score += 2;
        break;
      case "Y":
        score += 3;
        if (this.enemy === "A") score += 1;
        else if (this.enemy === "B") score += 2;
        else if (this.enemy === "C") score += 3;
        break;
      case "Z":
        score += 6;
        if (this.enemy === "A") score += 2;
        else if (this.enemy === "B") score += 3;
        else if (this.enemy === "C") score += 1;
        break;
      default:
        break;
    }
    return score;
  }
}

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return "";
  }
  const dataArray1 = data
    .split("\n")
    .map((e) => e.replace("\r", ""))
    .map((e) => {
      const fightInfo = e.split(" ");
      const newFight = new Fight(fightInfo[0], fightInfo[1]);
      return newFight;
    });

  let totalScorePart1 = 0;
  let totalScorePart2 = 0;
  for (const fight of dataArray1) {
    totalScorePart1 += fight.calculateScorePart1();
    totalScorePart2 += fight.calculateScorePart2();
  }
  console.log("#PART1#");
  console.log(totalScorePart1);
  console.log("#PART2#");
  console.log(totalScorePart2);
});
