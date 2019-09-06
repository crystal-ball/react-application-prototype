import { addDecorator, addParameters, configure } from '@storybook/react'
import { themes } from '@storybook/theming'
import { withKnobs } from '@storybook/addon-knobs'

// Application base styles, icons, etc.
import './app-setup'

// Global decorators for all stories
addParameters({
  options: {
    showPanel: false,
    theme: {
      brandTitle: 'React App Prototype',
      ...themes.dark,
    },
  },
})

addDecorator(withKnobs)

// 🎉 Load stories
const stories = require.context('../src', true, /.stories.js$/)
function loadStories() {
  // Update app welcome story to be first displayed
  const orderedStories = stories.keys()
  orderedStories.unshift(orderedStories.pop())
  orderedStories.forEach(filename => stories(filename))
}
configure(loadStories, module)
