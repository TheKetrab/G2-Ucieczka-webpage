import DownloadBtn from '../Page/DownloadBtn';
import './Download.css';

function Download() {
  return (
    <div id="download" class="panel">
        <aside class="left">
            <div class="img-u12-wrapper">
                <img id="img-u12" src={process.env.PUBLIC_URL + '/img/news/Ucieczka12Screen1_400.png'} />
            </div>
            <DownloadBtn/>
            <div id="assets">
                <h2>Zasoby do pobrania:</h2>
                    <ul>
                        <li><a target="_blank" href="https://drive.google.com/file/d/1T1JCEkdrVGNkWli96qMYib4iNYPNB5-b/view?usp=sharing">Instalator</a></li>
                        <li><a target="_blank" href="https://drive.google.com/file/d/1MAImALRWHq9w_Zo8__6kwGTP369jNUQs/view?usp=sharing">Poradnik</a></li>
                        <s><li><a target="_blank" href="">Paczka z modem</a></li></s>
                        <s><li><a target="_blank" href="">Paczka z dubbingiem</a></li></s>
                        <li><a target="_blank" href="https://github.com/TheKetrab/G2-Ucieczka">Skrypty</a></li>
                        <s><li><a target="_blank" href="">Paczka developerska</a></li></s>
                    </ul>
            </div>
        </aside>
        <aside id="description" class="right">
            <p>
                Ucieczka to mod total-conversion do gry Gothic 2 Noc Kruka osadzony w Górniczej Dolinie
                po wydarzeniach z oryginalnego G2NK. Gracz wciela się w postać Willa,
                który nie posiada zbyt wiele umiejętności, ale - czego nie można mu odmówić -
                jest bardzo ciekawy świata, przez co nieraz pakuje się w tarapaty.
                Po opuszczeniu wyspy Khorinis przez bezimiennego bohatera znanego wszystkim z sagi GOTHIC,
                kapitan Garond postanowił powrócić wraz z całym dobytkiem magicznej rudy do Khorinis.
                Podczas pokonywania przełęczy został zatrzymany przez orków. Wtedy też Lord Hagen
                wydał rozkaz zasypania przejścia przez przełęcz, aby uchronić miasto przed inwazją wrogich stworów.
                Jednak ludzi w Górniczej Dolinie nie zabrakło. Przeciwnie - nowy układ sił i kres okupowania
                kopalni przez paladynów zachęcił kolejnych śmiałków do eksploatacji terenów bogatych w przeróżne surowce.
                Jak młody bohater poradzi sobie w pełnej niebezpieczeństw krainie? Czy ludzie wydostaną się
                z odciętej od świata Kolonii? I czy wojna z orkami jest jeszcze do wygrania?
                Przekonasz się o tym grając w 'Ucieczkę'.
            </p>
            <ul class="mod-features">
                <li>czas gry: 30-40h (5 rozdziałów)</li>
                <li>pełen polski dubbing</li>
                <li>stopień trudności: do wyboru w opcjach </li>
                <li>ponad 100 rozbudowanych questów </li>
                <li>możliwość dołączenia do jednej z dwóch gildii</li>
                <li>zwiększona inteligencja walki oraz kombosy innych NPC</li>
                <li>rozbudowana Górnicza Dolina </li>
                <li>nowe umiejętności: destylacja, górnictwo, regeneracja, szybka nauka, walka tarczą</li>
                <li>walka z bossami, system osiągnięć i reputacji</li>
                <li>100 rozsianych po świecie złóż rudy, złota, węgla i kryształów</li>
                <li>zmienne ekrany wczytywania</li>
                <li>nowe przedmioty (m. in. zaklęcia i tarcze)</li>
                <li>inne bajery (QuickSlot, FreeAim, szybkie rabowanie przeciwników)</li>
            </ul>
        </aside>
        <svg viewBox="0 0 100 100" id="download-breaker" preserveAspectRatio="none">
            <polygon points="0,0 100,25 100,75  0,100" />
        </svg>    
    </div>
  );
}

export default Download;
