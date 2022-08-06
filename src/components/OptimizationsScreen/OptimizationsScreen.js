import { Flex, Text } from 'componentry'
import { useSelector } from 'react-redux'

import { Footer, Header } from '@/components/universal'
import { selectDependency } from '@/dux/dependencies'

export default function OptimizationsScreen() {
  const selectedPackage = useSelector(selectDependency('componentry'))

  return (
    <Flex direction='column' className='flex-grow'>
      <Header />
      <Flex direction='column' px={12} py={4}>
        <Text variant='h1' textAlign='center' mb={12}>
          React, Redux, and Optimizations
        </Text>

        {selectedPackage && (
          <div>
            <Text variant='h3'>Package details</Text>
            <Text>{selectedPackage.name}</Text>
            <Text>{selectedPackage.version}</Text>
          </div>
        )}
      </Flex>
      <Footer />
    </Flex>
  )
}
