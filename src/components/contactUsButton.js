import React from "react"
import PropTypes from "prop-types"
import { navigate } from "gatsby"
import Button from './button';

const ContactUsButton = ({ text }) => (
  <Button
    variant='solid'
    color='tint'
    bg='primary'
    borderColor='primary'
    onClick={() => navigate("/contact")}
  >
    {text}
  </Button>
);

ContactUsButton.defaultProps = {
  text: 'Contact Us'
};

ContactUsButton.propTypes = {
  text: PropTypes.string
};

export default ContactUsButton;
