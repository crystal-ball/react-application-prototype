import React from 'react'
import { useDispatch } from 'react-redux'
import { Button } from 'componentry'

import { dispatchRadToggled } from '@/dux/app'

const RadToggle = () => {
  const dispatch = useDispatch()

  return (
    <div>
      <Button onClick={() => dispatch(dispatchRadToggled())}>Toggle radness</Button>
    </div>
  )
}

export default RadToggle
