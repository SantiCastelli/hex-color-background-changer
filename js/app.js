// Implementar solución aquí

let cambiarBody = document.querySelector("#btn");


cambiarBody.addEventListener("click", function () {
    console.log("estoy aca");
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.querySelector("body").style.backgroundColor = "#" + randomColor;
    document.querySelector("#hex-value").textContent =   "#" + randomColor;
})