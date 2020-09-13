/* eslint-disable react/no-array-index-key */

import React from 'react'
import Highlight, { Language, defaultProps } from 'prism-react-renderer'

interface CodeBlockProps {
  children: string
  className?: string
}

// https://mdxjs.com/guides/syntax-highlighting#build-a-codeblock-component
export const CodeBlock: React.FC<CodeBlockProps> = ({
  children,
  className,
}: CodeBlockProps) => {
  // ℹ️ Passed className is from MDX parser
  const language = className.replace(/language-/, '') as Language

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
  className: 'language-text',
}
