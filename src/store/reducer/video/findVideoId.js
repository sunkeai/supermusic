import findVideoInit from '../../state/video/playFindVideo';
import {GET_FIND_VIDEO_URL} from '../../actionType/video'

export default function (state=findVideoInit,action){
    state = JSON.parse(JSON.stringify(state));
    if(action.type===GET_FIND_VIDEO_URL){
        state.findVideoUrl = action;
    }
    return state;
}
