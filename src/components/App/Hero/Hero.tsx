import { Block, Link, Text } from 'componentry'

import Github from '@/media/github.svg'
import layoutClasses from '@/components/App/layouts.css'
import classes from './hero.css'

type HeroProps = {
  /** Application title */
  title: string
}

export function Hero({ title }: HeroProps): JSX.Element {
  return (
    <Block className={layoutClasses.hero} borderColor='300' borderRight>
      <div className={classes.background} data-testid='hero-img'>
        <Text variant='display-1' textAlign='center' mt={80}>
          {title}
        </Text>

        <Link data-testid='github-anchor' href='https://github.com/crystal-ball'>
          <Github className={classes.icon} />
        </Link>
      </div>
    </Block>
  )
}
