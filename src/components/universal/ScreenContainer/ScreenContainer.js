import React from 'react'
import { bool, node, oneOf, string } from 'prop-types'
import cx from 'classnames'
import { Block, Flex, useMedia } from 'componentry'

export default function ScreenContainer({ children, className, flex, ...rest }) {
  const { sm } = useMedia()
  const Container = flex ? Flex : Block

  const paddingSize = sm ? 'md' : 0
  return (
    <Container
      className={cx(className, 'flex-grow-1')}
      pr={paddingSize}
      pl={paddingSize}
      {...rest}
    >
      {children}
    </Container>
  )
}

ScreenContainer.defaultProps = {
  className: '',
  direction: 'column',
  flex: true,
}

ScreenContainer.propTypes = {
  children: node.isRequired,
  className: string,
  direction: oneOf(['column', 'row']),
  flex: bool,
}
