import {GET_MUSIC_LIST} from '../../actionType/playlist';
import axios from 'axios';
export default {
    //根据cat获取不同类型歌单
    getMusicList(cat='全部'){
        return(dispatch)=>{
            axios.get('http://swmonk.top:3000/top/playlist?limit=20&order=new&cat='+cat)
                .then(({data})=>{
                    dispatch(this.musicListAction(data.playlists))
                })
        }
    },
    musicListAction(playlists){
        return{
            type:GET_MUSIC_LIST,
            playlists
        }
    }
}