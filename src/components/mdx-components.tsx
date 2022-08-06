import { Text } from 'componentry'
import { CodeBlock } from './universal'

// Configure components that will be used to render elements parsed out by MDX
export const mdxComponents = {
  h1: (props) => <Text variant='h1' {...props} />,
  h2: (props) => <Text variant='h2' {...props} />,
  h3: (props) => <Text variant='h3' {...props} />,
  ol: (props) => <ol className='list-disc list-inside' {...props} />,
  ul: (props) => <ul className='list-disc list-inside' {...props} />,
  pre: (props) => <div {...props} />,
  code: CodeBlock,
}
