import { Flex, Text } from 'componentry'
import { useSelector } from 'react-redux'

import { Footer, Header } from '@/components/universal'
import { selectDependency } from '@/dux/dependencies'

export default function OptimizationsScreen() {
  const selectedPackage = useSelector(selectDependency('componentry'))

  return (
    <Flex direction='column' className='flex-grow'>
      <Header />
      <Flex direction='column' px='xl' py='md'>
        <Text variant='heading-1' align='center' mb='xl'>
          React, Redux, and Optimizations
        </Text>

        {selectedPackage && (
          <div>
            <Text variant='heading-3'>Package details</Text>
            <Text>{selectedPackage.name}</Text>
            <Text>{selectedPackage.version}</Text>
          </div>
        )}
      </Flex>
      <Footer />
    </Flex>
  )
}
