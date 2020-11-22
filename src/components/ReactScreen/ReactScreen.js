import { Flex } from 'componentry'

import { Footer, Header } from '@/components/universal'
import layoutClasses from '@/components/App/layouts.css'
import ReactContents from './ReactContents.mdx'

/** LayoutsScreen */
export default function LayoutsScreen() {
  return (
    <Flex className={layoutClasses.main} direction='column'>
      <Header />

      <Flex className='flex-grow-1' direction='column' px='xl'>
        <ReactContents />
      </Flex>

      <Footer />
    </Flex>
  )
}
