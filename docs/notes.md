# 📝 Misc Notes

1. Setup a "performance sandbox" for each screen by with a top level
   PureComponent that only connects to Redux/Context. Allows assuming the screen
   will only rerender when something relevant changes (vs rerendering because of
   something like app nav state changing)
2. Create bundles with smaller deps for "marketing" screens, eg a Svelte screen
   for the landing. Use a JS only index that primarily switches between routes
   to load app sections.
