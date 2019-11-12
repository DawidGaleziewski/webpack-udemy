# webpack dev server

- watches all project files
- rebuild project when something changes
- updates only files that changed
- auto update the browser

## config

npm install --save-dev webpack-dev-server@2.2.0-rc.0

package.json script:
"server": "webpack-dev-server"

# Gotchas:

- after changing webpack.config we need to re-run webpack server
- it runs shorter due to fact it only updates changed files
- if we delete the dis folder webpack server still will run the app
- it runs app in memory, not from hdd!
- !!!important we still need to run webpack build! - otherwise the changes will be only in the os memory and not saved to the files
