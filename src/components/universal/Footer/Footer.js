import React from 'react'
import { Flex, Icon, Text } from 'componentry'
import { css } from '@emotion/core'

const footerStyles = ({ backgroundColors }) => css`
  margin-top: auto;
  padding: 15px 30px;
  background: ${backgroundColors.ultra};

  .icon-heart {
    color: #fcc4dd;
  }
`

export default function Footer() {
  return (
    <Flex as='footer' align='center' justify='center' css={footerStyles}>
      <Text mb={0} fontColor='light'>
        <Icon id='heart' data-testid='heart' /> Make something awesome!
      </Text>
    </Flex>
  )
}
Footer.displayName = 'Footer'
