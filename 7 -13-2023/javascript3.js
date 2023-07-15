













let mianselect = document.getElementById("select")
let options = document.getElementById("options");
let img = document.getElementById("image");

mianselect.addEventListener("click",all);

function all() {
if (mianselect.value === "jordan") {
    img.src = "/7 -13-2023/download.jpg"
}else if( mianselect.value === "palestine"){
    img.src = "/7 -13-2023/download (1).jpg"
}
}


