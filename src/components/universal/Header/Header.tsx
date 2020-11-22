import { Block, Flex } from 'componentry'

import { Link } from '../Link/Link'

export function Header(): JSX.Element {
  return (
    <Flex as='nav' justify='end' backgroundColor='overlay' borderColor='100' borderBottom>
      <Block p='md'>
        <Link data-testid='nav-link' to='/'>
          Overview
        </Link>
      </Block>
      <Block p='md'>
        <Link data-testid='nav-link' to='/application-stack'>
          Application Stack
        </Link>
      </Block>
      <Block p='md'>
        <Link data-testid='nav-link' to='/react'>
          React Handbook
        </Link>
      </Block>
      <Block p='md'>
        <Link data-testid='nav-link' to='/layouts'>
          Application Layouts
        </Link>
      </Block>
    </Flex>
  )
}
