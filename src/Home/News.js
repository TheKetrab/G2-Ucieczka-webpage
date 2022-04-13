import './News.css';

function News() {
  return (
    <div id="news" class="panel">
        <h1 class="news-header">Aktualności</h1>
        <div id="grid">

            {/* <!-- <div>
                <div class="an-article">
                    <p class="title"></p>
                    <p class="date"></p>
                    <img src="" />
                    <p class="description">
                        
                    </p>
                </div>
            </div> --> */}

            <div class="reveal">
                <div class="an-article">
                    <h2 class="title">Patch 1.1 wydany!</h2>
                    <p class="date">1 października 2020</p>
                    <img class="news-media" src={process.env.PUBLIC_URL + "/img/news/Ucieczka11Screen2_400.png"} alt="" />
                    <p class="description">
                        Po długim czasie wychwytywania i naprawiania usterek oraz rozwijania pewnych niedokończonych modułów
                        z wielką przyjemnością udostępniam Ucieczkę w wersji 1.1. Uzupełniłem dubbing, poprawiłem jakość nagrań
                        oraz podgłośniłem je z 91-92dB do 95-96dB. Do zdobycia jest 30 osiągnięć, a ich lista pozostaje tajna.
                        Zapisywane są one w dzienniku, a w wersji na Spine będą przyznawane na konto gracza.
                        Bugi związane z przenikalnością obiektów, nieprzenikalnością liści, quickslotem oraz wydajnością zostały naprawione.
                        Użyte pakiety skryptowe Ikarus oraz LeGo zostały zaktualizowane do nowszych wersji, zatem powinno być mniej błędów Access Violation.
                        FreeAim został dostosowany do potrzeb Ucieczki - od nauczenia się strzelania z łuku na 10%, celność Willa znacznie wzrasta.
                        Odsyłam do działu <a href="./download.html">download</a>, skąd można pobrać modyfikację.
                        <br/><br/>
                        Powodzenia dla Was wszystkich!
                    </p>
                </div>
            </div>
            <div class="reveal">
                <div class="an-article">
                    <h2 class="title">Ucieczka 1.1 nadchodzi</h2>
                    <p class="date">23 sierpnia 2020</p>
                    <div class="news-media video-wrapper">
                        <iframe src="https://www.youtube.com/embed/_0u0KZl4qp8"
                                frameBorder="0" allowFullScreen></iframe>
                    </div>
                    <p class="description">
                        Po długim czasie wychwytywania i naprawiania usterek oraz
                        rozwijania pewnych niedokończonych modułów z wielką przyjemnością
                        udostępniam Ucieczkę w wersji 1.1. Uzupełniłem dubbing, poprawiłem
                        jakość nagrań oraz podgłośniłem je z 91-92dB do 95-96dB.
                        Do zdobycia jest 30 osiągnięć, a ich lista pozostaje tajna.
                        Zapisywane są one w dzienniku, a w wersji na Spine będą przyznawane
                        na konto gracza. Bugi związane z przenikalnością obiektów, nieprzenikalnością liści,
                        quickslotem oraz wydajnością zostały naprawione. Użyte pakiety skryptowe Ikarus
                        oraz LeGo zostały zaktualizowane do nowszych wersji, zatem powinno być mniej błędów
                        Access Violation. FreeAim został dostosowany do potrzeb Ucieczki - od nauczenia
                        się strzelania z łuku na 10%, celność Willa znacznie wzrasta. Odsyłam do działu download,
                        skąd można pobrać modyfikację.
                    </p>
                </div>
            </div>
            <div class="reveal">
                <div class="an-article">
                    <h2 class="title">Youtuberzy nagrywają</h2>
                    <p class="date">20 kwietnia 2020</p>
                    <div class="news-media video-wrapper">
                        <iframe src="https://www.youtube.com/embed/jMHMEnPUdrg"
                                frameBorder="0" allowFullScreen></iframe>
                    </div>
                    <p class="description">
                        Ucieczkę na swoich kanałach przeszło już wielu znanych youtuberów. Jeśli od grania wolicie oglądanie, słuchanie żartów
                        i zajadanie popcornu, to koniecznie zajrzyjcie na ich kanały! Poniżej zamieszczam listę z linkami do playlist z ich gry.
                        Kolejnym śmiałkiem, który podjął się nagrania modyfikacji jest Robinskateboard. Ile godzin mu to zajmie? :)
                        {/* <ul style="align-self: start; margin: 0;">
                            <li><a href="https://www.youtube.com/watch?v=jMHMEnPUdrg&list=PLSmrAkvPVbpcwN1ntimPkLwcjn_WEF3Cf">Robinskateboard</a></li>
                            <li><a href="https://www.youtube.com/watch?v=xNiqXeS1LEo">WAGON</a></li>
                            <li><a href="https://www.youtube.com/watch?v=xlF5uMqYdYI">Archi</a></li>
                            <li><a href="https://www.youtube.com/watch?v=J0zJRXGeEo4&list=PLTmnb9A8LdO4lhk_70oALEdNvbOfBUxQr">Majes</a></li>
                            <li><a href="https://www.youtube.com/playlist?list=PLMmvrFRP0vqYx-1IQ2BYa731g_HafjJOQ">Baal Bracken</a></li>
                            <li><a href="https://www.youtube.com/watch?v=6qIeW-rn5BU&list=PLBwgxPpmcZmi8ioBuE1L3eAKA79xz-LSJ">Ben Shi</a></li>
                        </ul> */}
                    </p>
                </div>
            </div>
            <div class="reveal">
                <div class="an-article">
                    <h2 class="title">Ucieczka w nowym roku</h2>
                    <p class="date">1 stycznia 2020</p>
                    <div class="fake-img"></div>
                    <p class="description">
                        Patch w wersji 1.1 zaplanowany był jeszcze na koniec 2019, jednak z powodu braku czasu w roku szkolnym prace nie były kontynuowane
                        'na zabój', a wyłącznie hobbystycznie, czasami, weekendowo. Dołożyłem wszelkich starań, aby wydać Ucieczkę przed kilkumiesięcznym wyjazdem
                        i dać Wam kompletną modyfikację na wakacyjne wieczory. Teraz pora na odpoczynek. Błędy zgłaszane przez graczy są naprawiane,
                        część dubbingu dogrywana i podgłaśniana, system skryptowy przepisywany na Uniona. Oficjalnej łatki można spodziewać się w wakacje 2020.
                    </p>
                </div>
            </div>
            <div class="reveal">
                <div class="an-article">
                    <h2 class="title">Pierwszy patch</h2>
                    <p class="date">16 lipca 2019</p>
                    <div class="fake-img"></div>
                    <p class="description">
                        W dziale Download dostępna jest wersja 1.0.1 zwierająca wszystkie dotychczas wydane łatki. <u>Nie jest to patch 1.1.</u>&nbsp; 
            			Zasadniczy patch jest planowany dopiero na przyszł rok!
                    </p>
                </div>
            </div>
            <div class="reveal">
                <div class="an-article">
                    <h2 class="title">Ucieczka ukończona!</h2>
                    <p class="date">1 lipca 2019</p>
                    <img class="news-media" src={process.env.PUBLIC_URL + "/img/news/Release_400.jpg"} alt="" />
                    <p class="description">
                        Modyfikację w wersji 1.0 możecie pobrać w dziale Download.
                    </p>
                </div>
            </div>
            <div class="reveal">
                <div class="an-article">
                    <h2 class="title">Trailer i data premiery</h2>
                    <p class="date">9 czerwca 2019</p>
                    <div class="news-media video-wrapper">
                        <iframe src="https://www.youtube.com/embed/Ku6fHRBt2uQ"
                                frameBorder="0" allowFullScreen></iframe>
                    </div>
                    <p class="description">
                    </p>
                </div>
            </div>
            <div class="reveal">
                <div class="an-article">
                    <h2 class="title">Tysiąc polubień!</h2>
                    <p class="date">7 maja 2019</p>
                    <a class="news-media" target="_blank" href="https://www.facebook.com/G2Ucieczka/photos/a.275946012923184/643319952852453/?type=3&theater">
                        <img width="100%" src={process.env.PUBLIC_URL + "/img/news/screen1k.jpg"} alt="" />
                    </a>
                    <p class="description">
                        Z okazji tysiąca polubień na Facebooku, przygotowałem małe zestawienie
                        stanu prac. Prace z dubbingiem zmierzają w dobrą stronę i mimo że przed
                        nami jeszcze trochę do nagrania, to tempo z jakim udaje się to robić
                        pozwala zachować optymizm.                        
                    </p>
                </div>
            </div>
            <div class="reveal">
                <div class="an-article">
                    <h2 class="title">Drugi gameplay</h2>
                    <p class="date">22 kwietnia 2019</p>
                    <div class="news-media video-wrapper">
                        <iframe src="https://www.youtube.com/embed/hj6cU6NoJgM"
                            frameBorder="0" allowFullScreen></iframe>
                    </div>
                    <p class="description">
                        Kolejny gameplay przedstawia jedno z początkowych zadań oraz dubbing.
                        Razem z Willem zakradamy się do skrzyni Louisa i wykradamy mapę.
                        Warto zaznaczyć, że mapa, która jest pokazana na filmie, już jest
                        zmieniona na całkowicie autorską, nową mapę świata!
                    </p>
                </div>
            </div>
            <div class="reveal">
                <div class="an-article">
                    <h2 class="title">Timelapse</h2>
                    <p class="date">4 listopada 2018</p>
                    <div class="news-media video-wrapper">
                        <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FG2Ucieczka%2Fvideos%2F296467000995156%2F&show_text=0&width=560"
                            frameBorder="0" allowFullScreen></iframe>
                    </div>
                    <p class="description">
                    </p>
                </div>
            </div>
            <div class="reveal">
                <div class="an-article">
                    <h2 class="title">Pierwszy gameplay</h2>
                    <p class="date">18 września 2018</p>
                    <div class="news-media video-wrapper">
                        <iframe src="https://www.youtube.com/embed/3kXTf43RVV4"
                        frameBorder="0" allowFullScreen></iframe>
                    </div>
                    <p class="description">
                        Nagrałem dziś trzyminutowy film pokazujący eksplorację pewnego tajemniczego miejsca.
                        Oczywiście w Ucieczce przełączników, kombinacji i&nbsp;eventów będzie sporo :) 
                        Kolejne materiały i&nbsp;info wkrótce. 
                        [warto przyjrzeć się kombosom wrogów i&nbsp;wolnemu celowaniu, o&nbsp;którym pisałem już wcześniej]
                    </p>
                </div>
            </div>
        </div>
    </div>
        
    );
}

export default News;
