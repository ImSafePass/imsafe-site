import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { Location } from "@reach/router"

function SEO({ description, lang, meta, title, image }) {
  const { site, file } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            heroDescription
            siteURL
          }
        }
        file(name: { eq: "og-image" }) {
          publicURL
        }
      }
    `
  )

  const ogLogo = file.publicURL
  const md = site.siteMetadata

  const metaDescription = description || md.heroDescription

  const finalTitle = `${title ? `${md.title} - ${title}` : md.title} | ${
    md.description
  }`

  return (
    <Location>
      {({ location }) => (
        <Helmet
          htmlAttributes={{
            lang,
          }}
          title={finalTitle}
          meta={[
            {
              name: `description`,
              content: metaDescription,
            },
            {
              name: `twitter:card`,
              content: `summary`,
            },
            {
              name: `twitter:creator`,
              content: site.siteMetadata.author,
            },
            {
              name: `twitter:title`,
              content: finalTitle,
            },
            {
              name: `twitter:description`,
              content: metaDescription,
            },
            {
              name: `twitter:image`,
              content: image ? `https:${image}` : `${md.siteURL}${ogLogo}`,
            },
            {
              property: `og:title`,
              content: finalTitle,
            },
            {
              property: `og:description`,
              content: metaDescription,
            },
            {
              property: `og:type`,
              content: `website`,
            },
            {
              property: `og:url`,
              content: location.href,
            },
            {
              property: `og:image`,
              content: image || ogLogo,
            },
            {
              property: `og:image:width`,
              content: "1200",
            },
            {
              property: `og:image:height`,
              content: "630",
            },
            {
              property: `og:image:alt`,
              content: finalTitle,
            },
            {
              property: `og:image:secure_url`,
              content: (image || ogLogo).replace("http:", "https:"),
            },
          ].concat(meta)}
        />
      )}
    </Location>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

export default SEO
