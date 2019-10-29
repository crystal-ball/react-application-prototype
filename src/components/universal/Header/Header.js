import React from 'react'
import { Block, Flex } from 'componentry'
import { css } from '@emotion/core'

import Link from '../Link/Link'

const headerContainerStyles = ({ backgroundColors, borderColors }) => css`
  background: ${backgroundColors.overlay};
  border-bottom: 1px solid ${borderColors.mito};
`

const anchorBlockStyles = css`
  padding: 16px;
`

export default function Header() {
  return (
    <Flex as='nav' justify='end' css={headerContainerStyles}>
      <Block css={anchorBlockStyles}>
        <Link to='/' data-testid='nav-link'>
          Introduction
        </Link>
      </Block>
      <Block css={anchorBlockStyles}>
        <Link to='/application-stack' data-testid='nav-link'>
          Application Stack
        </Link>
      </Block>
    </Flex>
  )
}
