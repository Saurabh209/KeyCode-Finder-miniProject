function onpress(e){
    const data=document.querySelector(".afterContainer");
    data.innerHTML=`<div class="upperContainer">
    <h2>KeyPressed: ${e.key} </h2><br><h1 style="font-size:150px">${e.which}</h1><br><h5> The keyCode
  </div>
  <hr><br><br>
  <div class="lowerContainer">
    <div class="data">
      <div class="title">
        <p>event.key</p>
      </div>
      <div class="variable" id="eventKey">
        <P>${e.key}</P>
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
        <p>More</p>
      </div>
      <div class="variable" id="more">
        <div class="variable-data">
          <P>${e.keyCode}</P>
        </div>
      </div>
      <div class="card-info">

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
  </div>  
`;

if(e.location=="0"){
  const variabledata=document.querySelector("#event-location");
  variabledata.innerHTML="<p>General Keys</p>";
  console.log("character");

}else if(e.location=="1"){
  const variabledata=document.querySelector("#event-location");
  variabledata.innerHTML="<p>Left Side keys</p>";
  console.log("numbers");
}
else if(e.location=="3"){
  const variabledata=document.querySelector("#event-location");
  variabledata.innerHTML="<p>NumPad</p>";
  console.log("numpad");
  
}else if(e.location=="2"){
  const variabledata=document.querySelector("#event-location");
  variabledata.innerHTML="<p> Right Side Keys</p>";
  console.log("numbers");
}

};
const pressedKey= window.addEventListener('keydown',onpress);