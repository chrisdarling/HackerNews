import * as actions from '../actions';

const initialState = {
    post: {},
    fetching: false,
}

export default function(state = initialState, { type, payload }) {
    switch (type) {
        case actions.FETCH_POST:
            return {
                ...state,
                post: payload.post,
                fetching: payload.fetching,
            }
        case actions.FETCHING_POST:
            return {
                ...state,
                fetching: payload,
            }    
        default:
            return state;
    }
}
