# DCI Boilerplate II: Webpack + babel

A [Webpack 4](https://webpack.js.org/) boilerplate with built-in:

- HTML file generation to serve your webpack bundles using [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)
- ECMAScript 6 to ECMAScript 5 transpiling with [babel](https://babeljs.io/)
- CSS extraction into a single file using [style-loader](https://github.com/webpack-contrib/style-loader), [css-loader](https://github.com/webpack-contrib/css-loader) and [css-mini-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin)
- SCSS support using [sass-loader](https://github.com/webpack-contrib/sass-loader) and [node-sass](https://github.com/sass/node-sass).
- Image and font imports with [file-loader](https://github.com/webpack-contrib/file-loader)
- Github Pages publishing using [gh-pages](https://www.npmjs.com/package/gh-pages)

To learn more about webpack and how to create your own configuration, check out the following tutorial for a quick start: https://auth0.com/blog/zero-config-javascript-app-prototyping-with-webpack

For more advanced webpacking, check out this cool book: https://survivejs.com/webpack/introduction/

## Get Started

- [Setup](#setup)
- [Useful Commands](#useful-commands)
- [Project Structure](#project-structure)
- [Credits](#credits)

## Setup

1. Clone this repository into a new project folder (replace `[project name]` with your project's name)

   ```
   git clone git@github.com:DigitalCareerInstitute/dci-boilerplate-II.git [project name]
   ```

1. Delete the boilerplate's git history

   ```
   cd <project name>
   rm -rf .git
   ```

1. Edit `package.json` to add you project's name

   `package.json`

   ```json
   {
     "name": "[project name]",
     ...
     "author": "[your name]"
   }
   ```

1. Edit `index.html` to add your projects name

   ```html
   ...
   <head>
     ...
     <title>[project name]</title>
   </head>
   ...
   ```

1. Start a new git repository and make an initial commit

   ```
   git init
   git add . && git commit -m "Initial commit"
   ```

1. Install the dependencies

   ```
   npm install
   ```

1. Have fun coding :D

## Useful Commands

### Development

Run **Webpack** in **Development** mode and start coding!

```
npm start
```

### Production

Run **Webpack** in **Production** mode.

```
npm run build
```

### Deploy to Github Pages

Deploy your code to **Github Pages**: this script creates a 'gh-pages' branch and serves the production bundle to this branch. For this to work, make sure you already have a remote repo on github.

```
npm run deploy
```

## Project Structure

Any project created with this boilerplate will follow the structure below:

```
Project
│   README.md
│   package.json
|   package-lock.json
│   webpack.config.js
└───src
│   │   index.html
│   └───scripts
│   |   └───index.js
│   └───styles
│   |   └───main.scss
|   └───images
|   └───fonts
└───dist
```

### `README.md`

Should contain a brief description of your project, feel free to delete this guide or rename it to add your own description.

### `package.json` & `package-lock.json`

These files contain various information about you, your project and the project dependencies, as well as useful scripts to help you with the development process.

### `webpack.config.js`

Contains configuration for the webpack package bundler. This file tells webpack how to handle thw various types of files your project might contain. If you must edit this file, do so **with caution**.

### `src` & `index.html`

The `src` folder contains any file you would want to add to your project, before any processing is done to it. **This is the main folder you will be working in**.

`index.html` is a template to quickly bootstrap your project so that all js and css files will be automatically added to it. In the webpack workflow, you will not need to add any new html pages to your project, instead your main entry point to the code will be your main javascript file.

### `scripts` & `index.js`

The `scripts` folder will contain any `js` modules you will add to your project. In order to include these javascript modules in your project, they need to be imported into `index.js`.

`index.js` is the _**entry point**_ of your project. This means that any module imported to this file can be used, and any code in this file will be executed when the browser loads the page. This is the file where you will initially make all the dom manipulations necessary to render your page.

### `styles` & `main.scss`

The `styles` folder will contain any `scss` or `css` files (depending on your preference). In order to include additional styles in your project you must import them to `main.scss`.

`main.scss` is your style _**entry point**_. Any other `scss` or `css` imported to this file can be used, and any styles written directly to this file will be applied.

If you prefer to work just with pure css, simply rename this file to `main.css`. Keep in mind that if you don't use `scss` each stylesheet you import will make an additional request to the server, which might have an impact on page performance.

### `images` and `fonts`

To include images in your scripts or styles, place your image files in the `images` folder, and simply import them into your script:

```javascript
import cutePuppyJpeg from '../images/cute-puppy.jpg';

const someImage = document.createElement('img');

someImage.src = cutePuppyJpeg;
```

**OR** to include them in your style:

```css
.cute-puppy {
  background-image: url('../images/cute-puppy.jpg');
}
```

> _**NOTE**_: Don't forget to replace the cute puppy with the actual name of the image you are trying to add.

The `fonts` folder should include any custom font files you would like to add to your project. To use the font simply import it into your `main.scss` file.

### `dist`

The `dist` folder will be automatically generated by webpack whenever your run the build script:

```bash
npm run build
```

This folder will contain your built project, ready to be deployed online.

## Credits

Boilerplate created by Leandro Frigerio ([@LeandroDCI](https://github.com/LeandroDCI))

Edited by Itamar Givon ([@itamargiv](https://github.com/itamargiv)) and Francesca Borg ([@FranBTE](https://github.com/FranBTE))
