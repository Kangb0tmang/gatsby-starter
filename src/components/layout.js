/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { Spring } from "react-spring/renderprops"
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
  margin: 1rem auto;
`

const Layout = ({ children, location }) => {
  const { title } = useSiteMetadata()
  const file = useImages()

  return (
    <>
      <Header siteTitle={title} />
      <Spring
        from={{ height: location.pathname === "/" ? 100 : 200 }}
        to={{ height: location.pathname === "/" ? 200 : 100 }}
      >
        {styles => (
          <div style={{ overflow: "hidden", ...styles }}>
            <Img fluid={file.childImageSharp.fluid} />
          </div>
        )}
      </Spring>
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

Layout.defaultProps = {
  location: {},
}

export default Layout
