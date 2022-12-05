import { input } from "./input.js";

const lines = input.split("\n");
const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const sum = lines.reduce((prev, curr) => {
  const firstHalf = curr.slice(0, curr.length / 2);
  const secondHalf = curr.slice(curr.length / 2, curr.length);
  console.log(`${firstHalf} | ${secondHalf}`);
}, 0);

console.log(sum);
