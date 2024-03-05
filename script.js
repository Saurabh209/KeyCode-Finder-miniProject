

function onpress(e){
    document.querySelector(".code").innerHTML=`KeyPressed: ${e.key} `;
    document.querySelector(".upperContainer").innerHTML="";

}

window.addEventListener('keypress',onpress);

