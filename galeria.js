window.addEventListener("load", init)

function ID(elem){
    return document.getElementById(elem);
}

function $(elem){
    return document.querySelectorAll(elem);
}

function init(){
  var tervezok = "";
  var kep = "";
  var img = document.createElement("img");
  fetch('galeria.json')
    .then((response) => response.json())
    .then((data) => {
      console.log(data.zerowaste)
      proba(data.zerowaste,tervezok);
      galleriaKepek(data.zerowaste,kep);

    });
    document.getElementById('galeria').innerHTML = tervezok;
}
function proba(tomb,tervezok){
  for (let i = 0; i < tomb.length; i++) {
    console.log(tomb[i].tervezo)
    tervezok+='Tervező: '+(i+1) + tomb[i].tervezo+"<br>";
    
  }
  document.getElementById('galeria').innerHTML = tervezok;
}
function galleriaKepek(tomb,kep){
  for (let i = 0; i < tomb.length; i++) {
    kep+=`<img src="zerowaste/${tomb[i].kepek[0]}" alt="">`;
    
    
    
  }
  document.getElementById('galeria').innerHTML = kep;
}
