import React, { useState } from "react";
import { StaticQuery, graphql, Link } from "gatsby";

// Declaring query here allows us to shadow components
const LocationsNav = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile {
          nodes {
            fields {
              slug
            }
          }
        }
      }
    `}
    render= {data => (
      <ul>
        {data.allFile.nodes.map((node) =>
          <li><Link to={node.fields.slug}>{node.fields.slug}</Link></li>
        )}
      </ul>
    )}
  />
)

export default LocationsNav;
