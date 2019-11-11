# CSS loader

## Required modules:

```
npm install --save-dev css-loader style-loader
```

## webpack rule:

```javascript
    {
        // We can add loaders in array
        //!important index of those matters!
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
    }
```

## css will be loaded directly into head in the <style> tag

1. we import the css in one of the js files.
2. css-loader recognises this and creates new function in bundle.js
3. bundle.js pushes this style to the document when loaded
