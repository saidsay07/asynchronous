// Синхронный код
console.log("start")
console.log("value")
console.log("end")

// Асинхронный код
document.querySelector("button").addEventListener("click", function () {
    console.log("button clicked")
})

window.setTimeout(function () {
    console.log("inside timeout")
},1000)

window.setTimeout(function () {
    console.log("inside timeout")
},0)

window.setInterval(function () {
    console.log("inside interval")
}, 1000)