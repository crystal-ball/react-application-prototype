# Testing

## Linting

- Source files are linted with `eslint-config-eloquence`

## Unit testing

- Unit tests are run using `jest`
- React components are rendered and inspected using `@testing-library/react`
- Jest's `expect` is extended with `@testing-library/jest-dom` for useful DOM
  assertions.

## Acceptance testing

- Acceptance tests are run using `cypress`

## Recipes

### Routing

Components that require a router can be tested using the `MemoryRouter` router
provider.

```js
const { queryByText } = render(
  <MemoryRouter initialEntries={['/']}>
    <RoutingComponent />
  </MemoryRouter>,
)
```

## Future

- Add jest-axe for a11y validations?
