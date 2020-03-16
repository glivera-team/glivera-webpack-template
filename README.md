# Glivera Team Template
Project template for quick start. This template uses Webpack, Pug, Sass, Gulp

#### 1. Install [node.js](https://nodejs.org/)  

#### 2. Install dependencies.

    npm i

#### 3. If you use link of global packages:  
1. Install global:

        npm i @babel/core @babel/preset-env babel-loader autoprefixer copy-webpack-plugin css-loader css-mqpacker cssnano file-loader gulp gulp-cheerio gulp-replace gulp-svg-sprite gulp-svgmin html-webpack-plugin mini-css-extract-plugin node-sass postcss-loader pug pug-loader pug-plain-loader sass-loader style-loader vue-loader vue-style-loader vue-template-compiler webpack webpack-cli webpack-dev-server webpack-merge ismobilejs jquery -g  

2. Link packages to the project  

        npm link @babel/core @babel/preset-env babel-loader autoprefixer copy-webpack-plugin css-loader css-mqpacker cssnano file-loader gulp gulp-cheerio gulp-replace gulp-svg-sprite gulp-svgmin html-webpack-plugin mini-css-extract-plugin node-sass postcss-loader pug pug-loader pug-plain-loader sass-loader style-loader vue-loader vue-style-loader vue-template-compiler webpack webpack-cli webpack-dev-server webpack-merge ismobilejs jquery

#### 4. Server with hot reload at http://localhost:8081/

    npm run dev

#### 5. Output will be at dist/ folder

    npm run build

#### 6. Build svg-sprite

Put your icons into /src/assets/img/icons folder & run task:

    gulp svgSpriteBuild

#### 7. Vue
1. Install vue
``` bash
npm install vue --save
```
2. Init vue `index.js`:
``` js
const app = new Vue({
  el: '#app'
})
```
3. Create div id app
``` pug
#app
  //- Content
```
4. Add Vue Components:
Create your component in `/components/`

5. PUG Usage:
	1. Init component in `index.js`:
	``` js
	Vue.component('example-component', require('./components/Example.vue').default)
	```
	2. Any pug files:
	``` pug
	example-component
	```

#### 8. How to test

1. Install packages

        npm i chrome-launcher fs http node-static path pixelmatch pngjs puppeteer imagemin-mozjpeg imagemin-webpack-plugin -g

        npm link chrome-launcher fs http node-static path pixelmatch pngjs puppeteer imagemin-mozjpeg imagemin-webpack-plugin

2. Open `gulpfile.js`. Uncomment "testing" task & Add all names of tested pages to array `pageList` 

3. Run task `gulp test-init` to create reference screenshots from your pages or put your images manually into `test/before/` folder

4. Run task `gulp test-compare` to compare current state of the pages with the reference

#### 9. Folder and file structure
```
├── build/                     # Webpack configs
├── helpers/                   # Helpers
├── plugins/                   # Useful js libraries
├── src/                       # Sources
│   ├── assets/                # Connected resources
│   │   ├── css/               # Custom styles *.css. If necessary, use them in index.js
│   │   ├── fonts/             # Fonts
│   │   ├── img/               # Images
│   │   │   ├── icons/         # SVG icons for sprite
│   │   │   ├── sprite/        # SVG sprite
│   │   ├── scss/              # Custom styles *.scss
│   ├── js/                    # For custom scripts
│   ├── pug/                   # Templates
│       ├── blocks/            # Layout of blocks, sections
│       ├── layout/            # Page layout
│       ├── pages/             # Page templates
│       ├── templates/         # Mixins, arrays and variables for *.pug
├── vue_components/            # Folder with custom .vue components
├── static/                    # Static files
├── .editorconfig              # Configuring code editor settings
├── .gitignore                 # List of excluded files from Git
├── gulpfile.js                # Configuration for launching Gulp tasks
├── package.json               # List of modules and other information
├── postcss.config.js          # Configuration of CSS post-processing
├── readme.md                  # Documentation template
```

