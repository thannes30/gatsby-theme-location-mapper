module.exports = options => ({
  plugins: [
    "gatsby-plugin-theme-ui",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [`.md`,`.mdx`],
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: options.contentPath || "locations/"
      }
    },
    {
      resolve: "gatsby-plugin-react-leaflet",
      options: {
        linkStyles: true // (default: true) Enable/disable loading stylesheets via CDN
      }
    }
  ]
});
