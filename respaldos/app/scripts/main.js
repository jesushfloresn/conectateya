$(document).ready(function(){	
	//===>  <===	
	ajustesSeccionPortada();
	ajustesSeccionBiografia();
	ajustesSeccionAreas();
	//===> <===
	//Karla
	ajustarSeccionContacto();
	// Fin Karla
	//--
	$('.nav li').click(function(event) {		
		//Tomando el elemento li - activo anteriormente
		var elOldActive = $('li.ys-active');
		$('.nav li').removeClass('ys-active');
		$(this).addClass('ys-active');
		var idSeccionGrid = null;
		var elUnico = null;
		if($(this).hasClass('ys-area')){
			idSeccionGrid = $(this).find('a').attr('data-Href');
			idSeccionGrid = $('' + idSeccionGrid);
			if($(elOldActive).hasClass('ys-area')){
				var idSeccionGridOld = $(elOldActive).find('a').attr('data-Href');				
				idSeccionGridOld = $('' + idSeccionGridOld);
				//--Validando el grid a mostrar, según el elemento elegido
				//--No tiene caso cambiar el grid si es el mismo que se esta mostrando
				elUnico = obtenerElementoUnico($('.ys-seccion-thinking'), 'ys-hidde');
				if(!($(elUnico).attr('id') === $(idSeccionGrid).attr('id'))){
					//--El grid mostrado 'no' es el mismo que el elegido
					mostrarOcultarSeccion($(idSeccionGrid), $(idSeccionGridOld), 'animated fadeIn', 'animated fadeOut');
				}
			}
			else{//Comparar consigo mismo sección grid
				elUnico = obtenerElementoUnico($('.ys-seccion-thinking'), 'ys-hidde');				
				//Validando el grid a mostrar, según el elemento elegido
				if($(elUnico).attr('id') != $(idSeccionGrid).attr('id')){
					//El grid mostrado 'no' es el mismo que el elegido
					mostrarOcultarSeccion($(idSeccionGrid), $(elUnico), 'animated fadeIn', 'animated fadeOut');
				}
			}
		}
		setTimeout(function(){
			$('.ys-logo-item').alinearElementoRelativoV($('.ys-item'));
		}, 1500);
		
		//Primer Click en menu, en área, despues de abierta la página
		event.preventDefault();
	});
	//--
	$('.navbar-brand').click(function(event) {
		/* Act on the event */
		$('.nav li').removeClass('ys-active');
	});

	$('.ys-content-presupuesto .ys-icon').click(function(event) {
		realizarPresupuesto($(this));

	});	
	//---Boton Ver - Sección Conexiones
	$('.ys-seccion-conexiones .ys-content-btn .ys-btn').click(function() {
		mostrarOcultarSeccion($('.ys-seccion-conexiones .ys-content-conexion2'), $('.ys-seccion-conexiones .ys-content-conexion1'), 'animated bounceInRight', 'animated fadeOutLeft');
	});
	$('.ys-seccion-conexiones .ys-content-conexion2 .ys-btn-cerrar').click(function() {
		mostrarOcultarSeccion($('.ys-seccion-conexiones .ys-content-conexion1'), $('.ys-seccion-conexiones .ys-content-conexion2'), 'animated bounceInLeft', 'animated fadeOutRight');
	});
	
	//--- Evento para mostrar, ocultar productos
	/*
	$('.ys-item .ys-logo-item span img').click(function(event) {		
		var idProducto = '#' + $(this).attr('data-idProducto');
		var idSeccionGrid = '#' + $(this).attr('data-idSeccionGrid');
		var myCall = null;
		mostrarOcultarSeccion($(idProducto), $(idSeccionGrid), 'animated bounceInLeft', 'animated fadeOutRight');
		myCall = setInterval(ajustarImagesCarousel, 300);
	});
	*/

	$('.ys-cerrar-detallesproducto').click(function(event){
		var idProducto = '#' + $(this).attr('data-idProducto');
		var idSeccionGrid = '#' + $(this).attr('data-idSeccionGrid');		
		mostrarOcultarSeccion($(idSeccionGrid), $(idProducto), 'animated bounceInLeft', 'animated fadeOutRight');		
	});
	//--- Fin - Evento para mostrar, ocultar productos
	//---
		//===>Sección - Design
	//---
	$('#btn-especificaciones-design').click(function() {		
		mostrarOcultarSeccion($('#thinking-design-especificaciones'), $('#thinking-design'), 'animated bounceInRight', 'animated fadeOutLeft');
	});
	$('#btn-cerrar-especificaciones-design').click(function(event) {
		mostrarOcultarSeccion($('#thinking-design'), $('#thinking-design-especificaciones'), 'animated bounceInLeft', 'animated fadeOutRight');
	});	
	//---Fin - Sección - Design

	//---Seccion - Especificaciones
	$('#btn-especificaciones-proceso-design').click(function(event) {
		mostrarOcultarSeccion($('#thinking-design-proceso'),$('#thinking-design-especificaciones'), 'animated bounceInRight', 'animated fadeOutLeft');
	});
	$('#btn-cerrar-especificaciones-proceso').click(function(event) {
		mostrarOcultarSeccion($('#thinking-design-especificaciones'), $('#thinking-design-proceso'), 'animated bounceInLeft', 'animated fadeOutRight');
	});
	//--- Fin - Seccion - Especificaciones
	//---
		//===> Fin - Design <===
	//---
	//---
		//===> Marketing <===
	//---	
	//---Sección - Marketing
	$('#btn-especificaciones-marketing').click(function() {		
		mostrarOcultarSeccion($('#thinking-marketing-especificaciones'), $('#thinking-marketing'), 'animated bounceInRight', 'animated fadeOutLeft');
	});
	$('#btn-cerrar-especificaciones-marketing').click(function(event) {
		mostrarOcultarSeccion($('#thinking-marketing'), $('#thinking-marketing-especificaciones'), 'animated bounceInLeft', 'animated fadeOutRight');
	});	
	//---Fin - Sección - Marketing
	//---Seccion - Especificaciones
	$('#btn-especificaciones-proceso-marketing').click(function(event) {
		mostrarOcultarSeccion($('#thinking-marketing-proceso'),$('#thinking-marketing-especificaciones'), 'animated bounceInRight', 'animated fadeOutLeft');
	});
	$('#btn-cerrar-especificaciones-proceso-marketing').click(function(event) {
		mostrarOcultarSeccion($('#thinking-marketing-especificaciones'), $('#thinking-marketing-proceso'), 'animated bounceInLeft', 'animated fadeOutRight');
	});//--- Fin - Seccion - Especificaciones
	//---
		//===> Fin - Marketing <===
	//---
	//---
		//===> Arquitectura <===
	//---	
	//---Arquitectura
	$('#btn-especificaciones-arquitectura').click(function() {		
		mostrarOcultarSeccion($('#thinking-arquitectura-especificaciones'), $('#thinking-arquitectura'), 'animated bounceInRight', 'animated fadeOutLeft');
	});
	$('#btn-cerrar-especificaciones-arquitectura').click(function(event) {
		mostrarOcultarSeccion($('#thinking-arquitectura'), $('#thinking-arquitectura-especificaciones'), 'animated bounceInLeft', 'animated fadeOutRight');
	});	
	//---Fin - Sección - Arquitectura
	//---Seccion - Especificaciones
	$('#btn-especificaciones-proceso-arquitectura').click(function(event) {
		mostrarOcultarSeccion($('#thinking-arquitectura-proceso'),$('#thinking-arquitectura-especificaciones'), 'animated bounceInRight', 'animated fadeOutLeft');
	});
	$('#btn-cerrar-especificaciones-proceso-arquitectura').click(function(event) {
		mostrarOcultarSeccion($('#thinking-arquitectura-especificaciones'), $('#thinking-arquitectura-proceso'), 'animated bounceInLeft', 'animated fadeOutRight');
	});
	//---
		//===> Fin - Arquitectura <===
	//---
	//---
		//===> Web <===
	//---
	//--Web
	$('#btn-especificaciones-web').click(function() {		
		mostrarOcultarSeccion($('#thinking-web-especificaciones'), $('#thinking-web'), 'animated bounceInRight', 'animated fadeOutLeft');
	});
	$('#btn-cerrar-especificaciones-Web').click(function(event) {
		mostrarOcultarSeccion($('#thinking-web'), $('#thinking-web-especificaciones'), 'animated bounceInLeft', 'animated fadeOutRight');
	});	
	//---Fin - Sección - web
	//---Seccion - Especificaciones
	$('#btn-especificaciones-proceso-web').click(function(event) {
		mostrarOcultarSeccion($('#thinking-web-proceso'),$('#thinking-web-especificaciones'), 'animated bounceInRight', 'animated fadeOutLeft');
	});
	$('#btn-cerrar-especificaciones-proceso-web').click(function(event) {
		mostrarOcultarSeccion($('#thinking-web-especificaciones'), $('#thinking-web-proceso'), 'animated bounceInLeft', 'animated fadeOutRight');
	});
	//---
		//===> Fin - web <===
	//---

	$('.nav li a').click(function(event) {
		if($('.navbar-collapse').hasClass('in')){
			$('.navbar-collapse').removeClass('in');
		}
	});

	$('#ys-btn-contacto').click(function(event) {
		if($(window).height() > 992){
			setTimeout(function(){
				dimensionarMinAltoElemento($('#ys-modalContacto #formContent'), $('#ys-modalContacto #formContent .ys-col-1'));
				dimensionarMinAltoElemento($('#ys-modalContacto #formContent'), $('#ys-modalContacto #formContent .ys-col-2'));			
			}, 500);
		}
	});

});

