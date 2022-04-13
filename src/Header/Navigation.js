import './Navigation.css';

import { Link } from "react-router-dom";


function Navigation() {

    function goToViolation(id) {
        //const violation = document.getElementById(id);
        const violation = document.getElementById('nav-outside')
        
        if (!violation)
            return;
        window.scrollTo({
            top:violation.offsetTop,
            behavior:"smooth"
        });
    };

  return (
    <div class="navigation">
        <Link to="/home" onClick={() => goToViolation('the-content')}>Home</Link>
        <Link to="/gallery" onClick={() => goToViolation('the-content')}>Galeria</Link>
        <Link to="/authors" onClick={() => goToViolation('the-content')}>Twórcy</Link>
        <Link to="/faq" onClick={() => goToViolation('the-content')}>FAQ</Link>
    </div>
);
}

export default Navigation;
