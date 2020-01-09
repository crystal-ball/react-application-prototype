import React from 'react'
import { Flex, Heading } from 'componentry'

import { Footer, Header } from '@/components/universal'

export default function OptimizationsScreen() {
  return (
    <Flex direction='column' className='flex-grow-1'>
      <Header />
      <Flex direction='column' px='xl' py='base'>
        <Heading textAlign='center' mb='xl'>
          React, Redux, and Optimizations
        </Heading>
      </Flex>
      <Footer />
    </Flex>
  )
}
