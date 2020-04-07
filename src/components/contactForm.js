import React from "react"
import { Flex, Box, InputText, OutlinedButton } from "bricks"

const ContactForm = ({ referrer }) => {
  return (
    <form action="https://api.formik.com/submit/codebrahma-website/contact-form" method="post">
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
