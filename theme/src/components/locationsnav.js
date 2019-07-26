import React from "react";
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
  return items.map((node, i) => {
    let name = node.fields.slug.split('/').slice(2);
    let formattedName = name.join('/');
    console.log(i);
    return (
      <li key={i}><Link to={node.fields.slug}>{formattedName.replace('/[_-]/g', ' ')}</Link></li>
    )
  })
}

export default LocationsNav;
