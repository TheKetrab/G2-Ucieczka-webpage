import './FAQ.css';

function FAQ() {
  return (
    <main class="faq-main">
        <div id="faq">
            <div class="qa reveal">
                <div class="q">
                    <h2>Czy gra posiada poradnik?</h2>
                </div>
                <div class="a">
                    <div class="pseudo"></div>
                    Oficjalny poradnik do Ucieczki znajduje się pod linkiem:
                    Fanowski poradnik znajduje się tutaj:
                </div>
            </div>
            <div class="qa reveal">
                <div class="q">
                    <h2>Jak działa walka tarczą?</h2>
                </div>
                <div class="a">
                    <div class="pseudo"></div>
                    Założenie tarczy zwiększa ochronę bohatera oraz zapewnia bloki przed atakami bestii (tak, jak da się parować ciosy mieczy w normalnym Gothicu Ctrl+Down), ale stawia pewne ograniczenie: Mimo umiejętności walki bronią +60%, wojownik z tarczą wykonuje animację walki bronią jednoręczną +30%. Uzasadnione jest to tym, że ciężka tarcza uniemożliwia niezwykle szybkie ruchy bronią. Jedyną dodaną animacją w walce tarczą jest blokowanie tarczą (jedno z trzech).
                </div>
            </div>
            <div class="qa reveal">
                <div class="q">
                    <h2>Jak wygląda system nauki?</h2>
                </div>
                <div class="a">
                    <div class="pseudo"></div>
                    Przelicznik 5 za 5 znany z G2 byłby dla większości koneserów żałośnie banalny. Nie jest to jednak modyfikacja długości Nocy Kruka, dlatego koszt punktów nauki jest zbalansowany pomiędzy G2 a G2NK. W 'Ucieczce' max siły i zręczności to 100, a koszt drożeje od połowy tego progu. 
                </div>
            </div>
            <div class="qa reveal">
                <div class="q">
                    <h2>Jak działa umiejętność 'szybka nauka'?</h2>
                </div>
                <div class="a">
                    <div class="pseudo"></div>
                    Umiejętność szybkiego uczenia pozwala w kontekście całej gry zdobyć nawet o 5 poziomów więcej! UWAGA! Ta umiejętność nie zwiększa ilości punktów nauki przyznawanych za nowy poziom, a jedynie zmniejsza ilość doświadczenia potrzebną do uzyskania kolejnego poziomu. Dokładniej:

                    Bez umiejętności 'szybka nauka': exp_next = exp_next +(hero.level+1)*700
                    Z umiejętnością 'szybka nauka': exp_next = exp_next +(hero.level+1)*500                
                </div>
            </div>
            <div class="qa reveal">
                <div class="q">
                    <h2>Co daje umiejętność skradania?</h2>
                </div>
                <div class="a">
                    <div class="pseudo"></div>
                    Znacznie pomaga w kradzieży oraz pozwala podkraść się do cieniostwora, trolla i błotnego węża. Potwór nie jest wtedy w stanie nas usłyszeć ani wyczuć.
                </div>
            </div>
            <div class="qa reveal">
                <div class="q">
                    <h2>Jak działa wolne celowanie?</h2>
                </div>
                <div class="a">
                    <div class="pseudo"></div>
                    Wolne celowanie (GFA) skaluje umiejętności łucznicze/kusznicze ([0,100] → [60,100]) oraz czas naciągu ([0,100] → [80,130]). Na podstawie tego jest obliczana celność strzału. 
                </div>
            </div>
            <div class="qa reveal">
                <div class="q">
                    <h2>Jak działa tryb sprawiedliwości?</h2>
                </div>
                <div class="a">
                    <div class="pseudo"></div>
                    Jest to dodatkowy feature, dla chcących spróbować czegoś nowego. Wymusza grę bez kodów, zabrania zapisywania podczas walki oraz po wczytaniu gry ponownie losuje szyfr zamków w kufrach. 
                </div>
            </div>
            <div class="qa reveal">
                <div class="q">
                    <h2>Jaki poziom trudności wybrać?</h2>
                </div>
                <div class="a">
                    <div class="pseudo"></div>
                    Początek rozgrywki w Ucieczce jest stosunkowo trudny. Od trzeciego rozdziału gra staje się prostsza. Dlatego Ucieczka umożliwia dynamiczną zmianę poziomu trudności (tzn. dostosowanie go w trakcie gry). Poziomy trudności różnią się przede wszystkim ilością zadawanych obrażeń.

                    Łatwy: zbliżony trudnością do G2NK
                    Średni: trochę trudniejszy niż G2NK
                    Trudny: dla doświadczonych graczy
                    Bardzo trudny: dla takich, którzy nie lubią łatwych gier
                    Legendarny: dla tych, którzy lubią dużo wczytywać                
                </div>
            </div>
            <div class="qa reveal">
                <div class="q">
                    <h2>Co z respawnem?</h2>
                </div>
                <div class="a">
                    <div class="pseudo"></div>
                    Coraz groźniejsze potwory będą pojawiać się co rozdział. Rośliny nie będą odrastały.
                </div>
            </div>
        </div>
        
    </main>
  );
}

export default FAQ;
