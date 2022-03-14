// console.log("Début du script !");
// setTimeout(function (){
//     console.log("Cela fait 5 secondes.");
// }, 5000);
// console.log("Fin du script !");


// let nbDecompte = 0;
// console.log("Nouveu timer !");
// let timer = setInterval(function(){
//         console.log(`Coucou ${nbDecompte++}`);
//     }, 2000);
// console.log("J'ai fini !");

// document.addEventListener("click", ()=>{
//     clearInterval(timer);
//     console.log("Je stoppe le timer.");
// });


//-----------------Feu tricolore--------------------//

let formCircle = document.querySelectorAll(".formCircle");
function repeat (){
    setTimeout(()=>{
        formCircle[0].classList.remove("redColor");
        formCircle[2].classList.add("greenColor");
        setTimeout(()=>{
            formCircle[2].classList.remove("greenColor");
            formCircle[1].classList.add("orangeColor"); 
            setTimeout(()=>{
                formCircle[1].classList.remove("orangeColor");
                formCircle[0].classList.add("redColor");
                repeat ();
            }, 1500);
        }, 3000);
    }, 2000);
};
repeat ();


//-----------------Clignotant--------------------//

const cligno = document.querySelector('.cligno');
setInterval(function (){
    cligno.classList.toggle('colorCligno');
}, 500);


//-----------------Div affiché temporairement--------------------//

const bg = document.querySelector(".bg");
setTimeout(()=>{
    bg.classList.add("dBlock");
}, 5000);
setTimeout(()=>{
    bg.classList.remove("dBlock");
}, 10000);


//-----------------Barre de progression--------------------//

const progressBar = document.querySelector('#progressBar');
let width = 0;
setInterval(()=>{
    if (width >= 100) {
        width = 0;
    } else {
        width++;
        progressBar.style.width = width + '%';
    }
}, 50);

//-----------------Arc en ciel--------------------//

const arc = document.querySelector('.arc');
setInterval(()=>{
    setTimeout(()=>{
        arc.classList.add("blue");
        arc.classList.remove("violet");
    }, 0);
    setTimeout(()=>{
        arc.classList.add("pink");
        arc.classList.remove("blue");
    }, 2000);
    setTimeout(()=>{
        arc.classList.add("violet");
        arc.classList.remove("pink");
    }, 4000);
}, 6000);