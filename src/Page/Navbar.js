import './Navbar.css';
import Navigation from '../Header/Navigation.js'

import {useEffect} from 'react'

function Navbar() {

    function toggleMobileNav() {
            var x = document.getElementById("nav-mobile-links");
            if (x.style.display === "block") {
              x.style.display = "none";
            } else {
              x.style.display = "block";
            }
    }
    
    useEffect(() => {

        window.addEventListener("scroll", stickNavbar);
        var navoutside = document.getElementById("nav-outside");
        var navbar = document.getElementById("navbar");
        var stickNavbarY = navoutside.offsetTop;
        function stickNavbar() {
            if (window.pageYOffset >= stickNavbarY) {
                navbar.classList.add("sticky")
            } else {
                navbar.classList.remove("sticky");
            }
        }

        
    
    })

  return (
    <div id="nav-outside">
        <nav id="navbar" class="">
            <div class="nav-mobile">
                <a href="javascript:void(0);" class="icon" onClick={toggleMobileNav}>
                    <i class="fa fa-bars"></i>
                </a>
                <div id="nav-mobile-links">
                    <Navigation />
                </div>
            </div>
            <div class="nav-inside">
                <Navigation />
            </div>
        </nav>
    </div>
  );
}

export default Navbar;