$(window).resize(function(event) {	
	ajustesSeccionPortada();
	ajustesSeccionBiografia();
	ajustesSeccionAreas();	
	//Karla
	ajustarSeccionContacto();
	// Fin Karla
});//-Fin - Resize

//--
	//--Funciones
//--
function ajustesSeccionPortada(){
	var elSeccion = $('.ys-seccion-inicio');
	var anchoWindow = $(window).outerWidth();
	var altoWindow = $(window).outerHeight();
	if(anchoWindow > 992){
		$(elSeccion).css({
			'min-height' : altoWindow + 'px'
		});
		if(altoWindow < 930){
			$('.ys-seccion-inicio > .container').addClass('ys-relative');
		}
		else{
			$('.ys-seccion-inicio > .container').removeClass('ys-relative');
		}
	}
	else{
		$(elSeccion).css({
			'min-height' : altoWindow + 'px'
		});
	}
}

function ajustesSeccionBiografia(){	
	dimensionarMinAltoElemento($(window), $('.ys-seccion-conexiones'));
	a_dimensionarAltoElemento($('.ys-seccion-conexiones .ys-colext-1'), $('.ys-seccion-conexiones .ys-colext-2'));
}

function ajustesSeccionAreas(){
	$('[data-nameSection=sectionThinking-detallesproducto] .ys-colext-2').css({
		'height' : $('[data-nameSection=sectionThinking-detallesproducto] .ys-colext-1').outerHeight() + 'px'
	});	
	//---
	
	if($(window).width() > 768){
		dimensionarMinAltoElementoSinMenu($(window), $('.ys-seccion-thinking .ys-colext-1'));
		dimensionarMinAltoElementoSinMenu($(window), $('.ys-seccion-thinking .ys-colext-2'));
	}
	else{
		$('.ys-seccion-thinking .ys-colext-1').css({
			'min-height' : (($(window).height() / 3 ) * 2) + 'px'
		});
	}

	dimensionarGridImages($('.ys-contentgrid-cuadro'));
	ajustarImagesCarousel();
	$('.ys-logo-item').alinearElementoRelativoV($('.ys-item'));
}

