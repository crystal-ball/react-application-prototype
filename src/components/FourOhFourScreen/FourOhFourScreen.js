import React from 'react'
import { Block, Flex, Icon } from 'componentry'
import { css } from '@emotion/core'

import { Link } from '@/components/universal'

const featherStyles = css`
  stroke: currentColor;
  fill: none;
`

export default function FourOhFourScreen() {
  return (
    <div className='flex-grow-1'>
      <h2 className='text-center mt-5'>
        <Icon className='text-warning' css={featherStyles} id='alert-triangle' /> The page
        you are looking for can&apos;t be found 😣
      </h2>
      <Flex className='mt-5' justify='center'>
        <Block className='mx-3'>
          <Link to='/'>Introduction</Link>
        </Block>
        <Block className='mx-3'>
          <Link to='/application-stack'>Application Stack</Link>
        </Block>
      </Flex>
    </div>
  )
}
FourOhFourScreen.displayName = 'FourOhFourScreen'
