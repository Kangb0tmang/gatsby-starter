/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import styled from "styled-components"
import { useImages } from "../hooks/use-images"
import { useSiteMetadata } from "../hooks/use-site-metadata"

import Header from "./header"
import Archive from "./archive"
import "./layout.css"

const MainLayout = styled.main`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 40px;
  max-width: 90%;
  margin: 0 auto;
`

const Layout = ({ children }) => {
  const { title } = useSiteMetadata()
  const file = useImages()

  console.log(file)

  return (
    <>
      <Header siteTitle={title} />
      <Img fluid={file.childImageSharp.fluid} />
      <MainLayout>
        <div>{children}</div>
        <Archive />
      </MainLayout>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
