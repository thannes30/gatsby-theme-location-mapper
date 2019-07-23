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
  console.log(data)

  let allLocationsData = []
  let pageBody = ''
  data.allMdx.edges.forEach(edge => {
    if (edge.node.frontmatter.name !== 'Locations') {
      allLocationsData.push(edge.node.frontmatter)
    } else {
      pageBody = edge.node.body
    }
  });

  console.log('allLocationsData = ', allLocationsData);

  const page = {
    body: pageBody,
    allLocationsData: allLocationsData
  };
  return <Page {...page} />;
};

export default Default;
