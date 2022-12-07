import { lines } from "./input.js";

const sum = lines.reduce((prev, curr) => {
  /\$ /.test(curr)
    ? true
    : /dir/.test(curr)
    ? true
    : /\d+/.test(curr)
    ? true
    : console.error("??");
}, 0);

console.log(sum);
