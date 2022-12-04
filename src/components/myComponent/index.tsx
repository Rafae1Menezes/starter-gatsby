import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import CaixaDeSom from "../../images/caixa-de-som.svg";
import { image, images, titulo } from "./index.module.scss";

export const MyComponent = () => (
  <>
    <h2 className={titulo}>Meu Componente</h2>
    <div className={images}>
      <StaticImage
        src="../../images/artistas.png"
        alt="Artistas"
        placeholder="blurred"
        width={374}
        height={346}
        className={image}
      />
      <CaixaDeSom className={image} />
    </div>
  </>
);
