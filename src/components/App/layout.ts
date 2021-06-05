import { css } from '@linaria/core'

export const appGridCx = css`
  display: grid;
  width: 100%;
  min-height: 100vh;

  grid-template-areas: 'hero' 'main';

  @media (min-width: theme('breakpoints.lg')) {
    & {
      grid-template-columns: 2fr 3fr;
      grid-template-areas: 'hero main';
    }
  }
`

export const heroAreaCx = css`
  grid-area: hero;
`

export const mainAreaCx = css`
  grid-area: main;
`
