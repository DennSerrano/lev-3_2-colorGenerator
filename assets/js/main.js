let red = document.getElementById("red")
let green = document.getElementById("green")
let blue = document.getElementById("blue")
let body = document.getElementById("body")

function color() {

    body.style.backgroundColor = "rgba(" + red.value + "," + green.value + "," + blue.value + ")"
}
