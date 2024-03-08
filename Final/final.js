function onclick(e){
    const container_data = document.querySelector(".container");
    if(e.location=="0"){
        container_data.innerHTML="<p>character</p>";
    }else if(e.location=="3"){
        container_data.innerHTML="<p>numpad</p>";
    }

}



window.addEventListener('keypress',onclick);