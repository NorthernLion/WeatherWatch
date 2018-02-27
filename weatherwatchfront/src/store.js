import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import LocationReducer from './reducers/LocationReducer'
import ObservationReducer from './reducers/ObservationReducer'
import TimeReducer from './reducers/TimeReducer'
import NotificationReducer from './reducers/NotificationReducer'
import AppReducer from './reducers/AppReducer'


const reducer = combineReducers({
  locations: LocationReducer,
  observations: ObservationReducer,
  time: TimeReducer,
  notification: NotificationReducer,
  app: AppReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store