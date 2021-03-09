/** webpack SVG imports */

declare module '*.svg' {
  const icon: React.FunctionComponent<{ className?: string }>
  export default icon
}

declare module '*.jpg' {
  const jpg: string
  export default jpg
}

declare module '*.css' {
  const styles: Record<string, string>
  export default styles
}

declare module '*.scss' {
  const styles: Record<string, string>
  export default styles
}

declare module '*.mdx' {
  const MarkdownComponent: React.FunctionComponent
  export default MarkdownComponent
}
