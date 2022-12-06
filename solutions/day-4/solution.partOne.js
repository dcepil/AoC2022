import { lines } from "./input.js";

const sum = lines.reduce((prev, curr) => {
  const [firstRange, secondRange] = curr.split(",");
  const [firstStart, firstEnd] = firstRange.split("-");
  const [secondStart, secondEnd] = secondRange.split("-");
  const first = [...Array(firstEnd - firstStart + 1).keys()].map(
    (x) => x + parseInt(firstStart)
  );
  const second = [...Array(secondEnd - secondStart + 1).keys()].map(
    (x) => x + parseInt(secondStart)
  );
  if (
    first.every((v) => second.includes(v)) ||
    second.every((v) => first.includes(v))
  ) {
    prev++;
  }
  return prev;
}, 0);

console.log(sum);
