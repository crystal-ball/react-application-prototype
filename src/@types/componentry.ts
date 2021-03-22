declare module 'componentry/types/Icon/Icon' {
  interface IconProps {
    variant?: 'feather'
  }
}

declare module 'componentry/types/Text/Text' {
  interface TextProps {
    color: 'accent'
    variant:
      | 'display-1'
      | 'heading-1'
      | 'heading-2'
      | 'heading-3'
      | 'subtitle-1'
      | 'subtitle-2'
      | 'lead'
      | 'body'
  }
}

declare module 'componentry/types/utils/types' {
  interface UtilityProps {
    backgroundColor: 'ultra' | 'overlay'
    borderColor: '100' | '300' | 'primary'
    fontColor: 'love' | 'warning'
  }
}

export {}
