import React from 'react'
import { Flex, Icon, Text } from 'componentry'

export default function Footer() {
  return (
    <Flex
      as='footer'
      align='center'
      background='ultra'
      justify='center'
      mt='auto'
      px='xl'
      py='base'
    >
      <Text fontColor='light' mb={0}>
        <Icon data-testid='heart' id='heart' fontColor='love' /> Make something awesome!
      </Text>
    </Flex>
  )
}
Footer.displayName = 'Footer'
