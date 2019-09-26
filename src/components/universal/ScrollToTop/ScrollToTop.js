import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Component handles scrolling the application back to top of window after every
 * route change. It should be included only once per app.
 * Ref: https://reacttraining.com/react-router/web/guides/scroll-restoration
 */
export default function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return null
}
