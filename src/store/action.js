import { SEARCH } from './actionTypes';

export const search = (input) => {
    return {
        type: SEARCH,
        payload: input
    }
}