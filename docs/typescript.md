## TS Upgrades

WEBPACK

1. Updated extensions to include `.ts`, `.tsx`
1. Updated babel-loader test to `^.(jsx?|tsx?)$`

BABEL

1. Add '@babel/preset-typescript' to Babel configs after preset-env &
   preset-react

ESLINT

1. Added an `overrides` for TS file extensions, see eloquence
1. Updated import/extensions rule to disallow extensions for TS imports from JS
   files

APPLICATION

1. Start using // @ts-check
1. Start adding types at application leaves

TYPES EXAMPLE

1. Upgrade packages page with all the packages used in the app (can
   auto-generate them from the package.json as part of the build step)
2. Use Redux to cache fetched packages
3. Select a package to fetch details from bundlephobia
4. Format fetched bundle size:
   https://github.com/pastelsky/bundlephobia/blob/d9b9f35b8f6b46332a4b9caa8289006a7232f2ed/utils/index.js
