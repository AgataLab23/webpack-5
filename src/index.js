import { sum2 } from "./sum2";
import style from "./css/index.scss";

const sum = require("./sum").sum;

console.log("Hello World");
console.log(sum(2, 3));
console.log(sum2(2, 3));

let heading = document.querySelector("#demo"),
  sumValue = sum(10, 5);

heading.innerHTML = `10 + 5 =${sumValue}`;
