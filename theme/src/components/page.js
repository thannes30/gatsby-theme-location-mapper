import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Layout, Header, Main, Container, Footer } from "theme-ui";
import LocationsNav from "./locationsnav";
import LeafletMap from "./leafletmap";
import "./page.css";

const Page = (pageData) => {

  return (
    <Layout>
      <Header>
        <Container>
          <h1>Location Mapper</h1>
        </Container>
      </Header>
      <Main>
        <Container>
          <MDXRenderer>{pageData.body}</MDXRenderer>
          <LocationsNav locations={pageData.locations} />
          <LeafletMap locations={pageData.locations} />
        </Container>
      </Main>
      <Footer>
        <Container>
          <p>Location Mapper</p>
        </Container>
      </Footer>
    </Layout>
  )

};

export default Page;
