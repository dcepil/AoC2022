import { lines } from "./input.js";

const emptyLine = lines.indexOf("");
const stacks = lines.slice(0, emptyLine - 1).reverse();
const moves = lines.slice(emptyLine + 1, lines.length);
const charOffsets = [1, 5, 9, 13, 17, 21, 25, 29, 33];
const parsedStacks = charOffsets.map((offset) =>
  Array.from(
    stacks
      .map((stack) => stack[offset])
      .join("")
      .trim()
  )
);
moves.forEach((move) => {
  const [amt, from, to] = move.matchAll(/\d+/g);
  parsedStacks[from - 1]
    .splice(parsedStacks[from - 1].length - amt, amt)
    .forEach((letter) => parsedStacks[to - 1].push(letter));
});

console.log(
  parsedStacks.reduce((prev, curr) => prev.concat(curr.pop()), new String())
);
