import React, { Component } from "react"
import { graphql } from 'gatsby'
import Layout from "./layout"

// Static query can be used anywhere
// Doesn't accept variables, can't use context
// Page query must be used on pages

export default class postLayout extends Component {
  render() {
    return (
      <Layout>
        <h1>Post Layout</h1>
      </Layout>
    )
  }
}

export const query = graphql`
  query PostQuery {
    markdownRemark(frontmatter: {
      slug: {
        eq: "/third-post"
      }
    }) {
      html
      frontmatter {
        title
        date
        slug
      }
    }
  }
`