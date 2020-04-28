import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Flex, Box, InputText, OutlinedButton } from "bricks";
import { navigate } from "gatsby";

const ContactForm = ({ referrer }) => {
  const [isCaptchaVerified, setCaptchaVerified] = useState(false);
  const [formValues, setFormvalues] = useState({
    email: '',
    msg: '',
  })

  const onSubmit = (e) => {
    e.preventDefault();
    
    if(isCaptchaVerified) {
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

  const onChange = ({target: { name, value }}) => setFormvalues({ ...formValues, [name]: value})

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
        </Box>
        <Box mt='1'>
          <ReCAPTCHA
            sitekey="6LeFW-8UAAAAABYFkKUu6fKNwYFL-p6JngDJV4jI"
            onChange={() => setCaptchaVerified(!isCaptchaVerified)}
          />
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
