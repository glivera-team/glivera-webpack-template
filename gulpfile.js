// plugins for development
var gulp = require('gulp');
// --------------------------------------------If you need svg sprite
var svgSprite = require('gulp-svg-sprite'),
    svgmin = require('gulp-svgmin'),
    cheerio = require('gulp-cheerio'),
    replace = require('gulp-replace');

var assetsDir = 'src/assets/',
		outputDir = 'dist/',
		buildDir = 'build/';

gulp.task('svgSpriteBuild', function () {
  return gulp.src(assetsDir + 'img/icons/*.svg')
  // minify svg
  .pipe(svgmin({
    js2svg: {
      pretty: true
    }
  }))
  // remove all fill and style declarations in out shapes
  .pipe(cheerio({
    run: function ($) {
      $('[fill]').removeAttr('fill');
      $('[stroke]').removeAttr('stroke');
      $('[style]').removeAttr('style');
    },
    parserOptions: {xmlMode: true}
  }))
  // cheerio plugin create unnecessary string '&gt;', so replace it.
  .pipe(replace('&gt;', '>'))
  // build svg sprite
  .pipe(svgSprite({
    mode: {
      symbol: {
        sprite: "../sprite.svg",
        render: {
          scss: {
            dest:'../../../scss/_sprite.scss',
            template: assetsDir + "scss/templates/_sprite_template.scss"
          }
        },
        example: true
      }
    }
  }))
  .pipe(gulp.dest(assetsDir + 'img/sprite/'));
});


//--------------------------------- testing

// const puppeteer = require('puppeteer');
// const fs = require('fs');
// const PNG = require('pngjs').PNG;
// const pixelmatch = require('pixelmatch');
//
// const chromeLauncher = require('chrome-launcher');
// const http = require('http');
// const staticN = require('node-static');
// const path = require('path');
//
// var beforeDir = 'test/before/',
// 		afterDir = 'test/after/',
// 		diffDir = 'test/difference/';
//
// gulp.task('test-init', function() {
// 	if (!fs.existsSync('test')){
// 		fs.mkdirSync('test');
// 	}
//
// 	if (!fs.existsSync(beforeDir)){
// 		fs.mkdirSync(beforeDir);
// 	}
//
// 	if (fs.existsSync(beforeDir)){
// 		fs.readdir(beforeDir, (err, files) => {
// 			for (const file of files) {
// 				fs.unlink(path.join(beforeDir, file), err => {});
// 			}
// 		});
// 	}
//
// 	pageList.map(async function(element, index) {
// 		const browser = await puppeteer.launch();
// 		const page = await browser.newPage();
//
// 		await page.setViewport({ width: initialPageWidth, height: 0 });
//
// 		await page.goto('http://localhost:8081/' + element + '.html');
//
// 		await page.screenshot({path: beforeDir + element + '.png', fullPage: true});
// 		console.log(element + ' page +');
//
// 		await browser.close();
// 	})
// })
//
// gulp.task('test-compare', function() {
// 	// make and compare screens
//
// 	var timeMod = new Date().getTime();
// 	var clearDir = [diffDir, afterDir, 'test/']
//
// 	if (!fs.existsSync(afterDir)){
// 		fs.mkdirSync(afterDir);
// 	}
//
// 	if (!fs.existsSync(diffDir)){
// 		fs.mkdirSync(diffDir);
// 	}
//
// 	clearDir.map(function(element, index) {
// 		if (fs.existsSync(element)){
// 			fs.readdir(element, (err, files) => {
// 				for (const file of files) {
// 					fs.unlink(path.join(element, file), err => {});
// 				}
// 			});
// 		}
// 	});
//
// 	function doneReading(img1, img2, pageName) {
// 		var diff = new PNG({width: img1.width, height: img1.height});
//
// 		pixelmatch(img1.data, img2.data, diff.data, img1.width, img1.height, {threshold: 0.5});
//
//
// 		diff.pack().pipe(fs.createWriteStream(diffDir + pageName + timeMod + '.png'));
// 		console.log(pageName + ' ---- page compared');
// 	}
//
// 	function parse2(element, index, pageName) {
// 		img2[index] = fs.createReadStream(beforeDir + element + '.png').pipe(new PNG()).on('parsed', function() { doneReading(img1[index], img2[index], element)});
// 	}
//
// 	pageList.map(async function(element, index) {
// 		const browser = await puppeteer.launch();
// 		const page = await browser.newPage();
//
// 		await page.setViewport({ width: initialPageWidth, height: 0 });
//
// 		await page.goto('http://localhost:8081/' + element + '.html');
//
// 		await page.screenshot({path: afterDir + element + '.png', fullPage: true});
//
// 		await browser.close();
//
// 		pageName = element;
// 		img1[index] = await fs.createReadStream(afterDir + element + '.png').pipe(new PNG()).on('parsed', function() { parse2(element, index)});
// 	})
//
//
//
// 	// create file in insert list of images
// 	var imgList = pageList.map(function(file, i) {
// 		return '<li style="width: 49%; display: inline-block; list-style: none; background-color: #888;"><h2 style="font: 3vw sans-serif; margin: 0; padding: 1em; text-align: center;">' + pageList[i] + '</h2><img style="width: 100%; display: block;" src="difference/' + file + timeMod + '.png"/></li>'
// 	})
//
// 	fs.writeFile('test/index_test' + timeMod + '.html', imgList, function (err) {});
//
// 	// create localserver and run chrome
// 	var fileServer = new staticN.Server();
//
// 	http.createServer(function (req, res) {
// 		req.addListener('end', function () {
// 				fileServer.serve(req, res);
// 		}).resume();
// 	}).listen(8080);
//
// 	chromeLauncher.launch({
// 		startingUrl: 'http://localhost:8080/test/index_test' + timeMod + '.html',
// 		userDataDir: false
// 	}).then(chrome => {
// 		console.log(`Chrome debugging port running on ${chrome.port}`);
// 	});
// })
