import { H2 } from './atoms'
import Link  from '../link'
import React from 'react'

export const Logo = ({title}) => 
    (
      <H2 marginTop='0' padding='0'>
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