import { graphql, useStaticQuery } from "gatsby"

import camelCase from "lodash.camelcase"

export const getAssets = allFile =>
  allFile.nodes.reduce(
    (obj, node) => ({
      ...obj,
      [camelCase(node.name)]: node.publicURL,
    }),
    {}
  )

const query = graphql`
  query AssetsQuery {
    allFile {
      nodes {
        publicURL
        relativeDirectory
        name
      }
    }
  }
`

export const useAssets = () => {
  const { allFile } = useStaticQuery(query)
  return getAssets(allFile)
}
