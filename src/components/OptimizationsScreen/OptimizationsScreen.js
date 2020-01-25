import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Flex, Heading, ListGroup, Text } from 'componentry'

import { Footer, Header } from '@/components/universal'
import {
  changeMaxPackageSize,
  getPackage,
  getPackages,
  selectPackage,
} from '@/dux/packages'

export default function OptimizationsScreen() {
  const dispatch = useDispatch()
  const packagesList = useSelector(getPackages)
  const selectedPackage = useSelector(getPackage)

  return (
    <Flex direction='column' className='flex-grow-1'>
      <Header />
      <Flex direction='column' px='xl' py='base'>
        <Heading textAlign='center' mb='xl'>
          React, Redux, and Optimizations
        </Heading>

        <Button onClick={() => dispatch(changeMaxPackageSize(10))}>Set to 10Kb</Button>

        <ListGroup>
          {packagesList.map(pkg => (
            <ListGroup.Item
              key={pkg.name}
              active={pkg.id === selectedPackage?.id}
              onClick={() => dispatch(selectPackage(pkg.id))}
            >
              {pkg.name}: {pkg.size}
            </ListGroup.Item>
          ))}
        </ListGroup>

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
