import { Link } from 'gatsby';
import { styled } from 'bricks'

const link = styled(Link)`
  text-decoration:none;
  color: inherit;
  &:visited {
    color: inherit;
  }
  &:hover {
    text-decoration: underline;
  }
`
export default link;