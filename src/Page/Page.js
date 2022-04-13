import Header from '../Header/Header.js'
import Navbar from './Navbar.js'
import Aside from './Aside.js'

import Home from '../Home/Home.js'
import Gallery from '../Gallery/Gallery';
import Authors from '../Authors/Authors';
import FAQ from '../FAQ/FAQ';

import { useEffect } from 'react';

import './Page.css'

function page2Component(page) {

    switch (page) {
        case "home": return <Home/>;
        case "gallery": return <Gallery/>;
        case "authors": return <Authors/>;
        case "faq": return <FAQ/>;
    }

    return "";
}




function Page(page) {



  return (
    <div id="the-page">
        <Header/>
        <Navbar/>
        <main>
          <div class="main-panel">
            <div id="the-content">
                {page2Component(page)}
            </div>
            <Aside/>
          </div>
        </main>
    </div>
  );
}

export default Page;
