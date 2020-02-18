import React from 'react'
import { useSelector } from 'react-redux'
import { Flex, Heading, Text } from 'componentry'

import { Footer, Header } from '@/components/universal'
import { getPackage } from '@/dux/packages'

export default function OptimizationsScreen() {
  const selectedPackage = useSelector(getPackage)

  return (
    <Flex direction='column' className='flex-grow-1'>
      <Header />
      <Flex direction='column' px='xl' py='base'>
        <Heading textAlign='center' mb='xl'>
          React, Redux, and Optimizations
        </Heading>

        {selectedPackage && (
          <div>
            <Heading variant='heading-3'>Package details</Heading>
            <Text>{selectedPackage.name}</Text>
            <Text>{selectedPackage.size}</Text>
          </div>
        )}
      </Flex>
      <Footer />
    </Flex>
  )
}
