import type { HeadFC, PageProps } from "gatsby";
import * as React from "react";
import { MyComponent } from "../components/myComponent";
import "../sass/main.scss";

const IndexPage: React.FC<PageProps> = () => <MyComponent />;

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
