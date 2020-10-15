import { combineReducers } from 'redux'
import { reducer as routing } from 'dux-routing'

import packages from './packages/packages-slice'

// Root state can be used in any selector 🎉
export type RootState = ReturnType<typeof rootReducer>

export const rootReducer = combineReducers({ packages, routing })
