# Best practices

## Lazy load route components

Using `lazy` to load route components on demand is super simple 🎉 Use webpack
magic comments in the dynamic import calls for naming chunks:

```javascript
const HomeScreen = lazy(() =>
  import(/* webpackChunkName: 'HomeScreen' */ '../HomeScreen/HomeScreen'),
)
```
