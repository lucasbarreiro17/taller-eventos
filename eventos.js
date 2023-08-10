const miDiv = document.getElementById("divBtn");



miDiv.addEventListener("click", function() {
    alert("Hola! Soy el div");
    event.stopPropagation();
});