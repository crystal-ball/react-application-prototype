import React from 'react'
import { node } from 'prop-types'
import { css } from '@emotion/core'

const screenContainerStyles = css`
  padding-left: 16px;
  padding-right: 16px;

  @media (min-width: 768px) {
    .screen {
      padding: 0;
    }
  }
`

function ScreenContainer({ children }) {
  return <div css={screenContainerStyles}>{children}</div>
}

ScreenContainer.propTypes = {
  children: node.isRequired,
}

export default ScreenContainer
