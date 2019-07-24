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
        {listItems(data)}
      </ul>
    )}
  />
)

const listItems = (data) => {
  let items = data.allFile.nodes;
  return items.map((node, idx) => {
    let name = node.fields.slug.split('/').slice(2);
    let formattedName = name.join('/');
    return (
      <li key={idx}><Link to={node.fields.slug}>{formattedName.replace('/[_-]/g', ' ')}</Link></li>
    )
  })
}

export default LocationsNav;
