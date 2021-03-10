import { Flex, Text } from 'componentry'

import { Footer, Header } from '@/components/universal'
import layoutClasses from '@/components/App/layouts.css'

/** LayoutsScreen */
export default function LayoutsScreen() {
  return (
    <Flex className={layoutClasses.main} direction='column'>
      <Header />

      <Flex className='flex-grow' direction='column' px='xl'>
        <Text variant='heading-1' textAlign='center' pt='lg'>
          Application layouts system
        </Text>
        <Text variant='heading-3'>System summary</Text>
        <ol>
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
