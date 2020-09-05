import React from 'react'
import { Anchor, Block, Text } from 'componentry'

import Github from '@/media/github.svg'
import layoutClasses from '@/components/App/layouts.scss'
import classes from './hero.scss'

export default function Hero() {
  return (
    <Block borderRight className={layoutClasses.heroSection} borderColor='300'>
      <div className={classes.background} data-testid='hero-img'>
        <Text variant='display-1' textAlign='center' mt={80}>
          React Application Prototype
        </Text>

        <Anchor data-testid='github-anchor' href='https://github.com/crystal-ball'>
          <Github className={classes.icon} />
        </Anchor>
      </div>
    </Block>
  )
}
Hero.displayName = 'Hero'
