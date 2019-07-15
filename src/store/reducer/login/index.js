import phoneLogin from "./phoneLogin";
import emailLogin from "./emailLogin";
import {
    combineReducers
} from "redux";
export default combineReducers({
    phoneLogin,
    emailLogin
})