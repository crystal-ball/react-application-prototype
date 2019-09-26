import { addDecorator, addParameters, configure } from '@storybook/react'
import { themes } from '@storybook/theming'
import { withKnobs } from '@storybook/addon-knobs'

// Application base styles, icons, etc.
import './app-setup'

// Global decorators for all stories
addParameters({
  options: {
    showPanel: true,
    panelPosition: 'right',
    storySort: (a, b) => {
      // Shift the intro story to the top
      if (a[0] === 'react-application-prototype--page') return -1
      // Alphabetically sort the rest
      return a[0].localeCompare(b[0])
    },
    theme: {
      brandTitle: 'React App Prototype',
      ...themes.dark,
    },
  },
})

addDecorator(withKnobs)

// --- Require all stories in /src 🎉 --

configure(require.context('../src', true, /\.stories\.(js|mdx)$/), module)
