// Fecha objetivo (año, mes (0-11), día, horas, minutos, segundos)
var fechaObjetivo = new Date("2024-12-31T23:59:59").getTime();

var x = setInterval(function() {
    var ahora = new Date().getTime();

    var diferencia = fechaObjetivo - ahora;

    var dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    var horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    var segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById("contador").innerHTML = dias + "d " + horas + "h "
    + minutos + "m " + segundos + "s ";

    if (diferencia < 0) {
        clearInterval(x);
        document.getElementById("contador").innerHTML = "Tiempo expirado";
    }
}, 1000);
