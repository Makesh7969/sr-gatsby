const strapiConfig = {
  apiURL: process.env.GATSBY_STRAPI_URL,
  accessToken: process.env.GATSBY_STRAPI_TOKEN,
  collectionTypes: ["menu", "page", "burger-menu"],
  singleTypes: [],
  remoteFileHeaders: {
    /**
     * Customized request headers
     * For http request with a image or other files need authorization
     * For expamle: Fetch a CDN file which has a security config when gatsby building needs
     */
    Referer: process.env.GATSBY_SITE_URL,
    // Authorization: "Bearer eyJhabcdefg_replace_it_with_your_own_token",
  },
};

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */
require("dotenv").config({
  path: `.env`,
});
/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
  siteMetadata: {
    title: `SR Graphics`,
    siteUrl: process.env.GATSBY_SITE_URL,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
  ],
};
