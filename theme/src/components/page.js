import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";

const Page = ({ body, location  }) => (
  <>
    <MDXRenderer location={location}>{body}</MDXRenderer>
  </>
);

export default Page;
