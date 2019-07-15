import phoneLoginInit from '../../state/login/phoneLogin';
import {GET_PHONE} from '../../actionType/login'
//phoneCode:0,phone:[]
export default function (state=phoneLoginInit,action){
    state = JSON.parse(JSON.stringify(state));
    // console.log(action,9999);
    // console.log(state, 888888);
    if(action.type===GET_PHONE){
        state.phone = action.payload;
        state.phoneCode = action.payload.phoneData.code;
        // console.log(888888888, state);
    }
    return state;
}
