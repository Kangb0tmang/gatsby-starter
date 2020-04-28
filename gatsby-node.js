/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")

// graphql, actions passed in via Gatsby's build tool
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  createPage({
    path: "/somefakepage",
    component: path.resolve("./src/components/postLayout.js"),
  })
}
