/* global require */
/* eslint-disable import/no-unassigned-import */

// External node_module icon imports
import 'feather-icons/dist/icons/heart.svg'
import 'feather-icons/dist/icons/alert-triangle.svg'

// The require context passed to importAll has a keys method for iterating
// through all matched imports. Calling require on a key returns a cjs module
function importAll(r) {
  r.keys().forEach((key) => {
    r(key)
  })
}

// Use webpack require.context to find and require all icons in project icon folder
importAll(require.context('../media/icons', true, /\.svg$/))
