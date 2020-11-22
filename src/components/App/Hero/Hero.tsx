import { FC } from 'react'
import { Anchor, Block, Text } from 'componentry'

import Github from '@/media/github.svg'
import layoutClasses from '@/components/App/layouts.css'
import classes from './hero.css'

type HeroProps = {
  /** Application title */
  title: string
}

export const Hero: FC<HeroProps> = ({ title }: HeroProps) => {
  return (
    <Block className={layoutClasses.hero} borderColor='300' borderRight>
      <div className={classes.background} data-testid='hero-img'>
        <Text variant='display-1' textAlign='center' mt={80}>
          {title}
        </Text>

        <Anchor data-testid='github-anchor' href='https://github.com/crystal-ball'>
          <Github className={classes.icon} />
        </Anchor>
      </div>
    </Block>
  )
}
