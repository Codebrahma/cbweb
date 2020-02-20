import { Link } from "gatsby"
import styled from "@emotion/styled"

const link = styled(Link, {
  shouldForwardProp: prop => !["as", "withUnderline"].includes(prop),
})`
  text-decoration: ${props => (props.withUnderline ? "underline" : "none")};
  color: inherit;
  &:visited {
    color: inherit;
  }
  &:hover {
    text-decoration: ${props => (props.withUnderline ? "underline" : "none")};
  }
`

export default link
