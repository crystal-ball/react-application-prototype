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
    <Flex align='center' as='footer' css={footerStyles} justify='center'>
      <Text fontColor='light' mb={0}>
        <Icon data-testid='heart' id='heart' /> Make something awesome!
      </Text>
    </Flex>
  )
}
Footer.displayName = 'Footer'
