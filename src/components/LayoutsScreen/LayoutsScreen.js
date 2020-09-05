import React from 'react'
import { Flex, Text } from 'componentry'

import { Footer, Header } from '@/components/universal'

/** LayoutsScreen */
export default function LayoutsScreen() {
  return (
    <Flex className='main-section' direction='column'>
      <Header />
      <Flex className='flex-grow-1'>
        <Text>Hiiii</Text>
      </Flex>
      <Footer />
    </Flex>
  )
}
