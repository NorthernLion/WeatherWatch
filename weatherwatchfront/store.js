import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import LocationReducer from './reducers/LocationReducer'
import ObservationReducer from './reducers/ObservationReducer'

const reducer = combineReducers({
  locations: LocationReducer,
  observations: ObservationReducer
})

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

export default store