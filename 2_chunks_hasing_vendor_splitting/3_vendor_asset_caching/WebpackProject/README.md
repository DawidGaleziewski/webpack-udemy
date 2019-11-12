# Improve bundle size/performance

1. we will create two chunks of code using code splitting

- separate our code and vendor code
  This is due to the fact we will update the dependencies for vendors rarly and our code very often if not daily.

2. Asset cache
   --> fileA.js -> have I downloaded you? -> NO -> Ok, downloading

--> fileA.js -> have I downloaded you? -> YES -> I do nothing

## Split code into:

- vendor.js
- bundle.js

## setup

1. Unlike the spliting with System.import we will simply code what is going to be outputed as vendor and what as bundle

# auto script adding

npm install --save-dev html-webpack-plugin

# Chunk hasing:

by default browser checks the name of the file and wont download it again if it is the same

# Hashing:

to make browsers on the user end download new .js files we want to rename them everytime we change the file. We use hash that will change everytime we change the code

# Cleaning up js files

-if we use windows, this is normally rm
npm install --save-dev rimraf

-update the package.json to run clean each time we run build
"clean": "rimraf dist",
"start": "node.js ./src/index.js",
"build": "npm run clean && webpack"
