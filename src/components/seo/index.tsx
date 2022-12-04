import React from "react";
import Helmet from "react-helmet";
import { useSiteMetadata } from "../../hooks/use-site-metadata";

export interface ISEO {
  children?: JSX.Element;
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}

export const Seo = (props: ISEO) => {
  const defaults = useSiteMetadata();

  const title = props.title || defaults.title;
  const description = props.description || defaults.description;
  const image = new URL(props.image || defaults.image, defaults.siteUrl);
  const url = new URL(props.path || "/", defaults.siteUrl);

  return (
    <Helmet>
      <title>{title}</title>
      <link rel="canonical" href={url.href} />
      <meta name="description" content={description} />
      {image && <meta name="image" content={image.href} />}

      {/* Facebook */}
      <meta property="og:url" content={url.href} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta name="og:image" content={image.href} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:url" content={url.href} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image.href} />

      {/* @TODO trocar o icon */}
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>🎤</text></svg>"
      />
      {props.children}
    </Helmet>
  );
};
