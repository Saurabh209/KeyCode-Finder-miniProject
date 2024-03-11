function onclick(){
    const newdata=document.createElement("<tr>");
    tr.innerHTML=`<tr>
                  <td>data1</td>
                  <td>data2</td>
                  <td>data1</td>
                  <td>data2</td>
                  </tr>`;
    const table=document.querySelector(".table");
    table.append('newdata');
    
}


const button=document.querySelector("#button");
button.addEventListener('click',onclick);