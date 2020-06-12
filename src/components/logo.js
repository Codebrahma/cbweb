import Link from "./link"
import React from "react"
import { H2 } from "../components/typography";

export const Logo = ({ title }) => (
  <H2 marginTop={[0, 0]} >
    <Link to="/">{title}</Link>
  </H2>
)
