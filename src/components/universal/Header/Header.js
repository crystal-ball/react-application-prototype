import React from 'react'
import { Block, Flex } from 'componentry'

import Link from '../Link/Link'

export default function Header() {
  return (
    <Flex borderBottom as='nav' justify='end' background='overlay' borderColor='mito'>
      <Block p='md'>
        <Link data-testid='nav-link' to='/'>
          Introduction
        </Link>
      </Block>
      <Block p='md'>
        <Link data-testid='nav-link' to='/application-stack'>
          Application Stack
        </Link>
      </Block>
    </Flex>
  )
}
Header.displayName = 'Header'
