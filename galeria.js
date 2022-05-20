window.addEventListener("load", init)

function ID(elem){
    return document.getElementById(elem);
}

function $(elem){
    return document.querySelectorAll(elem);
}
var kep = "";
function init(){

  api("galeria.json","zerowaste");
  api("galeria.json","kreativ");
}
function api(eleres,galleria){
  fetch(eleres)
    .then((response) => response.json())
    .then((data) => {
      console.log(data[galleria])
      galleriaKepek(data[galleria],kep,galleria);

    });

}
function galleriaKepek(tomb,kep,galleriaa){
  for (let i = 0; i < tomb.length; i++) {
    kep+='<div class= "kepBlock">'
    kep+=`<img src="${galleriaa}/${tomb[i].kepek[0]}" alt="">`;
    kep+=`<h2>${tomb[i].model}</h2>`;
    kep+="</div>"
  }
  document.getElementById('galleria').innerHTML += kep;
}
function gombAdd(){
  let gomb = "";
  document.getElementById('galleriaSelect').innerHTML += gomb;

}
function gombFunkcio(){
  

}
