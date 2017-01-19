import { authreq, logoffreq } from '../../api'

const actions = {
    IS_AUTHED: 'IS_AUTHED',
    IS_FETCHED: 'IS_FETCHED',
    IS_FETCHING: 'IS_FETCHING',
    NOT_AUTHED: 'NOT_AUTHED',
    SET_USERNAME: 'SET_USERNAME'
}

function fetching(){ return {type: actions.IS_FETCHING}}
function fetched(){ return {type: actions.IS_FETCHED}}
function isAuthed(){ return {type: actions.IS_AUTHED}}
function notAuthed(){ return {type: actions.NOT_AUTHED}}

export function handleAuth({username,password}){
    return (dispatch, getState) => {
        dispatch(fetching())
        return authreq(username,password)
            .then((res) => {
                dispatch(fetched())
                dispatch(isAuthed())
                dispatch(setUsername(res.username))
                return new Promise(resolve => resolve(getState()))
            })
            .catch((err) => {
                dispatch(fetched())
                dispatch(notAuthed())
                return new Promise((resolve,reject) => reject(err))
            })
    }
}

function setUsername(username){ return {type: actions.SET_USERNAME, username}}

const initialState = {
    isAuthed: false,
    isFetching: false,
    username: ''
}

export default function Authentication (state = initialState, action) {
    switch (action.type) {

        case actions.IS_AUTHED:
            return {
                ...state,
                isAuthed: true
            }
        case actions.NOT_AUTHED:
            return {
                ...state,
                isAuthed: false,
                username: ''
            }
        case actions.SET_USERNAME:
            return {
                ...state,
                username: action.username
            }
        default:
            return state
    }
}