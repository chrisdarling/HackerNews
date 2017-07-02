import { combineReducers } from 'redux';
import NavBarReducer from './navbarReducer';
import StoriesReducer from './storiesReducer';
import PostReducer from './postReducer';
import UserReducer from './userReducer';

const rootReducer = combineReducers({
    navigation: NavBarReducer,
    stories: StoriesReducer,
    post: PostReducer,
    user: UserReducer,
}); 

export default rootReducer; 