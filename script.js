const buttons = document.querySelectorAll('.brand-button');
const descriptionDiv = document.getElementById('brand-description');

const brandDescriptions = {
    ducati: {
        description: "La Ducati è un marchio di motociclette italiano di fama mondiale. Fondata nel 1926 a Bologna, la Ducati ha una lunga storia di successi nel motociclismo e di produzione di moto di alta qualità. Oggi, la Ducati è di proprietà del Gruppo Volkswagen tramite la sua controllata Audi. Le moto Ducati rappresentano il sogno dei motociclisti appassionati in oltre 60 paesi di tutto il mondo.",
        image: "ducati.png",
        motogp: "Ducati è la casa più vincente degli ultimi tempi nella MotoGP, con Francesco Bagnaia in sella alle moto di nuova generazione. La casa di Borgo Panigale partecipa al Campionato Mondiale MotoGP dal 2003. Nel corso degli anni, le moto Ducati hanno trionfato su 20 circuiti diversi. Alcune delle piste in cui la Desmosedici ha ottenuto più successi includono Motegi, Sepang, Losail e Red Bull Ring, con cinque vittorie ciascuna. Al Mugello, Montmelò e Phillip Island, Ducati ha ottenuto quattro vittorie. Inoltre, Ducati ha centrato un totale di 32 podi nella stagione 2022, con 6 piloti diversi, tra cui 12 vittorie. <br>Queste moto hanno molta elettronica per poterla portare al limite, oltre all'elettronica hanno un sacco di aerodinamica, che negli ultimi anni sta diventando sempre più presente.",
        motogpimage: "pecco.jpg"

    },
    yamaha: {
        description: "Il marchio Yamaha è leggendario nel mondo delle motociclette. Fondato nel maggio 1955 a Shizuoka, Giappone, il suo nome completo è Yamaha Motor Company. Questo marchio è specializzato nella produzione di veicoli a due ruote, tra cui moto, scooter, ciclomotori, biciclette elettriche e altro ancora. Il logo Yamaha è composto da tre diapason sovrapposti, che rappresentano le tre principali aree di attività dell’azienda: la produzione di motociclette, strumenti musicali e motori marini. Se sei interessato a esplorare la gamma di moto Yamaha, dai un’occhiata al sito ufficiale di Yamaha Motor Italia per conoscere le caratteristiche, i prezzi e i servizi disponibili.",
        image: "yamaha.jpg",  
        motogp: "Valentino Rossi è stato un campione in MotoGP, con ben 9 campionati mondiali vinti e uno sfiorato per colpa del suo rivale Mark Marquez. Passò a yamaha dopo che tutti gli dicevano che era facile vincere in sella alla moto più competitiva del tempo, passò in yamaha per far vedere che anche con una moto poco competitiva riusciva a stare davanti ai suoi rivali <br> Ha lasciato la MotoGP ed ha creato l'accademia VR46 che porta i giovani motociclisti a diventare campioni in ambito motociclistico.",
        motogpimage: "rossi.jpg"
    },
    aprilia: {
        description: "Aprilia è una casa motociclistica italiana con una storia affascinante. Fondata nel 1945 a Noale, in provincia di Venezia, Aprilia è diventata parte del Gruppo Piaggio nel dicembre 2004. L’Aprilia fu fondata subito dopo la fine della seconda guerra mondiale dal Cavalier Alberto Beggio.Inizialmente, l’azienda produceva biciclette per soddisfare la crescente richiesta del periodo. <br> Il nome “Aprilia” fu scelto da Beggio in omaggio alla Lancia Aprilia, una vettura lanciata nel 1937 dalla casa automobilistica Lancia",
        image: "aprilia.jpg", 
        motogp: "Aprilia ha conquistato 54 titoli mondiali in vari campionati grazie a diversi piloti. Nel motomondiale, ha ottenuto 294 Gran Premi, posizionandosi al primo posto tra i costruttori europei in termini di vittorie. <br>Nel mondiale Superbike, ha registrato 52 vittorie e 172 podi, oltre a 8 vittorie nella Superstock 1000 FIM Cup",
        motogpimage: "apriliagp.jpg"
    }, 
    honda: {
        description: "Il marchio Honda è una presenza iconica nel mondo delle motociclette. Fondata nel 1948 da Soichiro Honda e Takeo Fujisawa, l’azienda ha guadagnato una reputazione di eccellenza nel settore delle due ruote. Nel 1949, la prima moto Honda, chiamata “Dream” (ossia “sogno”), ha segnato l’inizio del cammino della Honda verso il ruolo di primo produttore giapponese di motociclette. Da allora, la Honda ha realizzato oltre 400 milioni di esemplari di moto in tutto il mondo",
        image: "honda.png",  
        motogp: "Honda è un marchio iconico nel mondo delle corse motociclistiche, e la sua presenza in MotoGP è di grande rilevanza.Il Repsol Honda Team è il team ufficiale di Honda in MotoGP.La moto utilizzata dal team è la RC213V, una macchina altamente competitiva negli scorsi anni che con l'avento dell'elettronica e dell'importanza dell'aerodinamica ha perso competività. <br>Marc Marquez in crisi con la casa motociclistica Honda, nella stagione 2024, è passato in Pramac, una sottocasa che usa moto Ducati della stagione 2023, dove Marc è molto competitivo.",
        motogpimage: "marquez.jpg"
    },
};

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const brand = button.dataset.brand;
        const brandData = brandDescriptions[brand];

        descriptionDiv.innerHTML = `
            <p>${brandData.description}</p>
            <img src="${brandData.image}" alt="${brand}">
            <h3>Moto GP</h3>
            <p>${brandData.motogp}</p>
            <img src="${brandData.motogpimage}" alt="${brand + "moto GP"}">
        `;
        descriptionDiv.classList.remove('hidden');
    });
});