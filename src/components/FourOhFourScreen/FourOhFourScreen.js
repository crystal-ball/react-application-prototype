import React from 'react'
import { Block, Flex, Icon } from 'componentry'

import { Link } from '@/components/universal'

const FourOhFourScreen = () => (
  <div className='flex-grow-1'>
    <h2 className='text-center mt-5'>
      <Icon id='warning' className='text-warning' /> The page you are looking for
      can&apos;t be found 😣
    </h2>
    <Flex justify='center' className='mt-5'>
      <Block className='mx-3'>
        <Link to='/'>Introduction</Link>
      </Block>
      <Block className='mx-3'>
        <Link to='/application-stack'>Application Stack</Link>
      </Block>
    </Flex>
  </div>
)

export default FourOhFourScreen
