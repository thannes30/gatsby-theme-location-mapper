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
    console.log('NODE SLUG = ', node.fields.slug);
    actions.createPage({
      path: node.fields.slug,
      component: require.resolve("./src/templates/location.js"),
      context: { slug: node.fields.slug }
    });
  });

  // create our all locations page
  actions.createPage({
    path: '/locations',
    component: require.resolve("./src/templates/all-locations.js"),
    context: { 
      name: 'Locations'
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

    return path.join(basePath, dir, 'locations', node.name);
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
  check if there's a content directory and if not create locations dir
*/
exports.onPreBootstrap = ({ store }, options) => {
  const { program } = store.getState();
  const basePath = options.basePath || "locations";
  const dir = path.join(program.directory, basePath);
  if (!fs.existsSync(dir)) {
    mkdirp.sync(dir);
  }
};
