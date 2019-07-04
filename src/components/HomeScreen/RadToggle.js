import React from 'react'
import { useDispatch } from 'react-redux'

import { updateRad } from '@/dux/app'

const RadToggle = () => {
  console.log('RadToggle render')
  const dispatch = useDispatch()

  return (
    <div>
      <button onClick={() => dispatch(updateRad())} type='button'>
        Toggle radness
      </button>
    </div>
  )
}

export default RadToggle
