import { useStaticQuery, graphql } from "gatsby"

export const useImages = () => {
  const { file } = useStaticQuery(
    graphql`
      query ImageQuery {
        file(relativePath: { regex: "/bg/" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `
  )
  return file
}
