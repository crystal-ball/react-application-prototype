/* eslint-disable react/no-array-index-key */

import Highlight, { type Language, defaultProps } from 'prism-react-renderer'

import { radicalTheme } from './radical-prism-theme'

type CodeBlockProps = {
  children: string
  className?: string
}

// https://mdxjs.com/guides/syntax-highlighting#build-a-codeblock-component
export function CodeBlock({
  children,
  className = 'language-text',
}: CodeBlockProps): JSX.Element {
  // ℹ️ Passed className is from MDX parser
  const language = className.replace(/language-/, '') as Language

  return (
    <Highlight {...defaultProps} code={children} language={language} theme={radicalTheme}>
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
