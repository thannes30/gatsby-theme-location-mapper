const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---theme-src-templates-location-js": hot(preferDefault(require("/Users/thannes/sites/code/gatsby-theme-location-mapper/theme/src/templates/location.js"))),
  "component---theme-src-templates-all-locations-js": hot(preferDefault(require("/Users/thannes/sites/code/gatsby-theme-location-mapper/theme/src/templates/all-locations.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/thannes/sites/code/gatsby-theme-location-mapper/demo/.cache/dev-404-page.js")))
}

