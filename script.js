const container = document.querySelector("#container");
const btn = document.querySelector("button")
let side;
btn.addEventListener("click", prompto);
const containerSize = 960;
let boxSize;

function prompto(){
    var node = document.getElementById('container');

    while (node.hasChildNodes()) {
    node.removeChild(node.lastChild);
}
    side = parseInt(prompt("boxes per side"));
    console.log(side)
    boxSize = containerSize/side -2;
    fillBox()
}
function fillBox(){
    for( let i = 0; i <(side*side); i++){
    let div = document.createElement("div");
    div.classList.add("box")
    div.setAttribute("style",`width :${boxSize}px`);
    container.appendChild(div);
}
}

