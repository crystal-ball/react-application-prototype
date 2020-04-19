/* global require */

// Feather icons imports (only icons used in application are imported to keep
// sprite size down)
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
