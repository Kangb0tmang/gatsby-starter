import React from "react"
import { Link } from "gatsby"
import { useBlogPosts } from "../hooks/use-blogposts"

const Archive = () => {
  const { edges } = useBlogPosts()

  return (
    <>
      <aside>
        <h3>Archive</h3>
        <ul>
          {edges.map(edge => (
            <li key={edge.node.frontmatter.slug}>
              <Link to={`/posts${edge.node.frontmatter.slug}`}>
                {edge.node.frontmatter.title}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  )
}

export default Archive
