# extract plugin

takes referance to a loader and saves it to seperate directory

# Plugin install command:

npm
install --save-dev extract-text-webpack-plugin@2.0.0-beta.4

## we need to load the library to webpack.config file:

```javascript
const ExtractTextPlugin = require('extract-text-webpack-plugin');
```

## plugins are siffrent then loaders and need to be added into plugins:[] property
