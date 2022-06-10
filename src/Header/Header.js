import React from 'react';
import './Header.css';
import Links from './Links.js'
import Navigation from './Navigation.js'


class Header extends React.Component {

  goToViolation=(id)=>{
    //const violation = document.getElementById(id);
    const violation = document.getElementById('nav-outside')
    
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
                <Links />
                {/* <div class="links">
                    <a href="" target="_blank"><img src={process.env.PUBLIC_URL + "/icons/yt.png"} alt="YouTube"/></a>
                    <a href="" target="_blank"><img src={process.env.PUBLIC_URL + "/icons/wiki.png"} alt="Gothicpedia"/></a>
                    <a href="" target="_blank"><img src={process.env.PUBLIC_URL + "/icons/tm.png"} alt="TheModders"/></a>
                    <a href="" target="_blank"><img src={process.env.PUBLIC_URL + "/icons/fb.png"} alt="Facebook"/></a>
                    <a href="" target="_blank"><img src={process.env.PUBLIC_URL + "/icons/disc.png"} alt="Discord"/></a>
                </div> */}
                <span class="copyright">&copy; TheKetrab, 2019-2022</span>
            </div>    
        </div>
        <div class="header-bottom">
          <Navigation />
            <a id="header-arrow" class="arrow arr-down" onClick={() => this.goToViolation('the-content')}></a>
        </div>
    </header>

  );
  }
}

export default Header;
