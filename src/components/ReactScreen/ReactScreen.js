import React from 'react'
import { Flex, Text } from 'componentry'

import { Footer, Header } from '@/components/universal'
import layoutClasses from '@/components/App/layouts.scss'

/** LayoutsScreen */
export default function LayoutsScreen() {
  return (
    <Flex className={layoutClasses.mainSection} direction='column'>
      <Header />

      <Flex className='flex-grow-1' direction='column' px='xl'>
        <Text variant='heading-1' textAlign='center' pt='lg'>
          React
          <span className='d-inline-block px-xs' aria-label='notes' role='img'>
            📝
          </span>
        </Text>
        <Text variant='heading-3'>Hooks</Text>
        <ol>
          <li>
            <code>useEffect</code> dependencies: use ESLint rules and immutable data
            structures.
          </li>
          <li>
            Use <code>immer</code> to easily make updates to immutable objects
          </li>
        </ol>
      </Flex>

      <Footer />
    </Flex>
  )
}
