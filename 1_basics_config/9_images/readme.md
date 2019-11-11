# image loaders

## packages required:

npm install --save-dev image-webpack-loader url-loader

## image-webpack-loader

compress the image

## url loader

url loader will have a logic dependent on the file size

for small images it will include the image in the bundle.js as raw data

big image will be saved to build

1. import images to js file

```javascript
import big from '../assets/big.jpeg';
import small from '../assets/small.jpeg';
```

2. add webpack rule

```javascript
    {
    // Which file types to look for?
    test: /\.(jpe?g|png|gif|svg)$/,
    // !important order maters!
    use: [
        // add aditional settings to url-loader
        // when we pass options we put it into object
        {
        loader: 'url-loader',
        // look for 40000 bytes
        options: { limit: 40000 }
        },
        'image-webpack-loader'
    ]
    }
```

3. needs file loader to run:
   npm install --save-dev file-loader

4. larger image will be saved to build folder smaller will be added to bundle as base64 raw data

- small - we cam assign it to tags using js
- big - more complex solution due to absolute path

# fixing issues with paths

```javascript
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: 'build/'
  },
```

1. Url-loader by default will add the path from the import statment in the javascript files

2. publicPath property will not only be used bu url-loader it will be used by any other loader using direct file referance
