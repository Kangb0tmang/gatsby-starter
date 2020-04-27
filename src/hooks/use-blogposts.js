import { useStaticQuery, graphql } from "gatsby"

export const useBlogPosts = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query BlogPostArchive {
        allMarkdownRemark(
          limit: 5
          sort: { order: DESC, fields: [frontmatter___date] }
        ) {
          edges {
            node {
              frontmatter {
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
