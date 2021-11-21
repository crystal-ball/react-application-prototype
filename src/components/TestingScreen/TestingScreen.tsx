import { Flex } from 'componentry'

import { mainAreaCx } from '@/components/App/layout'
import { Footer, Header } from '@/components/universal'
import TestingContents from './TestingContents.mdx'

export default function TestingScreen(): JSX.Element {
  return (
    <Flex className={mainAreaCx} direction='column'>
      <Header />

      <Flex className='flex-grow' direction='column' px='xl'>
        <TestingContents />
      </Flex>

      <Footer />
    </Flex>
  )
}
