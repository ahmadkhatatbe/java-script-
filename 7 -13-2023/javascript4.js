let typefont = document.getElementById("typefont");
let text = document.getElementById("txt")
let size =document.getElementById("size")
let italic= document.getElementById("italic")
let bold = document.getElementById("bold")
let under = document.getElementById("under")


typefont.addEventListener("change",alltype)
function alltype() {
    if(typefont.value === "Times New Roman"){
        txt.style=" font-family: 'Times New Roman', Times, serif"
    }else if(typefont.value === "courier"){
        txt.style=" font-family: 'Courier New', Courier, monospace;"
    }else if(typefont.value === "gillsans"){
        txt.style=" font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;"
    }


    size.addEventListener("change",sizeall)
function sizeall() {
    if(size.value === "20px"){
        txt.style=`font-size:20px; font-family:${typefont.value} ` 
    }else if(size.value === "15px"){
        txt.style=`font-size:15px ; font-family:${typefont.value}` 
    }
    
}
}

italic.onchange =function () {
    if (italic.checked ) {
        txt.style=`font-style: italic; font-size:${size.value};font-family:${typefont.value} `
    
    }
  else if(!italic.checked ){
    txt.style=`font-style: normal;font-size:${size.value};font-family:${typefont.value}`
    }
    
    
}

bold.onchange =function () {
    if (bold.checked) {
        txt.style=`font-weight: bold;font-size:${size.value};font-family:${typefont.value};font-style:${italic.value} ;`
    }
  else  {
    txt.style=`font-weight:normal;font-size:${size.value};font-family:${typefont.value};font-style:${italic.value} ;`
}
    
    
}
under.onchange =function () {
    if (under.checked) {
        txt.style=` text-decoration:underline; font-size:${size.value}; font-family:${typefont.value}; font-weight: ${bold.value};font-style:${italic.value} ;`
    }
  else   {
    txt.style=` text-decoration:none; font-size:${size.value}; font-family:${typefont.value}; font-weight:${bold.value};font-style:${italic.value} ;`
}
    
    
}