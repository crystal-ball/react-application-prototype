import React from 'react'
import { Anchor, Flex, Typography } from 'componentry'

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
        <Typography variant='display-1' align='center'>
          The Order
          <br />
          of the
          <br />
          Crystal Code Wizards
        </Typography>
        <div>
          <Anchor data-testid='github-anchor' href='https://github.com/crystal-ball'>
            <Github className={classes.icon} />
          </Anchor>
        </div>
      </Flex>
    </div>
  )
}
Hero.displayName = 'Hero'
