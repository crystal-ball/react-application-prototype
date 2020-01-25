# dux-routing

## Setup

- Include the `routing` reducer in your store root reducer.
- Pass your store to the `setupRoutingListeners` fn to react to browser back and
  forward navigations.
- Include the `routingMiddleware` in your store middleware.

## Redux Reducer

The `routing` reducer exposes the current application path and search params,
with the search params parsed into an object.

```js
{
  pathname: String,
  searchParams: Object
}
```

## Actions

Dux-Routing listens for two types of events, pathname changes and search param
changes.

**Pathname changes** typically represent a screen change in the applicaton and
are initiated by dispatching a `changePathname` action. The action type
`ROUTING/PATHNAME_CHANGED` can be listened for in any reducer and path params
can be matched to update other slices of the store.

**Search param changes** typically represent a change in the state of a screen
that needs to be persisted across reloads or url sharing. A specific action
doesn't need to be dispatched to update the search params, any action can
include a `meta.searchParamsUpdate` and `meta.searchParams` fields and the
current search params will be updated to match.

## TODO

1. Switch routing
1. Link action dispatcher
1. Link href for SEO
1. Two types of url changes
1. Route changes - Dispatch a specific route change, eg selecting an article
1. Query term changes - Ability to dispatch some action, eg `selectFilter` and
   update the query term

## Naming conventions

- Path params: Params matched from the `pathname` string
- Search params: Params matched from the `search` string
- pathname - The value of the current location.pathname
- search - The value of the current location.search
- route - A route representation that will be converted to a regex and used for
  matching pathnames aginast
