import { input } from "./input.js";

const lines = input.split("\n");

export const transform = (char) =>
  char === "A" ? "X" : char === "B" ? "Y" : char === "C" ? "Z" : null;

export const mod = (a, b) => {
  const c = a % b;
  return c < 0 ? c + b : c;
};

// Part 1
const choices = ["X", "Y", "Z"];
let sum = 0;
lines.forEach((line) => {
  let opponentsChoiceValue = choices.indexOf(
    transform(line[line.search(/[ABC]/)])
  );
  const myChoiceValue = choices.indexOf(line[line.search(/[XYZ]/)]);
  sum += myChoiceValue + 1;

  if (opponentsChoiceValue === myChoiceValue) {
    sum += 3;
  } else if (
    !(
      mod(opponentsChoiceValue - myChoiceValue, choices.length) <
      choices.length / 2
    )
  ) {
    sum += 6;
  }
});

console.log("part 1:", sum);
