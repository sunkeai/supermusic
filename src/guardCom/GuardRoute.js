import React from "react";
import {
    withRouter
} from "react-router-dom"

class GuardRouterMore extends React.Component{
    // componentWillMount(){
    //
    // }
    render(){
        return (
            <this.props.component></this.props.component>
        )
    }
}
export default withRouter(GuardRouterMore);