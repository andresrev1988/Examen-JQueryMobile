function cambiarPagina(page) {
	$.mobile.changePage("#" + page, {
        transition: "flip"
    });
}
function limpiarCampos(){
	$("#nombre").val("");
	$("#ciudad").val("");
	$("#telefono").val("");
	$("#estrellas").val("");	
}
function cargaHotel(id,hoteles){
	$("#"+id).click(function(){	    	
		$("#nombreListar").html(hoteles[id].nombre);
		$("#ciudadListar").html(hoteles[id].ciudad);
		$("#telefonoListar").html(hoteles[id].telefono);
		$("#estrellasListar").html(hoteles[id].estrellas);	
		cambiarPagina("describeHotel");    					    		
   	});   
}
$(document).ready(function() {
	var hoteles = [];
	
	$(".btnVolverInicio").click(function() {
        cambiarPagina("inicio");
    });

    $("#btnRegistraHotel").click(function() {
        cambiarPagina("registraHotel");
    });

    $(".btnListarHoteles").click(function() {      	
    	cambiarPagina("listaHoteles");
    	$('ul').empty();      	
    	for (var i = 0; i < hoteles.length; i++) {      		
    		var item = "<li><a id="+i+">"+hoteles[i].nombre+"</a></li>"        	                                    	        	    	    		
    		$('ul').append(item);     		
    		cargaHotel(i,hoteles);						    	
        }        
        $('ul').listview('refresh');
    });    

    $("#btnGuardarHotel").click(function() {
		var nombre = $("#nombre").val();
		var ciudad = $("#ciudad").val();
		var telefono = $("#telefono").val();
		var estrellas = $("#estrellas").val();
		if(nombre==""||ciudad==""||telefono==""||estrellas==""){
			alert("Todos los campos son necesarios!!!");
		}else{
			var hotel = {
				nombre : nombre,
				ciudad : ciudad,
				telefono : telefono,
				estrellas : estrellas
			}
			hoteles.push(hotel);
			alert ("Hotel Registrado")
			limpiarCampos();
			cambiarPagina("inicio");
		}
	});       	
});