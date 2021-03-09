type ApplicationRoute = 'home' | 'stack' | 'jest' | 'react' | 'layouts' | 'notFound'

export const routeDetails: Record<ApplicationRoute, { path: string }> = {
  home: {
    path: '/',
  },
  stack: {
    path: '/application-stack/:package?',
  },
  jest: {
    path: '/jest',
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
