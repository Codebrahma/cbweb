import { jsx } from '@emotion/core'
import { Box } from 'bricks'
/** @jsx jsx */
const Category = ({children})=>(
  <Box 
    bg='black.1' color='tint' fontSize='0' 
    px='6px' py='2px' display='inline-block' borderRadius={6}>
    {children}
  </Box>
)
export default Category