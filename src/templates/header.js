import PropTypes from "prop-types"
import React from "react"
import Nav from '../components/nav'
import { Logo } from '../components/logo'
import { Link } from 'gatsby'

const links = [
  {title: 'Work', link: '/work'},
  {title: 'Process', link: '/our-process'},
  {title: 'FAQ', link: '/faq'},
  {title: 'Blog', link: '/blog'},
  {title: 'Contact', link: '/contact'},
]

const Header = ({ siteTitle }) => (
  <header>
    <Nav
      logo={Logo({title: siteTitle})}
      links={links}
      GatsbyLink={Link}
    />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
