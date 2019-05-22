import PropTypes from "prop-types"
import React from "react"
import Nav from "./common/nav"
import { Logo } from './common/logo'

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
        logo={Logo({title: siteTitle})}
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
