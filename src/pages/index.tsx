import { graphql, PageProps, useStaticQuery } from "gatsby";
import * as React from "react";
import { MyComponent } from "../components/myComponent";
import { DefaultLayout } from "../layouts/default";
import "../sass/main.scss";

const IndexPage: React.FC<PageProps> = () => {
  const data = useStaticQuery(graphql`
    query {
      imageSharp(resize: { originalName: { eq: "artistas.png" } }) {
        id
        original {
          src
        }
      }
    }
  `);

  return (
    <DefaultLayout
      title="Página Inicial"
      description="Essa é uma página Inicial"
      image={data?.imageSharp?.original?.src}
    >
      <MyComponent />
    </DefaultLayout>
  );
};

export default IndexPage;
