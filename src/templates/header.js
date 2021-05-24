import PropTypes from "prop-types"
import React from "react"
import { Nav } from 'bricks'
import { Link } from 'gatsby'
import { Logo } from '../components/logo'

const links = [
  {title: 'Work', link: '/work'},
  {title: 'Process', link: '/our-process'},
  {title: 'FAQ', link: '/faq'},
  {title: 'Blog', link: '/blog'},
  {title: 'Contact', link: '/contact'},
]

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <Nav 
        logo={Logo({title: siteTitle})}
        links={links}
        GatsbyLink={Link}
      />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
