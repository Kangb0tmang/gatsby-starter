import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Archive = () => {
  const data = useStaticQuery(graphql`
    query BlogPostArchive {
      allMarkdownRemark {
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
  `)

  return (
    <>
      <aside>
        <h3>Archive</h3>
        <ul>
          {data.allMarkdownRemark.edges.map(edge => (
            <li>{edge.node.frontmatter.title}</li>
          ))}
        </ul>
      </aside>
    </>
  )
}

export default Archive
