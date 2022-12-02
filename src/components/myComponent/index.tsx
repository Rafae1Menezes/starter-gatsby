import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export const MyComponent = () => (
  <>
    <h1>Hello World</h1>
    <StaticImage
      src="../../images/artistas.png"
      alt="Artistas"
      placeholder="blurred"
      width={240}
      height={180}
    />
  </>
);
