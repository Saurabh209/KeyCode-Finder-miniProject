const Key=document.querySelector("#event.key");
const code=document.querySelector("#eventcode");
const Which=document.querySelector("#event.which");
const more=document.querySelector("#event.more");
// const Key=document.querySelector("#event.key");
// const Key=document.querySelector("#event.key");


function onpress(e){
    const newCode=document.querySelector(".upperContainer").innerHTML=`<h2>KeyPressed: ${e.key} </h2><br><h1 style="font-size:90px">${e.which}</h1><br><h5> The keyCode`;    


}

window.addEventListener('keypress',onpress);

