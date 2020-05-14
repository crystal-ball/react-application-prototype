import React from 'react'
import { Flex, Typography } from 'componentry'

import Github from '@/media/github.svg'
import classes from './hero.scss'

export default function Hero() {
  return (
    <div className={classes.container} data-testid='hero-img'>
      <Flex
        align='center'
        direction='column'
        justify='center'
        className={classes.titleContainer}
      >
        <Typography variant='title' align='center' className={classes.title}>
          The Order
          <br />
          of the
          <br />
          Crystal Code Wizards
        </Typography>
        <div>
          <a
            className='heading-1'
            data-testid='github-anchor'
            href='https://github.com/crystal-ball'
          >
            <Github className={`icon ${classes.icon}`} />
          </a>
        </div>
      </Flex>
    </div>
  )
}
Hero.displayName = 'Hero'
