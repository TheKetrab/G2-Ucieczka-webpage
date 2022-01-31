import logo from './logo.svg';
import './App.css';
import Header from './Header/Header.js'
import Home from './Home/Home.js'
import Gallery from './Gallery/Gallery';
import Authors from './Authors/Authors';
import FAQ from './FAQ/FAQ';

import React from 'react';


import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

class App extends React.Component  {

  // constructor(props) {
  //   super(props)
  //   this.state = {pageComponent: "Home"}
  //   this.setPage = this.setPage.bind(this)
  // }

  // setPage = (page) => {
  //   this.setState({pageComponent: page})
  // }

  // render() {

  //   var pageComponent =
  //     (this.state.pageComponent == "Home") ? <Home /> :
  //     (this.state.pageComponent == "Gallery") ? <Gallery /> :
  //     (this.state.pageComponent == "Authors") ? <Authors /> :
  //     (this.state.pageComponent == "FAQ") ? <FAQ /> :
  //     <Home />;

  //   return (
  //     <div>
  //       <Header
  //         setPage = {this.setPage}
  //         />
  //       <div id="the-content">
  //         {pageComponent}
  //       </div>
  //     </div>
  //   );

  // }


  render() {
    return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div><Header /><div class="the-content"><Home /></div></div>}></Route>
        <Route path="/home" element={<div><Header /><div class="the-content"><Home /></div></div>}></Route>
        <Route path="/gallery" element={<div><Header /><div class="the-content"><Gallery /></div></div>}></Route>
        <Route path="/authors" element={<div><Header /><div class="the-content"><Authors /></div></div>}></Route>
        <Route path="/faq" element={<div><Header /><div class="the-content"><FAQ /></div></div>}></Route>
      </Routes>
    </BrowserRouter>
    );
  }

}

export default App;