//--Dimensionar Elemento Alto
function dimensionarGridImages(elementoPadre){
	var anchoContent = $(elementoPadre).width();	
	var numElementos =  $(elementoPadre).attr('data-numCols');	
	var tipoItem = $(elementoPadre).attr('data-typeElement');
	//=== items son cuadros
	//-- retangulo-v
	//-- retangulo-h
	if(tipoItem === 'cuadro'){
		var itemAncho = (anchoContent) / numElementos;		
		$('.ys-item').css({
			'height' : itemAncho + 'px',
			'width' : itemAncho + 'px'
		});
	}
}

function a_dimensionarAltoElemento(referenciaAlto, elemento){
	$(elemento).animate({
		height : $(referenciaAlto).outerHeight() + 'px'
	});
}

function dimensionarMinAltoElemento(referenciaAlto, elemento){
	$(elemento).css({
		'min-height' : $(referenciaAlto).outerHeight() + 'px'
	});
}

function dimensionarMinAltoElementoSinMenu(referenciaAlto, elemento){
	$(elemento).css({
		'min-height' : ($(referenciaAlto).outerHeight() - $('.nav').outerHeight()) + 'px'
	});
}

function realizarPresupuesto(elemento){	
	var typePresupuesto = $(elemento).attr('data-typePresupuesto');
	var itemLabelTotal = null;
	var valorTotal = 0;
	var $itemTotal = null;

	//--Design
	if(typePresupuesto === 'type-design-col1'){		
		$itemTotal = $('#ys-totaldesign-col1');
	}
	if(typePresupuesto === 'type-design-col2'){
		$itemTotal = $('#ys-totaldesign-col2');
	}
	if(typePresupuesto === 'type-design-col3'){
		$itemTotal = $('#ys-totaldesign-col3');
	}
	//-- Fin - Design

	//--Marketing
	if(typePresupuesto === 'type-marketing-col1'){		
		$itemTotal = $('#ys-totalmarketing-col1');
	}
	if(typePresupuesto === 'type-marketing-col2'){
		$itemTotal = $('#ys-totalmarketing-col2');
	}
	if(typePresupuesto === 'type-marketing-col3'){
		$itemTotal = $('#ys-totalmarketing-col3');
	}
	//-- Fin - Marketing

	//--Marketing
	if(typePresupuesto === 'type-arqui-col1'){		
		$itemTotal = $('#ys-totalarqui-col1');
	}
	if(typePresupuesto === 'type-arqui-col2'){
		$itemTotal = $('#ys-totalarqui-col2');
	}
	if(typePresupuesto === 'type-arqui-col3'){
		$itemTotal = $('#ys-totalarqui-col3');
	}
	//-- Fin - Marketing

	//--Web
	if(typePresupuesto === 'type-web-col1'){		
		$itemTotal = $('#ys-totalweb-col1');
	}
	if(typePresupuesto === 'type-web-col2'){
		$itemTotal = $('#ys-totalweb-col2');
	}
	if(typePresupuesto === 'type-web-col3'){
		$itemTotal = $('#ys-totalweb-col3');
	}
	//-- Fin - Web

	//--Cálculos Suma
	if($(elemento).hasClass('ys-inactive')){
		$(elemento).removeClass('ys-inactive');
		$(elemento).addClass('ys-active');

		valorTotal = parseInt($($itemTotal).attr('data-valorTotal'));
		valorTotal = valorTotal + parseInt($(elemento).attr('data-valorPresupuesto'));
		$($itemTotal).attr('data-valorTotal' , valorTotal);
		$($itemTotal).html('0.00');
		$($itemTotal).html(valorTotal);
	}
	else{
		if($(elemento).hasClass('ys-active')){
			$(elemento).removeClass('ys-active');
			$(elemento).addClass('ys-inactive');

			valorTotal = parseInt($($itemTotal).attr('data-valorTotal'));
			valorTotal = valorTotal - parseInt($(elemento).attr('data-valorPresupuesto'));
			$($itemTotal).attr('data-valorTotal' , valorTotal);
			$($itemTotal).html('0.00');
			$($itemTotal).html(valorTotal);
		}
	}
}
//===>

