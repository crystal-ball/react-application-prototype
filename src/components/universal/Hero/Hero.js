import React from 'react'
import { Flex, Heading } from 'componentry'
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
  font-family: 'Alex Brush', cursive;
  color: #a8ffdb;
  text-shadow: #f70777 0px 0 15px;
`

// TODO: use theme to set fontSize to an h1
const iconStyles = css`
  fill: #a8ffdb !important;
`

export default function Hero() {
  return (
    <div css={leftContainerStyles} data-testid='hero-img'>
      <Flex
        align='center'
        css={stickyTitleContainerStyles}
        direction='column'
        justify='center'
      >
        <Heading align='center' className='display-1' css={titleStyles}>
          The Order
          <br />
          of the
          <br />
          Crystal Code Wizards
        </Heading>
        <div>
          <a
            className='h1'
            data-testid='github-anchor'
            href='https://github.com/crystal-ball'
          >
            <Github className='icon' css={iconStyles} />
          </a>
        </div>
      </Flex>
    </div>
  )
}
Hero.displayName = 'Hero'
