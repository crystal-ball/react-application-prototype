/* eslint-disable import/no-unused-modules */

import React from 'react'
import { useSelector } from 'react-redux'
import { Flex, Typography } from 'componentry'

import { Footer, Header } from '@/components/universal'
import { getPackage } from '@/dux/packages'

export default function OptimizationsScreen() {
  const selectedPackage = useSelector(getPackage)

  return (
    <Flex direction='column' className='flex-grow-1'>
      <Header />
      <Flex direction='column' px='xl' py='md'>
        <Typography variant='heading-1' textAlign='center' mb='xl'>
          React, Redux, and Optimizations
        </Typography>

        {selectedPackage && (
          <div>
            <Typography variant='heading-3'>Package details</Typography>
            <Typography>{selectedPackage.name}</Typography>
            <Typography>{selectedPackage.size}</Typography>
          </div>
        )}
      </Flex>
      <Footer />
    </Flex>
  )
}
