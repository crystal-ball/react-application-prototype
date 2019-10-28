import React from 'react'
import { node } from 'prop-types'
import { css } from '@emotion/core'

const screenContainerStyles = ({ spacing }) => css`
  display: flex;
  max-width: 100%;
  padding-left: ${spacing.base};
  padding-right: ${spacing.base};
  flex-grow: 1;

  @media (min-width: 768px) {
    padding: 0;
  }
`

export default function ScreenContainer({ children }) {
  return <div css={screenContainerStyles}>{children}</div>
}

ScreenContainer.propTypes = {
  children: node.isRequired,
}
