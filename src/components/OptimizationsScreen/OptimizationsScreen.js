import { useSelector } from 'react-redux'
import { Flex, Typography } from 'componentry'

import { Footer, Header } from '@/components/universal'
import { selectPackage } from '@/dux/packages'

export default function OptimizationsScreen() {
  const selectedPackage = useSelector(selectPackage('componentry'))

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
            <Typography>{selectedPackage.description}</Typography>
          </div>
        )}
      </Flex>
      <Footer />
    </Flex>
  )
}
