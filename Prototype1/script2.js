function eventkey(){
  
}


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
          <P>---</P>
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
        <div class="variable-data">
          <p>${e.location}</p>
        </div>

      </div>
      <div class="card-info">

      </div>
    </div>
  </div>  
`;
eventkey();

};

window.addEventListener('keydown',onpress);