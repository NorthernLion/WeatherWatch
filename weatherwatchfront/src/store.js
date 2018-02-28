import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import LocationReducer from './reducers/LocationReducer'
import TimeReducer from './reducers/TimeReducer'
import NotificationReducer from './reducers/NotificationReducer'
import RouteReducer from './reducers/RouterReducer'


const reducer = combineReducers({
  locations: LocationReducer,
  time: TimeReducer,
  notification: NotificationReducer,
  route: RouteReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store