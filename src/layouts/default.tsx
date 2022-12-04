import React from "react";
import { Seo } from "../components/seo";

interface IDefaultLayout {
  children?: JSX.Element;
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}

export const DefaultLayout = ({ children, ...props }: IDefaultLayout) => (
  <>
    <Seo {...props} />
    {children}
  </>
);
