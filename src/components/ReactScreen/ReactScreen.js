import { Flex } from 'componentry'

import { mainAreaCx } from '@/components/App/layout'
import { mdxComponents } from '@/components/mdx-components'
import { Footer, Header } from '@/components/universal'
import ReactContents from './ReactContents.mdx'

/** LayoutsScreen */
export default function LayoutsScreen() {
  return (
    <Flex className={mainAreaCx} direction='column'>
      <Header />

      <Flex direction='column' px={12} flexGrow>
        <ReactContents components={mdxComponents} />
      </Flex>

      <Footer />
    </Flex>
  )
}
