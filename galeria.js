window.addEventListener("load", init)

function ID(elem){
    return document.getElementById(elem);
}

function $(elem){
    return document.querySelectorAll(elem);
}

function init(){
  var tervezok = "";
  fetch('galeria.json')
    .then((response) => response.json())
    .then((data) => {
      console.log(data.zerowaste)
      proba(data.zerowaste,tervezok);

    });
    document.getElementById('alapGaleria').innerHTML = tervezok;
}
function proba(tomb,tervezok){
  for (let i = 0; i < tomb.length; i++) {
    console.log(tomb[i].tervezo)
    tervezok+='Tervező: '+(i+1) + tomb[i].tervezo+"<br>";
    
  }
  document.getElementById('alapGaleria').innerHTML = tervezok;
}
