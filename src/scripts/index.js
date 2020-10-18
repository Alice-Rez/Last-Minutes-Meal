// The following line makes sure your styles are included in the project. Don't remove this.
import "../styles/main.scss";
// Import any additional modules you want to include below \/
import { renderCheckboxes } from "./renderCheckboxes.js";
import { top1kIngredients } from "./top-1k-ingredients.js";
import { autocomplete } from "./autocomplete.js";
import { getRecipe } from "./backEnd.js";

// \/ All of your javascript should go here \/

renderCheckboxes();

let overlay = document.getElementById("overlay");

// ADDING INGREDIENTS TO THE LIST
let customSection = false;

function addCustomIngredient(e) {
  console.log("Adding custom!");
  e.preventDefault();
  let sect;
  if (!customSection) {
    sect = document.createElement("section");
    sect.id = "customSection";
    customSection = true;
  } else {
    sect = document.getElementById("customSection");
  }

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = true;
  checkbox.name = document.getElementById("inputIngredients").value;
  checkbox.id = document.getElementById("inputIngredients").value;
  sect.append(checkbox);

  let label = document.createElement("label");
  label.setAttribute("for", document.getElementById("inputIngredients").value);
  label.innerText = document.getElementById("inputIngredients").value;
  sect.append(label);

  document.querySelector('label[for="inputIngredients"]').before(sect);

  // resetting the input box
  document.getElementById("inputIngredients").value = "";
}

document
  .getElementById("addIngredient")
  .addEventListener("click", addCustomIngredient);

// COLLECTING DATA AND SUBMITTING IT
document.getElementById("search").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".loader").style.display = "inline-block";
  let returnData = [];
  let nodeData = document.querySelectorAll("input:checked");
  for (let node of nodeData) {
    returnData.push(node.name);
  }
  let mins = document.getElementById("cookingTime").value;
  console.log({
    time: parseInt(mins),
    ingredients: returnData.join(","),
  });
  getRecipe({ time: parseInt(mins), ingredients: returnData.join(",") });
  return { time: parseInt(mins), ingredients: returnData.join(",") };
});

autocomplete(document.getElementById("inputIngredients"), top1kIngredients);
