import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Nav from "./common/nav"
import { H2 } from './common/atoms'

const logo = (title) => {
  return () =>
    (
      <H2 marginTop='0' padding='0'>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          {title}
        </Link>
      </H2>
    )
}

const links = [
  {title: 'Contact', link: '/contact'},
  {title: 'Pricing', link: '/pricing'},
  {title: 'FAQ', link: '/faq'},
]

const Header = ({ siteTitle }) => {
  return (
  <header>
    <div>
      <Nav 
        logo={logo(siteTitle)}
        links={links}
      />
    </div>
  </header>
)
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
