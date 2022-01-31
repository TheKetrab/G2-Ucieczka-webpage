import React from "react";
import './Gallery.css';


class Gallery extends React.Component {

    render() {

  return (
    <div id="gallery">
        <div id="main-gallery">
            <div class="main-gallery-center">
                <div>
                    <div class="video-wrapper">
                        <iframe src="https://www.youtube.com/embed/hj6cU6NoJgM"
                            title="Video" frameBorder="0" allowFullScreen></iframe>
                        {/* <iframe src="https://www.youtube.com/embed/Ku6fHRBt2uQ"
                            frameborder="0" allowfullscreen></iframe> */}
                    </div>
                </div>
                <div>
                    <div class="more-img-and-videos">
                        <p>Więcej zdjęć i filmów znajdziesz na:</p>
                        <a class="fb-link before-img" target="_blank" href="https://www.facebook.com/G2Ucieczka">Facebook @G2Ucieczka</a>
                        <a class="yt-link before-img" target="_blank" href="https://www.youtube.com/channel/UCnziKIMl8RkG39k90V8SPRQ">YouTube @G2Ucieczka</a>
                    </div>
                </div>
            </div>
        </div>
        

        {/* CAROUSEL */}
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="insider">
                        <img class="img-car" src="img/screens/DS2018_1.jpg" alt=""/>
                        <img class="img-car" src="img/screens/DS2018_2.jpg" alt=""/>
                        <img class="img-car" src="img/screens/DS2018_3.jpg" alt=""/>
                        <img class="img-car" src="img/screens/DS2018_4.jpg" alt=""/>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="insider">
                        <img class="img-car" src="img/screens/DS2018_5.jpg" alt=""/>
                        <img class="img-car" src="img/screens/DS2018_6.jpg" alt=""/>
                        <img class="img-car" src="img/screens/Scr1.jpg" alt=""/>
                        <img class="img-car" src="img/screens/Scr2.jpg" alt=""/>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="insider">
                        <img class="img-car" src="img/screens/Scr3.jpg" alt=""/>
                        <img class="img-car" src="img/screens/Scr4.jpg" alt=""/>
                        <img class="img-car" src="img/screens/Scr5.jpg" alt=""/>
                        <img class="img-car" src="img/screens/Scr6.jpg" alt=""/>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
                </button>
        </div>


        {/* MODAL */}
        <div id="gallery-modal" class="modal fade" tabIndex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-huge">
              <div class="modal-content">
                    {/* CAROUSEL */}
                    <div id="innerCarousel" class="carousel slide" data-interval="false">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img class="" src="./img/screens/DS2018_1.jpg" alt=""/>
                            </div>
                            <div class="carousel-item">
                                <img class="" src="./img/screens/DS2018_2.jpg" alt=""/>
                            </div>
                            <div class="carousel-item">
                                <img class="" src="./img/screens/DS2018_3.jpg" alt=""/>
                            </div>
                            <div class="carousel-item">
                                <img class="" src="./img/screens/DS2018_4.jpg" alt=""/>
                            </div>
                            <div class="carousel-item">
                                <img class="" src="./img/screens/DS2018_5.jpg" alt=""/>
                            </div>
                            <div class="carousel-item">
                                <img class="" src="./img/screens/DS2018_6.jpg" alt=""/>
                            </div>
                            <div class="carousel-item">
                                <img class="" src="./img/screens/Scr1.jpg" alt=""/>
                            </div>
                            <div class="carousel-item">
                                <img class="" src="./img/screens/Scr2.jpg" alt=""/>
                            </div>
                            <div class="carousel-item">
                                <img class="" src="./img/screens/Scr3.jpg" alt=""/>
                            </div>
                            <div class="carousel-item">
                                <img class="" src="./img/screens/Scr4.jpg" alt=""/>
                            </div>
                            <div class="carousel-item">
                                <img class="" src="./img/screens/Scr5.jpg" alt=""/>
                            </div>
                            <div class="carousel-item">
                                <img class="" src="./img/screens/Scr6.jpg" alt=""/>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#innerCarousel" role="button" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        </a>
                        <a class="carousel-control-next" href="#innerCarousel" role="button" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        </a>
                        <a class="modal-close-btn" role="button" data-bs-dismiss="modal">
                            <span class="modal-close-btn-X" aria-hidden="true">&times;</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>


    </div>

    
  );
                        }
}

export default Gallery;