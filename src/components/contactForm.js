import React from 'react';
import { Flex, Box, InputText, InputButton } from 'bricks'

const ContactForm = ({ referrer }) => {
  return (
    <form
      action="https://formspree.io/anand@codebrahma.com"
      method="post">
      <input type="hidden" name="_next" value="https://codebrahma.com/thank-you"/>
      <input type="hidden" name="referrer" value={referrer} />
        <Flex flexWrap='wrap' flexDirection='column'>
          <Box width={[1,1/2]}>
            <InputText size='25' rows="5" style={{width:'100%'}} required as='textarea' name='msg' placeholder='Tell us about your idea'/>
          </Box>
          <Box width={[1,1/2]} mt={1}>
            <InputText style={{width:'100%'}} name='email' type='email' required placeholder='Email address'/>
          </Box>
          <Box width={[1,1/3]} mt={1}>
            <InputButton/>
          </Box>
        </Flex>
    </form>
  )
}

export default ContactForm;