import React from 'react'
import { Flex, Icon, Text } from 'componentry'

export const Footer: React.FC = () => {
  return (
    <Flex
      borderTop
      as='footer'
      align='center'
      backgroundColor='ultra'
      borderColor='100'
      justify='center'
      mt='xl'
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
