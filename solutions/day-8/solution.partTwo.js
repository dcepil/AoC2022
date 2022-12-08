import { lines } from "./input.js";

console.log(
  lines.reduce(
    (prev, line, lIdx) =>
      Math.max(
        [...line]
          .map(
            (char, cIdx) =>
              ([...line]
                .slice(0, cIdx)
                .reverse()
                .findIndex((f) => f >= char) + 1 || cIdx) *
              ([...line].slice(cIdx + 1).findIndex((f) => f >= char) + 1 ||
                line.length - cIdx - 1) *
              ([...lines]
                .slice(0, lIdx)
                .map((v) => v[cIdx])
                .reverse()
                .findIndex((f) => f >= char) + 1 || lIdx) *
              ([...lines]
                .slice(lIdx + 1)
                .map((v) => v[cIdx])
                .findIndex((f) => f >= char) + 1 || lines.length - lIdx - 1)
          )
          .reduce((a, c) => (c > a ? c : a), 0),
        prev
      ),
    0
  )
);
