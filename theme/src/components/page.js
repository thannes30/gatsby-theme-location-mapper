import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Layout, Header, Main, Container } from "theme-ui"

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
    </Layout>
  )
};

export default Page;
