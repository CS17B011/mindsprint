import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./component/Nav/Navbar";
import Corousel from "./component/corousel/Corousel";
import Footer from "./component/footer/footer";
import {BrowserRouter,Route} from 'react-router-dom';
import Login from './component/auth/login';
import Register from './component/auth/register';
class App extends React.Component {
  render(){
      return ( 
        <BrowserRouter>
          <Fragment>
            <div>
              <Navbar/>
            </div>
            <div style = {{display:"flex",justifyContent:"center"}}>
              <Route path = "/" exact component = {Corousel}></Route>
              <Route path = "/login" exact component = {Login}></Route>
              <Route path = "/signin" exact component = {Register}></Route>
            </div>
            <div>
              <Footer/>
            </div>
          </Fragment>
        </BrowserRouter>
    );
  }
}

export default App;
