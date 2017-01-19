import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// Reducers
import Authentication from './modules/Authentication'
import AppState from './modules/AppState'

export default Store = createStore(
    combineReducers({ AppState, Authentication }),
    applyMiddleware(thunk)
)