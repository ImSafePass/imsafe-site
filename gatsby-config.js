const path = require("path")

const hero = require("./src/content/home-content").hero

const { S3_BUCKET_NAME } = process.env

module.exports = {
  siteMetadata: {
    title: `ImSafe Health`,
    shortTitle: `ImSafe`,
    description: hero.title,
    heroDescription: hero.subtitle,
    author: `@ImSafePass`,
    siteURL: `https://imsafehealth.com`,
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
        alias: [
          "components",
          "pages",
          "styles",
          "images",
          "utils",
          "content",
        ].reduce(
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
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: S3_BUCKET_NAME,
        protocol: "https",
        hostname: "imsafehealth.com",
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: "https://imsafehealth.com",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
