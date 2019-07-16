import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';
export default (OriginalComponent)=>{
    class Guard extends React.Component{

        async componentDidMount(){
            if (this.props.isAuth&&this.props.jwtToken){
                console.log('user is allowed to access url');
            }else{
                console.log('Unauthenticated');
                // this.props.errorMessage = 'Unauthenticated';
                await this.props.Unauthorized();
                await this.props.history.push('/login');
            }
        }

        async componentDidUpdate(){
            if (this.props.isAuth&&this.props.jwtToken){
                console.log('user is allowed to access url');
            }else{
                console.log('Unauthenticated');
                // this.props.errorMessage = 'Unauthenticated';
                await this.props.Unauthorized();
                await this.props.history.push('/login');
            }
        }

        render(){
            return (
                <OriginalComponent {...this.props}/>
            );
        }
    }

    const mapStateToProps = (state)=>{
        return {
            isAuth:state.auth.isAuthenticated,
            jwtToken:state.auth.token
        }
    }

    return connect(mapStateToProps,actions)(Guard);
}