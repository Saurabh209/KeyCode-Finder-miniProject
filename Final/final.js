
function onpress(e){
    const viewContainer = document.querySelector(".afterContainer");
    viewContainer.className=".afterContainerVisible";

    const target=document.querySelector(".before");
    target.classList="hidden";
    console.log(e.key,e.keyCode,e.location);
   
 };

window.addEventListener('keydown',onpress);