import React from 'react'
import { shape, string } from 'prop-types'
import { Flex, Heading, Icon, Text } from 'componentry'
import { css } from '@emotion/core'

import { Header } from '@/components/universal'
import CodeClimate from '@/media/code-climate.svg'
import Cypress from '@/media/cypress.svg'
import Renovate from '@/media/renovate.svg'
import Github from '@/media/github.svg'
import Zeit from '@/media/zeit.svg'

const integrationContainerStyles = css`
  display: flex;
  align-items: center;
  width: 75px;
  height: 75px;
  margin: 0 10px;
  color: #fff;

  svg {
    fill: currentColor;
  }
`

export default function StackScreen({ params }) {
  return (
    <Flex direction='column' className='flex-grow-1'>
      <Header />

      <Flex direction='column' px='xl' py='base'>
        <Heading textAlign='center' mb='xl'>
          Application stack
        </Heading>
        <div>App libraries with approx bundle weights</div>
        <h4>
          <Icon id='education' /> Workflow integrations
          <Flex justify='center'>
            <div css={integrationContainerStyles}>
              <Renovate />
            </div>
            <div css={integrationContainerStyles}>
              <CodeClimate />
            </div>
            <div css={integrationContainerStyles}>
              <Github />
            </div>
            <div css={integrationContainerStyles}>
              <Cypress />
            </div>
            <div css={integrationContainerStyles}>
              <Zeit />
            </div>
          </Flex>
        </h4>
      </Flex>
      {params.library && <Text>{params.library}</Text>}
    </Flex>
  )
}
StackScreen.displayName = StackScreen

StackScreen.propTypes = {
  params: shape({ library: string }).isRequired,
}
