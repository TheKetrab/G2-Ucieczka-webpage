import logo from './logo.svg';
import './App.css';

import React from 'react';

import Page from './Page/Page.js';

import { render } from "react-dom";
import {
  HashRouter,
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
    <HashRouter>
      <Routes>
        <Route path="/" element={Page('home')}></Route>
        <Route path="/home" element={Page('home')}></Route>
        <Route path="/gallery" element={Page('gallery')}></Route>
        <Route path="/authors" element={Page('authors')}></Route>
        <Route path="/faq" element={Page('faq')}></Route>
      </Routes>
    </HashRouter>
    );
  }

}

export default App;
