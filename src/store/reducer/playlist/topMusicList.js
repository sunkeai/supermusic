import musicListInit from '../../state/playlist/MusicList'
import {GET_MUSIC_LIST} from '../../actionType/playlist'
//find页面，歌单页面，歌单（默认类别全部）
export default function(state=musicListInit,action) {
    state = JSON.parse(JSON.stringify(state));
    if(action.type === GET_MUSIC_LIST){
        state.musicList=action.playlists;
        console.log(111,state);
    }
    return state;
}