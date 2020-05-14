/* eslint-disable */
/** webpack SVG imports */

declare module '*.svg' {
  const icon: React.FunctionComponent<{ className?: string }>
  export default icon
}

declare module '*.jpg' {
  const jpg: string
  export default jpg
}

declare module '*.scss' {
  const styles: { [key: string]: string }
  export default styles
}
