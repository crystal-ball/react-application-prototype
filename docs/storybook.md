# Storybook

## Recipes

### Routing

For components that are connected to or render router elements stories must
include a router provider. The `MemoryRouter` router is a simple way to create
stories (and this pattern matches the testing recipe for routing 😃)

```js
import React from 'react'
import { storiesOf } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'

import RoutingComponent from './RoutingComponent'

storiesOf('App').add('<RoutingComponent />', () => (
  <MemoryRouter initialEntries={['/']}>
    <RoutingComponent />
  </MemoryRouter>
))
```
