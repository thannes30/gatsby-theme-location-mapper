import React from "react";
import { graphql } from "gatsby";
import Page from "../components/page";

// Declaring query here allows us to shadow components
export const query = graphql`
  query($slug: String!) {
    file(fields: { slug: { eq: $slug } }) {
      childMdx {
        frontmatter {
          name
          lat
          lng
          hours
          days
          address
          description
        }
        body
      }
    }
  }
`;

const Default = ({ data }) => {
  const page = {
    body: data.file.childMdx.body,
    location: {
      lat: data.file.childMdx.frontmatter.lat,
      lng: data.file.childMdx.frontmatter.lng,
      hours: data.file.childMdx.frontmatter.hours,
      days: data.file.childMdx.frontmatter.days,
      address: data.file.childMdx.frontmatter.address,
      description: data.file.childMdx.frontmatter.description,
    }
  };
  return <Page {...page} />;
};

export default Default;
