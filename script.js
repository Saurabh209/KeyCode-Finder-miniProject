

function onpress(e){
    document.querySelector(".code").innerHTML=`CODE:${e.keyCode} `

}

window.addEventListener('keypress',onpress);

