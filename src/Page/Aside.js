import './Aside.css';

import {useEffect} from 'react'
import DownloadBtn from './DownloadBtn';
import Links from '../Header/Links'

function Aside() {

  useEffect(() => {

    window.addEventListener("scroll", stickAside);
    var ascont = document.getElementById("as-cont");
    var navoutside = document.getElementById("nav-outside");
    var stickNavbarY = navoutside.offsetTop;


    function stickAside() {
        if (window.pageYOffset >= stickNavbarY) {
          ascont.classList.add("sticky2")
        } else {
          ascont.classList.remove("sticky2");
        }
    }

  })


  return (
    <aside id="the-aside">
        <div id="as-cont" class="aside-sticky">
          <div class="aside-content">
            <img class="aside-img" src={process.env.PUBLIC_URL + "/img/title.png"} alt="" />
            <h2>Pobierz modyfikację</h2>
            <DownloadBtn />
            <p class="date-version">v1.2 1/7/2022</p>
            <Links />
            <div class="mod-available">
              <p>Mod dostępny również na:</p>
              <div class="mod-available-concrete">
                <a>Steam</a>
                <a>Spine</a>
                <a>ModDb</a>
              </div>
            </div>
          </div>
        </div>
    </aside>
  );
}

export default Aside;
