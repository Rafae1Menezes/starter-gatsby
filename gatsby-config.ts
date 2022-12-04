import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Gatsby Starter", // @TODO adicionar nome do site
    description: "Este é um site starter de Gatsby", // @TODO adicionar descrição ao site
    // @TODO The URL of the image for your object. It should be at least 600×315 pixels,
    // but 1200×630 or larger is preferred (up to 5MB). Stay close to a 1.91:1 aspect ratio to avoid cropping.
    // but adhere to Twitter’s file size requirement of less than 1MB.
    image:
      "http://store-images.microsoft.com/image/apps.13711.9007199266244561.53fdcc53-7bae-4701-9055-0a03236fba72.e8e6d4f6-db7a-4ffb-aeb0-1f7b0f9422d6",
    siteUrl: "https://www.yourdomain.tld" // @TODO Adicionar url do site
  },
  graphqlTypegen: {
    typesOutputPath: "src/types/gatsby-types.d.ts"
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/
        }
      }
    }
  ]
};

export default config;
