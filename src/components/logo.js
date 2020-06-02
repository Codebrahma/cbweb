import Link from "./link"
import React from "react"
import { Box } from "@chakra-ui/core"

export const Logo = ({ title }) => (
  <Box
    as='h2'
    marginTop={[0, 0]}
    fontFamily='TiemposHeadline'
    fontSize={[4, 'desktop.4']}
  >
    <Link
      to="/"
    >
      {title}
    </Link>
  </Box>
)
