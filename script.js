
const historyArray = [];

let data;

// function history(e){
//   const dataHistory=document.querySelector("#history-data");
//   const allhistory=document.createElement('p');
//   allhistory.innerText="history added";
//   dataHistory.append(historyArray);
//   console.log("running");
       
// }


function space(e){
  if(e.key==" "){
    document.querySelector("eventKey").innerHTML=`<P>Space</P>`;

  }
}


function onpress(e){
  e.preventDefault();
    data=document.querySelector(".afterContainer");
    data.innerHTML=`<div class="upperContainer">
    <h2>KeyPressed: ${(e.key==" ")? 'Space':e.key} </h2><br><h1 style="font-size:150px;
    background-image: linear-gradient(
      -225deg,
      #ffde0b 0%,
      #10507a 29%,
      #ff1361 67%,
      #95ff00 100%
    );
    background-size: auto auto;
    background-clip: border-box;
    background-size: 200% auto;
    color: #fff;
    background-clip: text;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: textclip 4s linear infinite;
    ">${e.which}</h1><br><h5> The keyCode</h5>
  </div>
  <hr><br><br>
  <div class="lowerContainer">
    <div class="data">
      <div class="title">
        <p>event.key</p>
      </div>
      <div class="variable" id="eventKey">
        <P>${(e.key==" ")? 'Space':e.key}</P>
      </div>
      <div class="card-info">
        <p><small>This property shows key that was pressed during a keyboard event.</small></p>
      </div>
    </div>
    <div class="data">
      <div class="title">
        <p>event.code</p>
      </div>
      <div class="variable" id="eventCode">
        <div class="variable-data">
          <p>${e.code}</p>
        </div>

      </div>
      <div class="card-info">
        <p><small>This property provides information about the physical key code associated with a keyboard event</small></p>
      </div>
    </div>
    <div class="data">
      <div class="title">
        <p>event.which</p>
      </div>
      <div class="variable" id="more">
        <div class="variable-data">
          <P>${e.which}</P>
        </div>
      </div>
      <div class="card-info">
        <p>event.which and event.keyCode are deprecated in modern browsers.</p>

      </div>
    </div>
    <div class="data">
      <div class="title">
        <p>event.location</p>
      </div>
      <div class="variable">
        <div class="variable-data" id="event-location">
          <p>${e.location}</p>
        </div>

      </div>
      <div class="card-info">

      </div>
    </div>
    <div class="data">
      <div class="title">
        <p>event dump</p>
      </div>
      <div class="variable" id="meta-data">
          <p>{<br>
            "key": ${e.key},<br>
            "keyCode": ${e.keyCode},<br>
            "which": ${e.which},<br>
            "code": "${e.code},<br>
            "location": ${e.location},<br>
            "altKey": ${e.altKey},<br>
            "ctrlKey": ${e.ctrlKey},<br>
            "metaKey": ${e.metaKey},<br>
            "shiftKey": ${e.shiftKey},<br>
            "repeat": ${e.repeat}<br>}
            </p>
        
      </div>
    </div>
   
   
  </div>  
`;

const lowerContainer = document.querySelector('.lowerContainer');

const dataHistory = document.createElement('div');
dataHistory.classList.add('history');
dataHistory.classList.add('data');

const title = document.createElement("div");
title.classList.add('title');
const historyTitle = document.createElement('p');
historyTitle.innerText = "History";
title.append(historyTitle);
dataHistory.append(title);

const variable = document.createElement('div');
variable.classList.add('variable');
const ul = document.createElement('div');
ul.classList.add('history-data');
variable.append(ul);
dataHistory.append(variable);

lowerContainer.append(dataHistory);



const historydata = document.querySelector('.history-data');

historyArray.forEach(i=>{
  console.log(i);
  var item = document.createElement('div');
  item.classList.add('item');
  item.innerHTML=`|&nbsp&nbsp${i}&nbsp&nbsp|`;
  historydata.append(item);
});
if(historyArray.length==70){
  historyArray.shift();
}
if(e.which==27){
  historyArray.push("esc");
}else if(e.which==45){
  historyArray.push("insert");
}
else if(e.which==34){
  historyArray.push("PgDown");
}
else if(e.which==8){
  historyArray.push("backSpace");
}
else if(e.which==32){
  historyArray.push("Space");
}
else if(e.which==91){
  historyArray.push("f1");
}


else{
  historyArray.push(e.key);
}





if(e.location=="0"){
  const variabledata=document.querySelector("#event-location");
  variabledata.innerHTML="<p>General Keys</p>";

}else if(e.location=="1"){
  const variabledata=document.querySelector("#event-location");
  variabledata.innerHTML="<p>Left Side keys</p>";
}
else if(e.location=="3"){
  const variabledata=document.querySelector("#event-location");
  variabledata.innerHTML="<p>NumPad</p>";
  
}else if(e.location=="2"){
  const variabledata=document.querySelector("#event-location");
  variabledata.innerHTML="<p> Right Side Keys</p>";
}
// history(e);
};

const pressedKey= window.addEventListener('keydown',onpress);
