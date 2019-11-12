# static sties

- only static sites
- no backend serving

# changing for production

## plugins:

    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
    })

]

# package.json:

"build": "NODE_ENV=production npm run clean && webpack -p",

- without it webpack will assume we are not running in production
- webpack -p - will minify all the javascript code. Rename some of variables. Removes tabs and comments

# deploying to surge

surge - dist

# github pages

have to use branch:
gh-pages

## make sure only dist folder is pushed:

git subtree push --prefix ./4_deployment_static_sites/1_deployment_options/dist/ origin gh-pages

add new script:
"deploy": "npm run build &&
git subtree push --prefix ./4_deployment_static_sites/1_deployment_options/dist/ origin gh-pages",
