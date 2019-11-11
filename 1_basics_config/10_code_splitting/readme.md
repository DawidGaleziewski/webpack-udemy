# code splitting

- outputing multiple bundles of js
- when we have couple of rutes using diffrent parts of javascript
- i.e when we have route using a lot of js and a route using very little

## how this project wokrs?

1. Button loaded with the page - only index.js
2. Image rendered after button was clicked - index.js + image_viewer.js
3. Uses System.import to fetch single module of code from server only when needed
4. Simple fact of adding System.import() to the code does:

- adds JSONP for handling chunk loading in bundle.js:

```javascript
/******/ // install a JSONP callback for chunk loading
```

- adds files like 0.bundle.js
  Those files are fetched from the server whenever there is a need for them
