import React from 'react';

class CustomInput extends React.Component{
    render(){
        const { input :{value,onChange} } = this.props;
        return (
            <input  name = {this.props.name} className = "form-control" placeholder = {this.props.placeholder} type = {this.props.type} onChange = {onChange} value = {value}/>
        )
    }
}
export default CustomInput;