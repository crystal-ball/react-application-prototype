import React from 'react'
import { Flex, Icon, Text } from 'componentry'

import { component } from './footer.scss'

const Footer = () => (
  <>
    <Flex className={component} align='center' justify='center' p={5}>
      <Text size='lg' mb={0}>
        <Icon id='cog' mr={5} />
        Configuration Generator
      </Text>
    </Flex>
    <Flex as='footer' className='mx-3' align='center' justify='end'>
      <Text textAlign='right' mb={0}>
        <Icon id='warning' className='text-warning' mr={5} /> Warning: This package
        contains awesomeness!
      </Text>
    </Flex>
  </>
)

export default Footer
