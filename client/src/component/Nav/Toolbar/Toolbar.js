import React from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import Burger from "../SideDrawer/Burger";
import * as actions from '../../actions/index';
import {reduxForm} from 'redux-form';
import {compose} from 'redux';
import "./Toolbar.css";

class Toolbar extends React.Component {
  
  logoutSubmit = async ()=>{
    console.log('insde logout submit');
    await this.props.logout();
    // await this.props.r
    // this.props.history.push('/');
  }
  removeMessage = async ()=>{
    await this.props.removeMessage();
  }

  render(){
    const {handleSubmit} = this.props;
    return (
      <header className='toolbar'>
    <nav className='toolbar__navigation'>
      <div className='spacer2' />
      <div className='toolbar__logo'>
        <Link to='/' onClick = {this.removeMessage}>
          <i className='arrow-left fa fas fa-less-than fa-lg' />
          <span className='logo-text'>MINDSPRINT</span>

          <i className='arrow-right fa fas fa-greater-than fa-lg' />
        </Link>
      </div>
      <div className='spacer' />
      <div className='toolbar_navigation-items'>
        <ul>
          <li>
            <Link to="/" onClick = {this.removeMessage}>HOME</Link>
          </li>
          <li>
            <Link to="/about" onClick = {this.removeMessage}>ABOUT</Link>
          </li>
          <li>
            <Link to="/downloads" onClick = {this.removeMessage}>DOWNLOADS</Link>
          </li>
          <li>
            <Link to="/faqs" onClick = {this.removeMessage}>FAQ</Link>
          </li>
          <li>
            <Link to="/contact" onClick = {this.removeMessage}>CONTACT US</Link>
          </li>
          {
            !this.props.isAuth? 
            <li>
              <Link to="/login" onClick = {this.removeMessage}>LOGIN</Link>
            </li>:null
          }
          {
            !this.props.isAuth?
            <li>
              <Link className="special-button" id="onReg" to="/register" onClick = {this.removeMessage}>
                REGISTER NOW
              </Link>
            </li>:null
          }
          {
            this.props.isAuth? 
                <li><Link to = "/" onClick = {handleSubmit(this.logoutSubmit)}>LOGOUT</Link></li>
                  :null
          }
        </ul>
      </div>
      <div className='toolbar__toggle-button'>
        <Burger click={this.props.drawer} xbtn={this.props.xbtn} />
      </div>
    </nav>
  </header>
    )
  }
};

const mapStateToProps = (state)=>{
  console.log('state inside mapStateToProps',state);
  return {
    isAuth:state.auth.isAuthenticated
  }
}

export default compose(connect(mapStateToProps,actions),reduxForm({form:"logout"}))(Toolbar);
