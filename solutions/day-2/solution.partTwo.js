import { input } from "./input.js";
import { transform } from "./solution.partOne.js";

const lines = input.split("\n");

// Part 2
const choices = ["X", "Y", "Z"];
const proxy = new Proxy(choices, {
  get(target, prop) {
    if (!isNaN(prop)) {
      prop = parseInt(prop, 10);
      if (prop < 0) {
        prop += target.length;
      } else if (prop >= target.length) {
        prop -= target.length;
      }
    }
    return target[prop];
  },
});
let sum = 0;
lines.forEach((line) => {
  const gameOutcome = line[line.search(/[XYZ]/)];
  gameOutcome === "Y" ? (sum += 3) : gameOutcome === "Z" ? (sum += 6) : null;
  const opponentsChoice = transform(line[line.search(/[ABC]/)]);
  switch (gameOutcome) {
    case "X":
      sum += choices.indexOf(proxy[choices.indexOf(opponentsChoice) - 1]) + 1;
      break;
    case "Y":
      sum += choices.indexOf(opponentsChoice) + 1;
      break;
    case "Z":
      sum += choices.indexOf(proxy[choices.indexOf(opponentsChoice) + 1]) + 1;
      break;
    default:
      break;
  }
});

console.log("part 2:", sum);
