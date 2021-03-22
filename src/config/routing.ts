type ApplicationRoute = 'home' | 'stack' | 'react' | 'testing' | 'layouts' | 'notFound'

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
  notFound: {
    path: '(.*)',
  },
}
