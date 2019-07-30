const ghpages = require("gh-pages")

ghpages.publish(
  "public",
  {
    branch: "master",
    repo: "https://github.com/thannes30/gatsby-theme-location-mapper.github.io.git",
  },
  () => {
    console.log("Deploy Complete!")
  }
)
