const fs = require("fs");
const path = require("path");
const mkdirp = require("mkdirp");

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allFile {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic("Error loading locations mdx files - ", result.errors);
  }

  // build individual location pages
  result.data.allFile.nodes.forEach(node => {
    console.log("NODE SLUG = ", node.fields.slug);
    actions.createPage({
      path: node.fields.slug,
      component: require.resolve("./src/templates/location.js"),
      context: { slug: node.fields.slug }
    });
  });

  // create our all locations page
  actions.createPage({
    path: "/locations/all",
    component: require.resolve("./src/templates/all-locations.js"),
    context: {
      name: "Locations"
    }
  });

};

exports.onCreateNode = ({ node, actions }, options) => {
  if (node.internal.type !== "File") {
    return;
  }

  // Get post path
  const toPostPath = node => {
    // Using the path plugin from Node
    // Break apart the relative path for the file
    // and give us the directory

    // console.log("node = ", node);
    const { dir } = path.parse(node.relativePath);
    const basePath = options.basePath || "/";

    return path.join(basePath, dir, "locations", node.name);
  };

  const slug = toPostPath(node);
  actions.createNodeField({
    node,
    name: "slug",
    value: slug
  });

};

/*
  Runs before Gatsby does things
  check if there"s a locations directory and if not create locations dir and example location file
*/
exports.onPreBootstrap = ({ store }, options) => {
  const { program } = store.getState();
  const basePath = options.basePath || "locations";
  const dir = path.join(program.directory, basePath);
  if (!fs.existsSync(dir)) {
    mkdirp.sync(dir);
  }
  fs.writeFile("/" + dir + "/all.mdx", "---\nname: All\n---\n\n# Store Locator - All Locations\n\nHere are all of our store locations. Click on a location for more information!\n\n\nAdd more MDX files with frontmatter to add more locations!", (err) => {
    if (err) throw err;
    console.log("All location file created at " + dir + "/all.mdx");
  });
  fs.writeFile("/" + dir + "/kansas.mdx", "---\nname: Kansas\nlat: 39.828\nlng: -98.579\nhours: 9AM-5PM\ndays: M-F\naddress: Lebanon, KS\ndescription: Come visit us at the geographical center of the United States!\n---\n\n# Example!\n\nThis is an example location file, create more MDX files with frontmatter to add more locations!.", (err) => {
    if (err) throw err;
    console.log("Test location file created at " + dir + "/example.mdx");
  });
};
