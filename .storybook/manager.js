import { addons } from '@storybook/addons'

addons.setConfig({
  showPanel: true,
  panelPosition: 'right',
  // This is in preview.js because of a bug with theming docs
  // theme: create({
  //   base: 'dark',
  //   brandTitle: 'React App Prototype',
  // }),
})
