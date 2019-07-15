import React from 'react';
import {connect} from 'react-redux';
import { List, InputItem } from 'antd-mobile';
import phoneLoginCreate from '../../store/actionCreators/login/phoneLogin'
import Back from '../../components/common/Back'
class PhoneLogin extends React.Component {
    constructor(){
        super();
        this.state={

        }
    }
    componentDidMount() {
        // this.autoFocusInst.focus();
    }
    render() {
        return (
            <div>
                <Back></Back>
                <List renderHeader={() => '手机号登陆'}>
                    <InputItem
                        type='number'
                        clear
                        placeholder="手机号"
                        ref='phoneNum'></InputItem>
                    <InputItem
                        type='password'
                        clear
                        placeholder="密码"
                        ref='passWord'></InputItem>
                    <List.Item>
                        <div
                            style={{ width: '100%', color: '#108ee9', textAlign: 'center' }}
                            onClick={this.props.getPhone.bind(this)}>登录
                        </div>
                    </List.Item>
                </List>
            </div>
        );
    }
}
function mapStateToProps(state){
    console.log(111,state)
    return {
        Logincode: state.code,
    }
}
function mapDispatchToProps(dispatch){
    // console.log(222,dispatch);
    return {
        getPhone(){
            console.log(11111111,this);
            dispatch(phoneLoginCreate.getPhone(this.refs.phoneNum.state.value,this.refs.passWord.state.value))
        }

    }
}
/*const InputPhoneLogin = createForm()(PhoneLogin);
export default InputPhoneLogin;*/
export default connect(mapStateToProps,mapDispatchToProps)(PhoneLogin);
