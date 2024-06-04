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
        description: "Lamborghini è un'azienda italiana che produce autovetture sportive di lusso. Fondata nel 1963 da Ferruccio Lamborghini, ha sede a Sant'Agata Bolognese, in provincia di Bologna.",
        image: "yamaha.jpg",  // Sostituisci con URL immagine reale
        motogp: "Valentino Rossi è stato un campione in MotoGP, con ben 9 campionati mondiali vinti e uno sfiorato per colpa del suo rivale Mark Marquez. Passò a yamaha dopo che tutti gli dicevano che era facile vincere in sella alla moto più competitiva del tempo, passò in yamaha per far vedere che anche con una moto poco competitiva riusciva a stare davanti ai suoi rivali <br> Ha lasciato la MotoGP ed ha creato l'accademia VR46 che porta i giovani motociclisti a diventare campioni in ambito motociclistico.",
        motogpimage: "rossi.jpg"
    },
    aprilia: {
        description: "FIAT è un marchio automobilistico italiano, fondato a Torino nel 1899.  È il marchio principale di Stellantis, un gruppo multinazionale di case automobilistiche nato dalla fusione di PSA e FCA.",
        image: "aprilia.jpg",  // Sostituisci con URL immagine reale
        motogp: "lorem ipsum oltre dame",
        motogpimage: "apriliagp.jpg"
    }, 
    honda: {
        description: "FIAT è un marchio automobilistico italiano, fondato a Torino nel 1899.  È il marchio principale di Stellantis, un gruppo multinazionale di case automobilistiche nato dalla fusione di PSA e FCA.",
        image: "aprilia.jpg",  // Sostituisci con URL immagine reale
        motogp: "lorem ipsum oltre dame",
        motogpimage: "apriliagp.jpg"
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