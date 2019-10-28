import React from 'react'
import { Flex, Header } from 'componentry'
import { css } from '@emotion/core'

import Github from '@/media/github.svg'
import radpackBg from './radpack-bg.jpg'

const leftContainerStyles = css`
  width: 40%;
  background-image: url(${radpackBg});
  background-position: center center;
  position: sticky;
`

const stickyTitleContainerStyles = css`
  position: sticky;
  top: 3rem;
  padding-top: 3rem;
`

const titleStyles = css`
  color: #a8ffdb;
  text-shadow: #f70777 0px 0 15px;
`

// TODO: use theme to set fontSize to an h1
const iconStyles = css`
  fill: #a8ffdb !important;
`

export default function Hero() {
  return (
    <div css={leftContainerStyles}>
      <Flex
        justify='center'
        align='center'
        direction='column'
        css={stickyTitleContainerStyles}
      >
        <Header
          align='center'
          className='font-ornamental display-1'
          data-testid='title'
          css={titleStyles}
        >
          The Order
          <br />
          of the
          <br />
          Crystal Code Wizards
        </Header>
        <div>
          <a
            href='https://github.com/crystal-ball'
            className='h1'
            data-testid='github-anchor'
          >
            <Github className='icon' css={iconStyles} />
          </a>
        </div>
      </Flex>
    </div>
  )
}
