import { useStaticQuery, graphql } from "gatsby"

export const useBlogPostListing = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query BlogPostListing {
        allMarkdownRemark(
          limit: 10
          sort: { order: DESC, fields: [frontmatter___date] }
        ) {
          edges {
            node {
              excerpt
              frontmatter {
                date(formatString: "DD MMMM YYYY")
                title
                slug
              }
            }
          }
        }
      }
    `
  )
  return allMarkdownRemark
}
