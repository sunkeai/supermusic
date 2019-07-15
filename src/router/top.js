import MusicList from '../views/find/TopMusicMenu';
import SelectedMusicList from '../views/find/SelectedMusicList';

export default[
    {
        path:"/top/playlist",
        exact:true,
        component:MusicList,
        nameStr:"歌单（网友精选碟）",
        isAuthorization:true
    },{
        path:"/top/playlist/highquality",
        exact:true,
        component:SelectedMusicList,
        nameStr:"推荐歌单",
        isAuthorization:true
    },{
        path:"/top/song",
        exact:true,
        component:SelectedMusicList,
        nameStr:"最新音乐",
        isAuthorization:true
    }
]
