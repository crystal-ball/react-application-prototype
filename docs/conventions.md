# Conventions

_Crystal Ball Projects React application conventions_

- Tools configuration is end staged managed by the application. Configuration
  generators are called to provide base configs, and then passed through to
  tools or updated as needed for app needs. This allows fine grained config
  customization while still lifting common setup boilerplate into individual
  dependencies.

## State management

- Redux conventions
- Component state and React context

## Styling

- Base styles, component styles, utility styles

## Toolchain

#### Docs

- Include a README with sections on
  - Project header and badges
  - Installing deps and setting up docker containers
  - Contributing link
- License
- Contributing guidelines (TODO)
- Docs directory with longer guides, eg a guide on some app feature biz logic

#### Bundling

- webpack w/ @crystal-ball/webapck-base
- Babel

#### Developing

- Prettier w/ @crystal-ball/prettier-base
- ESLint w/ eslint-config-eloquence
- .jsconfig.json for instructing VSCode how to autocomplete `@` alias

#### Source

- Setup all application level dependencies and wrappers in the index.js
- `src/components` by screen with a root App and shared universal
- Redux code in the dux directory
- Separate all API logic into the `/src/api` dir to make mocking and unit
  testing better

#### Testing w/ Jest+Cypress

TODO

#### Developing w/ Storybook

TODO
