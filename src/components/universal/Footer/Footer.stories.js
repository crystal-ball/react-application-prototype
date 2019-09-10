/* global module */

import React from 'react'
import { storiesOf } from '@storybook/react'

import Footer from './Footer'
import { emotionWrapper } from '@/theme/emotion'

storiesOf('Universal', module).add('<Footer />', () => emotionWrapper(<Footer />))
