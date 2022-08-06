import { Flex, Text } from 'componentry'

import { mainAreaCx } from '@/components/App/layout'
import { Footer, Header } from '@/components/universal'

/** LayoutsScreen */
export default function LayoutsScreen() {
  return (
    <Flex className={mainAreaCx} direction='column'>
      <Header />

      <Flex className='flex-grow' direction='column' px={12}>
        <Text variant='h1' textAlign='center' pt={12}>
          Application layouts system
        </Text>
        <Text variant='h3' pt={6}>
          System summary
        </Text>
        <ol className='pt-4'>
          <li>Use Grid to setup application and screen layouts</li>
          <li>Use Flexbox to align and position items in layout sections</li>
          <li>
            Prefer margin top and margin left for setting spacing. This makes it easy to
            use a sibling selector to apply rules to lists.
          </li>
        </ol>
      </Flex>

      <Footer />
    </Flex>
  )
}
