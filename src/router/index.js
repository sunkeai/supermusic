import top from "./top";
import account from './login'
import Find from "../views/find/Find";
import Video from "../views/video/Video";
import Mine from "../views/mine/Mine";
import Friend from "../views/mine/Mine";
import Account from "../views/account/Account";

export default [
    ...top,
    ...account,
    {
        path:"/",
        exact:true,
        component:Find,
        nameStr:"发现",
        isAuthorization:true
    },
    {
        path:"/video",
        exact:true,
        component:Video,
        nameStr:"视频",
        isAuthorization:true
    },
    {
        path:"/mine",
        exact:true,
        component:Mine,
        nameStr:"我的",
        isAuthorization:true
    },
    {
        path:"/friend",
        exact:true,
        component:Friend,
        nameStr:"朋友",
        isAuthorization:true
    },
    {
        path:"/account",
        exact:true,
        component:Account,
        nameStr:"帐号",
        isAuthorization:true
    }
]