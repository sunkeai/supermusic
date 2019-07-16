import React from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
class AnchorRadio extends React.Component{
    constructor(){
        super();
        this.state={
            anchorList:[]
        }
    }
    componentWillMount() {
        this.getTopMusic.bind(this)();
    }
    getTopMusic(){
        axios.get("http://swmonk.top:3000/personalized/djprogram")
            .then(({data})=>{
                // console.log(data);
                for(let i=0;i<6;i++){
                    this.setState({
                        anchorList:this.state.anchorList.concat(data.result[i])
                    })
                }
                // console.log(this.state.anchorList)
            })
    }
    render(){
        return(
            <div>
                <NavLink to={'/anchor'} exact style={{display:'block'}}>
                    <div className='top-music-menu-tit'>
                        主播电台
                        <i className='iconfont'>&#xe63b;</i>
                    </div>
                </NavLink>
                <div style={{overflow:'hidden'}}>
                    <ul style={{width:'100%',overflow:'hidden'}}>
                        {
                            this.state.anchorList.map((v,i)=>{
                                return (
                                    <li style={{width:'30%',float:'left',margin:'18px 6px'}} key={i}>
                                        <NavLink to={
                                            {
                                                pathname:'',
                                                state:{
                                                    id:v.id
                                                }
                                            }
                                        } key={i}>
                                            <img src={v.picUrl} alt="" style={{width:'100%'}}/>
                                            <p className='top-music-menu-name'>{v.name}</p>
                                        </NavLink>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
export default AnchorRadio;