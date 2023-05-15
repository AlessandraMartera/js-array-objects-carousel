// Array di oggetti conteneti i dati per costruire il carosello
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvels Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
    }
];

// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l’immagine grande in modo da poter stilare lo slider.
const next = document.querySelector(".button.next");
const before = document.querySelector(".button.before");
const items = document.querySelectorAll(".item");
const elItemSingle = document.querySelector(".item");

for ();
// const elItemSingle = document.querySelector(".item");
console.log(items);
console.log(next);
console.log(next);

let count = 0;

// button next img
next.addEventListener("click",
    function () {
        if ( count < ( items.length - 1 )) {

            // rimuovo dal div dell'img in cui suono posizionata la classe active
            items[count].classList.remove("active");
            
            // incremento il contatore dell'immagine su cui sono posizionata in questo momento
            count++;
            console.log(count);

            // and aggiungo la classe active al successivo
            items[count].classList.add("active");

            if ( count !== 0 ) {
                before.classList.remove("hidden");
            }

            if ( count === (items.length - 1)) {
                next.classList.add("hidden");
            }
        }

    }
)

// button before img
before.addEventListener("click",
    function () {
        if ( count >= 0) {

            // rimuovo dal div dell'img in cui suono posizionata la classe active
            items[count].classList.remove("active");

            // incremento il contatore dell'immagine su cui sono posizionata in questo momento
            count--;
            console.log(count);

            // and aggiungo la classe active al successivo
            items[count].classList.add("active");

            if ( count < (items.length - 1)) {
                next.classList.remove("hidden");
            }

            if ( count === 0 ) {
                before.classList.add("hidden");
            }
        }

    }
)



// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell’utente sulle frecce verso sopra e sotto, l’immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

// Milestone 2:
// Aggiungere il **ciclo infinito** del carosello.
// Ovvero se l’immagine attiva è la prima e l’utente clicca la freccia verso sopra, l’immagine che deve attivarsi sarà l’ultima e viceversa per l’ultima miniatura se l’utente clicca la freccia verso sotto.