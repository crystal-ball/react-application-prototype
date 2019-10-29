import React from 'react'
import { Flex, Icon } from 'componentry'
import { css } from '@emotion/core'

import { Header } from '@/components/universal'
import CodeClimate from '@/media/code-climate.svg'
import Cypress from '@/media/cypress.svg'
import Renovate from '@/media/renovate.svg'
import Github from '@/media/github.svg'
import Zeit from '@/media/zeit.svg'

const rightContainerStyles = css`
  width: 60%;
  min-height: 100%;
`

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

export default function StackScreen() {
  return (
    <Flex direction='column' css={rightContainerStyles}>
      <Header />

      <h1>Application stack</h1>
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
  )
}
