// combine reducers

import { combineReducers } from 'redux'
import LoginReducer from './Components/logic/logic'

export default combineReducers({
  Login: LoginReducer,
})