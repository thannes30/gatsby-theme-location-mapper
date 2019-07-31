/*
  If I wanna use a custom URL for my documents, pass
  it in as the basePath, otherwise it'll default to /
  contentPath controls the folder, which defaults to locations/
*/

module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-location-mapper",
      options: {}
    }
  ],
  pathPrefix: "/gatsby-theme-location-mapper"
};
