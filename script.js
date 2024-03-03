const data=document.querySelector("p");

function onclick(){
    document.body.innerHTML='<h5>Clicked</h5>';
    console.log("clicked");
}


data.addEventListener(click,"onclick");
