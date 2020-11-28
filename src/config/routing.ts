type ApplicationRoute = 'home' | 'stack' | 'react' | 'layouts' | 'notFound'

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
  layouts: {
    path: '/layouts',
  },
  notFound: {
    path: '(.*)',
  },
}
