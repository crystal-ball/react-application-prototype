/* global module */

import React from 'react'
import { storiesOf } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'

import Header from './Header'

storiesOf('App', module).add('<Header />', () => (
  <MemoryRouter initialEntries={['/best-practices']}>
    <Header />
  </MemoryRouter>
))
