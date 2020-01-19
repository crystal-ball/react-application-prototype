import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Flex, Heading, ListGroup, Text } from 'componentry'

import { Footer, Header } from '@/components/universal'
import { changeMaxPackageSize, getPackage, getPackages } from '@/dux/packages'

export default function OptimizationsScreen() {
  const dispatch = useDispatch()
  const [selectedPackage, setSelectedPackage] = useState(null)
  const packagesList = useSelector(getPackages)
  const selectedPackageDetails = useSelector(getPackage(selectedPackage))

  return (
    <Flex direction='column' className='flex-grow-1'>
      <Header />
      <Flex direction='column' px='xl' py='base'>
        <Heading textAlign='center' mb='xl'>
          React, Redux, and Optimizations
        </Heading>

        <Button onClick={() => dispatch(changeMaxPackageSize(5))}>Set to 10Kb</Button>

        <ListGroup>
          {packagesList.map(pkg => (
            <ListGroup.Item key={pkg.name} onClick={() => setSelectedPackage(pkg.id)}>
              {pkg.name}: {pkg.size}
            </ListGroup.Item>
          ))}
        </ListGroup>

        {selectedPackage && (
          <div>
            <Heading variant='heading-3'>Package details</Heading>
            <Text>{selectedPackageDetails.name}</Text>
            <Text>{selectedPackageDetails.size}</Text>
          </div>
        )}
      </Flex>
      <Footer />
    </Flex>
  )
}
