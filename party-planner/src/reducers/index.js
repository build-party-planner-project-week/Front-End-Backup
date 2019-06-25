import {combineReducers} from 'redux'
import loginReducer from './loginReducer'
import partyReducer from './partyReducer'

export default combineReducers({
    loginReducer,
    partyReducer
})