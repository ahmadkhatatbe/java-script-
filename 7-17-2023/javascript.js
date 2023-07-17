let data = document.getElementById("data");
let button = document.getElementById("button")

let myrequest = new XMLHttpRequest();
myrequest.onload= function () {
    let datajson= JSON.parse(this.responseText)

    
let info = ` `
button.onclick = function () {
   for(const key in datajson){
    info +=`<tr>
    <td>${datajson[key].name}</td>
    <td>${datajson[key].age}</td>
    <td>${datajson[key].major}</td>
    <td>${datajson[key].university}</td>
    <td><img src="${datajson[key].image}" alt="" width="100px" height="100px"></td>
        

</tr>`
    console.log(datajson[key].name);
   
    }
    data.innerHTML=info
   }

    
}
    


    
myrequest.open("GET","json.json",true)
myrequest.send()





