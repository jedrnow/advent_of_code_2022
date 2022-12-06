// --- Day 1: Calorie Counting ---

const fs = require("fs");

class Elf {
  calories = [];
  sumOfCalories = 0;

  constructor(calories, sumOfCalories) {
    this.calories = calories;
    this.sumOfCalories = sumOfCalories;
  }

  get calories() {
    return this.calories;
  }

  get sumOfCalories() {
    return this.sumOfCalories;
  }

  sumCalories() {
    this.sumOfCalories = this.calories.reduce(
      (p, c) => parseInt(p) + parseInt(c),
      0
    );
  }

  addCalories(calory) {
    this.calories = this.calories.concat(calory);
    this.sumCalories();
  }
}

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return "";
  }
  const elvesCalories = data.split("\r").map((e) => e.replace("\n", ""));
  let elves = [];
  let caloriesArray = [];
  for (const calory of elvesCalories) {
    if (calory === "") {
      const elf = new Elf([], 0);
      elf.addCalories(caloriesArray);
      elves.push(elf);
      caloriesArray = [];
    } else {
      caloriesArray = caloriesArray.concat([calory]);
    }
  }
  let maxSum = 0;
  let max = Math.max(...elves.map((e) => e.sumOfCalories));
  maxSum += max;
  console.log("#1");
  console.log(max);
  elves = elves.filter((e) => e.sumOfCalories !== max);
  max = Math.max(...elves.map((e) => e.sumOfCalories));
  maxSum += max;
  console.log("#2");
  console.log(max);
  elves = elves.filter((e) => e.sumOfCalories !== max);
  max = Math.max(...elves.map((e) => e.sumOfCalories));
  maxSum += max;
  console.log("#3");
  console.log(max);
  console.log("#TOTAL");
  console.log(maxSum);
});
