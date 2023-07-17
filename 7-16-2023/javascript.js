


let color = document.getElementById("color");

console.log(color)
color.onchange = function () {
    document.body.style=`background:${color.value}`
    window.sessionStorage.setItem("color",`${color.value}`)
}
