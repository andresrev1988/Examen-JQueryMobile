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
		$('#describeHotel').on('pageshow', function(){		 
			mostrarMapa(hoteles[id].lat,hoteles[id].lon,"divMapa1");   					    		
		});		
		cambiarPagina("describeHotel"); 
   	});   
}

function mostrarMapa(Lat,Lon,div) {  
	var latlngInicial = new google.maps.LatLng(Lat, Lon); 	
    var opciones = {            
		zoom: 5,
		center: latlngInicial,
		mapTypeId: google.maps.MapTypeId.ROADMAP        
	};                   
	mapa = new google.maps.Map(document.getElementById(div), opciones);   
	marcador = new google.maps.Marker({            
		position: latlngInicial,
		map: mapa,
		draggable: true,
		title: "Mi punto!!"        
	});
	google.maps.event.addListener(marcador, 'dragend', function(event) {
		posicionLat = event.latLng.lat();
		posicionLon =  event.latLng.lng();								
	});
};

$(document).ready(function() {
	hoteles = [];
	posicionLat = -0.180653;
	posicionLon = -78.467834;
	$('#registraHotel').on('pageshow', function(){		 		
		mostrarMapa(posicionLat,posicionLon,"divMapa");	
	});

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
				estrellas : estrellas,
				lat : posicionLat,
				lon : posicionLon
			}
			hoteles.push(hotel);
			alert ("Hotel Registrado")
			limpiarCampos();
			cambiarPagina("inicio");
		}
	}); 	
});