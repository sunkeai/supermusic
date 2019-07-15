import emailLoginInit from '../../state/login/emailLogin';
import {GET_EMAIL} from '../../actionType/login'
//emailCode:0,phone:[]
export default function (state=emailLoginInit,action){
    state = JSON.parse(JSON.stringify(state));
    // console.log(action,9999);
    // console.log(state, 888888);
    if(action.type===GET_EMAIL){
        state.email = action.payload;
        state.emailCode = action.payload.emailData.code;
        // console.log(888888888, state);
    }
    return state;
}
