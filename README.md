istanbul-client-bookmarklet
===================

Bookmarklet that posts ```__coverage__``` object to URL: ```/coverage/client```.

Here we suppose that ```__coverage__``` is gathered from Istanbul-instrumented JavaScript code.

Add this script to your browser bookmarks:

```javascript
javascript:(function(){function e(e){$.ajax({type:"GET",url:"/coverage/reset",success:e})}function t(e){$.ajax({type:"POST",url:"/coverage/client",data:c,dataType:"application/json",success:e})}function a(){location.href="/coverage"}var c=window.__coverage__;c?(document.body.style.opacity=.5,e(function(){t(a)})):window.alert("No coverage gathered! Check if requested files were instrumented...")})();
```

# Requirements

* jQuery or Zepto (to be removed soon)

# Build

Project is based on [yeoman generator](https://github.com/passy/generator-bookmarklet), which uses [Gulp](http://gulpjs.com/) for the builds.

Run from the project folder:
```shell
npm install
gulp
```

The resulting file will be here: ```dist/bookmarklet.js```.

**NOTE:** If **Gulp** is not installed globally, please run with admin rights:

```shell
npm -g install gulp
```
