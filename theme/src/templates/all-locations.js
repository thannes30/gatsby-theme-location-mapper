import React from "react";
import { graphql } from "gatsby";
import Page from "../components/page";

// Declaring query here allows us to shadow components
export const query = graphql`
  query {
    allMdx {
      edges {
        node {
          frontmatter {
            address
            days
            description
            hours
            lat
            lng
            name
            title
          }
          body
        }
      }
    }
  }
`;

const Default = ({ data }) => {
  let allLocationsData = []
  let pageBody = ''
  data.allMdx.edges.forEach(edge => {
    if (edge.node.frontmatter.name !== 'All Locations') {
      allLocationsData.push(edge.node.frontmatter)
    } else {
      pageBody = edge.node.body
    }
  });

  const pageData = {
    body: pageBody,
    locations: allLocationsData
  };

  return <Page {...pageData} />;

};

export default Default;