//===
function ajustarImagesCarousel(){
	$('.carousel-inner .item img').css({
		'height' : $('[data-nameSection=sectionThinking-detallesproducto] .ys-colext-1').outerHeight() + 'px',
		'width' : '100%'
	});
}

//---===
function mostrarOcultarSeccion(elementoEntrada, elementoSalida, animacionEntrada, animacionSalida){	
	var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	$(elementoSalida).addClass(animacionSalida).one(animationEnd, function(){
		$(this).addClass('ys-hidde');
		$(this).removeClass(animacionSalida);
		$(elementoEntrada).removeClass('ys-hidde').addClass(animacionEntrada).one(animationEnd, function(){
			$(this).removeClass(animacionEntrada);
		});
	});
}

//---
function obtenerElementoUnico(listaElementos, txtClass){
	var elReturn = null;
	$(listaElementos).each(function(index, el) {
		if(!($(el).hasClass(txtClass))){			
			elReturn = $(el);
		}
	});
	return elReturn;
}

/*
function alinearElementoRelativoV(elHijo, elPadre){
	$(elHijo).css({
		'marginTop' : (($(elPadre).outerHeight() - $(elHijo).outerHeight()) / 2) + 'px'
	});
}*/

//---===
//-Funciones Sección Conexiones
//===
//---===
//---Función AnimateCss
//---===
$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});

