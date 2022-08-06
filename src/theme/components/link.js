'use strict'

const { theme } = require('../theme')

module.exports.Link = {
  '.C9Y-Link-text': {
    'color': theme.colors.secondary[500],

    '&:hover': {
      color: theme.colors.secondary[700],
    },
  },
}
