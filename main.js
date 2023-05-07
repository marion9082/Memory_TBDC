// Déclarer un tableau

let jeuTableau;
let allCards = document.querySelectorAll(".card");
let cptClickCurrent = 0;
let dataImageShowed;

allCards.forEach((card) => {
    card.addEventListener("click", function () {
        playGame(card);
    });
});

function playGame(card) {
    cptClickCurrent++;
    card.classList.remove("hidden");

    if (cptClickCurrent == 1) {
        // premier click je cache les images trouvées avant
        allCards.forEach(card => {
            if (card.classList.contains("finded")) {
                // C'est bon, on ne fait rien
            } else {
                // pas trouvé, on cache
                card.classList.add("hidden");
    }
})


        // J'affiche la carte que je viens de cliquer
        card.classList.remove("hidden");
        // Je stocke la réponse derrière la carte et je la retourne
        dataImageShowed = card.dataset.image;        
        }
        else if (cptClickCurrent == 2) {
            // deuxième click, je stocke la réponse derrière la carte et je la retourne
            card.classList.remove("hidden");
            if (dataImageShowed == card.dataset.image) {
                allCards.forEach(card => {
                    if (card.classList.contains("hidden")) {
                    } else {
                        card.classList.add("finded");
                        
                    }
                    })

            }

        cptClickCurrent = 0;
        dataImageShowed = "";
    
    // Compter les cards qui n'ont pas la classe 'finded' , si 0 alors on a gagné
    }
}
