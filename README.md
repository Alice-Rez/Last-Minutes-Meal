 <h1><img align="center" src="" width="100%">Last Minutes Meal</h1>

## Description

<img align="right" src="./README-materials/desktop-demo.gif" width="50%">

**Insert ingredients and time you have and see, what you can make with it.**

Search Recipe application targeted at busy people working/learning from home in the time of Covid-19, which have to be able prepare lunch in limited time (during lunch break) with just ingredients that they have already at home. These people need a quick possibility to find a recipe that will work with their ingredients and time.

Our application is offering to user just recipes with the perfect match - recipes, that use just the ingredients that were selected. To make search really quick, just first few recipes will be displayed by default. In future, there will be implemented also possibility to display more recipes if the user is not satisfied with initial results.

We are also planning to add offering of the more ingredients and time, when the search is unsuccessful and no recipes are found.

## Setup Instructions

Application uses API key, therefore there is no possibility to make live demo for it. If you are interested and want to try it, just follow these steps:

1. Clone this repository to your computer
2. Inside of the local created repository, run:
   ```
   npm install
   ```
   to install all of the necessary dependencies
3. Get your own API key from [Spoonacular API](https://spoonacular.com/food-api)
4. In the `src/script` folder create new file with name `config.js`
5. Insert your own API key in the `config.js` :
   ```
   export const apiKey = "<here-comes-your-own-API-key>"
   ```
6. Enjoy usage of our application 😉

## Implementation details

Application uses [Spoonacular API](https://spoonacular.com/food-api)

**Used technologies**: Vanilla JS, DOM, Jquery, Handlebars, Axios, asynchronous Javascript (fetch), API, JS modules, HTML, CSS, CSS variables
