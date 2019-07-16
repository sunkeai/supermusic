import React from 'react';
import {connect} from 'react-redux';
import Back from "../../components/common/Back";
import PlayBtn from "../../components/common/PlayBtn";
import topMusicListCreate from '../../store/actionCreators/playlist/topMusicList'
class TopMusicList extends React.Component{
    render(){
        return (
            <div style={{background:"#fff"}}>
                <div className='Top-Music-Menu-top'>
                    <Back></Back>
                    <div style={{fontSize:'16px'}}>歌单</div>
                    <PlayBtn></PlayBtn>
                </div>
                <div style={{overflow:'hidden',position:'relative',height:'180px'}}>
                    <div className='Top-Music-Menu-filter'>
                        <img src="http://p1.music.126.net/3sQ6Aa-VVsnCs6nuNuzPGQ==/109951164196395050.jpg" alt=""/>
                    </div>
                    <div className='Top-Music-Menu-tit'>
                        <img src="http://p1.music.126.net/3sQ6Aa-VVsnCs6nuNuzPGQ==/109951164196395050.jpg" alt="" className='left' />
                        <div className='left'>
                            <div>精品歌单</div>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className='Top-Music-Menu-All'>
                    <div>全部歌单<i className='iconfont'>&#xe63b;</i></div>
                    <div>
                        <div>华语</div>
                        <div>民谣</div>
                        <div>摇滚</div>
                    </div>
                </div>
                <div >
                    <ul>
                        {
                            this.props.musicList.map((v,i)=>{
                                return(
                                    <li key={i} >

                                        {v.name}
                                    </li>
                                    )
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
    componentWillMount() {
        this.props.getMusicList()
    }
    componentWillReceiveProps(nextProps, nextContext) {
        console.log(222222,this.props);
    }
}
function mapStateToProps(state){
    console.log(222,state.playlist.TopMusicList.musicList);
    return {
        musicList:state.playlist.TopMusicList.musicList
    }
}
function mapDispatchToProps(dispatch){
    return{
        getMusicList(){
            dispatch(topMusicListCreate.getMusicList())
        },
        // getMusicList()
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TopMusicList);