// /personalized/privatecontent
import React from 'react';
import bindActionCreators from 'redux';
import {connect} from 'react-redux';
import findVideoCreate from "../../store/actionCreators/video/findVideo";

class FindVideo extends React.Component{
    constructor(){
        super();
        this.state={
            videoIdArr:[]
        }
    }
    render(){
        return (
            <div style={{marginBottom: '40px'}}>
                {
                    this.props.findVideoList.map((v, i) => {
                        this.state.videoIdArr.unshift(v.videoId)
                        // console.log(v.videoId);
                        // console.log(this.state.videoIdArr)
                        return (
                            <div key={i} style={{margin: '10px 0'}}>
                                <div style={{width: '100%'}} >
                                    <video src='' controls="controls" poster={v.url}>
                                        your browser does not support the video tag
                                    </video>
                                </div>
                                <div style={{margin: '10px 0'}}>
                                    <div>{v.name}</div>
                                </div>
                            </div>
                        )
                    })

                }
            </div>
        );
    }
    componentDidMount() {
        this.props.getFindVideo();
    }
    componentWillReceiveProps(nextProps){
        // this.props.playFindVideo()
        // console.log(666,this.state)
        // console.log(777,this.state.videoIdArr);
    }
}
function mapStateToProps(state){
    console.log(state,77)
    return {
        findVideoList: state.video.findVideo.findVideoList,
    }
}
function mapDispatchToProps(dispatch){
    return {
        getFindVideo(){
            // console.log(11111111,this);
            // console.log(this.refs.videoId);
            dispatch(findVideoCreate.getFindVideo())
        },
        // playFindVideo(){
        //     dispatch(findVideoCreate.playFindVideo(this.state.videoIdArr))
        // }

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FindVideo);
