import { Block, Flex } from 'componentry'
import { createURI } from 'dux-routing'

import { routeDetails } from '@/config/routing'
import { Link } from '../Link/Link'

export function Header(): JSX.Element {
  return (
    <Flex as='nav' justify='end' backgroundColor='overlay' borderColor='100' borderBottom>
      <Block p='md'>
        <Link data-testid='nav-link' to={routeDetails.home.path}>
          Overview
        </Link>
      </Block>
      <Block p='md'>
        <Link data-testid='nav-link' to={createURI(routeDetails.stack.path, {})}>
          Application Stack
        </Link>
      </Block>
      <Block p='md'>
        <Link data-testid='nav-link' to={routeDetails.react.path}>
          React Handbook
        </Link>
      </Block>
      <Block p='md'>
        <Link data-testid='nav-link' to={routeDetails.jest.path}>
          Jest
        </Link>
      </Block>
      <Block p='md'>
        <Link data-testid='nav-link' to={routeDetails.layouts.path}>
          Application Layouts
        </Link>
      </Block>
    </Flex>
  )
}
