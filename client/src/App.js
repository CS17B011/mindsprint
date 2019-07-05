import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./component/Nav/Navbar";
import Corousel from "./component/corousel/Corousel";
import Footer from "./component/footer/footer";
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Register from './component/auth/register';
import Login from './component/auth/login';
import Jumbo from "./component/jumbotron/jumbotron";
class App extends React.Component {
  render(){
      return ( 
        <BrowserRouter>
       
            <div >
              <Navbar/>
            </div>
            <div >
              <Route path = "/" exact component = {Corousel}></Route>
              <Route path = "/signin" exact  component = {Register}></Route>
              <Route path = "/login" exact  component = {Login}></Route>
              <Route path="/" exact component={Jumbo} />
            </div>
            <div >
              <Footer/>
            </div>
        
        </BrowserRouter>
    );
  }
}

export default App;
