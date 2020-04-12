const path = require("path")

module.exports = {
  siteMetadata: {
    title: `ImSafe Pass`,
    shortTitle: `ImSafe`,
    description: `A secure and private way to share your immune status`,
    heroDescription: `We’re helping society return to post-COVID-19 normal by rebuilding public trust while respecting personal privacy.`,
    author: `@imsafepass`,
    siteURL: `https://imsafepass.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#3341c0`,
        theme_color: `#3341c0`,
        display: `minimal-ui`,
        icon: `src/images/icons/logo-dark.png`,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: ["components", "pages", "styles", "images", "utils"].reduce(
          (obj, el) => ({
            ...obj,
            [`@${el}`]: path.resolve(__dirname, `src/${el}`),
          }),
          {}
        ),
        extensions: ["ts", "scss"],
      },
    },
    {
      resolve: "gatsby-plugin-transition-link",
      options: {
        layout: require.resolve(`./src/components/layout/index.js`),
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Heebo\:400,700`, `Roboto`],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
