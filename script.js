

function onpress(e){
    const newCode=document.querySelector(".upperContainer").innerHTML=`<h2>KeyPressed: ${e.key} </h2><br><p>${e.keyCode}`;
    console.log(e.target.value);

}

window.addEventListener('keypress',onpress);

