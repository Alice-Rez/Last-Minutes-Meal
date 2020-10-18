import $ from "jquery";
const Handlebars = require("handlebars");
const axios = require("axios");

import { messages } from "./messages.js";
import { apiKey } from "./config.js";

// key is not anymore part of the js files that goes to the GH. Look at Slack for info how the config.js file with key should look like......

let minimum = 2;
let counter = 0;

export function getRecipe(obj) {
  $(".messages").html("");
  $(".results").html("");
  counter = 0;
  console.log(counter);

  axios
    .get("https://api.spoonacular.com/recipes/complexSearch", {
      params: {
        apiKey: apiKey,
        includeIngredients: obj.ingredients,
        maxReadyTime: obj.time,
        number: 1000,
        addRecipeInformation: true,
        fillIngredients: true,
      },
    })
    .then((res) => {
      let results = res.data.results;

      console.log(
        `1. Complex search, found ${results.length} recipes, results:`
      );
      console.log(results);

      let matchFound = false;

      results.map((result, index) => {
        if (result.missedIngredientCount === 0 && counter < 2) {
          injectRecipe(result);
          counter++;
          matchFound = true;
          return "recipes found!";
        }
      });

      if (matchFound) {
        showOverlay();
      } else {
        searchIngredients(obj);
      }
    })
    .catch((err) => {
      console.log(err);
      injectMessage("errAPI");
    });
}

function searchIngredients(obj) {
  axios
    .get("https://api.spoonacular.com/recipes/findByIngredients", {
      params: {
        apiKey: apiKey,
        number: 1000,
        ranking: 2,
        ingredients: obj.ingredients,
      },
    })
    .then((res) => {
      let resultsIngr = res.data;
      console.log(
        `2. Ingredients search, found ${resultsIngr.length} recipes, results:`
      );
      console.log(resultsIngr);

      let IDs = [];

      resultsIngr.map((result, index) => {
        if (result.missedIngredientCount === 0) {
          return IDs.push(result.id);
        } // Can add else for collecting missing ingredients to offer user
      });

      console.log(IDs);

      if (IDs.length === 0) {
        console.log(
          "Recipe not found, probably bad input or you need more ingredients"
        );
        injectMessage("wrongIngredients");
        // here can be also offering additional ingredients
      } else {
        recipeLooping(IDs, obj.time, 0);
      }
    })
    .catch((err) => {
      console.log(err);
      injectMessage("errAPI");
    });
}

function recipeLooping(array, time, number) {
  console.log(`This is recipe nr. ${counter}`);
  axios
    .get(`https://api.spoonacular.com/recipes/${array[number]}/information`, {
      params: {
        apiKey: apiKey,
      },
    })
    .then((response) => {
      let recipe = response.data;
      console.log(counter);

      if (recipe.readyInMinutes <= time) {
        injectRecipe(recipe);
        console.log(recipe.title);
        counter++;
      }
      // Can add else for  collecting another time

      if (counter < minimum && number < array.length - 1) {
        number = number + 1;
        recipeLooping(array, time, number);
      } else if (counter === 0 && number === array.length - 1) {
        console.log(
          "No recipe with given ingredients and time for preparation found!"
        );
        injectMessage("wrongTime");
        // here can be also offering how many time is needed for some recipes....
      } else {
        showOverlay();
      }
    })
    .catch((err) => {
      if (counter === 0) {
        console.log(err);
        console.log("counter:", counter);
        injectMessage("errAPI");
      } else {
        console.log(err);
        console.log("counter:", counter);
        injectMessage("errAPIPart");
        showOverlay();
      }
    });
}

function injectRecipe(obj) {
  console.log(obj);

  let temp = $("#recipe-template").html();
  let handleFunction = Handlebars.compile(temp);
  let result = handleFunction(obj);
  $(".results").append(result);
}

function injectMessage(message) {
  let data = messages[message];
  console.log(data);

  let temp = $("#message-template").html();
  let handleFunction = Handlebars.compile(temp);
  let result = handleFunction(data);
  $(".messages").append(result);
  $(".loader").css("display", "none");
}

function showOverlay() {
  $(".loader").css("display", "none");
  console.log("Recipe search finished! Enjoy your food!");
  overlay.classList.toggle("hidden");
}
