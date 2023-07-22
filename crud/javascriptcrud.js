let txt =document.getElementById("txt")
let inputsearch =document.getElementById("inputsearch")
let btnadd =document.getElementById("btn-add")
let information =document.getElementById("information")
let btndelete =document.getElementById("delete")
let btnupdate =document.getElementById("update")

let numitem;

let arr=[]
if(localStorage.infotask!=null){

arr = JSON.parse(localStorage.infotask)

}else{
    arr=[]
}


//////add////////////
 let mood = "add"
 
btnadd.onclick =function add() {
   let tasks = {
    nametask:txt.value
}

if (mood == "add") {
    arr.push(tasks)
}else if(mood=="update"){
   arr[numitem] = tasks
   btnadd.innerHTML="add"
   mood="add"
    
}

localStorage.setItem('infotask',JSON.stringify(arr))
clear()
read()
}

/////clear///////////
function clear() {
    txt.value = " "
    
}


//////read///////////

function read() {
   let ht=``;
for (let i = 0; i < arr.length; i++) {
    ht +=`
    <tr>
    <td>${arr[i].nametask}</td>
    <td>${i+1}</td>
    <td><button id="delete" onclick="dlitem(${i})">delete</button></td>
    <td><button id="update" onclick="update(${i}) ">Update</button></td>
</tr>
    `
    
}
information.innerHTML=ht

}
read()


///////////search/////////////


function search(value) {
    let ht=``
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].nametask.includes(value)) {
      
            ht +=`
        <tr>
        <td>${arr[i].nametask}</td>
        <td>${i+1}</td>
        <td><button id="delete" onclick="dlitem(${i})">delete</button></td>
        <td><button id="update" onclick="update(${i})">Update</button></td>
    </tr>`
  

       }
information.innerHTML=ht
    }
    
        }
    


/////////////////delet/////////////////
function dlitem(i) {
     
    if(confirm("you want to remove the task")){
   
    arr.splice(i,1)
    localStorage.infotask = JSON.stringify(arr)
    
}else {
    
}
read()
}

/////////////update////////////////
function update(i) {
    
    txt.value = arr[i].nametask;
    btnadd.innerHTML="update"
    mood ="update";
    numitem=i;
console.log(numitem);
}                                                                    

