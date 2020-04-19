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
      py='md'
    >
      <Icon
        data-testid='heart'
        id='heart'
        fontColor='love'
        mr='xs'
        // Stroke is to provide an example of toHaveStyle
        style={{ stroke: '##a8ffdb' }}
      />
      <Text fontColor='accent' mb={0}>
        Make something awesome!
      </Text>
    </Flex>
  )
}
Footer.displayName = 'Footer'
