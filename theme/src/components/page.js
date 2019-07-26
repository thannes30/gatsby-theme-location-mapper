import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Layout, Header, Main, Container, Footer } from "theme-ui"

const Page = (pageData) => {
  console.log('pageData from page component > ', pageData);
  return (
    <Layout>
      <Header>
        <Container>
          <h1>Location Mapper</h1>
        </Container>
      </Header>
      <Main>
        <Container>
          <MDXRenderer locations={pageData.locations}>{pageData.body}</MDXRenderer>
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
