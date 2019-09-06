import React from 'react'
import { storiesOf } from '@storybook/react'
import { Block, Header } from 'componentry'

const Welcome = () => (
  <Block>
    <Header textAlign='center' mt={50}>
      It&apos;s hacking time{' '}
      <span role='img' aria-label='alien monster emoji'>
        👾
      </span>
    </Header>
    <Block maxWidth={800} m='30px auto' />
  </Block>
)

storiesOf('Welcome').add('to Storybook development', () => <Welcome />)
