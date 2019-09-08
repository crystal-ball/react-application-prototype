import React from 'react'
import { Flex, Icon, Text } from 'componentry'

import { component } from './footer.scss'

const Footer = () => (
  <Flex as='footer' className={component} align='center' justify='center'>
    <Text mb={0} color='white'>
      <Icon id='heart' />
      Make something awesome!
    </Text>
  </Flex>
)

export default Footer
