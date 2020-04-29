import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"

import logo from "../images/logo.svg"

const HeaderWrapper = styled.div`
  background: dodgerblue;
  margin-bottom: 1.45rem;
`

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1rem;
  img {
    margin-bottom: 0;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <img
            // Temporary styles for tutorial purposes
            style={{
              width: `6.25rem`,
              marginRight: `3.125rem`,
              marginBottom: `0`,
            }}
            src={logo}
            alt="Level Up Tutorials Logo"
          />
          {siteTitle}
        </Link>
      </h1>
    </HeaderContainer>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
