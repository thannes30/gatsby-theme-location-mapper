module.exports = options => ({
  plugins: [
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
    }
  ]
});
