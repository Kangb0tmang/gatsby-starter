import React from "react"
import { Link } from "gatsby"
import { useBlogPostListing } from "../hooks/use-blog-listing"

const Listing = () => {
  const { edges } = useBlogPostListing()

  // instead of using 'edge.node', can destructure it to ({ node. })
  return (
    <>
      {edges.map(({ node }) => (
        <article key={node.frontmatter.slug}>
          <Link to={`/posts${node.frontmatter.slug}`}>
            <h2>{node.frontmatter.title}</h2>
          </Link>
          <p>{node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
          <Link to={`/posts${node.frontmatter.slug}`}>Read More</Link>
        </article>
      ))}
    </>
  )
}

export default Listing
