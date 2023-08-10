const miDiv = document.getElementById("divBtn");
const Btn = document.getElementById("Btn");


miDiv.addEventListener("click", function() {
    alert("Hola! Soy el div");
    
});
Btn.addEventListener("click", function() {
    alert("Hola");
    event.stopPropagation();
})