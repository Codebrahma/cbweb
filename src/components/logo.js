import { H2 } from "bricks"
import Link from "./link"
import React from "react"

export const Logo = ({ title }) => (
  <H2 marginTop={[0, 0]}>
    <Link
      to="/"
      style={{
        textDecoration: `none`,
      }}
    >
      {title}
    </Link>
  </H2>
)
