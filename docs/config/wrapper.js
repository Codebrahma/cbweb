import React from 'react'
import { ThemeProvider } from 'bricks'
import theme from './theme'

global.__PATH_PREFIX__ = ''
const Wrapper = ({ children }) => {
  return (
  <ThemeProvider theme={theme}>
    <>
      {children}
    </>
  </ThemeProvider>
)
}
export default Wrapper