$.fn.extend({
	mostrarSeccion: function(classAnimation){
		var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		$(this).removeClass('ys-hidde');
		this.addClass(classAnimation).one(animationEnd, function(){			
			$(this).removeClass(classAnimation);
		});		
	}
});

$.fn.extend({
	ocultarSeccion: function(classAnimation){
		var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';		
		this.addClass(classAnimation).one(animationEnd, function(){
			$(this).addClass('ys-hidde');
			$(this).removeClass(classAnimation);			
		});		
	}
});

//alinearElementoRelativoV
$.fn.extend({
	alinearElementoRelativoV: function(elementoPadre){		
		this.each(function(index, el) {			
			$(el).css({
				'margin-top' : (($(elementoPadre).outerHeight() - $(el).outerHeight()) / 2) + 'px'
			});
		});
	}
});

//===== Inicio Karla

function centrarVerticalDosContenedores(elementoTrasero, elementoDelantero){
	var altoTrasero = $(elementoTrasero).height();
	var altoDelantero = $(elementoDelantero).height();
	var mTop = 0;

	if(altoTrasero < altoDelantero){
		mTop = (altoDelantero - altoTrasero) / 2;
		$(elementoDelantero).css({
			'margin-top' : -(altoTrasero + mTop) + 'px'
		});
	}
	return mTop;
}

//-- Ajustar sección contacto
function ajustarSeccionContacto(){
	//---Dimensionar seccion - al tamaño del contenedor		
	//---Centrar Cuadro de contacto (Azul -> En barra azul marino)
	var marginExtraN = 0;
	
	if($(window).width() < 768){
		$('.ys-seccion-contacto .ys-cuadro-contacto').css({
			'margin-top' : 0
		});
	}
	else{
		marginExtraN = centrarVerticalDosContenedores($('.ys-seccion-contacto .ys-content-pleca'), $('.ys-seccion-contacto .ys-cuadro-contacto'));
		$('.ys-footer').css({
			'margin-top' : (- marginExtraN) + 'px'
		});
	}

	if($(window).width() < 768){
		$('.ys-cuadro-contacto .ys-col-2').css({
			'height' : '250px'
		});	
	}
	else{
		$('.ys-cuadro-contacto .ys-col-2').css({
			'height' : $('.ys-cuadro-contacto').height() + 'px'
		});
	}
	//---Activar Mask
	$('.ys-telefono').mask('(000)-000-0000');
	//ajustarSeccionFooter();
}//--Fin ajustar sección contacto

//--- Sección Contacto
function enviarEmail(){
	var valid;
	valid = validarContacto();
	if(valid === true){	
		$('#formContent .ys-content-btn').html('');
		var data = {
			nombre : $('#userName').val(),
			telefono : $('#userPhone').val(),
			email : $('#userEmail').val(),
			mensaje : $('#userMessage').val()
		};
		$.ajax({
		    type: 'POST',
		    url: 'sendmail.php',
		    data: data,
		    success: function(){
		    	console.log('ajax');	        		        
		        $('#formContent .ys-hiddeform').html('');			    
			    $('.ys-msjConfirmacion').addClass('ys-show');
		    },
		    error: function(){
		    }
		});

	}
	else
	{
		console.log('Diste click en enviar y esta vacio...');
	}
}

function validarContacto(){
	var valid = true;
	var msj = 'Los campos: ';
	if(($('#userName').val() === '')){
		msj = msj + ' *Nombre y apellidos, ';
		valid = false;
	}
	if(($('#userEmail').val() === '')){
		msj = msj + ' *Correo electrónico, ';
		valid = false;
	}
	if(($('#userPhone').val()) === ''){
		msj = msj + ' *Teléfono, ';
		valid = false;
	}
	if(($('#userMessage').val() === '')){
		msj = msj + ' *Mensaje, ';
		valid = false;
	}

	if(!valid){
		msj = msj + ' son necesarios para poder contactarte, ¡llénalos porfavor!';
		$('.ys-msj-info').html('' + msj);
	}
	else{
		msj = '';
		$('.ys-msj-info').html('' + msj);
	}
	return valid;
}
//--- Fin - Sección Contacto

//===== Fin Karla