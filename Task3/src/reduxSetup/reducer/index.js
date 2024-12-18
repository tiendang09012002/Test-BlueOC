import { combineReducers } from "redux";
import postReducer from "./post.js";
export default combineReducers({
    Post: postReducer,
})