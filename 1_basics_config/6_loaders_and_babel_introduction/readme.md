# Module loaders are additional features for webpack

- loaders do additional pre-processing on files before bundling those
- can handle images
- can handle css
- can run babel

## babel

-turns es6 to es5 code

## adding babel

1. Required modules:

- babel-loader - to make babel work with webpack
- babel-core - knows how to parse code to diffrent version
- babe-preset-env - rules on how to compile the code. i.e translate const to var, translate ()=> to function

### install command:

npm install --save-dev babel-loader babel-core babel-preset-env

## configuring babel in webpack

We need to make sure babel will not touch files like css
