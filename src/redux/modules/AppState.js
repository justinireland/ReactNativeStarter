const actions = {
    TOGGLE_MENU: 'TOGGLE_MENU'
}

export function toggleMenu(){
    return {
        type: actions.TOGGLE_MENU
    }
}

const initialState = {
    showMenu: false
}

export default function AppState (state = initialState, action) {
    switch (action.type) {

        case actions.TOGGLE_MENU:
            return {
                ...state,
                showMenu: !state.showMenu
            }

        default:
            return state
    }
}