istanbul-client-bookmarklet
===================

Bookmarklet that posts ```__coverage__``` object to URL: ```/coverage/client```.

Here we suppose that ```__coverage__``` is gathered from Istanbul-instrumented JavaScript code.

Add those scripts to your browser bookmarks:

### Reset Istanbul coverage

```javascript
javascript:(function(e){function%20r(r){return%20e.clearBeforeSend?void%20$.ajax({type:"GET",url:"/coverage/reset",success:r}):r()}function%20o(r){return%20e.sendCoverage?void%20$.ajax({type:"POST",url:"/coverage/client",data:JSON.stringify(a),processData:!1,contentType:"application/json;%20charset=UTF-8",success:r}):r()}function%20t(){e.redirectToCoverage&&(location.href="/coverage")}var%20a=window.__coverage__;a?(e.redirectToCoverage&&(document.body.style.opacity=.5),r(function(){o(t)})):window.alert("No%20coverage%20gathered!%20Check%20if%20requested%20files%20were%20instrumented...")})({clearBeforeSend:!0,sendCoverage:!1,redirectToCoverage:!1});
```

### Collect Istanbul coverage

```javascript
javascript:(function(e){function%20r(r){return%20e.clearBeforeSend?void%20$.ajax({type:"GET",url:"/coverage/reset",success:r}):r()}function%20o(r){return%20e.sendCoverage?void%20$.ajax({type:"POST",url:"/coverage/client",data:JSON.stringify(a),processData:!1,contentType:"application/json;%20charset=UTF-8",success:r}):r()}function%20t(){e.redirectToCoverage&&(location.href="/coverage")}var%20a=window.__coverage__;a?(e.redirectToCoverage&&(document.body.style.opacity=.5),r(function(){o(t)})):window.alert("No%20coverage%20gathered!%20Check%20if%20requested%20files%20were%20instrumented...")})({clearBeforeSend:!1,sendCoverage:!0,redirectToCoverage:!1});
```

### Look at Istanbul coverage

```javascript
javascript:(function(e){function%20r(r){return%20e.clearBeforeSend?void%20$.ajax({type:"GET",url:"/coverage/reset",success:r}):r()}function%20o(r){return%20e.sendCoverage?void%20$.ajax({type:"POST",url:"/coverage/client",data:JSON.stringify(a),processData:!1,contentType:"application/json;%20charset=UTF-8",success:r}):r()}function%20t(){e.redirectToCoverage&&(location.href="/coverage")}var%20a=window.__coverage__;a?(e.redirectToCoverage&&(document.body.style.opacity=.5),r(function(){o(t)})):window.alert("No%20coverage%20gathered!%20Check%20if%20requested%20files%20were%20instrumented...")})({clearBeforeSend:!1,sendCoverage:!1,redirectToCoverage:!0});
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
