import { Flex, Icon, Text } from 'componentry'

export function Footer(): JSX.Element {
  return (
    <Flex
      as='footer'
      align='center'
      backgroundColor='ultra'
      borderTop={100}
      justify='center'
      mt={12}
      px={12}
      py={4}
    >
      <Icon
        data-testid='heart'
        id='heart'
        color='love'
        mr={1}
        // Stroke is to provide an example of toHaveStyle
        style={{ stroke: '##a8ffdb' }}
      />
      <Text color='muted' mb={0}>
        Make something awesome!
      </Text>
    </Flex>
  )
}
