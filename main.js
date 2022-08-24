let button = document.getElementById("main-button")
let turnik = document.getElementById("turnik")
let counter = document.getElementById("main-counter")
let mainContainer = document.getElementById("main-container")
let counterValue = 0

function exercise() {
    if(counterValue < 29){
    turnik.style.backgroundPosition = "100%"
    counterValue++
    counter.innerHTML = counterValue + " из 30"
} else {
    let randomValue = Math.floor(Math.random()*2)
    console.log(randomValue)
    document.body.style.background = "rgba(0, 0, 0, 0.363)"
    document.getElementById("overlay").style.display = "block"
    if(randomValue == 1){
        console.log("Успех!!")
        document.getElementById("alert-box-text").innerHTML = "<h1>УСПЕХ!</h1>"
        document.getElementById("alert-box-image").style.backgroundPosition = "0%"
        document.getElementById("alert-box-button").innerHTML = "Накачаться еще раз"
    } else {
        console.log("Провал!!(")
        document.getElementById("alert-box-text").innerHTML = "<h1>ПРОВАЛ!</h1>"
        document.getElementById("alert-box-image").style.backgroundPosition = "100%"
        document.getElementById("alert-box-button").innerHTML = "Попробовать еще раз"
    }
}
}
button.onmousedown = function(){
    exercise()
}
button.onmouseup = function() {
    turnik.style.backgroundPosition = "0%"
}
button.ontouchstart = function(){
    turnik.style.backgroundPosition = "100%"
}
button.ontouchmove = function(){
    exercise()
}
button.ontouchend = function() {
    turnik.style.backgroundPosition = "0%"
}



