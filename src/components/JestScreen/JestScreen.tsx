import { Flex } from 'componentry'

import { Footer, Header } from '@/components/universal'
import layoutClasses from '@/components/App/layouts.css'
import JestContents from './JestContents.mdx'

export default function JestScreen(): JSX.Element {
  return (
    <Flex className={layoutClasses.main} direction='column'>
      <Header />

      <Flex className='flex-grow-1' direction='column' px='xl'>
        <JestContents />
      </Flex>

      <Footer />
    </Flex>
  )
}
