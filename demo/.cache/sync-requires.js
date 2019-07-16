const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---theme-src-templates-default-js": hot(preferDefault(require("/Users/thannes/sites/code/gatsby-theme-location-mapper/theme/src/templates/default.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/thannes/sites/code/gatsby-theme-location-mapper/demo/.cache/dev-404-page.js")))
}

