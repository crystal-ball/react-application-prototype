export enum Route {
  Home = 'Home',
  Stack = 'Stack',
  React = 'React',
  Layouts = 'Layouts',
  NotFound = 'NotFound',
}

export const routeDetails: Record<Route, { path: string }> = {
  [Route.Home]: {
    path: '/',
  },
  [Route.Stack]: {
    path: '/application-stack/:package?',
  },
  [Route.React]: {
    path: '/react',
  },
  [Route.Layouts]: {
    path: '/layouts',
  },
  [Route.NotFound]: {
    path: '(.*)',
  },
}
