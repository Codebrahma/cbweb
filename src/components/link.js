import { Link } from "gatsby"
import styled from "@emotion/styled"

const link = styled(Link, {
  shouldForwardProp: prop => prop !== "as",
})`
  text-decoration: ${(props) => props.withUnderline ? 'underline' : 'none'};
  color: inherit;
  &:visited {
    color: inherit;
  }
  &:hover {
    text-decoration: underline;
  }
`

Link.defaultProps = {
  withUnderline: false,
};

export default link
