import { combineReducers } from 'redux'
import { reducer as routing } from 'dux-routing'

import packages from './packages'

export default combineReducers({ packages, routing })
