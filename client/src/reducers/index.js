import {combineReducers} from 'redux'

import posts from './posts'
import users from './users'
import projects from './projects'

export default combineReducers({
    posts,
    users,
    projects
});