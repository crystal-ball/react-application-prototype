import { FC, ReactNode } from 'react'
import { useDispatch } from 'react-redux'
import { Anchor } from 'componentry'
import { updatePathname } from 'dux-routing'

interface LinkProps {
  children: ReactNode
  /** Route path to link to */
  to: string
  /** Search params to append to route path */
  searchParams?: { [x: string]: string }
}

export const Link: FC<LinkProps> = ({
  children,
  to,
  searchParams,
  ...rest
}: LinkProps) => {
  const dispatch = useDispatch()

  return (
    <Anchor
      href={to}
      onClick={(evt) => {
        // Allow browser to handle clicks with special keys
        if (evt.altKey || evt.ctrlKey || evt.metaKey || evt.shiftKey) return

        evt.preventDefault()
        dispatch(updatePathname({ pathname: to, searchParams }))
      }}
      {...rest}
    >
      {children}
    </Anchor>
  )
}
Link.displayName = 'Link'

Link.defaultProps = {
  searchParams: {},
}
