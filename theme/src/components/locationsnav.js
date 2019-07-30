import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import { Styled } from "theme-ui";

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
      <Styled.ul>
        {listItems(data)}
      </Styled.ul>
    )}
  />
)

const listItems = (data) => {
  let items = data.allFile.nodes;
  return items.map((node, i) => {
    let name = node.fields.slug.split('/').slice(2);
    let formattedName = name.join('/');
    return (
      <Styled.li key={i}><Link to={node.fields.slug}>{formattedName.replace('/[_-]/g', ' ')}</Link></Styled.li>
    )
  })
}

export default LocationsNav;
