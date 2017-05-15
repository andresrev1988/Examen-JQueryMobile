function cambiarPagina(page) {
	$.mobile.changePage("#" + page, {
        transition: "flip"
    });
}

$(document).ready(function() {
	$(".btnVolverInicio").click(function() {
        cambiarPagina("inicio");
    });
    $("#btnRegistraHotel").click(function() {
        cambiarPagina("registraHotel");
    });
    $(".btnListarHoteles").click(function() {
        cambiarPagina("listaHoteles");
    });
    $("#btnGuardarHotel").click(function() {
        cambiarPagina("inicio");
    });
});
