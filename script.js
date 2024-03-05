

function onpress(e){
    document.querySelector(".code").innerHTML=`KeyPressed: ${e.key} `;
    document.querySelector(".upperContainer").innerHTML="";
    console.log(e.target.value);

}

window.addEventListener('keypress',onpress);

