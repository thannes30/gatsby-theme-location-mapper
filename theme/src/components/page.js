import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";

const Page = (pageData) => {
  console.log('pageData from page component > ', pageData);
  return (
    <>
      <MDXRenderer locations={pageData.locations}>{pageData.body}</MDXRenderer>
    </>
  )
};

export default Page;
