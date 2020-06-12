import React from "react"
import { Box, Input  } from '@chakra-ui/core';
import Button from './button';

const ContactForm = ({ referrer }) => (
  <form action="https://api.formik.com/submit/codebrahma/contact" method="post">
    <input
      type="hidden"
      name="_next"
      value="https://codebrahma.com/thank-you"
    />
    <input type="hidden" name="referrer" value={referrer} />
    <Box width={[1, 1 / 2]}>
      <Input
        size="25"
        rows="5"
        required
        as="textarea"
        name="msg"
        backgroundColor="black.4"
        borderWidth={0}
        borderRadius={3}
        placeholder="&#128172; Tell us about your idea"
        padding={1}
      />
    </Box>
    <Box width={[1, 1 / 2]} mt={1}>
      <Input
        name="email"
        type="email"
        required
        backgroundColor="black.4"
        borderWidth={0}
        borderRadius={3}
        placeholder="@ Email address"
        lineHeight='1'
        padding={1}
        height='auto'
      />
    </Box>
    <Box width={[1, 1 / 3]} mt={1}>
      <Button type='submit' variant='outline'>Submit</Button>
    </Box>
  </form>
)

export default ContactForm
