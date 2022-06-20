import types from "./types"
import produce from "immer"

const INITIAL_STATE = {
    user: { logged:false },
}

export default function user(state = INITIAL_STATE, action) {
    switch (action.type) {
        case types.SET_USER:
            return produce(state, (draft) => {
                draft.user = { ...state.user, ...action.payload }
            })
        case types.RESET:
            return produce(state, (draft) => {
                draft.user = INITIAL_STATE.user
            })
        default:
            return state
    }
}