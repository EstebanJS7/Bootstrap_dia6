function toggleRow(rowNumber) {
    var row = document.getElementsByClassName("col")[rowNumber];
    var allRows = document.getElementsByClassName("col");

    // Verificar si la fila está actualmente oculta
    var isHidden = row.classList.contains("d-none");

    // Ocultar todas las filas antes de mostrar la seleccionada
    for (var i = 0; i < allRows.length; i++) {
        allRows[i].classList.add("d-none");
    }

    // Mostrar la fila seleccionada solo si estaba oculta previamente
    if (isHidden) {
        row.classList.remove("d-none");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var submenuToggle = document.querySelectorAll(".submenu-toggle");
    
    submenuToggle.forEach(function(toggle) {
        toggle.addEventListener("click", function() {
        this.classList.toggle("active");
        });
     });
});