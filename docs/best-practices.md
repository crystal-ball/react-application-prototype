# Best practices

## Naming conventions

- `fetch<NAME>` -> API fetch fns
- `get<NAME>` -> Redux selector fns
- `handle<NAME>` -> Component event handler fns
- `retreive<NAME>` -> Local storage retrieval fns
- `on<NAME>` -> DOM event handlers (built-in)
- `persist<NAME>` -> Local storage persist fns
- `set<NAME>` -> useState hook update fns
- `update<NAME>` -> Redux action creators

- append `UPDATED` to Redux action types

## Lazy load route components

Using `lazy` to load route components on demand is super simple 🎉 Use webpack
magic comments in the dynamic import calls for naming chunks:

```javascript
const HomeScreen = lazy(() =>
  import(/* webpackChunkName: 'HomeScreen' */ '../HomeScreen/HomeScreen'),
)
```
