import { SEARCH } from './actionTypes'

const initState = {
    search: ''
}

export const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case SEARCH:
            return {
                ...state,
                search: payload
            }
        default:
            return state;
    }

}