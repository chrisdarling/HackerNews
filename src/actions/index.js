import axios from 'axios';
import { postTypeURL } from '../constants';

export const CHANGE_ACTIVETAB = 'CHANGE_ACTIVETAB';

export function updateActiveTab(newTab) {
    return {
        type: CHANGE_ACTIVETAB,
        payload: newTab,
    };
}

export const FETCH_STORIES = 'FETCH_STORIES';
export const FETCHING_STORIES = 'FETCHING_STORIES';
export const CLOSE_POSTLIST = 'CLOSE_POSTLIST';

export const closePostList = () => dispatch => {
    dispatch({
        type: CLOSE_POSTLIST,
        payload: false,
    });
}

export const fetchStories = ({ skip, take }) => (dispatch, getState) => {
    const { activeTab } = getState().navigation;
    dispatch({
        type: FETCHING_STORIES,
        payload: true,
    });
    axios.post(postTypeURL[activeTab], {
        skip,
        take,
        type: activeTab.toLowerCase(),
    })
    .then(
        response => {
            const {  data, totalItems } = response.data;
            dispatch({
                type: FETCH_STORIES,
                payload: {
                    stories: data,
                    totalItems,
                    lastSearch: {
                        skip,
                        take,
                    },
                    fetching: false,
                },
            });
        },
        error => {
            dispatch({
              type: FETCH_STORIES,
              payload: {
                stories: [],
                totalItems: 0,
                lastSearch: {
                    skip: 0,
                    take: 15,
                },
                fetching: false,
              },
          });
        }
    );
}

export const FETCH_POST = 'FETCH_COMMENTS';
export const FETCHING_POST = 'FETCHING_POST';

export const fetchPost = id => dispatch => {
   dispatch({
       type: FETCHING_POST,
       payload: true,
   }) 
   axios.get(`/api/post/${id}`).then(
       response => {
            dispatch({
                type: FETCH_POST,
                payload: {
                    post: response.data.data,
                    fetching: false,
                },
            });
   },
        error => {
            dispatch({
                type: FETCH_POST,
                payload: {
                    post: null,
                    fetching: false,
                },
            });
        }
   );
}

export const FETCH_USER = 'FETCH_USER';
export const FETCHING_USER = 'FETCHING_USER';

export const fetchUser = user => dispatch => {
    dispatch({
        type: FETCHING_USER,
        payload: true,
    });
    axios.get(`/api/user/${user}`).then(
        response => {
            dispatch({
                type: FETCH_USER,
                payload: {
                    user: response.data.data,
                    fetching: false,
                }
            });
    },
        error => {
            dispatch({
                type: FETCH_USER,
                payload: {
                    user: null,
                    fetching: false,
                },
            });
        }
    );
}




