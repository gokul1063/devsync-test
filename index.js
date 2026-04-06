require("dotenv").config();

const { add, multiply } = require("./lib/math");
const greet = require("./lib/greet");
const _ = require("lodash");

const { execSync } = require("child_process");
execSync("./tools/mytool.sh", { stdio: "inherit" });

console.log("App:", process.env.APP_NAME);

const nums = [1, 2, 3, 4];

console.log("Sum:", add(2, 3));
console.log("Product:", multiply(4, 5));
console.log("Chunked:", _.chunk(nums, 2));

greet("Harsh");
