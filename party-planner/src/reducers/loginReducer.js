import {LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILED} from '../actions'

const initialState = {
    loggingIn: false,
    loggedIn: false,
    error: null
}

export default (state = initialState, action) => {
    switch(action.type){
        default: 
        return state
    }
}