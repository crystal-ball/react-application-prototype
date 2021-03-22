import { Flex } from 'componentry'

import { Footer, Header } from '@/components/universal'
import layoutClasses from '@/components/App/layouts.css'
import TestingContents from './TestingContents.mdx'

export default function TestingScreen(): JSX.Element {
  return (
    <Flex className={layoutClasses.main} direction='column'>
      <Header />

      <Flex className='flex-grow' direction='column' px='xl'>
        <TestingContents />
      </Flex>

      <Footer />
    </Flex>
  )
}
