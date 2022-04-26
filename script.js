function operacion() {
    var R1 = parseFloat(document.getElementById('R1').value);
    var R2 = parseFloat(document.getElementById('R2').value);
    var R3 = parseFloat(document.getElementById('R3').value);
    var Rserie = R1 + R2 + R3;
    var Rparalelo = 1 / ((1 / R1) + (1 / R2) + (1 / R3));
    resul1 = document.getElementById("Serie");
    resul2 = document.getElementById("Paralelo");
    resul1.innerHTML = Rserie;
    resul2.innerHTML = Rparalelo;
    resul1.innerHTML = Rserie.toFixed(2);
    resul2.innerHTML = Rparalelo.toFixed(2);
}