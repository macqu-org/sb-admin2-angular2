# SB Admin 2 - Anglar 2

This template is a fork of Start Bootstrap SB Admin 2 which got adapted for Angular 2. For details on the template itself, 
please goto to the original repository [BlackrockDigital/startbootstrap-sb-admin-2](https://github.com/BlackrockDigital/startbootstrap-sb-admin-2).

## Features:

  * Angular 2 (variants for all sites, routing, ect.)
  * Typescript 2
  * Sass variants of the css
  * gulp scripts to build, minify, live-editing, ect.
  * morris.js and flot support
  * datatables support
  * additional simple alerting service


## Quickstart

 1. Clone the repo: `git clone https://github.com/siglocpp/sb-admin2-angular2.git`
 2. `npm install` should install all dependencies
 3. `gulp serve` compiles an moves everything to the dist folder, and opens your browser with live-editing version of SB-Admin
 

## How do I get rid of ...
### Flot charts
- At `package.json`: remove the following entries from dependencies :`flot` and `flot-tooltip`
- At `gulpfile.config.json`: remove the following entries from `vendor/src`: 
```
node_modules/Flot/excanvas.js
node_modules/Flot/jquery.flot.js
node_modules/Flot/jquery.flot.pie.js
node_modules/Flot/jquery.flot.resize.js
node_modules/Flot/jquery.flot.time.js
node_modules/jquery.flot.tooltip/js/jquery.flot.tooltip.js
```

### MorrisJs charts
- At `package.json`: remove the following entries from dependencies :`raphael` and `morris`
- At `gulpfile.config.json`: remove the following entries from `vendor/src`: 
```
node_modules/eve-raphael/eve.js
node_modules/raphael/raphael.js
node_modules/morris.js/morris.js
```
- At `glob/index.scss`: remove the following `@import`: `../../node_modules/morris.js/morris`

### Bootstrap Glyphicons
- At `gulpfile.config.json`: remove the following entry from `assets`: 
```JSON
{
 "src": [
  "node_modules/bootstrap-sass/assets/fonts/bootstrap/*.*"
 ],
 "target": "dist/fonts/bootstrap",
 "flatten": [0, 0]
}
```
    
### FontAwesome
- At `package.json`: remove the following entry from dependencies :`font-awesome`
- At `gulpfile.config.json`: remove the following entry from `assets`: 
```JSON
{
 "src": [
  "node_modules/font-awesome/fonts/*.*"
 ],
 "target": "dist/fonts",
 "flatten": [0, 0]
}
```
- At `glob/index.scss`: remove the following `@import`: `../../node_modules/font-awesome/scss/font-awesome`

### DataTables
- At `package.json`: remove the following entries from dependencies :
```
datatables.net
datatables.net-bs
datatables.net-responsive
datatables.net-responsive-bs
```
- At `gulpfile.config.json`: remove the following entries from `vendor/src`: 
```
"node_modules/datatables.net/js/jquery.dataTables.js"
"node_modules/datatables.net-bs/js/dataTables.bootstrap.js"
"node_modules/datatables.net-responsive/js/dataTables.responsive.js"
"node_modules/datatables.net-responsive-bs/js/responsive.bootstrap.js"
```
- At `gulpfile.config.json`: remove the following entries from `assets`: 
```JSON
{  
  "src":[  
    "node_modules/datatables.net-bs/css/*.*"
  ],
  "target":"dist/css",
  "flatten":[ 0, 0]
}
```
```JSON
{  
  "src":[  
    "node_modules/datatables.net-responsive-bs/css/*.*"
  ],
  "target":"dist/css",
  "flatten":[ 0, 0]
}
```
- At `glob/index.scss`: remove the following `@import`: 
`../../node_modules/datatables.net-bs/css/dataTables.bootstrap` and 
`../../node_modules/datatables.net-responsive-bs/css/responsive.bootstrap` 

## Gulp commands

- `gulp serve` : performs a full build, starts browsersync and watches for html, ts and scss changes for life editing.
- `gulp build` : performs a full build without minifying the java script (used by `gulp serve`)
- `gulp release` : performs a full build and minifies the java script (and some additional folder clean up)

For more details please look into: `gulpfile.js` and it's config `gulpfile.config.js` 


## Copyright and License
 
This copyright and license are as provided by the original repository
 
Copyright 2013-2016 Blackrock Digital LLC. Code released under the MIT license.
