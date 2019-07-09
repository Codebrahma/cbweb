import React from 'react'
import { ThemeProvider } from 'bricks'
import theme from './theme'

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