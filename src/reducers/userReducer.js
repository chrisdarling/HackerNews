import * as actions from '../actions';

const initialState = {
    user: {},
    fetching: false,
    notFound: false,
}

export default function(state = initialState, { type, payload }) {
    switch (type) {
        case actions.FETCH_USER:
            return {
                ...state,
                user: payload.user,
                fetching: payload.fetching,
            };
        case actions.FETCHING_USER:
            return {
                ...state,
                fetching: payload,
            };    
        default:
            return state;
    }
}