import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Flex, Box, InputText, OutlinedButton, P } from "bricks";
import { navigate } from "gatsby";
import styled from "@emotion/styled";
import { css } from 'bricks';

const Error = styled('p')(
  css({
    color: 'red',
    fontSize: 0,
    margin: '2px 0',
  })
)

const ContactForm = ({ referrer }) => {
  const [isCaptchaVerified, setCaptchaVerified] = useState(false);
  const [formValues, setFormvalues] = useState({
    email: '',
    msg: '',
  })
  const [errors, setErrors] = useState({
    msg: false,
    email: false,
    captcha: false,
  })

  const onSubmit = (e) => {
    e.preventDefault();

    if (!isCaptchaVerified) {
      setErrors({ ...errors, captcha: true})
    } else {
      setErrors({
        msg: false,
        email: false,
        captcha: false,
      });

      let xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
          navigate('/thank-you')
        }
      };
      xhttp.open("POST", "https://api.formik.com/submit/codebrahma/contact", true);
      xhttp.setRequestHeader("Content-Type", "application/json");
      xhttp.send(JSON.stringify(formValues));
    }
  }

  const onChange = ({target: { name, value }}) => {
    if (name === 'msg') {
      if (new RegExp(/[^\u0000-\u007F]+/).test(value)) {
        setErrors({ ...errors, msg: true})
      } else {
        setErrors({ ...errors, msg: false})
      }
    } else if (name === 'email') {
      if (new RegExp(/\.ru$/).test(value)) {
        setErrors({ ...errors, email: true})
      } else {
        setErrors({ ...errors, email: false})
      }
    }
    setFormvalues({ ...formValues, [name]: value})
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="hidden"
        name="_next"
        value="https://codebrahma.com/thank-you"
      />
      <input type="hidden" name="referrer" value={referrer} />
      <Flex flexWrap="wrap" flexDirection="column">
        <Box width={[1, 1 / 2]}>
          <InputText
            size="25"
            rows="5"
            width={1}
            required
            as="textarea"
            name="msg"
            backgroundColor="black.4"
            borderWidth={0}
            borderRadius={3}
            placeholder="&#128172; Tell us about your idea"
            value={formValues.msg}
            onChange={onChange}
          />
          {errors.msg && <Error>Please enter the message in English</Error>}
        </Box>
        <Box width={[1, 1 / 2]} mt={1}>
          <InputText
            width={1}
            name="email"
            type="email"
            required
            backgroundColor="black.4"
            borderWidth={0}
            borderRadius={3}
            placeholder="@ Email address"
            value={formValues.email}
            onChange={onChange}
          />
          {errors.email && <Error>Please provide a valid email</Error>}
        </Box>
        <Box mt='1'>
          <ReCAPTCHA
            sitekey="6LeFW-8UAAAAABYFkKUu6fKNwYFL-p6JngDJV4jI"
            onChange={() => setCaptchaVerified(!isCaptchaVerified)}
          />
          {!isCaptchaVerified && errors.captcha && <Error>Please verify you are not a robot</Error>}
        </Box>
        <Box width={[1, 1 / 3]} mt={1}>
          <OutlinedButton borderRadius={3}>
            Submit
          </OutlinedButton>
        </Box>
      </Flex>
    </form>
  )
}

export default ContactForm
