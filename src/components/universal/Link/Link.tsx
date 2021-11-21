import { Link as ComponentryLink } from 'componentry'
import { updatePathname } from 'dux-routing'
import { ReactNode } from 'react'
import { useDispatch } from 'react-redux'

type LinkProps = {
  children: ReactNode
  /** Route path to link to */
  to: string
  /** Search params to append to route path */
  searchParams?: Record<string, string>

  // TODO: remove with Componentry types
  mr?: string
}

export function Link({ children, to, searchParams, ...rest }: LinkProps): JSX.Element {
  const dispatch = useDispatch()

  return (
    <ComponentryLink
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
    </ComponentryLink>
  )
}
