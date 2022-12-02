import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import CaixaDeSom from "../../images/caixa-de-som.svg";
import * as styles from "./index.module.scss";

export const MyComponent = () => (
  <>
    <h2 className={styles.titulo}>Meu Componente</h2>
    <StaticImage
      src="../../images/artistas.png"
      alt="Artistas"
      placeholder="blurred"
      width={374}
      height={346}
      className={styles.image1}
    />
    <CaixaDeSom className={styles.image2} />
  </>
);
