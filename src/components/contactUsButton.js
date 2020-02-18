import React from "react"
import PropTypes from "prop-types"
import { navigate } from "gatsby"
import { InputButton } from "bricks"

const ContactUsButton = ({ text }) => (
  <InputButton
    borderRadius={3}
    value={text}
    onClick={() => navigate("/contact")}  
  />
);

ContactUsButton.defaultProps = {
  text: 'Contact Us'
};

ContactUsButton.propTypes = {
  text: PropTypes.string
};

export default ContactUsButton;
