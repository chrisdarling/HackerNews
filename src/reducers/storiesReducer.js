import * as actions from '../actions';

const defaultLastSearch = {
    skip: 0,
    take: 15,
};

const initialState = {
    stories: [],
    totalItems: 0,
    lastSearch: defaultLastSearch,
    fetching: false,
    rendered: false,
};

export default function(state = initialState, { type, payload }) {
    switch(type) {
        case actions.FETCH_STORIES:
            return {
                ...state,
                stories: payload.stories,
                fetching: payload.fetching,
                totalItems: payload.totalItems,
                lastSearch: payload.lastSearch,
                rendered: true,
            };
       case actions.FETCHING_STORIES:
        return {
            ...state,
            fetching: payload,
        }  
        case actions.CLOSE_POSTLIST:
            return {
                ...state,
                rendered: false,
            }     
        default:
            return state;
    }
}