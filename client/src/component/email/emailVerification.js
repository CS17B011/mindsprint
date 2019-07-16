import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index.js';
import {Field ,reduxForm} from 'redux-form';
import CustomInput from '../form/customInput.js';
import {compose} from 'redux';
class EmailVerification extends React.Component{

    formSubmit = async (data)=>{
        console.log('data inside verification');
        await this.props.verificationResult(data);
        this.props.history.push('/login');
    }

    render(){
        const {handleSubmit} = this.props;
        return (
            <div>
                {this.props.errorMessage?<div className = "alert alert-danger">{this.props.errorMessage}</div>:null}
                {this.props.successMessage?<div className = "alert alert-success">{this.props.successMessage}</div>:null}
                 <form onSubmit = {handleSubmit(this.formSubmit)}>
                    <Field
                    name = "secretToken"
                    placeholder="insert token"
                    type="text"
                    component = {CustomInput}
                    required
                    />
                    <button type = "submit">Submit</button>
                 </form>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        errorMessage:state.auth.error,
        successMessage:state.auth.success
    }
}

export default compose(connect(mapStateToProps,actions),reduxForm({form:"emailVerification"}))(EmailVerification);