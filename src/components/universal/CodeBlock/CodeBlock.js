/* eslint-disable react/no-array-index-key */

import React from 'react'
import { node, string } from 'prop-types'
import Highlight, { defaultProps } from 'prism-react-renderer'

// https://mdxjs.com/guides/syntax-highlighting#build-a-codeblock-component
export default function CodeBlock({ children, className: mdxClassName }) {
  const language = mdxClassName.replace(/language-/, '')
  return (
    <Highlight {...defaultProps} code={children} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: '20px' }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
CodeBlock.displayName = 'CodeBlock'

CodeBlock.defaultProps = {
  className: '',
}

CodeBlock.propTypes = {
  children: node.isRequired,
  className: string,
}
