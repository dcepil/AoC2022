import { input } from "./input.js";

const length = 4;
const firstIndex = Array.from(input).reduce((prev, _, idx, arr) => {
  const builtString = arr.slice(idx, idx + length).join("");
  return Array.from(builtString).filter((v, i, a) => a.indexOf(v) === i)
    .length === length
    ? prev > input.indexOf(builtString)
      ? input.indexOf(builtString)
      : prev
    : prev;
}, Array.from(input).length);

console.log(firstIndex + length);
