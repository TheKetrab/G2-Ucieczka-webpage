import './History.css';

function History() {
  return (
    <div id="author">
        <h1>Autor i historia Ucieczki</h1>
        <p>
            Modyfikacja została stworzona przez Bartłomieja Grochowskiego o&nbsp;nicku 'TheKetrab'. Produkcja moda trwała
            przez 5&nbsp;lat. Początkowo modyfikacja nazywała&nbsp;się 'Armie zniechęcenia' (cokolwiek to znaczyło) i&nbsp;opowiadała
            krótką historię o&nbsp;magnatach ze&nbsp;Starego Obozu, którzy przeżyli i&nbsp;próbują odbić zamek z&nbsp;rąk orków. Ich obóz
            budowany był z&nbsp;desek nad pieczarą lodowego smoka. Jedyne pozostałości po tamtej fazie produkcji (lata&nbsp;2011-12)
            to 'pierścienie wierności'. Wtedy Gomez prosił bohatera o&nbsp;załatwienie trzech pierścieni od Arto, Blizny i&nbsp;Kruka
            jako dowód zaufania. Z tamtych czasów została też konwencja nazywania nowych NPC (NASZ_numer_imie) i&nbsp;przedmiotów (ItNa_instancja),
            wyniesiona z tutoriali czipa17. Niestety, pliki antycznej wersji przypadkiem znikły z&nbsp;komputera i&nbsp;TheKetrab
            rozpoczął prace od&nbsp;nowa.
        </p>
        <figure class="img-Screen">
            <div class="inside-archive-figure">
                <img class="double" src={process.env.PUBLIC_URL + "/img/archive/OLD.bmp"} alt=""/>
                <img class="double" src={process.env.PUBLIC_URL + "/img/archive/OLD1.bmp"} alt=""/>
            </div>
            <p>~ Archiwum: dawny wygląd obozu Łowców Orków i Myśliwych (październik 2015)</p>
        </figure>
        <p>
            Najpierw mod był tworzony weekendowo, to&nbsp;znaczy raz na&nbsp;tydzień twórca dobierał się do komputera
            u dziadków z&nbsp;zainstalowanym Gothiciem, słuchał muzyki z Risena&nbsp;1, wstawiał pojedyncze postacie, dialogi,
            misje i&nbsp;itemy. Po roku przeniósł się na swój komputer i&nbsp;rozwój modyfikacji znacznie
            przyśpieszył. W połowie 2015. roku na YT pojawił się krótki gameplay, prezentujący quest z&nbsp;pierwszego rozdziału
            (Aran&nbsp;-&nbsp;towarzystwo). Jakiś czas później TheKetrab udostępnił wersję Alpha z&nbsp;pierwszym rozdziałem
            (były to pierwsze betatesty). Przez kolejne dwa lata fabuła stawała się coraz bardziej kompletna i&nbsp;w&nbsp;2017. roku
            dało się ukończyć cztero-rozdziałową 'Ucieczkę'. Wtedy TheKetrab założył fanpage na Facebooku i&nbsp;rozpoczęły się
            dokładniejsze betatesty.
        </p>
        <figure class="img-OldScreens">
            <div class="inside-archive-figure">
                <img class="double" src={process.env.PUBLIC_URL + "/img/archive/Screen1Ready.jpg"} alt=""/>
                <img class="double" src={process.env.PUBLIC_URL + "/img/archive/Screen2Ready.jpg"} alt=""/>
            </div>
            <p>~ Archiwum: pierwotne screeny promujące modyfikację (2016)</p>
        </figure>
        <p>
            Okazało się, że&nbsp;modyfikację można było znacznie rozwinąć. Jeden z betatesterów, Fexo, zaproponował, że&nbsp;pomoże
            rozwinąć akcję i&nbsp;naprawić dziury w logice fabuły. Data premiery szacowana była na styczeń 2019. roku.
            Po półrocznej współpracy TheKetrab znów został sam i&nbsp;starał się dopracować szczegóły.
            W październiku 2018. roku mod zyskał nową nadzieję, ponieważ pracami nad Ucieczką zainteresował się Bogu,
            który specjalizuje się w skryptach ingerujących w silnik gry Gothic. Rok 2019 był niezwykle trudny,
            ponieważ kolejne betatesty pokazywały nowe błędy i trzeba było przeznaczać szmat czasu na ich poprawę.
            TheKetrab zajął się prowadzeniem prac dubbingowych, co trwało 4 miesiące. Powoli wszystko zmierzało ku końcowi,
            jednakże problemem okazał się być deadline. Twórca Ucieczki wyjeżdżał na 100 dni do USA,
            więc istniały dwa możliwe scenariusze: Zdążymy ukończyć Ucieczkę przed 15 czerwca albo Ucieczka zostanie wydana
            w październiku. Ta druga opcja była bardzo smutna, ponieważ celem było dać modyfikację graczom na wakacje.
            Dlatego dzięki mobilizacji wszystkich osób pracujących nad modem, udało się wyrobić w terminie i gra została oddana w Wasze ręce 1 lipca 2019 roku!
        </p>
        <figure class="img-TheKetrab">
            <img src={process.env.PUBLIC_URL + "/img/TheKetrab.png"} alt="" />
            <p>~ Pamiątkowe zdjęcie - podczas weekendowej pracy nad modem. (2018)</p>
        </figure>
        <p>
            'Pamiętam, że wyrwałem się z pracy około 17:30 (czasu Nowego Jorku), a moja kochana dziewczyna kryła mnie
            i usprawiedliwiała moją nieobecność :) Pobiegłem na wysoką górę, która była jedynym miejscem
            w pobliżu z zasięgiem. Usiadłem na skale i pisałem na telefonie z Maciey'em, który publikował modyfikację.
            Nie miałem dostępu do komputera, a co dopiero do plików ze swoim modem, dlatego w wersji 1.0
            pojawiły się takie przykre bugi jak chociażby nieprzenikające liście drzew albo nieaktywujący się rozdział 4.'
            ~TheKetrab.
        </p>
        <p>
            Z powodu nieobecności autora modyfikacji, patronat nad grą przejął bogu i odpowiadał na wszystkie pytania
            graczy oraz wydawał łatki do Ucieczki. W paździeniku rozpoczęto prace nad wersją 1.1.
            Niestety, brak czasu i poczucie braku sensu odwlekły wydanie modyfikacji w wersji 1.1. Zaplanowano przepisanie
            gry na nowowydany silnik Union, jednak nie doszło to do skutku. TheKetrab zaktualizował pakiety Ikarus oraz Lego
            do nowszych, stabilniejszych wersji i wreszcie 1 października 2020 roku, została opublikowana zapowiadana wersja 1.1.
        </p>
        <p>
            Już na spokojnie, hobbystycznie i 'weekendowo', tworzona była ostatnia oficjalna wersja Ucieczki.
            Finalna wersja rozwiązuje błędy zgłaszane przez graczy oraz wdraża wiele starych niezrealizowanych pomysłów.
            Poprawiony został dubbing i zostały dodane nowe systemy. Po dokładnie trzech latach od premiery modyfikacji,
            1 lipca 2022 roku wydana została wersja 1.2. Zapraszam do gry!
        </p>
    </div>

  );
}

export default History;
