const container = document.querySelector("#container");
const btn = document.querySelector("button")
const hexCharacters = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
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
    div.addEventListener("mouseover", function() {
      
        let hexColorRep = "#"
        for (let index = 0; index < 6; index++){
            const randomPosition = Math.floor ( Math.random() * hexCharacters.length ) 
            hexColorRep += hexCharacters[randomPosition]
        }
        div.style.backgroundColor = `${hexColorRep}`;
    });
}

}
function getCharacter(index) {
	return hexCharacters[index]
}


