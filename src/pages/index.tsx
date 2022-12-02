import type { HeadFC, PageProps } from "gatsby";
import * as React from "react";
import { MyComponent } from "../components/myComponent";

const IndexPage: React.FC<PageProps> = () => (
  <>
    <h1>hellow</h1>
    <MyComponent />
  </>
);

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
