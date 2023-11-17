"use scrict"

/*# carosello

1. mi creo  un array di immagini e le salvo in una costante.
2. utilizzo il ciclo for per ciclare le immagini.
3. mi seleziono la classe item e gli appendo l'immagine 1 che deve essere visibile.
4. gli aggiungo  la classe active.
5. mi prendo gli elementi freccia e le salvo in una variabile. 
6. utilizzo l'evento on click sulle frecce.
7. aggiungo e tolgo la classe active.*/         


const items = document.querySelector(".items");
const immagini = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"]
console.log(immagini)
let conteggio = 0
const next = document.querySelector(".next")


for (i = 0; i < immagini.length; i++) {
    console.log([i]    )
    const next = document.querySelector(".next");
    console.log(next)

    const item = document.createElement("div");
    item.classList.add("item");
    items.append(item);

    const img = document.createElement("img");
    img.src = immagini[i];
    item.append(img)
    console.log(items)

    if (i === conteggio) {
        item.classList.add("active")
    }


}
const slider = document.querySelectorAll(".item");
console.log(slider);


    
setInterval(autoplay, 3000);
console.log(autoplay)

function autoplay(){
    if (conteggio < slider.length) {
        console.log(conteggio)
        console.log(slider)

        slider[conteggio].classList.remove("active");
        conteggio++
        slider[conteggio].classList.add("active");


    }

    if(conteggio === slider.length){
        conteggio = 0
        slider[conteggio].classList.add("active")

        slider[slider.length-1].classList.remove("active")    
    }
  
}
const carosello = autoplay()

   
    


const prev = document.querySelector(".prev")
prev.addEventListener("click", function () {
    const slider = document.querySelectorAll(".item");
    console.log(slider);

    if (conteggio > 0){
        slider[conteggio].classList.remove("active");
        conteggio--;
        console.log(conteggio)
        slider[conteggio].classList.add("active");
    }

});

