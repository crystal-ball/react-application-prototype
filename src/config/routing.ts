type ApplicationRoute =
  | 'home'
  | 'stack'
  | 'react'
  | 'testing'
  | 'layouts'
  | 'workers'
  | 'notFound'

export const routeDetails: Record<ApplicationRoute, { path: string }> = {
  home: {
    path: '/',
  },
  stack: {
    path: '/application-stack/:package?',
  },
  react: {
    path: '/react',
  },
  testing: {
    path: '/testing',
  },
  layouts: {
    path: '/layouts',
  },
  workers: {
    path: '/workers',
  },
  notFound: {
    path: '(.*)',
  },
}
