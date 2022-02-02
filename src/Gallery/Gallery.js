import {useState} from "react";
import './Gallery.css';

import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';


function Gallery() {

    const images = [
        "/img/screens/DS2018_1.jpg",
        "/img/screens/DS2018_2.jpg",
        "/img/screens/DS2018_3.jpg",
        "/img/screens/DS2018_4.jpg",
        "/img/screens/DS2018_5.jpg",
        "/img/screens/DS2018_6.jpg",
        "/img/screens/Scr1.jpg",
        "/img/screens/Scr2.jpg",
        "/img/screens/Scr3.jpg",
        "/img/screens/Scr4.jpg",
        "/img/screens/Scr5.jpg",
        "/img/screens/Scr6.jpg",
    ]

    const showMyModal = (i) => {
        setModalShow(true);
        setModalCarouselIdx(i);
    }
    const hideMyModal = () => {
        setModalShow(false);
    }
    
    const carouselItemsFunc = (n,modal) => {

        let imgClass = modal ? 'img-modal' : `img-${n}-car`;

        var carouselItems = []
        for (let i=0; i<images.length; ) {
            let imgs = []
            for (let j=0; j<n && i<images.length; j++) {
                console.log(i)
                let k = i;
                imgs.push(<img class={imgClass}
                                src={process.env.PUBLIC_URL + images[i]}
                                onClick={() => showMyModal(k)}
                                alt=""/>)
                i++;
            }
            if (modal) {
                carouselItems.push(<Carousel.Item>{imgs}</Carousel.Item>)
            } else {
                carouselItems.push(<Carousel.Item><div class="insider">{imgs}</div></Carousel.Item>)
            }
        }
        return carouselItems;
    }

    const handleSelect = (selectedIndex, e) => {
        setModalCarouselIdx(selectedIndex);
      };

    // state
    const [modalCarouselIdx, setModalCarouselIdx] = useState(0);
    const [modalShow, setModalShow] = useState(false)
      
    var carouselItems = carouselItemsFunc(4,false)
    var carouselItems2 = carouselItemsFunc(1,true)
    
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
        
        <Carousel indicators={false}>
            {carouselItems}
        </Carousel>


        <Modal show={modalShow} onHide={hideMyModal}    className="gallery-modal"     dialogClassName="modal-huge">
            <Carousel fade activeIndex={modalCarouselIdx} indicators={false} onSelect={handleSelect}>
                {carouselItems2}
            </Carousel>
                <a className="modal-close-btn" role="button" data-bs-dismiss="modal" onClick={hideMyModal}>
                    <span class="modal-close-btn-X" aria-hidden="true">&times;</span>
                </a>
        </Modal>
        {/* MODAL */}
        {/* <div id="gallery-modal" class="modal fade" tabIndex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-huge">
              <div class="modal-content">

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
        </div> */}


    </div>

    
  );
    }
                        
export default Gallery;
