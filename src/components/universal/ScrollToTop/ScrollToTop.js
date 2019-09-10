import { useEffect } from 'react'
import { node, shape, string } from 'prop-types'
import { withRouter } from 'react-router-dom'

/**
 * Component handles scrolling the application back to top of window after every
 * route change. It should be included only once per app.
 * Ref: https://reacttraining.com/react-router/web/guides/scroll-restoration
 */
const ScrollToTop = ({ location, children }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return children || null
}

ScrollToTop.propTypes = {
  children: node,
  location: shape({
    pathname: string.isRequired,
  }).isRequired,
}
ScrollToTop.defaultProps = {
  children: null,
}

export default withRouter(ScrollToTop)
