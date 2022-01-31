import React from 'react';
import './Header.css';
import Links from './Links.js'

import { Link } from "react-router-dom";

class Header extends React.Component {

  goToViolation=(id)=>{
    const violation = document.getElementById(id); 
    if (!violation)
      return;
    window.scrollTo({
      top:violation.offsetTop,
      behavior:"smooth"
  });
  };

  render() {

    var setPage = this.props.setPage;
  return (
    <header>
        <div class="header-top">
            <h1 class="header-title">Gothic 2 Ucieczka</h1>
            <div class="linker">
                <div class="links">
                    <a href="" target="_blank"><img src={process.env.PUBLIC_URL + "/icons/yt.png"} alt="YouTube"/></a>
                    <a href="" target="_blank"><img src={process.env.PUBLIC_URL + "/icons/wiki.png"} alt="Gothicpedia"/></a>
                    <a href="" target="_blank"><img src={process.env.PUBLIC_URL + "/icons/tm.png"} alt="TheModders"/></a>
                    <a href="" target="_blank"><img src={process.env.PUBLIC_URL + "/icons/fb.png"} alt="Facebook"/></a>
                    <a href="" target="_blank"><img src={process.env.PUBLIC_URL + "/icons/disc.png"} alt="Discord"/></a>
                </div>
                <span class="copyright">&copy; TheKetrab, 2019-2022</span>
            </div>    
        </div>
        <div class="header-bottom">
            <div class="navigation">
                {/* <button onClick={() => setPage('Home')}>Home</button>
                <button onClick={() => setPage('Gallery')}>Galeria</button>
                <button onClick={() => setPage('Authors')}>Twórcy</button>
                <button onClick={() => setPage('FAQ')}>FAQ</button> */}

                {/* <a href="/home">Home</a>
                <a href="/gallery">Galeria</a>
                <a href="/authors">Twórcy</a>
                <a href="/faq">FAQ</a> */}

                <Link to="/home" onClick={this.goToViolation('the-content')}>Home</Link>
                <Link to="/gallery" onClick={this.goToViolation('the-content')}>Galeria</Link>
                <Link to="/authors" onClick={this.goToViolation('the-content')}>Twórcy</Link>
                <Link to="/faq" onClick={this.goToViolation('the-content')}>FAQ</Link>
            </div>
            <a id="header-arrow" href="#the-content" class="arrow arr-down"></a>
        </div>
    </header>

  );
  }
}

export default Header;
