import { css } from '@linaria/core'
import { Block, Link, Text } from 'componentry'

import { heroAreaCx } from '@/components/App/layout'
import Github from '@/media/github.svg'

// The container element will expand to match the height of the content in main,
// then the inner .background element uses position sticky to stay in view when
// app is scrolled
const backgroundCx = css`
  position: sticky;
  top: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-image: url('./radpack-bg.jpg');
  background-position: center center;
`

const iconCx = css`
  width: 64px;
  height: 64px;
  fill: theme('colors.secondary.500');
`

export function Hero({ title }: HeroProps): JSX.Element {
  return (
    <Block className={heroAreaCx} borderColor='300' borderRight>
      <div className={backgroundCx} data-testid='hero-img'>
        <Text variant='display-1' align='center' mt={80}>
          {title}
        </Text>

        <Link data-testid='github-anchor' href='https://github.com/crystal-ball'>
          <Github className={iconCx} />
        </Link>
      </div>
    </Block>
  )
}

type HeroProps = {
  /** Application title */
  title: string
}
