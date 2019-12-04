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
    <Flex as='nav' css={headerContainerStyles} justify='end'>
      <Block css={anchorBlockStyles}>
        <Link data-testid='nav-link' to='/'>
          Introduction
        </Link>
      </Block>
      <Block css={anchorBlockStyles}>
        <Link data-testid='nav-link' to='/application-stack'>
          Application Stack
        </Link>
      </Block>
    </Flex>
  )
}
Header.displayName = 'Header'
