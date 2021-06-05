import { Flex } from 'componentry'

import { Footer, Header } from '@/components/universal'
import { mainArea } from '@/components/App/layout'
import ReactContents from './ReactContents.mdx'

/** LayoutsScreen */
export default function LayoutsScreen() {
  return (
    <Flex className={mainArea} direction='column'>
      <Header />

      <Flex className='flex-grow' direction='column' px='xl'>
        <ReactContents />
      </Flex>

      <Footer />
    </Flex>
  )
}
