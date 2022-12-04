import { graphql, useStaticQuery } from "gatsby";

type SiteMetaData = {
  title: string;
  description: string;
  image: string;
  siteUrl: string;
};

export const useSiteMetadata = (): SiteMetaData => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          image
          siteUrl
        }
      }
    }
  `);

  return data.site.siteMetadata;
};
