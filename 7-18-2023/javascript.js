


let myrequest = new XMLHttpRequest();
myrequest.open("GET","https://api.github.com/users/ahmadkhatatbe/repos")
myrequest.send()

myrequest.onload = function () {

let data= JSON.parse(myrequest.responseText)
let dataprint= document.getElementById("data")
let button= document.getElementById("button")
console.log(data);

let divdata = ``
button.onclick = function () {
   
    for (let i = 0; i < data.length; i++) {
    divdata +=` <tr>
                <th>${data[i].name}</th>
                <th>${data[i].full_name}</th>
                <th>${data[i].id}</th>
                <th><a href="${data[i].html_url}">Visit</a></th>
               
        </tr>`
        
        dataprint.innerHTML=divdata;
    
}

}

    
        
    
    
}






