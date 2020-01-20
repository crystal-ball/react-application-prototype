import React from 'react'
import { addParameters } from '@storybook/react'
import { create } from '@storybook/theming/create'
import { DocsContainer, Meta } from '@storybook/addon-docs/blocks'
import { Provider } from 'react-redux'
import { Theme } from 'componentry'
import { ThemeProvider as EmotionTheme } from 'emotion-theming'

import configureStore from '@/dux/store'
import { componentryTheme } from '@/theme/componentry'
import { emotionTheme } from '@/theme/emotion'

// Include app global SASS in all stories for accurate styling representation
import './app-setup'

const store = configureStore()

addParameters({
  options: {
    // This is here instead of manager because of a bug in theming docs
    theme: create({
      base: 'dark',
      brandTitle: 'React App Prototype',
      appContentBg: '#181424',
    }),

    storySort: (a, b) => {
      // Shift the intro story to the top
      if (a[0] === 'react-application-prototype--page') return -1
      if (b[0] === 'react-application-prototype--page') return 1
      // Alphabetically sort the rest
      return a[1].id.localeCompare(b[1].id)
    },
  },

  docs: {
    // eslint-disable-next-line react/prop-types
    container: ({ children, context }) => (
      <DocsContainer context={context}>
        <Provider store={store}>
          <Theme theme={componentryTheme}>
            <EmotionTheme theme={emotionTheme}>{children}</EmotionTheme>
          </Theme>
        </Provider>
      </DocsContainer>
    ),
    components: {
      Meta,
    },
  },
})
