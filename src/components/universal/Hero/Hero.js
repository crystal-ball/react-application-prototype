import React from 'react'
import { Anchor, Text } from 'componentry'

import Github from '@/media/github.svg'
import classes from './hero.scss'

export default function Hero() {
  return (
    <div className={classes.container} data-testid='hero-img'>
      <div className={classes.background}>
        <Text variant='display-1' textAlign='center' mt={80}>
          React Application Prototype
        </Text>

        <Anchor data-testid='github-anchor' href='https://github.com/crystal-ball'>
          <Github className={classes.icon} />
        </Anchor>
      </div>
    </div>
  )
}
Hero.displayName = 'Hero'
