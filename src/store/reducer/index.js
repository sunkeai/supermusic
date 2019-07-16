import login from "./login";
import video from "./video";
import playlist from './playlist';
import {
    combineReducers
} from "redux";
export default combineReducers({
    login,
    video,
    playlist
})