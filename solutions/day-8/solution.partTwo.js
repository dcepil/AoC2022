import { lines } from "./input.js";

const sum = lines.reduce((prev, line, lIdx) => {
  [...line].forEach((char, cIdx) => {
    const [left, right] = [
      char > Math.max(...line.slice(0, cIdx)),
      char > Math.max(...line.slice(cIdx + 1, line.length)),
    ];
    console.log(left, char);
    console.log(line.indexOf(Math.max(...line.slice(0, cIdx))));
    const [up, down] = [
      char > Math.max(...lines.slice(0, lIdx).map((v) => v[cIdx])),
      char >
        Math.max(...lines.slice(lIdx + 1, lines.length).map((v) => v[cIdx])),
    ];
    return left || right || up || down ? prev++ : prev;
  });
  return prev;
}, 0);

console.log(sum);
