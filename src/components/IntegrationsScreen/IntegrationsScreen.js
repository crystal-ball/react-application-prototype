import React from 'react'

import MDX from './MDX.mdx'
import Zeit from './Zeit.mdx'

export default function IntegrationsScreen() {
  return (
    <div>
      <h1>Integrations</h1>
      <div>
        <Zeit />
      </div>
      <div>
        <MDX />
      </div>
    </div>
  )
}
