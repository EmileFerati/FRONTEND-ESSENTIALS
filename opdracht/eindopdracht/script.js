let leeftijd = prompt ("wat is je leeftijd");
let stemleeftijd = 16;

  // TRUE or FALSE
if(leeftijd >= stemleeftijd){
 //Als de gebruiker (bezoeker) 16 jaar dan wordt de achtergrond kleur van index.html een oranje-achtige kleur

}
document.querySelector("body").style.backgroundColor = 'orange';


// let persoon = {
//     voornaam : prompt("Wat is je naam?"),
//     achternaam : prompt("Wat is je achternaam?"),
//     leeftijd : prompt("Wat is je leeftijd?"),
// };
// console.log(persoon)

// let persoonelement = document.querySelector(".container")
// persoonelement.innerHTML = "Emile Ferati"

let mijnLeeftijd= prompt("wat is je leeftijd?");
let stemGerechtigheid= 18
let oranjekleur= 16
let blauwkleur= 17
let groenkleur= 19
if (mijnLeeftijd==stemGerechtigheid){
   // Als de gebruiker (bezoeker) 16 jaar dan wordt de achtergrond kleur van index.html een oranje-achtige kleur
   document.querySelector("body").style.backgroundColor="gold"
}
if (mijnLeeftijd==oranjekleur){
   document.querySelector("body").style.backgroundColor="orange"
}
if (mijnLeeftijd==blauwkleur){
   document.querySelector("body").style.backgroundColor="blue"
}
if (mijnLeeftijd==groenkleur){
   document.querySelector("body").style.backgroundColor="green"
}

