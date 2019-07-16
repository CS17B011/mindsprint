import React from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import * as actions from '../../actions/index';
import {reduxForm} from 'redux-form';
import {compose} from 'redux';
import "./SideDrawer.css";


class sideDrawer extends React.Component{

  constructor(props){
    super(props);
    this.state = {done:null};
  }

  logoutSubmit = async ()=>{
    console.log('insde logout submit');
    await this.props.logout();
    this.setState({done:true});
    // this.props.history.push('/');
  }

  removeMessage = async ()=>{
    await this.props.removeMessage();
  }
  render(){

    let drawerClasses = 'side-drawer';
  if (this.props.show) {
    drawerClasses = 'side-drawer open';
  }
  const navLinks = document.querySelectorAll("li.move");

  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `linkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
    }
  });
  const {handleSubmit} = this.props;

  return (
    <nav className={drawerClasses}>
      <ul className="link-tab">
        <li className="move">
          <Link to="/" onClick = {this.removeMessage}>HOME</Link>
        </li>
        <li className="move">
          <Link to="/about" onClick = {this.removeMessage}>ABOUT</Link>
        </li>
        <li className="move">
          <Link to="/downloads" onClick = {this.removeMessage}>DOWNLOADS</Link>
        </li>
        <li className="move">
          <Link to="/faqs" onClick = {this.removeMessage}>FAQ</Link>
        </li>
        <li className="move">
          <Link to="/contact" onClick = {this.removeMessage}>CONTACT US</Link>
        </li>
        {!this.props.isAuth?
        <li className="move">
          <Link to="/login" onClick = {this.removeMessage}>LOGIN</Link>
        </li>:null}
        {!this.props.isAuth?
        <li className="move">
          <Link className="special-button__mobile" id="onReg" to="/register" onClick = {this.removeMessage}>
            REGISTER NOW
          </Link>
        </li>:null}
        {
            this.props.isAuth? 
            
                <li className = "move"><Link to = "/" onClick = {handleSubmit(this.logoutSubmit)}>LOGOUT</Link></li>
                  :null
          }
      </ul>
    </nav>
  );
  }
};

const mapStateToProps = (state)=>{
  return {
    isAuth:state.auth.isAuthenticated
  }
}

export default compose(connect(mapStateToProps,actions),reduxForm({form:"logout"}))(sideDrawer);
