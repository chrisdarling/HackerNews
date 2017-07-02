import * as actions from '../actions';

const initailState = {
    categories: ['Top', 'New', 'Show', 'Ask', 'Job'],
    activeTab: 'Top',
};

export default function(state = initailState, { type, payload }) {
    switch (type) {
        case actions.CHANGE_ACTIVETAB :
            return { 
                ...state,
                activeTab: payload,
            };
        default:
            return state;
    }
}