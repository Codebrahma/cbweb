import React, { Component } from "react"
import PropTypes from "prop-types"
import { Nav } from 'bricks'
import { Logo } from '../components/logo'
import { Link, navigate } from 'gatsby'

const links = [
  {title: 'Work', link: '/work'},
  {title: 'FAQ', link: '/faq'},
  {title: 'Blog', link: '/blog'},
  {title: 'Contact', link: '/contact'},
]

class Header extends Component {

	componentDidMount() {
		if(typeof window !== 'undefined') {
			let userDetails = {}
			let SITE_NAME = window.location.origin;
			document.getElementById('contact-form') &&
			document
				.getElementById('contact-form')
				.addEventListener('submit', (e => {
					e.preventDefault()
					const idea = document.getElementById('idea').value
					const email = document.getElementById('email').value
					document.getElementById('idea').value = ""
					document.getElementById('email').value = ""
	
					const formSubmitData = {
						email,
						idea,
						userDetails,
					}
	
					const url = 'https://hooks.zapier.com/hooks/catch/1041785/21ewe5/'

					const http = new XMLHttpRequest();
					http.open('POST', url)
					http.onreadystatechange = function() {
						if(http.readyState === 4 && http.status === 200) {
							localStorage.setItem('userDetails', JSON.stringify({}))
							navigate('thank-you')
						}
					}
					http.send(JSON.stringify(formSubmitData));
			}))

			const isObjectEmpty = (obj = {}) => {
				return Object.keys(obj).length === 0 && obj.constructor === Object
			}
	
			const distinct = (value, index, self) => {
				return self.indexOf(value) === index;
			}

			const updateUserDetailsWithCurrentUrl = (userDetails, currentUrl) => {
				userDetails.browsedLinks = [...userDetails.browsedLinks, currentUrl]
				userDetails.browsedLinks = userDetails.browsedLinks.filter(distinct)
				localStorage.setItem('userDetails', JSON.stringify(userDetails))
			}

			userDetails = JSON.parse(localStorage.getItem('userDetails')) || {};
			// User already entered site atleast once
			if (!isObjectEmpty(userDetails)) {
				// Extract userDetails from localStorage
				userDetails = JSON.parse(localStorage.getItem('userDetails'));
				updateUserDetailsWithCurrentUrl(userDetails, document.URL);
			} else {
				// If entering first time
				// Set referrer
				userDetails.referrer = (!document.referrer.includes(SITE_NAME) && document.referrer) || '';
				// Clear past links or set it empty
				userDetails.browsedLinks = []
				const currentTimeZone = `${parseInt(new Date().getTimezoneOffset() / -60)}:${Math.abs(new Date().getTimezoneOffset() % 60)}`
				userDetails.timeZone = `UTC${currentTimeZone.startsWith('-') ? '' : '+'}${currentTimeZone}`
				updateUserDetailsWithCurrentUrl(userDetails, document.URL)
			}
		}
	}
	
	render() {
		const { siteTitle } = this.props;
		return (
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
	}
}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
