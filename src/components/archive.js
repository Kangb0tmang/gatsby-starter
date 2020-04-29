import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { useBlogPosts } from "../hooks/use-blog-posts"

const ArchiveList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  a {
    font-size: 0.8rem;
    text-decoration: underline;
    color: #524763;
  }
`

const Archive = () => {
  const { edges } = useBlogPosts()

  return (
    <>
      <aside>
        <h3>Archive</h3>
        <ArchiveList>
          {edges.map(edge => (
            <li key={edge.node.frontmatter.slug}>
              <Link to={`/posts${edge.node.frontmatter.slug}`}>
                {edge.node.frontmatter.title}
              </Link>
            </li>
          ))}
        </ArchiveList>
      </aside>
    </>
  )
}

export default Archive
