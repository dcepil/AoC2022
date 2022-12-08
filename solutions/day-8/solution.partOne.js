import { lines } from "./input.js";

console.log(
  lines.reduce(
    (prev, line, lIdx) =>
      [...line]
        .map(
          (char, cIdx) =>
            char > Math.max(...line.slice(0, cIdx)) ||
            char > Math.max(...line.slice(cIdx + 1)) ||
            char > Math.max(...lines.slice(0, lIdx).map((v) => v[cIdx])) ||
            char > Math.max(...lines.slice(lIdx + 1).map((v) => v[cIdx]))
        )
        .reduce((a, c) => (c ? ++a : a), 0) + prev,
    0
  )
);
