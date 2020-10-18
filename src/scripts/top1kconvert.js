// HELPER PROGRAM TO CONVERT INGREDIENTS LIST TO JS ARRAY
// Source: https://spoonacular.com/food-api/docs#List-of-Ingredients

const fs = require('fs');

let data = fs.readFileSync("./top-1k-ingredients.csv", "utf-8");
let content = [];
for (let line of data.split("\n")) {
    content.push(line.split(":")[0]);
}

fs.writeFileSync("./top-1k-ingredients.js",
 '/* DO NOT CHANGE THIS FILE, CONVERT DATA WITH <node top1kconvert.js> INSTEAD! */\nlet top1kIngredients = ["' + content.join('","') + '"];');