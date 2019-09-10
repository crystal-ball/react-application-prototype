import React from 'react'
import { Flex, Icon, Text } from 'componentry'
import { css } from '@emotion/core'

const footerStyles = ({ colors }) => css`
  padding: 15px 30px;
  background: ${colors.lightGrayBg};

  .icon-heart {
    color: #fcc4dd;
  }
`

const Footer = () => (
  <Flex as='footer' align='center' justify='center' css={footerStyles}>
    <Text mb={0} color='white'>
      <Icon id='heart' />
      Make something awesome!
    </Text>
  </Flex>
)

export default Footer
